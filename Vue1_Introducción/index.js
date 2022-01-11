const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cuise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            productImage: './assets/cruise.jpg',
            productImageDescription: 'An astronout floats outside the window while you sit in comfort',
            productImageStyle:{
                'border-radius':'15px'
            }
        }
    },
});