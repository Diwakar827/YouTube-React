 import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{ // map can alse be used instead of empty object
  
    },
    reducers:{
        cacheResults:(state,action)=>{

            state=Object.assign(state,action.payload);
        }
    }
})
export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;


// for caching search result   
// preventing search api calls for case like typing same name on search bar again