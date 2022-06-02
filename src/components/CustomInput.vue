<template>
  <input type="text" v-bind="$attrs" class="custom-input" v-model="value" />
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:model-value'])

const value = computed({
  get: () => props.modelValue,
  set: (newVal) => emit('update:model-value', newVal),
})
</script>

<style lang="less" scoped>
.custom-input {
  background-color: var(--user-input-bgcolor);
  color: var(--user-input-color);
  border: 1px solid #ccc;
  height: 24px;
  box-sizing: content-box;
  border-radius: 4px;
  padding-left: 4px;

  &:focus {
    outline: none;
  }
}
</style>
