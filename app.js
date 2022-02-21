const app = Vue.createApp({
    data() {
        return {
            url: 'www.facebook.com',
            showBooks: false,
            title: 'the final empire',
            author: 'An authore',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'whatever', isFav: true },
                { title: 'name of the bind', author: 'whatever2', isFav: false },
                { title: 'name of the tind', author: 'whatever3', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        },

        handleEvent(e) {
            console.log(e, e.type)
        },

        handleMouseMove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleClass(item) {
            console.log(item)
            item.isFav = !item.isFav
        }
    }
})

app.mount('#app')