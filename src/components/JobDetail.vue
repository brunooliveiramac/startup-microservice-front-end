<template>
    <div class="container main">
        <div class="job-item">
            <img class="job-img" src="../assets/work.jpg" alt="">
            <div class="job-company">{{job.company}}</div>
            <div class="job-location">{{job.local}}</div>
            <div class="job-role">{{job.name}}</div>
            <div class="job-quantity">{{job.quantity}}</div>
        </div>
        <div class="description-container">
            <h3>Job Description</h3>
            <div>
                {{job.description}}
            </div>
            <h3>Benefts</h3>
            <div>
                {{job.benefits}}
            </div>
            <h3>Time</h3>
            <div>
                {{job.time}}
            </div>
            <button class="btn btn-outline-primary btn-lg btn-job">
                Enroll
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import InfiniteLoading from 'vue-infinite-loading'
    import Spinner from '../components/shared/Spinner'

    export default {
        data() {
            return {
                job: {},
                id: this.$route.params.id
            }
        },
        created() {
            if(this.id){

            }
        },
        components: {
            'infinite-loading': InfiniteLoading,
            'spinner': Spinner
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
            onInfinite() {
                this.getJobService()
            }
        }}
</script>

<style scoped>

</style>
