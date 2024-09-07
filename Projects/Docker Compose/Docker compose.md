#Docker Compose

# July 30 2024

# file loc:/e/GoogleBackedUPFolder/GCP 5.5/week_17/03-adding-docker-compose-support-to-our-web-app
docker compose -f docker-compose.yml up


docker compose -f docker-compose.yml down

::::::::::::::::: 6/18/24  ::::::::::::::::::::::
:::::::: Docker Compose Server On Ubuntu ::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::

1. compute engine
2. create instance
3. boot disk change
4. market place
5. explore market place
6. Search Marketplace: docker compost ubuntu 20.04(one result)
7. Choose select result
8. Launch
9. Deployment Service account  
    Existing or New Account for IAM
10. Zone
11. Deploy

# ::::::::::::::::::::::::::::::::::::::::::::
# :::::::::::::::: 6/22/24  ::::::::::::::::::
# ::::::::::::::::::::::::::::::::::::::::::::

# Making a Docker Image (Make sure docker-desktop is open before
# running any code)
#      #Instructions
#      # docker --help
#      # docker image -help
#      # docker image build -t web1 .
##Instructions
# docker --help
# docker image -help
# docker image build -t quizzo .

#Now let's actually make this thing work.
#1 Open your docker app on your computer.
#2 docker image build -t quizzo .
#3 if you have an error, it means you didn't do #1
#4 docker image inspect quizzo
#5 docker image ls
#6 docker run --name quizgame_bryant -d quizzo
#7 docker image rm quizzo

:::::::::::::  Docker Notes :::::::::::::
<!-- Image build
1. Launch Docker Engine
2. docker image build -t quizzo .
3. docker image inspect quizzo
4. docker image ls
5. docker run --name quizgame_bryant -it quizzo

Container Launch
1. docker image ls
2. docker run --name <container_name> -it <image_name>

Container Stop+Removal
1. docker stop <container_name>
if needed:
2. docker rm <container_name>

-- or --
docker container rm -f $(docker ps -q -a)
to do both 1. & 2.
3. docker rm -f <container_name>

Image Pull
1. docker login
2. docker pull <example_USER>/<imgage_name>:<tag>

Image Push
1. docker login
2. docker image push thekid/quizzo:Balericalatest
#      #Now let's actually make this thing work.
      #1 Open your docker app on your computer.
      #2 docker image build -t web1 .
      #3 if you have an error, it means you didn't do #1
      #4 docker image inspect web1 (provided additional info)
      #5 docker image ls
      #5 docker image rm web1

## Build the image in docker
 * docker image build -t web1 .
# Show the image created from Build command
 * sudo docker image list
 -->
# Lists the Docker images and Remove the one you want:
#####################################################################################################
      # edafe@themotherplane:~/GCP5.5/diveintodocker/june25/myfirstdockerfile$ # # docker image ls
      # REPOSITORY    TAG            IMAGE ID       CREATED          SIZE
      # web1          latest         5ce2e096c860   11 minutes ago   110MB
      # ubuntu        latest         edbfe74c41f8   3 weeks ago      78.1MB
      # alpine        latest         324bc02ae123   4 weeks ago      7.8MB
      # hello-world   latest         d2c94e258dcb   15 months ago    13.3kB
      # python        3.7.5-alpine   8922d588eec6   4 years ago      98.4MB
#####################################################################################################
* docker image ls (list all the images)
* docker image rm web1 (remove the image)

# create a container with the image just CREATED
docker run --name myweb-container -d web1
  * myweb-container = name of the container
  * web1
    * myweb-container = name of what you want your containers
    * web1 = name of the image you want to use to build container


# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
## Docker compose

* docker compose -f docker-compose.yml up
* docker compose -f docker-compose.yml down
* docker compose down -rmi all -
* checking the version.. return something to show it's installed
     * docker-compose --version
     * docker info
* Downloaded program and runs it
docker run hello-world
* Docker pulls image and installs a container
sudo docker run -it ubuntu bash
* Add my user to the docker group so I don't have to 'sudo' every  command
sudo gpasswd -a $USER docker
* Deleting all containers:
Docker container rm -f $(docker ls -q -a)
