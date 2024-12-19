import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";
import { configureStore } from "@reduxjs/toolkit";

const vehicleStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default vehicleStore;
