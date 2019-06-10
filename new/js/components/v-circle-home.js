Vue.component('v-circle-home', {
    props: ['circle'],
    template: '<div class="circle" \
                    style="border-radius: 100%; \
                    position: absolute; \
                    background-color: #3287f5; \
                    opacity: .5" \
                    :style="circle"> \
                </div>'
})