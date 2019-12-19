<template>
    <div> Hello Component {{message}}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters('count', ['message'])
    }
}
</script>