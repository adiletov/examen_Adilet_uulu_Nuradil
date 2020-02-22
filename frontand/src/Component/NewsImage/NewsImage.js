import React from 'react';
import {apiURL} from "../../apiURL";
import noImage from '../../assets/images/noimage.png';

const NewsImage = (props) => {
    if (props.image){
        return <img style={{'width' : props.width}}  src={apiURL + '/uploads/' + props.image} alt={props.image}/>
    }else{
        return <img style={{'width' : props.width}} src={noImage} alt="NO images"/>
    }
};

export default NewsImage;