<template>
    <div class="card p-3 mb-0">
        <div class="d-flex align-items-center">
            <div class="avatar rounded no-thumbnail bg-light"><i class="fa-lg" :class="icon"></i></div>
            <div class="flex-fill ms-3 text-truncate">
                <div class="small">{{title}}</div>
                <span class="h6 mb-0">{{amount}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HospitalAnalyticsTabFirst",
    props: {
        title: String,
        icon:String,
        amount: String
    }
}
</script>
<style scoped>

</style>