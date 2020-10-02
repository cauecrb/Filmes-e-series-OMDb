import React from 'react';

function Search ({hinput, envSearch}){
    return(
        (<section className="search-elemnt">
            <input 
            type="text" 
            placeholder="insira o termo de busca" 
            className="searchbox" 
            onChange={hinput} 
            onKeyPress={envSearch}/>
        </section>)
        
    )
}

export default Search