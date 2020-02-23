<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from "@/components/posts/PostList"

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        { id: "1", title: "First post", previewText: "This is our first post", thumbnail: "-"},
        { id: "2", title: "Second post", previewText: "This is our second post", thumbnail: "-"}
      ]
    }
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
  }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>