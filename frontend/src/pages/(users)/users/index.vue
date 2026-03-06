<script setup lang="ts">

// get user store
import {type User, useUserStore} from "@/stores/users.ts";
import {ref} from "vue";
import {useRouter} from "vue-router";

// so we can navigate
const router = useRouter();

// https://pinia.vuejs.org/core-concepts/
const userStore = useUserStore();


const showConfirmation = ref(false)
const selectedUserId = ref<number | null>(null)
const showForm = ref(false)
const form = ref({
  name: "",
  email: "",
});


function resetForm() {
  form.value = {
    name: "",
    email: "",
  };
}

function saveUser() {
  const name = form.value.name.trim();
  const email = form.value.email.trim();

  console.log('Saving user:', name, email);

  if (!name || !email) {
    return;
  }

  userStore.addUser({
    id: Date.now(),
    name,
    email,
  });

  resetForm();
  showForm.value = false;
}

function openModificaitonForm(user: User){
    // set form values for the user
    form.value.name = user.name;
    form.value.email = user.email;

    showForm.value = true
}

function cancelForm() {
  resetForm();
  showForm.value = false;
}

function confirmDelete(id: number) {
  showForm.value = false
  selectedUserId.value = id
  showConfirmation.value = true
}

function cancelDelete() {
  selectedUserId.value = null
  showConfirmation.value = false
}

function deleteUser() {
  if (selectedUserId.value !== null) {
    userStore.removeUser(selectedUserId.value)
  }

  // close the dialog
  cancelDelete()
}
</script>

<template>

  <div class="bg-yellow-lighten-2 w-100 text-center pa-2 border  rounded-lg mb-3">
    Users are just local and for demonstration. This does not call API endpoints.
  </div>


  <v-btn variant="flat" color="green" @click="resetForm(); showForm = true">Add User</v-btn>

  <v-table hover>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>

    <tr v-if="!userStore.users.length">
      <td colspan="4" class="text-center bg-info font-weight-bold text-headline-large">No users found</td>
    </tr>

    <tr v-for="user in userStore.users" :key="user.id"  @click="openModificaitonForm(user)">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>
        <v-btn variant="flat" color="red" @click.stop="confirmDelete(user.id)">
          <v-icon icon="mdi-trash-can-outline"/>
        </v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>


  <v-navigation-drawer
      v-model="showForm"
      location="right"
      width="500"
      temporary
  >
    <v-card flat>
      <v-card-title>User Form</v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="form.name"/>
        <v-text-field label="Email" v-model="form.email"/>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn @click="cancelForm">Cancel</v-btn>
        <v-btn color="primary" @click="saveUser">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>

  <v-dialog v-model="showConfirmation" max-width="500">
    <v-card title="Delete User">
      <v-card-text>
        Are you sure you want to delete this user?
      </v-card-text>

      <v-card-actions>
        <v-spacer/>

        <v-btn variant="text" @click="cancelDelete">
          Cancel
        </v-btn>

        <v-btn color="red" variant="flat" @click="deleteUser">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>