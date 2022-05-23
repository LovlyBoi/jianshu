<template>
  <CommonHeader></CommonHeader>
  <main id="content">
    <!-- 这么用搭配文本编辑器可能有bug -->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view> -->
    <router-view></router-view>
  </main>
</template>

<script setup>
import Theme from '@/utils/theme'
import CommonHeader from './components/CommonHeader.vue'

Theme.changeTheme(Theme.getTheme())
</script>

<style lang="less"></style>
