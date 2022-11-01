<template>
  <div class="test">
    <!-- <img :src="src" alt="" /> -->
  </div>
</template>
<script>
import request from "../https/https";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",
  data() {
    return {
      src: require("@/assets/img/apple.jpeg"),
    };
  },
  methods: {
    async test() {
      const result = await request("say");
      console.log(result);
    },
  },
  mounted() {
    this.test();
  },
};
</script>
