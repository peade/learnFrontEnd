import Mvvm2 from './mvvm-v2'

const vm2 = new Mvvm2({
  el: '#mvvm-app',
  data: {
    txt: 'text',
    someStr: 'hello ',
    className: 'btn',
    htmlStr: '<span style="color: #f00;">red</span>',
    child: {
      someStr: 'World !'
    }
  },

  computed: {
    getHelloWord: function() {
      return this.someStr + this.child.someStr
    }
  },

  methods: {
    clickBtn: function(e) {
      console.log('btn click')
      var randomStrArr = ['childOne', 'childTwo', 'childThree']
      this.child.someStr = randomStrArr[parseInt(Math.random() * 3)]
    }
  }
})
vm2.$watch('child.someStr', function() {
  console.log(arguments)
})
