<template>
    <apexchart :height="height"  :options="options" :series="series"></apexchart>
</template>
<script>
export default {
    name:"StackedBarChart",
    props: {
        height: Number,
        options:[String,Object],
        series: [Array],
    }
}
</script>
<style scoped>

</style>