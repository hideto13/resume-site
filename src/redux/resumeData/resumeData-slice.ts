import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status, Extra, Resume } from '../../types';

export const loadResumeData = createAsyncThunk<
  { data: Resume },
  undefined,
  { extra: Extra; state: { resume: ResumeDataSlice }; rejectValue: string }
>(
  '@@resume/load-resume',
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.RESUME_DATA);
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
        resume: { status },
      } = getState();

      if (status === 'loading') {
        return false;
      }
    },
  }
);

type ResumeDataSlice = {
  status: Status;
  error: string | null;
  resumeData: Resume | null;
};

const initialState: ResumeDataSlice = {
  status: 'idle',
  error: null,
  resumeData: null,
};

const resumeDataSlice = createSlice({
  name: '@@resume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadResumeData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadResumeData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadResumeData.fulfilled, (state, action) => {
        state.status = 'received';
        state.resumeData = action.payload.data;
      });
  },
});

export const resumeDataReducer = resumeDataSlice.reducer;
