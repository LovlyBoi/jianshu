<template>
  <div class="comments-list">
    <a-comment v-for="comment in comments" :key="comment.comment_id">
      <template #author>
        <a>{{ comment.author.author_name }}</a>
      </template>
      <template #datetime>
        <a-tooltip :title="dayjs(comment.createAt || '').format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ dayjs(comment.createAt || '').fromNow() }}</span>
        </a-tooltip>
      </template>
      <template #avatar>
        <a-avatar :src="comment.author.avatar" :alt="comment.author.author_name" />
      </template>
      <template #content>
        {{ comment.content }}
      </template>
      <template #actions>
        <span key="comment-basic-like">
          <template v-if="comment.action === 'like'">
            <LikeFilled @click="like(comment)" />
          </template>
          <template v-else>
            <LikeOutlined @click="like(comment)" />
          </template>
          <span style="padding-left: 8px; cursor: auto">
            {{ comment.like }}
          </span>
        </span>
        <span key="comment-basic-reply-to" @click="comment.showReply = true">回复</span>
      </template>
      <!-- 评论回复 -->
      <CollapseTransition>
        <CommentReply
          @certain="
            (value) => {
              handlePublishReply(value, comment)
            }
          "
          v-if="comment.showReply"
          @cancel="comment.showReply = false"
        ></CommentReply>
      </CollapseTransition>
      <!-- 回复 -->
      <a-comment v-for="reply in comment.children" :key="reply.comment_id">
        <template #author>
          <a>{{ reply.author.author_name }}</a>
        </template>
        <template #datetime>
          <a-tooltip :title="dayjs(reply.createAt || '').format('YYYY-MM-DD HH:mm:ss')">
            <span>{{ dayjs(reply.createAt || '').fromNow() }}</span>
          </a-tooltip>
        </template>
        <template #avatar>
          <a-avatar :src="reply.author.avatar" :alt="reply.author.author_name" />
        </template>
        <template #content>
          {{ reply.content }}
        </template>
        <template #actions>
          <span>
            <template v-if="reply.action === 'like'">
              <LikeFilled @click="like(reply)" />
            </template>
            <template v-else>
              <LikeOutlined @click="like(reply)" />
            </template>
            <span style="padding-left: 8px; cursor: auto">
              {{ reply.like }}
            </span>
          </span>
        </template>
      </a-comment>
    </a-comment>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import dayjs from 'dayjs'
import { useStore } from 'vuex'
import { replyComment } from '@/api/index'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LikeFilled, LikeOutlined } from '@ant-design/icons-vue'
import CommentReply from '@/components/CommentReply.vue'
import CollapseTransition from '@/components/CollapseTransition.vue'
import { message } from 'ant-design-vue'

dayjs.extend(relativeTime)

const store = useStore()

const like = (comment) => {
  if (comment.action !== 'like') {
    comment.like += 1
    comment.action = 'like'
  } else {
    comment.like -= 1
    comment.action = 'dislike'
  }
}

defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['pullComments'])

async function handlePublishReply(value, comment) {
  console.log(value, comment)
  const reply = {
    comment_id: comment.comment_id,
    content: value,
    author_id: store.state.user.userId,
  }
  const result = await replyComment(reply)
  message.success('回复成功')
  emit('pullComments')
  console.log(result)
}
</script>

<style lang="less" scoped>
.comments-list {
  width: 100%;
}
</style>
