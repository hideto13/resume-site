import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './config';
import { resumeDataReducer } from './resumeData/resumeData-slice';
import { previewDataReducer } from './previewPortfolio/previewPortfolio-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    resume: resumeDataReducer,
    preview: previewDataReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
