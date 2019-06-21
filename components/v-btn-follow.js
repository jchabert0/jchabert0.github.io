
Vue.component('v-btn-follow', {
    props: ['title', 'url', 'icon'],
    template: '<a style="color: hsl(328,100%,54%); padding: 1rem;" target="_blank"\
                :href="url"> \
                <i :class="icon"></i> \
                </a>'
})