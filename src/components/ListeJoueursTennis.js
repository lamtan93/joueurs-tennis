import React from 'react';
import JoueursTennisFilter from './JoueursTennisFilter';
import JoueurTennis from './JoueurTennis';
import PropType from 'prop-types';

const ListeJoueursTennis = ({
    words,
    listJoueursData,
}) => {
    return (
        <>
            <div className='filters'>
                <JoueursTennisFilter 
                 words={words} />
            </div>

            {listJoueursData.length > 0 ? (
                <>
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
            ) : (
               <h1>{words?.PLAYER_NOT_FOUND}</h1> 
            )}
            
        </>
    )
}


ListeJoueursTennis.propTypes = {
    words: PropType.object,
    listJoueursData: PropType.array,
};

ListeJoueursTennis.defaultProps = {
    words: {},
    listJoueursData: [],
};

export default ListeJoueursTennis;