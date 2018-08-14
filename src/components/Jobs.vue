<template>
  <div class="container main">
    <div class="input-group">
      <div class="input-group-btn">
        <button class="btn btn-outline-primary">Search</button>
      </div>
      <input type="text" class="form-control" aria-label="...">
    </div>
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
