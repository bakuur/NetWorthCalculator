<template>
   <div></div>
</template>
<script>
export default {
    name:"SearchMComponent",
    data(){
        return{
            headerBgVariant: 'warning',
        }
    }
}
</script>
<style lang="scss" scoped>
    ::v-deep #SearchModal > .modal-dialog {
        max-height: 100%;
    }  
</style>
