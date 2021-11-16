<template>
    <apexchart :height="height" :options="options" :series="series"></apexchart>
</template>
<script>
export default {
    name:'HorizontalBarchart',
    props: {
        options: Object,
        series: Array,
        height:Number
       
    }
}
</script>
<style scoped>

</style>