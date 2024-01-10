import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadPreviewData } from '../redux/previewPortfolio/previewPortfolio-slice';
import {
  selectAllPreviewData,
  selectPreviewDataInfo,
} from '../redux/previewPortfolio/previewPortfolio-selectors';
import { Preview } from '../types';
import { ThunkDispatch } from '@reduxjs/toolkit';

export const usePreview = (
  urls: string[]
): [Preview[] | null, ReturnType<typeof selectPreviewDataInfo>] => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const preview = useSelector(selectAllPreviewData);
  const { status, error } = useSelector(selectPreviewDataInfo);

  useEffect(() => {
    if (status === 'idle' && urls.length > 0) {
      dispatch(loadPreviewData(urls));
    }
  }, [status, dispatch, urls]);

  return [preview, { status, error }];
};
