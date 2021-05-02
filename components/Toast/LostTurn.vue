<template>
  <div
    class="toast lost"
    :class="[position ? 'left' : 'right', { show: show }]"
  >
    <div class="body">
      <img src="/images/lost.png" />
      <p>Mất lượt rồi!</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    show: { type: Boolean, default: () => false },
    position: { type: Boolean, default: () => false },
  },
  data() {
    return {}
  },
}
</script>
