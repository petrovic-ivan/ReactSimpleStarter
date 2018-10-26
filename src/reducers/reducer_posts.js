import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            const post = action.payload.data;
            const newState = { ...state };
            if (post) {
                newState[post.id] = post;
            }
            return newState;
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