import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadResumeData } from '../redux/resumeData/resumeData-slice';
import {
  selectAllResumeData,
  selectResumeDataInfo,
} from '../redux/resumeData/resumeData-selectors';
import { Resume } from '../types';
import { ThunkDispatch } from '@reduxjs/toolkit';

export const useResume = (): [
  Resume | null,
  ReturnType<typeof selectResumeDataInfo>
] => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const resume = useSelector(selectAllResumeData);
  const { status, error } = useSelector(selectResumeDataInfo);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadResumeData());
    }
  }, [status, dispatch]);

  return [resume, { status, error }];
};
