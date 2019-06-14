Vue.component('v-btn-contact', {
    props: ['url', 'icon'],
    template: '<a style="color: hsl(328,100%,54%); font-size: -webkit-xxx-large; padding: 1rem;" target="_blank"\
                :href="url"> \
                <i :class="icon"></i> \
                </a>'
})
