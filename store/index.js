import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                console.log(editedPost.id)
                console.log(postIndex)
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
                Cookie.remove('jwt')
                Cookie.remove('tokenExpiration')
                localStorage.removeItem('token')
                localStorage.removeItem('tokenExpiration')

            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get(`${process.env.baseUrl}/posts.json`)
                    .then(res => {
                        const postsArray = []
                        for (const key in res.data) {
                            postsArray.push({...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios.post(`${process.env.baseUrl}/posts.json?auth=${vuexContext.state.token}`, createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', {...createdPost, id: result.data.name })
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios.put(`${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
                    .then(res => {
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e))
            },
            authenticateUser(vuexContext, authData) {
                let authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`
                if (!authData.isLogin) {
                    authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
                }
                return this.$axios.$post(authURL, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(result => {
                        vuexContext.commit('setToken', result.idToken)
                        localStorage.setItem('token', result.idToken)
                        Cookie.set('jwt', result.idToken)
                        Cookie.set('tokenExpiration', new Date().getTime() + +result.expiresIn * 1000)
                        localStorage.setItem('tokenExpiration', new Date().getTime() + +result.expiresIn * 1000)
                    })
                    .catch(e => console.log(e))
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }

                    //If Token exists in cookies
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                    if (!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split('=')[1];
                    //If ExpireToken exists in cookies
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration='))
                    if (!expirationDate) {
                        return;
                    }
                    expirationDate = expirationDate.split('=')[1];
                } else {
                    token = localStorage.getItem('token');
                    expirationDate = localStorage.getItem('tokenExpiration');
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('NO TOKEN')
                    vuexContext.commit('clearToken')
                    return;
                }
                vuexContext.commit('setToken', token);
            },
            logout(vuexContent) {
                vuexContent.commit('clearToken')
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore