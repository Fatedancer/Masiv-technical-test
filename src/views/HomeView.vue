<template>
  <main class="comic-viewer">
    <h1 class="page-title">Comic Viewer</h1>
    <div class="comic-detail-container">
      <ComicDetail :comic="currentComic" />
    </div>
    <div v-if="loading" class="loading">Cargando...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>
    <nav v-if="!loading && !error" class="nav-buttons">
      <button @click="getPreviousPage" class="nav-button">Anterior</button>
      <button @click="getNextPage" class="nav-button">Siguiente</button>
    </nav>
  </main>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useComicStore from "@/hooks/useComicStore";
import ComicDetail from "@/components/ComicDetail.vue";

export default {
  components: {
    ComicDetail,
  },
  setup() {
    const {
      loading,
      error,
      fetchRandomComicData,
      currentComic,
      getNextPage,
      getPreviousPage,
    } = useComicStore();

    onMounted(() => {
      fetchRandomComicData();
    });

    return {
      currentComic,
      loading,
      error,
      getNextPage,
      getPreviousPage,
    };
  },
};
</script>
<style lang="less" scoped>
.comic-viewer {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.page-title {
  font-size: 24px;
  margin-top: 20px;
}

.comic-detail-container {
  margin-top: 20px;
}

.loading {
  margin-top: 20px;
  font-size: 18px;
  color: #777;
}

.error {
  margin-top: 20px;
  font-size: 18px;
  color: #ff0000;
}

.nav-buttons {
  margin-top: 20px;
}

.nav-button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #0056b3;
}
</style>
