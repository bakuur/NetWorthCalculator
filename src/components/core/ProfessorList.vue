<template>
    <div class="card">
        <div class="card-body">
            <div class="member-thumb">
                <img :src="image" class="img-fluid rounded" alt="profile-image">                               
            </div>
            <div class="detail mt-3">
                <h4 class="mb-0">{{ name }}</h4>
                <p class="text-muted">{{ subject }}</p>
                <ul class="list-unstyled d-flex mt-2">
                    <li v-for="(social,index) in socials" :key="index">
                        <a class="p-2" href="javascript:void(0);" data-bs-toggle="tooltip" title="Facebook">
                            <i :class="social"></i>
                        </a>
                    </li>
                </ul>
                <p class="text-muted">{{ address }}</p>                           
                <a href="javascript:void(0);" class="btn btn-outline-secondary">{{ button_text }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ProfessorList",
    props: {
        image: String,
        name: String,
        subject: String,
        socials: Array,
        address: String,
        button_text: String
    }
}
</script>
<style scoped>

</style>