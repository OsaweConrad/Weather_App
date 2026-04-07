# Weather App Class Project Report

## Abstract

This project presents a modern, minimal weather application built with Next.js and React. The app demonstrates real-time data fetching from the OpenWeatherMap API, providing current weather information for any city. The design is inspired by Apple’s clean UI principles, using Phosphor icons and shadcn/ui components for a modern, accessible interface. This project serves as a practical example of integrating third-party APIs in web development, focusing on clarity, usability, and best practices in frontend engineering.

## Objectives

- Demonstrate how to fetch and display real-time data from an external API (OpenWeatherMap).
- Build a clean, user-friendly weather app using modern React (Next.js) practices.
- Apply minimal, Apple-inspired design principles without gradients or purple colors.
- Utilize open-source UI and icon libraries (shadcn/ui, Phosphor icons).
- Provide a hands-on example for students learning about API integration in web projects.
- Encourage best practices in code organization, error handling, and responsive design.

## Background

APIs (Application Programming Interfaces) are essential in modern software development, enabling applications to communicate and share data. The OpenWeatherMap API is a widely used service that provides weather data for any location worldwide. By integrating this API, students learn how to connect frontend applications to external data sources, handle asynchronous requests, and manage API keys securely.

## Technical Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript (if enabled), JavaScript
- **API:** OpenWeatherMap for real-time weather data
- **UI Libraries:** shadcn/ui for components, Phosphor icons for weather and UI symbols
- **Styling:** Tailwind CSS utility classes for minimal, responsive design
- **HTTP Client:** Axios for API requests

## Methodology

1. **Project Setup:**
   - Initialize a Next.js project and install dependencies (axios, phosphor-react, shadcn/ui).
   - Configure Tailwind CSS for utility-first styling.
2. **API Integration:**
   - Register and obtain an API key from OpenWeatherMap.
   - Store the API key in a .env file and expose it to the client using NEXT*PUBLIC* prefix.
   - Use Axios to fetch weather data based on user input (city name).
3. **UI Development:**
   - Build a single-page interface for city search and weather display.
   - Use shadcn/ui components for input and button elements.
   - Display weather data with Phosphor icons for visual clarity.
   - Apply Apple-inspired, minimal design principles: clean lines, neutral colors, generous spacing, and readable typography.
4. **Error Handling:**
   - Show user-friendly error messages for invalid city names or network issues.
   - Disable the search button while loading.
5. **Testing and Refinement:**
   - Test the app for usability, responsiveness, and error handling.
   - Refine the UI for clarity and accessibility.

## Code Structure

- `/app/weather-app.tsx`: Main React component handling state, API calls, and UI rendering.
- `/app/page.tsx`: Entry point, renders the WeatherApp component.
- `.env`: Stores the OpenWeatherMap API key securely.
- `package.json`: Lists dependencies and scripts.
- `tailwind.config.js` and `globals.css`: Tailwind CSS configuration and global styles.

## API Usage

- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Parameters:**
  - `q`: City name (user input)
  - `appid`: API key (from .env)
  - `units`: Metric (for Celsius)
- **Response:** JSON object with weather data (temperature, humidity, wind speed, description, etc.)
- **Error Handling:** If the city is not found, the app displays an error message.

## UI/UX Design

- **Design Principles:**
  - Minimal, Apple-inspired: neutral backgrounds, no gradients or purple, clear hierarchy.
  - Responsive layout for mobile and desktop.
  - Large, readable text and icons.
  - Simple, intuitive search interface.
- **Accessibility:**
  - Sufficient color contrast.
  - Keyboard-accessible input and button.
  - Clear error feedback.

## Testing

- **Manual Testing:**
  - Search for valid and invalid cities.
  - Check loading and error states.
  - Test on different screen sizes.
- **Potential Automated Tests:**
  - Unit tests for API call logic.
  - Integration tests for UI interactions.

## Results

- The app allows users to search for any city and view current weather conditions, including temperature, humidity, wind speed, and a weather icon.
- The interface is clean, responsive, and easy to use, with no gradients or purple colors.
- Real-time API integration is demonstrated, with error handling for invalid city names.

## Discussion

This project demonstrates the practical steps of integrating a third-party API into a modern web application. Students gain experience with asynchronous programming, state management, and UI design. The use of open-source libraries (shadcn/ui, Phosphor icons) shows how to leverage community resources for rapid development. The project can be extended with features like weather forecasts, geolocation, or persistent search history for further learning.

## Conclusion

This project successfully demonstrates how to integrate and display data from a third-party API in a modern web application. The minimal design and use of open-source libraries make it accessible and easy to understand for students. The app can be extended with additional features, such as forecasts or geolocation, for further learning.

## References

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Axios Documentation](https://axios-http.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
