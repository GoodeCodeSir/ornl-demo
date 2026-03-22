import {defineStore} from 'pinia'
import {ref} from 'vue'

export interface User {
    id: number
    name: string
    email: string
}

// composition API store or the "setup store"
export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([
        {id: 1, name: 'Chris', email: 'chris@example.com'},
        {id: 2, name: 'Jane', email: 'jane@example.com'},
    ])

    function addUser(user: User) {
        users.value.push(user)
    }

    function removeUser(id: number) {
        console.log('removing user with id:', id)
        users.value = users.value.filter(user => user.id !== id)
    }

    function modifyUser(updatedUser: User) {
        const index = users.value.findIndex(user => user.id === updatedUser.id)

        if (index !== -1) {
            users.value[index] = updatedUser
        }
    }

    return {
        users,
        addUser,
        removeUser,
        modifyUser,
    }
})