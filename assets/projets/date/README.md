Input date :
 
1 input texte (<form method=”post”><input type=”text” name=”” id=”” maxlength=”10” value=”04/12/2018”></form>)
valider en javascript que l’utilisateur saisit bien et strictement, sans tolérance possible :
 
jj/mm/aaaa   ok
maxlength = 10  ok
check length = 10  ok
où jj est un nombre, un entier, et >= 1 et <= 31  ok
et où mm est un nombre, un entier, et >= 1 et <= 12  ok
et où aaaa est un nombre, un entier, et >= 2018 et <= 3000  ok
 
références : isNan (), isNumber (), isInteger (), isInt ()
explode (“/”), substring() >> array (3)
attention si explode renvoit une erreur, c’est que le format est mauvais
attention si explode renvoit autre chose que 3 données (tableau de 3), alors mauvais format
 
 
Input time :
 
2 input texte ou number
valider en javascript que l’utilisateur saisit bien et strictement, sans tolérance possible :
erreur sous forme d’alert() dans un premier temps, puis soulignage rouge, indice avec “!” (attention, revenir à l’état normal si la saisie est correcte), et showError()
 
1er input = hh
maxlength = 2
check length = 1 ou 2
où hh est un nombre, un entier, et >= 0 et <= 23
 
2ème input = mm
maxlength = 2
check length = 2
où mm est un nombre, un entier, et >= 0 et <= 59
 
second temps :
passer automatiquement du champ heure au champ minute, si hh >= 3
on input-heure.update function () { if value is number & integer & hh >= 3 then input-minute.focus }
 
troisième temps :
passer du champ minute de début au champ heure de fin, si minute valide (cf ci-dessus, voire pour rajouter un zéro automatiquement si mm >= 6 ?)
passer automatiquement du champ date au champ heure de début, si journée complète décochée