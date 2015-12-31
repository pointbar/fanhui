## Académie de Go de Fan Hui
- [site](http://goacademie.github.io/fanhui/)

### Équipe
- Fan Hui - **Product Manager**
- Stéphane Langlois - **Dev/PO**

### Technos utilisées
- Framework - [Meteor JS](https://www.meteor.com/)
- Hébergement sur [meteor.com](fanhui.meteor.com)

- [Bootstrap-3](http://getbootstrap.com)
- [Github](https://github.com/goacademie/fanhui)

### Documentation
- [Meteor](http://docs.meteor.com/#/full)
- [Bootstrap](http://getbootstrap.com/components)
- [Babel](http://babeljs.io/docs/learn-es2015/)

#### Packages
- [gfk-ba/meteor-notifications](https://github.com/gfk-ba/meteor-notifications/blob/master/README.md)
- [Iron Router](http://iron-meteor.github.io/iron-router/)
- [aldeed:http](https://github.com/aldeed/meteor-http-extras)
- [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome/)

### Backlog de produit

#### En cours

##### 010 - Consulter mes informations
ETQ Insei je peux gérer mes informations.
- [ ] doit permettre de gérer : mail, kgs nickname, kgs rank, ffg rank.
- [ ] doit permettre de lister les vidéos me concernant.

#### Terminées

##### [x] 001 - Afficher des notifications
ETQ visiteur je dois être informé des erreurs ou des succès de mes requètes afin de ne pas être dans la confusion.
- [x] Doit effacer le message dès que l'on change de contexte.

##### [x] 002 - Pages pour les visiteurs extérieurs
ETQ visiteur extérieur je dois être prévenu que les pages du site ne me sont pas accéssibles afin d'être informé.
- [x] doit afficher le visuel de l'académie.
- [x] doit afficher un message pour me prévenir que l'académie est privée.
- [x] doit afficher un lien pour contacter Fan-Hui.

##### [x] 003 - Consulter les insei
ETQ FanHui je peux consulter les Insei.
- [x] doit lister les Insei par noms, prénoms et nickname Slack.
- [x] doit créer les informations manuellement en attendant de pouvoir les récupérer de slack.

##### [x] 004 - Administrer les vidéos Youtube
ETQ FanHui je peux administrer les vidéos non référencées par Youtube afin de les rendre disponibles aux Insei.
- [x] doit ajouter la vidéo via la référence Youtube.
- [x] doit récupérer les méta-données de Youtube.
- [x] doit enregistrer la vignette correspondante.
- [x] doit récupérer la date, le numéro et le type des cours par le titre Youtube.
- [x] doit lister les vidéos en précisant si ce sont des Joseki ou des Fuseki.
- [x] doit permettre d'effacer une vidéo.
- [x] doit enregistrer des vidéos par défaut quand les vidéos ne sont pas présentes.

##### [x] 005 - Consulter les pages privatives
ETQ Insei je peux consulter les informations privées.
- [x] doit permettre de consulter les pages avec mon nickname slack.
- [x] doit permettre de consulter la page des membres.
- [x] doit rediriger vers une page dédiée les visiteurs non-membres.
- [x] doit afficher un loading.

##### [x] 006 - Naviguer entre les modules
ETQ Membre je peux consulter les différents modules du site.
- [x] doit renvoyer vers les pages : membres et vidéos.
- [x] doit renvoyer vers les pages d'administration.
- [x] doit tenir compte des droits.

##### [x] 007 - Afficher une vidéo spécifique
ETQ Insei je peux consulter une vidéo afin de suivre un cours en rediffusion.
- [x] doit permettre l'affichage en plein écran.
- [x] doit s'afficher dans un onglet séparé.

##### [x] 008 - Administrer les vidéos des tournois
ETQ FanHui je peux administrer les vidéos des tournois afin de proposer des parties commentées.
- [x] doit permettre de gérer : joueurs, leagues, rondes.
- [x] doit permettre de vérifier que les joueurs existent.

##### [x] 009 - Gérer et administrer les vidéos des tournois
ETQ insei je peux consulter les vidéos de tournois.
- [x] doit permettre de visualiser les vidéos par ronde et par league.
- [x] doit permettre de visualiser les vidéos sans les cours.
- [x] doit permettre de visualiser le nom des joueurs.

#### Grainerie

##### - S'authentifier
##### - Envoyer un message sur slack
##### - Ajouter un SGF
##### - Visualiser un SGF

### DoD
- Ne doit être accessible qu'aux élèves de l'académie Fan-Hui.
- Doit comporter des messages de notification
- Doit être réservé à Fan Hui pour l'administration
- Doit être accessible que pour les inseis pour les pages de cours

### TODO
- secure BD
- subscribe/publish
- backup vdo
- Slack
- Sinon.js

## Licence
Copyright (c) 2016 FAN HUI et SCOPYLEFT

L'autorisation est accordée, gracieusement, à toute personne acquérant une copie de cette bibliothèque et des fichiers de documentation associés (la "Bibliothèque"), de commercialiser la Bibliothèque sans restriction, notamment les droits d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et / ou de vendre des copies de la Bibliothèque, ainsi que d'autoriser les personnes auxquelles la Bibliothèque est fournie à le faire, sous réserve des conditions suivantes :

La déclaration de copyright ci-dessus et la présente autorisation doivent être incluses dans toutes copies ou parties substantielles de la Bibliothèque.

LA BIBLIOTHÈQUE EST FOURNIE "TELLE QUELLE", SANS GARANTIE D'AUCUNE SORTE, EXPLICITE OU IMPLICITE, NOTAMMENT SANS GARANTIE DE QUALITÉ MARCHANDE, D’ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU TITULAIRES DU DROIT D'AUTEUR NE SERONT RESPONSABLES DE TOUT DOMMAGE, RÉCLAMATION OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D'UN CONTRAT, D'UN DÉLIT OU AUTRE, EN PROVENANCE DE, CONSÉCUTIF À OU EN RELATION AVEC LA BIBLIOTHÈQUE OU SON UTILISATION, OU AVEC D'AUTRES ÉLÉMENTS DE LA BIBLIOTHÈQUE.
