# Exercices-MEAN
Exercices sur MEAN (MongoDB, ExpressJS, AngularJS, NodeJS)

# Git

## Syntax fichier .MD :
* https://guides.github.com/features/mastering-markdown/
* https://help.github.com/articles/github-flavored-markdown/
* https://help.github.com/articles/markdown-basics/
* https://help.github.com/articles/writing-on-github/

## Tutoriels
* http://pcottle.github.io/learnGitBranching/
* http://try.github.com/

## Configuration Github
https://help.github.com/articles/set-up-git/

## Commandes Git

### Récupération du projet
```
git clone <URL>
```

### Affiche les repo récupérés et les alias
```
git remote -v
```

### Afficher la branche courante
```
git branche
```

### Créer une branch
Créer une branch puis la récupérer
```
git branch <NewBranchName>
git checkout <NewBranchName>
```
OU en une seule ligne
```
git checkout -b <NewBranchName>
```

### Différence en local
Pour afficher les modifs local non commitées
```
git diff
```
Pour afficher les différences non commitées mais ajoutée via 'add'
```
git diff --staged
```

### Prise en compte des modifications (Staged Area)
Ajoute une liste de fichiers
```
git add <List of files>
```
Ajoute tous les fichiers
```
git add --all
```
Ajoute tous les fichiers txt du répertoire courant
```
git add *.txt
```
Ajoute tous les fichiers txt du répertoire docs
```
git add docs/*.txt
```
Ajoute tous les fichiers du répertoire docs
```
git add docs/
```
Ajoute tous les fichiers txt du projet en entier
```
git add "*.txt"
```

### Pour retirer du 'Stage Area'

```
git reset HEAD <Files>
```
Astuce : Après une 'add', git status affiche la commande pour faire un retour en arrière ;)

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

Pour commiter en une ligne sans faire de 'add' (car les fichiers ont déjà été indexé une fois)
```
git commit -a -m 'Mon message'
```
### Modifier le dernier commit (Message de commmit ou ajouter des fichiers)
```
git add <ListeFichiersOublies>
git commit --amend -m 'Mon nouveau message'
```

### Annuler un commit, et revenir à l'étape du 'stage area'
```
git reset --soft HEAD^
```

### Créer un alias pour le répo distant (Github)
```
git remote add origin <URL Repo Github>
```

### Commit sur Github
```
git push -u <RepoAliasName> <LocalBranch>
```

### Récupérer les modifs de Github
```
git pull
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

# NodeJS

Site Officiel : https://nodejs.org/en/

## Resources for Newcomers
  - [The Wiki](https://github.com/joyent/node/wiki)
  - [nodejs.org](http://nodejs.org/)
  - [how to install node.js and npm (node package manager)](http://www.joyent.com/blog/installing-node-and-npm/)
  - [list of modules](https://github.com/joyent/node/wiki/modules)
  - [searching the npm registry](http://npmjs.org/)
  - [list of companies and projects using node](https://github.com/joyent/node/wiki/Projects,-Applications,-and-Companies-Using-Node)
  - [node.js mailing list](http://groups.google.com/group/nodejs)
  - irc chatroom, [#node.js on freenode.net](http://webchat.freenode.net?channels=node.js&uio=d4)
  - [community](https://github.com/joyent/node/wiki/Community)
  - [contributing](https://github.com/joyent/node/wiki/Contributing)
  - [big list of all the helpful wiki pages](https://github.com/joyent/node/wiki/_pages)
