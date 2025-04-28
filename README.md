# cs465-fullstack
CS-465 Full Stack Development with MEAN

This website is designed for users to explore and save different travel destinations and other options like booking, foods, and related news articles. We are using the MEAN(Mongo, Express, Angular,Node) stack for a simple full-stack service with database implementation and authentication and easy to use features. The website includes tabs for these layouts as well as additional information dynamically populated through components of our framework. This serves as a software solution for users to plan their ideal getaways.

The ui tabs implemented into the program will all have updates on traveling, destinations, and accommodations to go along with their trip. We will develop a responsive frontend and a secure backend to be robust and streamlined with an interactive database and responsive design.

Angular will help design a nice responsive Ui on the client side, while the node.js server will handle all requests and endpoints from our application. Beyond that layer we will be using MongoDB for permanent and reliable storage, as well as Mongoose to serve as an additional layer of abstraction to interact with our permanent storage.

This application will be designed for users looking for travel recommendations and information, different packages available for their desired destinations. Frequent travelers will also be utilizing the site for news and information about the latest and hottest trips, all personalized for the user.

This full-stack project utilizes different components including express, html, and JavaScript on the backend utilizing handlebars engine to encapsulate and render our data and an SPA architecture in angular for the front end with angular. Our permanent storage system uses MongoDB to hold user and trip information. This system is built using the MEAN stack. Utilizing these different frameworks provides structure and a way for the endpoints to interaction the frontend and backend. These are all chosen for their integration and simplistic features for design and engineering the application. This includes dynamically rendered information as well as populated through angular. The tabs on the interface will display information for administrators to interact with the data in the system. The overall goal is to streamline the administrative process with an easy to use and secure interface, as well as a user friendly and fast website for users and travelers. Performance is optimal when dealing with user and trip information. MongoDB needs to be configured correctly and queries need to be optimized for maximum performance. The goal is to have performance and no delay with system data. Configuration is a priority for mongo and express because our system will grow in volume and additional components as well. We need to make sure we can scale with the requirements. Security is also a primary concern and will be needed to authenticate users and configure our system to give certain permissions to select individuals.

Architecture As I had mentioned, we will be using Angular for the front end, Express and Node for the backend, Mongo for the database. This repository also contains a design template with our system and class design charts as well. The three different frameworks and systems are like their own individual systems with their own frameworks and functionalities. This is utilized for microservice architecture and a standard and efficient way to design and test system code and functionality with these frameworks. Testing environments can also be isolated as well, including different endpoints and components in the application for ease of use and a structured design. Security components were added like jwt token authentication and a proper login screen. The flow of operations is:

User -> Browser Browser -> Client session Client session -> Server Server -> ODM (Mongoose) MongoDB -> ODM ODM -> Server Server -> Client Client -> Browser.

Interface The front end uses components to dynamically render content and interact with the backend with http requests. Each section is connected to different routes that display specific content and interact with certain parts of the application. It is fully responsive and optimized for efficiency and system performance and quality so the system can be updated efficiently.

Testing This part is critical for application design and functionality. MEAN stack means multiple layers of testing. Unit testing focuses on isolated pieces of code. This includes user login, trip creation, trip edit, etc. Frontend testing for angular has an additional developer console to test frontend code. In this log you see different error statuses and descriptions to indicate problems and information in your code, as well as full tab and description of the network requests made from the system. Integration testing is extremely important as cors is a very common issue with integration. Testing endpoints, route data, and both ends handle the data correctly. Making sure to restart the servers after changes to reflect changes that don’t display immediately with node.js as server code sometimes needs to be refreshed or have cache cleared in angular for changes on the front end.

Design Constraints

As previously mentioned, we will be using the MEAN stack for this project, and we will have certain areas and constraints to the system we will have to cover to ensure our system is strong and robust.

Our system requires optimization when it comes to performance, speed, and an overall smooth user experience. Our system needs to be responsive, with a format implemented to retrieve data quickly, like optimization for our MongoDB queries. Proper abstraction and file communication is necessary for our application to have the proper functionality that the user needs.

With performance also comes scalability, we need to make sure the application can be responsive under high volume. Our system needs to be able to adapt to the amount of network traffic the application is experiencing, so the tools and components we use like MongoDB need to be configured correctly. This also includes query optimization and functional web requests whether it’s through custom queries or other built-in components of the framework.

The application will also need to be cross compatible with different operating sstems and devices, as well as different browsers and search engines. As I had previously stated, we need a responsive design, and it needs to be fully optimized to run on different platforms. We also need to take into consideration all our APIs and third party APIs for updates and integrations to our system.

The system will handle user data securely, using authentication and encryption on data flow with our storage. Administrative and access controls need to be clearly defined as a layer of protection of our data with configurations implemented into user controls.

System Architecture View

A text version of the component diagram is available: CS 465 Full Stack Component Diagram Text Version.

This portion will serve as a high-level overview of our diagram and break down our system design and flow. As mentioned, we are using the MEAN stack for our system. This will let users make and plan their trips. The front-end client side uses Angular, this is what the users see when interacting with the system. The database is built in MongoDB and stores all the users data.

Frontend The client component (Angular) consists of other components within the system, like the browser, session, portfolio and other information. The way these components work together display personalized results by communicating between the different components. The front-end client contains components that handle the visual elements of the application, like the graphical libraries. The client-side web browser stores information about the user locally. Their browser communicates with other components of the application to display different information for each user.

Backend For the backend (Node.js and Express) this part of the system contains all the requests and processing for the frontend as well as from the permanent storage. This manages things like the user’s data, and accounts. The server session and authentication server reside in the backend, handling all the data processing for the system. The traveler database will store all the user account data, while the Mongoose ODM will serve as an additional layer to the system to make queries to the server and database. It’s like a chain of events that happens between the client, to the server, back to the server, and to the client through a flow of data. The server serves as the middle between the client an permanent storage and will handle all our API requests and return the necessary data and type.

Database MongoDB (Database Component) is a NoSQL database used as storage. This is commonly used with web development as it uses JavaScript and other data like JSON. This is the location where things like usr information and account information will be stored. This is where Mongoose ODM comes into play, it is just an additional layer of abstraction to interact with the database, and perform CRUD operations (Create, Read, Update, Delete).   Sequence Diagram

< >

To break down the sequential diagram, we will go over the flow of data and what happens through each component and layer of our system.

Login – This is where the user enters their browser on the client side and enters their information. The client component send a request to the login server which checks the information to validate it, and send the request back in the form of a JSON. The client side then stores this object and uses it for future interactions.

Website Entry – The user then enters the site through their account and requests access to their portfolio. Through validation and authentication, the server then communicates the database through the ODM to retrieve the requested data. This is returned to the frontend for the user to view.

Portfolio Browsing – The user then utilizes the websites core functionalities, looking for new destinations and commodities. This component (Travel portfolio) then sends a request to the server to return new destinations from the database. This is then returned to the frontend component and displays results in on the interface
