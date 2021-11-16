<template>
    <b-modal class="modal fade" id="LayoutModal" tabindex="-1" title="Ready to build Layouts" size="lg" scrollable dialog-class="modal-dialog-vertical"  modal-class="modal-dialog-vertical" :hide-footer="true">
        <template v-slot:modal-header-close>
            <button type="button" class="btn btn-close"></button>
        </template>
        <div class="modal-body">
            <div class="mb-4">Customize your overview page layout. Choose the one that best fits your needs.</div>
            <h5 class="mt-5 pb-2">Left sidebar with icon</h5>
            <div class="row g-3">
                <div class="col-md-6 col-sm-12">
                    <a class="card lift" href="javascript:void(0);"  @click="changeLayoutStyle('style-1')" :class="[activeLayout == 'style-1' ? 'border-primary bg-primary text-light' : '']">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-default.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Default</h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12">
                    <a class="card lift" href="javascript:void(0);" @click="changeLayoutStyle('style-2')" :class="[activeLayout == 'style-2' ? 'border-primary bg-primary text-light' : '']">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-mini-sidebar.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Default + Menu Collapse</h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12">
                    <a class="card lift" href="javascript:void(0);"  @click="changeLayoutStyle('style-3')" :class="[activeLayout == 'style-3' ? 'border-primary bg-primary text-light' : '']">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-c.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Menu + Tab view</h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12">
                    <a class="card lift" href="javascript:void(0);" @click="changeLayoutStyle('style-4')" :class="[activeLayout == 'style-4' ? 'border-primary bg-primary text-light': '']">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-g.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Icon menu with Grid view</h6>
                        </div>
                    </a>
                </div>
            </div>
            <h5 class="mt-5 pb-2">Header top menu</h5>
            <div class="row g-3">
                <div class="col-md-6 col-sm-12"  @click="changeLayoutStyle('style-5')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-5'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-d.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header <span class="text-muted small">(Fluid)</span></h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12" @click="changeLayoutStyle('style-6')">
                    <a class="card lift" href="javascript:void(0);"  :class="{'border-primary bg-primary text-light': activeLayout === 'style-6'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-d-container.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header <span class="text-muted small">(Container)</span></h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12"  @click="changeLayoutStyle('style-7')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-7'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-d-sub-header.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header + Sub menu <span class="text-muted small">(Fluid)</span></h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12" @click="changeLayoutStyle('style-8')">
                    <a class="card lift" href="javascript:void(0);"  :class="{'border-primary bg-primary text-light': activeLayout === 'style-8'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-d-sub-header-container.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header + Submenu <span class="text-muted small">(Container)</span></h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12"  @click="changeLayoutStyle('style-9')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-9'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-f.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header + Submenu, Overlay <span class="text-muted small">(Fluid)</span></h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12"  @click="changeLayoutStyle('style-10')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-10'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-f-container.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Header + Submenu, Overlay <span class="text-muted small">(Container)</span></h6>
                        </div>
                    </a>
                </div>
            </div>
            <h5 class="mt-5 pb-2">Content Combinations</h5>
            <div class="row g-3">
                <div class="col-md-6 col-sm-12" @click="changeLayoutStyle('style-11')">
                    <a class="card lift" href="javascript:void(0);"  :class="{'border-primary bg-primary text-light': activeLayout === 'style-11'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-b.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Default</h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12"  @click="changeLayoutStyle('style-12')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-12'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-e.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Default</h6>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12" @click="changeLayoutStyle('style-13')">
                    <a class="card lift" href="javascript:void(0);" :class="{'border-primary bg-primary text-light': activeLayout === 'style-13'}">
                        <img class="card-img-top" src="../../../assets/images/layout/layout-h.svg" alt="" />
                        <div class="card-body text-center">
                            <h6 class="card-title mb-0">Default</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </b-modal>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
export default {
    name:"LayoutMComponent",
    data(){
        return{
            activeLayout:'style-1'
        }
    },methods:{
        changeLayoutStyle(currentLayoutStyle){
            if (currentLayoutStyle == 'style-1') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-a"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-2') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-a"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-3') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-c"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-4') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-g"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-5') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-d"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-6') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-d"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-7') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-d-sub-header"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-8') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-d-sub-header"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-9') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-f"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-10') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-f"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-11') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-b"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-12') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-e"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }else if (currentLayoutStyle == 'style-13') {
                this.activeLayout = currentLayoutStyle
                let currentLayout = "layout-h"
                EventBus.$emit('activeLayout',{currentLayoutStyle, currentLayout})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    ::v-deep #LayoutModal > .modal-dialog {
        max-height: 100%;
    }  
</style>
