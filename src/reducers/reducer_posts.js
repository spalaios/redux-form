import {FETCH_POSTS} from '../actions/actionConstants';
import _ from 'lodash'; 

export default (state=null, action) =>  {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
};
