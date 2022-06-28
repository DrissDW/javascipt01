age = prompt("quel est votre age?");
age= parseInt(age);

if(age>18){
    console.info(" vous êtes majeur")

}
if(age<18){

    console.info(" vous êtes mineur")  
}
if(age===18){

    console.info(" vous êtes pile majeur")  
}

nombre=prompt("Veuillez entrer un nombre");
if(nombre%2==0)
{
    console.info("Nombre pair");

}
else
{
    console.info("Nombre impair");
}

valeur=prompt(" veuillez entrer un nombre");
valeur= parseInt(nombre);
if(nombre>0){
    console.info(" le nombre est positif")

}
else{
    console.info( "le nombre est negatif");
}