const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The final countdown",
            author: "Robert de Nero",
            age: 44
        }
    },
    // Methods and click events
    methods:
    {
        toggleShowBooks() {
            this.showBooks = !this.showBooks // conditional rendering
        }
    }
})

app.mount('#app')
