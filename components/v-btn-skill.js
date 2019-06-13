Vue.component('v-btn-skill', {
    props: ['title', 'url', 'style'],
    template: '<a class="button is-outlined is-rounded" target="_blank"\
                    :style="style" \
                    :href="url"> \
                    <strong>{{title}}</strong></a>'
})