paper.install(window);
window.onload = function () {

    var toolbox = document.getElementById('toolbox');


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
        },
        theme: {
            'blockStyles' : {
                "list_blocks": {
                    "colourPrimary": "#4a148c",
                    "colourSecondary":"#AD7BE9",
                    "colourTertiary":"#CDB6E9"
                },
                "text":{
                    "colourPrimary": "#4a148c",
                    "colourSecondary":"#AD7BE9",
                    "colourTertiary":"#CDB6E9"
                },
                "colour_blocks": {
                    "colourPrimary": "#DD0568"
                }
            },
            'categoryStyles' : {
                "list_category": {
                    "colour": "#4a148c"
                }
            },
            'componentStyles' : {
                'workspaceBackgroundColour': '#fff',
                "toolboxBackgroundColour": "#73187F",
                "scrollbarColour":"#DD0568",
                "toolboxForegroundColour" : '#fff',
                'flyoutBackgroundColour': '#c629d9',
                'flyoutForegroundColour' : '#000',
                'flyoutOpacity' : 0.3
            }
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

    }


    let canvas = document.getElementById('myCanvas');
    canvas.clientWidth = canvas.clientHeight;
    console.log(canvas.clientWidth);

    paper.setup(canvas);



    // OM DE CODE OP TE SLAAN DIE JE HEB GEMAAKT
    var save_btn =document.getElementById('save_code');

    save_btn.onclick = function () {
        const xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        console.log(xml);

        const soort = document.getElementById('kleding_soort').value;
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
        xmlhttp.send("saveCode=true&soort="+ soort +"&code="+ xml);

    };

//  HIER WORD DE CODE UITGELEZEN DIE JE MET BLOCKY MAAK
    function runCode(primaryEvent) {
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        const code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        const achtergrond = new Path.Rectangle(new Point(0, 0), new Point(canvas.clientWidth + 10, canvas.clientHeight + 10));
        achtergrond.fillColor = "rgb(255,255,255)";
        const raster = new Raster('clothes');
        raster.position = view.center;
        raster.size = new Size(canvas.clientWidth, canvas.clientHeight);

        try {
            // Get a reference to the canvas object

            eval(code);  // = var path = new paper.Path();
            const raster = new Raster('clothes');
            raster.position = view.center;
            raster.size = new Size(canvas.clientWidth, canvas.clientHeight);
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

        const raster = new Raster('clothes');
        raster.position = view.center;
        raster.size = new Size(canvas.clientWidth, canvas.clientHeight);
        raster.opacity = 1;
        paper.view.draw();

        const ctx = canvas.getContext("2d");



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

        ctx.putImageData(imgd, 0, 0);


        save(document.getElementById('myCanvas'));
        // TO DO this ====================================

    };


};

/* Canvas Donwload */
function save(canvas) {

    const dataurl = canvas.toDataURL("image/png;base64");
    const soort = document.getElementById('kleding_soort').value;
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
    xmlhttp.send("saveKleding=true&soort="+ soort +"&picture="+ dataurl);
}

