<template>
  <div class="writer-view">
    <mavon-editor
      v-model="value"
      @change="handleChange"
      :tabSize="2"
      :ishljs="true"
      :toolbars="toolbars"
      @imgAdd="handleImgAdd"
      ref="editorRef"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { uploadImg } from '@/api'
import 'mavon-editor/dist/css/index.css'

const store = useStore()

const value = ref('')

value.value = store.state.article || ''

const toolbars = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: false, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: false, // 单双栏模式
  preview: true, // 预览
}

const editorRef = ref(null)

async function handleImgAdd(pos, img) {
  const { url } = await uploadImg(img)
  editorRef.value.$img2Url(pos, url[0])
}

function handleChange(article, render) {
  store.commit('saveArticle', { article, render })
}
</script>

<style lang="less" scoped>
.writer-view {
  padding: 4px 8px 0;
}
</style>
