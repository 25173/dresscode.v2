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
        media: '../media/',
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
    Blockly.Xml.domToWorkspace(document.getElementById('workspaceBlocks'), demoWorkspace);

    // document.getElementById('showcode').onclick = function (ev) { showCode() };
    //
    // function showCode() {
    //     // Generate JavaScript code and display it.
    //     Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    //     var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    //     alert(code);
    // }


    const canvas = document.getElementById('myCanvas');

    paper.setup(canvas);



    function runCode(primaryEvent) {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        const code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;


        try {
            // Get a reference to the canvas object

            const Achtergrond = new Path.Rectangle(new Point(0, 0), new Point(canvas.clientWidth + 10, canvas.clientHeight + 10));
            Achtergrond.fillColor = "rgb(255,255,255)";

            eval(code);  // = var path = new paper.Path();
            const raster = new Raster('clothes');
            raster.position = view.center;
            raster.size = new Size(canvas.clientWidth + 10, canvas.clientHeight + 10);
            raster.opacity = 0.8;


            paper.view.draw();

        }
        catch (e) {

        }
    }


    var dwn = document.getElementById('btndownload');

    //het transparant maken van de achtergrond
    dwn.onclick = function(){
        var canvas = document.getElementById('myCanvas');
        var raster = new Raster('clothes');
        raster.position = view.center;
        raster.size = new Size(canvas.clientWidth + 10, canvas.clientHeight + 10);
        raster.opacity = 1;
        paper.view.draw();

            var ctx = canvas.getContext("2d");
            // image = document.getElementById("testImage");


        var imgd = ctx.getImageData(0, 0, canvas.clientWidth * 2 + 10  , canvas.clientHeight  *2 + 10),
            pix = imgd.data,
            newColor = {r:0,g:0,b:0, a:0};

        for (var i = 0, n = pix.length; i <n; i += 1) {
            var r = pix[i],
                g = pix[i+1],
                b = pix[i+2];

            if(r === 255 && g === 255 && b === 254 ){
                // Change the white to the new color.

                pix[i] = newColor.r;
                pix[i+1] = newColor.g;
                pix[i+2] = newColor.b;
                pix[i+3] = newColor.a;
            }
        }

        ctx.putImageData(imgd, 0, 0);

        save(document.getElementById('myCanvas'));
    }
};

/* Canvas Donwload */
function save(canvas) {

    const dataurl = canvas.toDataURL("image/png;base64");

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this);
            if(this.responseText == 1){
                window.location.href = "gallery.html";
            }
        }
    };

    xmlhttp.open("POST", "../model/controller.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("saveKleding=true&picture="+ dataurl);
}
