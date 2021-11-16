<template>
    <div class="d-flex">
        <img class="avatar sm rounded" :src="`${img}`" alt="">
        <div class="flex-fill ms-3">
            <div class="mb-1">{{text}} <strong>{{strong_text}}</strong></div>
            <span class="d-flex text-muted mb-3">{{time_detals}}<a class="ms-2" href="#" title=""><strong>{{ strong_bold}}</strong></a> </span>
            <div class="p-3 border rounded" :class="classes" v-if="text_areacontent">
                {{ text_areacontent }}
            </div>
            <div class="project-members mt-3" v-if="teams">
                <label class="me-3">Team :</label>
                <a href="#" title="" v-for="(team, index) in teams" :key="index">
                    <img class="avatar xs rounded" :src="`${team}`" alt="friend"> 
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Timeline',
    props: {
        img:String,
        text: String,
        strong_text: String,
        time_detals:String,
        strong_bold:String,
        classes:String,
        text_areacontent:String,
        teams:Array
    }
}
</script>
<style scoped>

</style>