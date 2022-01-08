<template>
  <div class="main">
    <h1 class="game-title">Simon game</h1>
    <Simon />
  </div>
</template>

<script>
import Simon from "@/components/Simon";
export default {
  name: "App",
  components: {
    Simon,
  },
};
</script>

<style>
* {
  background-color: rgb(54, 57, 63);
}
.game-title {
  text-align: center;
  color: whitesmoke;
  font-size: 40px;
}
</style>
