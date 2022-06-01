import React from 'react';

function Text(props) {
    const {id, title, desc} = props.data
    return(
        <>
            <h4>{title}</h4>
            <p>{desc}</p>
        </>
    )
}

export default Text