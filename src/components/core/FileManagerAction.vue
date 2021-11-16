<template>
    <div class="btn-group position-absolute top-0 end-0">
        <b-dropdown  variant="link"  no-caret menu-class="border-0 shadow">
            <template #button-content>
                <a href="#" class="nav-link py-3 px-4 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
            </template>
            <b-dropdown-item href="#">Download</b-dropdown-item>
            <b-dropdown-item href="#">Share</b-dropdown-item>
            <b-dropdown-item href="#">Delete</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>
export default {
    name:'FileManagerAction',
}
</script>
<style scoped>

</style>