import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE, DELETE_SUCCESS, DELETE_START, EDIT_START,EDIT_SUCCESS } from '../actions/index.js'


const initialState = {
    cases: [

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
            case EDIT_START:
                return {
                    ...state,
                    loading: true,
                    error: ''
                }
                

                case EDIT_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        error: '',
                        cases: action.payload

                        
                    }

        default:
            return state;

    }

}

export default reducer;