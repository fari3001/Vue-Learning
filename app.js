const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: 'the final empire',
            author: 'An authore',
            age: 45
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')