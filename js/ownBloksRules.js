

Blockly.JavaScript['variable_block'] = function (block) {
    var value_sk = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE);

    var code;

    if (value_name === 'lijn') {
        code = 'var ' + value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' = new Path(); \n';
        code += value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' .strokeColor = \'#cc33cc; \' \n';
    } else if (value_name !== '') {
        code = 'var ' + value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' = new Path.' + value_name + '; \n';
        code += value_sk.replace(/[^a-zA-Z0-9 ]/g, '') + ' .strokeColor = \'#cc33cc; \' \n';
    } else {
        code = "error";
    }

    return code
};


Blockly.JavaScript['shape_defining'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'statement');

    var objectName = value_object.replace(/[^a-zA-z0-9]/g, "");
    var replace = /NAMEOBJECT/gi;
    return statements_name.replace(replace, objectName) + '\n';
};

// de blok waar je een lijn defineerd
Blockly.JavaScript['lijn'] = function (block) {
    var code = 'lijn';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['decalartion_parameters'] = function (block) {
    var dropdown_name = block.getFieldValue('propertied');
    var value = Blockly.JavaScript.valueToCode(block, 'positie', Blockly.JavaScript.ORDER_NONE);
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

    value_x = "canvas.clientWidth / 100 *" + value_x;
    value_y = "canvas.clientHeight / 100 *" + value_y;

    var code = value_x + ',' + value_y;

    return [code, Blockly.JavaScript.ORDER_MEMBER];
};


Blockly.JavaScript['circle_value'] = function(block) {
    var number_y_value = block.getFieldValue('y-value');
    var number_x_value = block.getFieldValue('x-value');
    var number_radius = block.getFieldValue('radius');
    var canvas = document.getElementById('myCanvas');

    number_x_value =  number_x_value + ' / 100  *' + canvas.clientWidth;
    number_y_value =  number_y_value + ' / 100  * ' + canvas.clientHeight;
    number_radius =  number_radius + ' / 100  * ' + canvas.clientHeight;

    var code = 'Circle(new Point('+ number_x_value+', '+ number_y_value+'), ' + number_radius+')';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['square_value'] = function(block) {
    var value_x1 = block.getFieldValue('x-value');
    var value_y1 = block.getFieldValue('y-value');
    var value_x2 = block.getFieldValue('x-value2');
    var value_y2 = block.getFieldValue('y-value2');
    var code;
    var canvas = document.getElementById('myCanvas');

    value_x1 =  value_x1 + ' / 100  *' + canvas.clientWidth;
    value_y1 =  value_y1 +' / 100  * ' + canvas.clientHeight;
    value_x2 = value_x2 + ' / 100  *' + canvas.clientWidth;
    value_y2 = value_y2 + ' / 100  * ' + canvas.clientHeight;
    code = 'Rectangle(new Point('+ value_x1 +', '+value_y1 +'), new Size(' + value_x2 + ', '+value_y2 +' ))';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pentagon_value'] = function(block) {
    var value_x1 = block.getFieldValue('x-value');
    var value_y1 = block.getFieldValue('y-value');
    var number_side = block.getFieldValue('side');
    var number_radius = block.getFieldValue('radius');
    var canvas = document.getElementById('myCanvas');
    value_x1 =  value_x1 + ' / 100  *' + canvas.clientWidth;
    value_y1 =  value_y1 +' / 100  * ' + canvas.clientHeight;
    number_radius =  number_radius + ' / 100  * ' + canvas.clientHeight;

    var code = 'RegularPolygon(new Point('+ value_x1 +', '+ value_y1+'), '
        +  number_side +', '+ number_radius+');';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['star_value'] = function(block) {
    var value_x1 = block.getFieldValue('x-value');
    var value_y1 = block.getFieldValue('y-value');
    var number_side = block.getFieldValue('side');
    var number_radius = block.getFieldValue('radius');
    var number_radius2 = block.getFieldValue('radius2');
    var canvas = document.getElementById('myCanvas');
    var code;

    value_x1 =  value_x1 + ' / 100  *' + canvas.clientWidth;
    value_y1 =  value_y1 +' / 100  * ' + canvas.clientHeight;
    number_radius =  number_radius + ' / 100  * ' + canvas.clientHeight;
    code =  'Star( new Point('+ value_x1 +', '+ value_y1+'),'+  number_side +', '+ number_radius+', '+ number_radius2+')';

    return [code, Blockly.JavaScript.ORDER_NONE];
};


