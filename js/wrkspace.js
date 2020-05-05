paper.install(window);
window.onload = function () {

    var toolbox = document.getElementById('toolbox');

    var theme = {
        "colour":"#A5745B",
        "lists":"260",
        "logic":"210",
        "loops":"120",
        "math":"230",
        "procedure":"290",
        "text":"160",
        "variables":"310",
        "variables_dynamic":"310"
    };

    var options = {
        toolbox: toolbox,
        collapse: true,
        comments: false,
        disable: true,
        maxBlocks: Infinity,
        trashcan: true,
        horizontalLayout: false,
        toolboxPosition: 'start',
        css: true,
        media: 'media/',
        rtl: false,
        scrollbars: true,
        sounds: false,
        oneBasedIndex: false,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.8,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    };



    var demoWorkspace = Blockly.inject('blocklyDiv',options);

    demoWorkspace.addChangeListener(runCode);

    var workspaceBlocks;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            workspaceBlocks = this;

        }
    };
    xmlhttp.open("GET", "xml/workspaceblocks.xml" , true);
    xmlhttp.send();
    console.log(document.getElementById('workspaceBlocks'));
    Blockly.Xml.domToWorkspace(document.getElementById('workspaceBlocks'), demoWorkspace);



    // document.getElementById('showcode').onclick = function (ev) { showCode() };

    function showCode() {
        // Generate JavaScript code and display it.
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        alert(code);
    }


    var canvas = document.getElementById('myCanvas');

    paper.setup(canvas);



    function runCode(primaryEvent) {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        try {
            // Get a reference to the canvas object

            var backgound_canvas = new Path.Rectangle(new Point(0, 0), new Point(canvas.clientWidth + 10, canvas.clientHeight + 10));
            backgound_canvas.fillColor = "rgb(255,255,255)";

            eval(code);  // = var path = new paper.Path();
            var raster = new Raster('clothes');
            raster.position = view.center;
            raster.size = new Size(canvas.clientWidth + 1, canvas.clientHeight + 2);


            paper.view.draw();

        }
        catch (e) {
            // alert(e);
        }
    }


    var dwn = document.getElementById('btndownload');
    dwn.onclick = function(){
        var canvas = document.getElementById("myCanvas"),
            ctx = canvas.getContext("2d");
            // image = document.getElementById("testImage");


        var imgd = ctx.getImageData(0, 0, canvas.clientWidth * 2 + 10 , canvas.clientHeight * 2 + 20),
            pix = imgd.data,
            newColor = {r:0,g:0,b:0, a:0};

        for (var i = 0, n = pix.length; i <n; i += 1) {
            var r = pix[i],
                g = pix[i+1],
                b = pix[i+2];

            if(r === 255&& g === 255 && b === 254 ){
                // Change the white to the new color.

                pix[i] = newColor.r;
                pix[i+1] = newColor.g;
                pix[i+2] = newColor.b;
                pix[i+3] = newColor.a;
            }
        }

        ctx.putImageData(imgd, 0, 0);

        download(document.getElementById('myCanvas'), 'myimage.png');
    }

};

/* Canvas Donwload */
function download(canvas, filename) {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'), e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}
