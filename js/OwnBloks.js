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
        this.setColour(230);
        this.setTooltip("define the object");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['vorm'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["vierkant", "square"], ["cirkel", "circle"], ["pentagram", "polygon"], ["ster", "star"]]), "shape");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
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
        this.setColour("#9e009e");
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
                // ["uiteinde van de lijn", "strokeCap"],
                ["lijn", "dashArray"], ["afvlakken", "flatten"]
                // ["stijl", "style"]
            ]), "propertied");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(105);
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
        this.setColour(230);
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
        this.setColour(230);
        this.setTooltip("om de x en y positie te bepalen");
        this.setHelpUrl("");
    }
};