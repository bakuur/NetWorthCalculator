<template>
    <apexchart :height="height"  :options="options" :series="series"></apexchart>
</template>
<script>
export default {
    name:"BarSeriesComponent",
    props: {
        height:Number,
        details: [String,Object],
        options: Object,
        series: Array,
    }
}
</script>
<style scoped>

</style>