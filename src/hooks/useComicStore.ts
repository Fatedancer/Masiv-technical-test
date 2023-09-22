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
      store.dispatch("fetchAndSetComic", comicData);
      error.value = null;
    } catch (e) {
      console.error(e);
      error.value = "Failed to load the comic";
    } finally {
      loading.value = false;
    }
  };

  const fetchRandomComicData = async () => {
    loading.value = true;
    try {
      const comicData: Comic = await fetchRandomComic();
      store.dispatch("fetchAndSetComic", comicData);
      error.value = null;
    } catch (e) {
      console.error(e);
      error.value = "Failed to load the comic";
    } finally {
      loading.value = false;
    }
  };

  const getNextPage = () => {
    const currentComic: Comic = store.state.currentComic;
    const nextComicId = currentComic.num + 1;
    fetchComicById(nextComicId);
  };

  const getPreviousPage = () => {
    const currentComic: Comic = store.state.currentComic;
    const previousComicId = currentComic.num - 1;
    fetchComicById(previousComicId);
  };

  const currentComic = computed(() => {
    return store.state.currentComic;
  });

  const isLoading = computed(() => {
    return loading.value;
  });

  const isError = computed(() => {
    return error.value !== null;
  });

  return {
    isLoading,
    isError,
    fetchComicById,
    fetchRandomComicData,
    getNextPage,
    getPreviousPage,
    currentComic,
  };
};

export default useComicStore;
