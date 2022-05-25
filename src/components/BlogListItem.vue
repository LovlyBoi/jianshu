<template>
  <div class="blog-list-item">
    <h3 href="#" class="header">
      <a class="title" :href="`#/article/${blog_id}`">
        {{ title }}
      </a>
    </h3>
    <div class="main description">
      {{ description }}...
    </div>
    <div class="footer">
      <div class="author">{{ author }}</div>
      <div class="comments">
        <span class="iconfont icon-pinglun2"></span>
        <span class="comments-num">{{ comments }}</span>
      </div>
      <div class="likes">
        <span class="input-icon iconfont icon-aixin_shixin"></span>
        <span class="comments-num">{{ likes }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    require: true,
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    require: true,
    type: String,
  },
  comments: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  blog_id: {
    type: Number,
    require: true,
  },
})
</script>

<style lang="less" scoped>
.blog-list-item {
  width: 100%;
  padding: 15px 2px 20px;
  border-bottom: 1px solid #bbb;

  .header {
    a {
      font-size: 18px;
      color: var(--main-color);

      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--main-color);
      }
    }
  }

  .main,
  .footer {
    color: #999;
  }

  .main {
    padding-bottom: 10px;
  }

  .footer {
    display: flex;
    gap: 10px;

    .author,
    .comments,
    .likes {
      cursor: pointer;

      &:hover {
        color: #666;
      }
    }
  }
}
</style>
