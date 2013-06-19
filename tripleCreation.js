var fileLocation = "/miils2013toxic/CPDBChemical.csv";
var stringObj = ui.readFile(fileLocation);
var lineArr = stringObj.split("\n");

//number of columns which define the table header
var headerRowSize = 2;
var ourPrefix = "group";

//create the store
var rdfStore = rdf.createInMemoryStore();
rdf.addPrefix(rdfStore, "rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
rdf.addPrefix(rdfStore, "rdfs", "http://www.w3.org/2000/01/rdf-schema#");
rdf.addPrefix(rdfStore, ourPrefix, "http://example.org#");


/////////////////////////////////////////////////
// create functions to use in main loop        //
/////////////////////////////////////////////////

function createPrefix(object) {
	return ourPrefix+":"+object;
}

function getOrCreateCompound(compoundName, labelName) {
	rdf.addObjectProperty(rdfStore, createPrefix(compoundName), "rdf:type", "rdf:Object");
	rdf.addDataProperty(rdfStore, createPrefix(compoundName), "rdf:label", labelName);
}

/////////////////////////////////////////////////
// loop through every row of the CSV file      //
/////////////////////////////////////////////////
for(var i=(0+headerRowSize); i<lineArr.length; i++) {
	var line = lineArr[i];
	var colValues = line.split(";");
	
	//insert the compounds
	getOrCreateCompound(colValues[1], colValues[0]);
}
rdf.saveRDFXML(rdfStore,"/miils2013toxic/cpdb.rdf")
rdf.saveRDFN3(rdfStore,"/miils2013toxic/cpdb.n3")