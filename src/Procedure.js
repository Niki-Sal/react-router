import React from 'react';


const Procedure = (props) => {
    return (
        <div>
           <p>You would like this procedure</p> 
           <p>{props.match.params.type}</p> 
        </div>
    );
}

export default Procedure;
