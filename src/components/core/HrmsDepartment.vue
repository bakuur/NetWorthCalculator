<template>
    <div class="card">
        <img class="card-img-top" :src="image" alt="About the image">
        <div class="card-body">
            <h5 class="mb-4">{{ title }}</h5>
            <div class="team-members">
                <label class="me-3">Team :</label>
                <a href="#" title="Dr. name" v-for="(team,index) in teams" :key="index">
                    <img class="avatar sm rounded mr-1" :src="team" alt="dr."> 
                </a>
            </div>
            <div class="mt-3">
                <p>{{content}}</p>
                <button class="btn btn-primary">{{button_text}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HrmsDepartment',
    props: {
        image:String,
        title: String,
        teams: Array,
        content:String,
        button_text:String
    }
}
</script>
<style scoped>

</style>