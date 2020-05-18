Blockly.Blocks['variable_block'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("object");
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('3ADBBC');
        this.setTooltip("define the object");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['shape_defining'] = {
    init: function () {
        this.appendValueInput("object")
            .setCheck("String")
            .appendField("object ");
        this.setInputsInline(true);
        this.appendStatementInput("statement")
            .setCheck(null)
            .appendField("declaratie");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3ADBBC");
        this.setTooltip("om alle declaratie toe te voegen");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lijn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("lijn");
        this.setOutput(true, 'Number');
        this.setColour(230);
        this.setTooltip("decaleren van een nieuwe lijn");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['decalartion_parameters'] = {
    init: function () {
        this.appendValueInput("positie")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([
                ["lijnkleur", "strokecolor"],
                ["lijnDikte", "strokewidth"],
                ["plek", "add"],
                ["achtergrond", "fillcolor"],
                // ["uiteinde van de lijn", "strokeCap"], // input moet  ' round/ square of butt' zijn
                ["lijn", "dashArray"],
                ["afvlakken", "flatten"],
                ["transperant", "opacity"]
            ]), "propertied");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('3ADBBC');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['declaration_no_parameters'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["sluiten", "closed"],
                // ["stijl", "style"],
                ["glad", "smooth"]
            ]), "value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('3ADBBC');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['positie'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour('3ADBBC');
        this.setTooltip("om de x en y positie te bepalen");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['circle_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("y-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "y-value")
            .appendField("x-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "x-value");
        this.appendDummyInput()
            .appendField("radius")
            .appendField(new Blockly.FieldNumber(10), "radius");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour('#73187F');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['square_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("X-waarde")
            .appendField(new Blockly.FieldNumber(30, 0, 100), "x-value")
            .appendField("Y-waarde")
            .appendField(new Blockly.FieldNumber(30, 0, 100), "y-value");
        this.appendDummyInput()
            .appendField("Breedte")
            .appendField(new Blockly.FieldNumber(10, 0, 100), "x-value2")
            .appendField("Hoogte")
            .appendField(new Blockly.FieldNumber(10, 0, 100), "y-value2");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour('#73187F');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pentagon_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("X-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "x-value")
            .appendField("Y-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "y-value");
        this.appendDummyInput()
            .appendField("zijdes")
            .appendField(new Blockly.FieldNumber(5), "side")
            .appendField("radius")
            .appendField(new Blockly.FieldNumber(20), "radius");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour('#73187F');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['star_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("X-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "x-value")
            .appendField("Y-waarde")
            .appendField(new Blockly.FieldNumber(50, 0, 100), "y-value");
        this.appendDummyInput()
            .appendField("punten")
            .appendField(new Blockly.FieldNumber(4), "side")
            .appendField("radius 1")
            .appendField(new Blockly.FieldNumber(10), "radius")
            .appendField("radius 2")
            .appendField(new Blockly.FieldNumber(20), "radius2");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour('#73187F');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};