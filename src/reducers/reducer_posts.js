import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            const posts = {};
            action.payload.data.forEach(element => {
                posts[element.id] = element;
            });
        return posts;
        default:
            return state;
    }
}   