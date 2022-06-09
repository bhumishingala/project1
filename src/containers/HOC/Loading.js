import React from 'react';

function Loading(Compenent) {
    return function WithzloadingComponent({isLoading,data}){
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