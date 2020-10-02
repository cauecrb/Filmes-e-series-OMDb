import React from 'react';

function ButtonFilm({buttfil}){
    return(
        <section className="buttons">
            <div className="buttons" >
                <button className="buttfilm" onClick={buttfil}> Filmes </button>
            </div>
        </section>
    )
}
export default ButtonFilm