<template>
  <div>
    <div class="member-view">
      <div class="member-v2">
        <div class="member-service">
          <div class="service first-href">
            <a href="javascript:;">会员权益中心</a>
          </div>
          <div class="service">
            <a href="javascript:;">会员福利社</a>
          </div>
          <div class="service">
            <a href="javascript:;">VIP</a>
          </div>
        </div>

        <div class="picture">
          <a class="img1" href="javacript:;">
            <img :src="starProject" alt="mem" />
          </a>
        </div>

        <div class="footer-links">
          <div class="footer-links-items">
            <dl>
              <dt>帮助中心</dt>
              <router-link class="find" to="/member">
                <dd><a href="javascript:;">账户管理</a></dd>
              </router-link>
              <router-link class="find" to="/description">
                <dd><a href="javascript:;">会员说明</a></dd>
              </router-link>
            </dl>

            <dl>
              <dt>服务支持</dt>
              <router-link class="find" to="/member">
                <dd><a href="javascript:;">资源分享</a></dd>
              </router-link>
              <router-link class="find" to="/member">
                <dd><a href="javascript:;">相关下载</a></dd>
              </router-link>
            </dl>
            <dl>
              <dt>关于我们</dt>
              <router-link class="find" to="/aboutUs">
                <dd><a href="javascript:;">制作人员</a></dd>
              </router-link>
              <router-link class="find" to="/callUs">
                <dd><a href="javascript:;">联系我们</a></dd>
              </router-link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import starProject from '@/assets/img/member.jpg'
</script>

<style lang="less" scoped>
.member-view {
  margin: 0 auto;
  width: 1226px;
  .member-v2 {
    margin: 3%;
    background-color: var(--user-pannel-bgcolor);
    border-radius: 8px;
    padding-bottom: 30px;

    .member-service {
      margin: 0 auto;
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #e0e0e0;
      .service {
        flex-grow: 1;
        text-align: center;
        border-left: 1px solid #e0e0e0;
        a {
          color: var(--main-color);
          font-size: 16px;
          vertical-align: middle;
        }
        i {
          margin-right: 6px;
          font-size: 24px;
          vertical-align: middle;
        }
        :hover {
          color: #ff6700;
        }
      }
      .first-href {
        border: none;
      }
    }
  }
  .footer-links {
    padding-left: 12.5%;
    .footer-links-items {
      position: relative;
      margin: 0 auto;
      padding-top: 40px;
      padding-bottom: 40px;
      width: 1226px;
      height: 169.9px;
      display: flex;
      align-items: center;
      dl {
        margin-top: 100px;
        margin-left: 100px;
        width: 200px;
        height: 150px;
        dt {
          width: 160px;
          height: 20px;
          color: var(--main-color);
          font-size: 14px;
          margin-bottom: 16px;
          margin-top: -1px;
        }
        dd {
          width: 160px;
          height: 17.6px;
          margin-top: 10px;
          a {
            font-size: 12px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
      .item-right {
        width: 251px;
        height: 110.2px;
        border-left: 1px solid #e0e0e0;
        position: absolute;
        right: 0;
        .concat {
          text-align: center;
          font-size: 22px;
          color: #ff6700;
        }
        .concat-message {
          text-align: center;
          font-size: 12px;
          color: #616161;
        }
      }
    }
  }
}
a {
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  color: #616161;
  line-height: 40px;
  display: inline-block;
  font-size: 16px;
}
.picture {
  margin-top: 50px;
  padding-left: 14%;
  .img1 {
    display: block;
    width: 100%;
    height: 250px;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
}
</style>
