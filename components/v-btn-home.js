Vue.component('v-btn-home', {
    props: ['title', 'url', 'style', 'icon'],
    template: '<a class="button is-outlined is-rounded" style="width: 200px" \
                    :style="style" \
                    :href="url"> \
                    <span class="icon is-small"> \
                    <i :class="icon"></i> \
                    </span> \
                    <strong>{{title}}</strong></a>'
})