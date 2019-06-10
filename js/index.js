
var vue = new Vue({
  el: '#vue',
  data: {
    home: true,
    skill: false,
    title: 'Jérémie CHABERT',
    subtitle: 'Développeur front-end'
  },
  methods: {
    toShow: function () {
      this.skill = true;
      this.home = false;
    }
  },
})
