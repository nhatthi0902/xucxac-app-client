<template>
  <div>
    <button
      class="control btn-new"
      :disabled="!(host && start)"
      @click="newGame"
    >
      <i class="ion-ios-plus-outline"></i>Lượt mới
    </button>
    <button class="control btn-roll" :disabled="!rolling" @click="rollDice">
      <i class="ion-ios-loop"></i>Xoay xúc xắc
    </button>
    <input
      type="text"
      placeholder="Final score"
      class="final-score ingame"
      :value="finalScore"
      readonly
    />
  </div>
</template>

<script>
export default {
  props: {
    finalScore: { type: Number, default: () => 0 },
    rolling: { type: Boolean, default: () => false },
    host: { type: Boolean, default: () => false },
    start: { type: Boolean, default: () => false },
  },
  data() {
    return {}
  },
  methods: {
    newGame() {
      this.$emit('newGame')
    },
    rollDice() {
      this.$emit('rollDice')
    },
  },
}
</script>
