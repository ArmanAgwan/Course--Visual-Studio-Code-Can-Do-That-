//                 //---------Debugging----------//

// VS Code contains a powerful set of debugging features for all manner of applications. In this exercise, you'll learn how to debug both
// simple and complex application scenarios.
// Open the "exercise-4-debugging" folder. It will prompt you that there is a workspace file. Make sure you click on "Open Workspace".


//                     //----------Simple debugging----------//

// VS Code includes a debugger for Node.js out-of-the-box. You can run any JavaScript file with the debugger without 
// any configuration whatsoever. 

// //----------Simple Debugging:-

//                                  Exercise    Answer

// Debug the "index.js" file in the "1-simple-debugging" folder and inspect the response.data.results object


// //----------Logpoints:-

// While debugging is normally associated with breakpoints, VS Code has a concept called "Logpoints" . These are breakpoints that simply log out values to the Debug Console. This is useful for when you want to simply inspect a value, but you don't want to have the whole application halt. It's a nice substitute for console.log.


//                                 Exercise    Answer

// Add a log point to the application to log the value of response.data.results to the Debug Console. Run the app and view the log.


//                        //----------Simple launch configration----------//


// In most instances, you will need to specify a "Launch Configuration" for VS Code. These are commonly referred to as "Launch Configs". 
// This is a file that specifies how VS Code should run your project.

// The exercise in the folder "2-launch-configs" is a project written in TypeScript. It is also a console application. If you try and run it,
// it will run, but it won't appear to do anything. This is because by default, VS Code runs console applications on an "internal" terminal that you can't see.
// We need to configure VS Code to run this app correctly so we can use and debug it.


//                                   First Tab    Second Tab

// Open the "2-launch-configs" project. Add a launch config to this application that instructs VS Code to use the "integrated" terminal.
// Add a breakpoint to the application. Run it with VS Code and hit the breakpoint.



//                               //----------Auto attach----------//

// Most web developers have become quite comfortable with their browser development tools. However, web development is quite possibly the only platform where code is written in one place,
// and debugged in another. It is far easier to debug code in the same place where you write it.

// The Chrome Debugger extension for VS Code makes this possible. I have included it in the VS Code Can Do That extension pack.

//                                     Exercise     Answer


// Add a launch.config to the "3-debug-browser" apps project. Add a breakpoint to the updateColor method in the src/app.js file. 

// Run the project and then attach the VS Code debugger. 



//                            //----------Debugging browser apps----------//


// Most web developers have become quite comfortable with their browser development tools. However, web development is quite possibly the 
// only platform where code is written in one place, and debugged in another. It is far easier to debug code in the same place where you write 
// it.

// The Chrome Debugger extension for VS Code makes this possible. I have included it in the VS Code Can Do That extension pack.


//                                           Exercise     Answer

// Add a launch.config to the "3-debug-browser" apps project. Add a breakpoint to the updateColor method in the src/app.js file. 
// Run the project and then attach the VS Code debugger. 



//                               //----------Compound debug configurations----------//

// Often you need to run multiple processes at once, but debug them as if they were the same project. A common scenario for this is running a
// React, Angular or Vue app, along with some sort of API service using Express or Hapi. VS Code has a feature called "Compound Launch 
// Configurations" that allow you to launch multiple debug processes at one.


//                                   Exercise        Answer

// *Open "4-compound-launch-config"

// *Start the frontend application

// *Create two launch configs..

//       *One for the Node process that runs in the "/server" folder
//       *One of the Chrome process that runs from the root

// *Create a compound launch config that includes both of the above configs

// *Run the compound launch config

// *Add a breakpoint to "src/App.js"

// *Add a breakpoint to "server/routes/index.js"

// *Hit both the breakpoints