# Family Budget Tracker (Web Lite)

This is a web-only, lite version of the Family Budget Tracker. It is designed to run in the browser with zero native dependencies and no expo-sqlite issues.

## Features
- 100% web-based: works in any modern browser
- Uses IndexedDB via localforage for persistent storage
- No native code, no expo-sqlite, no mobile/Electron support

## Getting Started

1. Clone the repository and switch to the web-lite branch:
   ```sh
   git clone https://github.com/onepoint10/family-budget-tracker.git
   cd family-budget-tracker
   git checkout web-lite
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the web app:
   ```sh
   npm run web
   ```

## Database
- All data is stored in the browser using IndexedDB (via localforage).
- No SQLite or native modules are used.

## Limitations
- This version does not support iOS/Android/Electron.
- For mobile or desktop support, use the main branch and follow platform-specific setup.

## License
MIT
