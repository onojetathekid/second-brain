cofigcon# commnads for Tech

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Notes location : E:\GoogleBackedUPFolder\GCP 5.5\terrafrom_notes\second-brain\Projects
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Git Clone
* From directory you want the files in:
git clone https://github.com/onojetathekid/myfirstdockerfile.git

# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Docker
* Deleting all containers:
Docker container rm -f $(docker ps -q -a)
docker compose down --rmi all -v //destroy them all .. old containers etc... 

* docker image pull -a thekid72/quizzo // pulls the image of docker hub to your local system.
* docker run 
*Deleting the Images*/Pruning Images and containters
docker image prune
docker container prune
docker image rm -f $(docker image ls -q -a)
## Docker compose:
docker compose docker-compose.yml up //build the continers off yaml Instructions
docker network ls - //see the bridge info
docker network inspect bridge - //see the network info / subnet & GW
docker compos docker-compose.yml down // tears downthe containers
docker container ps
docker compose up/down - starts or kills the containers

:::::::::::::::::: SSH Key Gen ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ssh-keygen -t rsa

# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Linux

* File created and move into File
mkdir june25 && cd june25

* Alpine has the old skool shell / sh
* addgroup app
* adduser -S -G app app

# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## PIP Upgrade ##
sudo apt install python3-pip


# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Kubernetes
 * Basic Kubectl commands
 kubectl config view
 kubectl config get-contexts
 kubectl config current-context  
 kubectl explain pods  
 kubectl get services
 kubectl get pods --all-namespaces
 kubectl get pods














z
