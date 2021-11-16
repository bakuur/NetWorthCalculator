<template>
    <div class="header" :class="{
        'fixed-top': currentLayout !== 'layout-h',
        'sticky-top': currentLayout == 'layout-h',
        'shadow-sm': currentLayout !== 'layout-f' && currentLayout !== 'layout-e', 
        'bg-primary': currentLayout == 'layout-f', 
        'px-lg-5 px-md-2': currentLayout == 'layout-d', 
        'shadow': currentLayout == 'layout-e'}" v-if="isHeaderVisible">
        <nav class="navbar" :class="{'navbar-expand-lg': currentLayout == 'layout-d', 
            'py-md-3 px-lg-5 px-md-2': currentLayout != 'layout-d' && currentLayout != 'layout-e',
            'navbar-light py-2': currentLayout != 'layout-d',
            'bg-secondary': currentLayout == 'layout-d-sub-header',
            'bg-dark px-2': currentLayout == 'layout-e'}">
            <div :class="currentLayoutStyle == 'style-5' || currentLayoutStyle == 'style-7' || currentLayoutStyle == 'style-9' || currentLayoutStyle == 'style-12' || currentLayoutStyle == 'style-13' ? 'container-fluid' : 'container'">

                <!-- Brand -->
                <router-link to="/dashboard/index" class="mr-3 mr-lg-4 brand-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 64 80" fill="none">
                        <path d="M58.8996 22.7L26.9996 2.2C23.4996 -0.0999999 18.9996 0 15.5996 2.5C12.1996 5 10.6996 9.2 11.7996 13.3L15.7996 26.8L3.49962 39.9C-3.30038 47.7 3.79962 54.5 3.89962 54.6L3.99962 54.7L36.3996 78.5C36.4996 78.6 36.5996 78.6 36.6996 78.7C37.8996 79.2 39.1996 79.4 40.3996 79.4C42.9996 79.4 45.4996 78.4 47.4996 76.4C50.2996 73.5 51.1996 69.4 49.6996 65.6L45.1996 51.8L58.9996 39.4C61.7996 37.5 63.3996 34.4 63.3996 31.1C63.4996 27.7 61.7996 24.5 58.8996 22.7ZM46.7996 66.7V66.8C48.0996 69.9 46.8996 72.7 45.2996 74.3C43.7996 75.9 41.0996 77.1 37.9996 76L5.89961 52.3C5.29961 51.7 1.09962 47.3 5.79962 42L16.8996 30.1L23.4996 52.1C24.3996 55.2 26.5996 57.7 29.5996 58.8C30.7996 59.2 31.9996 59.5 33.1996 59.5C35.0996 59.5 36.9996 58.9 38.6996 57.8C38.7996 57.8 38.7996 57.7 38.8996 57.7L42.7996 54.2L46.7996 66.7ZM57.2996 36.9C57.1996 36.9 57.1996 37 57.0996 37L44.0996 48.7L36.4996 25.5V25.4C35.1996 22.2 32.3996 20 28.9996 19.3C25.5996 18.7 22.1996 19.8 19.8996 22.3L18.2996 24L14.7996 12.3C13.8996 8.9 15.4996 6.2 17.3996 4.8C18.4996 4 19.8996 3.4 21.4996 3.4C22.6996 3.4 23.9996 3.7 25.2996 4.6L57.1996 25.1C59.1996 26.4 60.2996 28.6 60.2996 30.9C60.3996 33.4 59.2996 35.6 57.2996 36.9Z" fill="black"/>
                    </svg>
                </router-link>

                <!-- Search -->
                <div class="h-left d-none d-sm-block" v-if="currentLayout == 'layout-d-sub-header' || currentLayout == 'layout-f' || currentLayout == 'layout-e' || currentLayout == 'layout-h'">
                    <div class="input-group border rounded" :class="{'header-search': currentLayout == 'layout-f'}">
                         <b-dropdown text="Fillter" variant="transparent" toggle-class="btn btn-outline-secondary border-0 d-none d-sm-block" :class="{'text-light': currentLayout == 'layout-f'}">
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                            <b-dropdown-item href="#">Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item href="#">Separated link</b-dropdown-item>
                        </b-dropdown>
                        <input type="text" class="form-control bg-transparent border-0" placeholder="Search here...">
                    </div>
                </div>
                <!-- header rightbar icon -->
                <div class="h-right d-flex align-items-center mr-5 mr-lg-0" :class="{'order-1': currentLayout == 'layout-d', 'order-0': currentLayout == 'layout-d-sub-header', 'flex-grow-1 justify-content-end': currentLayout != 'layout-d'}">
                    <div class="d-flex">
                        <a class="nav-link text-muted collapsed" href="javascript:void(0);" title="Search" v-b-toggle.main-search
                            :class="{'d-none': currentLayout == 'layout-d-sub-header' || currentLayout == 'layout-f' || currentLayout == 'layout-e' || currentLayout == 'layout-h'}">
                            <i class="fa fa-search"></i>
                        </a>
                        <a class="nav-link text-primary" href="javascript:void(0);" title="Layout Modal" 
                            :class="{'text-secondary': currentLayout == 'layout-f'}"
                            v-b-modal.LayoutModal>
                            <i class="fa fa-sliders"></i>
                        </a>
                        <a class="nav-link text-primary" href="javascript:void(0);" title="Settings" 
                            :class="{'text-secondary': currentLayout == 'layout-f'}"
                            v-b-modal.SettingsModal>
                            <i class="fa fa-gear"></i>
                        </a>
                    </div>
                    <b-dropdown variant="link" no-caret class="notifications" toggle-class="nav-link pulse">
                        <template slot="button-content">
                            <i class="fa fa-bell"></i>
                            <span class="pulse-ring"></span>
                        </template>
                        <div class="rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                            <div class="card border-0 w380">
                                <div class="card-header border-0 p-3">
                                    <h5 class="mb-0 fw-light d-flex justify-content-between">
                                        <span>Notifications Center</span>
                                        <span class="badge text-muted">{{notificationCounts}}</span>
                                    </h5>
                                    <ul class="nav nav-tabs mt-3 border-bottom-0">
                                        <li class="nav-item">
                                            <a class="nav-link fw-light pl-0 mr-2" href="javascript:void(0);"
                                            :class="currentActiveTab == 'messages' ? 'active' : ''"
                                            @click="changeTab('messages')">Message</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link fw-light mr-2" href="javascript:void(0);"
                                            :class="currentActiveTab == 'events' ? 'active' : ''"
                                            @click="changeTab('events')">Events</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link fw-light" href="javascript:void(0);"
                                            :class="currentActiveTab == 'logs' ? 'active' : ''"
                                            @click="changeTab('logs')">Logs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content card-body">
                                    <div class="tab-pane" :class="currentActiveTab == 'messages' ? 'active show' : 'fade'">
                                        <ul class="list-unstyled list mb-0" v-if="notificationsObj.messages.length > 0">
                                            <template v-for="(message,index) in notificationsObj.messages">
                                                <li class="py-2 mb-1" :class="{'border-bottom': index < (notificationsObj.messages.length-1)}" :key="index">
                                                    <a href="javascript:void(0);" class="d-flex">
                                                        <img class="avatar rounded-circle" :src="require('../../../../assets/images/xs/' + message.avtar)" alt="" v-if="message.avtar">
                                                        <div class="avatar rounded-circle no-thumbnail" v-if="!message.avtar">{{ message.name | short_hand }}</div>
                                                        <div class="flex-fill ml-3">
                                                            <p class="d-flex justify-content-between mb-0 text-muted"><span class="font-weight-bold">{{ message.name }}</span> <small>{{ message.time }}</small></p>
                                                            <span class="text-muted" v-html="message.message"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </template>
                                        </ul>
                                        <h4 v-if="notificationsObj.messages.length == 0">No Messages right now!</h4>
                                    </div>
                                    <div class="tab-pane" :class="currentActiveTab == 'events' ? 'active show' : 'fade'">
                                        <ul class="list-unstyled list mb-0" v-if="notificationsObj.events.length > 0">
                                            <template v-for="(event,index) in notificationsObj.events">
                                                <li class="py-2 mb-1 " :class="{'border-bottom': index < (notificationsObj.events.length-1)}" :key="index">
                                                    <a href="javascript:void(0);" class="d-flex">
                                                        <div class="avatar rounded no-thumbnail"><i :class="`fa fa-lg ${event.faIcon}`"></i></div>
                                                        <div class="flex-fill ml-3">
                                                            <p class="mb-0 text-muted" v-html="event.event">\</p>
                                                            <small class="text-muted">{{ event.time }}</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </template>
                                        </ul>
                                        <h4 v-if="notificationsObj.events.length == 0">No Events right now!</h4>
                                    </div>
                                    <div class="tab-pane" :class="currentActiveTab == 'logs' ? 'active show' : 'fade'">
                                        <ul class="list-unstyled list mb-0" v-if="notificationsObj.logs.length > 0">
                                            <template v-for="(log,index) in notificationsObj.logs">
                                                <li class="py-2 mb-1 " :class="{'border-bottom': index < (notificationsObj.logs.length-1)}" :key="index">
                                                    <a href="javascript:void(0);" class="d-flex">
                                                        <div class="avatar rounded no-thumbnail"><i :class="`fa fa-lg ${log.faIcon}`"></i></div>
                                                        <div class="flex-fill ml-3">
                                                            <p class="mb-0 text-muted" v-html="log.event">\</p>
                                                            <small class="text-muted">{{ log.time }}</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </template>
                                        </ul>
                                        <h4 v-if="notificationsObj.logs.length == 0">No Logs right now!</h4>
                                    </div>
                                </div>
                                <a class="card-footer text-center border-top-0" href="Javascript:void(0);"> View all notifications</a>
                            </div>
                        </div>
                    </b-dropdown>
                    <b-dropdown class="user-profile ms-2 ms-sm-3"  no-caret toggle-class="pulse p-0 nav-link"  variant="transparent" toggle-tag="a" menu-class="rounded-lg shadow border-0 p-0 m-0">
                        <template #button-content>
                            <img class="avatar rounded-circle img-thumbnail" src="../../../../assets/images/profile_av.png" alt="">
                        </template>
                        <b-card class="border-0 w240" body-class="border-bottom">
                                <div class="d-flex py-1">
                                    <img class="avatar rounded-circle" src="../../../../assets/images/profile_av.png" alt="">
                                    <div class="flex-fill ms-3">
                                        <p class="mb-0 text-muted"><span class="font-weight-bold">Chris Fox</span></p>
                                        <small class="text-muted">chris.fox@gamil.com</small>
                                        <div>
                                            <a href="#" class="card-link">Sign out</a>
                                        </div>
                                    </div>
                                </div>
                            <div class="list-group m-2">
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-user"></i>Profile &amp; account</a>
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-gear"></i>Settings</a>
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-tag"></i>Customization</a>
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-users"></i>Manage team</a>
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-calendar"></i>My Events</a>
                                <a href="#" class="list-group-item list-group-item-action border-0"><i class="w30 fa fa-credit-card"></i>My Statements</a>
                            </div>
                        </b-card>
                    </b-dropdown>
                </div>

                <!-- menu toggler -->
                <button class="navbar-toggler p-0 border-0 text-primary d-xl-none" type="button" @click="menuBarToggle()" :class="{'d-none': currentLayout == 'layout-d-sub-header' || currentLayout == 'layout-f'}">
                    <span class="fa fa-bars"></span>
                </button>
                

                <!-- main menu -->
                <div class="collapse navbar-collapse order-0" id="mainHeader" :class="{'py-1 py-md-2 px-lg-5 px-md-4': currentLayoutStyle == 'style-7', 'py-1 py-md-2': currentLayout != 'layout-d','show':isSidebarToggle}">
                    <header-d></header-d>
                </div>
            </div>
        </nav>
        <!-- Search: div -->
        <b-collapse class="border-bottom px-lg-5 px-md-2 collapse bg-primary" id="main-search">
            <div class="container py-4">
                <div class="input-group">
                    <input type="text" class="form-control border-0 p-0 bg-transparent" placeholder="Search. Components, Layouts, etc...">
                    <div class="input-group-append ms-3">
                        <button class="btn btn-light" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </b-collapse> 
        <div class="sub-header" v-if="currentLayout == 'layout-d-sub-header' || currentLayout == 'layout-f'">
            <nav class="navbar navbar-expand-lg" :class="currentLayout == 'layout-f' ? 'py-0 px-lg-5 px-md-2' : 'p-0'">
                <div :class="currentLayoutStyle == 'style-5' || currentLayoutStyle == 'style-7' || currentLayoutStyle == 'style-9' ? 'container-fluid' : 'container'">

                    <!-- menu toggler -->
                    <button class="navbar-toggler p-0 border-0" type="button"  @click="isSidebarToggle = !isSidebarToggle">
                        <span class="fa fa-bars"></span>
                    </button>

                    <!-- main menu -->
                    <div class="collapse navbar-collapse order-0" id="mainHeader" :class="{'py-1 py-md-2 px-lg-5 px-md-4': currentLayoutStyle == 'style-7', 'py-1 py-md-2': currentLayout != 'layout-d','show':isSidebarToggle}">
                        <header-d></header-d>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import notifications from '@/components/admin/data/notifications.json'
import HeaderLyotDComponent from '@/components/admin/layouts/header/HeaderLyotDComponent.vue'
export default {
    name:"HeaderComponent",
    components:{
        'header-d':HeaderLyotDComponent
    },data (){
        return {
            currentLayoutStyle:'style-1',
            currentLayout:'layout-a',
            notificationsObj: notifications.notifications,
            notificationCounts:15,
            currentActiveTab:"messages",
            isSidebarToggle:false,
            defaultLayoutSToggle:false
        }
    },methods:{
        changeTab(tab){
            this.currentActiveTab = tab
        },
        menuBarToggle(){
            if (this.currentLayout == 'layout-h' || this.currentLayout == 'layout-e') {
                this.defaultLayoutSToggle = !this.defaultLayoutSToggle;
                EventBus.$emit('defaultLayoutSToggle',this.defaultLayoutSToggle)
            }else{
                this.isSidebarToggle = !this.isSidebarToggle
            }
            
        }
    },mounted() {
        EventBus.$on('activeLayout', (activeLayout) => {
          this.currentLayout = activeLayout.currentLayout
          this.currentLayoutStyle = activeLayout.currentLayoutStyle
        })
        
    },computed: {
        isHeaderVisible() {
            return this.currentLayout == 'layout-d' || this.currentLayout == 'layout-d-sub-header' || this.currentLayout == 'layout-f' || this.currentLayout == 'layout-e' || this.currentLayout == 'layout-h';
        }
    },filters: {
        short_hand (company_name) {
            // You can put your logic here...
            let words = company_name.split(" ")
            let short_hand = words[0][0] + words[words.length-1][0]
            return short_hand // <-- The return value as Per logic
        }
    },beforeDestroy(){
        EventBus.$off('activeLayout')
    }
}
</script>