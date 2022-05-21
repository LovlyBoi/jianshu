<template>
  <div class="common-header clear-fix">
    <nav>
      <router-link to="/">
        <div class="logo">
          <img :src="logo" alt="简书" />
        </div>
      </router-link>

      <ul class="center-nav">
        <router-link class="find" to="/">
          <span class="iconfont icon-faxian"></span>
          发现
        </router-link>
        <router-link class="focus" to="/follow">
          <span class="iconfont icon-shu"></span>
          关注
        </router-link>
        <router-link class="find" to="/member">
          <span class="iconfont icon-huiyuan"></span>
          会员
        </router-link>
        <router-link class="find" to="/it">
          <span class="iconfont icon-daima"></span>
          IT技术
        </router-link>
        <router-link class="find" to="/message">
          <span class="iconfont icon-tixing"></span>
          消息
        </router-link>
      </ul>
      <div class="theme-btn" @click="changeTheme">
        {{ Theme.themeState.value === 'light' ? '深色主题' : '浅色主题' }}
      </div>
      <div class="user" v-if="isLogin">
        <div class="avactor">
          <div class="avactor-container">
            <img :src="avactor" alt="用户头像" />
          </div>
        </div>
        <ul class="avactor-popup">
          <li class="popup-item">
            <span class="iconfont icon-wode"></span>
            我的主页
          </li>
          <li class="popup-item">
            <span class="iconfont icon-xihuan"></span>
            喜欢的文章
          </li>
          <li class="popup-item">
            <span class="iconfont icon-shezhi"></span>
            设置
          </li>
          <li class="popup-item" @click="handleExit">
            <span class="iconfont icon-tuichu"></span>
            退出
          </li>
        </ul>
      </div>
      <div class="login-btn" v-else>
        <router-link to="/user/login">登录</router-link>
      </div>
      <div class="write-article-pannel">
        <div class="write-article-btn" @click="$router.push('/writer')">
          <span class="iconfont icon-yumaobi"></span>
          写文章
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import logo from '@/assets/img/logo.png'
import Theme from '@/utils/theme'
import avactor from '@/assets/img/avactor.jpeg'

const store = useStore()

const isLogin = computed(() => store.state.isLogin)

function changeTheme() {
  Theme.changeTheme(Theme.themeState.value === 'light' ? 'dark' : 'light')
}

function handleExit() {
  store.commit('changeLoginState', {
    state: false,
  })
}
</script>

<style lang="less" scoped>
.common-header {
  position: sticky;
  z-index: 9999;
  height: 58px;
  top: 0;
  background-color: var(--nav-bgcolor);
  border-bottom: 1px solid var(--nav-border-color);

  nav {
    margin: 0 36px;
    height: 100%;
    background-color: var(--nav-bgcolor);
    display: flex;
    align-items: center;
    a {
      height: 100%;

      .logo {
        width: 100px;
        height: 100%;

        img {
          height: 100%;
        }
      }
    }

    .center-nav {
      max-width: 945px;
      min-width: 777px;
      height: 100%;
      margin: 0 auto;
      font-size: 17px;
      padding: 0;
      display: flex;
      color: var(--main-color);

      a {
        width: 89px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.router-link-active {
          color: var(--logo-color);
        }

        &:hover {
          background-color: var(--nav-hover-bgcolor);
        }
      }

      .iconfont {
        font-size: 24px;
        vertical-align: bottom;
        margin-right: 3px;
      }

      .icon-shu {
        font-size: 20px;
      }

      .icon-huiyuan {
        font-size: 22px;
        position: relative;
        top: -2px;
      }

      .icon-daima {
        position: relative;
        top: -0.5px;
      }
    }

    .theme-btn {
      min-width: 100px;
      text-align: center;
      line-height: 58px;
      color: var(--nav-theme-btn-color);
      cursor: pointer;
    }

    .avactor {
      width: 80px;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:hover {
        background-color: var(--nav-hover-bgcolor);
      }

      .avactor-container {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          top: 26px;
          right: 5px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #999;
        }

        img {
          width: 40px;
        }
      }
    }

    .avactor-popup {
      display: none;
      position: fixed;
      z-index: -1;
      padding: 6px 0;
      margin: 0;
      top: 58px;
      width: 160px;
      color: var(--main-color);
      background-color: var(--nav-bgcolor);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

      .popup-item {
        height: 50px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;

        .iconfont {
          color: var(--logo-color);
          font-size: 18px;
          transform: translateY(1px);
          margin-right: 10px;
        }

        &:hover {
          background-color: var(--nav-hover-bgcolor);
        }
      }
    }

    .user:hover .avactor-popup {
      display: block;
    }

    .user:hover .avactor {
      background-color: var(--nav-hover-bgcolor);
    }

    .login-btn {
      height: 100%;
      color: var(--main-color);
      line-height: 58px;
      width: 80px;
      text-align: center;
    }

    .write-article-pannel {
      color: #fff;
      width: 100px;
      margin: 0 12px;

      .write-article-btn {
        cursor: pointer;
        font-size: 15px;
        height: 40px;
        background-color: var(--logo-color);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon-yumaobi {
          font-size: 18px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
