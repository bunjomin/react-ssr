export const FETCH_POSTS = 'fetch_posts';
export const fetchPosts = (dispatch, getState) => {
    const res = () => {
        return null;
    };

    dispatch({
        type: FETCH_POSTS,
        payload: res
    });
};