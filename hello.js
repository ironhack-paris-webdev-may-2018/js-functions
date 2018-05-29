// "Arthur", "Lucas" and "Mostafa" are ARGUMENTS
hello("Arthur", "english");
hello("Lucas", "french");
hello("Mostafa", "english");

// "name" and "language" are PARAMETERS
function hello (name, language) {
  switch (language) {
    case "french":
      console.log("Bonjour, " + name + " !");
      break;

    default:
      console.log("Hello, " + name + "!");
      break;
  }
}


function doStuff (number) {
  return number ** 2;
}

var result = doStuff(8);

console.log( doStuff(5) );

console.log( doStuff(10) );

console.log( (doStuff(7) + 1) * (8 / doStuff(2)) );
