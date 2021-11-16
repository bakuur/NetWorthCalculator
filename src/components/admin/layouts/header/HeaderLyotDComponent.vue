<template>
    <ul class="navbar-nav me-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void();">
                <i class="fa fa-slack me-2"></i><span>Apps</span>
            </a>
            <ul class="dropdown-menu rounded-lg shadow border-0 dropdown-animation">
                <template v-for="menuItem in myMenu">
                    <li v-if="menuItem.isApp" :key="menuItem.name" @click="activeTab(menuItem.identifier)">
                        <router-link class="dropdown-item" :class="{'active': currentActiveClass == menuItem.identifier}" :to="`${menuItem.routerLink}`">{{ menuItem.name }}</router-link>
                    </li>
                </template>
            </ul>
        </li>
        <template v-for="(menuItem,index) in myMenu" >
            <li class="nav-item" v-if="menuItem.children.length == 0 && !menuItem.isApp && !menuItem.isCategory"  :key="menuItem.name">
                <router-link class="nav-link" :to="`${menuItem.routerLink}`" :title="menuItem.name">
                    <i :class="`mr-2 ${menuItem.iconClass}`"></i><span>{{ menuItem.name }}</span>
                </router-link>
            </li>
            <li class="nav-item dropdown" v-if="menuItem.children.length > 0 && !menuItem.isApp && !menuItem.isCategory"  :key="index">
                <router-link class="nav-link dropdown-toggle" to="javascript:void();" :title="menuItem.name">
                    <i :class="`mr-2 ${menuItem.iconClass}`"></i><span>{{ menuItem.name }}</span>
                </router-link>
                <ul class="dropdown-menu rounded-lg shadow border-0 dropdown-animation">
                    <template  v-for="(submenuItem,index) in menuItem.children" >
                        <li :key="index">
                            <router-link class="dropdown-item" :to="`${submenuItem.routerLink}`">{{ submenuItem.name }}</router-link>
                        </li>
                    </template>
                </ul>
            </li>
        </template>
    </ul>
</template>
<script>
import menu from '@/components/admin/data/menu.json'
export default {
    name:'HeaderLyotDComponent',
    data (){
        return {
            myMenu: menu.menu,
            currentActiveClass:'dashboard',
        }
    },methods:{
        activeTab(identifier) {
            this.currentActiveClass = this.currentActiveClass != identifier ? identifier : '';
        },
    }
}
</script>
<style lang="scss" scoped>
:host-context(#layout-d) {
    .nav-link {
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>>