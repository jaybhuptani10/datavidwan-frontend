import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import imagesReducer from "./imagesSlice";
import testimonialsReducer from "./testimonialsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    images: imagesReducer,
    testimonials: testimonialsReducer,
  },
});

export default store;
