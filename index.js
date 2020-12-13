new Vue({
  
    data: {
        catImage: 'loading'
    },
    el: '#app',
    methods: {
        addCat() {
            fetch('https://aws.random.cat/meow')
                .then((res) => res.json())
                .then((result) => {this.catImage = result.file })
        }
    }
    
})