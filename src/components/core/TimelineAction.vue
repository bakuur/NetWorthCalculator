<template>
    <div class="dropdown">
        <button class="btn btn-sm btn-link text-muted" type="button"><i class="fa fa-external-link"></i></button>
        <b-dropdown  menu-class="border-0 shadow" variant="link" toggle-class="text-decoration-none" no-caret>
            <template #button-content>
                <button class="btn btn-sm btn-link text-muted dropdown-toggle" type="button" aria-expanded="false"></button>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>
export default {
    name:'TimelineAction',

}
</script>
<style scoped>

</style>