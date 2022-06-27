/*
commentaires:
nous allons apprendre
1.les variables
2.les conditions
3.les boucles
4.les fonctions




*/
a=10
b=50
c= "80"
b=90

console.error(a+b);
console.error(typeof (a));
console.error(b);
console.error(a+parseInt(c));

SEL=100;
SUCRE=80;

console.error(("nous avons du sel.") + SEL +("nous avons du sucre.") + SUCRE);
TEMP= SEL;
SEL= SUCRE;
SUCRE=TEMP;
console.error(("nous avons du sel.") + SEL +("nous avons du sucre.") + SUCRE);



age = prompt("quel est votre age?");
console.info("l'utilisateur a"+ age + "ans");
e= parseInt(age)+2
console.info("lutilisateur aura"+ e + "ans dans 2 ans");

prix= prompt("quel est le prix de cet article?");

console.info("l'article vaut"+ prix + "euros");
prixttc= parseInt(prix)*1.2;
console.info("l'article vaut"+ prixttc + "euros TTC");
