# CLAUDE.md - Oxford EMBA Calendar Overlay

This file provides guidance for Claude Code when working on this codebase.

## Project Overview

Oxford EMBA Calendar Overlay is a web application that displays and overlays multiple ICS calendar feeds from Oxford EMBA cohorts (J26, S24, S25, etc.). It helps identify scheduling conflicts across different cohort calendars.

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Calendar Library**: FullCalendar 6.x
- **ICS Parsing**: ical.js
- **No build system** - Plain files served directly

## Project Structure

```
oxford-emba-calendar-overlay/
├── server.js           # Express server - API routes and static file serving
├── config.js           # Calendar configuration (add new calendars here)
├── package.json        # Dependencies and scripts
├── public/
│   └── index.html      # Frontend application (single file)
└── .claude/
    └── skills/
        └── frontend-design.md  # UI design guidelines
```

## Adding New Calendars

Edit `config.js` and add a new entry to the CALENDARS array:

```javascript
{
    id: 'j27',           // Unique identifier (lowercase)
    name: 'J27',         // Display name
    url: 'https://canvas.sbs.ox.ac.uk/feeds/calendars/user_XXXXX.ics',
    color: '#fd7e14'     // Hex color for calendar events
}
```

## Available Scripts

```bash
npm install     # Install dependencies
npm start       # Start production server
npm run dev     # Start development server with auto-reload
```

## API Endpoints

- `GET /api/calendars` - Returns calendar metadata (id, name, color)
- `GET /api/calendar/:id` - Returns ICS data for a specific calendar
- `GET /api/calendars/all` - Returns all calendars with their ICS data

## Key Features

1. **Calendar Display** - Monthly, weekly, daily, and list views via FullCalendar
2. **Multi-Calendar Overlay** - Events from all calendars displayed together
3. **Legend Toggle** - Click calendar names to show/hide
4. **Overlap Detection** - Finds events from different calendars that conflict
5. **Overlap Navigation** - Jump between overlapping events with prev/next

## Code Style

- **CSS**: Use CSS custom properties for colors and spacing
- **JavaScript**: ES6+ features, async/await for promises
- **HTML**: Semantic elements, accessibility considerations
- **Comments**: Document complex logic, especially overlap detection

## UI Guidelines

See `.claude/skills/frontend-design.md` for detailed design system including:
- Color palette (Oxford Blue primary, Teal accent)
- Typography scale
- Component patterns (buttons, cards, badges)
- Animation patterns
- Responsive breakpoints

## Deployment

The app is designed for easy deployment:

**Railway/Render/Fly.io**: Push to GitHub, connect repo - auto-detects Node.js

**Heroku**:
```bash
heroku create oxford-emba-calendar
git push heroku main
```

**Docker** (if needed):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Security Notes

- Calendar URLs contain user tokens - keep `config.js` private
- Don't commit actual calendar URLs to public repositories
- Consider using environment variables for production
