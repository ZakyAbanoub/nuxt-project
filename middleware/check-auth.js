export default function(context) {
    console.log('CHECK_AUTH')
    context.store.dispatch('initAuth', context.req);
}