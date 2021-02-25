import {CREATE_ITEM, GET_ITEMS, DELETE_ITEM} from '../constants/itemConstants';

const INITIAL_STATE = {
    items: []
}

const itemReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_ITEM:
            return {
                items: [...state.items, action.payload]
            }
        case GET_ITEMS:
            return {
                items :[...action.payload],
            }
        case DELETE_ITEM:
            return {
                items: state.items.filter(i => i._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export default itemReducer;