<!-- 
    References: https://codesandbox.io/s/9z04x8ykjr
-->
<template>
  <main><div ref="canvas" style="width: 100%; height: 500px;"></div></main>
</template>

<script>
// Packages
// import Hammer from "hammerjs";
// import dicomParser from "dicom-parser";
// import * as cornerstone from "cornerstone-core";
// import * as cornerstoneMath from "cornerstone-math";
// import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
// import * as cornerstoneTools from "@cornerstonejs/tools";

import dicomParser from "dicom-parser";
import cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneMath from "cornerstone-math";
import cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";

function initCornerstone(){
  console.log("Cargando cornerstone");
  // Externals
  cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
  cornerstoneTools.external.cornerstone = cornerstone;
  cornerstoneTools.external.Hammer = Hammer;

  // CodeSandbox live updates components in an odd way.
  // We do this to protect ourselves from duplicate initializations
  if (!cornerstoneWADOImageLoader.initialized) {
    // WadoImageLoader Registration/Config
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
  }
}

export default {
  name: "SimpleExampleViewer",
  created() {
    initCornerstone();
    cornerstoneTools.init({
      globalToolSyncEnabled: true
    });

    // Grab Tool Classes
    const WwwcTool = cornerstoneTools.WwwcTool;
    const PanTool = cornerstoneTools.PanTool;
    const PanMultiTouchTool = cornerstoneTools.PanMultiTouchTool;
    const ZoomTool = cornerstoneTools.ZoomTool;
    const ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;

    // Add them
    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.addTool(ZoomTool);
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.addTool(PanMultiTouchTool);
    cornerstoneTools.addTool(ZoomTouchPinchTool);
    cornerstoneTools.addTool(ZoomMouseWheelTool);

    // Set tool modes
    cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 4 }); // Middle
    cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 2 }); // Right
    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 }); // Left & Touch
    cornerstoneTools.setToolActive("PanMultiTouch", {});
    cornerstoneTools.setToolActive("ZoomMouseWheel", {});
    cornerstoneTools.setToolActive("ZoomTouchPinch", {});
  },
  mounted() {
    // Enable Canvas
    this.canvas = this.$refs.canvas;
    cornerstone.enable(this.canvas, {
      renderer: "webgl"
    });

    // Load Image
    //const codeSandboxProjectUrl = "https://9z04x8ykjr.codesandbox.io";
    //const imageId = `wadouri:${codeSandboxProjectUrl}/000000.dcm`;
    const imageId = `wadouri:./public/image.dcm`;
    cornerstone.loadImage(imageId).then(image => {
      cornerstone.displayImage(this.canvas, image);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
