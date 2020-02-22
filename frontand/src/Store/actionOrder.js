import axiosApi from "../axiosApi";

export const ORDER_NEWS_SUCCESS = 'ORDER_NEWS_SUCCESS';
export const ORDER_NEWS_REQUEST = 'ORDER_NEWS_REQUEST';
export const ORDER_NEWS_ERROR = 'ORDER_NEWS_ERROR';

export const orderNewsError = ()=>({type: ORDER_NEWS_ERROR});

export const postNewPost = (file)=>{
    return async (dispatch)=>{
        try{
            await axiosApi.post('/news', file)
        }catch (e) {
            dispatch(orderNewsError)
        }
    }
};



