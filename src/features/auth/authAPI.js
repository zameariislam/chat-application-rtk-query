import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authAPI=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        // endpoints here
    register:builder.mutation({
        query:(data)=>({
            url:'/register',
            method:'POST',
            body:data
        }),
        async onQuerStarted(arg,{queryFulfilled,dispatch}){
            try{
                const {data}=await queryFulfilled
                localStorage.setItem('auth',JSON.stringify({
                    accessToken:data.accessToken,
                    user:data.user
                }))
                dispatch(userLoggedIn({
                    accessToken:data.accessToken,
                    user:data.user
                }))

            }
            catch(err){

            }

        }

    }),
    login:builder.mutation({
        query:(data)=>({
            url:'/login',
            method:'POST',
            body:data
        }),
        async onQuerStarted(arg,{queryFulfilled,dispatch}){
            try{
                const {data}=await queryFulfilled
                localStorage.setItem('auth',JSON.stringify({
                    accessToken:data.accessToken,
                    user:data.user
                }))
                dispatch(userLoggedIn({
                    accessToken:data.accessToken,
                    user:data.user
                }))

            }
            catch(err){

            }

        }
    })

        


    })
})


 export const{useRegisterMutation,useLoginMutation}=authAPI