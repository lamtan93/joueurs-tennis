import { combineReducers, } from 'redux';
import filterJoueurReducer from './reducers/filterJoueurReducer';
import listJoueursReducer from './reducers/listJoueursReducer';

const reducerRoot = combineReducers({
    filterJoueur: filterJoueurReducer,
    listJoueurs: listJoueursReducer,
});

export default reducerRoot;