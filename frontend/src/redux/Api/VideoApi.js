import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        getVideos: build.query({
            query:()=>({
                url:`/video`,
                method:'GET'
            })
        }),
        postVideo: build.mutation({
            query:(data)=>({
                url:'/video',
                method:'POST',
                body:data
            })
        }),
        deleteVideo: build.mutation({
            query:(id)=>({
                url:`/video/${id}`,
                method:'DELETE'
            })
        }),
        
    })
})

export const { useGetVideosQuery, usePostVideoMutation, useDeleteVideoMutation} = AuthApi