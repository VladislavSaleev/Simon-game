<template>
  <div class="wrapper">
    <Playfield
      :opacityToggle="opacityToggle"
      :score="score"
      @sendPlayerMove="playerMove"
    />
    <Settings
      :boardInfo="boardInfo"
      :isGameStarted="isGameStarted"
      :score="score"
      :bestScore="bestScore"
      :timeDelay="timeDelay"
      :currentTimeDelay="currentTimeDelay"
      @sendCurrentLevel="chooseLevel"
      @sendToggleGameState="toggleGameState"
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
        easy: 1100,
        normal: 700,
        hard: 300,
      },
      currentTimeDelay: 700,
    };
  },
  methods: {
    toggleGameState() {
      this.isGameStarted = !this.isGameStarted;
      this.playerMoves.length = 0;
      this.aiMoves.length = 0;
      this.score = 0;
      this.boardInfo = "Press start";
      if (this.isGameStarted) {
        this.boardInfo = "Follow the steps";
        this.aiMove();
      }
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
        setTimeout(() => {
          this.opacityToggle[color] = false;
        }, 250);
      }
    },
    aiMove() {
      this.isClickable = false;
      //Run the sequence
      setTimeout(() => {
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
        //Allow player click when sequence is over + 0.5s
        setTimeout(() => {
          this.isClickable = true;
        }, this.currentTimeDelay * this.aiMoves.length + 500);
      }, 300);
    },
    //Sounds reproduction
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
  watch: {
    //Watching for correctness of player's clicks and run new sequence if all right
    playerMoves: {
      handler() {
        //Correct!
        if (
          this.playerMoves.join(", ") == this.aiMoves.join(", ") &&
          this.playerMoves.length == this.aiMoves.length &&
          this.playerMoves.length !== 0
        ) {
          this.playerMoves.length = 0;
          this.score += 1;
          this.aiMove();
        }
        //Fail!
        this.playerMoves.forEach((el, idx) => {
          if (this.isGameStarted && el !== this.aiMoves[idx]) {
            this.toggleGameState();
            this.playSounds("fail");
            this.boardInfo = "Game over";
          }
        });
      },
      deep: true,
    },
    //Update best score
    score: {
      handler(newValue) {
        if (newValue > this.bestScore) {
          this.bestScore = newValue;
        }
      },
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
@media screen and (max-width: 1024px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>