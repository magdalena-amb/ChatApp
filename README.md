# ChatApp

This is a Live Chat App build with webpack and socket.io.

To test the app, in the project directory, you can run:

node index.js
This will spin up the server to listen on a port 3000 and serve the static files.

Next open new terminal window and run:

npm start
This, by default will open new browser tab (http://localhost:8080) with the ChatApp.
Add new username.
Then open new browser window on the same port: (http://localhost:8080) and add another user.

Changes in the chat windows should be updated in real time simultaneously.


To run the production version of this App, run:

npm build
Then open http://localhost:3000.
