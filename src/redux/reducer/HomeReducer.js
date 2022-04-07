import { initalHomeState } from "../initialState/IntialStateHome";
import { SET_FETCH_DATA } from "../types";

function HomeReducer(state = initalHomeState, action){
    switch (action.type) {
        case SET_FETCH_DATA: 
            return {
                dataFetchHome: action.payload,
                isLoaded: true,
            }
        default: 
            return state;
    }
}

export default HomeReducer;