

Vue.component('v-btn-contact', {
    props: ['title', 'url', 'icon'],
    template: '<div class="column"><a style="color: hsl(328,100%,54%); margin: 1rem;" target="_blank"\
    :href="url"> \
    <i class="btnContact" :class="icon"></i> \
    </a><span style="font-size: large">{{title}}</span></div>'
})

