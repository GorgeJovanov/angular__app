 Razlika pomegu ES6 i ES5 ->
 
ES6 e updejtirana verzija na ES5 i doaga so golemi prednosti. Vo ES6 ima nov tip na data "symbol",
isto taka vo ES6 mozeme da definirame promenlivi so var, let i const dodeka vo ES5 se koristi samo var.
I uste edna golema razlika vo ES6 e arrow function koja dozvoluvala kodot da bide 
po ednostaven i razbirliv.

==============================

Osnovni tipovi vo JavaScript ->

Osnovni tipovi za data vo JavaScript se 
String
Number
Boolean
Undefined
Null

====================

Razlikata pomegu " == " i " === " ->

" == " e operator za sporeduvanje na dve vrednosti no pred sporeduvanjeto gi transformira 
vrednostite vo ist tip na data i dokolku sporedime data od tip number i data od tip string so ista vrednost
ovoj operator ke vrati true. Dodeka " === " e po strog operator 
i bi vratil true samo dokolku dvete vrednosti se od ist tip na data.

====================

Razlikata pomegu setTimeout() i setInterval() ->


So setTimeout mozeme da zakazame izvrsuvanje na nekoja funkcija po istekuvanje na odreden vremenski
period dokolku so setInterval zakazuvame izvrsuvanje na nekoja funkcija koja ke se izvrsi i ke se 
povtoruva na odreden vremenski period. 
Primer bi bil kopceto add na prvata zadaca vo funkcijata 
addMore kade se menuva visibility na kopceto na sekoi 5 sekundi, mene mi e napraveno so setTimeout
kade po izvrsuvanje na funkcijata povtorno ja povikuvam istata, dokolku bi bilo so setInterval toa bi 
se pravelo avtomatski bez povtorno da se povikuva.

==============================



Osnovni elementi za edna Angular applikacija se ->

Moduli
Komponenti
Templejti
Direktivi 
Servisi

=============================

Pipes vo angular ->

Pipes vo angular se funkcii koi primaat odredena vrednost i ja transformiraat i ja prikazuvaat vo browser vo format koi nie go odbirame 
kako na primer da vrati odredena vrednost vo golemi bukvi, procentualno ili data.

===========================

Services vo angular ->

Servis vo angular moze da bide funkcija, objekt ili promenliva.Ima za cel da dostavuva 
data ili odredena funkcija vo poveke komponenti niz edna applikacija.

===========================

Lifecycle hooks ->

Lifecycle hooks sa specialni funkcii vo angular sto se izvrsuvaat vo odreden moment od aplikacijata. Za primer onInit e event
sto se izvrsuva pri ranuvanje na odredena komponenta. Drugi takvi eventi sa ngAfterViewInit() ngOnChanges() ngDoCheck() ngonDestry()


============================
ngFor ->

ngFor e direktiva sto se koristi vo html file za da sa izliste odredena niza
 

============================ 

ng-container se koristi kako sekcija koja se renderira sama po sebe i obicno se koristi mesto div
