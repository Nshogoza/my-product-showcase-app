# Product Catalog App 🛍️

A React Native mobile application built with Expo that displays a scrollable product catalog with "Add to Cart" functionality. Features a clean, modern UI with product listings including names, prices, and shipping information.

## Features

- ✅ Scrollable product list with smooth scrolling
- 🛒 Interactive "Add to Cart" buttons
- 📱 Responsive design for mobile devices
- 🎨 Modern UI with clean styling
- 💰 Product pricing and shipping information
- 🔄 Cross-platform (iOS, Android, Web)

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Expo Router** - File-based routing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

### Running the App

In the output, you'll find options to open the app in:

- **Web Browser** - Press `w` or run `npm run web`
- **Android Emulator** - Press `a` or run `npm run android`
- **iOS Simulator** - Press `i` or run `npm run ios`
- **Expo Go** - Scan QR code with Expo Go app

## Project Structure

```
app/
├── (tabs)/
│   ├── index.tsx          # Main product catalog screen
│   └── explore.tsx        # Secondary screen
├── _layout.tsx            # Root layout
└── modal.tsx              # Modal component
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
