import {START_LOADING, STOP_LOADING} from '../constants/loadingConstants'; 

const INTIAL_STATE = {
    loading: false,
};

const loadingReducer = (state=INTIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                loading: true
            }
        case STOP_LOADING:
            return {
                loading: false
            }
        default:
            return state;
    }
};

export default loadingReducer;