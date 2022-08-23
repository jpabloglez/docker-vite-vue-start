<!-- 
    References: https://codesandbox.io/s/1qj7j8op0l
-->
<template>
  <main><div ref="canvas" style="width: 500px; height: 500px;"></div></main>
</template>

<script>
// Packages
import Hammer from "hammerjs";
import dicomParser from "dicom-parser";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as cornerstoneTools from "@cornerstonejs/tools";

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
  //cornerstoneWADOImageLoader.initialized = true;
}

export function initCornerstone() {
  // Cornertone Tools
  cornerstoneTools.external.cornerstone = cornerstone;
  cornerstoneTools.external.Hammer = Hammer;
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

  //
  cornerstoneTools.init();

  // Preferences
  const fontFamily =
    "Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";
  cornerstoneTools.textStyle.setFont(`16px ${fontFamily}`);
  cornerstoneTools.toolStyle.setToolWidth(2);
  cornerstoneTools.toolColors.setToolColor("rgb(255, 255, 0)");
  cornerstoneTools.toolColors.setActiveColor("rgb(0, 255, 0)");

  cornerstoneTools.store.state.touchProximity = 40;

  // IMAGE LOADER
  cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
  cornerstoneWADOImageLoader.webWorkerManager.initialize({
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: true,
    taskConfiguration: {
      decodeTask: {
        initializeCodecsOnStartup: false,
        usePDFJS: false,
        strict: false,
      },
    },
});

export default {
  name: "DicomLoader",
  created() {
    cornerstoneTools.init({
      globalToolSyncEnabled: true
    });

    const WwwcTool = cornerstoneTools.WwwcTool;
    const OverlayTool = cornerstoneTools.OverlayTool;
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.addTool(OverlayTool);

    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
    cornerstoneTools.setToolEnabled("Overlay", {});
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
