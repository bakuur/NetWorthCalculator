<template>
    <form class="row g-1 p-0 p-md-4" method="GET" v-on:submit.prevent="submit">                            
        <div class="col-12 text-center mb-5">
            <h1>Create your account</h1>
            <span>Free access to our dashboard.</span>
        </div>
        <div class="col-6">
            <div class="mb-2">
                <label class="form-label">Full name</label>
                <input type="email" class="form-control form-control-lg" placeholder="John">
            </div>
        </div>
        <div class="col-6">
            <div class="mb-2">
                <label class="form-label">{{'\xa0'}}</label>
                <input type="email" class="form-control form-control-lg" placeholder="Parker">
            </div>
        </div>
        <div class="col-12">
            <div class="mb-2">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" placeholder="name@example.com">
            </div>
        </div>
        <div class="col-12">
            <div class="mb-2">
                <label class="form-label">Password</label>
                <input type="email" class="form-control form-control-lg" placeholder="8+ characters required">
            </div>
        </div>
        <div class="col-12">
            <div class="mb-2">
                <label class="form-label">Confirm password</label>
                <input type="email" class="form-control form-control-lg" placeholder="8+ characters required">
            </div>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    I accept the <a href="#" title="" class="text-primary">Terms and Conditions</a>
                </label>
            </div>
        </div>
        <div class="col-12 text-center mt-4">
            <button type="submit" class="btn btn-lg btn-dark lift text-uppercase">SIGN UP</button>
        </div>
        <div class="col-12 text-center mt-4">
            <span class="text-muted">Already have an account? <router-link to="/authentication/auth-login">Sign in here</router-link></span>
        </div>
    </form>
</template>
<script>
export default {
    name:'Sign_upComponent',
    methods: {
        submit(e){
           this.$router.push({ path: '/authentication/auth-login' })
             e.preventDefault()
        }
    }
}
</script>
<style scoped>

</style>