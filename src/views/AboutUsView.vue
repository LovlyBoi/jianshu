<template>
  <div class="about-us">
    <div class="view">
      <div class="pic">
        <a class="p1" href="javacript:;">
          <img :src="i1" alt="lzw" /><br />
          <aa>成员1：柳智文</aa><br />
          <aa>计算机19-5班</aa><br />
          <aa>1904010515</aa><br />
        </a>
        <a class="p2" href="javacript:;">
          <img :src="i2" alt="lpz" /><br />
          <aa>成员2：李沛泽</aa><br />
          <aa>计算机19-5班</aa><br />
          <aa>1904010511</aa><br />
        </a>
        <a class="p3" href="javacript:;">
          <img :src="i3" alt="lmq" /><br />
          <aa>成员3：李梦琴</aa><br />
          <aa>计算机19-5班</aa><br />
          <aa>1904010510</aa><br />
        </a>
        <a class="p4" href="javacript:;">
          <img :src="i4" alt="lmh" /><br />
          <aa>成员4：吕梦函</aa><br />
          <aa>计算机19-5班</aa><br />
          <aa>1904010516</aa><br />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import i1 from '@/assets/img/lzw.jpg'
import i2 from '@/assets/img/lpz.jpg'
import i3 from '@/assets/img/lmq.jpg'
import i4 from '@/assets/img/lmh.jpg'
</script>

<style lang="less" scoped>
.about-us {
  width: auto;
  background-color: rgba(234, 103, 103, 0.518);
  .view {
    margin-left: 15%;
    margin-right: 15%;
    border: 2px solid #000;
    background-color: rgba(255, 255, 255, 0.573);
    .pic {
      width: auto;

      padding-left: 14%;
      .p1 {
        display: block;
        padding-top: 20px;
        width: 500px;
        height: 500px;
        overflow: hidden;
        img {
          height: 60%;
        }
      }
      .p2 {
        display: block;
        padding-top: 20px;
        width: 500px;
        height: 500px;
        overflow: hidden;
        img {
          height: 60%;
        }
      }
      .p3 {
        display: block;
        padding-top: 20px;
        width: 500px;
        height: 500px;
        overflow: hidden;
        img {
          height: 60%;
        }
      }
      .p4 {
        display: block;
        padding-top: 20px;
        width: 500px;
        height: 500px;
        overflow: hidden;
        img {
          height: 60%;
        }
      }
      aa {
        padding-left: 20px;
        width: 200px;
        height: 200px;
        color: #424242;
        font-size: 20px;
      }
    }
  }
}
</style>
