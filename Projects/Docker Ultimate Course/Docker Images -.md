IN THIS SECTION: 
- Creating Docker Files
- Version images
- Sharing images
- Saving and loading images

IMAGE:

* A cut-down OS
* Third-party libraries
* Application files
* Environment variables

CONTAINTER - once there is an image, we can start a container from it.

* Provide an isolate envieronment
* can be stopped and restarted
* is jsut a process

Container
:::::::::::::::::::::::::::::::::::::: Images :::::::::::::::::::::::::::::::::::::::::::::::
* docker image pull -a thekid72/quizzo // pulls the image of docker hub to your local system.
* docker run 
*Deleting the Images*/Pruning Images and containters
docker image prune
docker container prune
docker image rm -f $(docker image ls -q -a)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::: tagging images :::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//command to add a tag to the image
docker build -t react-thekid:<tag>

docker build -t react-thekid:1
//to remove the tag  from an image
docker image remove react-thekid:1

//to tag and image "after" it is built
docker image tag react-thekid:latest react-thekid:1

// Update the latest tag to the most current image
docker image tag b06 react-thekid:latest

// to tag the image to my docker hub repository
docker image tag
{
<86e>container Id/container name;
docker hub acct name=<thekid72>;
<react-app>image name/repository name / must match;
<:2> - tag/version control
}
docker image tag 86e thekid72/react-thekid:2

//to push image to docker hub
<docker push thekid72/react-app:2>

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::: sharing Images ::::::::::::::::::::::::::::::::::
::: hub.docker.com/repository
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// to save the file as compressed file // .tar Linux
docker image save  -o react-app.tar react-app:3

//load  image from image compressed file
docker image load -i react-app.tar













