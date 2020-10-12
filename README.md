# TP06 - Objets JavaScript

## Exercice 1

Dans le fichier `fonction.js`,

* [ ] Ajoutez une méthode `calcPerimeter()` au prototype de la classe `Shape`.
      Cette méthode calcule le périmètre et affiche le résultat dans la console.
* [ ] Créez une nouvelle instance de la classe `Shape` appelée `square`.
      Donnez-lui un `name` égal à `"square"`, des paramètres `sides` de `4` et `sideLength` de `5`.
* [ ] Appelez votre méthode `calcPerimeter()` sur l'instance.
      Vérifiez qu'elle affiche bien le résultat du calcul dans la console du navigateur.
* [ ] Créer une instance de `Shape` appelée `triangle` avec le paramètre `name` égal à `"triangle"`, `sides` égal à `3` et `sideLength` égal à `3`.
* [ ] Appelez la méthode `calcPerimeter()` sur triangle et vérifier le résultat.

Un fichier `fonction.html` a été créé pour faciliter le chargement de `fonction.js` dans votre navigateur.

## Exercice 2

Dans le fichier `classe.js`,

* [ ] Réécrivez le code du fichier `fonction.js` avec la nouvelle syntaxe de classe issue d'ECMAScript 2015.
* [ ] Recréez les instances `square` et `triangle`.
* [ ] Appelez et vérifier les résultats donnés par la méthode `calcPerimeter()` sur ces deux instances.

## Exercice 3

Dans le fichier `heritage.js`,

* [ ] Recopiez la définition de la classe `Shape` de votre fichier `classe.js`.
* [ ] Créez une nouvelle classe `Square` qui hérite de la classe `Shape`.
      Le paramètre `name` du constructeur parent est fixé à `"square"` et le paramètre `sides` à `4`.
      Le constructeur de `Square` ne prend donc qu'un paramètre `sideLength` qu'il transmet à son parent.
* [ ] Ajoutez une méthode `calcArea()` dans la classe `Square`.
      Cette méthode calcule l'aire du carré.
* [ ] Créez une instance `square` de la classe `Square` avec un `sideLength` de `5`.
* [ ] Appelez les méthodes `calcPerimeter()` et `calcArea()`.
      Vérifiez leur résultat dans la console.
