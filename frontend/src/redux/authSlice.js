import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false
    },
    reducers:{
        // actions
        setLoadding:(state, action) => {
            state.loading = action.payload;
        }
    }
});
export const {setLoadding} = authSlice.actions;
export default authSlice.reducer;