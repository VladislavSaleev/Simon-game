<template>
  <div class="main">
    <h1 class="game-title">
      Simon game
    </h1>
    
    <simon />
  </div>
</template>

<script>
import simon from "@/components/Simon";
export default {
  name: "App",
  components: {
    simon,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");
* {
  padding: 0;
  margin: 0;
  transition: all 0.15s;
}
.main {
  font-family: "Mukta", sans-serif;
  background-color: rgb(27, 26, 26);
  min-height: 100vh;
}
.game-title {
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
