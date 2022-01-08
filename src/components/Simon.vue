<template>
  <div class="wrapper">
    <Playfield :opacityToggle="opacityToggle" @sendPlayerMove="playerMove" />
    <Settings
      :boardInfo="boardInfo"
      :isGameStarted="isGameStarted"
      :score="score"
      :bestScore="bestScore"
      :timeDelay="timeDelay"
      :currentTimeDelay="currentTimeDelay"
      @sendCurrentLevel="chooseLevel"
      @sendStartGame="startGame"
      @sendStopGame="stopGame"
    />
  </div>
</template>

<script>
import Settings from "@/components/Settings";
import Playfield from "@/components/Playfield";
export default {
  components: {
    Playfield,
    Settings,
  },
  data() {
    return {
      opacityToggle: {
        green: false,
        blue: false,
        red: false,
        yellow: false,
      },
      isGameStarted: false,
      playerMoves: [],
      aiMoves: [],
      isClickable: true,
      score: 0,
      bestScore: 0,
      boardInfo: "Press start",
      nextColor: {
        1: "green",
        2: "blue",
        3: "red",
        4: "yellow",
      },
      timeDelay: {
        easy: 1300,
        normal: 800,
        hard: 400,
      },
      currentTimeDelay: 800,
    };
  },
  methods: {
    startGame() {
      this.isGameStarted = true;
      this.playerMoves.length = 0;
      this.aiMoves.length = 0;
      this.score = 0;
      this.aiMove();
    },
    stopGame() {
      this.isGameStarted = false;
      this.score = 0;
    },
    chooseLevel(key) {
      if (!this.isGameStarted) {
        this.currentTimeDelay = this.timeDelay[key];
      }
    },
    playerMove(color) {
      if (this.isClickable) {
        this.playSounds(color);
        this.opacityToggle[color] = true;
        this.playerMoves.push(color);
        if (
          this.playerMoves.join(", ") == this.aiMoves.join(", ") &&
          this.playerMoves.length == this.aiMoves.length
        ) {
          this.playerMoves.length = 0;
          this.score += 1;
          if (this.score >= this.bestScore) {
            this.bestScore = this.score;
          }
          this.aiMove();
        }
        this.playerMoves.forEach((el, idx) => {
          if (this.isGameStarted && el !== this.aiMoves[idx]) {
            this.boardInfo = "Game over";
            this.playerMoves.length = 0;
            this.aiMoves.length = 0;
            this.playSounds("fail");
            this.isGameStarted = false;
          }
        });
        setTimeout(() => {
          this.opacityToggle[color] = false;
        }, 250);
      }
    },
    aiMove() {
      if (this.isGameStarted) {
        setTimeout(() => {
          this.isClickable = false;
          let randNum = Math.round(0.5 + Math.random() * 4);
          this.aiMoves.push(this.nextColor[randNum]);
          this.aiMoves.forEach((el, idx) => {
            setTimeout(() => {
              this.opacityToggle[el] = true;
              this.playSounds(el);
              setTimeout(() => {
                this.opacityToggle[el] = false;
              }, this.currentTimeDelay * 0.6);
            }, this.currentTimeDelay * (idx + 1));
          });
          setTimeout(() => {
            this.isClickable = true;
          }, this.currentTimeDelay * this.aiMoves.length + 500);
        }, 300);
      }
    },
    playSounds(color) {
      let audio;
      switch (color) {
        case "green":
          audio = new Audio(require("@/sounds/1piano-do.mp3"));
          audio.play();
          break;
        case "blue":
          audio = new Audio(require("@/sounds/2piano-re.mp3"));
          audio.play();
          break;
        case "red":
          audio = new Audio(require("@/sounds/3piano-mi.mp3"));
          audio.play();
          break;
        case "yellow":
          audio = new Audio(require("@/sounds/4piano-fa.mp3"));
          audio.play();
          break;
        case "fail":
          audio = new Audio(require("@/sounds/fail.mp3"));
          audio.play();
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>