import { createSlice } from '@reduxjs/toolkit';

import { getExampleAction } from './actions';
import { TExampleRes } from '@/interfaces/example';

type TExampleState = {
  detail: TExampleRes;
};

const initialState: TExampleState = {
  detail: {
    id: 0,
    category: '',
    title: '',
    image: '',
    description: '',
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
  },
};

export const userSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.detail = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getExampleAction.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice;
