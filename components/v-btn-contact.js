

Vue.component('v-btn-contact', {
    props: ['title', 'url', 'icon'],
    template: '<span class="icon" style="color: hsl(328,100%,54%); font-size: large" target="_blank"> \
                <i :class="icon" style="padding: 1rem;"></i> \
                {{ title }} \
                </span>'
})

