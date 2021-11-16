<template>
    <div class="dd card" :class="header_class">
        <div class="card-header d-flex justify-content-between align-items-center border-bottom-0" :class="bg_class">
            <h6 class="card-title mb-0 text-light">{{ title }}</h6>
            <button class="btn btn-sm btn-white" type="button" v-b-modal.addNewTask><i class="fa fa-plus"></i>{{ button_text }}</button>
        </div>
        <ol class="dd-list list-unstyled p-2">
            <li class="dd-item card p-2 mb-1"  v-for="(item, index) in items" :key="index">
                <div class="dd-handle fw-bold">{{ item.item_name }}</div>
                <span>{{ item.content }}</span>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="project-members">
                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Avatar" v-for="(image, index) in item.images" :key="index">
                            <img class="avatar xs rounded mr-1" :src="image" alt="friend"> 
                        </a>
                    </div>
                    <div class="task-action">
                        <a class="p-1 text-muted fa fa-comments" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Comments"><span class="ps-1">{{ item.comments }}</span></a>
                        <a class="p-1 text-muted fa fa-paperclip" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Attachment"><span class="ps-1">{{ item.paperclip }}</span></a>
                    </div>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    name:'HrmsTaskboard',
    props: {
        title: String,
        header_class : String,
        bg_class : String ,
        button_text : String,
        items : Array,
        
    }
}
</script>
<style scoped>

</style>