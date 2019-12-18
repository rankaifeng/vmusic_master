<template>
  <div class="hello">
    <div class="spa">22</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  .spa {
    font-size: 25px;
  }
}
</style>
