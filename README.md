# Documentation

Ce doucment present l'utilisation de l'application catalogue

## Fonctionnement

L'application catalogue permet de travailler sur 4 éléments :
- Les modules.
- Les pages.
- Les squelettes de page.
- Les fichiers SCSS.

## Chemins utiles

Les pages sont dans :
    app/Resources/views/pages

Les modules sont dans :
    app/Resources/views/modules

Les images se trouvent dans :
    web/bundles/framework/images/

Les SCSS se trouvent dans :
    web/scss/

Les CSS compliées se trouvent dans :
    web/css/

Les Javascripts se trouvent dans :
    web/bundles/framework/js/

## Url d'une page

L'url de base du site est :
    <dossier_web>/ws_templating/web/app_dev.php/page/

L'url d'une page est sont chemin sur le disque.

**par exemple :**
la page se trouve dans app/Resources/views/pages/test/actualite et se nomme test.html.twig

**Aura pour URL :**
<dossier_web>/ws_templating/web/app_dev.php/page/test/actualite/test

Pas d'extension ".html" ou ".htm"

## Macros

### La macro pour les images

La macro 'media' permet de positionner l'application à la racine du dossier images/

    <img src="{{ media ('mon-image.jpg') }}" alt="mon Image"/>

### La macro pour les Javascript

La macro 'js' permet de positionner l'application à la racine du dossier js/

    <script type="text/javascript" src="{{ js ('mon-javascript.js') }}"></script>

### La macro pour les CSS

La macro 'css' permet de positionner l'application à la racine du dossier css/ (non SCSS)

    <link href="{{ css ('ma-css.css') }}" rel='stylesheet' type='text/css'/>

## SCSS / Gulp

### Installation de Gulp

Nous partons du principe que nodejs est installé sur votre machine.

    npm install -g gulp //If you haven't installed gulp globally before
    npm install --save-dev gulp
    npm install --save-dev gulp-sass

Attention aux droits de l'utilisateur actif, sur Linux ou Mac, il faut parfois preceder la commande d'un 'sudo'

### Utilisation de Gulp

En ligne de commande, se placer à la racine de l'application et taper :

    > gulp

Le message suivant doit apparaitre, gulp est en attente de modification de la SCSS :

    tellaw@ubuntu:/var/www/html/ws_templating$ gulp
    [23:30:20] Using gulpfile /var/www/html/ws_templating/gulpfile.js
    [23:30:20] Starting 'sass'...
    [23:30:20] Finished 'sass' after 122 ms
    [23:30:20] Starting 'default'...
    [23:30:20] Finished 'default' after 47 ms

Lors d'une modification d'une SCSS, le fichier nommé de la meme façon dans le dossier CSS est mis à jour.
En cas d'erreur de syntaxe, Gulp se coupe. il faut alors le relancer.

## Créer un module

Pour créer un module, il faut créer un fichier .html.twig sous le dossier modules :

    app/Resources/views/modules

Ce fichier doit débuter par les meta-données (voir chapitre plus loin), et ensuite contenir du code HTML classique.

Pour utiliser le module dans une page, il faut ouvrir le fichier .html.twig de la page et ajouter la macro module :

    {{  module('repertoire/module-test')  }}

Si le module n'existe pas, un message d'erreur s'affichera à la place du module.

## Créer une page

Pour créer une page, il faut créer un fichier .html.twig sous le dossier pages :

    app/Resources/views/pages

Ce fichier doit débuter par les meta-données (voir chapitre plus loin), et ensuite contenir du code HTML classique.

Une page se base sur un squelette de page. Il faut définir le squelette utilisé par la ligne :

    {% extends 'base.html.twig' %}

ou base.html.twig est notre squelette.

Ensuite, il faut remplir les zones de contenu définies dans le squelette. Par exemple, dans mon squelette, une zone 'body' existe, pour la remplir le code suivant fonctionne :

    {# wk-template : Le nom de mon template #}
    {# wk-description : La description sur une ligne de mon template #}
    {% extends 'base.html.twig' %}

    {% block body %}

        <h1>Page de test</h1>

        Module à la racine :<br/>
        {{  module('module-test')  }}

        Module dans un sous-repertoire :<br/>
        {{  module('repertoire/module-test')  }}

        <img src="{{ media('blue_picto_less.gif') }}" />

    {% endblock %}


## Créer un squelette de page

Les squelettes de pages se trouvent à la racine du dossier :

    app/Resources/views/

Un squelette est la structure HTML d'une page, définissant des zones à remplir par les pages.

**Exemple de syntaxe :**

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>{% block title %}Welcome!{% endblock %}</title>
        </head>
        <body>
            {% block body %}{% endblock %}
            {% block javascripts %}{% endblock %}
        </body>
    </html>


## Les meta-donneés

Chaque page et chaque module doit définir dans ses premieres lignes les meta-données suivantes :

{# wk-template : Le nom de mon template #}
{# wk-description : La description sur une ligne de mon template #}
{# wk-id : ID_du_Template #}
{# wk-vues : anonyme,anonyme-IP #}
{# wk-tags : tag1,tag2,tag3 #}

**Template** : Nom du template

**Description** : Description courte sur une ligne de la fonction du template

id : Identifiant du module, sans accents ni caractères speciaux, et sans espaces.

vue : Nom de la vue que represente ce template
- tous
- anonyme
- anonyme-IP
- connecte
- connecte-IP
- abonne

tags : Tags à définir avec les chefs de projets representant le module.

## A venir

- La création d'un index (Ou sont les modules / quels modules sont dans une page)
- Recherche