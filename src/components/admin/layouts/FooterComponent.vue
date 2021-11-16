<template>
   <div class="body-footer" :class="{'d-flex px-lg-5 px-md-4': currentLayout == 'layout-h'}">
        <div :class="currentLayoutStyle == 'style-6' || currentLayoutStyle == 'style-8' || currentLayoutStyle == 'style-10'  || currentLayoutStyle == 'style-11' || currentLayoutStyle == 'style-12' ? 'container' : 'container-fluid'">
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row justify-content-between align-items-center">
                            <div class="col">
                                <p class="font-size-sm mb-0">Baker Al-Nakib <span class="d-none d-sm-inline-block"></span></p>
                            </div>
                            <div class="col-auto">
                                <div class="d-flex justify-content-end">
                                    <!-- List Dot -->
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item">
                                             ShakePay Programming Excercise 2021
                                        </li>
                                    </ul>
                                    <!-- End List Dot -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
export default {
    name:"FooterComponent",
    data (){
        return {
            currentLayoutStyle:'style-1',
            currentLayout:'layout-a'
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
<style scoped>

</style>