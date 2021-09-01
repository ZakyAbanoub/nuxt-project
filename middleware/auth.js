export default function(context) {
    console.log('AUTH')
    if (!context.store.getters.isAuthenticated) {
        context.redirect('/admin/auth')
    }
}