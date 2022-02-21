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
        },

        handleEvent(e) {
            console.log(e, e.type)
        }
    }
})

app.mount('#app')