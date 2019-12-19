export const state = () => ({
    count: 0,
    message: undefined
})

export const getters = {
    count: state => state.count,
    message: state => state.message
}

export const actions = {
    increment(context) {
        context.commit('increment')
    },
    setMessage(context, value) {
        context.commit('setMessage', value)
    },
    save(context) {
        context.commit('save')
    },
    load(context) {
        context.commit('load')
    }
}

export const mutations = {
    increment(state) {
        state.count++
    },
    setMessage(state, value) {
        state.message = value
    },
    save(state) {
        localStorage.setItem('count', JSON.stringify({
            count: state.count,
            message: state.message
        }))
    },
    load(state) {
        const count = JSON.parse(localStorage.getItem('count') || '{}')
        state.count = count.count || 0
        state.message = count.message
    }
}