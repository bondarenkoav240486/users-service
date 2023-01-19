import { createSlice } from '@reduxjs/toolkit'




const toolkitSlice = createSlice({

	name: "toolkit",
	initialState: {
		customers: [],
      	posts: [],
		albums:[],
		modal:false,
	},
	reducers: {
		addAsyncCustomers(state,action) {
			state.customers = action.payload
		},
		addAsyncUserPosts(state,action) {
			state.posts = action.payload
		},
		addAlbumsAction(state,action) {
			console.log(action)
			state.albums = action.payload
		},
		setModalAction(state,action) {
			state.modal =  action.payload
		},
	}	
})

export default toolkitSlice.reducer

export const {
	addAsyncCustomers,
	addAsyncUserPosts,
	addAlbumsAction,
	setModalAction
} = toolkitSlice.actions