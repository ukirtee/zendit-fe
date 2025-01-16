# WTG Task Manager Frontend

## Overview

This is the frontend implementation for the WTG Task Manager project. The application provides an intuitive interface for interacting with APIs to manage WTGs, view tasks, and update task forecasts. The frontend is built using React and styled with Tailwind CSS.

## Features

- View a list of WTGs in a tabular format.
- Navigate to view all tasks associated with a selected WTG.
- Update forecast details for a specific task.
- View a summary of a WTG including planned hours, actual hours, and variance statistics.

## Prerequisites

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ukirtee/zendit-fe.git
   cd zendit-fe
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

4. **Backend Integration**:

   - Ensure the backend APIs are running.
   - Update the API base URL in `axios` requests as per your backend setup.

## Project Structure

- **`src/`**: Contains the main application code.
  - **`components/`**: Reusable React components.
  - **`App.js`**: Main entry point for the application.
  - **`index.css`**: Tailwind CSS configuration.

## Key Components

1. **WTGList**: Displays a list of WTGs with action buttons for viewing tasks and summaries.
2. **TaskList**: Shows tasks for a selected WTG, including task details and variance.
3. **UpdateTask**: Provides a form to update the forecast date and planned hours of a task.

## Styling

Tailwind CSS is used for styling. To customize the theme:

- Modify the `tailwind.config.js` file.
- Add custom classes in the `index.css` file if needed.

## Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.

For any questions or issues, feel free to contact me. Thank you!

