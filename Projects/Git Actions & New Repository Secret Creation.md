giGit Hub Actions: New Repository Secret Creation.

1. Find .json Key ## Note File Location and copy name to notepad
2. Create New Repository in Github
3. Copy code after creating for git commit
4. Click settings>>Secrets and variables>>actions
5. Paste contents of json key in ##navigate to json key file loc. open in text editor and copy to past in github 

Navigate to Actions:
6. Search workflows=terraform

7. Click Configure Terraform
8. Delete Terraform Format ## in yml code
9. Under Terraform Plan, Remove ( -imput=false) resulting in “run: terraform plan”
10.Under Terraform Apply, Remove ( -imput=false) resulting in “run: terraform apply -auto approve”
11.Commit
12.Click Configure tfsec
13.Commit 

Create New Repository on the command line:

echo "# githubactionexample" >> README.md
git init
git add main.tf
git commit -m "first commit"
git branch -M main
git remote -v
git remote add origin https://github.com/onojetathekid/second-brain.git
git config pull.rebase true ##command to ignore the current files in repository
git pull origin main
git push -u origin main

Push and existing repository from the command line:

git remote add origin https://github.com/onojetathekid/githubactionexample.git
git branch -M main
git push -u origin main

Modified Order of Operations for Create New Repository on the command line:

Order Of Operations:
this one:
1. git init
2. git add "main.tf" or git add .
3. git commit -m "first commit"
4. git branch -M main
5. git config pull.rebase true
6. git pull origin main
7. git push -u origin main


Key: tensile-thinker-416401-88d4b19e445a.json