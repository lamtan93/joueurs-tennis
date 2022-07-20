import React from 'react';
import ListeJoueursTennis from './ListeJoueursTennis';
import { useSelector, } from 'react-redux';
import { joueursSelector, listeJoueursSearchByName } from '../redux/selectors';
import PropType from 'prop-types';

const JoueursTennisView = ({
    words,
}) => {
    const {
        listJoueursDataLoading,
        listJoueursDataError
    } = useSelector(joueursSelector);
    const  listeJoueursData = useSelector(listeJoueursSearchByName);
    return(
        <div className='listeJoueurs'>

            {listJoueursDataLoading ? (
                <h1 className='title'>{words?.LOADING_LABEL} </h1>
            ) : (
                <>
                    {listJoueursDataError ? (
                        <h1 className='title'>{words?.ERROR?.LIBELLE_ERROR_GEN}</h1>
                    ) : (
                        <ListeJoueursTennis 
                        words={words}
                        listJoueursData={listeJoueursData} />
                    )}
                </>
            )}
        </div>
    )
}

JoueursTennisView.propTypes = {
    words: PropType.shape({
        LOADING_LABEL: PropType.string,
        ERROR: PropType.shape({
            LIBELLE_ERROR_GEN: PropType.string
        })
    }),
};

JoueursTennisView.defaultProps = {
    words: {},
};


export default JoueursTennisView;