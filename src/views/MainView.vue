<template>
  <div class="main-view">
    Main View
    <button @click="showToast">toast</button>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'

function showToast() {
  message.success('This is a toast')
}
</script>

<style lang="less" scoped>
.main-view {
  background-color: #ccc;
  height: 1000px;
}
</style>
