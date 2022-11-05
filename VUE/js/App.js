import Nav from './components/Nav.js';
export default {
    data(){
        return {
            title: 'Hello Vue',
            qty: 123,
        }
    },
    components:{
        'app-nav':Nav
    }
}