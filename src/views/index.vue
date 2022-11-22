<template>
  <div class="index layer">
    <start @ready="ready" />
    <Describution v-if="showDesc"/> 
  </div>
</template>

<script>
import Describution from "@/components/desc";
import Start from "@/components/start";

export default {
  components: { Start,Describution },
  data() {
    return {
      showDesc: true
    };
  },
  methods: {
    ready() {
      this.showDesc = true;
      
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
