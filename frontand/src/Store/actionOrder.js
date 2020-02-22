import axiosApi from "../axiosApi";
import {ORDER_NEWS_ERROR, ORDER_NEWS_ID_SUCCESS, ORDER_NEWS_SUCCESS} from "./actionType";



export const orderNewsError = ()=>({type: ORDER_NEWS_ERROR});

export const orderNewsSuccess  = (news) => ({type: ORDER_NEWS_SUCCESS, news });
export const orderNewsIdSuccess  = (news) => ({type: ORDER_NEWS_ID_SUCCESS, news });

export const getNews = () =>{
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/news');
            dispatch(orderNewsSuccess(res.data))
        }catch (e) {
            dispatch(orderNewsError)
        }
    }
};

export const getNewsId = id => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/news/' + id)  ;
            dispatch(orderNewsIdSuccess(res.data))
        }catch (e) {
            dispatch(orderNewsError)
        }
    }
};

export const postNewPost = (file)=>{
    return async (dispatch)=>{
        try{
            await axiosApi.post('/news', file)
            dispatch(getNews())
        }catch (e) {
            dispatch(orderNewsError)
        }
    }
};

export const deleteNews = (id) => {
    return async (dispatch)=>{
        try{
            await axiosApi.delete('/news/' + id);
            dispatch(getNews())
        }catch (e) {
            dispatch(orderNewsError)
        }
    }
};


