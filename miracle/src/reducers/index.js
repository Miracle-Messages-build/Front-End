import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE, DELETE_SUCCESS, DELETE_START } from '../actions/index.js'


const initialState = {
    cases: [

        // { id: 1, name: "V-6 engine" },
        // { id: 2, name: "Racing detail package"},
        // { id: 3, name: "Premium sound system"},
        // { id: 4, name: "Rear spoiler" }

    ],
    loading: false,
    error: ''

};


const reducer = (state = initialState, action) => {
    // console.log(state, "in red")
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                loading: true,
                error: ''

            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                cases: action.payload
            }

        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case POST_START:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                cases: [...state.cases, action.payload]
            }

        case POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                cases: action.payload
            }

        case DELETE_START:
            return {
                ...state,
                loading: true,
                error: ''
            }

        default:
            return state;

    }

}

export default reducer;