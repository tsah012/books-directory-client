import React from 'react';
import bookImage from '../../static/images/book.jpg';
import Wrapper from './index.css.js';

function Book(props) {
    return (
        <Wrapper>
            <div id={props._id}>
                <img src={bookImage} width='100' height='150'></img>
                <div> {props.name} </div>
                <div> {props.author} </div>
            </div>
        </Wrapper>
    )
}

export default Book
