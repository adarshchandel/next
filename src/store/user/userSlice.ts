import { createSlice } from "@reduxjs/toolkit"
interface ILoggedInUser {
    token: string,
    userId: null | string,
    userData: any,
    isLoggedIn: boolean
}
const initialState: ILoggedInUser = {
    token: '',
    userId: null,
    userData: {},
    isLoggedIn: false
}


const userSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('action====', action);

            state.token = action.payload.token;
            state.userId = action.payload._id;
            state.userData = action.payload;
            state.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.token = ''
            state.userId = null
            state.userData = {}
            state.isLoggedIn = false
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
