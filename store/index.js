import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise(function(resolve, reject) {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [{
                                id: 1,
                                title: 'First Post',
                                previewText: 'This is our first post!',
                                thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
                            },
                            {
                                id: 2,
                                title: 'Second Post',
                                previewText: 'This is our second post!',
                                thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
                            },
                            {
                                id: 3,
                                title: 'First Post',
                                previewText: 'This is our third post!',
                                thumbnail: 'https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05'
                            }
                        ])
                        resolve();
                    }, 1000);
                })
            },
            setPosts(context, posts) {
                context.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore