<template>
  <div class="article-view">
    <div class="width-limit">
      <div class="main-pannel">
        <div class="article-pannel card">
          <div></div>
          <h1 class="title">{{ blog.title || '' }}</h1>
          <UserCard
            :avatar="blog.author_avatar"
            :username="blog.author"
            :createAt="blog.createAt"
            :updateAt="blog.updateAt"
          ></UserCard>
          <div id="article-content" v-html="blog.article" ref="articleRef"></div>
        </div>
        <div class="comments-pannel card">
          <div class="publish-comment">
            <a-comment>
              <template #avatar>
                <a-avatar :src="$store.state.user.avatar" alt="Han Solo" />
              </template>
              <template #content>
                <a-textarea
                  v-model:value="commentContent"
                  :rows="4"
                  placeholder="请写下你的评论..."
                />
                <div class="publish-btn-pannel">
                  <div class="publish-comment-btn" type="primary" @click="handlePublishComment">
                    发表
                  </div>
                </div>
              </template>
            </a-comment>
          </div>
          <div class="all-comments">
            <h4 class="title">全部评论</h4>
          </div>
        </div>
      </div>
      <div class="side-pannel"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import UserCard from '@/components/UserCard.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { getBlogById, getComments, publishComment } from '@/api'
import { message } from 'ant-design-vue'

const route = useRoute()
const store = useStore()

const blog = ref({})

const articleRef = ref(null)

const commentContent = ref('')

// 发布评论
async function handlePublishComment() {
  if (!commentContent.value) return
  const comment = {
    blogId: blog.value.id,
    authorId: store.state.user.userId,
    content: commentContent.value,
  }
  const result = await publishComment(comment)
  message.success(result.msg)
  commentContent.value = ''
}

getBlogById(route.params.id)
  .then((res) => {
    blog.value = res
    console.log(blog.value)
  })
  .then(() => {
    if (articleRef.value) {
      articleRef.value.querySelectorAll('pre > code').forEach((el) => {
        hljs.highlightElement(el)
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })

getComments(route.params.id, 10, 0)
  .then((res) => {
    console.log(res)
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

      .card {
        padding: 0 32px 20px 32px;
        border-radius: 6px;
        margin-bottom: 10px;
        background-color: var(--blog-card-bgcolor);

        &::before {
          content: '';
          display: table;
        }
      }

      .article-pannel {
        .title {
          font-size: 30px;
        }
      }

      .comments-pannel {
        .publish-comment {
          .publish-btn-pannel {
            display: flex;
            flex-direction: row-reverse;
            padding-top: 10px;

            .publish-comment-btn {
              cursor: pointer;

              &:hover {
                color: #000;
              }
            }
          }
        }
        .all-comments {
          .title {
            height: 24px;
            font-size: 20px;
            margin-bottom: 0;
            display: flex;
            align-items: center;

            &::before {
              content: '';
              display: block;
              background-color: #de8068;
              width: 8px;
              height: 100%;
              margin-right: 10px;
            }
          }
        }
      }
    }

    .side-pannel {
      background-color: #dedede;
      width: 250px;
    }
  }
}
</style>
