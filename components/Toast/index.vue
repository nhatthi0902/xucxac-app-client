<template>
  <div class="toast" :class="{ show: show }">
    <div class="header">
      <h3>Mời bạn chơi cùng</h3>
      <button class="clipboard" @click="copyLink">
        {{ getCopyTitle }}
      </button>
    </div>
    <div class="body">
      <div class="content">
        <div ref="inviteLink" class="invite-link">
          {{ invite }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invite: { type: String, default: () => '' },
    show: { type: Boolean, default: () => false },
  },
  data() {
    return {
      copyTitle: 'Copy',
    }
  },
  computed: {
    getCopyTitle() {
      return this.copyTitle
    },
  },
  methods: {
    copyLink() {
      this.copyTitle = 'Copied'
    },
  },
}
</script>
