git --version

# to check username
git config --global user.name     

git config --global user.email

# to change username 
git config --global user.name "Rachna_Patel" 

# to create git repository within a particular folder
git init

# all history what we did
ls 

# to see what is the current status
git status

# to add changes in your working directory to the staging area  or to add changes in your working directory to the staging area.
git add .

# to unstage the file
git rm --cached command.md

# to commit the staged changes to ur local repository
git commit -m "initial commit"

# we only have the files till now in local repository and  not on remote repository

#create, view, and delete connections to other repositories.
# List the remote connections you have to other repositories
git remote 
 # to also  include the URL of each connection.
 git remote -v

# to configure a repository so that we can push changes from local to a remote repo
git remote add origin https://github.com/Rachsana/Demo.git