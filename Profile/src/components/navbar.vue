<template>
  <nav class="navbar-profile">
    <li :class="home ? 'active' : ''">
      <a @click="HomehandleClick"> Home </a>
    </li>
    <li :class="skill ? 'active' : ''">
      <a @click="SkillhandleClick"> Knowledge </a>
    </li>
    <li :class="about ? 'active' : ''">
      <a @click="AbouthandleClick"> About </a>
    </li>
    <li :class="project ? 'active' : ''">
      <a @click="ProjecthandleClick"> Project </a>
    </li>
  </nav>
</template>

<script>
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      home: false,
      skill: false,
      about: false,
      project: false
    }
  },
  setup() {
    const useDatastore = useCounterStore()
    return { useDatastore }
  },
  methods: {
    HomehandleClick() {
      this.home = true
      this.skill = false
      this.about = false
      this.project = false
      this.useDatastore.setstatuspage('home')
    },
    SkillhandleClick() {
      this.skill = true
      this.home = false
      this.about = false
      this.project = false
      this.useDatastore.setstatuspage('skill')
    },
    AbouthandleClick() {
      this.about = true
      this.skill = false
      this.home = false
      this.project = false
      this.useDatastore.setstatuspage('about')
    },
    ProjecthandleClick() {
      this.project = true
      this.skill = false
      this.about = false
      this.home = false
      this.useDatastore.setstatuspage('project')
    }
  }
}
</script>
