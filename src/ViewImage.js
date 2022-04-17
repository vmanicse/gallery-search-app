import React from 'react';
import './ViewImage.css';
import { Link, useLocation } from 'react-router-dom';

function ViewImage(props) {
    const {imgObj} = useLocation().state;
    console.log(imgObj)
    return(
        <div id="img-holder">
            <img src={imgObj.url} alt={imgObj.title} id={imgObj.id} />
            <div style={{padding: "10px"}}>{imgObj.title}</div>
            <div id="btn-holder">
                <a href={`${imgObj.url}`} target="_blank" download={`${imgObj.title}.jpg`}>Download</a>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default ViewImage;