const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        books: [
          { title: 'Different Calculus', author: 'Patrick Paul' },
          { title: 'Advanced Math', author: 'Robert Regalads' },
          { title: 'Differential Equation', author: 'James Kent' },
          { title: 'Integral Calculus', author: 'Renan Regalads' },
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