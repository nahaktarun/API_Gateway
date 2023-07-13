# Node.js MySQL Flight Booking System - Microservice Architecture

This project is a Flight Booking System built using Node.js and MySQL, following a microservice architecture. It consists of multiple microservices such as authentication, API gateway, booking service, flight and search service, and reminder service. The communication between the microservices is facilitated by RabbitMQ, which acts as the message queue.

## Microservices

1. [Authentication Service](https://github.com/nahaktarun/AuthService)

   - Responsible for user authentication and authorization.
   - Manages user accounts, login, and registration.
   - Generates and verifies JSON Web Tokens (JWT) for secure API access.

2. [API Gateway](https://github.com/nahaktarun/API_Gateway)

   - Serves as the entry point for external requests to the system.
   - Provides a unified API interface for clients to communicate with various microservices.
   - Performs request validation, rate limiting, and routing to the appropriate microservice.

3. [Booking Service](https://github.com/nahaktarun/BookingService)

   - Handles flight bookings and related operations.
   - Allows users to search for available flights, select seats, and make reservations.
   - Manages booking details and communicates with the flight and search service.

4. [Flight and Search Service](https://github.com/nahaktarun/flightsAndSearchService)

   - Manages flight information, including available seats, prices, and schedules.
   - Provides search functionality for users to find flights based on criteria such as origin, destination, and date.
   - Sends notifications to the booking service about flight availability and updates.

5. [Reminder Service](https://github.com/nahaktarun/ReminderService)

   - Sends reminders and notifications to users about upcoming flights, check-in details, and booking updates.
   - Integrates with external notification systems (e.g., email, SMS) to deliver messages.

# API Gateway

The API Gateway serves as the entry point for external requests to the Flight Booking System and provides a unified API interface for clients to communicate with the microservices.

## API Endpoints

The API Gateway acts as a proxy and routes requests to the appropriate microservices based on the endpoint URL.

Please refer to the individual microservices' documentation for detailed information about the available API endpoints and their functionality.

## Request Validation and Rate Limiting

The API Gateway performs request validation and rate limiting to ensure the security and stability of the system. It validates incoming requests, checks for proper authentication (if required), and enforces rate limits to prevent abuse and maintain performance.

## Setup and Configuration

To set up and run the API Gateway, follow these steps:

1. Install Node.js if it is not already installed.

2. Clone the repository:

   ```
   git clone https://github.com/your-username/api-gateway.git
   ```

3. Install the dependencies:

   ```
   cd api-gateway
   npm install
   ```

4. Configure the API routing rules in the configuration file (`config.js`) of the API Gateway. Define the mapping of API endpoints to the respective microservices.

5. Start the API Gateway:

   ```
   npm start
   ```

The API Gateway should now be running, acting as the entry point for API requests to the Flight Booking System.

## Contributing

Contributions to the API Gateway are welcome. If you find any issues or want to add new features, please open an issue or submit a pull request. Ensure that your code follows the established coding style and is well-documented.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to acknowledge the following resources and libraries that contributed to the development of the API Gateway:

- Node.js: https://nodejs.org/
- Other dependencies mentioned in the `package.json` file.
