import typesActions from "../actions/typeActions";

const {
   FILTER_JOUEUR_SEARCH_BY_NAME
} = typesActions || {};

const initState = {
    name: '',
}

const filterJoueurReducer = (state = initState, action) => {
    switch(action?.type){
        case FILTER_JOUEUR_SEARCH_BY_NAME:
            return {
                ...state,
                name: action?.payload,
            };
        default:
            return state;
    }
};

export default filterJoueurReducer;