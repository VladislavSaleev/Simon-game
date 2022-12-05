<template>
  <div class="game-wrapper">
    <playfield
      :opacity-toggle="colorsHighlightState"
      :score="score"
      :is-game-started="isGameStarted"
      @on-player-move="playerMove"
      @on-toggle-game-state="toggleGameState"
    />

    <settings
      :board-info="boardInfo"
      :best-score="bestScore"
      :selected-bot-moves-delay="selectedBotMovesDelay"
      @on-difficulty-change="chooseDifficulty"
    />
  </div>
</template>

<script>
import settings from "@/components/Settings";
import playfield from "@/components/Playfield";
export default {
  components: {
    playfield,
    settings,
  },
  data() {
    return {
      isGameStarted: false,
      playerMoves: [],
      botMoves: [],
      isPlayerCanMove: true,
      score: 0,
      bestScore: 0,
      boardInfo: "Press start",
      colorList: {
        1: "green",
        2: "blue",
        3: "red",
        4: "yellow",
      },
      colorsHighlightState: {
        green: false,
        blue: false,
        red: false,
        yellow: false,
      },
      selectedBotMovesDelay: 700,
    };
  },
  methods: {
    toggleGameState(gameState) {
      this.isGameStarted = gameState;
      this.boardInfo = "Press start";
      this.resetCounters();
      if (gameState) {
        this.boardInfo = "Follow the steps";
        this.botMove();
      }
    },
    resetCounters() {
      this.playerMoves.length = 0;
      this.botMoves.length = 0;
      this.score = 0;
    },
    chooseDifficulty(level) {
      if (this.isPlayerCanMove) {
        this.selectedBotMovesDelay = level;
      }
    },
    playerMove(color) {
      if (this.isPlayerCanMove) {
        this.colorsHighlightState[color] = true;
        this.playerMoves.push(color);
        this.playSound(color);

        setTimeout(() => {
          this.colorsHighlightState[color] = false;
        }, 250);
      }
    },
    botMove() {
      this.isPlayerCanMove = false;
      //Run the sequence
      setTimeout(() => {
        let randomColorId = Math.round(0.5 + Math.random() * 4);
        this.botMoves.push(this.colorList[randomColorId]);
        this.botMoves.forEach((step, idx) => {
          setTimeout(() => {
            this.colorsHighlightState[step] = true;

            this.playSound(step);

            setTimeout(() => {
              this.colorsHighlightState[step] = false;
            }, this.selectedBotMovesDelay * 0.6);
          }, this.selectedBotMovesDelay * (idx + 1));
        });
        //Allow player click when sequence is over + 0.5s
        setTimeout(() => {
          this.isPlayerCanMove = true;
        }, this.selectedBotMovesDelay * this.botMoves.length + 500);
      }, 300);
    },
    playSound(color) {
      let sound;
      switch (color) {
        case "green":
          sound = new Audio(require("@/sounds/1piano-do.mp3"));
          break;
        case "blue":
          sound = new Audio(require("@/sounds/2piano-re.mp3"));
          break;
        case "red":
          sound = new Audio(require("@/sounds/3piano-mi.mp3"));
          break;
        case "yellow":
          sound = new Audio(require("@/sounds/4piano-fa.mp3"));
          break;
        case "fail":
          sound = new Audio(require("@/sounds/fail.mp3"));
      }
      sound.play();
    },
  },
  watch: {
    // Watching for correctness of player's clicks and run new sequence if all right
    playerMoves: {
      handler() {
        // Correct!
        if (
          this.playerMoves.join("") === this.botMoves.join("") &&
          this.playerMoves.length === this.botMoves.length &&
          this.playerMoves.length
        ) {
          this.playerMoves.length = 0;
          this.score++;

          this.botMove();
        }
        // Fail!
        this.playerMoves.forEach((step, idx) => {
          if (this.isGameStarted && step !== this.botMoves[idx]) {
            this.boardInfo = "Game over";

            this.toggleGameState(false);
            this.playSound("fail");
          }
        });
      },
      deep: true,
    },
    score(newScore) {
      if (newScore > this.bestScore) {
        this.bestScore = newScore;

        localStorage.setItem('stored-best-score', newScore);
      }
    },
  },
  created() {
    const storedBestScore = localStorage.getItem('stored-best-score');

    storedBestScore ? this.bestScore = storedBestScore : this.bestScore = 0;
  },
};
</script>

<style scoped>
.game-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>