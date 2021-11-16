<template>
    <div class="body-header d-flex" :class="{
        'py-lg-3 py-2': currentLayout == 'layout-f' || currentLayout == 'layout-h',
        'text-light': currentLayout == 'layout-f',
        'border-bottom py-3': currentLayout != 'layout-f' && currentLayout != 'layout-h',
        'bg-primary py-1 py-lg-2 px-2 px-md-3 px-lg-4': currentLayout == 'layout-b',
        'px-lg-5 px-md-4': currentLayout == 'layout-h'}">
        <div :class="currentLayoutStyle == 'style-6' || currentLayoutStyle == 'style-8' || currentLayoutStyle == 'style-10'  || currentLayoutStyle == 'style-11' || currentLayoutStyle == 'style-12' ? 'container' : 'container-fluid'">
            <div class="row" :class="{'align-items-center':currentLayout == 'layout-b' || currentLayout == 'layout-a'}">
                <bread-crumb v-if="!['chat'].includes($route.name)"/>
                <div class="col-12" :class="{'d-none':currentLayout != 'layout-b'}">
                    <b-navbar toggleable="md" class="py-md-1 py-0">
                        <b-navbar-toggle class="navbar-toggler" target="navbarSupportedContent">
                            <span class="fa fa-bars"></span>
                        </b-navbar-toggle>
                        <b-collapse id="navbarSupportedContent" is-nav>
                            <b-navbar-nav class="me-auto"> 
                                <b-nav-item href="Javascript:void(0);" link-classes="text-light pl-0">Apps</b-nav-item>
                                <b-nav-item href="Javascript:void(0);" link-classes="text-light">Features</b-nav-item>
                                <b-nav-item-dropdown text="More pages" variant="transparent" toggle-class="text-light" menu-class="shadow border-0 dropdown-animation">
                                    <b-dropdown-item >Profile</b-dropdown-item>
                                    <b-dropdown-item >Timeline</b-dropdown-item>
                                    <b-dropdown-item >Image Gallery</b-dropdown-item>
                                    <b-dropdown-item >Invoices</b-dropdown-item>
                                    <b-dropdown-item >Pricing</b-dropdown-item>
                                    <b-dropdown-item >Image Gallery</b-dropdown-item>
                                    <b-dropdown-item >Teams Board</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item >Something else here</b-dropdown-item>
                                </b-nav-item-dropdown>
                                <b-nav-item href="Javascript:void(0);" link-classes="text-light">Setting</b-nav-item>
                            </b-navbar-nav>
                            <b-form class="d-flex">
                                <b-form-input class="mr-2" placeholder="Search"></b-form-input>
                                <b-button variant="white" type="submit">Search</b-button>
                            </b-form>
                        </b-collapse>
                    </b-navbar> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/BreadCrumb'
import { EventBus } from '@/js/event-bus.js';
export default {
    name:'BodyHeaderComponent',
    components: {
        BreadCrumb,
    },data (){
        return {
            currentLayoutStyle:'style-1',
            currentLayout:'layout-a',
        }
    },mounted() {
        EventBus.$on('activeLayout', (activeLayout) => {
          this.currentLayout = activeLayout.currentLayout
          this.currentLayoutStyle = activeLayout.currentLayoutStyle
        });
    },beforeDestroy(){
        EventBus.$off('activeLayout')
    }
}
</script>
<style scoped>

</style>