import React from 'react';
import Text from './Text';
import Search from './Search';
import {useState} from 'react';

function filterPosts(posts, query) {
        if (!query) {
            return posts;
        }
        //console.log(postSet)
        return posts.filter((post) => {
            const postTitle = post.title.toLowerCase();
            return postTitle.includes(query);
        });

}


function Post(props) {
    const {data} = props;
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(data, searchQuery);
    
    return(
        <>
            <Search 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}/>
            
            {filteredPosts && filteredPosts.map(pst => <Text key={pst.id} data={pst}/>)}
            

        </>
    )
}

export default Post