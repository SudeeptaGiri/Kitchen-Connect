# Kitchen Connect

A social media platform for food enthusiasts to share and discover recipes.

## Installation and Setup

To set up this project locally, follow the steps below:

### Prerequisites

Ensure you have the following installed on your machine:
* **Node.js** (for the client)
* **Maven** (for the server) 
* **Java 17 or higher** (for the Spring Boot application)

### Project Structure

The project consists of two main folders:
1. `client` - The front-end React application
2. `server` - The back-end Spring Boot application

### Steps to Run the Project

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```
### Set Up the Client (Frontend)
Navigate to the client folder and install the required dependencies:
```bash
cd client
npm install
```
Start the React application:
```bash
npm start
```
The React app will be available at http://localhost:3000.
### 3. Set Up the Server (Backend)
Navigate to the server folder and build the application:
```bash
cd server
mvn clean install
```
### Run the Spring Boot application:
```bash
# Locate and run the main application file in your IDE
# OR use the following Maven command:
mvn spring-boot:run
```
The back-end server will run on http://localhost:8080.
Notes

Ensure that the client and server folders are running simultaneously for the application to function properly
Update any necessary environment variables or configurations if required
