import { ref, computed } from "vue";
import store from "@/store";
import { fetchComic, fetchRandomComic } from "@/services/xkcdService";
import { Comic } from "@/types/types";

const loading = ref(false);
const error = ref<string | null>(null);

const useComicStore = () => {
  const fetchComicById = async (id: number) => {
    loading.value = true;
    try {
      const comicData: Comic = await fetchComic(id);
      store.commit("setComic", comicData);
      error.value = null;
    } catch (error) {
      console.error({ error });
    } finally {
      loading.value = false;
    }
  };

  const fetchRandomComicData = async () => {
    loading.value = true;
    try {
      const comicData: Comic = await fetchRandomComic();
      store.commit("setComic", comicData);
      error.value = null;
    } catch (error) {
      console.error({ error });
    } finally {
      loading.value = false;
    }
  };

  const getNextPage = () => {
    const currentComic = store.getters.currentComic;
    const nextComicId = currentComic.num + 1;
    fetchComicById(nextComicId);
  };

  const getPreviousPage = () => {
    const currentComic = store.getters.currentComic;
    const previousComicId = currentComic.num - 1;
    fetchComicById(previousComicId);
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
    fetchComicById,
    fetchRandomComicData,
    getNextPage,
    getPreviousPage,
    currentComic,
    updateComicRating,
  };
};

export default useComicStore;
