<template>
    <!-- Menu: main ul -->
    <ul class="menu-list flex-grow-1">
        <li v-for="(menuItem,index) in myMenu" :key="index" :class="[menuItem.children.length > 0 ? 'collapsed':'',menuItem.isCategory ? 'divider mt-4 py-2 border-top':'']" @click="activeMenu(menuItem.identifier)">
            <small v-if="menuItem.isCategory">{{ menuItem.name }}</small>
            <router-link class="m-link" :to="`${menuItem.routerLink}`" :class="{'active': $route.path == menuItem.routerLink && mainActiveMenu == menuItem.identifier }" v-if="menuItem.children.length == 0" v-show="!menuItem.isCategory" >
                <i :class="menuItem.iconClass" v-show="!menuItem.isCategory"></i> <span v-show="!menuItem.isCategory">{{ menuItem.name }}</span> <span class="badge rounded-pill ml-auto" v-if="menuItem.bedge">{{ menuItem.bedge }}</span>
            </router-link>
            <a class="m-link" href="javascript:void(0);" :class="{'active':currentActiveMenu == menuItem.identifier && mainActiveMenu == menuItem.identifier}" v-if="menuItem.children.length > 0" @click="toggleMenu(menuItem.identifier)">
                <i :class="`${menuItem.iconClass}`"></i>
                <span>{{ menuItem.name }}</span> <span class="arrow fa fa-dot-circle-o ms-auto text-end"></span>
            </a>
            <!-- Menu: Sub menu ul -->
            <ul class="sub-menu collapse" id="menu-Pages"  :class="{'show': currentActiveMenu == menuItem.identifier && mainActiveMenu == menuItem.identifier }" v-if="menuItem.children.length > 0">
                <li v-for="(submenuItem,index) in menuItem.children" :key="index"  @click="subActiveMenu(submenuItem.identifier)">
                    <router-link class="ms-link" :class="{'active': $route.path == submenuItem.routerLink}" :to="`${submenuItem.routerLink}`">{{ submenuItem.name }}</router-link>
                </li>
            </ul>
        </li> 
    </ul>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import menu from '@/components/admin/data/menu.json'
export default {
    name:"LayoutAComponent",
    data(){
        return{
            myMenu: menu.menu,
            currentActiveMenu:window.location.pathname.split("/")[2],
            mainActiveMenu:window.location.pathname.split("/")[2],
        }
    },methods:{
        toggleMenu(identifier) {
            if (this.currentActiveMenu === identifier) {
                this.currentActiveMenu = null;
            } else {
                this.currentActiveMenu = identifier;
            }           
        },
        
        activeMenu(identifier) {
            EventBus.$emit('identifier',identifier);
            this.currentActiveMenu = this.currentActiveMenu != identifier ? '' : identifier;
            this.mainActiveMenu = identifier;
        },

        subActiveMenu(identifier) {
            EventBus.$emit('subActiveMenu',identifier);
        },
    }
}
</script>
<style scoped>
small, .small {
    font-size: .875em !important;
}
</style>