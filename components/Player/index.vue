<template>
  <div :class="'player-panel ' + player.status">
    <div class="player-name">{{ player.name }}</div>
    <div class="player-score">{{ player.totalScore }}</div>
    <div class="player-current-box">
      <div class="player-current-label">Current</div>
      <div class="player-current-score">{{ player.currentScore }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Object, default: () => {} },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
