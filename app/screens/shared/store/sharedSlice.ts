import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
    },
    reducers: {
    }
});

export const {
} = sharedSlice.actions;

export default sharedSlice.reducer;