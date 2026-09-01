 # Software Engineer Portfolio
 
 A modern software engineer portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.
 
 This repository now contains the first version of the portfolio application, along with planning documents for future design and content work.
 
 ## Stack
 
 - Next.js 16
 - React 19
 - TypeScript
 - Tailwind CSS v4
 - Framer Motion
 
 ## Project Structure
 
 ```text
 app/
 components/
 lib/
 public/
 PORTFOLIO_WEBSITE_PLAN.md
 PORTFOLIO_WEBSITE_AI_BUILD_INSTRUCTIONS.md
 ```
 
 ## Prerequisites
 
 - Node.js
 - npm
 
 The current project was validated with npm and a modern Node runtime.
 
 ## Install
 
 From the repository root:
 
 ```bash
 npm install
 ```
 
 ## Run Locally
 
 Start the development server:
 
 ```bash
 npm run dev
 ```
 
 Then open:
 
 ```text
 http://localhost:3000
 ```
 
 ## Build for Production
 
 Create an optimized production build:
 
 ```bash
 npm run build
 ```
 
 Start the production server locally after building:
 
 ```bash
 npm run start
 ```
 
 ## Lint
 
 Run ESLint:
 
 ```bash
 npm run lint
 ```
 
 ## Current Pages
 
 - Home
 - Projects
 - About
 - Experience
 - Contact
 
 ## Content Updates
 
The migrated portfolio content currently lives in:
 
 - `lib/site-data.ts`
 
Update that file to edit project details, work history, skills, and contact links.
 
 ## Planning Docs
 
 - `PORTFOLIO_WEBSITE_PLAN.md` contains the overall product and content plan
 - `PORTFOLIO_WEBSITE_AI_BUILD_INSTRUCTIONS.md` contains the design and implementation brief for version 1
 
 ## Next Steps
 
 - Replace placeholder bio, projects, and links
 - Add project detail pages or MDX case studies
 - Deploy to Vercel once content is ready
