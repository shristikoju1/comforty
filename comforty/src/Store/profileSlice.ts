import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '', // Change items to username
    email: '', // Change items to email
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        displayUsername: (state, action) => {
            state.username = action.payload; // Update the username in state
        },
        displayEmail: (state, action) => {
            state.email = action.payload; // Update the email in state
        },
    },
}); 

export const { displayUsername, displayEmail } = profileSlice.actions;

export default profileSlice.reducer;
