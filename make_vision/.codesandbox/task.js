{
  // These tasks will run in order when initializing your CodeSandbox project.
  "setupTasks": [
    {
      "name": "Install Dependencies",
      "command": "npm install"
    }
  ],

  // These tasks can be run from CodeSandbox. Running one will open a log in the app.
  "tasks": {
    "dev": {
      "name": "dev",
      "command": "npm run dev",
      "runAtStart": true,
      "preview": {
        "port": 3000
      }
    },
    "build": {
      "name": "build",
      "command": "npm run build"
    },
    "start": {
      "name": "start",
      "command": "npm run start"
    },
    "lint": {
      "name": "lint",
      "command": "npm run lint"
    }
  }
}
