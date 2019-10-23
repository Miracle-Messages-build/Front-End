import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

export const START_FETCHING = "START_FETCHING"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const POST_START = "FETCH_START"
export const POST_SUCCESS = "FETCH_SUCCESS"
export const POST_FAILURE = "FETCH_FAILURE"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_START = "DELETE_START"
export const EDIT_SUCCESS= "EDIT_SUCCESS"
export const EDIT_START= "EDIT_START"

export const fetchCase = () => {
    return dispatch => {
        dispatch({ type: START_FETCHING });

        axios
            .get('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases')
            // .then(response => console.log (response, "From API"))
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
            // .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }))

    };
};


export const addCase = (inputs) => {
    return dispatch => {
        dispatch({ type: POST_START });

        axiosWithAuth()
      .post('https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/add', inputs)
      .then(response => console.log('POST Response:', response))
            // .then(response => dispatch({ type: POST_SUCCESS, payload: response.data }))
            // .catch(error => dispatch({ type: POST_FAILURE, payload: error.response }))

    };
};


export const deleteCase = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_START });

        axiosWithAuth()
        .delete(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/${id}`)
        .then((response) => {
            // console.log(response, 'd r')
            window.location.reload();
           
            // .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data }))
        // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))
        })
    };
};


export const editCase = (info) => {
    return dispatch => {
        dispatch({ type: EDIT_START });
  //     .put(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCase/${props.match.params.id}`, info)

        axiosWithAuth()
            .put(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCase/${info.socialCaseId}, info`)
            // .then(response => console.log (response, "edit"))
            .then(response => dispatch({ type: EDIT_SUCCESS, payload: info}))
            // .catch(error => dispatch({ type: DELETE_FAILURE, payload: error.response }))

    };
};