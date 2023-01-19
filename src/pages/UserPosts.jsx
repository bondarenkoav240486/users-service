import React from 'react';
import {useDispatch,useSelector} from "react-redux";

import {
    addAsyncCustomers,
    addAsyncUserPosts,
    addAlbumsAction
} from "../toolkitRedux/toolkitSlice";

import Loader from "../components/UI/Loader/Loader";

const fetchPosts = (userId) => {
    return async dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(json => dispatch(addAsyncUserPosts(json)) )
    }
} 


const UserPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.toolkit.posts);

    return (
        <div className="UserPosts">
            <div>
                {
                    posts.length > 0
                    ?
                    <div>
                        {
                            posts.map((post, index) => 
                                    <div 
                                        key={post.id} 
                                    >
                                        {post.userId}
                                        {post.id}
                                        {post.title}
                                    </div>
                            )
                        }
                    </div>
                    :
                    <div style={{fontSize:"24px"}}>
                        posts not found
                    </div>
                }
            </div>
        </div>
     );
};

export default UserPosts;