# Exercices-MEAN
Exercices sur MEAN (MongoDB, ExpressJS, AngularJS, NodeJS)

# Git

## Syntax fichier .MD :
* https://guides.github.com/features/mastering-markdown/
* https://help.github.com/articles/github-flavored-markdown/
* https://help.github.com/articles/markdown-basics/
* https://help.github.com/articles/writing-on-github/

## Commandes Git

### Récupération du projet
```
git clone <URL>
```

### Ajout d'un fichier
```
git add <NouveauFichier>
```

### Commit sur le repo local
Il faut ajouter les informations de l'utilisateur si cela n'a jamais été fait. (Cela va ajouter un fichier ~/.gitconfig)
```
git config --global user.email <Email>
git config --global user.name <Login>
```
Puis commiter les changements
```
git commit -m "Message de commit"
```

### Commit sur Github
```
git push
```

# Atom

## Pour ajouter le proxy pour Atom.

Lien : https://github.com/atom/apm/blob/master/README.md#behind-a-firewall

1. Créer le fichier ~/.atom/apmrc
2. Mettre le contenu :
```
http-proxy = http://<HOST>:<PORT>
https-proxy = http://<HOST>:<PORT>
```
