<template>
  <div class="board__wrapper">
    <span class="board__label">
      {{ boardInfo }}
    </span>

    <div class="board__label">
      {{ bestScoreLabel }}
    </div>

    <div class="board__label board__game-levels">
      <div
        v-for="(level, key, index) in botMovesDelays"
        :key="index"
        class="board__game-level"
        :class="{ active: this.selectedBotMovesDelay === level }"
        @click="onDifficultyChange(level)"
      >
        {{ key.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boardInfo: {
      type: String,
    },
    bestScore: {
      type: Number,
    },
    selectedBotMovesDelay: {
      type: Number,
    },
  },
  computed: {
    bestScoreLabel() {
      return `Best score: ${this.bestScore}`;
    }
  },
  data() {
    return {
      botMovesDelays: {
        easy: 1100,
        normal: 700,
        hard: 300,
      },
    };
  },
  methods: {
    onDifficultyChange(level) {
      this.$emit("on-difficulty-change", level);
    },
  },
};
</script>

<style scoped>
.board__wrapper {
  display: flex;
  flex-direction: column;
  background-color: rgb(89, 109, 125);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 6px;
  border-radius: 10px;
  height: 200px;
  width: 310px;
  box-shadow: 0px 0px 5px 1px #000000;
}
.board__label {
  width: 250px;
  text-align: center;
  background-color: #394f60;
  font-size: 30px;
  color: #ccc;
}
.board__game-levels {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5px;
}
.board__game-level {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  text-align: center;
  background-color: rgb(110, 110, 110);
  color: white;
  font-size: 15px;
  border-radius: 3px;
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
}
.board__game-level:hover {
  background-color: rgb(30, 104, 104);
}
.active {
  background-color: black !important;
}
@media screen and (max-width: 1119.99px) {
  .board__wrapper {
    position: static;
  }
}
@media screen and (max-width: 767.99px) {
  .board__label {
    font-size: 27px;
  }
}
</style>