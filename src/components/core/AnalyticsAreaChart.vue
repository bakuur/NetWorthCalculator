<template>
    <div class="card mb-4 overflow-hidden border-0 lift">
        <div class="card-body">
            <span class="text-uppercase">{{title}}</span>
            <h4 class="mb-0 mt-2">{{price}}</h4>
            <small class="text-muted">{{details}}</small>
        </div>
        <apexchart height="50"  :options="options" :series="series" :width="width"></apexchart>
    </div>
</template>
<script>
export default {
    name:"AnalyticsAreaChart",
    props: {
        title: [String,Object],
        price:[String,Object],
        details: [String,Object],
        options: Object,
        series: Array,
        width:String
    }
}
</script>
<style scoped>

</style>