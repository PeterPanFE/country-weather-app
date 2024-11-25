# Application Architecture

The architecture of the single-page application (SPA) follows a modular and scalable design based on modern React development practices, leveraging GraphQL for data fetching and RESTful APIs for weather data. The application has the following core architectural layers:

## 1. Frontend Layer
### Technology Stack: 
React (with TypeScript)

### Structure:
Component-based Architecture: The UI is divided into reusable components (e.g., CountryCard, CountryContent, CountryInfo and WeatherInfo, Header, SearchCountries and SortCountries for consistency and ease of maintenance.
State Management: Local component state is used for small, isolated updates (e.g., input fields), while global state needs are managed by GraphQL cache (Apollo Client), avoiding unnecessary complexity.
Styling: CSS modules and component-specific styles ensure scoped and modular design, enabling easy theme updates or design refactors.
Benefits:

For Developers: Component reusability and strong type safety (via TypeScript) reduce bugs and improve development speed.
For Stakeholders: Provides a polished, responsive, and scalable user interface that is easier to maintain and expand over time.


## 2. Data Fetching Layer
### Technology Stack:
Apollo Client (GraphQL) and Axios (RESTful API)

### Structure:
GraphQL: The Countries GraphQL API is consumed for country data. Queries and fragments fetch only the required data, reducing over-fetching and improving efficiency.
REST API: Weather data for selected countries is fetched using the OpenWeather API via Axios.
Error Handling: Comprehensive error handling for network or API failures ensures a robust user experience.
Benefits:

For Developers:
GraphQL allows precise querying, making it easier to manage changing requirements.
Apollo Client's cache management minimizes redundant network requests.
For Stakeholders: Optimized data fetching results in better performance and a responsive app, enhancing user satisfaction.


## 3. Search, Filter, and Sort Functionality
### Implementation:
Search: Filters the country list by name, capital, or region using efficient string operations.
Sort: Sorts countries dynamically by attributes like name, capital, or region.

### Benefits:
For Users: Improves discoverability and efficiency by offering intuitive filtering and sorting options.
For Stakeholders: These features ensure a competitive, user-friendly application.


## 4. Responsiveness and UX Layer
### Implementation:
CSS is used for responsive design (e.g., flexbox, CSS media queries).
Components like CountryList are scrollable, ensuring usability on small screens.
Semantic HTML improves accessibility.

### Benefits:
For Users: The app works seamlessly across devices, improving reach and usability.
For Stakeholders: Enhanced UX increases user retention and satisfaction.


## 5. Error Handling Layer
### Implementation:
An ErrorBoundary component ensures graceful degradation in case of unexpected issues.
API error handling shows user-friendly messages (e.g., "Unable to fetch data").

### Benefits:
For Developers: Simplifies debugging and ensures error scenarios are managed proactively.
For Stakeholders: Provides a robust experience, reducing user frustration.


## 6. Build and Deployment
### Technology Stack: 
Vite for fast builds, optimized for React.

### Structure:
Build Optimization: Vite provides fast dev-server start-up times and optimized production builds.
Deployment: The app can be easily hosted on services like Vercel or Netlify for continuous deployment.
Benefits:

For Developers: Quick iterations during development and seamless CI/CD integration.
For Stakeholders: Reduces time-to-market and ensures the app remains future-proof.

## Key Benefits of the Architecture
### For End Users:
Fast and Reliable: Optimized data fetching and caching ensure snappy performance.
User-friendly: Intuitive UI, search, filter, and sort features enhance user experience.
Responsive: Works seamlessly on all device types, from desktops to smartphones.

### For Developers:
Scalable and Modular: Component-driven design and GraphQL queries simplify feature addition and maintenance.
Type-safe: TypeScript reduces runtime errors, ensuring higher code quality.
Efficient Debugging: Clear error handling mechanisms streamline debugging.
For Business Stakeholders:

Scalable Design: The app is ready to integrate more features (e.g., user accounts, analytics).
Cost-effective: Optimized build tools (Vite) and deployment pipelines minimize hosting and operational costs.
Competitive Advantage: A polished, responsive app with rich features appeals to a global audience.
Why These Choices Matter
The architecture balances performance, maintainability, and user experience while being cost-effective and scalable. By leveraging industry best practices and modern tools, this application is designed to meet both current needs and future demands effectively.



# Run the application
This app can be run in node v22, so make sure that you are running this node version:
``nvm use v22``.
Or if you don't have this version installed:

``nvm install v22``.
``nvm use v22``.

Then:

``npm install``.
``npm run dev``.
