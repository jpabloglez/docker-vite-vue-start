<!--
    npm install --save apexcharts
    npm install --save vue-apexcharts
-->

<template>
    <div id="main-content">
        <div>
            <button type="button" class="btn btn-primary">Primary with other color</button>

            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <div>
                    <a class="nav-link active" aria-current="page" href="#"> Statistics 
                    <span><biChartUp></biChartUp></span>
                    <font-awesome-icon icon="fa-solid fa-chart-line text-success text-right" size="1x" color="white" style="margin-left: 1em"/>
                    </a>
                    </div>  
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" v-on:click="activeTab='Users'" v-bind:class="[ activeTab === 'Stats' ? 'active' : '' ]"> Users
                    <!--<a @click="showStatsTab('Users')" class="nav-link" v-bind:class="{ active: isActive('Users') }"  data-toggle="tab"  role="tab" aria-controls="contact" aria-selected="false"> Users </a>-->
                    <font-awesome-icon icon="fa-solid fa-user text-success text-right" size="1x" color="black" style="margin-left: 1em"/>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Analyses 
                    <biClipData></biClipData>
                    </a>
                </li>
            </ul>
        </div>

        <div>
            <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Statistics <biChartUp style="margin-left: 1em;"></biChartUp> </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style="background-color: #AC92EC;"> Users </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> Analyses </button>
            </li>
            </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> Tab 1 Content </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> Tab 2 Content </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"> Tab 3 Content </div>
            </div>
        </div>

        <!--
        <div>
            <tabs/>
        </div>
        -->

        <!-- Stats cards -->
        <div id="section-content">
            <div class="row">
                <hr id="hr-separator">
                <div> <h2 style="color: black"> Numbers </h2></div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-subs shadow h-100 py-2" style="border-left-color: lightseagreen">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <a href="/system/subscriptions"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: lightseagreen"> <h3 style="color: lightseagreen">Subscriptions</h3></div></a>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> SUSCRIPTIONS </div>
                                </div>
                                <div class="col-auto">
                                    <p class="h1"><biReceipt style="color: lightseagreen;"></biReceipt></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <a href="/system/customers"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Customers</div></a>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> CUSTOMERS </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fa fa-hospital-o fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <a href="/system/users"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: #36b9cc !important">Users</div></a>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> USERS </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fa fa-user-md fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <a href="/system/analyses/pet"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: #343c56;"> Analyses </div></a>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> ANALYSES </div>
                                </div>
                                <div class="col-auto">
                                    <h1><span class="wfmi wfmi-i-mri-pet text-gray-300" aria-hidden="true"></span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <a href="/system/users"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: #36b9cc !important">Users</div></a>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">USERS</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fa fa-user-md fa-2x text-gray-300"></i>
                                    <font-awesome-icon icon="fa-solid fa-chart-line text-success" size="2x" color="green" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <!-- Stats plots -->
        <hr>
        <section>
            <div align="left"> <h2 style="color: black"> Statistics plots</h2></div>
            <div class="row">
                <div class="col-lg-8 text-center">
                    <div> <h3 style="color: black; text-align: center;"> Analyses per service [total] </h3> </div>
                    <apexchart width="100%" type="area" :options="lineOptions" :series="series"></apexchart>
                </div>

                <div class="col-lg-4 text-center">
                    <h3 style="color: black; text-align: center;"> Analyses per service [%] </h3>
                    <apexchart width="100%" type="donut" :options="pieOptions" :series="pieSeries" />
                </div>
            </div>
        </section>


    </div>

</template>


<script>
    import VueApexCharts from "vue3-apexcharts";
    import Tabs from "./Tabs.vue";
    /*Bootstrap icons */
    import { BIconClipboardData, BIconGraphUp, BIconReceipt } from 'bootstrap-icons-vue';
    
    export default {
        name: 'Stats',
        components: {
            apexchart: VueApexCharts,
            tabs: Tabs,
            biClipData: BIconClipboardData,
            biChartUp: BIconGraphUp,
            biReceipt: BIconReceipt,
        },
        data() {
            return {
                activeTab: 'Users',
                series: [
                    {
                        name: 'IQ-neuro-PET',
                        color: 'lightblue',
                        data: [30, 40, 45, 50],
                    },
                    {
                        name: 'IQ-neuro-MRI',
                        color: 'lightgreen',
                        data: [35, 37, 42, 45],
                    },
                    {
                        name: 'IQ-neuro-SISCOM',
                        color: 'lightcoral',
                        data: [2, 4, 6, 8],
                    },
                    {
                        name: 'IQ-neuro-SPECT',
                        color: 'plum',
                        data: [12, 34, 26, 38],
                    }
                ],
                lineOptions: {
                    chart: {
                        id: 'analyses_per_service',
                    },
                    xaxis: {
                        categories: [1001, 1002, 1003, 1004],
                    }
                },
                pieSeries: [10, 30, 5, 55],
                pieOptions: {
                    labels: ["Pet", "Vol", "Siscom", "Spect"],
                    chart: {
                        type: 'donut',
                    },
                    responsive: [{
                        //breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
                tabs: {
                    stats: false,
                    users: false
                },
                methods: {
                    showStatsTab: function(name) {
                        this.tabs.stats = false;
                        this.tabs.users = false;
                    }
                }   
            }
        }
    }
</script>

<style scoped>

    .card {
        border-radius: 10px;
        border: 2px solid lightgray;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-left: 4px solid rgb(214, 196, 255);
    }

    .nav{
        padding-top: 1em;
        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 0;
        border-bottom: 2px solid lightgray;
    }

    .nav-tabs{
        border-bottom: 2px solid lightgray;
        border-right: 2px solid lightgray;
    }

    #main-content {
        padding: 1em 1em;
        margin: 0 auto;
        /*border: 20px solid lightgray;
        border-radius: 10px;*/
    }

    #section-content {
        padding: 1em 1em;
        margin: 0 auto; 
    }

    #hr-separator{
        padding: 0px 0px 0px 0px;
        width: 60%;
        border: 2px solid lightgray;
    }

    /* Remove hyperlink line */
    a { 
        text-decoration: none; 
        }

    .icon {
        margin-left: 1em;
        margin-right: 1em;
        align-self: right;
    }
.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: #8064A2 !important;
}

.nav-tabs .nav-item .nav-link.active .nav-link {
  color: #8064A2 !important;
  background-color: #8064A2;
}



</style>
