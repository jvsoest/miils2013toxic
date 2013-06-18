fileLocation = "C:\\Johan\\Repositories\\GitHub\\miils2013toxic\\";

var file = new File(fileLocation + "CPDBChemical.csv");

s = rdf.createInMemoryStore()
rdf.addPrefix(s, "foo", "http://example.org/")
rdf.addDataProperty(s,
	"http://example.org/foo",
	"http://www.w3.org/2000/01/rdf-scheme#label",
	"Foo"
)
rdf.saveRDFN3(s,"miils2013toxic\\cpdb.n3")