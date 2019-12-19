<template>
    <div>
        <h1>Hello World!</h1>
        <hello></hello>
        <div><input v-model='inputValue'/></div>
        <div><input v-model='inputSentence'/></div>
        <nuxt-link :to='`/second?value=${inputValue}&second=hello&sentence=${inputSentence}`'> second page </nuxt-link>
    
        <div>
            <button @click='increment'> Increment </button>
            <button @click='setMessage(inputSentence)'> SetMessage </button>
            <button @click='save'> Save </button>
            <button @click='load'> Load </button>
        </div>
        <div>{{message}}</div>
        <div>{{ now }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hello from '@/components/Hello.vue'
export default {
    components: {
        Hello
    },
    data() {
        return {
            inputValue: 0,
            inputSentence: "Hi!",
            now: 'wait...'
        }
    },
    created: function(){
         setInterval(() => {
            const d = new Date()
            this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        }, 1000)
    },
    computed: {
        ...mapGetters('count', ['count', 'message']),
    },
    methods: {
        ...mapActions('count', ['increment', 'setMessage', 'save', 'load'])
    }
}
</script>