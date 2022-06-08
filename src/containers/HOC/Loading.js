import React from 'react';

function Loading(Compenent) {
    return function WithzzloadingComponent({isLoading}){
        if(isLoading){
            return (
                <p>Loading....</p>
            )
        }else{
            return (
                <Compenent data={data}/>
            )
        }
    }
    
}

export default Loading;