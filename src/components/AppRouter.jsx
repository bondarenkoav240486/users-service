import React from 'react';
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import About2 from '../pages/About2';
import UsersList from '../pages/UsersList';
import UserPosts from '../pages/UserPosts';


const AppRouter = () => {

    return (
        <Routes>
            <Route path="userslist" element={<UsersList />} />
            <Route path="UserPosts" element={<UserPosts />} />
            <Route
                path="*"
                element={<About2 to="/" replace />}
            />
            <Route
                path=""
                element={<UsersList to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;

