                       
//                        //----------Remote Development----------//

// Note that this section requires Docker to be installed locally on your machine. Additionally, you will need the Remote Development extension pack. These extensions are installed as part of the VS Code Can Do That extension pack.

// Remote development is one of the newest and most exciting features of VS Code. 

// Developers have historically struggled against their environments. Code needs a properly configured environment to run, and configuration can be confusing and time consuming. This struggle is replicated whenever a new developer tries to onboard to a library, framework or project.

// In this section, you'll learn how to use Remote Development Containers to isolate complex environments and ship them with your code. This allows you and anyone else who wants to work on the code base to instantly get up and running without having to configure their environment.

// You will be working in the "exercise-6-remote-development" folder. This project will ask you to open the workspace file. Make sure you select "Open Workspace"



//                              //----------Create a remote container----------//

// In this exercise, you'll create a container in which to run the Lamp API in an Azure Functions project locally. Azure Functions requires a specific setup in order to work, including .NET Core, Azure Functions Core Tools and the Azure Functions extension. All of these things will be isolated in the container.

// Exercise    Answer

// *Add the Remote Development configuration files to the "start" project

// *Include all of the dependencies to run an Azure Functions project

// *Open the project in the container

// *Run the API as a Serverless Function


//               //----------Create a new function in the container----------//

// Developing in remote containers is just like developing on your own machine. Add a new endpoint to the API to make the light change rapidly.

// Exercise    Answer

// *Add a new Function with the Azure Functions extension

// *Call it "danceDance"

// *Set the light color to a random hex value

// *Restart the project with the VS Code debugger

// *Visit the danceDance endpoint and refresh your browser



//                             //----------Handling extensions----------//


// Extensions in your local VS Code are not installed by default in remote containers. You can install them from the extension explorer, or you can include them in the "devcontainer.json" file.

// Exercise     Answer

// *Install the "Prettier" extension from the Extensions Explorer view

// *Remove the extension

// *Add it via the "devcontainer.json" file

// *Rebuild the container

// *Verify that the Prettier extension is present