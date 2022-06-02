<template>
  <div class="setting-item">
    <div class="label">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
  }
})
</script>

<style lang="less" scoped>
.setting-item {
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .label {
    color: var(--main-color);
    padding-right: 100px;
  }
}
</style>
