// create Slice
// Initialize initial state
// Slice -> name, mention initial state, actions

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
});

export default cartSlice.reducer