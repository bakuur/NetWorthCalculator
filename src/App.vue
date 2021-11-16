<template>
     <div :id="`${currentLayout}`">
        <!-- Navigation -->
        <NavigationComponent v-if="!['login','register','fpassword','verification','404'].includes($route.name)"/>

        <!-- header -->
        <HeaderComponent v-show="currentLayout != 'layout-h'"  v-if="!['login','register','fpassword','verification','404'].includes($route.name)"/>
        
        <!-- sidebar -->
        <SidebarComponent  v-if="!['login','register','fpassword','verification','404'].includes($route.name)"/>
        <component :is="layout">
            <router-view></router-view>
        </component>
     </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import NavigationComponent from '@/components/admin/layouts/NavigationComponent.vue'
import SidebarComponent from '@/components/admin/layouts/sidebar/SidebarComponent.vue'
import HeaderComponent from '@/components/admin/layouts/header/HeaderComponent.vue'
const default_layout = "default";
export default {
    name: 'App',
    computed:{
        layout(){
            return (this.$route.meta.layout || default_layout)+"-layout"
        }
    },components: {
        NavigationComponent,
        SidebarComponent,
        HeaderComponent,
    },data (){
      return {
          currentLayoutStyle:'style-1',
          currentLayout:'layout-a',
      }
    },mounted() {
        EventBus.$on('activeLayout', (activeLayout) => {
          this.currentLayout = activeLayout.currentLayout
          this.currentLayoutStyle = activeLayout.currentLayoutStyle
        })
    },beforeDestroy(){
        EventBus.$off('activeLayout')
    }
}
</script>
<style lang="scss">
// Bootstrap 5.0.0-beta1
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import '../src/assets/scss/main.scss';
</style>
