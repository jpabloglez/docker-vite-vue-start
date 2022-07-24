<!--
    npm install --save apexcharts
    npm install --save vue-apexcharts
-->

<template> 
    <div>
        <div class="row">
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
                <div class="card border-left-subs shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <a href="/system/subscriptions"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: #cc9218; !important">Active subscriptions</div></a>
                                <div class="h5 mb-0 font-weight-bold text-gray-800"> SUSCRIPTIONS </div>
                            </div>
                            <div class="col-auto">
                                <i class="fa fa-list fa-2x text-gray-300"></i>
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
                                <a href="/system/analyses/pet"><div class="text-xs font-weight-bold text-uppercase mb-1" style="color: #343c56;"># of analysis</div></a>
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


            <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                
                                <i class="fa-solid fa-chart-line fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3>278</h3>
                                <p class="mb-0">New Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
        <div class="row">
            <div class="col-lg-8 text-center">
                <apexchart width="100%" type="area" :options="lineOptions" :series="series"></apexchart>
            </div>

            <div class="col-lg-4 text-center">
                <apexchart width="100%" type="donut" :options="pieOptions" :series="pieSeries" />
            </div>
        </div>

    </div>

</template>


<script>
    import VueApexCharts from "vue3-apexcharts";
    export default {
        name: 'Stats',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                series: [{
                    name: 'series-cocacola',
                    data: [30, 40, 45, 50],
                }],
                pieSeries: [10, 30, 5, 55],
                lineOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
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
            }
        }
    }
</script>
