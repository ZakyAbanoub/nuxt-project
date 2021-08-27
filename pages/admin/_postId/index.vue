<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            loadedPost:{
                author: '',
                title: '',
                content: '',
                thumbnailLink: ''
            }
        }
    },
}
</script>