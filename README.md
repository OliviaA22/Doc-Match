# Doc-Match

**User-to-Doctor Match Web Application**

<img width="288" alt="Screenshot 2023-06-08 001156" src="https://github.com/OliviaA22/DPD/assets/94966149/90ca2dad-f1e6-4d5f-a0c8-754d117ec50e">

1. Project Title and Description:
   - **Project Title**: DocMatch - Find Nearby Doctors
   - **Description**: DocMatch is a web application that allows users to find nearby doctors based on their location and preferred language. It provides a convenient way for users to search for doctors located in close proximity with whom they can seamlessly communicate with.

2. Features and Functionality:
   - **Key Features**:
     - Search for doctors based on language and specialization.
     - Filter search results by location.
     - Display detailed profiles of doctors, including contact information and appointment booking options.
     - Utilize geolocation and distance calculations to find doctors near the user's location.




3. Technologies Used:
   - This project utilizes the following technologies:
     - Frontend: React, HTML, CSS, JavaScript, TypeScript
     - Backend: Node.js, JavaScript, TypeScript
     - Database: MongoDB
     - Libraries and APIs: Mongoose, Axios, Positionstack API

4. Installation Instructions:
   - **Prerequisites**: Make sure you have Node.js and MongoDB installed on your machine for the backend to successfully operate and connect.
   - **Setup Steps**:
     1. Clone the repository: `git clone <repository-url>`
     2. Navigate to the project directory: `cd DocMatch`
     3. Navigate to the specific directory: `cd DocMatch`
     4. Install the required dependencies: `npm install`
     5. To run the backend development server: `npm run dev`
     6. To start the development server (frontend): `npm start`

5. Database Setup:
   - The web application uses MongoDB, a NoSQL database, to store doctor, user, and language information.
   - The database is connected and queried using Mongoose, a MongoDB object modeling tool designed for Node.js.
   - The necessary schemas and models are defined in the backend code to interact with the MongoDB database.

6. Geolocation and Distance Calculation:
   - The Positionstack API is used to calculate geolocation and distance between the user and the doctors.
   - The API provides geocoding services to convert location information into latitude and longitude coordinates.
   - These coordinates are then used to calculate the distance between the user and each doctor in the search results.
   - The distance calculation helps in sorting and displaying the doctors based on their proximity to the user's location.

7. Usage:
   - **Searching for Doctors**:
     1. Select your preferred language from the dropdown menu.
     2. Enter your location and ward details in the corresponding input fields.
     3. Click the "Search" button to find doctors matching your criteria.
     4. The search results will be displayed with detailed profiles of each doctor, including their contact information and specialization.
     5. The search results are sorted based on proximity to the user's location, utilizing the geolocation and distance calculation provided by the Positionstack API.

8. Development Process:
   - The project follows an agile development process, with iterative development and frequent feedback loops.
   - User stories and sprints were used to plan and prioritize features and tasks.
   - Regular meetings and communication channels were established to ensure collaboration and coordination among team members.
   - Challenges faced during development, such as data modeling, API integration, and geolocation implementation, were addressed through research, experimentation, and collaboration.

9. Contributing:
   - Contributions to the project are welcome! If you want to contribute, please follow these guidelines:
     - Fork the repository and create a new branch for your feature or bug fix

.
     - Ensure that your code follows the project's coding style and conventions.
     - Submit a pull request detailing your changes and any additional information.

10. License:
    - This project is licensed under the MIT License. You can find the full license text in the `LICENSE` file.

11. Acknowledgments:
    - We would like to thank the open-source community for their valuable contributions and the documentation resources that helped in the development of this project.

12. Contact Information:
    - For any questions, suggestions, or issues, please feel free to reach out to us at [email protected] or visit our GitHub repository at [link-to-repo].

Remember to update the descriptions with any specific details or instructions related to your project.


3. Technologies Used:
   - This project utilizes the following technologies:
     - Frontend: React, HTML, CSS, JavaScript, TypeScript
     - Backend: Express.js, Node.js, JavaScript, TypeScript
     - Database: MongoDB
     - Libraries and APIs: Mongoose, Axios, Positionstack API

4. Installation Instructions:
   - **Prerequisites**: Make sure you have Node.js and MongoDB installed on your machine.
   - **Setup Steps**:
     1. Clone the repository: `git clone <repository-url>`
     2. Navigate to the project directory: `cd DocMatch`
     3. Install the required dependencies: `npm install`
     4. Set up the MongoDB database and update the connection URL in the configuration file.
     5. Obtain an API key from the Positionstack API and update the configuration file with the API key.
     6. Start the development server: `npm start`

5. Database Setup:
   - The web application uses MongoDB, a NoSQL database, to store doctor, user, and language information.
   - The database is connected and queried using Mongoose, a MongoDB object modeling tool designed for Node.js.
   - The necessary schemas and models are defined in the backend code to interact with the MongoDB database.

6. Geolocation and Distance Calculation:
   - The Positionstack API is used to calculate geolocation and distance between the user and the doctors.
   - The API provides geocoding services to convert location information into latitude and longitude coordinates.
   - These coordinates are then used to calculate the distance between the user and each doctor in the search results.
   - The distance calculation helps in sorting and displaying the doctors based on their proximity to the user's location.

7. Usage:
   - **Searching for Doctors**:
     1. Select your preferred language from the dropdown menu.
     2. Enter your location and ward details in the corresponding input fields.
     3. Click the "Search" button to find doctors matching your criteria.
     4. The search results will be displayed with detailed profiles of each doctor, including their contact information and specialization.
     5. The search results are sorted based on proximity to the user's location, utilizing the geolocation and distance calculation provided by the Positionstack API.

8. Development Process:
   - The project follows an agile development process, with iterative development and frequent feedback loops.
   - User stories and sprints were used to plan and prioritize features and tasks.
   - Regular meetings and communication channels were established to ensure collaboration and coordination among team members.
   - Challenges faced during development, such as data modeling, API integration, and geolocation implementation, were addressed through research, experimentation, and collaboration.

9. Contributing:
   - Contributions to the project are welcome! If you want to contribute, please follow these guidelines:
     - Fork the repository and create a new branch for your feature or bug fix

.
     - Ensure that your code follows the project's coding style and conventions.
     - Submit a pull request detailing your changes and any additional information.

10. License:
    - This project is licensed under the MIT License. You can find the full license text in the `LICENSE` file.

11. Acknowledgments:
    - We would like to thank the open-source community for their valuable contributions and the documentation resources that helped in the development of this project.

12. Contact Information:
    - For any questions, suggestions, or issues, please feel free to reach out to us at [email protected] or visit our GitHub repository at [link-to-repo].

Remember to update the descriptions with any specific details or instructions related to your project.
