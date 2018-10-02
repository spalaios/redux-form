import Axios from "axios";
import {ROOT_URL, API_KEY, FETCH_POST} from './actionConstants';

function fetchPost(id) {
    const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}



export default fetchPost;