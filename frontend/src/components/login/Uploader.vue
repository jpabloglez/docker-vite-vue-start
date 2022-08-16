<template>
    <div>
        <h2> HOLA </h2>
        <div class="drop-form text-center">
            <p>{{ $t('analysis.drop') }} Analysis drop</p>
            <p>{{ $t('analysis.or') }} LALAL</p>
            <div class="form-group form-group-file">
                <label class="btn btn-success btn-file">
                    <i class="fa fa-upload" aria-hidden="true"></i> {{ $t('analysis.upload_files') }}
                    <input  v-if="uploadReady" type="file" @change.prevent.stop="addFiles" webkitdirectory mozdirectory msdirectory odirectory directory multiple>
                </label>
            </div>
            <span @click="showHelp()" style="float:right !important;cursor:pointer"><i class="fa fa-question-circle-o" aria-hidden="true"></i></span>
        </div>
        <!--<upload-help-modal :analysisType="analysisType" ></upload-help-modal>-->
    </div>
</template>


<script>

  export default {
    props: ['original_patients', 'analysisType'],
    components: {
    },
    data: function(){
      return {
        uploadReady: true
      }
    },
    created: function() {
      this.$events.$on('new-analysis-add-files',this.addFiles)
    },
    beforeDestroy: function() {
      this.$events.$off('new-analysis-add-files',this.addFiles);
    },
    methods: {
      addFiles: function(e){

        if('dataTransfer' in e && e.dataTransfer.files.length === 0) {
          console.info('not a file');
          return;
        }

        this.$events.$emit('new-analysis-process-files',{
          event: e,
          patients: this.original_patients
        });

        this.uploadReady = false
        this.$nextTick(() => {
          this.uploadReady = true;
        })
      },
      showHelp: function(){
        this.$events.$emit('show-upload-help');
      },
    },
  }
</script>

<style scoped>

    .drop-form {
        width: 100%;
        max-width: 400px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,0.5);
        border-radius:  5px;
        padding: 30px;
    }

</style>