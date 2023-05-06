import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isToggleOn: false,
    },
    reducers: {
        toggleAdmin: (state) => {
            state.isToggleOn = !state.isToggleOn;
            console.log('toggle admin: ', state.isToggleOn)
        },
    },
});

export const { toggleAdmin } = globalSlice.actions;

export default globalSlice.reducer;
