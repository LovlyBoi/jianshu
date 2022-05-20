<template>
  <div class="register-view">
    <input type="text" class="username" placeholder="你的用户名" v-model="user.username" />
    <span class="input-icon iconfont icon-yonghu"></span>
    <input type="password" class="password" placeholder="密码" v-model="user.password" />
    <span class="input-icon iconfont icon-mima1"></span>
    <input
      type="password"
      class="password-again"
      placeholder="再次输入密码"
      v-model="user.passwordAgain"
    />
    <span class="input-icon iconfont icon-zaicishurumima"></span>
    <div class="login-btn" @click="handleRegister">注册</div>
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
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { register } from '@/api'
import md5 from 'md5'

const store = useStore()
const router = useRouter()

const user = reactive({
  username: '',
  password: '',
  passwordAgain: '',
})

async function handleRegister() {
  const hash = md5(user.password)
  console.log(hash)
  const { token } = await register(user.username, hash)
  if (token) {
    store.commit('changeLoginState', {
      state: true,
      token,
    })
    router.replace('/')
  }
}
</script>

<style lang="less" scoped>
.register-view {
  margin-top: 50px;
  color: var(--user-pannel-color);

  .username,
  .password,
  .password-again {
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
  }

  .password-again {
    transform: translateY(-2px);
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
    background-color: #42c02e;
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
