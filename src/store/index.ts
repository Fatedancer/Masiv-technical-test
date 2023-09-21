import Vue from "vue";
import Vuex from "vuex";
import { Comic } from "@/types/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentComic: {} as Comic,
    isLoading: false,
    isError: false,
  },
  mutations: {
    setComic(state, comicData: Comic) {
      state.currentComic = comicData;
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
      return state.currentComic;
    },
    isLoading(state) {
      return state.isLoading;
    },
    isError(state) {
      return state.isError;
    },
  },
});
