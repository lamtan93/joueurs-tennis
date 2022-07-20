import React, { useState, } from 'react';
import { useDispatch, } from 'react-redux';
import filterJoueurAction from '../redux/actions/filterJoueurActions';

const {
    searchByName,
} = filterJoueurAction || {};

const JoueursTennisFilter = () => {
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
            <input type="text" placeholder='Recherche un joueur' value={searchName} onChange={(e) => handleOnChangeSearch(e)} ></input>
        </div>
    )
}


export default JoueursTennisFilter;