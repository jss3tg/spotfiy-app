import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
    return(
        <>
            <form action="/forum" method="get">
                <label htmlFor="header-search">
                <span className="visually-hidden">Search</span>
                </label>
            <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search forum posts"
            name="s" 
            />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Search