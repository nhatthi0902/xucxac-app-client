<template>
  <div class="wrapper-popup" :class="{ show: isShow }">
    <div class="popup">
      <div class="title">
        <h3>Luật chơi</h3>
      </div>
      <div class="body">
        <p class="rule">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </p>
        <div class="prepare-newgame">
          <h3>Chọn người chơi trước</h3>
          <ul class="player-select-list">
            <li
              v-for="(player, index) in players"
              :key="index"
              :ref="player.id"
              class="player-select-item"
              :class="{ selected: player.isSelected }"
              @click="selectedPlayer(player)"
            >
              {{ player.name }}
            </li>
          </ul>
          <h3>Chọn mức điểm</h3>
          <form @submit.prevent="knownRule">
            <input
              v-model="finalScore"
              type="number"
              max="100"
              min="0"
              placeholder="Final score"
              class="final-score newgame"
            />
          </form>
        </div>
        <button
          :disabled="!(getFinalScore && getIsPlayerSelected)"
          class="confirm"
          :class="{ disabled: !(getFinalScore && getIsPlayerSelected) }"
          @click="knownRule"
        >
          Đã hiểu
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    players: { type: Array, default: () => [] },
    isShow: { type: Boolean, default: () => false },
  },
  data() {
    return {
      newGameData: {},
      finalScore: 0,
      isPlayerSelected: false,
    }
  },
  computed: {
    getIsPlayerSelected() {
      return this.isPlayerSelected
    },
    getFinalScore() {
      return this.finalScore
    },
  },
  methods: {
    knownRule() {
      this.newGameData.firstPlayer = this.firstPlayer
      this.newGameData.finalScore = this.finalScore
      if (this.getFinalScore && this.getIsPlayerSelected) {
        this.$emit('knownRule', this.newGameData)
      }
    },
    selectedPlayer(player) {
      this.firstPlayer = player
      this.$emit('selectedPlayer', this.firstPlayer)
      if (this.players[0].isSelected || this.players[1].isSelected) {
        this.isPlayerSelected = true
      }
    },
  },
}
</script>
