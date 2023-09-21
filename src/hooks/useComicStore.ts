import { ref, computed } from "vue";
import store from "@/store";
import { xkcdAPI } from "@/services/xkcdService";

const loading = ref(false);
const error = ref<string | null>(null);

const useComicStore = () => {
  const fetchComic = async (id: number) => {
    loading.value = true;
    try {
      const response = await xkcdAPI().get(`/${id}/info.0.json`);
      store.commit("setComic", response.data);
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchRandomComic = async () => {
    loading.value = true;
    try {
      const response = await xkcdAPI().get("/info.0.json");
      store.commit("setComic", response.data);
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const getNextPage = () => {
    const currentComic = store.getters.currentComic;
    const nextComicId = currentComic.num + 1;
    fetchComic(nextComicId);
  };

  const getPreviousPage = () => {
    const currentComic = store.getters.currentComic;
    const previousComicId = currentComic.num - 1;
    fetchComic(previousComicId);
  };

  const currentComic = computed(() => {
    return store.getters.currentComic;
  });

  const updateComicRating = (rating: number) => {
    store.commit("setRating", rating);
  };

  return {
    loading,
    error,
    fetchComic,
    fetchRandomComic,
    getNextPage,
    getPreviousPage,
    currentComic,
    updateComicRating,
  };
};

export default useComicStore;
