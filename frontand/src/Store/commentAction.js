import axiosApi from "../axiosApi";
import {ORDER_COMMENTS_SUCCESS, ORDER_NEWS_ERROR, ORDER_NEWS_REQUEST} from "./actionType";


export const orderCommentRequest = () => ({type: ORDER_NEWS_REQUEST});
export const orderCommentError = () => ({type: ORDER_NEWS_ERROR});
export const getCommentsSuccess = (comments) => ({type: ORDER_COMMENTS_SUCCESS, comments});

export const getComments = id => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/comments/' + id);
            dispatch(getCommentsSuccess(res.data))
        }catch (e) {
            dispatch(orderCommentError)
        }
    }
};


export const postComment = (comment) => {

    return async (dispatch)=>{
        try{
            await axiosApi.post('/comments', comment);
            dispatch(getComments(comment.id))
        }catch (e) {
            dispatch(orderCommentError())
        }
    }
};


export const deleteComment = (id, news_id) => {
    return async (dispatch)=>{
        try{
            await axiosApi.delete('/comments/' + id);
            dispatch(getComments(news_id))
        }catch (e) {
            dispatch(orderCommentError())
        }
    }
};