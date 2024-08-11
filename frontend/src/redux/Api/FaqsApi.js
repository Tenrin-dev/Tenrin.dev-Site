import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        getFaqs: build.query({
            query:()=>({
                url:`/faqs`,
                method:'GET'
            })
        }),
        postFaqs: build.mutation({
            query:(data)=>({
                url:'/faqs',
                method:'POST',
                body:data
            })
        }),
        deleteFaqs: build.mutation({
            query:(id)=>({
                url:`/faqs/${id}`,
                method:'DELETE'
            })
        }),
        
    })
})

export const { useGetFaqsQuery, usePostFaqsMutation, useDeleteFaqsMutation} = AuthApi