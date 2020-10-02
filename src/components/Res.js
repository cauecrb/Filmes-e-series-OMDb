import React from 'react'

function Res({ result}) {
    return(
        <div className="result">
            <h3>{result.Title}</h3>
            <h4>Ano: {result.Year}</h4>
        </div>
    )
}

export default Res