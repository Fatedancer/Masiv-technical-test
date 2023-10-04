<template>
  <main class="comic-viewer">
    <h1 class="page-title">Comic Viewer</h1>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="isError" class="error">Error</div>
    <div v-if="!isLoading && !isError">
      <div class="comic-detail-container">
        <ComicDetail
          :comic="currentComic"
          :currentRating="currentComicRating"
          @update:comic="updateComic"
        />
      </div>
      <nav class="nav-buttons">
        <button @click="getPreviousPage" class="nav-button">Previous</button>
        <button @click="getNextPage" class="nav-button">Next</button>
      </nav>
    </div>
  </main>
</template>

<script lang="ts">
import { onMounted, computed } from 'vue'
import store from '@/store' // Import your Vuex store
import useComicStore from '@/hooks/useComicStore'
import ComicDetail from '@/components/ComicDetail.vue'
import { Comic } from '../types/types'

export default {
  components: {
    ComicDetail
  },
  setup() {
    const {
      isLoading,
      isError,
      fetchRandomComicData,
      fetchComicById,
      currentComic,
      getNextPage,
      getPreviousPage
    } = useComicStore()

    onMounted(fetchRandomComicData)

    const currentComicRating = computed(() => {
      return store.getters.getCurrentComicRating
    })

    const updateComic = (updatedComic: Comic) => {
      fetchComicById(updatedComic.num)
    }

    return {
      currentComic,
      isLoading,
      isError,
      getNextPage,
      getPreviousPage,
      updateComic,
      currentComicRating
    }
  }
}
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

.loading .error {
  margin-top: 20px;
  font-size: 18px;
}

.error {
  color: #ff0000;
}

.nav-buttons {
  margin-top: 20px;
}

.nav-button {
  padding: 10px 20px;
  margin: 0 10px;
  width: 100px;
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
