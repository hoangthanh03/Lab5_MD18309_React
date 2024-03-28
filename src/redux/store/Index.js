import { configureStore } from "@reduxjs/toolkit";
import List_Reduxcer from "../reduxcer/List_Reduxcer";

export default configureStore({
    reducer:{
        list_RD : List_Reduxcer
    }
})