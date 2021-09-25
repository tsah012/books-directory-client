import React, { useState, useEffect } from 'react';
import bookImage from '../../static/images/book.jpg';
import Wrapper from './index.css.js';

function Book(props) {
    const [chosen, setchosen] = useState(false)

    function handleClick() {
        setchosen(!chosen)
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <Wrapper>
            <div id={props._id} isChosen={chosen}>
                <img src={bookImage} width='100' height='150'></img>
                <div> {props.name} </div>
                <div> {props.author} </div>
            </div>
        </Wrapper>
    )
}

export default Book
