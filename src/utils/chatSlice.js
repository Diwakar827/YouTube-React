import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice=createSlice({
     name:'chat',
     initialState:{
     messages:[],
     },
     reducers:{
           
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_LIVE_CHAT,1);  //for deleting chats
            state.messages.unshift(action.payload); // unshift for putting at top not push
        },
     }
});

export const{addMessage} =chatSlice.actions;
export default chatSlice.reducer;
