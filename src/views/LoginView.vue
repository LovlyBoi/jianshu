<template>
  <div class="login-view">
    <input type="text" class="username" placeholder="用户名" v-model="user.username" />
    <span class="input-icon iconfont icon-yonghu"></span>
    <input type="password" class="password" placeholder="密码" v-model="user.password" />
    <span class="input-icon iconfont icon-mima1"></span>
    <label for="remember-me">
      <input type="checkbox" id="remember-me" v-model="rememberMe" />
      记住我
    </label>
    <div class="login-btn" @click="handleLogin">登录</div>
    <div class="more-sign">
      <h6>更多登录方式</h6>
      <div class="more-sign-icon">
        <span class="iconfont icon-xinlangweibo"></span>
        <span class="iconfont icon-weixin"></span>
        <span class="iconfont icon-QQ"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { login } from '@/api'
import md5 from 'md5'

const store = useStore()
const router = useRouter()

const rememberMe = ref(true)

const user = reactive({
  username: '',
  password: '',
})

async function handleLogin() {
  const hash = md5(user.password)
  console.log(hash)
  const { token, userId, username, avatar } = await login(user.username, hash)
  if (token) {
    store.commit('changeLoginState', {
      state: true,
      token,
      userId,
      username,
      avatar,
    })
    message.success('登陆成功！')
    router.replace('/')
  }
}
</script>

<style lang="less" scoped>
.login-view {
  margin-top: 50px;
  color: var(--user-pannel-color);

  .username,
  .password {
    color: var(--user-input-color);
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: 1px solid var(--user-input-border-color);
    padding: 4px 35px;
    background-color: var(--user-input-bgcolor);

    &:focus {
      border: 1px solid var(--user-input-border-color);
      outline: none;
    }

    &::placeholder {
      color: var(--user-pannel-color);
      font-size: 14px;
    }
  }

  .username {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .password {
    transform: translateY(-1px);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-bottom: 15px;
  }

  .input-icon {
    font-size: 18px;
    position: absolute;
    left: 60px;
    transform: translateY(14px);
  }

  label {
    font-size: 15px;
  }

  .login-btn {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    text-align: center;
    line-height: 44px;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 15px;
    cursor: pointer;
    background-color: #3194d0;
  }

  .more-sign {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h6 {
      display: flex;
      justify-content: center;
      align-items: center;

      &::after,
      &::before {
        content: '';
        display: inline-block;
        width: 56px;
        height: 1px;
        background-color: rgb(181, 181, 181);
      }

      &::before {
        margin-right: 14px;
      }

      &::after {
        margin-left: 14px;
      }
    }

    .more-sign-icon {
      width: 60%;
      margin: 0 auto;
      display: inline-flex;
      justify-content: space-around;

      .iconfont {
        font-size: 26px;
        cursor: pointer;
      }

      .icon-xinlangweibo {
        font-size: 24px;
        transform: translateY(1px);
        color: #d05c4b;
      }

      .icon-weixin {
        color: #54b843;
      }

      .icon-QQ {
        color: #5988cf;
      }
    }
  }
}
</style>
