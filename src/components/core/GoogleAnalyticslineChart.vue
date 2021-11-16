<template>
    <apexchart :height="height" :options="options" :series="series"></apexchart>
</template>
<script>
export default {
    name:'GoogleAnalyticslineChart',
    props: {
        options: Object,
        series: Array,
        height:Number
       
    }
}
</script>
<style scoped>

</style>