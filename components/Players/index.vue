<template>
  <div>
    <Player v-for="(player, index) in players" :key="index" :player="player" />
  </div>
</template>

<script>
import Player from '../Player'
export default {
  components: {
    Player,
  },
  props: {
    players: { type: Array, default: () => [] },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
