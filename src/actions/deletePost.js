import Axios from "axios";
import {ROOT_URL, API_KEY, DELETE_POST} from './actionConstants';

function deletePost(id, callback) {
    
    const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
                         .then(() => {
                             callback();
                         })
    return {
        type: DELETE_POST,
        payload: id
    }
}

export default deletePost;