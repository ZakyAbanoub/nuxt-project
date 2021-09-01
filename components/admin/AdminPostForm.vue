<template>
    <form @submit.prevent="onSave" class="form-space">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
        <AppControlInput
                control-type="textarea"
                v-model="editedPost.previewText">
                Preview Text
        </AppControlInput>
        <AppControlInput
                control-type="textarea"
                v-model="editedPost.content">
                Content
        </AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">
                Cancel
        </AppButton>
    </form>
</template>

<script>
export default {

    props:{
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post ? { ...this.post } : {
                author: '',
                title: '',
                thumbnail: '',
                previewText: '',
                content: ''
            }
        }
    },
    methods:{
        onSave(){
            this.$emit('submit', this.editedPost)
        },
        onCancel(){
            this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>
.form-space{
    width: 50%;
    margin: auto;
}

@media (max-width: 992px) {
    .form-space{
        width: 80%;
    }
}
</style>