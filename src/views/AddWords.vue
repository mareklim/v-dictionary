<template>
  <router-link to="/">Back to home page</router-link>
  <br /><br />
  <p>Type new word here:</p>
  <input type="text" id="new-word" />
  <br />
  <br />
  <!-- <button @click="handleAddNewWord">Add new word</button> -->
  <router-link to="/" @click="handleAddNewWord">Add new word</router-link>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const newWord = ref("");
    const handleAddNewWord = () => {
      newWord.value = document.getElementById("new-word").value;
      console.log(newWord);
    };
    return {
      handleAddNewWord,
      newWord,
    };
  },
};
</script>
