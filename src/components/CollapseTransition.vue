<template>
  <transition v-on="t">
    <slot></slot>
  </transition>
</template>

<script setup>
const t = {
  beforeEnter(el) {
    el.style.transition = '0.3s height ease-in-out'
    if (!el.dataset) el.dataset = {}
    el.style.height = 0
  },

  enter(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    el.style.overflow = 'hidden'
  },

  afterEnter(el) {
    el.style.transition = ''
    el.style.height = ''
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = '0.3s height ease-in-out'
      el.style.height = 0
    }
  },

  afterLeave(el) {
    el.style.transition = ''
    el.style.height = ''
  },
}
</script>

<style lang="scss" scoped></style>
