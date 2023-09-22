<template>
  <article class="comic-container">
    <header>
      <h2>{{ comic?.title }}</h2>
    </header>
    <section>
      <img :src="comic?.img" :alt="comic?.alt" class="comic-image" />
    </section>
    <section>
      <div class="comic-details">
        <div v-if="comic?.year || comic?.month || comic?.day">
          <p class="published-text">Published: {{ formatDate(comic) }}</p>
        </div>
      </div>
    </section>
    <div class="comic-rating-container">
      <div class="rating-text">Rating:</div>
      <div class="rating-stars">
        <el-rate
          v-model="userRating"
          :max="5"
          :allow-half="true"
          @change="rateComic"
          class="custom-el-rate"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Comic } from "../types/types";

export default defineComponent({
  props: {
    comic: Object as () => Comic,
    currentRating: Number,
  },
  setup(props, { emit }) {
    const userRating = ref(props.currentRating || 1);

    const rateComic = () => {
      if (props.comic) {
        const comicCopy = { ...props.comic };
        comicCopy.rating = userRating.value;
        emit("update:comic", comicCopy);
      }
    };

    const formatDate = (comic: Comic) => {
      if (comic.year && comic.month && comic.day) {
        const date = new Date(
          Number(comic.year),
          Number(comic.month) - 1,
          Number(comic.day)
        );
        return date.toLocaleDateString("en-EN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "N/A";
    };

    return {
      formatDate,
      userRating,
      rateComic,
    };
  },
});
</script>

<style lang="less" scoped>
.comic-container {
  width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
}
.published-text {
  font-size: 12px;
  font-weight: bold;
}
.comic-image {
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 20px;
}

.comic-details {
  margin-bottom: 20px;
  text-align: center;
}

.comic-rating-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-text {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.rating-stars {
  display: flex;
  align-items: center;
}

.custom-el-rate {
  width: 200px;
  height: 56px;
  border-radius: 8px;
  font-size: 24px;
  color: #f0c541;
}
</style>
