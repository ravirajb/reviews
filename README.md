# Getting Started with Movie Reviews

A modern, responsive movie review website built with React and Chakra UI.

## Features

- Dark mode by default with theme switching
- Responsive design for all screen sizes
- Movie cards with ratings and genres
- Horizontal carousels for movie categories
- Language-based movie categorization
- Search functionality
- Static site generation ready
- SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

To deploy to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Google Analytics Setup

To add Google Analytics:

1. Create a `.env` file in the root directory
2. Add your GA Measurement ID:
   ```
   REACT_APP_GA_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
   ```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── theme/          # Chakra UI theme configuration
├── data/           # Static data files
├── utils/          # Utility functions
└── types/          # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
