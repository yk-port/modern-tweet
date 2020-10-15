<template>
  <div>
    <NewPost />
    <pre>{{ this.$store.state.post.postData }}</pre>
  </div>
</template>

<script>
  import NewPost from '@/components/NewPost.vue'
  export default {
    components: {
      NewPost,
    },
  }
</script>
