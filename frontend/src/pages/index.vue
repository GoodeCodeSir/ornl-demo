<script setup lang="ts">
import {definePage} from "vue-router/experimental";

definePage({
  meta: {title: 'Home | ORNL Demo'}
})


// get the todo store
import {useTodoStore} from "@/stores/todo";
import {ref} from "vue";

const todoStore = useTodoStore()

// headers of the table
const headers = [
  {title: 'ID', value: 'id'},
  {title: 'User', value: 'userId', sortable: true},
  {title: 'Task', value: 'title', sortable: true},
  {title: 'Completed', value: 'completed', sortable: true},
]

// for searching the table
const search = ref('')

// load them in
todoStore.loadAllTodos()

const getTodoById = (id: number) => {
  todoStore.loadTodosByUser(id)
}


</script>

<template>
  <div class="home-page">

    <!-- Page Header -->
    <div class="mb-8">
      <p class="text-overline text-medium-emphasis mb-1">Todo Placeholder</p>
      <h1 class="page-title">Simple Todo Store</h1>
    </div>


    <v-text-field
        v-model="search"
        placeholder="Search tasks..."
        prepend-inner-icon="mdi-magnify"
        single-line
    ></v-text-field>

    <v-btn @click="getTodoById(1)">User 1 Todos</v-btn>
    <v-data-table
        :loading="todoStore.loading"
        :items="todoStore.todos"
        :headers="headers"
        :search="search"
        :filter-keys="['title']"
        class="elevation-0"
    >
      <template v-slot:item.completed="{ item }">
        <v-checkbox-btn
            v-model="item.completed"
            :ripple="false"
            disabled
        ></v-checkbox-btn>
      </template>
    </v-data-table>

  </div>


</template>


<style scoped>
.home-page {
  max-width: 960px;
  margin: 0 auto;
}

.page-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.dataset-card {
  transition: all 0.15s ease;
  cursor: pointer;
}

.dataset-card:hover {
  transform: translateY(-2px);
}

.chart-placeholder {
  height: 300px;
}

.chart-wrapper {
  width: 100%;
}

.chart-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
</style>