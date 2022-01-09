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
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");
* {
  background-color: rgb(54, 57, 63);
}
.game-title {
  font-family: "Mukta", sans-serif;
  text-align: center;
  color: rgb(157, 211, 211);
  font-size: 40px;
}
@media screen and (max-width: 1200px) {
  .game-title {
    font-size: 27px;
  }
}
</style>
