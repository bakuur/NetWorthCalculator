<template>
    <div class="card">
        <div class="card-body p-md-4">
            <p class="text-muted text-uppercase mb-0 small">{{  title }}</p>
            <h5 class="mt-0 mb-3"><a href="#" class="text-primary">{{  sub_title }}</a></h5>
            <p>{{ content}}<a href="#" class="font-600 text-muted">view more</a></p>
            
            <ul class="list-inline">
                <li class="list-inline-item pe-lg-4" v-for="(item, index) in items" :key="index">
                    <h4 class="mb-0">{{ item.attachments }}</h4>
                    <p class="text-muted">{{ item.title }}</p>
                </li>
            </ul>

            <div class="project-members mb-4">
                <label class="me-3">Team :</label>
                <a href="#" title="" v-for="(team, index) in teams" :key="index">
                    <img class="avatar sm rounded" :src="`${team}`" alt="friend">
                </a>
            </div>

            <label class="small d-flex justify-content-between">Task completed: <span class="text-custom">{{ start_end }}</span></label>
            <div class="progress mt-1" style="height: 7px;">
                <div class="progress-bar" :class="classes" role="progressbar" :aria-valuenow="width" aria-valuemin="0" aria-valuemax="100" :style="{ width: width+'%'}"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Teamsboard',
    props: {
        title:String,
        sub_title: String,
        content: String,
        items:Array,
        teams:Array,
        start_end:String,
        classes:String,
        width:String,
    }
}
</script>
<style scoped>

</style>