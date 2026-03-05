<script setup lang="ts">
const skills = [
  {category: 'Frontend', items: ['Vue 3', 'TypeScript', 'Vuetify', 'Pinia', 'Vue Router']},
  {category: 'Backend', items: ['FastAPI', 'Python', 'REST APIs', 'GraphQL']},
  {category: 'Data', items: ['PostgreSQL', 'SQL', 'NetCDF', 'Data Pipelines']},
  {category: 'Practice', items: ['System Design', 'Testing', 'Code Review', 'Documentation']},
]

const experiences = [
  {
    icon: 'mdi-sitemap-outline',
    title: 'Full Lifecycle Delivery',
    body: 'From stakeholder requirements through architecture, implementation, and long-term production support — comfortable owning the entire software lifecycle across consulting and product environments.',
  },
  {
    icon: 'mdi-vuejs',
    title: 'Vue 2 → Vue 3 Migration',
    body: 'Led a structured migration from Vue 2 to Vue 3 — refactoring legacy components, modernizing Pinia state management patterns, and upgrading Vuetify for long-term ecosystem alignment.',
  },
  {
    icon: 'mdi-layers-outline',
    title: 'Scalable Backend Services',
    body: 'Built and maintained APIs, containerized services, and cloud-hosted infrastructure across JavaScript, TypeScript, Python, PHP, SQL, and PostgreSQL.',
  },
]

const differentiators = [
  'Full-stack ownership from database schema to UI component',
  'Translates loose stakeholder descriptions into clear technical architecture',
  'Managed multiple concurrent projects with varying scopes and timelines',
  'Drawn to software that matures through careful iteration — not short-term delivery cycles',
  'Strong testing culture — unit, integration, and e2e as first-class concerns',
  'Genuinely excited by nationally significant, long-term research infrastructure',
]
</script>

<template>
  <div class="about-page">

    <!-- Hero -->
    <v-row class="hero-section mb-10" align="center">
      <v-col cols="12">
        <p class="overline text-medium-emphasis  tracking-wide">Full Stack Software Engineer</p>

        <h1 class="text-display-large font-weight-bold mb-1 mt-2">Chris Goode</h1>
        <p class="hero-tagline text-medium-emphasis">
          Full-stack engineer with 10+ years delivering production systems end-to-end from stakeholder requirements through architecture, implementation, and long-term support.
        </p>

        <div class="mt-5 d-flex ga-3 flex-wrap">
          <v-chip color="primary" variant="tonal" prepend-icon="mdi-github">GoodeCodeSir</v-chip>
          <v-chip color="primary" variant="tonal" prepend-icon="mdi-map-marker-outline">Oak Ridge, TN</v-chip>
        </div>
      </v-col>
    </v-row>

    <v-divider class="mb-10"/>

    <!-- Why This Role -->
    <section class="mb-12">
      <h2 class="section-title mb-4">Why This Role</h2>
      <v-card variant="tonal" color="primary" rounded="xl" class="pa-6">
        <p class="why-text">
          What especially appeals to me about this role is the opportunity to contribute to long-term, focused projects
          where systems are maintained, improved, and evolved over time. I enjoy building software that matures through
          careful iteration rather than short-term delivery cycles — and the prospect of contributing to nationally
          significant research infrastructure is genuinely exciting. I'm deeply motivated by learning, improving systems,
          and bringing structure and clarity to complex technical environments, which I believe aligns well with ORNL's
          research-driven culture.
        </p>
      </v-card>
    </section>

    <!-- Skills Match -->
    <section class="mb-12">
      <h2 class="section-title mb-6">Stack Alignment</h2>
      <v-row>
        <v-col
            v-for="group in skills"
            :key="group.category"
            cols="12" sm="6" md="3"
        >
          <v-card variant="outlined" rounded="xl" height="100%" class="pa-4">
            <p class="text-overline text-medium-emphasis mb-3">{{ group.category }}</p>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                  v-for="skill in group.items"
                  :key="skill"
                  size="small"
                  color="primary"
                  variant="tonal"
              >
                {{ skill }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Experience Highlights -->
    <section class="mb-12">
      <h2 class="section-title mb-6">Experience Highlights</h2>
      <v-row>
        <v-col
            v-for="exp in experiences"
            :key="exp.title"
            cols="12" md="4"
        >
          <v-card variant="outlined" rounded="xl" height="100%" class="pa-5 exp-card">
            <v-icon :icon="exp.icon" size="32" color="primary" class="mb-4"/>
            <h3 class="exp-title mb-3">{{ exp.title }}</h3>
            <p class="text-medium-emphasis exp-body">{{ exp.body }}</p>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="mb-12">
      <h2 class="section-title mb-6">What I Bring</h2>
      <v-row>
        <v-col
            v-for="(point, i) in differentiators"
            :key="i"
            cols="12" sm="6"
        >
          <div class="d-flex align-start ga-3">
            <v-icon color="primary" class="mt-1">mdi-check-circle-outline</v-icon>
            <p>{{ point }}</p>
          </div>
        </v-col>
      </v-row>
    </section>

  </div>
</template>

<style scoped>
.about-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
}


.hero-tagline {
  font-size: 1.1rem;
  line-height: 1.7;
}


.section-title {
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.why-text {
  font-size: 1.05rem;
  line-height: 1.75;
}

.exp-card {
  transition: box-shadow 0.2s ease;
}

.exp-card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.exp-title {
  font-size: 1rem;
  font-weight: 600;
}

.exp-body {
  font-size: 0.9rem;
  line-height: 1.65;
}

.tracking-wide {
  letter-spacing: 0.1em;
}
</style>