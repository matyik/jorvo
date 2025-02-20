# Jorvo: AI-Powered Video Creation

Welcome to **Jorvo**, an open-source AI-powered video editor built on **Remotion.js**. Jorvo transforms your ideas into stunning videos in seconds, combining the flexibility of programmatic video generation with AI assistance.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [FAQ](#faq)

## Features

- **AI-powered video generation** – Convert text prompts into fully rendered videos.
- **Built on Remotion.js** – Leverage React-based video rendering for dynamic and customizable outputs.
- **AI-assisted editing** – Enhance or modify existing projects with AI-driven automation.
- **Customizable templates** – Start with prebuilt templates or generate your own.
- **Render previews in-browser** – Instantly see changes without waiting for long render times.
- **Export in various formats** – Generate high-quality MP4s, GIFs, or other video formats.

## Setup

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/en/download/)** (LTS version recommended)
- **pnpm (package manager)**:
  ```bash
  npm install -g pnpm
  ```
- **FFmpeg** (for video processing, if needed):
  - Windows: Install via [choco](https://chocolatey.org/install) (`choco install ffmpeg`)
  - macOS: Install via [Homebrew](https://brew.sh/) (`brew install ffmpeg`)
  - Linux: Install via package manager (`sudo apt install ffmpeg`)

### Installing Dependencies

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/jorvo.git
cd jorvo
pnpm install
```

## Running the Application

### Development Mode

To start Jorvo in development mode:

```bash
pnpm run dev
```

This will launch the development server, allowing you to test video generation in real-time.

### Production Build

To build and run Jorvo in production mode:

```bash
pnpm run build
pnpm run start
```

## Available Scripts

- **`pnpm run dev`** – Starts the development server.
- **`pnpm run build`** – Builds the project for production.
- **`pnpm run start`** – Runs the production build locally.
- **`pnpm run preview`** – Previews the production build.
- **`pnpm run test`** – Runs tests.
- **`pnpm run lint`** – Lints the code.
- **`pnpm run render`** – Renders a video output.

## Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit and push your changes (`git commit -m "Add feature" && git push origin feature-name`).
5. Open a pull request.

## Roadmap

Planned features:

- ✅ AI-enhanced editing capabilities
- ✅ Template marketplace
- ✅ API access for automated video generation
- ⬜ Integration with cloud rendering services
- ⬜ Collaboration tools for team-based editing

## FAQ

### How does Jorvo generate videos?

Jorvo uses AI to interpret prompts and generate dynamic videos using Remotion.js.

### Can I customize the video output?

Yes! You can modify templates, add assets, and tweak parameters to fit your needs.

### Does Jorvo support real-time video previews?

Yes! You can see changes immediately before rendering the final output.

---

🚀 Get started with Jorvo today and bring your video ideas to life effortlessly!
