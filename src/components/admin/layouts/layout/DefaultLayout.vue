<template>
    <!-- main body area -->
    <div class="main" :class="{
    'px-xl-5 px-lg-4 px-md-3': currentLayout != 'layout-f' && currentLayout != 'layout-b' && currentLayout != 'layout-h' && $route.path !== '/chat',
    'px-lg-5 px-md-2': currentLayout == 'layout-f'}">

        <HeaderComponent v-show="currentLayout == 'layout-h'"/>
        <BodyHeaderComponent v-if="!['chat'].includes($route.name)"/>
        <div class="body d-flex" :class="{'py-lg-4 py-3': currentLayout != 'layout-f' && currentLayout != 'layout-h' && $route.path !== '/chat',
        'py-lg-3 py-md-2 px-lg-5 px-md-4': currentLayout == 'layout-h' && $route.path !== '/chat'}">
           <div :class="[currentLayoutStyle == 'style-6' || currentLayoutStyle == 'style-8' || currentLayoutStyle == 'style-10'  || currentLayoutStyle == 'style-11'&& currentRouteName !== 'chat' || currentLayoutStyle == 'style-12' && currentRouteName !== 'chat' ? 'container' : 'container-fluid',currentRouteName == 'chat' ? 'p-0':'']">
                <slot></slot>
            </div>
        </div>
       

        <!-- Modal: Setting -->
        <SettingsMComponent/>
        <!-- Body: Footer -->
        <FooterComponent v-if="isFooter"/>
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import BodyHeaderComponent from '@/components/admin/layouts/BodyHeaderComponent.vue'
import HeaderComponent from '@/components/admin/layouts/header/HeaderComponent.vue'
import FooterComponent from '@/components/admin/layouts/FooterComponent.vue'

import SettingsMComponent from '@/components/admin/layouts/SettingsMComponent.vue'
export default {
    name:'DefaultLayout',
    components: {
        BodyHeaderComponent,
        HeaderComponent,
        FooterComponent,
        SettingsMComponent

    },data (){
      return {
        currentLayoutStyle:'style-1',
        currentLayout:'layout-a',
        isFooter: this.$route.meta.isFooter,
      }
    },mounted() {
        EventBus.$on('activeLayout', (activeLayout) => {
          this.currentLayout = activeLayout.currentLayout
          this.currentLayoutStyle = activeLayout.currentLayoutStyle
        })
    },beforeCreate() {
        let layout = 'layout-a'
        let style = 'style-1'
        EventBus.$emit('currentLayout',{layout,style})
	},computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },watch:{
        $route (){
            this.isFooter = this.$route.meta.isFooter;
        }
    },beforeDestroy(){
        EventBus.$off('activeLayout')
    }
}
</script>
<style scoped>

</style>