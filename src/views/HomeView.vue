<template>
  <div>
    <h1>Comic Viewer</h1>
    <ComicDetail :comic="currentComic" />
    <div v-if="loading">Cargando...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="!loading && !error">
      <button @click="getPreviousPage">Anterior</button>
      <button @click="updateComicRating(5)">Calificar</button>
      <button @click="getNextPage">Siguiente</button>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useComicStore from "../hooks/useComicStore";
import ComicDetail from "@/components/ComicDetail.vue";

export default {
  components: {
    ComicDetail,
  },
  setup() {
    const {
      loading,
      error,
      updateComicRating,
      fetchRandomComic,
      currentComic,
      getNextPage,
      getPreviousPage,
    } = useComicStore();

    onMounted(() => {
      fetchRandomComic(); // Cargar un cómic aleatorio al montar el componente
    });

    return {
      currentComic,
      loading,
      error,
      updateComicRating,
      getNextPage,
      getPreviousPage,
    };
  },
};
</script>
