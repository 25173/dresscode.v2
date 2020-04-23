Blockly.JavaScript['variable_block'] = function (block) {
    var value_sk = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE);

    var code;

    if (value_name === 'lijn') {
        code = 'var ' + value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' = new Path();';
    } else if (value_name !== '') {
        code = 'var ' + value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' = new Path.' + value_name + ';';
    } else {
        code = "error";
    }

    return code
};

//todo make it correct
Blockly.JavaScript['vorm'] = function (block) {
    var dropdown_shape = block.getFieldValue('shape');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = dropdown_shape;
    switch (dropdown_shape) {
        case 'square':
            code = "Rectangle(new Point(20, 20), new Size(80, 60))";
            break;
        case 'circle':
            code = "Circle(new Point(50, 50), 30)";
            break;
        case 'polygon':
            code = "RegularPolygon(new Point(50, 50), 5, 30);";
            break;
        case 'star':
            code = "Star( new Point(50, 50), 4, 20, 40)";
            break;
        default:
            code = "error";
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['shape_defining'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'statement');


    var objectName = value_object.replace(/[^a-zA-z0-9]/g, "");
    var replace = /NAMEOBJECT/gi;
    var code = statements_name.replace(replace, objectName) + '\n';
    // console.log(statements_name);

    return code;
};

// de blok waar je een lijn defineerd
Blockly.JavaScript['lijn'] = function (block) {
    var code = 'lijn';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['decalartion_parameters'] = function (block) {
    var dropdown_name = block.getFieldValue('propertied');
    var value = Blockly.JavaScript.valueToCode(block, 'positie', Blockly.JavaScript.ORDER_MEMBER);
    var code;
    switch (dropdown_name) {
        case 'strokecolor':
            code = 'NAMEOBJECT.strokeColor = ' + value + '; \n';
            break;
        case 'strokewidth':
            code = 'NAMEOBJECT.strokeWidth = ' + value + '; \n';
            break;
        case 'fillcolor':
            code = 'NAMEOBJECT.fillColor = ' + value + '; \n';
            break;
        case 'dashArray':
            code = 'NAMEOBJECT.dashArray = [' + value + ']; \n';
            break;
        case 'flatten':
            break;
        case 'strokeCap':
            break;
        case 'style':
            code = 'NAMEOBJECT.style = ' + value + '; \n';
            break;
        case 'add':
            code = 'NAMEOBJECT.add(new Point(' + value + ')); \n';
            break;
        default:
            code = "error"
    }

    return code;
};

Blockly.JavaScript['declaration_no_parameters'] = function (block) {
    var dropdown_name = block.getFieldValue('value');

    var code;
    switch (dropdown_name) {
        case 'closed':
            code = 'NAMEOBJECT.closed = true; \n ';
            break;
        case 'smooth':
            code = 'NAMEOBJECT.smooth(); \n ';
            break;
        default:
            code = '...;\n';
    }

    return code;
};

Blockly.JavaScript['positie'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var canvas = document.getElementById('myCanvas');

    value_x = "canvas.clientWidth / 100 *" + value_x;
    value_y = " canvas.clientHeight / 100 *" + value_y;

    var code = value_x + ',' + value_y;

    return [code, Blockly.JavaScript.ORDER_MEMBER];
};