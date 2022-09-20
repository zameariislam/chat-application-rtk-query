import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    acessToken:undefined,
    user:{
        undefined
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        userLoggedIn:(state,action)=>{
            state.acessToken=action.payload.acessToken
            state.user=action.payload.user


        },
        userLoggedOut:(state)=>{
            state.acessToken=undefined
            state.user=undefined


        }

    }

})

export const {userLoggedIn,userLoggedOut } = authSlice.actions

export default authSlice.reducer