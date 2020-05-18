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

    document.getElementById('showcode').onclick = function (ev) { showCode() };
    document.getElementById('reset_code').onclick = function (ev) {
        document.getElementById('workspaceBlocks').innerHTML = '';
        console.log(document.getElementById('workspaceBlocks'));
    };
    function showCode() {
        // Generate JavaScript code and display it.
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        const code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        alert(code);
        saveCode();
    }



    const canvas = document.getElementById('myCanvas');

    paper.setup(canvas);

    // OM DE CODE OP TE SLAAN DIE JE HEB GEMAAKT
    function saveCode() {

        const xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        // localStorage.setItem(document.getElementById('workspaceBlocks').value,Blockly.Xml.domToText(xml));
            console.log(xml);

    }

//  HIER WORD DE CODE UITGELEZEN DIE JE MET BLOCKY MAAK
    function runCode(primaryEvent) {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        const code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        const Achtergrond = new Path.Rectangle(new Point(0, 0), new Point(canvas.clientWidth + 10, canvas.clientHeight + 10));
        Achtergrond.fillColor = "rgb(255,255,255)";
        const raster = new Raster('clothes');
        raster.position = view.center;
        raster.size = new Size(canvas.clientWidth + 10, canvas.clientHeight + 10);

        try {
            // Get a reference to the canvas object

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


    // DE BUTTON OM HET OP TE SLAAN
    const dwn = document.getElementById('btndownload');

    //het transparant maken van de achtergrond
    dwn.onclick = function(){
        const canvas = document.getElementById('myCanvas');
        const exampleCanvas = document.getElementsByClassName('example-canvas')[0];
        const raster = new Raster('clothes');
        raster.position = view.center;
        raster.size = new Size(canvas.clientWidth + 10, canvas.clientHeight + 10);
        raster.opacity = 1;
        paper.view.draw();

        const ctx = canvas.getContext("2d");
        const ctx2 = exampleCanvas.getContext('2d');
        // image = document.getElementById("testImage");


        const imgd = ctx.getImageData(0, 0, canvas.clientWidth * 2 + 10, canvas.clientHeight * 2 + 10),
            pix = imgd.data,
            newColor = {r: 0, g: 0, b: 0, a: 0};

        let i = 0, n = pix.length;
        for (; i <n; i += 1) {
            const r = pix[i],
                g = pix[i + 1],
                b = pix[i + 2];

            if(r === 255 && g === 255 && b === 254 ){
                // Change the white to the new color.

                pix[i] = newColor.r;
                pix[i+1] = newColor.g;
                pix[i+2] = newColor.b;
                pix[i+3] = newColor.a;
            }
        }

        ctx2.putImageData(imgd, 0, 0);


        document.getElementsByClassName('saveModal')[0].style.display = 'block';
        // save(document.getElementById('myCanvas'));
        // TO DO this ====================================

    };

    const close_modal_save = document.getElementsByClassName('close_modal-save');
    if (close_modal_save){
        for(let i = 0 ; i < close_modal_save.length; i++){
            close_modal_save[0].onclick = function () {
                document.getElementsByClassName('saveModal')[0].style.display = 'none';
                console.log('close');
            };
        }
    }
};

/* Canvas Donwload */
function save(canvas) {

    const dataurl = canvas.toDataURL("image/png;base64");

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            if(this.response == '1'){
                window.location.href = "../start/gallery.php";
            }
        }
    };

    xmlhttp.open("POST", "../model/controller.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("saveKleding=true&picture="+ dataurl);
}

