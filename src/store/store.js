import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import imagesReducer from "./imagesSlice";
import testimonialsReducer from "./testimonialsSlice";
import coursesReducer from "./coursesSlice";
import blogsReducer from "./blogsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    images: imagesReducer,
    testimonials: testimonialsReducer,
    courses: coursesReducer,
    blogs: blogsReducer,
  },
});

export default store;
