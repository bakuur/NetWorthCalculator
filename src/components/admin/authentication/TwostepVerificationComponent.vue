<template>
    <form class="row g-1 p-0 p-md-4" method="GET">
        <div class="col-12 text-center mb-5">
            <img src="../../../assets/images/auth-two-step.svg" class="w240 mb-4" alt="" />
            <h1>2-step Verification</h1>
            <span>We sent a verification code to your email. Enter the code from the email in the field below.</span>
        </div>
        <div class="col">
            <div class="mb-2">
                <input type="email" class="form-control form-control-lg text-center" placeholder="-" maxlength="1">
            </div>
        </div>
        <div class="col">
            <div class="mb-2">
                <input type="email" class="form-control form-control-lg text-center" placeholder="-" maxlength="1">
            </div>
        </div>
        <div class="col">
            <div class="mb-2">
                <input type="email" class="form-control form-control-lg text-center" placeholder="-" maxlength="1">
            </div>
        </div>
        <div class="col">
            <div class="mb-2">
                <input type="email" class="form-control form-control-lg text-center" placeholder="-" maxlength="1">
            </div>
        </div>
        <div class="col-12 text-center mt-4">
            <router-link to="/dashboard/index" title="" class="btn btn-lg btn-block btn-dark lift text-uppercase">Verify my account</router-link>
        </div>
        <div class="col-12 text-center mt-4">
            <span class="text-muted">Haven't received it? <a href="#">Resend a new code.</a></span>
        </div>
    </form>
</template>
<script>
export default {
    name:'TwostepVerificationComponent'
}
</script>
<style scoped>

</style>