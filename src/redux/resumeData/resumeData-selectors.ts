import { RootState } from '../store';

export const selectResumeDataInfo = (state: RootState) => ({
  status: state.resume.status,
  error: state.resume.error,
});

export const selectAllResumeData = (state: RootState) =>
  state.resume.resumeData;
