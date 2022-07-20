import typesActions from "./typeActions";

const {
    LIST_JOUEURS_FETCH_DATA_REQUEST,
    LIST_JOUEURS_FETCH_DATA_SUCCESS,
    LIST_JOUEURS_FETCH_DATA_ERROR,
} = typesActions || {};

const fetchListJoueursDataRequest = (params) => {
    return {
        type: LIST_JOUEURS_FETCH_DATA_REQUEST,
        payload: params,
    }
}

const fetchListJoueursDataSuccess = (joueursData) => {
    return {
        type: LIST_JOUEURS_FETCH_DATA_SUCCESS,
        payload: joueursData,
    }
}


const fetchListJoueursDataError = (error) => {
    return {
        type: LIST_JOUEURS_FETCH_DATA_ERROR,
        payload: error,
    }
}

const listJoueursActions = {
    fetchListJoueursDataRequest,
    fetchListJoueursDataSuccess,
    fetchListJoueursDataError,
}
export default listJoueursActions;