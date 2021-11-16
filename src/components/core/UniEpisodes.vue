<template>
    <div class="card">
        <div class="card-body position-relative hover-show p-0">
            <a href="#" class="hover-div position-absolute top-50 start-50 translate-middle py-1 px-2 bg-light rounded shadow-sm text-muted">
                <i class="fa fa-play-circle fa-3x"></i>
            </a>
            <div class="position-absolute top-100 translate-middle start-50 px-2 py-1 rounded text-light small" :class="classes">{{ name }}</div>
            <img :src="image" alt="" class="card-img-top">
        </div>
        <div class="card-body text-center">
            <div class="mb-0 fw-bold">{{ sub_title }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'UniEpisodes',
    props: {
        image: String,
        classes:String,
        name: String,
        sub_title:String,
    }
}
</script>
<style scoped>

</style>