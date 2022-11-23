<template>
  <div class="index layer">
    <start @ready="ready" />
    <Describution v-if="showDesc" @start="start" />
  </div>
</template>

<script>
import Describution from "@/components/desc";
import Start from "@/components/start";

export default {
  components: { Start, Describution },
  data() {
    return {
      showDesc: false,
    };
  },
  methods: {
    ready() {
      this.showDesc = true;
    },
    start() {
      this.$router.push({ path: "/start" });
    },
  },
};
</script>
<style scoped>
.render3d {
  height: 100%;
  width: 100%;
}
</style>
