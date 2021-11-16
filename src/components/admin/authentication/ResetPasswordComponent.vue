<template>
    <form class="row g-1 p-0 p-md-4" method="GET">
        <div class="col-12 text-center mb-5">
            <img src="../../../assets/images/auth-password-reset.svg" class="w240 mb-4" alt="" />
            <h1>Forgot password?</h1>
            <span>Enter the email address you used when you joined and we'll send you instructions to reset your password.</span>
        </div>
        <div class="col-12">
            <div class="mb-2">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" placeholder="name@example.com">
            </div>
        </div>
        <div class="col-12 text-center mt-4">
            <router-link to="/authentication/auth-two-step" title="" class="btn btn-lg btn-dark lift text-uppercase">SUBMIT</router-link>
        </div>
        <div class="col-12 text-center mt-4">
            <span class="text-muted"><router-link to="/authentication/auth-login">Back to Sign in</router-link></span>
        </div>
    </form>
</template>
<script>
export default {
    name:'ResetPasswordComponent'
}
</script>
<style scoped>

</style>