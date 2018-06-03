module.exports = {
  "preset": "jest-puppeteer",
    "projects": [
      {
        "displayName": "unit",
        "testEnvironment": "jsdom"
      },
      {
        "displayName": "integration",
        "preset": "jest-puppeteer",
        "testMatch": ["<rootDir>/**/*.it.js"]
      }
    ]  
}  