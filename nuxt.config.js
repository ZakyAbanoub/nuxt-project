export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Titillium+Web:wght@300&family=Ubuntu&display=swap' },


        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/styles/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/core-components.js',
        '~plugins/date-filter.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{
        path: '~/components', // will get any components nested in let's say /components/test too
        pathPrefix: false,
    }, ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    //Loading Progress-bar
    loading: {
        color: '#f02',
        height: '10px'
    },

    //Loading Indicator
    // It only works with spa not universal
    loadingIndicator: {
        name: 'circle',
        color: '#f02'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // If you are in development
    //dev: true

    //env
    env: {
        baseUrl: process.env.BASE_URL || 'https://nuxt-blog-4-default-rtdb.europe-west1.firebasedatabase.app',
        fbAPIKey: 'AIzaSyBadaBn7zye4C9nWQGxJJkjwDApYnov_R4'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    // router: {
    //     middleware: 'log'
    // }
}