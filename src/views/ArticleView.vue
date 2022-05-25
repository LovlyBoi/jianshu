<template>
  <div class="article-view">
    <div class="width-limit">
      <div class="main-pannel">
        <h1 class="title">{{ blog.title || '' }}</h1>
        <UserCard
          :avatar="blog.author_avatar"
          :username="blog.author"
          :createAt="blog.createAt"
          :updateAt="blog.updateAt"
        ></UserCard>
        <div id="article-content" v-html="blog.article" ref="articleRef"></div>
      </div>
      <div class="side-pannel"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import UserCard from '@/components/UserCard.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { getBlogById } from '@/api'

const route = useRoute()

const blog = ref({})

const articleRef = ref(null)

getBlogById(route.params.id)
  .then((res) => {
    blog.value = res
    console.log(blog.value)
    nextTick(() => {
      articleRef.value?.querySelectorAll('pre > code').forEach((el) => {
        hljs.highlightElement(el)
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<style lang="less" scoped>
.article-view {
  .width-limit {
    color: var(--main-color);
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    h1, h2, h3, h4, h5, h6 {
      color: var(--main-color) !important;
    }

    .main-pannel {
      width: 730px;
      box-sizing: border-box;
      padding: 0 32px 32px 32px;

      .title {
        font-size: 30px;
      }
    }

    .side-pannel {
      background-color: #dedede;
      width: 250px;
    }
  }
}
</style>
