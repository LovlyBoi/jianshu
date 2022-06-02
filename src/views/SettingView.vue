<template>
  <div class="setting-view">
    <div class="width-limit">
      <div class="setting-pannel">
        <div class="setting-avatar">
          <a-avatar :size="80" :src="$store.state.user.avatar"></a-avatar>
          <button class="upload" @click="uploadAvatar">更换头像</button>
        </div>
        <div class="setting-list">
          <SettingItem label="用户名">
            <CustomInput v-model="username" @blur="handleChangeName"></CustomInput>
          </SettingItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import SettingItem from '@/components/SettingItem.vue'
import CustomInput from '@/components/CustomInput.vue'

const store = useStore()

const username = ref(store.state.user.username)

function handleChangeName() {
  if (username.value !== store.state.user.username) {
    console.log(username.value)
  }
  // 更改用户名：检查一不一样，不一样再发送到服务器，拿到返回的结果之后，改 state，改 localStorage
}

function uploadAvatar() {
  console.log('changeAvatar!')
}
</script>

<style lang="less" scoped>
.setting-view {
  .width-limit {
    margin: 0 auto;
    margin-top: 30px;
    width: 700px;

    .setting-pannel {
      width: 100%;
      padding: 40px;
      height: 400px;
      border-radius: 8px;
      background-color: var(--blog-card-bgcolor);

      .setting-avatar {
        display: flex;
        align-items: center;

        .upload {
          margin-left: 60px;
          box-sizing: content-box;
          background-color: #fff;
          border: 1px solid #68bd48;
          height: 24px;
          border-radius: 13px;
          line-height: 24px;
          cursor: pointer;

          &:hover {
            background-color: #f7fcf5;
          }
        }
      }

      .setting-list {
        margin-top: 30px;
      }
    }
  }
}
</style>
