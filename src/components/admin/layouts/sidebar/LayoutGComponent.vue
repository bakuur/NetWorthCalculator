<template>
    <div class="">
        <ul class="menu-list grid d-flex flex-wrap border rounded mx-auto">
            <template v-for="(menuItem,index) in myMenu"> 
                <li :key="index" v-if="menuItem.isApp" @click="activeMenu(menuItem.identifier)">
                    <router-link class="m-link" :to="`${menuItem.routerLink}`" :class="{'active': $route.path == menuItem.routerLink && mainActiveMenu == menuItem.identifier }"><i :class="`${menuItem.iconClass}`"></i> <span>{{ menuItem.name }}</span></router-link>
                </li>
            </template>
        </ul>
        <ul class="menu-list flex-grow-1 px-3">
            <li  v-for="(menuItem,index) in myMenu" :key="index" :class="{'collapsed': menuItem.children.length > 0}" v-show="!menuItem.isCategory && !menuItem.isApp">
                <a class="m-link" href="javascript:void(0);" :class="{'active':currentActiveMenu == menuItem.identifier}"
                    v-if="menuItem.children.length > 0" @click="toggleMenu(menuItem.identifier)" :aria-expanded="currentActiveMenu == menuItem.identifier && mainActiveMenu == menuItem.identifier ? 'true' : 'false'">
                    <i :class="`${menuItem.iconClass}`"></i> <span>{{ menuItem.name }}</span>  <span class="arrow fa fa-dot-circle-o ms-auto text-end"></span>
                </a>
                    <ul class="sub-menu collapse" id="menu-Pages" :class="{'show': currentActiveMenu == menuItem.identifier}" v-if="menuItem.children.length > 0">
                    <li v-for="(submenuItem,index) in menuItem.children" :key="index" @click="subActiveMenu(submenuItem.identifier)">
                        <router-link class="ms-link"  :class="{'active': $route.path == submenuItem.routerLink}" :to="`${submenuItem.routerLink}`">{{ submenuItem.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import menu from '@/components/admin/data/menu.json'
export default {
    name:'LayoutGComponent',
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
            if (this.mainActiveMenu === identifier) {
                this.mainActiveMenu = null;
                this.currentActiveMenu = null;
            } else {
                this.mainActiveMenu = identifier;
                this.currentActiveMenu = identifier;
            }  
        },

        subActiveMenu(identifier) {
            EventBus.$emit('subActiveMenu',identifier);
        },
    }
}
</script>
<style scoped>

</style>