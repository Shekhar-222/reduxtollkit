import { createSlice, configureStore } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSongs(state, action) {
      console.log(action);
      state.length = 0;
    }
  }
});
const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(songSlice.actions.resetSongs, (state, action) => {
      return [];
    });
  }
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer
  }
});

export { store };
export const { addSong, removeSong, resetSongs } = songSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;
