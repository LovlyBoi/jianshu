<template>
  <div class="setting-view">
    <div class="width-limit">
      <div class="setting-pannel">
        <div class="setting-avatar">
          <a-avatar :size="80" :src="$store.state.user.avatar"></a-avatar>
          <label class="upload" for="file-uploader">
            更改头像
            <input
              style="display: none"
              type="file"
              id="file-uploader"
              accept="image/gif, image/jpeg, image/x-png, image/jpg, image/*"
              @change="uploadAvatar"
            />
          </label>
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
import { modifyUsername, modifyAvatar } from '@/api'
import SettingItem from '@/components/SettingItem.vue'
import CustomInput from '@/components/CustomInput.vue'
import { message } from 'ant-design-vue'

const store = useStore()

const username = ref(store.state.user.username)

async function handleChangeName() {
  if (username.value === store.state.user.username) {
    return
  }
  const nextName = username.value
  const id = store.state.user.userId
  // 更改用户名：检查一不一样，不一样再发送到服务器，拿到返回的结果之后，改 state，改 localStorage
  const result = await modifyUsername(nextName, id)
  console.log(result)
  if (result instanceof Error) {
    message.error('修改失败')
  } else {
    message.success('修改成功')
    store.commit('changeUserInfo', { username: result.username })
  }
}

async function uploadAvatar(e) {
  const avatar = e.target.files[0]
  const result = await modifyAvatar(store.state.user.userId, avatar)
  if (result instanceof Error) {
    message.error('上传失败')
  } else {
    message.success('修改成功')
    store.commit('changeUserInfo', { avatar: result.url })
  }
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
          padding: 0 10px;
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
