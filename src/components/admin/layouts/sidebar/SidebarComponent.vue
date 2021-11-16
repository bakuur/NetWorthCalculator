<template>
    <div class="sidebar gradient px-4 py-2 py-md-3" :class="[arrowToggle ? 'sidebar-mini' : '', isGradient || currentLayoutStyle == 'style-13' ? 'gradient': '',currentLayoutStyle == 'style-1' ? '':'',currentLayoutStyle == 'style-2' ? 'sidebar-mini':'',currentLayoutStyle == 'style-3' ? 'rounded no-scrollbar bg-dark my-3':'',currentLayoutStyle == 'style-11' ? 'no-scrollbar':'',currentLayoutStyle == 'style-12' || currentLayoutStyle == 'style-13' ? 'scrollbar-secondary':'',isSidebarToggle ? 'open': '']" v-if="isSidebarVisible">
        <div class="d-flex flex-column h-100">
            <h4 class="sidebar-title" 
            :class="{'mt-2': currentLayoutStyle!== 'style-4' && currentLayoutStyle!== 'style-13', 
                        'mb-4': currentLayoutStyle!== 'style-3' && currentLayoutStyle!== 'style-4' && currentLayoutStyle!== 'style-13', 
                        'my-3 mb-2 rounded': currentLayoutStyle== 'style-3', 
                        'mb-1 pb-3 mt-1 text-center': currentLayoutStyle=== 'style-4' || currentLayoutStyle=== 'style-13'}">ShakePay</h4>
             <form :class="{'mb-3 mt-2': currentLayoutStyle == 'style-3', 'mb-2 mt-1': currentLayoutStyle != 'style-3'}" v-if="currentLayoutStyle !== 'style-4' && currentLayoutStyle !== 'style-13'">
                <div class="input-group">
                    <input type="text" class="form-control border-0" placeholder="Search..." :class="{'form-control-sm':currentLayoutStyle == 'style-3'}">
                </div>
            </form>
            <div class="mb-lg-5 mb-md-4 mb-2 smt-2 text-center" v-if="currentLayoutStyle === 'style-4' || currentLayoutStyle === 'style-13'">
                <a href="Javascript:void(0);"><img src="../../../../assets/images/profile_av.png" alt="User" class="rounded-circle img-thumbnail w90"></a>
                <h6 class="mb-0 mt-2">Robert Hammer</h6>
                <small class="text-muted">UI UX Designer</small>
                <div class="mt-3">
                    <a class="p-1 mr-2" :class="currentLayoutStyle === 'style-4' ? 'text-primary' : 'text-secondary' " href="javascript:void(0);" title="facebook"><i class="fa fa-facebook"></i></a>
                    <a class="p-1 mr-2" :class="currentLayoutStyle === 'style-4' ? 'text-primary' : 'text-secondary' " href="javascript:void(0);" title="twitter"><i class="fa fa-twitter"></i></a>
                    <a class="p-1 mr-2" :class="currentLayoutStyle === 'style-4' ? 'text-primary' : 'text-secondary' " href="javascript:void(0);" title="instagram"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <!-- Menu: main ul -->
            <layout-a v-if="currentLayoutStyle !== 'style-3' && currentLayoutStyle !== 'style-4' && currentLayoutStyle !== 'style-13'"></layout-a>
            <layout-c v-if="currentLayoutStyle == 'style-3'"></layout-c>

            <!-- Menu: menu collepce btn -->
            <button type="button" class="btn btn-link sidebar-mini-btn text-light"  v-if="currentLayoutStyle == 'style-1' || currentLayoutStyle == 'style-2'" v-on:click="miniSidebar()">
                <span class="ms-2"><i class="fa fa-arrow-left"></i></span>
            </button>

            <layout-g v-if="currentLayoutStyle === 'style-4' || currentLayoutStyle === 'style-13'"></layout-g>
            
            <div class="px-3" v-if="currentLayoutStyle === 'style-4' || currentLayoutStyle === 'style-13'">
                <template v-for="menuItem in menuItems" >
                    <router-link :key="menuItem.name" :to="`${menuItem.routerLink}`" class="py-2 d-flex align-items-center text-muted justify-content-between"  
                    v-if="!menuItem.isCategory && !menuItem.isApp && menuItem.children.length == 0">
                        <span>{{ menuItem.name }}</span>
                        <i class="fa fa-long-arrow-right ml-3" v-if="!menuItem.bedge"></i>
                        <span class="badge bg-primary rounded-pill ml-auto" v-if="menuItem.bedge">{{ menuItem.bedge }}</span>
                    </router-link> 
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import LayoutAComponent from '@/components/admin/layouts/sidebar/LayoutAComponent.vue'
import LayoutCComponent from '@/components/admin/layouts/sidebar/LayoutCComponent.vue'
import LayoutGComponent from '@/components/admin/layouts/sidebar/LayoutGComponent.vue'
import menu from '@/components/admin/data/menu.json'
import { EventBus } from '@/js/event-bus.js';

export default {
    name:"SidebarComponent",
    components:{
        'layout-a':LayoutAComponent,
        'layout-c':LayoutCComponent,
        'layout-g':LayoutGComponent
    },data (){
        return {
            arrowToggle:false,
            isSidebarToggle:false,
            isGradient:false,
            currentLayoutStyle:'style-1',
            menuItems: menu.menu,
            currentLayout:'layout-a'
        }
    },methods:{
        miniSidebar(){
            this.arrowToggle = !this.arrowToggle;
        },
    },computed: {
        currentRoutePath() {
            return this.$route.path;
        },
        isSidebarVisible() {
            return this.currentLayout !== 'layout-d' && this.currentLayout !== 'layout-d-sub-header' && this.currentLayout !== 'layout-f';
        }
    },mounted() {
        EventBus.$on('Gradient', (Gradient) => {
            this.isGradient = Gradient
        }),
        EventBus.$on('activeLayout', (activeLayout) => {
          this.currentLayout = activeLayout.currentLayout
          this.currentLayoutStyle = activeLayout.currentLayoutStyle
        }),
        EventBus.$on('isSidebarToggle', (isSidebarToggle) => {
          this.isSidebarToggle = isSidebarToggle
        })
        EventBus.$on('defaultLayoutSToggle', (defaultLayoutSToggle) => {
          this.isSidebarToggle = defaultLayoutSToggle
        })
    },beforeDestroy(){
        EventBus.$off('Gradient');
        EventBus.$off('activeLayout');
        EventBus.$off('isSidebarToggle');
        EventBus.$off('defaultLayoutSToggle');
    }
}
</script>
<style scoped>

</style>