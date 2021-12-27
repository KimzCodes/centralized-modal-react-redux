import { configureStore } from '@reduxjs/toolkit';
import modal from './modalSlice';

export default configureStore({
  reducer: { modal },
});
