<template>
  <div class="user-view">
    <div class="user-pannel">
      <header class="switch-pannel">
        <router-link to="/user/login">
          登录
        </router-link>
        <span class="split">·</span>
        <router-link to="/user/register">
          注册
        </router-link>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.user-view {
  background-color: var(--main-bgcolor);
  height: 100%;

  .user-pannel {
    width: 300px;
    position: absolute;
    left: 50%;
    margin-top: 58px;
    background-color: var(--user-pannel-bgcolor);
    display: inline-block;
    padding: 50px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    .switch-pannel {
      font-size: 20px;
      display: flex;
      justify-content: center;

      a {
        padding: 10px;
      }

      a.router-link-active {
        color: var(--logo-color);
        border-bottom: 2px solid var(--logo-color);
      }

      .split {
        line-height: 45px;
        padding: 0 8px;
      }
    }
  }
}
</style>
