<template>
    <div class="dropdown">
         <button class="btn btn-sm btn-link text-muted" type="button"><i class="fa fa-external-link"></i></button>
         <b-dropdown  variant="link" menu-class="border-0 shadow" no-caret :right="true">
            <template #button-content>
                 <button class="btn btn-sm btn-link text-muted dropdown-toggle"></button>
            </template>
            <b-dropdown-item href="#">Copy</b-dropdown-item>
            <b-dropdown-item href="#">Export to Excel</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>
export default {
    name:'ChartAction',
}
</script>
<style scoped>

</style>