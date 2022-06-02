<template>
  <div class="user-card">
    <div class="avatar">
      <a-avatar :src="$store.state.user.avatar" :size="52" />
    </div>
    <div class="user-pannel">
      <div class="user-title">{{ username }}</div>
      <div class="user-date">
        <span v-if="createAt">创建于 {{ dayjs(createAt).format('YYYY.MM.DD HH:mm:ss') }} </span>
        <span v-if="updateAt && updateAt !== createAt" style="margin-left: 10px">
          更新于 {{ dayjs(updateAt).format('YYYY.MM.DD HH:mm:ss') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import dayjs from 'dayjs'

defineProps({
  username: {
    type: String,
    default: '用户名',
  },
  avatar: {
    type: String,
    default: 'https://joeschmoe.io/api/v1/random',
  },
  createAt: {
    type: String,
  },
  updateAt: {
    type: String,
  },
})
</script>

<style lang="less" scoped>
.user-card {
  box-sizing: content-box;
  height: 52px;
  padding: 3px 0;
  display: flex;
  gap: 10px;

  .user-pannel {
    display: flex;
    flex-direction: column;

    .user-title {
      font-size: 16px;
      margin-bottom: 6px;
    }

    .user-date {
      font-size: 12px;
    }
  }
}
</style>
