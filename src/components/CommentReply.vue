<template>
  <div class="comment-reply">
    <div class="reply-area">
      <textarea cols="30" rows="10" v-model="value" placeholder="写下你的评论..."></textarea>
    </div>
    <div class="btn-pannel">
      <div class="certain" v-if="value" @click="$emit('certain', value)">确定</div>
      <div class="certain disable" v-else>确定</div>
      <div class="cancel">取消</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

defineEmits(['certain'])

const value = ref('')
</script>

<style lang="less" scoped>
.comment-reply {
  .reply-area {
    textarea {
      padding: 12px 16px;
      width: 100%;
      height: 90px;
      font-size: 13px;
      border: 1px solid var(--comment-reply-border-color);
      border-radius: 4px;
      background-color: var(--comment-reply-bgcolor);
      resize: none;
      display: inline-block;
      vertical-align: top;
      outline-style: none;
    }
  }
  .btn-pannel {
    display: flex;
    flex-direction: row-reverse;
    gap: 14px;
    margin-top: 10px;

    .certain {
      background-color: #ec7259;
      box-sizing: content-box;
      padding: 4px 12px;
      width: 28px;
      height: 20px;
      border-radius: 15px;
      line-height: 20px;
      border: 1px solid #ec7259;
      cursor: pointer;

      &.disable {
        filter: saturate(70%);
        cursor: not-allowed;
      }
    }

    .cancel {
      box-sizing: content-box;
      padding: 4px 12px;
      width: 28px;
      height: 20px;
      border-radius: 15px;
      line-height: 20px;
      border: 1px solid rgb(153, 153, 153);
      cursor: pointer;
    }
  }
}
</style>
