const app = Vue.createApp({
    data() {
      return {
        url: 'https://github.com/rojre1979',
        showBooks: true,
        books: [
            { title: 'Different Calculus', author: 'Patrick Paul', img:'assets/1.jpg'},
            { title: 'Advanced Math', author: 'Robert Regalads', img:'assets/2.jpg' },
            { title: 'Differential Equation', author: 'James Kent', img:'assets/3.jpg' },
            { title: 'Integral Calculus', author: 'Renan Regalads', img:'assets/4.jpg' },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
    }
  })
  
  app.mount('#app')