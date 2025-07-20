# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ethan He built with React + TypeScript + Vite + Tailwind CSS. The site features a unique asymmetric grid layout and is deployed to GitHub Pages at `https://ethanlhe.github.io/ehelol/`.

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Routing Structure
- `/` - Main landing page with asymmetric grid layout
- `/portfolio` - Detailed project showcase  
- `/codelab` - CodeLab content
- `/fun-stuff` - Interactive projects and simulations
- `/*` - 404 page

### Component Organization
- `src/components/ui/` - shadcn/ui component library (40+ components)
- `src/components/[feature]/` - Feature-specific components (about, projects, contact, etc.)
- `src/pages/` - Route-level page components
- `src/context/` - React contexts (theme management)

### Theme System
The site uses a custom light/dark theme system with:
- Theme context in `src/context/ThemeContext.tsx`
- CSS custom properties for color variables
- localStorage persistence
- Document class manipulation (`dark` class on `<html>`)

### Layout Patterns

**Desktop Layout**: Asymmetric grid with precise positioning
- Large sections: `17.2rem × 17.2rem` 
- Small sections: `17.2rem × 8.5rem`
- Uses absolute positioning and CSS transforms for complex layouts

**Mobile Layout**: Stacked vertical layout
- All sections stack vertically with consistent spacing
- Responsive breakpoints at `md:` (768px)

## Key Technologies

- **Vite**: Build tool with base path `/ehelol/` for GitHub Pages
- **Tailwind CSS**: Utility-first styling with custom color scheme
- **shadcn/ui**: Complete component system using Radix UI
- **React Query**: Server state management
- **React Router**: Client-side routing with basename support

## Development Notes

### Path Configuration
- `@/` alias maps to `src/` directory
- Base URL configured for GitHub Pages deployment

### Component Patterns
- Most sections follow `[Feature]Section` naming convention
- Props include `theme` and `boxClasses` for consistent styling
- Tooltip integration using shadcn/ui components

### Styling Guidelines
- Use existing `boxClasses` pattern for consistent hover effects
- Color scheme: black/white with bright green (#4AFF4A) accents
- Typography: JetBrains Mono for headings, Inter for body text

### Interactive Features
When adding interactive elements:
- Place complex simulations in `/fun-stuff` page
- Use Canvas API for animations (see `src/components/particles/`)
- Ensure mobile responsiveness and theme compatibility

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions. The build process:
1. Runs `npm run build` 
2. Deploys `dist/` folder to `gh-pages` branch
3. Serves at the configured homepage URL

## Content Management

Projects are hardcoded in component files with:
- Project images in `public/images/`
- External links to Medium articles for detailed descriptions
- Technology tags and descriptions embedded in components