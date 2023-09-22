// hooks/useComicStore.ts

import { ref, computed } from "vue";
import store from "@/store"; // Asegúrate de importar el store correctamente
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
    } catch (e) {
      console.error(e);
      error.value = "Error al cargar el cómic";
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
    } catch (e) {
      console.error(e);
      error.value = "Error al cargar el cómic aleatorio";
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

  return {
    loading,
    error,
    fetchComicById,
    fetchRandomComicData,
    getNextPage,
    getPreviousPage,
    currentComic,
  };
};

export default useComicStore;
