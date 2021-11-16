<template>
    <div class="card">
        <div class="card-body">
            <i class=" fa-lg position-absolute top-0 end-0 p-3" :class="icon_nm"></i>
            <div class="mb-2 text-uppercase">{{title}}</div>
            <div><span class="h4">{{price}}</span> <span class="small text-muted"><i class="fa fa-level-up"></i> {{perchantage}}</span></div>
            <small class="text-muted">{{subContent}}</small>
        </div>
        <div class="progress" style="height: 2px;">
            <div class="progress-bar bg-secondary" role="progressbar" :style="{'width':width}" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HrmsAnalytics",
    props: {
        title: [String,Object],
        price:[String,Object],
        perchantage: [String,Object],
        subContent:[String,Object],
        width: String,
        icon_nm: String,
    }
}
</script>
<style scoped>

</style>