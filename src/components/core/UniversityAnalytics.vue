<template>
    <div class="card overflow-hidden">
        <div class="progress" style="height: 1px;">
            <div class="progress-bar" :class="progress_class" :style="'width:'+`${progress_width}`+'%'" :aria-valuenow="progress_width" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="card-body">
            <i class="fa-lg position-absolute top-0 end-0 p-3" :class="icon_class"></i>
            <div class="mb-2 text-uppercase">{{ title }}</div>
            <div><span class="h4">{{ price }}</span> <span class="small text-muted"><i :class="arrow_class"></i> {{per}}%</span></div>
            <small class="text-muted">{{ content }}</small>
        </div>
    </div>
</template>
<script>
export default {
    name:"UniversityAnalytics",
    props: {
        progress_class: String,
        progress_width:String,
        title: String,
        price:String,
        arrow_class: String,
        per: String,
        icon_class: String,
        content: String,
    }
}
</script>
<style scoped>

</style>