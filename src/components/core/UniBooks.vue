<template>
   <div class="card">
        <img :src="image" alt="" class="card-img-top">
        <div class="card-body">
            <div class="mb-0 fw-bold">{{ name }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'UniBooks',
    props: {
        image: String,
        name:String,
    }
}
</script>
<style scoped>

</style>