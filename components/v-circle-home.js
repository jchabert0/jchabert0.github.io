
Vue.component('v-circle-home', {
    props: ['circle'],
    template: '<div class="circle" \
        style="border-radius: 100%; \
        animation: scale ease-out 0s alternate infinite; \
        position: absolute; \
        background-color: #9ec8ff; \
        opacity: .2" \
        :style="circle"> \
    </div>'
})
            