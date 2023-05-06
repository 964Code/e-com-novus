import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isToggleOn: localStorage.getItem('isToggleOn') === 'true',
    },
    reducers: {
        toggleAdmin: (state) => {
            state.isToggleOn = !state.isToggleOn;
            localStorage.setItem('isToggleOn', state.isToggleOn);
            console.log('toggle admin: ', state.isToggleOn)
        },
    },
});

export const { toggleAdmin } = globalSlice.actions;

export default globalSlice.reducer;