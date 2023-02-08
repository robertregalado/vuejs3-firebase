const app = Vue.createApp({
    data() {
        return {
            title: "The final countdown",
            author: "Robert de Nero",
            age: 44
        }
    },
    // Methods and click events
    methods:
    {
        changeTitle(title_book) {
            this.title = title_book
        }
    }
})

app.mount('#app')
