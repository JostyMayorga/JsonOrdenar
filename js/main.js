var c=0;
var texto = '[{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]';

var obj = JSON.parse(texto);

console.log(obj)

 for (var i in obj) {
        console.log(obj[i].Country)
        
 }

obj.sort(function(a, b) {
    return a.Country - b.Country;
});

function sortJSON(data, tipo) {
    return data.sort(function(a, b) {
        var x = a[tipo]; var y = b[tipo];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
    );
}

ordenado = sortJSON(obj,'Country');

console.log ("****************Ordenado****************");
 for (var i in obj) {
        console.log(obj[i].Country)
        
 }



for (var i in obj){
    var node = document.createElement("tr");
    c = c+1;
    node.id = "prim" + c
    var actual = node.id;
    document.getElementById("tbl").appendChild(node)
    for (var i=0; i <3; i++){
        let fila = document.createElement("th");
        document.getElementById(actual).appendChild(fila)
        fila.id = "fil" + c + "" + i
    }
  document.getElementById("fil" + c + "0").innerHTML = obj[c-1].Name
  document.getElementById("fil" + "" + c + "1").innerHTML = obj[c-1].City
  document.getElementById("fil" + "" + c + "2").innerHTML = obj[c-1].Country

}
