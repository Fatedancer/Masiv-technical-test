// store/index.ts
import Vue from 'vue'
import { Comic, State } from '@/types/types'
import Vuex, { MutationTree, ActionTree, GetterTree, ActionContext } from 'vuex'

Vue.use(Vuex)

const state: State = {
  comics: [] as Comic[],
  currentComic: {} as Comic,
  isLoading: false,
  isError: false
}

const mutations: MutationTree<State> = {
  setComic(state, comicData: Comic) {
    state.currentComic = comicData
  },
  setRating(state, { comicId, rating }: { comicId: number; rating: number }) {
    const comic = state.comics.find((c) => c.num === comicId)
    if (comic) {
      comic.rating = rating
    }
  },
  addComic(state, comicData: Comic) {
    state.comics.push(comicData)
  },
  setIsLoading(state, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setIsError(state, isError: boolean) {
    state.isError = isError
  }
}

const actions: ActionTree<State, State> = {
  async fetchAndSetComic({ commit }: ActionContext<State, State>, comicData: Comic): Promise<void> {
    commit('setComic', comicData)
  }
}

const getters: GetterTree<State, State> = {
  currentComic: (state) => state.currentComic,
  getCurrentComicRating: (state) => {
    const currentComicId = state.currentComic.num
    const comic = state.comics.find((c) => c.num === currentComicId)
    return comic ? comic.rating : null
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
