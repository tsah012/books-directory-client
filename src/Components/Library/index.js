import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Wrapper from './index.css.js';

function Library() {
    const [books, setbooks] = useState([]);

    const auth = useSelector(state => state.auth)
    const history = useHistory()
    async function fetchBooks() {
        try {
            const response = await axios.get(process.env.REACT_APP_SERVER_END_POINT + '/api/library', { withCredentials: true });
            setbooks(response.data);
        }
        catch (error) {
            console.log('error occurred during fetching user data. error:\n' + error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    useEffect(() => {
        if (!auth.isLogged) {
            history.push('/login');
        }
    });

    if (auth.user) {
        return (
            <Wrapper>
                <section>
                    <h1>Hi {auth.user.name}</h1>
                    <h2>your books:</h2>
                    <br />
                    <ul>
                        {auth.user.books.map(function (book) {
                            return <Book key={book._id} {...book} />
                        })}
                    </ul>
                </section>
            </Wrapper>
        )
    }
    else {
        return (<></>)
    }
}

export default Library
