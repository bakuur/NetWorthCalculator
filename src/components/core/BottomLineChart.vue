<template>
    <div class="card-body">
        <apexchart :height="height" :width="width" :options="options" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    name:"BottomLineChart",
    props: {
        options: Object,
        series: Array,
        height:Number,
        width:Number,
    }
}
</script>
<style scoped>

</style>