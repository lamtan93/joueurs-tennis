import React from 'react';
import JoueursTennisFilter from './JoueursTennisFilter';
import JoueurTennis from './JoueurTennis';


const ListeJoueursTennis = ({
    words,
    listJoueursData,
}) => {
    return (
        <>
            <div className='filters'>
                <JoueursTennisFilter />
            </div>
            {listJoueursData?.map( joueur => (
                <div 
                key={joueur?.id}
                className='joueur'>
                   <JoueurTennis 
                    words={words}
                    joueur={joueur}
                   />
                </div> 
            ))}
        </>
    )
}

export default ListeJoueursTennis;