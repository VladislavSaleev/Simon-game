<template>
  <div class="field">
    <div class="field__line">
      <div
      class="field__block"
      :class="{ opacity: opacityToggle.green }"
      style="background: green; border-radius: 300px 20px 20px 20px"
      @click="onPlayerMove('green')"
      />

      <div
      class="field__block"
      :class="{ opacity: opacityToggle.blue }"
      style="background: blue; border-radius: 20px 300px 20px 20px"
      @click="onPlayerMove('blue')"
      />
    </div>

    <div class="field__line">
      <div
      class="field__block"
      :class="{ opacity: opacityToggle.red }"
      style="background: red; border-radius: 20px 20px 20px 300px"
      @click="onPlayerMove('red')"
      />

      <div
      class="field__block"
      :class="{ opacity: opacityToggle.yellow }"
      style="background: yellow; border-radius: 20px 20px 300px 20px"
      @click="onPlayerMove('yellow')"
      />
    </div>

    <div class="center-panel">
      <div class="center-panel__score">
        {{ score }}
      </div>

      <div
        class="center-panel__button"
        @click="onToggleGameState"
      >
        {{ buttonLabel }}
      </div>
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
      default: 0,
    },
    isGameStarted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonLabel() {
      return this.isGameStarted ? 'Stop' : 'Start'
    },
  },
  methods: {
    onPlayerMove(color) {
      this.$emit("onPlayerMove", color);
    },
    onToggleGameState() {
      this.$emit("on-toggle-game-state", !this.isGameStarted);
    }
  },
};
</script>

<style scoped>
.field {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.field__line {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
}
.field__block {
  height: 250px;
  width: 250px;
  margin: 4px;
  opacity: 0.5;
  box-shadow: 0px 0px 5px 1px #000000;
}
.field__block:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 10px 2px #000000;
}
.opacity {
  opacity: 1;
}
.center-panel {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 120px;
  height: 120px;
  color: #ccc;
  background-color: rgb(26, 26, 26);
  box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5),
    0px 0px 10px 1px #000000;
  border-radius: 50%;
  user-select: none;
  z-index: 20;
}
.center-panel__button:hover {
  background-color: rgb(121, 121, 121);
}
.center-panel__score {
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  
}
.center-panel__button {
  padding: 6px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .field__block {
    width: 200px;
    height: 200px;
  }
  .center-panel {
    width: 100px;
    height: 100px;
  }
  .center-panel__score {
    font-size: 36px;
    line-height: 36px;
  }
  .center-panel__button {
    padding: 4px 8px;
    font-size: 17px;
    line-height: 17px;
  }
}
@media screen and (max-width: 425px) {
  .field__block {
    width: 140px;
    height: 140px;
  }
  .center-panel {
    width: 80px;
    height: 80px;
  }
  .center-panel__score {
    font-size: 32px;
    line-height: 32px;
  }
  .center-panel__button {
    padding: 3px 6px;
    font-size: 16px;
    line-height: 16px;
  }
}
</style>