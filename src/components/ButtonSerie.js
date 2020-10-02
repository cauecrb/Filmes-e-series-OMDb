import React from 'react';

function ButtonSerie({ buttserie}){
    return(
        <section className="buttons">
            <div className="buttons" >
                <button className="buttserie" onClick={buttserie}> Series </button>
            </div>
        </section>
    )
}
export default ButtonSerie