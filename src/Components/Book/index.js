import React, { useState, useEffect } from 'react';
import bookImage from '../../static/images/book.jpg';
import Wrapper from './index.css.js';

function Book(props) {
    const [borrowed, setborrowed] = useState(false)

    function handleClick() {
        setborrowed(!borrowed)
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleClick);
        };
    }, []);

    return (
        <Wrapper>
            <div id={props._id} isBorrowed={borrowed}>
                <img src={bookImage} width='100' height='150'></img>
                <div> {props.name} </div>
                <div> {props.author} </div>
            </div>
        </Wrapper>
    )
}

export default Book
