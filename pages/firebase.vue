<template>
    <div>
        <div>
            <h1>Hello World!</h1>
        </div>
        <div>
            <button @click='loadTasks'> Load </button>
        </div>
        <div v-if='!selectedTask'>
            <input v-model='title'/> / <input v-model='hours'/>
            <button @click='addTask'> Add Task </button> 
        </div>
        <div v-if='selectedTask'>
            <input v-model='title'/> / <input v-model='hours'/>
            <button @click='updateTask'> Update Task </button> 
            <button @click='cancelEdit'> Cancel </button> 
        </div>
        <ul>
            <li v-for='(task, idx) in tasks' :key='idx'>
                <span>{{task.id}} : {{task.title}} {{task.hours}}</span>
                <button @click='editTask(task)'> edit </button>
                <button @click='deleteTask(task)'> delete </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
    },
    data() {
        return {
            tasks: ['a', 'b'],
            title: undefined,
            hours: undefined,
            selectedTask: undefined
        }
    },
    computed: {
    },
    async mounted() {
        await this.loadTasks()
    },
    methods: {
        async loadTasks() {
            const ref = this.$store.getters['tasks/getTasksRef']
            const tasks = await ref.get()
            this.tasks = []
            tasks.forEach(doc => {
                // console.log(doc.data())
                // console.log(doc.id)
                const obj = doc.data()
                obj['id'] = doc.id
                this.tasks.push(obj)
            })  
        },
        async addTask() {
            // console.log(this.title, this.hours)
            const ref = this.$store.getters['tasks/getTasksRef']
            const task = ref.doc()
            // console.log(task.id)
            await task.set({
                title: this.title, 
                hours: this.hours
            })
            //update view
            this.loadTasks()
        },
        async updateTask() {
            if (!this.selectedTask) return
            // console.log(this.title, this.hours)
            const ref = this.$store.getters['tasks/getTasksRef']
            const task = ref.doc(this.selectedTask.id)
            // console.log(task.id)
            await task.set({
                title: this.title, 
                hours: this.hours
            })
            //update view
            this.loadTasks()
        },
        async deleteTask(task) {
            // console.log(task)
            const ref = this.$store.getters['tasks/getTasksRef']
            const taskRef = ref.doc(task.id)
            // console.log(taskRef)
            taskRef.delete()
            //update view
            this.loadTasks()
        },
        editTask(task) {
            this.selectedTask = task
            this.title = task.title
            this.hours = task.hours
        },
        cancelEdit() {
            this.selectedTask = undefined
            this.title = undefined
            this.hours = undefined
        }        

    }
}
</script>