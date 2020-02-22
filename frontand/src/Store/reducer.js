import {ORDER_COMMENTS_SUCCESS, ORDER_NEWS_ID_SUCCESS, ORDER_NEWS_SUCCESS} from "./actionType";

const initialState = {
  news: null,
    oneNews: null,
    comments: null
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ORDER_NEWS_SUCCESS:
            return {...state, news: action.news};
        case ORDER_NEWS_ID_SUCCESS:
            return {...state, oneNews: action.news};
        case ORDER_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        default:
            return state
    }
};


export default reducer;