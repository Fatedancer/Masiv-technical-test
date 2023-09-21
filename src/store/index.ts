import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentComic: {
      title: "",
      img: "",
      alt: "",
      year: "",
      month: "",
      day: "",
      num: 0,
      rating: 0,
    },
    isLoading: false,
    isError: false,
  },
  mutations: {
    setComic(state, comicData) {
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
