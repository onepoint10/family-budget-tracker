# Family Budget Tracker

A modern, cross-platform application for convenient and fast management of family expenses and income. Built with React Native (Expo) for mobile/web and Electron for desktop, it features a clean, intuitive interface and all the tools you need to stay on top of your finances.

## Features

- 📱 Multi-platform: Android, iOS, Web, Windows, macOS, Linux
- 💸 Track income and expenses with categories
- 📊 Visualize spending with charts and reports
- 🏷️ Custom categories for income and expenses
- 🔄 Import/export data for backup and sharing
- 🌙 Light and dark mode support
- 🔒 Local data storage (SQLite, IndexedDB, or sqlite3 depending on platform)
- 🚀 Automated builds and releases via GitHub Actions

## Database Support by Platform

- **iOS/Android:** Uses expo-sqlite (native SQLite database)
- **Web:** Uses IndexedDB via [localforage](https://github.com/localForage/localForage)
- **Electron/Desktop:** Uses [sqlite3](https://www.npmjs.com/package/sqlite3) Node.js module

> All database access is routed through platform-specific files in `src/utils/`:
> - `crossPlatformDb.native.ts` (expo-sqlite)
> - `crossPlatformDb.web.ts` (localforage)
> - `crossPlatformDb.electron.ts` (sqlite3)

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
3. For web support, install localforage:
   ```sh
   npm install localforage
   ```
4. For Electron/desktop support, install sqlite3:
   ```sh
   npm install sqlite3
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
