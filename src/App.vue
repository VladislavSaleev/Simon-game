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
  font-family: "Mukta", sans-serif;
  background-color: rgb(27, 26, 26);
}
.game-title {
  /* font-family: "Mukta", sans-serif; */
  text-align: center;
  color: #ccc;
  font-size: 40px;
}
@media screen and (max-width: 768px) {
  .game-title {
    font-size: 27px;
  }
}
</style>
