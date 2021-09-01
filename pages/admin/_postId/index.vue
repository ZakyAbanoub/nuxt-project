<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    methods:{
        onSubmitted(editedPost){
            this.$store.dispatch('editPost', editedPost)
            .then( ()=> this.$router.push('/admin'))
        },
    },
    asyncData(context) {
        return axios.get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
        .then((res) => {
            return {
              loadedPost : {...res.data, id: context.params.postId}
            } 
            console.log(loadedPost)
        })
        .catch(e => console.log(e))
    }
}
</script>