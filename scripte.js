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
if(valeur>0){
    console.info(" le nombre est positif")

}
else{
    console.info( "le nombre est negatif");
}

monprenom="Driss";
prenom=prompt("Entrer votre Prénom");

if(prenom==monprenom)
{
    console.info(" cool vous avez le même prénom que moi");

}
else{25


    console.info("... " );
}

//for  (i=0;i<5;i++){
    alert("test");//
//

for (i=1;i<101;i++)
console.info(i);

for(f=100;f<201;f++)
console.info(f);

/*for (g=0;g<10;g++)
console.info("2*"+ g +"="*2);*/

for (h=0;h<11;h++){
console.info("table de"+ h);

for (j=1;j<10;j++)
console.info(h +"*"+j+"="+h*j);






}

for(l=1;l<11;l++){
    console.info( "table addition de_"+ l)
for(m=1;m<11;m++)
console.info(l+"+"+m+"="+(l+m));


}

for(x=0;x<101;x++)
{
console.info(x+"*");

}

for(y=1;y<6;y++){

    console.info(y+"*****");
}