<template>
  <input type="text" v-model="search" />
  <ul>
    <li v-for="(word, index) in searchingWords" :key="index">{{ word }}</li>
  </ul>

  <router-link to="/words/add">Add new words</router-link>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const words = reactive(["Ahoj", "Jak", "Se", "Mas"]);
    const searchingWords = computed(() => {
      return words.filter(word => word.includes(search.value));
    });
    // words.push(newWord);

    console.log(newWord);

    return {
      words,
      search,
      searchingWords,
    };
  },
};
</script>
