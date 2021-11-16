<template>
    <div class="card position-relative lift">
        <file-manager></file-manager>
        <div class="card-body icon text-center py-5" v-if="isIcon">
            <i :class="icon"></i>
        </div>
        <div style="max-height: 125px; overflow: hidden;" v-if="!isIcon">
            <img class="card-img-top" :src="icon" alt="img">
        </div>
        <div class="card-body border-top">
            <p class="mb-0 text-muted">{{content}}</p>
            <small>Size: {{size}} <span class="date text-muted">{{date}}</span></small>
        </div>
    </div>
</template>
<script>
import FileManagerAction from '@/components/core/FileManagerAction.vue'
export default {
    name:'FileManager',
    components: {
        'file-manager':FileManagerAction,
    },props: {
        isIcon:Boolean,
        icon:String,
        content:String,
        size:String,
        date:String,
    }
}
</script>
<style scoped>

</style>