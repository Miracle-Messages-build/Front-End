import axios from 'axios'

export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const POST_START = "FETCH_START"
export const POST_SUCCESS = "FETCH_SUCCESS"
export const POST_FAILURE = "FETCH_FAILURE"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_START = "DELETE_START"


export const fetchCase = () => {
    return dispatch => {
        dispatch({ type: START_FETCHING });

        axios
            .get('')
            // .then(response => console.log (response, "From API"))
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))

    };
};


export const addCase = (item) => {
    return dispatch => {
        dispatch({ type: POST_START });

        axios
            .post('', item)
            // .then(response => console.log (response, "From API POST"))
            .then(response => dispatch({ type: POST_SUCCESS, payload: response.data }))
            .catch(error => dispatch({ type: POST_FAILURE, payload: error.response }))

    };
};


export const deleteSmurf = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_START });

        axios
            .delete(``)
            // .then(response => console.log (response, "DEL"))
            .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
            // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))

    };
};