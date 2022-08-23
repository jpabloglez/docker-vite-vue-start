<!-- 
    References: https://codesandbox.io/s/1qj7j8op0l
-->
<template>
  <main><div ref="canvas" style="width: 500px; height: 500px;"></div></main>
</template>

<script>
// Packages
//import Hammer from "hammerjs";
//import dicomParser from "dicom-parser";
//import * as cornerstone from "cornerstone-core";
//import * as cornerstoneMath from "cornerstone-math";
//import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
//import * as cornerstoneTools from "@cornerstonejs/tools";

import dicomParser from "dicom-parser";
import cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneMath from "cornerstone-math";
import cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";

//const cornerstoneMath = require('cornerstone-math');


function initCornerstone() {

    console.log("Cargando cornerstone");
    // Externals
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.Hammer = Hammer;


    // WadoImageLoader Registration/Config
    if (!cornerstoneWADOImageLoader.initialized) {
    const config = {
        webWorkerPath: "/codecs/cornerstoneWADOImageLoaderWebWorker.js",
        taskConfiguration: {
            decodeTask: {
                codecsPath: "/codecs/cornerstoneWADOImageLoaderCodecs.js"
            }
        }
    };
    cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    cornerstoneWADOImageLoader.initialized = true;

    const WwwcTool = cornerstoneTools.WwwcTool;
    const OverlayTool = cornerstoneTools.OverlayTool;
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.addTool(OverlayTool);
    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
    cornerstoneTools.setToolEnabled("Overlay", {});
    }
}

export default {
  name: "DicomLoader",
  created() {
    initCornerstone();
    cornerstoneTools.init({
      globalToolSyncEnabled: true
    });
    
    // cornerstoneTools.init();
    // initCornerstone();

    //const WwwcTool = cornerstoneTools.WwwcTool;
    //const OverlayTool = cornerstoneTools.OverlayTool;
    //cornerstoneTools.addTool(WwwcTool);
    //cornerstoneTools.addTool(OverlayTool);

    //cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
    //cornerstoneTools.setToolEnabled("Overlay", {});
  },
  mounted() {
    // Enable Canvas
    this.canvas = this.$refs.canvas;
    cornerstone.enable(this.canvas, {
      renderer: "webgl"
    });
    // Load Image
    const codeSandboxProjectUrl = "https://1qj7j8op0l.codesandbox.io";
    const imageId = `wadouri:${codeSandboxProjectUrl}/overlay_dicom.dcm`;
    cornerstone.loadImage(imageId).then(image => {
      cornerstone.displayImage(this.canvas, image);
      const overlayMeta = cornerstone.metaData.get(
        "overlayPlaneModule",
        imageId
      );
      console.log(overlayMeta);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
