import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './restaurants/restaurantsSlice'

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
