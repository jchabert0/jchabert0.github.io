

Vue.component('v-header-span', {
    props: ['pCol', 'pHeader', 'pSpan', 'scroll', 'span', 'spanColor'],
    template: ' <div class="columns is-centered"> \
    <div :class="pCol" > \
      <div :class="scroll"> \
        <div :class="pHeader"> \
          <span class="header-span">{{span}}</span> \
          <span :class="pSpan">{{spanColor}}</span> \
        </div> \
      </div> \
    </div> \
  </div>'
})
