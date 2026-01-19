const express = require('express');
const path = require('path');
const { CALENDARS } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API: Get calendar configuration (without exposing full URLs to client)
app.get('/api/calendars', (req, res) => {
    const calendarInfo = CALENDARS.map(({ id, name, color }) => ({ id, name, color }));
    res.json(calendarInfo);
});

// API: Fetch ICS data for a specific calendar
app.get('/api/calendar/:id', async (req, res) => {
    const calendar = CALENDARS.find(c => c.id === req.params.id);

    if (!calendar) {
        return res.status(404).json({ error: 'Calendar not found' });
    }

    try {
        const response = await fetch(calendar.url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const icsData = await response.text();
        res.set('Content-Type', 'text/calendar');
        res.send(icsData);
    } catch (error) {
        console.error(`Failed to fetch ${calendar.name}:`, error.message);
        res.status(500).json({ error: `Failed to fetch calendar: ${error.message}` });
    }
});

// API: Fetch all calendars at once
app.get('/api/calendars/all', async (req, res) => {
    const results = await Promise.all(
        CALENDARS.map(async (calendar) => {
            try {
                const response = await fetch(calendar.url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const icsData = await response.text();
                return {
                    id: calendar.id,
                    name: calendar.name,
                    color: calendar.color,
                    data: icsData,
                    error: null
                };
            } catch (error) {
                return {
                    id: calendar.id,
                    name: calendar.name,
                    color: calendar.color,
                    data: null,
                    error: error.message
                };
            }
        })
    );
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Oxford EMBA Calendar Overlay running at http://localhost:${PORT}`);
    console.log(`Loaded ${CALENDARS.length} calendar(s): ${CALENDARS.map(c => c.name).join(', ')}`);
});
