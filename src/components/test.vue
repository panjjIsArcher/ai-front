<template>
    <div class="test">
        <img :src="src" alt=""/>
    </div>
</template>
<script>
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'test' ,
   data(){
    return {
      src :require("@/assets/img/apple.jpeg")
    }
  }
}
</script>