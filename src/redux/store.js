import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import authSlice from "./authSlice";
import { rootSaga } from "../redux-saga/rootSaga";

const mySaga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: [mySaga],
});

mySaga.run(rootSaga);

