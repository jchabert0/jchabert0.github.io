Vue.component('v-icon', {
    props: ['type', 'url', 'icon', 'title'],
    template: '<a :class="type" :href="url" target="_blank"><i :class="icon"></i>{{title}}</a>'
})