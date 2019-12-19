<template>
    <div>
        <div> This is a second page </div>
        <div> Value : {{value}} </div>
        <div> Sentense : {{sentence}}</div>
        <div>{{message}} {{count}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            value: 0,
            sentence: "Hi!"
        }
    },
    computed: {
        ...mapGetters('count', ['count', 'message'])
    },
    mounted() {
        this.value = this.$route.query.value
        this.sentence = this.$route.query.sentence
        console.log(this.$route.query)
    }
}
</script>