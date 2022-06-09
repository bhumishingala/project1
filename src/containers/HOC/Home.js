import React from 'react';

function Home({data}) {
    return (
        <div>
            {
                data.map((d,i) => {
                    return(
                        <>
                            <h3>{d.id}</h3>
                            <h4>{d.name}</h4>
                        </>
                    )
                })               
            }
        </div>
    );
}

export default Home;