import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        getGraphics: build.query({
            query:()=>({
                url:`/graphic`,
                method:'GET'
            })
        }),
        postGraphic: build.mutation({
            query:(data)=>({
                url:'/graphic',
                method:'POST',
                body:data
            })
        }),
        deleteGraphic: build.mutation({
            query:(id)=>({
                url:`/graphic/${id}`,
                method:'DELETE'
            })
        }),
        
    })
})

export const { useGetGraphicsQuery, usePostGraphicMutation, useDeleteGraphicMutation} = AuthApi