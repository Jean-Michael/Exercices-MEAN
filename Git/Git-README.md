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

### Créer une branch en local
Créer une branch puis la récupérer
```
git branch <NewBranchName>
git checkout <NewBranchName>
```
OU en une seule ligne
```
git checkout -b <NewBranchName>
```
### Créer une branche remote
```
git push <LocalBranchName> <RemoteBranchName>
```

### Supprimer une branche remote
** Attention au ':' !**
```
git push <RemoteBaseBranchName> :<RemoteBranchName>
```

### Repercuter les changements en local après la suppression d'une branche remote
```
git remote prune origin
```

### Lister toutes les branches remote
```
git branch -r
```
### Récupérer en local la liste des branches distantes
```
git fetch
```
### Afficher les informations sur les branches
```
git remote show origin
```
### Tag
#### Lister tous les tags
```
git tag
```
#### Ajouter un nouveau tag
```
git tag -a v0.0.3 -m "La version 0.0.3"
```
### Pour publier (push) un tag sinon le tag reste local
```
git push --tags
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
### Marquer les conflits comme résolus
```
git add <FileName>
```

### Récupérer les modifs de Github
```
git pull
```

### Rebase
Permet de récupérer les commits qui ont eu lieu sur le master et de les appliquer sur la branch perso. Ceci permet de ne pas polluer les logs de commit avec des infos de 'merge'. Le rebase met en mémoire temporaire, les commits local non fusionnés, puis applique les commits du master, puis applique les commits local.

1. git checkout branchPerso
2. git rebase master
3. git checkout master
4. git merge branchPerso

### Fetch
Permet de prendre connaissance des nouveaux commits du répo sans les récupérer
```
git fetch
```
Exemple (sur la branch master) : Pour appliquer en local les commits du repo distant puis mes commits perso.
```
git fetch
git rebase origin/master
```
