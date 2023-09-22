import Vue from "vue";
import Vuex from "vuex";
import { Comic, State } from "@/types/types";

Vue.use(Vuex);

const state: State = {
  comics: [],
  currentComic: {} as Comic,
  isLoading: false,
  isError: false,
};

const mutations = {
  setComic(state: State, comicData: Comic) {
    state.currentComic = comicData;
  },
  setRating(
    state: State,
    { comicId, rating }: { comicId: number; rating: number }
  ) {
    const comic = state.comics.find((c) => c.num === comicId);
    if (comic) {
      comic.rating = rating;
      localStorage.setItem(`comicRating_${comicId}`, rating.toString());
    }
  },
};

const actions = {};

const getters = {
  currentComic: (state: State) => state.currentComic,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
