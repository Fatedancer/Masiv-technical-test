<template>
  <main>
    <h1>Comic Viewer</h1>
    <ComicDetail :comic="currentComic" />
    <div v-if="loading">Cargando...</div>
    <div v-if="error">Error: {{ error }}</div>
    <nav v-if="!loading && !error">
      <button @click="getPreviousPage">Anterior</button>
      <button @click="handleComicRating(5)">Calificar</button>
      <button @click="getNextPage">Siguiente</button>
    </nav>
  </main>
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
      fetchRandomComicData,
      currentComic,
      getNextPage,
      getPreviousPage,
    } = useComicStore();

    onMounted(() => {
      fetchRandomComicData();
    });

    const handleComicRating = (rating: number) => {
      console.log(`Usuario calificó el cómic con ${rating} estrellas`);
      updateComicRating(rating);
    };

    return {
      currentComic,
      loading,
      error,
      handleComicRating,
      getNextPage,
      getPreviousPage,
    };
  },
};
</script>
