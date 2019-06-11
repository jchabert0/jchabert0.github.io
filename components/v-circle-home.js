
var time = (Math.floor(Math.random() * 5) + 2); // beetween 2 and 6

Vue.component('v-circle-home', {
    props: ['circle'],
    template: '<div class="circle" \
        style="border-radius: 100%; \
        animation: scale '+time+'s ease-out 0s alternate infinite \
        position: absolute; \
        background-color: #3287f5; \
        opacity: .5" \
        :style="circle"> \
    </div>'
})
            