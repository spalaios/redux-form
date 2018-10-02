import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/actionConstants';
import _ from 'lodash'; 

export default (state={}, action) =>  {
    console.log(action);
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data}
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
};
