<template>
  <div class="main-view">
    <div class="width-limit">
      <div class="main-pannel">
        <a class="main-page-img" href="javacript:;">
          <img :src="starProject" alt="繁星计划" />
        </a>
        <BlogList> </BlogList>
      </div>
      <div class="side-pannel"></div>
    </div>
  </div>
</template>

<script setup>
import starProject from '@/assets/img/star-project.png'
import BlogList from '@/components/BlogList.vue'
</script>

<style lang="less" scoped>
.main-view {
  .width-limit {
    max-width: 960px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    .main-pannel {
      width: 625px;

      .main-page-img {
        display: block;
        width: 100%;
        height: 270px;
        border-radius: 8px;
        overflow: hidden;

        img {
          height: 100%;
        }
      }
    }

    .side-pannel {
      background-color: #dedede;
      width: 280px;
    }
  }
}
</style>
