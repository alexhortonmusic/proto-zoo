function Animal () {
	this.weight = null;
}

function Tenodera () {
	this.genusName = null;
}

Tenodera.prototype = new Animal();

function TenoderaSinensis () {
	this.speciesName = null;
}

TenoderaSinensis.prototype = new Tenodera();

var chineseMantis = new TenoderaSinensis();

chineseMantis.speciesName = "Chinese Mantis";

console.log("chineseMantis", chineseMantis);

// ==================================================

function CanisLupus () {
	this.speciesName = "Grey Wolf";
}

function Canis () {
	this.furColor = "";
}

function Canidae () {
	this.legCount = 4;
}


Canidae.prototype = new Animal();
Canis.prototype = new Canidae();
CanisLupus.prototype = new Canis();

Canidae.prototype.setLegCount = (count) => {
	legCount = count;
}

Canidae.prototype.getLegCount = function () {
	return this.legCount;
}

var greyWolf = new CanisLupus();
console.log("greyWolf:", greyWolf);

// ==============================================

function PantheraOnca () {
	this.speciesName = "Jaguar";
}

function Panthera () {
	this.clawLength = "5 inches";
}

function Pantherinae () {
	this.skullSize = "large";
}

Pantherinae.prototype = new Animal();
Panthera.prototype = new Pantherinae();
PantheraOnca.prototype = new Panthera();

var jaguar = new PantheraOnca();
console.log("jaguar", jaguar);

// ==============================================

function Cervidae () {
	this.genusName = null;
}

function CervusCanadensis () {
	this.speciesName = null;
}

CervusCanadensis.prototype = new Cervidae();

var elk = new CervusCanadensis();

elk.speciesName = "Elk";
console.log("elk", elk);

// =============================================

function AlligatorMississippiensis () {
	this.speciesName = "American Alligator";
}

function Alligator () {
	this.meanness = "Super rude";
}

function Alligatoridae () {
	this.scaleType = "hard";
}

Alligatoridae.prototype = new Animal();
Alligator.prototype = new Alligatoridae();
AlligatorMississippiensis.prototype = new Alligator();

var americanAlligator = new AlligatorMississippiensis();
console.log("americanAlligator", americanAlligator);




