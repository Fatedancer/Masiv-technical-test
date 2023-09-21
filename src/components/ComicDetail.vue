<template>
  <article>
    <section>
      <h2>{{ comic?.title }}</h2>
      <img :src="comic?.img" :alt="comic?.alt" />
    </section>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    comic: Object,
  },
};
</script>
