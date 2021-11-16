<template>
     <div>
        <!-- Brand -->
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
export default {
    name:"NavigationComponent",
    methods:{
        sidebarToggle: function () {
            this.isSidebarToggle = !this.isSidebarToggle;
            EventBus.$emit('isSidebarToggle',this.isSidebarToggle) 
        }
    },data(){
        return{
            isSidebarToggle:false,
            currentLayoutStyle:'style-1',
            currentLayout:'layout-a'
        }
    },mounted() {
        EventBus.$on('activeLayout', (activeLayout) => {
            this.currentLayout = activeLayout.currentLayout
            this.currentLayoutStyle = activeLayout.currentLayoutStyle
        })
    },computed: {
        isNavbarVisible() {
            return this.currentLayout !== 'layout-d' && this.currentLayout !== 'layout-d-sub-header' && this.currentLayout !== 'layout-f' && this.currentLayout !== 'layout-e' && this.currentLayout !== 'layout-h';
        }
    },beforeDestroy(){
        EventBus.$off('activeLayout')
    }
}
</script>
<style scoped>

</style>