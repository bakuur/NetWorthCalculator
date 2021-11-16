<template>
     <div v-bind:style=" isMobile() ? '' : 'display: flex;' ">          
        <div class="col" :class="{'d-none':currentLayout == 'layout-b'}">
            <small :class="currentLayout != 'layout-f' ? 'text-muted' : ''" v-if="isbreadcrumbMessage">{{  breadcrumbsMessage }}</small>
            <ol class="breadcrumb d-inline-flex bg-transparent p-0 m-0" v-if="!isbreadcrumbMessage">
                <li class="breadcrumb-item active"><router-link to="/dashboard/index">Home</router-link></li>
                <li class="breadcrumb-item" v-if="crumbs.isbreadcrumbMessage == false">{{ crumbs.name }}</li>
                <li class="breadcrumb-item" v-for="(menuItem,index) in crumbs.children" :key="index" v-show="menuItem.identifier == subidentifier">{{ menuItem.name }}</li>
            </ol>
            <h1 class="h4 mt-1">{{ breadcrumbName }}</h1>
        </div>
  
        <div class="col-auto" v-if="['invoice'].includes($route.name)">
            <ul class="nav nav-tabs tab-body-header rounded" role="tablist">
                <li class="nav-item"><a class="nav-link" href="#" v-on:click="setActiveNavtab('Invoice List')" :class="{ 'active': currentTab == 'Invoice List'}">Invoice List</a></li>
                <li class="nav-item"><a class="nav-link" href="#" v-on:click="setActiveNavtab('Simple invoice')" :class="{ 'active': currentTab == 'Simple invoice'}">Simple invoice</a></li>
                <li class="nav-item"><a class="nav-link" href="#" v-on:click="setActiveNavtab('Email invoice')" :class="{ 'active': currentTab == 'Email invoice'}">Email invoice</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { EventBus } from '@/js/event-bus.js';
import menu from '@/components/admin/data/menu.json'
export default {
   computed: {
    crumbs: function() {
      let  crumbs_name = ''
      this.myMenu.forEach((name) => {
        if(name.identifier == this.identifier){
          crumbs_name = name 
        }
      });
      return crumbs_name;
    }
  },data (){
    return {
      currentLayout:'layout-a',
      currentTab:'Invoice List',
      myMenu: menu.menu,
      breadcrumbsMessage:'',
      breadcrumbName:'',
      identifier:'dashboard',
      isbreadcrumbMessage:'',
      subidentifier:''
    }
  },methods:{
    setActiveNavtab: function (tab) {
      this.currentTab = tab 
      EventBus.$emit('currentTab',tab) 
    },
    
    isMobile() {     
      if (screen.width <= 760) {       
        return true  
      } else {       
        return false      
      }   
    },

    isBreadcrumbsMessage(){
      var i;
      for (i = 0; i < this.myMenu.length; i++) { 
        if(this.myMenu[i].identifier == this.identifier){
          if(this.myMenu[i].isbreadcrumbMessage){
            this.isbreadcrumbMessage = this.myMenu[i].isbreadcrumbMessage;
            this.breadcrumbsMessage = this.myMenu[i].breadcrumbMessage;
          }
          
          //single menu breadcrumbs
          if(this.myMenu[i].children.length == 0 && this.myMenu[i].routerLink == this.$router.currentRoute.path){
            this.breadcrumbName =  this.myMenu[i].name;
          }
          
          //sub-menu breadcrumbs
          this.myMenu[i].children.forEach((value ) => {
            if(value.identifier == this.subidentifier && value.routerLink == this.$router.currentRoute.path){
              this.breadcrumbName = value.name;
            }
          });
        }

        if(this.myMenu[i].routerLink == this.$router.currentRoute.path){
          this.breadcrumbName =  this.myMenu[i].name;
        }
      }
    }
  },mounted() {
      EventBus.$on('activeLayout', (activeLayout) => {
        this.currentLayout = activeLayout.currentLayout
      });

      EventBus.$on('identifier', (identifier) => {
        this.identifier = identifier;
        this.isBreadcrumbsMessage();
      });

      EventBus.$on('subActiveMenu', (identifier) => {
        this.subidentifier = identifier;
        this.isBreadcrumbsMessage();
      });

      this.isBreadcrumbsMessage();
  },beforeDestroy(){
    EventBus.$off('activeLayout');
    EventBus.$off('identifier');
    EventBus.$off('subActiveMenu')
  }
};
</script>
<style scoped>

</style>