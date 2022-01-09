<template>
  <div class="option-wrapper">
    <div class="score-bar">
      <span v-if="isGameStarted" class="score"
        >Score:<span class="current-score">{{ score }}</span>
      </span>
      <span v-if="!isGameStarted" class="score">{{ boardInfo }}</span>
      <span class="score"
        >Best score:<span class="current-score">{{ bestScore }}</span>
      </span>
      <div class="game-settings">
        <div class="score">Speed:</div>
        <div class="game-levels">
          <button
            v-for="(level, key, index) in timeDelay"
            :key="index"
            class="game-level"
            :class="{ active: this.currentTimeDelay == this.timeDelay[key] }"
            @click="sendCurrentLevel(key)"
          >
            {{ key.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
    <button class="btn-game" v-if="!isGameStarted" @click="sendStartGame">
      Start
    </button>
    <button class="btn-game" v-if="isGameStarted" @click="sendStopGame">
      Stop
    </button>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
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
    sendStartGame() {
      this.$emit("sendStartGame");
    },
    sendStopGame() {
      this.$emit("sendStopGame");
    },
  },
};
</script>

<style scoped>
.option-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.btn-game {
  font-family: "Mukta", sans-serif;
  width: 140px;
  height: 65px;
  margin-top: 20px;
  border: 3px solid teal;
  background-color: rgb(185, 187, 190);
  border-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 25px;
  font-weight: bold;
}
.score-bar {
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
.score {
  font-family: "Mukta", sans-serif;
  display: flex;
  height: 60px;
  width: 250px;
  align-items: center;
  justify-content: center;
  background-color: rgb(57, 79, 96);
  font-size: 30px;
  color: whitesmoke;
}
.current-score {
  font-family: "Mukta", sans-serif;
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
  font-family: "Mukta", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  text-align: center;
  background-color: rgb(110, 110, 110);
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
}
.game-level:hover {
  background-color: rgb(30, 104, 104);
}
.active {
  background-color: black;
}
@media screen and (max-width: 1200px) {
  .score {
    font-size: 27px;
  }
  .current-score {
    font-size: 29px;
  }
}
</style>