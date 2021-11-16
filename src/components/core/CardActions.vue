<template>
    <div class="dropdown">
        <button class="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i class="fa fa-download"></i></button>
        <button class="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i class="fa fa-external-link"></i></button>
        <b-dropdown  variant="link" menu-class="border-0 shadow" no-caret :right="true">
            <template #button-content>
                <button class="btn btn-sm btn-link text-muted" type="button"></button>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>
export default {
    name:'CardActions',
}
</script>
<style scoped>

</style>