<template>
  <div>
    <div id="dice-1" class="dice">
      <div :class="'spinner dice-' + dices[0]">
        <div class="face1">1</div>
        <div class="face2">2</div>
        <div class="face3">3</div>
        <div class="face4">4</div>
        <div class="face5">5</div>
        <div class="face6">6</div>
      </div>
    </div>
    <div id="dice-2" class="dice">
      <div :class="'spinner dice-' + dices[1]">
        <div class="face1">
          <img src="/images/dice-1.png" />
        </div>
        <div class="face2">2</div>
        <div class="face3">3</div>
        <div class="face4">4</div>
        <div class="face5">5</div>
        <div class="face6">6</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dices: { type: Array, default: () => [] },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
