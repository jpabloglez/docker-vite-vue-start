<template>
    <div style="border-style:solid">
      <h2>Upload file</h2>
      <input type="file" ref="file" @change="readFile()" />
      <div v-if="Image">
        <img :src="preview" />
      </div>
    </div>
</template>

<script>

import dcmjs from 'dcmjs';

export default {
    name: 'About',
    data() {
        return {
            patient_id: '',
        }
        
    },
    methods: {
    readFile() {
      this.ifile = this.$refs.file.files[0];
      console.log("Example:", this.ifile);
      if (
        this.ifile.name.includes(".png") ||
        this.ifile.name.includes(".jpg")
      ) {
        this.image = true;
        this.preview = URL.createObjectURL(this.ifile);
        console.log("Preview:", this.preview);
      } else {
        console.log("Not an image");
        let reader = new FileReader();
        reader.onload = (e) => {
          this.data = e.target.result;
          console.log("Data:", this.data);
        };
        this.array = reader.readAsArrayBuffer(this.ifile);
        var dicomDict = dcmjs.data.DicomMessage.readFile(this.array);
        console.log("DicomDict:", dicomDict);
        var dataSet = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomDict.dict);
        console.log("DataSet:", dataSet);
        this.image = false;
        this.preview = URL.createObjectURL(this.ifile);
        console.log("Preview:", this.preview);
      }
    }
  }
}

</script>
