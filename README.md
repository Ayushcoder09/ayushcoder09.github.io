# Ayush's Portfolio



[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4+-yellow?logo=vite)](https://vitejs.dev/)

> **Live Demo:** [ayushcoder09.github.io](https://ayushcoder09.github.io/)

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [SEO & Performance](#seo--performance)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Features

- **Modern UI/UX**: Built with shadcn/ui and Lucide icons for a clean, consistent, and responsive design.
- **Section Highlights**: Hero, Skills, Projects, Experience, Education, Certificates (with verification links and ribbons), Achievements, Contact, and Footer.
- **Contact Form**: Fully functional, sends messages via EmailJS with user feedback and validation.
- **Certificate Verification**: Each certificate card includes a green "CERTIFIED" ribbon and an external link for verification.
- **Direct Resume Download**: Download Resume button in the header triggers a direct download.
- **Accessibility & Responsiveness**: Designed for accessibility and works well on all devices.
- **SEO Optimized**: Includes meta tags for description, keywords, Open Graph, and Twitter cards for better search and social sharing.
- **Performance**: Lucide icons and heavy components are lazy loaded for faster initial load and better Lighthouse scores.
- **Dark/Light Mode**: Toggle between dark and light themes.

---

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayushcoder09/ayushcoder09.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization
- Update your information, skills, projects, certificates, and achievements in the respective files in `src/components/`.
- To enable the contact form, set up your [EmailJS](https://www.emailjs.com/) account and update the service, template, and user IDs in `Contact.jsx`.
- Replace `public/developer.svg` with your own favicon or logo if desired.

---

## SEO & Performance
- **SEO**: Meta tags for description, keywords, Open Graph, and Twitter cards are included in `index.html`.
- **Lazy Loading**: Lucide icons and large components are lazy loaded using React's `lazy` and `Suspense`.
- **Optimized Assets**: SVGs and images are optimized for fast loading.
- **Responsive Design**: Works well on all screen sizes and devices.

---

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/)
- [emailjs-com](https://www.emailjs.com/)

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## Contact

For questions, feedback, or collaboration:
- **Email:** [ayushmaheshwari09.am.am@gmail.com](mailto:ayushmaheshwari09.am.am@gmail.com)
- **GitHub:** [@ayushcoder09](https://github.com/ayushcoder09)

---

## License

© Ayush Maheshwari. Open to remote and hybrid full stack opportunities.
