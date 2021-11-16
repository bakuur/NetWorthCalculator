<template>
    <div class="dropdown">
         <b-dropdown  variant="link"  no-caret menu-class="border-0 shadow p-3" toggle-class="after-none" :right="true">
            <template #button-content>
               <i class="fa fa-ellipsis-h"></i>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>
export default {
    name:'TableAction',
}
</script>
<style scoped>

</style>