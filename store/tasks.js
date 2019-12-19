import { firestoreAction } from 'vuexfire'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()
const tasks = db.collection('tasks')

export const state = () => ({
    tasks: []
})

export const getters = {
    getTasksRef: state => tasks,
    tasks: state => state.tasks
}

export const actions = {
    setTasksRef: firestoreAction(({ bindFirestoreRef }, payload) => {
        bindFirestoreRef('tasks', tasks)
    })
}