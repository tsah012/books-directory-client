import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
                        {[1, 2, 3, 4, 5].map(function (member) {
                            return <li key={member}>{member}</li>
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
