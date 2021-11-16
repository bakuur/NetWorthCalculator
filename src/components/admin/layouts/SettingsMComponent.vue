<template>
    <b-modal id="SettingsModal" tabindex="-1" title="Setting" size="sm" centered scrollable ok-title="Save Changes">
        <template v-slot:modal-header-close>
            <button type="button" class="btn btn-close"></button>
        </template>
        <div class="modal-body">
                    <!-- Settings: Font -->
                    <div class="setting-font">
                        <small class="card-title text-muted">Google font Settings</small>
                        <ul class="list-group font_setting  mb-3 mt-1">
                            <li class="list-group-item py-1 px-2">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="radio" name="font" id="font-opensans" value="font-opensans" :checked="activeFont == 'font-opensans' ? true: false" v-on:click="changeFont('font-opensans')">
                                    <label class="form-check-label" for="font-opensans">
                                        Open Sans Google Font
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item py-1 px-2">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="radio" name="font" id="font-quicksand" value="font-quicksand" :checked="activeFont == 'font-quicksand' ? true: false" v-on:click="changeFont('font-quicksand')">
                                    <label class="form-check-label" for="font-quicksand">
                                        Quicksand Google Font
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item py-1 px-2">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="radio" name="font" id="font-nunito" value="font-nunito" :checked="activeFont == 'font-nunito' ? true: false" v-on:click="changeFont('font-nunito')">
                                    <label class="form-check-label" for="font-nunito">
                                        Nunito Google Font
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item py-1 px-2">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="radio" name="font" id="font-Raleway" value="font-raleway" :checked="activeFont == 'font-raleway' ? true: false" v-on:click="changeFont('font-raleway')">
                                    <label class="form-check-label" for="font-Raleway">
                                        Raleway Google Font
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Settings: Color -->
                   <div class="setting-theme">
                    <small class="card-title text-muted">Theme Color Settings</small>
                    <ul class="list-unstyled d-flex justify-content-between choose-skin mb-2 mt-1">
                        <li data-theme="indigo" v-bind:class="{ 'active': activeColor === 'theme-indigo'}" v-on:click="changeBodycolor('theme-indigo')"><div class="indigo"></div></li>
                        <li data-theme="blue"  v-bind:class="{ 'active': activeColor === 'theme-blue'}" v-on:click="changeBodycolor('theme-blue')"><div class="blue"></div></li>
                        <li data-theme="cyan"  v-bind:class="{ 'active': activeColor === 'theme-cyan'}" v-on:click="changeBodycolor('theme-cyan')"><div class="cyan"></div></li>
                        <li data-theme="green" v-bind:class="{ 'active': activeColor === 'theme-green'}" v-on:click="changeBodycolor('theme-green')"><div class="green"></div></li>
                        <li data-theme="orange" v-bind:class="{ 'active': activeColor === 'theme-orange'}" v-on:click="changeBodycolor('theme-orange')"><div class="orange"></div></li>
                        <li data-theme="blush" v-bind:class="{ 'active': activeColor === 'theme-blush'}" v-on:click="changeBodycolor('theme-blush')"><div class="blush"></div></li>
                        <li data-theme="red" v-bind:class="{ 'active': activeColor === 'theme-red'}" v-on:click="changeBodycolor('theme-red')"><div class="red"></div></li>
                        <li data-theme="dynamic" v-bind:class="{ 'active': activeColor === 'theme-dynamic'}" v-on:click="changeBodycolor('theme-dynamic')"><div class="dynamic"><i class="fa fa-paint-brush"></i></div></li>
                    </ul>
                    <div class="form-check form-switch gradient-switch mb-3">
                        <input class="form-check-input" type="checkbox" id="CheckGradient" @click="changeGradient()" :checked="isGradient? true: false">
                        <label class="form-check-label" for="CheckGradient">Enable Gradient! ( Sidebar )</label>
                    </div>
                </div>

                <!-- Settings: Theme dynamics -->
                <div class="dt-setting">
                    <small class="card-title text-muted">Dynamic Color Settings</small>
                    <ul class="list-group list-unstyled mb-3 mt-1">
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Primary Color</label>
                            <sketch-picker :value="cValue1" @input="updatePrimary" class="btn btn-primary avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Secondary Color</label>
                            <sketch-picker :value="cValue2" @input="updatesecondary" class="btn  btn-secondary avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label class="text-muted small">Chart Color 1</label>
                            <sketch-picker :value="cValue3" @input="updateChart1" class="btn chart-color1 avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label class="text-muted small">Chart Color 2</label>
                            <sketch-picker :value="cValue4" @input="updateChart2" class="btn chart-color2 avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label class="text-muted small">Chart Color 3</label>
                            <sketch-picker :value="cValue5" @input="updateChart3" class="btn chart-color3 avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label class="text-muted small">Chart Color 4</label>
                            <sketch-picker :value="cValue6" @input="updateChart4" class="btn chart-color4 avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label class="text-muted small">Chart Color 5</label>
                            <sketch-picker :value="cValue7" @input="updateChart5" class="btn chart-color5 avatar xs border-0 rounded-0"></sketch-picker>
                        </li>
                    </ul>
                </div>
                <div class="setting-mode">
                    <small class="card-title text-muted">Light/Dark & Contrast Layout</small>
                    <ul class="list-group list-unstyled mb-0 mt-1">
                        <li class="list-group-item d-flex align-items-center py-1 px-2">
                            <div class="form-check form-switch theme-switch mb-0">
                                <input class="form-check-input" type="checkbox" id="theme-switch" @click="togglethemeMode('dark')" :checked="EnabledarkMode? true: false">
                                <label class="form-check-label" for="theme-switch">Enable Dark Mode!</label>
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center py-1 px-2">
                            <div class="form-check form-switch theme-high-contrast mb-0">
                                <input class="form-check-input" type="checkbox" id="theme-high-contrast" @click="togglehighkcontrastMode('high-contrast')" :checked="EnablehighkcontrastMode? true: false">
                                <label class="form-check-label" for="theme-high-contrast">Enable High Contrast</label>
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center py-1 px-2">
                            <div class="form-check form-switch theme-rtl mb-0">
                                <input class="form-check-input" type="checkbox" id="theme-rtl" @click="toggleRtlMode()" :checked="isRtl? true: false">
                                <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </b-modal>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import { Sketch } from 'vue-color-sketch'
export default {
    name:"SettingsMComponent",
    components: {
        'sketch-picker': Sketch
    },data() {
        return {
            activeColor: 'theme-blue',
            isGradient:false,
            activeFont:'font-opensans',
            isRtl:false,
            EnabledarkMode:false,
            EnablehighkcontrastMode:false,
            primaryColor: '',
            secondaryColor: '',
            chart1:'',
            chart2:'',
            chart3:'',
            chart4:'',
            chart5:'',
            cValue1:'#0d6efd',
            cValue2:'#ffd55d',
            cValue3:'#2794eb',
            cValue4:'#17b3c1',
            cValue5:'#64868e',
            cValue6:'#47d6b6',
            cValue7:'#4362d0',
        }
    },methods:{
        changeBodycolor(color){
            this.activeColor = color
            document.body.className = color;
        },
        changeGradient(){
           this.isGradient = !this.isGradient;
           EventBus.$emit('Gradient',this.isGradient)
        },
        changeFont(fonts){
           this.activeFont = fonts;
           document.body.className = this.activeColor+' '+fonts; 
        },
        togglethemeMode(theme){
            this.EnablehighkcontrastMode = false
            this.EnabledarkMode = !this.EnabledarkMode; 
            const html = document.documentElement // returns the html tag
            if (this.EnabledarkMode == true) {
                if(theme == 'dark') {
                    html?.setAttribute("data-theme",theme);
                }
            }else{
                html?.removeAttribute("data-theme");
            }
        },
        togglehighkcontrastMode(theme){
            this.EnabledarkMode = false
            this.EnablehighkcontrastMode = !this.EnablehighkcontrastMode; 
            const html = document.documentElement // returns the html tag
            if (this.EnablehighkcontrastMode == true) {
                if(theme == 'high-contrast') {
                    html?.setAttribute("data-theme",theme);
                }
            }else{
                html?.removeAttribute("data-theme");
            }
        },
        toggleRtlMode(){
            this.isRtl = !this.isRtl; 
            if (this.isRtl == true) {
                document.body.className = this.activeColor+' '+this.activeFont+' '+ 'rtl_mode';
            }else{
                document.body.className = this.activeColor+' '+this.activeFont;   
            }
           
        },
        updatePrimary(color) {
            this.primaryColor = `--primary-color:`+color.hex
            this.cValue1 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updatesecondary(color) {
            this.secondaryColor = `--secondary-color:`+color.hex
            this.cValue2 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updateChart1(color) {
            this.chart1 = `--chart-color1:`+color.hex
            this.cValue3 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updateChart2(color) {
            this.chart2 = `--chart-color2:`+color.hex
            this.cValue4 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updateChart3(color) {
            this.chart3 = `--chart-color3:`+color.hex
            this.cValue5 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updateChart4(color) {
            this.chart4 = `--chart-color4:`+color.hex
            this.cValue6 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
        updateChart5(color) {
            this.chart5 = `--chart-color5:`+color.hex
            this.cValue7 = color.hex
            document.body.style = this.primaryColor+'; '+this.secondaryColor+'; '+this.chart1+'; '+this.chart2+'; '+this.chart3+'; '+this.chart4+'; '+this.chart5
        },
    },beforeMount(){
        document.body.className = 'theme-blue'; 
    }
}
</script>