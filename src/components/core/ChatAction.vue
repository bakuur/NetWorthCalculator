<template>
    <b-dropdown  variant="link" menu-class="border-0 shadow" no-caret right>
        <template #button-content>
            <a href="#" class="text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
        </template>
        <b-dropdown-item href="#">Edit</b-dropdown-item>
        <b-dropdown-item href="#">Share</b-dropdown-item>
        <b-dropdown-item href="#">Delete</b-dropdown-item>
    </b-dropdown>
</template>
<script>
export default {
    name:'ChatAction',
}
</script>
<style scoped>

</style>