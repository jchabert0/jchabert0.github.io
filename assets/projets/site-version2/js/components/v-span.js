
Vue.component('v-span', {
    props: ['title', 'type'],
    template: '<span :class="type">{{title}} </span>'
})