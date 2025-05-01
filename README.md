# SparkleHood

A modern web application built with React, TypeScript, and Vite, featuring a beautiful UI powered by Tailwind CSS.

## Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Code Quality**: ESLint

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

git clone [your-repository-url]
cd sparklehood


2. Install dependencies:

npm install


3. Start the development server:

npm run dev


The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
sparklehood/
├── src/              # Source files
├── public/           # Static assets
├── index.html        # Entry HTML file
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Project dependencies and scripts
```

## Design Decisions

- **Vite**: Chosen for its fast development server and optimized build process
- **Tailwind CSS**: Selected for rapid UI development and consistent design system
- **TypeScript**: Implemented for better type safety and developer experience
- **ESLint**: Configured for maintaining code quality and consistency

## Development

The project uses modern development practices and tools:
- Hot Module Replacement (HMR) for instant feedback during development
- PostCSS for processing CSS
- ESLint for code linting
- TypeScript for type checking

## Building for Production

To create a production build:

npm run build


The build output will be in the `dist` directory.

