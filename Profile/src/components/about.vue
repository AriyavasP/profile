<template>
  <div class="about-profile">
    <div class="profile-header">
      <div class="container">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%">Hello</text>
          </symbol>
          <g class="g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
          </g>
        </svg>
      </div>
    </div>
    <div class="profile-content" v-for="item in data">
      <div class="profile-content-grid">
        <span>{{ item.t }}</span>
      </div>
      <div class="profile-content-grid">
        <span>{{ item.st }}</span>
      </div>
    </div>
    <div class="profile-content-next">
      <div class="title">
        <h3>Work Experience</h3>
      </div>
      <div v-for="item in dataExp">
        <p>{{ item }}</p>
      </div>
      <div class="title">
        <h3>Project Experience</h3>
      </div>
      <div v-for="item in dataPro">
        <p>{{ item }}</p>
      </div>
      <div class="title">
        <h3>Tool Experience</h3>
      </div>
      <div v-for="item in dataTool">
        <p>{{ item }}</p>
      </div>
      <div class="title">
        <h3>Other Experience</h3>
      </div>
      <div v-for="item in dataotherExp">
        <p>{{ item }}</p>
      </div>
    </div>
    <div>
      <footer>
        <span>Thanks for reading.</span>
        {{ age }}
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { t: 'MY NAME IS :', st: 'Ariyavas Phaipong' },
        { t: 'AGE :', st: "22" },
        { t: 'GRADUATE :', st: 'Kasetsart University' },
        {
          t: 'VISIONARY :',
          st: 'Along with meeting new things And never stop developing yourself.'
        },
        { t: 'TEL :', st: '099-243-9788' },
        { t: 'EMAIL :', st: 'ariyavas@gmail.com' },
        {
          t: 'ADDRESS :',
          st: '426/9 M.1 ,Soi Amornsri ,Bueng Phra Road ,Bueng Phra Subdistrict ,Bueng Phra District ,Phitsanulok Province ,PO 65000 ,Thailand'
        }
      ],
      dataExp: [
        "I've done internships and internships from namoka.game in back-end positions. I have a good understanding of all positions and have a good understanding of OOP.",
        'I used to work part time at KFC. I can communicate well with people and have good human relations.',
        'I used to work part time at ViewDee. I can communicate well with people and have good human relations.',
        'You can make an income and expense account because at home, your mother can make an account. therefore gaining some level of knowledge in this field.'
      ],
      dataPro: [
        'I used to work on a full restaurant project from the front of the store to the back of the store. At the time of completing a university project',
        'I used to write a mobile application with react-native using Expo framework when I was in college.',
        'I used to program Unity games when I was in college.',
        "I used to use JAVA language to create a program for calculating SME's tax when I was still in university, 2nd year.",
        'I used to make a chat bot system for a co-operative project. By using the work of AI to help collect data and answer user questions'
      ],
      dataTool: [
        'I can use GITGHUB.',
        'I can use SourceTree to work.',
        'I can use POSTMAN to test API.',
        'I can use XAMPP to create localhost.',
        'I am ready to study new tools.'
      ],
      dataotherExp: ["I've used sql database and mongodb in my project."],
    }
  }
}
</script>
