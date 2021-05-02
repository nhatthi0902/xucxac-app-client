<template>
  <div class="wrapper-popup" :class="{ show: isShow }">
    <div class="popup winner">
      <div class="body">
        <p>{{ message }}</p>
        <button class="confirm" @click="closeWinner">Đã hiểu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    message: { type: String, default: () => '' },
    isShow: { type: Boolean, default: () => false },
  },
  data() {
    return {}
  },
  methods: {
    closeWinner() {
      this.$emit('haveWinner', this.playerName)
    },
  },
}
</script>
