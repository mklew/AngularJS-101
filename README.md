Kod z prezentacji AngularJS 101 na WJUGu 8.10.2013
==========================

Gratulacje
----------------
Zdecydowałeś się / zdecydowałaś się pobawić się kodem z prezentacji zatem gratulacje ;)
Jeszcze tylko instalacja potrzebnych narzędzi i się możesz bawić ile chcesz!

Instalacja
----------------

Będziemy potrzebować następujących narzędzi:
- yeoman
- grunt
- bower

Gdy ja to instalowałem to był taki skrypt od yeomana który instalował wszystko razem z nodejs (http://nodejs.org/). Teraz tak nie ma więc trzeba to zrobić ręcznie.

1. Zainstaluj nodejs. Najlepiej poprzez node package managera https://github.com/creationix/nvm Potrzebna jest wersja co najmniej 0.8
2. Mając nodejs mamy coś takiego jak npm (node package manager)
3. Instalujemy yeomana zgodnie z instrukcją na http://yeoman.io/index.html
4. Jeśli przy okazji instalacji yeomana nie został zainstalowany grunt to instalujemy grunt-cli zgodnie z http://gruntjs.com/getting-started
5. Jeśli przy okazji instalacji yeomana nie został zainstalowany bower to instalujemy zgodnie z http://bower.io/

Mając te narzędzia możemy z poziomu każdego katalogu z demo (oprócz HowAngularWorks, które tego nie wymaga) wykonać polecenia

1. `npm install` - instaluje pakiety node'a lokalnie dla danego demo
2. `bower install` - instaluje zależności takie jak bootstrap, angular itd.
3. `grunt server` - uruchamia server z livereload - domyślnie działa z Chrome (nie wiem co jest jak ktoś nie ma zainstalowanego Chrome'a)

Wszystko działa fajnie na systemach linuxo podobnych. Na windowsie widziałem, że czasem bower przy pobieraniu bibliotek trochę marudzi i trzeba go parę razy odpalić żeby w końcu wszystko zainstalował.

FAQ
----
1. Co zrobić jak coś nie działa?

Można zrobić issue na githubie, wspomnieć mnie w nim tak żebym dostał powiadomienie i coś tam naprawimy ;)