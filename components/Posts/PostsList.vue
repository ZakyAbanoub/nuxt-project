<template>
    <section class="posts-list">
        <PostPreview
            v-for="post in posts"
            :key="post.id"
            :is-admin="isAdmin"
            :id="post.id"
            :thumbnail="post.thumbnail" 
            :title="post.title" 
            :previewText="post.previewText" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'
export default {
    components: {
        PostPreview
    },
    props:{
        isAdmin: {
            type: Boolean,
            required: false,
            default: false
        },
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
    
</style>