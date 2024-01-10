import { RootState } from '../store';

export const selectPreviewDataInfo = (state: RootState) => ({
  status: state.preview.status,
  error: state.preview.error,
});

export const selectAllPreviewData = (state: RootState) =>
  state.preview.previewData;
