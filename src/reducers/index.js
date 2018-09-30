import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';
/**formReducer is an alias for reducer */
//using formReducer should have the key "form" in the redux store this should be for all the form
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer   
});

export default rootReducer;
