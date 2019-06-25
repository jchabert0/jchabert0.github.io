
Vue.component('v-btn', {
    props: ['title', 'type', 'url'],
    template: '<a class="button is-link is-inverted is-outlined is-rounded" \
                 :class="type" :href="url" target="_blank"><strong>{{title}}</strong></a>'
})
