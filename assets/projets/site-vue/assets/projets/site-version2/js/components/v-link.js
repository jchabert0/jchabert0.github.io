
Vue.component('v-link', {
    props: ['title', 'type', 'url'],
    template: '<a :class="type" :href="url">{{title}}</a>'
})

