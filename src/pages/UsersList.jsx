import React from 'react';

import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";

import MyModal from '../components/UI/MyModal/MyModal.js';

import {
	addAsyncCustomers,
	addAsyncUserPosts,
	addAlbumsAction,
	setModalAction
} from "../toolkitRedux/toolkitSlice";


const fetchCustomers = () => {
	return async dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(addAsyncCustomers(json)) )
	}
}

const fetchPosts = (userId) => {
    return async dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(json => dispatch(addAsyncUserPosts(json)) )
    }
} 

const fetchAlbums = (userId) => {
	return async dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			.then(response => response.json())
			.then(json => dispatch(addAlbumsAction(json)) )
	}
}


const UsersList = () => {
	const dispatch = useDispatch();
	const customers = useSelector(state => state.toolkit.customers);
	const posts = useSelector(state => state.toolkit.posts);
	const albums = useSelector(state => state.toolkit.albums);
    const modal = useSelector(state => state.toolkit.modal);
	const setModal = (par) => ( 
        dispatch(setModalAction(par))
    );
	dispatch(fetchCustomers())

	return (
		<div className="UsersList">
			
			   <div>
				{
					customers.length > 0
					?
					<div>
						{
							customers.map(customer => 
								<div 
									className="user"
									key={customer.id} 
								>
									{customer.name}
									<div className="buttons">
									<button
									onClick={
											()=>dispatch(
												fetchPosts(customer.id)
											)
										}
									>
										<Link 
											className="link" 
											to="/userposts"
										>
											пости
										</Link>
									</button>
									<button 
										onClick={
											()=>{
												dispatch(
													fetchAlbums(customer.id)
												);
                            					setModal(true);
											}	
										}
									>
										альбоми
									</button>
								</div>
								</div>
							)
						}
					</div>
					:
					<div>
					</div>
				}
			</div>
			
			<MyModal
 				visible={modal}
                setVisible={setModal}
			>
			<div>
				{
					albums.length > 0
					?
					<div>
						{
							albums.map((album, index) => 
									<div 
										key={album.id} 
									>
										{album.userId}
										{album.id}
										{album.title}
									</div>
							)
						}
					</div>
					:
					<div>
					</div>
				}
			</div>
			</MyModal>

		</div>
	);
};

export default UsersList;