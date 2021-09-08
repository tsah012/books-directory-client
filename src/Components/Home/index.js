import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Book from '../Book'

function Home() {
    const auth = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {
        if (!auth.isLogged) {
            history.push('/login');
        }
    });

    if (auth.user) {
        return (
            <>
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
            </>
        )
    }
    else {
        return (<></>)
    }
}

export default Home
