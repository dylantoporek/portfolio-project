import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    blogs: [],
};

export const stateSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload)
        },
    },
})

export const {addProject} = stateSlice.actions
export const selectProjects = (state) => state.data.projects;
export const selectBlogs = (state) => state.data.blogs;

export default stateSlice.reducer