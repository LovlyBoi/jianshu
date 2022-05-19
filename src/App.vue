<template>
  <CommonHeader></CommonHeader>
  <main id="content">
    <router-view />
  </main>
</template>

<script setup>
import Theme from '@/utils/theme'
import CommonHeader from './components/CommonHeader.vue'

Theme.changeTheme(Theme.getTheme())
</script>

<style lang="less"></style>
