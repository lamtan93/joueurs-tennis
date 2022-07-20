import typesActions from "../actions/typeActions";

const {
   LIST_JOUEURS_FETCH_DATA_REQUEST,
   LIST_JOUEURS_FETCH_DATA_SUCCESS,
   LIST_JOUEURS_FETCH_DATA_ERROR,
} = typesActions || {};


const initState = {
    listJoueursData: [],
    listJoueursDataLoading: false,
    listJoueursDataError: null,
};
const listJoueursReducer = (state = initState, action) => {
    switch(action?.type){
        case LIST_JOUEURS_FETCH_DATA_REQUEST:
            return {
                ...state,
                listJoueursData: [],
                listJoueursDataLoading: true,
                listJoueursDataError: null,
            }
        case LIST_JOUEURS_FETCH_DATA_SUCCESS: 
        return {
            ...state,
            listJoueursData: action?.payload?.players,
            listJoueursDataLoading: false,
            listJoueursDataError: null,
        }
        case LIST_JOUEURS_FETCH_DATA_ERROR:
            return {
                ...state,
                listJoueursData: [],
                listJoueursDataLoading: false,
                listJoueursDataError: action?.payload?.message,
            }
        default: 
            return state;
    }
};

export default listJoueursReducer;

