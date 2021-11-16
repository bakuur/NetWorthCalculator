<template>
    <div></div>
</template>
<script>
export default {
    name:"NotificationsMComponent",
    data() {
        return {
            currentTab: 'Message',
        }
    },methods:{
        setActiveNavtab: function (tab) {
            this.currentTab = tab 
        },
    }
}
</script>
<style scoped>
::v-deep #notificationsModal > .modal-dialog {
        max-height: 100%;
} 
</style>