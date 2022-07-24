import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fs = require('fs');
const dcmjs = require('dcmjs');


var filePath = 'public/image.dcm';
var arrayBuffer = fs.readFileSync(filePath).buffer;
var dicomDict = dcmjs.data.DicomMessage.readFile(arrayBuffer);
var dataSet = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomDict.dict);
//var patient_id = dataSet.PatientName;
console.log("Patient Name:", dataSet.PatientName);
console.log("Dataset:", dataSet);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [vue()]
})


