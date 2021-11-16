<template>
   <div>
        <nav>
            <div class="nav nav-tabs tab-custom p-1 justify-content-between text-center rounded" role="tablist">
                <a class="flex-fill py-1 px-2 rounded border-0 nav-link" id="nav-menu-tab" href="javascript:void(0);"  v-on:click="setActiveNavtab('Menu')" :class="{ 'active': currentTab == 'Menu'}">Menu</a>
                <a class="flex-fill py-1 px-2 rounded border-0 nav-link" id="nav-profile-tab" href="javascript:void(0);"  v-on:click="setActiveNavtab('Profile')" :class="{ 'active': currentTab == 'Profile'}">Profile</a>
                <a class="flex-fill py-1 px-2 rounded border-0 nav-link" id="nav-contact-tab" href="javascript:void(0);"  v-on:click="setActiveNavtab('Contact')" :class="{ 'active': currentTab == 'Contact'}">Contact</a>
            </div>
        </nav>
        <!-- Menu: tab content -->
        <div class="tab-content flex-grow-1 mt-1">
            <div class="tab-pane fade" id="nav-menu" :class="{ 'active show': currentTab == 'Menu'}">
               <layout-a></layout-a>
            </div>
            <div class="tab-pane fade" id="nav-profile" :class="{ 'active show': currentTab == 'Profile'}">
                <ul class="list-group custom text-light mt-1">
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <a href="#"><img src="../../../../assets/images/profile_av.png" alt="User" class="rounded w120"></a>
                        <h5 class="mb-0 mt-3">Robert Hammer</h5>
                        <small class="text-muted">UI UX Designer</small>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <a class="p-1 me-2 text-secondary" href="javascript:void(0);" title="facebook"><i class="fa fa-facebook"></i></a>
                        <a class="p-1 me-2 text-secondary" href="javascript:void(0);" title="twitter"><i class="fa fa-twitter"></i></a>
                        <a class="p-1 me-2 text-secondary" href="javascript:void(0);" title="instagram"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</li>
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <div class="row g-2">
                            <div class="col">
                                <h5 class="mb-0">852</h5>
                                <small class="text-muted">Following</small>
                            </div>
                            <div class="col">
                                <h5 class="mb-0">13k</h5>
                                <small class="text-muted">Followers</small>
                            </div>
                            <div class="col">
                                <h5 class="mb-0">234</h5>
                                <small class="text-muted">Post</small>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <small class="text-muted">Email address: </small>
                        <p class="mb-0">robert.hammer@gmail.com</p>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <small class="text-muted">Phone: </small>
                        <p class="mb-0">+ 202-555-0191</p>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0 mt-3">
                        <div class="mb-3">
                            <div class="mb-1 text-muted">Photoshop</div>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style="width: 89%"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="mb-1 text-muted">Wordpress</div>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="mb-1 text-muted">HTML 5</div>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style="width: 78%"></div>
                            </div>
                        </div>
                        <div class="mb-0">
                            <div class="mb-1 text-muted">Angular</div>
                            <div class="progress" style="height: 3px;">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%"></div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item px-0 bg-transparent border-0">
                        <button type="button" class="btn btn-primary btn-block lift">Update Profile</button>
                    </li>
                </ul>
            </div>
            <div class="tab-pane fade" id="nav-contact" :class="{ 'active show': currentTab == 'Contact'}">
                <ul class="list-group list-group-flush mb-0">
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar1.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Chris Fox</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar2.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Robert Hammer</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar3.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Airi Satou</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar4.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Bruno Nash</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar5.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Michael Silva</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar6.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Vivian Harrell</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar7.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Chris Fox</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar8.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Robert Hammer</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                    <li class="list-group-item px-2 py-3 bg-transparent d-flex">
                        <img class="avatar sm rounded-circle" src="../../../../assets/images/xs/avatar9.jpg" alt="">
                        <div class="flex-fill d-flex justify-content-between align-items-center ms-2">
                            <a href="#" class="text-light">Airi Satou</a>
                            <small>
                                <a class="px-1 text-secondary" href="#"><i class="fa fa-envelope"></i></a>
                                <a class="px-1 text-danger" href="#"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
   </div>
</template>
<script>
import LayoutAComponent from '@/components/admin/layouts/sidebar/LayoutAComponent.vue'
export default {
    name:'LayoutAComponent',
    components:{
        'layout-a':LayoutAComponent,
    },data() {
        return {
            currentTab: 'Menu',
        }
    },methods:{
        setActiveNavtab: function (tab) {
            this.currentTab = tab 
        },
    }
}
</script>
<style scoped>

</style>