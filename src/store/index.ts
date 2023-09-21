import Vue from "vue";
import Vuex from "vuex";
import { Comic } from "@/types/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedComics: [] as Comic[],
    currentComic: {} as Comic,
    isLoading: false,
    isError: false,
  },
  mutations: {
    setComic(
      state: {
        isLoading: boolean;
        isError: boolean;
        loadedComics: Comic[];
        currentComic: Comic;
      },
      { comicData, rating }: { comicData: Comic; rating: number }
    ) {
      const comicWithRating = { ...comicData, rating };
      state.loadedComics.push(comicWithRating);
      state.currentComic = comicWithRating;
    },
    setRating(state, rating) {
      state.currentComic.rating = rating;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
    setError(state, value) {
      state.isError = value;
    },
  },
  actions: {
    updateComicRating({ commit }, rating) {
      commit("setRating", rating);
    },
  },
  getters: {
    currentComic(state) {
      return (
        state.currentComic || state.loadedComics[state.loadedComics.length - 1]
      );
    },
    isLoading(state) {
      return state.isLoading;
    },
    isError(state) {
      return state.isError;
    },
  },
});
