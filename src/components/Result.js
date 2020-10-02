import React from 'react';
import Res from './Res.js';

function Result ({ results, openPopup }) {
    return(
        <section className="results">
            {results.map(result => (
                <Res key={result.imdbID} result={result} onClick={openPopup}/>
            ))}
        </section>
    )
}

export default Result