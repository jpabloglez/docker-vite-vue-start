/* 
References:
- https://github.com/cornerstonejs/cornerstoneTools/issues/1118
 */
function initCornerstone() {
    // const baseUrl = window.ENVIRONMENT === 'development' ? 'http://localhost:4000/': 'https://tools.cornerstonejs.org/examples/';
    // Externals
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.Hammer = Hammer;
    // Image Loader
    const config = {
    webWorkerPath: '../asstes/js//cornerstoneWADOImageLoaderCodecs.js',
    taskConfiguration: {
    decodeTask: {
    codecsPath: '../asstes/js//cornerstoneWADOImageLoaderCodecs.js',
    },
    },
    };
    cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    }
    //初始化模块的按钮
    function initModeButtons() {
    const nameSpace = .mode-buttons;
    const buttons = document.querySelectorAll(${nameSpace} .set-tool-mode);
    const handleClick = function(evt) {
    const action = this.dataset.action;
    const options = {
    mouseButtonMask:
    evt.buttons ,
    };
    cornerstoneTools[setTool${action}](toolName, options);
    // Remove active style from all buttons
    buttons.forEach(btn => {
    btn.classList.remove('is-primary');
    });
    // Add active style to this button
    this.classList.add('is-primary');
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();
    return false;
    };
    buttons.forEach(btn => {
    btn.addEventListener('contextmenu', handleClick);
    btn.addEventListener('auxclick', handleClick);
    btn.addEventListener('click', handleClick);
    });
    }
    //展示影像
    function showImage(){
    // const baseUrl = window.ENVIRONMENT === 'development' ? 'http://localhost:4000/': 'https://tools.cornerstonejs.org/examples/';
    let url = "/download/wadouri/fe8fe087cca7aabf143acd20da578251.dcm";
    let imageIds = "wadouri:" + url;
    // const imageIds = [
    // wadouri:${baseUrl}assets/dicom/exotic/1.dcm,
    // wadouri:${baseUrl}assets/dicom/exotic/2.dcm,
    // ];
    const stack = {
    currentImageIdIndex: 0,
    imageIds: imageIds,
    };
    cornerstone.loadImage(imageIds).then(function(image) {
    cornerstoneTools.addStackStateManager(element, ['stack']);
    cornerstoneTools.addToolState(element, 'stack', stack);
    cornerstone.displayImage(element, image);
    });
    }
    initCornerstone();
    const element = document.getElementById('dicomImage');
    initModeButtons();
    cornerstoneTools.init({
    showSVGCursors: true,
    });
    cornerstone.enable(element);
    const toolName = 'Wwwc';
    showImage();
    // 设置工具
    function setTools(){
    const apiTool = cornerstoneTools[${toolName}Tool];
    cornerstoneTools.addTool(apiTool);
    cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
    }
    setTools();