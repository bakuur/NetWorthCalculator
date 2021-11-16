<template>
    <form class="row g-1 p-0 p-md-4" method="GET" @submit.prevent="submit">       
    <div class="col-12 text-center mb-5">
        <h1>Sign in</h1>
        <span>Free access to our dashboard.</span>
    </div>
    <div class="col-12 text-center mb-4">
        <a class="btn btn-lg btn-outline-secondary btn-block" href="#">
            <span class="d-flex justify-content-center align-items-center">
                <img class="avatar xs mr-2" src="../../../assets/images/google.svg" alt="Image Description">
                Sign in with Google
            </span>
        </a>
        <span class="dividers text-muted mt-4">OR</span>
    </div>
    <div class="col-12">
        <div class="mb-2">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control form-control-lg" placeholder="name@example.com">
        </div>
    </div>
    <div class="col-12">
        <div class="mb-2">
            <div class="form-label">
                <span class="d-flex justify-content-between align-items-center">
                    Password
                    <router-link class="text-primary" to="/authentication/auth-password-reset">Forgot Password?</router-link>
                </span>
            </div>
            <input type="password" class="form-control form-control-lg" placeholder="***************">
        </div>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
        </div>
    </div>
    <div class="col-12 text-center mt-4">
        <button type="submit" class="btn btn-lg btn-dark lift text-uppercase">SIGN IN</button>
    </div>
    <div class="col-12 text-center mt-4">
        <span class="text-muted">Don't have an account yet? <router-link to="/authentication/auth-signup">Sign up here</router-link></span>
    </div>
</form>

</template>
<script>
export default {
    name:'Sign_inComponent',
    methods: {
        submit(e){
            this.$router.push({ path: '/dashboard/index' })
             e.preventDefault()
        }
    }
}
</script>
<style scoped>

</style>