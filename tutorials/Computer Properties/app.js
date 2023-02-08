const app = Vue.createApp({
    data() {
      return {
        url: 'https://github.com/rojre1979',
        showBooks: true,
        
        books: [
            { title: 'Different Calculus', author: 'Patrick Paul', img:'assets/1.jpg', isFav: true},
            { title: 'Advanced Math', author: 'Robert Regalads', img:'assets/2.jpg', isFav: true },
            { title: 'Differential Equation', author: 'James Kent', img:'assets/3.jpg', isFav: false },
            { title: 'Integral Calculus', author: 'Renan Regalads', img:'assets/4.jpg', isFav: true },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      toggleFav(book){
        book.isFav = !book.isFav
      }
    },
    computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isFav)
      }
    }
  })
  
  app.mount('#app')