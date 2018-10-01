import axios from 'axios';
import {FETCH_POSTS, ROOT_URL, API_KEY, CREATE_POST} from './actionConstants';


function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                    .then((result) => {
                        callback();
                    })

    return {
        type: CREATE_POST,  
        payload: request
    }

}

export default createPost;
