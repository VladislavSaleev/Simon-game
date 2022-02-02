<template>
  <div class="option-wrapper">
    <div class="info-bar">
      <span class="info">{{ boardInfo }}</span>
      <span class="info"
        >Best score: <span class="current-info">{{ bestScore }}</span>
      </span>
      <div class="game-settings">
        <div class="info">Select difficulty:</div>
        <div class="game-levels">
          <div
            v-for="(level, key, index) in timeDelay"
            :key="index"
            class="game-level"
            :class="{ active: this.currentTimeDelay == this.timeDelay[key] }"
            @click="sendCurrentLevel(key)"
          >
            {{ key.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
    <button class="btn-game" @click="sendToggleGameState">
      {{ this.isGameStarted ? "Stop" : "Start" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    boardInfo: {
      type: String,
      required: true,
    },
    isGameStarted: {
      type: Boolean,
      required: true,
    },
    bestScore: {
      type: Number,
      required: true,
    },
    timeDelay: {
      type: Object,
      required: true,
    },
    currentTimeDelay: {
      type: Number,
      required: true,
    },
  },
  methods: {
    sendCurrentLevel(key) {
      this.$emit("sendCurrentLevel", key);
    },
    sendToggleGameState() {
      this.$emit("sendToggleGameState");
    },
  },
};
</script>

<style scoped>
.option-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
}
.btn-game {
  width: 140px;
  height: 55px;
  margin-top: 20px;
  border: 3px solid teal;
  background-color: rgb(185, 187, 190);
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
}
.info-bar {
  display: flex;
  flex-direction: column;
  background-color: rgb(89, 109, 125);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 30px;
  height: 250px;
  width: 300px;
}
.info {
  height: 60px;
  width: 250px;
  text-align: center;
  background-color: rgb(57, 79, 96);
  font-size: 30px;
  color: whitesmoke;
}
.current-info {
  font-weight: bold;
  font-size: 35px;
  color: rgb(25, 214, 222);
  background-color: rgb(57, 79, 96);
}
.game-levels {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(57, 79, 96);
}
.game-level {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  text-align: center;
  background-color: rgb(110, 110, 110);
  color: white;
  font-size: 15px;
  /* font-weight: bold; */
  border-radius: 3px;
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
}
.game-level:hover {
  background-color: rgb(30, 104, 104);
}
.active {
  background-color: black !important;
}
@media screen and (max-width: 1024px) {
  .option-wrapper {
    flex-direction: column-reverse;
    margin-left: 0;
  }
}
@media screen and (max-width: 768px) {
  .info {
    font-size: 27px;
  }
  .current-info {
    font-size: 29px;
  }
  .btn-game {
    width: 110px;
    height: 45px;
  }
}
</style>