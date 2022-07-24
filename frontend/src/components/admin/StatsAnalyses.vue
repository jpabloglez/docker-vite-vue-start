<template>
    <div>
        <div style="margin-bottom: 20px">
            <div class="row">
                <div class="col-8">
                    <div class="btn-group" role="group">
                        <filter-customer style="margin-right: 1rem" component="analyses-pet"></filter-customer>
                        <filter-bar style="margin-right: 1rem" component="analyses-pet" :fields="fields_to_filter" placeholderText="Name, Age"></filter-bar>
                    </div>
                </div>
                <div class="col-4 pull-right">
                    <div class="btn-group pull-right" role="group">
                        <excel-export :fields="csv.fields" :data="csv.data" :refs="$refs" table="analyses_pet"></excel-export>
                        <span class="btn btn-outline-success pull-left" @click="move"><i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;Move analysis</span>
                    </div>
                </div>
            </div>
        </div>
        <analyses-table ref="analyses_pet" name="analyses-pet"
            :apiurl="apiurl"
            :fields_to_filter="fields_to_filter"
            :fields="fields"
            :type="type"></analyses-table>
    </div>
</template>