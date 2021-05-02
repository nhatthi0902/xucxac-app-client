<template>
  <div class="wrapper-popup" :class="{ show: isShow }">
    <div class="popup create-name">
      <div class="title">
        <h3>Tên người chơi</h3>
      </div>
      <div class="body">
        <form @submit.prevent="createName">
          <input
            v-model="playerName"
            :maxlength="maxlength"
            class="player-name-input"
          />
        </form>
        <button
          :disabled="!getPlayerName"
          class="confirm"
          :class="{ disabled: !getPlayerName }"
          @click="createName"
        >
          Xác nhận
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    isShow: { type: Boolean, default: () => false },
  },
  data() {
    return {
      playerName: '',
      maxlength: 10,
    }
  },
  computed: {
    getPlayerName() {
      return this.playerName.trim()
    },
  },
  methods: {
    createName() {
      if (this.playerName.trim()) {
        this.$emit('createName', this.playerName)
      }
    },
  },
}
</script>
