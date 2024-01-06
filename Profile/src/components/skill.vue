<template>
  <div class="skill-profile">
    <div class="profile-content">
      <h3>Langguage</h3>
      <div class="box-content">
        <div v-for="item in dataLG">
          <span>{{ item.langguage }}</span>
          <div class="progress fix">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="{ width: item.point + '%' }"
              :class="{ 'bg-success': item.point > 33 }"
              :aria-valuenow="item.point"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ item.tier }}
            </div>
          </div>
        </div>
      </div>

      <h3>Framework</h3>
      <div class="box-content">
        <h4>javascript & Typescript</h4>
        <div v-for="item in dataFW.javascript">
          <span>{{ item.FW }}</span>
          <div class="progress fix">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="{ width: item.point + '%' }"
              :class="{ 'bg-success': item.point > 33 }"
              :aria-valuenow="item.point"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ item.tier }}
            </div>
          </div>
        </div>
      </div>

      <div class="box-content">
        <h4>NodeJS</h4>
        <div v-for="item in dataFW.nodejs">
          <span>{{ item.FW }}</span>
          <div class="progress fix">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="{ width: item.point + '%' }"
              :class="{ 'bg-success': item.point > 33 }"
              :aria-valuenow="item.point"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ item.tier }}
            </div>
          </div>
        </div>
      </div>

      <div class="box-content">
        <h4>CSS</h4>
        <div v-for="item in dataFW.CSS">
          <span>{{ item.FW }}</span>
          <div class="progress fix">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :style="{ width: item.point + '%' }"
              :class="{ 'bg-success': item.point > 33 }"
              :aria-valuenow="item.point"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ item.tier }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer>
          <span>Thanks for reading</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            dataLG: [{ langguage: "C++", point: 66, tier: "NOMAL" }, { langguage: "C#", point: 66, tier: "NOMAL" }, { langguage: "JAVA", point: 66, tier: "NOMAL" },
            { langguage: "PYTHON", point: 33, tier: "BASIC" }, { langguage: "JAVASCRIPT", point: 66, tier: "NOMAL" }, { langguage: "TYPESCRIPT", point: 66, tier: "NOMAL" },
            { langguage: "HTML", point: 66, tier: "NOMAL" }, { langguage: "CSS", point: 66, tier: "NOMAL" }, { langguage: "SQL", point: 33, tier: "BASIC" }],
            dataFW: {
                javascript: [{ FW: 'VueJs', point: 66, tier: "NOMAL" }],
                nodejs: [{ FW: 'Express', point: 66, tier: "NOMAL" }, { FW: 'Socket.io', point: 66, tier: "NOMAL" }, { FW: 'Chart.Js', point: 33, tier: "BASIC" }],
                CSS: [{ FW: 'Boostrap', point: 66, tier: "NOMAL" }],
            }
        }
    }
}
</script>
