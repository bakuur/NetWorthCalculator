<template>
    <form class="row g-1 p-0 p-md-4">
        <div class="col-12 text-center mb-4">
            <img src="../../../assets/images/auth-404.svg" class="w240 mb-4" alt="" />
            <h1 class="display-1">404</h1>
            <h5>OOP! PAGE NOT FOUND</h5>
            <span class="text-muted">Sorry, the page you're looking for doesn;t exist. if you think something is brlken, report a problem.</span>
        </div>
        <div class="col-12">
            <router-link to="/dashboard/index" title="" class="btn btn-lg  btn-dark lift text-uppercase">Back to Home</router-link>
        </div>
    </form>
</template>
<script>
export default {
    name:'PageNotFoundComponent'
}
</script>
<style scoped>

</style>