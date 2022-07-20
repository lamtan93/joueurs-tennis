import typesActions from "./typeActions";

const {
    FILTER_JOUEUR_SEARCH_BY_NAME,
} = typesActions || {};

const searchByName = (name) => {
    return{
        type: FILTER_JOUEUR_SEARCH_BY_NAME,
        payload: name,
    }
}

const filterJoueurAction = {
    searchByName,
}
export default filterJoueurAction;