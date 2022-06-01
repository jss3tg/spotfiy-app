import React from 'react';
import Text from './Text';
function Post(props) {
    const {data} = props;
    return(
        <>
            {data && data.map(pst => <Text key={pst.id} data={pst}/>)}
        </>
    )
}

export default Post