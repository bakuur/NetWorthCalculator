<template>
    <div class="card mb-2">
        <div class="card-body">
            <span>{{title}}</span>
            <div><span class="h4 fw-bold">{{per}}</span> <span class="text-muted">{{price}}</span></div>
        </div>
        <apexchart height="60"  :options="options" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    name:"covidAreaChart",
    props: {
        title: [String,Object],
        per:[String,Object],
        price:[String,Object],
        options: Object,
        series: Array,
    }
}
</script>
<style scoped>

</style>