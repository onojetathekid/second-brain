# :::::::::::::: Application ::::::::::::::::::::::::
app.js - simple nodejs script print's out Hello Docker
[ap[[app.js]]p.js]

# Dockerfile Contents - Instructions to build image

* FROM node: alpine  - is the base image you want to use to build the container.
	1. node - is different images/flavors of Linux
	2. :alpine - is the tag added after the clone of the distribution version to use

* COPY . /app  //copies the file from the current directory into a directory in the images filesystem in a directory called /app. The "." represents the current working directory(pwd)

* WORKDIR /app // Sets the working directory and now all other instruction s will assume you are working form the /app directory.
 
* CMD nod app.js  // Command instruction is used to execute a command
* ADD - 
* RUN - 
* ENV - 
* EXPOSE - 
* USER -
* ENTRYPOINT - 

![[Pasted image 20240908165501.png]]

# :::::: Package App @ Terminal ::::::

docker build -t hello-docker .
 -t  // tag
 <hello-docker> // name of the image
 . // where docker can find the Dockerfile if in current directory

* docker image ls // lists the images you have
* docker run hello-docker // will run the app in a docker container // now can run on any computer
* docker container ls -a // see all containers running and stopped
* 