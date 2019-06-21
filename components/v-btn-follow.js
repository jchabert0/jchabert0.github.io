
Vue.component('v-btn-follow', {
    props: ['title', 'url', 'icon'],
    template: '<a style="color: hsl(328,100%,54%); margin: 1rem;" target="_blank"\
                :href="url"> \
                <i class="btnFollow" :class="icon"></i> \
                </a>'
})