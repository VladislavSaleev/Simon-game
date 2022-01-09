<template>
  <div class="field-wrapper">
    <div
      @click="sendPlayerMove('green')"
      class="block"
      :class="{ opacity: opacityToggle.green }"
      style="background: green; border-top-left-radius: 50px"
    ></div>
    <div
      @click="sendPlayerMove('blue')"
      class="block"
      :class="{ opacity: opacityToggle.blue }"
      style="background: blue; border-top-right-radius: 50px"
    ></div>
    <div
      @click="sendPlayerMove('red')"
      class="block"
      :class="{ opacity: opacityToggle.red }"
      style="background: red; border-bottom-left-radius: 50px"
    ></div>
    <div
      @click="sendPlayerMove('yellow')"
      class="block"
      :class="{ opacity: opacityToggle.yellow }"
      style="background: yellow; border-bottom-right-radius: 50px"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    opacityToggle: {
      type: Object,
      required: true,
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
.field-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 150px;
  width: 550px;
  height: 540px;
  margin-right: 50px;
}
.block {
  height: 250px;
  width: 250px;
  padding: 10px;
  opacity: 0.5;
}
.opacity {
  opacity: 1;
}
@media screen and (max-width: 1200px) {
  .field-wrapper {
    width: 330px;
    height: 320px;
    margin-left: 0px;
    margin-right: 0px;
    align-self: center;
  }
  .block {
    width: 140px;
    height: 140px;
  }
}
</style>