<template>
  <div class="container main">
    <ul>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
      <li class="job-item">
        <img class="job-img" src="../assets/work.jpg" alt="" >
        <div class="job-company">CI&T</div>
        <div class="job-location">Campinas - SP</div>
        <div class="job-role">Software Developer</div>
        <div class="job-quantity">1 openings</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
        ...mapGetters({
           getJobs: 'getJobs'
       })
    }
  }
</script>

<style>
</style>
