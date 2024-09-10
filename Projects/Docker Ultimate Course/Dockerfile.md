# :::::::::::::: Application ::::::::::::::::::::::::
app.js - simple nodejs script print's out Hello Docker
[ap[[app.js]]p.js]

# Dockerfile Contents - Instructions to build image

* FROM node: alpine  - is the base image you want to use to build the container.
	1. node - is different images/flavors of Linux
	2. :alpine - is the tag added after the clone of the distribution version to use
	3. images can be pulled from any repository but default is docker, specify specific registry with url link.
	4. Note: research links as they could be old and out dates.. seek the latest.

* COPY . /app                                   //copies the file from the current directory into a directory in  COPY  ["Hello world.txt", "."]            the images filesystem in a directory called /app. The "."         COPY packages*.json /app/            represents the current working directory(pwd)
* COPY . /app/                                  COPY FROM TO  //directories
* COPY . .
* ADD http://.../file.json                  // Use ADD when you want to un-compress or add from URL 
	                            otherwise COPY is best to use.
* ADD file.zip .                                // ADD will unzip files into the directory.
	

* WORKDIR /app // Sets the working directory and now all other instruction s will assume you are working form the /app directory.
 
* CMD nod app.js  // Command instruction is used to execute a command
* ADD -              
* RUN -  npm install                   // execute command that would run in the terminal
* RUN apt install python            // this "alpine" version of linux has "apk" as the package m                                                                 manager not "apt"
* ENV - API_URL=http://api.myapp.com         //@cli to see env. variables // printenv //  printenv                                                                            API_URL  // echo $API_URL
* EXPOSE - 
* USER -
* ENTRYPOINT - 

![[Pasted image 20240908165501.png]]

# :::::: Package App @ Terminal ::::::

docker build -t hello-docker .
 -t  // tag
 <hello-docker> // name of the image
 . // where docker can find the Dockerfile if in current directory

* docker image ls                                      //lists the images you have
* docker run hello-docker                        // will run the app in a docker container // now can run                                                                         on any computer
* docker container ls -a                           // see all containers running and stopped
* docker run -it react.app sh                   // runs in "interactive mode = -it" and logs in to "sh=shell                                                                    prompt"
* docker run -it react.app .
