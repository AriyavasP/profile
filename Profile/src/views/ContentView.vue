<template>
  <div
    class="portfolio"
    :style="{
      display: useDatastore.statuspage ? 'none' : ''
    }"
  >
    <a href="https://i.ibb.co/F0j0npS/Resume-Mr-Ariyavas.png">
      <img src="https://i.ibb.co/j5msC2K/Resume-Mr-Ariyavas-1.png" alt="" />
    </a>
  </div>
  <div
    class="home-profile"
    :style="{
      display: useDatastore.statuspage == 'home' ? '' : 'none'
    }"
  >
    <div class="profile-img">
      <img
        src="https://i.ibb.co/SNLKCT4/341122184-231686799534825-7877547010569626784-n.jpg"
        alt="Profile"
      />
    </div>
    <div class="profile-content">
      <h2>Hi!, My name is Ariyavas Phaipong</h2>
      <p>I'm looking for a back-end job, is anyone interested in viewing my portfolio?</p>
      <a href="" @click="test">LET GO</a>
    </div>
  </div>
  <div
    :style="{
      display: useDatastore.statuspage == 'skill' ? '' : 'none'
    }"
  >
    <skillVue />
  </div>
  <div
    :style="{
      display: useDatastore.statuspage == 'about' ? '' : 'none'
    }"
  >
    <aboutVue />
  </div>
  <div
    :style="{
      display: useDatastore.statuspage == 'project' ? '' : 'none'
    }"
  >
    <projectVue />
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'
import skillVue from '../components/skill.vue'
import aboutVue from '../components/about.vue'
import projectVue from '../components/project.vue'
export default {
  data() {
    return {}
  },
  setup() {
    const useDatastore = useCounterStore()
    return { useDatastore }
  },
  methods: {
    test() {
      // this.useDatastore.setstatuspage(false)
      console.log(this.useDatastore.statuspage)
    }
  },
  components: {
    skillVue,
    aboutVue,
    projectVue
  }
}
</script>
