# Académie de Go de Fan Hui
- [site](http://goacademie.github.io/fanhui/)

## Équipe
- Fan Hui - Product Manager
- Stéphane Langlois - Dev/PO

## Technos utilisées
- Framework - [Meteor JS](https://www.meteor.com/)
- Hébergement sur [meteor.com](fanhui.meteor.com)

- [Bootstrap-3](http://getbootstrap.com)
- [Github](https://github.com/goacademie/fanhui)

## Documentation
- [Meteor](http://docs.meteor.com/#/full)
- [Bootstrap](http://getbootstrap.com/components)
- [Babel](http://babeljs.io/docs/learn-es2015/)

### Packages
- [gfk-ba/meteor-notifications](https://github.com/gfk-ba/meteor-notifications/blob/master/README.md)
- [Iron Router](http://iron-meteor.github.io/iron-router/)

## Backlog de produit

### En cours

#### 004 - Administrer les vidéos Youtube
ETQ FanHui je peux administrer les vidéos non référencées par Youtube afin de les rendre disponibles aux Insei.
- doit ajouter la vidéo via la référence Youtube.
- doit récupérer les méta-données de Youtube.
- doit enregistrer la vignette correspondante.
- doit récupérer la date, le numéro et le type des cours par le titre Youtube.
- doit lister les vidéos en précisant si ce sont des Joseki ou des Fuseki.
- doit permettre d'effacer une vidéo.

#### 005 - Afficher une vidéo spécifique
ETQ Insei je peux consulter une vidéo afin de suivre un cours en rediffusion.
- doit permettre l'affichage en plein écran.
- doit s'afficher dans un onglet séparé.

#### 006 - Consulter mes informations
ETQ Insei je peux gérer mes informations.
- doit permettre de gérer : mail, kgs nickname, kgs rank, ffg rank.

### Terminées

#### 001 - Afficher des notifications
ETQ visiteur je dois être informé des erreurs ou des succès de mes requètes afin de ne pas être dans la confusion.
- Doit effacer le message dès que l'on change de contexte.

#### 002 - Pages pour les visiteurs extérieurs
ETQ visiteur extérieur je dois être prévenu que les pages du site ne me sont pas accéssibles afin d'être informé.
- doit afficher le visuel de l'académie.
- doit afficher un message pour me prévenir que l'académie est privée.
- doit afficher un lien pour contacter Fan-Hui.

#### 003 - Consulter les insei
ETQ FanHui je peux consulter les Insei.
- doit lister les Insei par noms, prénoms et nickname Slack.
- doit créer les informations manuellement en attendant de pouvoir les récupérer de slack.

### Grainerie

#### - Ajouter un SGF
#### - Visualiser un SGF

## DoD
- Ne doit être accessible qu'aux élèves de l'académie Fan-Hui.
- Doit comporter des messages de notification
- Doit être réservé à Fan Hui pour l'administration
- Doit être accessible que pour les inseis pour les pages de cours

## TODO
- Sinon.js
- Meteor Test
- secure BD

## Licence
En cours

