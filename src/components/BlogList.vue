<template>
  <div class="blog-list">
    <BlogListItem v-for="blog in blogs" :key="blog?.blog_id" v-bind="blog"></BlogListItem>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getBlogs } from '@/api'
import BlogListItem from './BlogListItem.vue'

const blogs = ref([])

getBlogs(10, 0)
  .then((res) => {
    blogs.value = res
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<style lang="less" scoped></style>
