## : KodeKloud Java Building and Packaging Applicaton

# ::: Compile ::::
1. Dev source - myclass.java (source code)
2. Compile - javac myclass.java >> myclass.class
3. Run  - java myclass

* Java is cross platform because as long as there is a JVM(Java Virtual Machine)
*  You can run the Java code anywhere.


# ::::::::::::::  Build Process :::::::::::::::::::::::::::::::::::::::::::::
# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

### ::: Package :::
Java Archive (JAR) - Dependency Libraries, Class files, assets compressed into 1 package.

Web Archive (WAR) - JAR file plus images and other files all are packaged in

### ::: To create a JAR - Java Archive
  jar cf <appname.jar> MyClass.class Service1.calls Service2.class

### :: Results ::
appname.jar / MyClass.JAR
* Manifest files is created automatically. Metadata.. defining the Main-Class entry
META-INF/MANIFEST.MF

### :: RUN ::
java -jar MyClass.jar

### :: Document :: be in the directory
javadoc -d doc MyClass.java - creates a html version of the code

# :::::::::::::: Build Tools :::::::::::::::::::::::::::::::::::::::::
# Automate Build Steps via a Config file
* Maven
* Gadle
* ANT
# ::: ANT :::
1. sudo yum -y install ant

build.xml (target: compile, docs, jar)
2. ant compile jar - for the compile and jar run/update

3. ant

# ::: Maven :::
sudo yum -y install maven
sudo mvn package - comple and package the application cd to /opt/maven/my-app


java -cp /opt/maven/my-app/target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App
































z
