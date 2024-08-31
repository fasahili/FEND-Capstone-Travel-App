# FEND-Capstone-Travel-App

## Overview

The Travel Planner App enables users to effectively plan their trips. It provides essential trip-related information like destination images and weather forecasts by integrating with various APIs.

## Key Features

- **Trip Addition**: Users can add trips by specifying a destination and a departure date.
- **Destination Imagery**: Retrieves and displays images from Pixabay.
- **Weather Forecast**: Shows weather information from Weatherbit for the dates of travel.
- **Trip Management**: Displays a list of all planned trips with options to delete any trip.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **APIs**: GeoNames, Pixabay, Weatherbit
- **Build Tool**: Webpack
- **HTTP Client**: Axios

## API

- **GeoNames API**
- **Pixabay API**
- **Weatherbit API**

## Running the Application

Follow these steps to get your application up and running:

### 1. Start the Development Server

Run the following command to start the development server and compile your application using Webpack. This server will automatically recompile your app as you make changes to the code.

```bash
npm run build-dev
```

### 2. Building for Production

When you are ready to build the production version of your app, use the following command. This will create optimized files in the dist folder, making your application ready for deployment.

```bash
npm run build-prod
```

### 3. Start the Server

To serve your production-ready application on a local server, run:

```bash
npm run start
```
