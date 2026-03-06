<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(false)
const theme = ref<'light' | 'dark'>('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const navLinks = [
  {to: '/', label: 'Home', icon: 'mdi-home-outline'},
  {to: '/about', label: 'About', icon: 'mdi-information-outline'},
  {to: '/charts', label: 'Charts', icon: 'mdi-chart-line'},
]

</script>


<template>
  <v-app :theme="theme">
    <v-app-bar flat border="b" height="80">
      <v-app-bar-title>
        <router-link to="/" class="brand-link">
          <img src="@/assets/img.png" alt="Logo" class="md-block" ></img>
        </router-link>
      </v-app-bar-title>

      <template #append>
        <div class="nav-links d-none d-md-flex align-center ga-1 mr-2">
          <v-btn
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              :prepend-icon="link.icon"
              variant="text"
              rounded="lg"
              class="nav-btn"
          >
            {{ link.label }}
          </v-btn>
        </div>

        <!-- Theme Toggle -->
        <v-btn
            :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            variant="text"
            rounded="lg"
            @click="toggleTheme"
        />

        <!-- Mobile Menu -->
        <v-app-bar-nav-icon
            class="d-flex d-md-none"
            @click="drawer = !drawer"
        />
      </template>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list nav>
        <v-list-item
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :prepend-icon="link.icon"
            :title="link.label"
            rounded="lg"
            @click="drawer = false"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>


<style scoped>
.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.nav-btn {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>