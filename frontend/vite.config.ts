import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'

const fs = require('fs');
const dcmjs = require('dcmjs');

// Test Read file method
/*
var filePath = 'public/image.dcm';
var arrayBuffer = fs.readFileSync(filePath).buffer;
var dicomDict = dcmjs.data.DicomMessage.readFile(arrayBuffer);
var dataSet = dcmjs.data.DicomMetaDictionary.naturalizeDataset(dicomDict.dict);
//var patient_id = dataSet.PatientName;
console.log("Patient Name:", dataSet.PatientName);
console.log("Dataset:", dataSet);
*/

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [vue(),
    vueI18n({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    })]
})


