import { createSlice } from "@reduxjs/toolkit";

//khởi tạo hàm chứa danh sách   
const initialState = {
    listCart:[]
}
// thiết lập reduxcer

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
        addCase(state,action){

        },
        deleteCase(state,action){
            
        }
    }
})

export const {addCase,deleteCase}  = listSlice.actions;
export default listSlice.reducer;