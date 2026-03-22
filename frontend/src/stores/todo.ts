import {defineStore} from "pinia";
import axios from "axios";


export interface Todo {
    id: number,
    userId: number,
    title?: string,
    completed: boolean,
}

// https://pinia.vuejs.org/core-concepts/#Option-Stores
export const useTodoStore = defineStore('todos', {

    state: () => ({
        todos: [] as Todo[],
        loading: false,
    }),

    // https://pinia.vuejs.org/core-concepts/getters.html#Getters
    getters: {},

    // https://pinia.vuejs.org/core-concepts/actions.html
    actions: {
        async loadAllTodos() {
            this.loading = true

            // fake a longer delay for loading state
            await new Promise(resolve => setTimeout(resolve, 1000))

            // basic js fetch call
            const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')

            this.loading = false
            this.todos = await response.data

        },
        async loadTodosByUser(id: number) {
            this.loading = true

            // fake a longer delay for loading state
            await new Promise(resolve => setTimeout(resolve, 1000))

            // basic js fetch call
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            // sets the state to the response data

            // filter the todos by user id
            const filteredTodos = await response.data.filter((todo:Todo) => todo.userId === id)

            this.loading = false
            this.todos = filteredTodos

        }

    }

})