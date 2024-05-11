
                           //----------Docker----------//


Docker is an ever-increasing part of the technological landscape. Container technology is not just critical to understand for app deployment, but it is increasingly being used as part of the app development environment.

Note that this section requires both Docker and the Docker extension for VS Code to be installed. The extension is included in the VS Code Can Do That extension pack.

In this section, you'll learn about Docker. You'll learn how VS Code provides an interface to Docker, and how you can leverage that to make working with containers a snap.

Open the "exercise-5-docker" folder with VS Code. Make sure you are in the cloned repo and then...

Copy
cd exercise-5-docker
code . 
It will warn you that there is a workspace file and ask if you would like to open it. Make sure you select "Open Workspace".


                            //----------Dockerizing an application----------// 

Containers are made up of images. Images contain your project and it's dependencies. 

Exercise  Answer

**Add a Dockerfile to the start project. The Dockerfile should do the following...

      *Include a base Node image

      *Copy all the project files into the image

      *Run an npm install

      *Expose port 3000

      *Run npm start

**Build the image


                    //----------Running and inspecting images----------//

You can run any image in a container from within VS Code. VS Code also provides functionality for inspecting, managing and otherwise working with images and containers on your machine.

Exercise      Answer

*Run the "i-love-lamp:latest" image from the Docker Explorer in VS Code

*View the application running on port 3000

*View the image logs

*Attach a shell to the running image and inspect the file system

*Stop the image

*Remove the image



                       //----------Docker compose----------//

Docker uses Dockerfiles to specify what an image should look like. It uses something called "compose" files to allow you to specify multiple containers that can talk to each other.

Exercise    Answer

*Add a section to the "docker-compose.yml" file which specifies a Mongo DB image. Name it "mongo"

*Link that image with the "start" image

*Run the image

*Notice that both a "start" image and a "mongo" image are created


                    //----------Debugging Docker containers----------//

Sometimes, you have code running in a container that is not working. In that case, it's useful to be able to debug the application as it's running inside of the container. VS Code provides the correct Docker configuration to do this.

Exercise   Answer

*Build the container with the "debug.docker-compose.yml" file

*Add a launch configuration for Docker

*Attach the debugger to the running container

*Set a breakpoint in the "routes/index.js" file

*Visit the app in the browser, change the color and click the button

*See the debugger break at the breakpoint