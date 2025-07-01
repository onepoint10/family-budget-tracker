# Family Budget Tracker

A modern, cross-platform application for convenient and fast management of family expenses and income. Built with React Native (Expo) for mobile/web and Electron for desktop, it features a clean, intuitive interface and all the tools you need to stay on top of your finances.

## Features

- 📱 Multi-platform: Android, iOS, Web, Windows, macOS, Linux
- 💸 Track income and expenses with categories
- 📊 Visualize spending with charts and reports
- 🏷️ Custom categories for income and expenses
- 🔄 Import/export data for backup and sharing
- 🌙 Light and dark mode support
- 🔒 Local data storage (SQLite)
- 🚀 Automated builds and releases via GitHub Actions

## Screenshots

> _Add screenshots here after your first build!_

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/onepoint10/family-budget-tracker.git
   cd family-budget-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

#### Mobile (Expo Go)
```sh
npm start
```
Scan the QR code with Expo Go on your phone.

#### Web
```sh
npm run web
```

#### Desktop (Electron)
```sh
npm run electron
```

### Building for Production

- **Mobile:** Use [EAS Build](https://docs.expo.dev/build/introduction/) for Android/iOS binaries
- **Desktop:**
  ```sh
  npm run build-electron
  ```
  Installers will be in the `dist/` folder.

### Automated Releases

When you push a tag like `v1.0.0` to GitHub, the app will be built for all platforms and release assets will be attached automatically.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
