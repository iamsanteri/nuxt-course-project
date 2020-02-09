<template>
    <section class="post-list">
        <PostPreview :is-admin="isAdmin" id="1" thumbnail="-" title="Hello there!" previewText="This is a preview text." />
        <PostPreview :is-admin="isAdmin" id="2" thumbnail="-" title="Hello there! 2" previewText="This is a preview text. 2" />
        <PostPreview :is-admin="isAdmin" id="3" thumbnail="-" title="Hello there! 3" previewText="This is a preview text. 3" />
    </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview"

export default {
  components: {
    PostPreview
  },
  props: {
      isAdmin: {
          type: Boolean, 
          default: false
      }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>