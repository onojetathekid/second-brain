cofigcon# commnads for Tech


## Git Clone
* From directory you want the files in:
git clone https://github.com/onojetathekid/myfirstdockerfile.git

# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Docker
* Deleting all containers:
Docker container rm -f $(docker ps -q -a)
docker compose down --rmi all -v //destroy them all .. old containers etc... 


## Docker compose:
docker compose docker-compose.yml up //build the continers off yaml Instructions
docker network ls - //see the bridge info
docker network inspect bridge - //see the network info / subnet & GW
docker compos docker-compose.yml down // tears downthe containers
docker container ps
docker compose up/down - starts or kills the containers



# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Linux

* File created and move into File
mkdir june25 && cd june25


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
