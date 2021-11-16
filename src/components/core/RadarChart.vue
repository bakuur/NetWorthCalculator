<template>
    <div class="card-body">
        <apexchart :height="height" :options="options" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    name:"RadarChart",
    props: {
        options: Object,
        series: Array,
        height:Number
    }
}
</script>
<style scoped>

</style>