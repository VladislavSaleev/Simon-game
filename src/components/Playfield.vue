<template>
  <div class="main">
    <div class="field-wrapper">
      <div
        @click="sendPlayerMove('green')"
        class="block"
        :class="{ opacity: opacityToggle.green }"
        style="background: green; border-radius: 300px 20px 20px 20px"
      ></div>
      <div
        @click="sendPlayerMove('blue')"
        class="block"
        :class="{ opacity: opacityToggle.blue }"
        style="background: blue; border-radius: 20px 300px 20px 20px"
      ></div>
    </div>
    <div class="score">{{ score }}</div>
    <div class="field-wrapper">
      <div
        @click="sendPlayerMove('red')"
        class="block"
        :class="{ opacity: opacityToggle.red }"
        style="background: red; border-radius: 20px 20px 20px 300px"
      ></div>
      <div
        @click="sendPlayerMove('yellow')"
        class="block"
        :class="{ opacity: opacityToggle.yellow }"
        style="background: yellow; border-radius: 20px 20px 300px 20px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opacityToggle: {
      type: Object,
      required: true,
    },
    score: {
      type: Number,
    },
  },
  methods: {
    sendPlayerMove(color) {
      this.$emit("sendPlayerMove", color);
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%;
  width: 100%; */
}
.field-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
}
.block {
  height: 250px;
  width: 250px;
  margin: 4px;
  opacity: 0.5;
  transition: all 0.15s;
}
.block:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 10px 2px #000000;
}
.opacity {
  opacity: 1;
}
.score {
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgb(27, 26, 26);
  box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5),
    0px 0px 10px 1px #000000;
  margin: auto;
  line-height: 120px;
  text-align: center;
  border-radius: 50%;
  color: #ccc;
  font-size: 70px;
  font-weight: bold;
  user-select: none;
  z-index: 20;
}
@media screen and (max-width: 768px) {
  .block {
    width: 200px;
    height: 200px;
  }
  .score {
    width: 100px;
    height: 100px;
    font-size: 55px;
    line-height: 100px;
  }
}
@media screen and (max-width: 425px) {
  .block {
    width: 140px;
    height: 140px;
  }
  .score {
    width: 80px;
    height: 80px;
    font-size: 45px;
    line-height: 80px;
  }
}
</style>