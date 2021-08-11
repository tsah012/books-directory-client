import React from 'react'

function Home() {
    return (
        <>
            <section>
                <h1>Hi Tsah</h1>
                <h2>your books:</h2>
                <br />
                <ul>
                    {[1,2,3,4,5].map(function(member){
                        return <li key={member}>{member}</li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default Home
