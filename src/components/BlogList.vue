<template>
  <div class="blog-list">
    <BlogListItem v-for="blog in blogs" :key="blog.blog_id" v-bind="blog"></BlogListItem>
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

// const blogs = ref([
//   {
//     blog_id: 1,
//     blog_type: '笔记',
//     title: '一切都是最好的安排',
//     description: '重阳篇（一）早上半醒半梦间，伸手搂了个空，翻身起来看，真的只有我一人。李雪砚呢？卫生间门口的布帘子打着，也没人。房间里又暗又静，我打了个哆嗦',
//     location: 'markdown/test1.md',
//     author: 'siven',
//     comments: 127,
//     likes: 34,
//     createAt: '2022-05-24T03:21:13.000Z',
//     updateAt: '2022-05-24T03:21:13.000Z',
//   },
//   {
//     blog_id: 2,
//     blog_type: '随笔',
//     title: '风语||风声里，那碗昂贵的泡面',
//     description: '01 四点半钟，我第五次走进洗漱间，对着镜子再次确认自己的妆容没问题，才换上精心挑选的米色风衣、黑色高跟鞋，拎着亮晶晶的链条小包出了门。 我打车',
//     location: 'markdown/test1.md',
//     author: 'siven',
//     comments: 13,
//     likes: 3,
//     createAt: '2022-05-24T03:21:13.000Z',
//     updateAt: '2022-05-24T03:21:13.000Z',
//   },
// ])
</script>

<style lang="less" scoped></style>
