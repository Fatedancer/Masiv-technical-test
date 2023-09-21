<template>
  <div>
    <div>
      <h2>{{ comic?.title }}</h2>
      <img :src="comic?.img" :alt="comic?.alt" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    comic: Object,
  },
};
</script>
