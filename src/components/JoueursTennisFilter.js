import React, { useState, } from 'react';
import { useDispatch, } from 'react-redux';
import filterJoueurAction from '../redux/actions/filterJoueurActions';
import PropType from 'prop-types';

const {
    searchByName,
} = filterJoueurAction || {};

const JoueursTennisFilter = ({
    words,
}) => {
    const dispatch = useDispatch();
    const [
        searchName, 
        setSearchName,
    ] = useState('');

    const handleOnChangeSearch = (e) => {
        const searchName = e?.target?.value;
        setSearchName(searchName);
        dispatch(searchByName(searchName));
    } 

    return (
        <div className='searchByName'>
            <input type="text" placeholder={words?.RECHERCHER_UN_JOUEUR} value={searchName} onChange={(e) => handleOnChangeSearch(e)} ></input>
        </div>
    )
}

JoueursTennisFilter.propTypes = {
    words: PropType.shape({
        RECHERCHER_UN_JOUEUR: PropType.string,
    }),
};

JoueursTennisFilter.defaultProps = {
    words: {},
};


export default JoueursTennisFilter;