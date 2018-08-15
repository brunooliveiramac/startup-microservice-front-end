<template>
    <div class="container main">
        <div class="input-group">
            <div class="input-group-btn">
                <button class="btn btn-outline-primary">Search</button>
            </div>
            <input type="text" class="form-control" aria-label="...">
        </div>
        <ul>
            <li v-for="job in getJobList" class="job-item">
                <img class="job-img" src="../assets/work.jpg" alt="">
                <div class="job-company">{{job.company}}</div>
                <div class="job-location">{{job.local}}</div>
                <div class="job-role">{{job.name}}</div>
                <div class="job-quantity"><b>{{job.quantity}} </b>open position</div>
            </li>
        </ul>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <span slot="no-more"></span>
            <span slot="no-results"></span>
            <span slot="spinner">
                <spinner></spinner>
              </span>
        </infinite-loading>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import InfiniteLoading from 'vue-infinite-loading'


    export default {
        components: {
            'infinite-loading': InfiniteLoading
        },
        computed: {
            ...mapGetters({
                getJobList: 'getJobList'
            })
        },
        methods: {
            ...mapActions([
                'getJobService'
            ]),
            onInfinite () {
                this.getJobService()
            }
        }
    }
</script>

<style>
</style>
