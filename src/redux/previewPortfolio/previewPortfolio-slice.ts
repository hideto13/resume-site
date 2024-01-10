import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status, Extra, Preview } from '../../types';

export const loadPreviewData = createAsyncThunk<
  { data: string }[],
  string[],
  { extra: Extra; state: { preview: PreviewDataSlice }; rejectValue: string }
>(
  '@@resume/load-preview',
  async (urls, { extra: { client, api }, rejectWithValue }) => {
    try {
      const urlsApi = urls.map((u) => client.get(u));
      return Promise.all(urlsApi);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        preview: { status },
      } = getState();

      if (status === 'loading') {
        return false;
      }
    },
  }
);

type PreviewDataSlice = {
  status: Status;
  error: string | null;
  previewData: Preview[] | null;
};

const initialState: PreviewDataSlice = {
  status: 'idle',
  error: null,
  previewData: null,
};

const previewDataSlice = createSlice({
  name: '@@preview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPreviewData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadPreviewData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadPreviewData.fulfilled, (state, action) => {
        state.status = 'received';
        const parser = new DOMParser();
        const previewArr: Preview[] = [];
        action.payload.map((data) => {
          const doc = parser.parseFromString(data.data, 'text/html');
          const image =
            doc
              .querySelector('meta[property="og:image"]')
              ?.getAttribute('content') || '';
          const title = doc.querySelector('title')?.textContent || '';
          previewArr.push({ title, image });
        });

        state.previewData = previewArr;
      });
  },
});

export const previewDataReducer = previewDataSlice.reducer;
