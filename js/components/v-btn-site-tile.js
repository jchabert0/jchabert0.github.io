Vue.component('v-btn-site-tile', {
    props: ['title', 'url', 'style'],
    template: '<a class="button is-outlined is-rounded" style="width: 200px" \
                    style="color: #f5f5f5; background-color: transparent" \
                    :style="style" \
                    :href="url"> \
                    <strong>{{title}}</strong></a>'
})