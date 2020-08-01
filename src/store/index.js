import { combineReducers } from "redux";
import inventoryReducer from "./inventory.reducer";

export default combineReducers({
    flattenedInventory: inventoryReducer
})