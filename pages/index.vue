<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostsList :posts="loadedPosts" />
  </div>
</template>

<script>

export default {
  // asyncData(){
  //   return new Promise(function(resolve, reject){
  //     setTimeout(() => resolve({
  //       loadedPosts: [
  //       {
  //         id: 1,
  //         title: 'First Post',
  //         previewText: 'This is our first post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //       {
  //         id: 2,
  //         title: 'Second Post',
  //         previewText: 'This is our second post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //       {
  //         id: 3,
  //         title: 'First Post',
  //         previewText: 'This is our third post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //     ]
  //     }), 1000);
  //   })
  // },
  // data() {
  //   return {
  //     loadedPosts: [
  //       {
  //         isAdmin: false,
  //         id: 1,
  //         title: 'First Post',
  //         previewText: 'This is our first post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //       {
  //         isAdmin: false,
  //         id: 2,
  //         title: 'Second Post',
  //         previewText: 'This is our second post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //       {
  //         isAdmin: false,
  //         id: 3,
  //         title: 'First Post',
  //         previewText: 'This is our third post!',
  //         thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
  //       },
  //     ]
  //   }
  // },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~static/background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>