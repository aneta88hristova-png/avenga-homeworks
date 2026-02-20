# JediArchives 📚

## Idea 💡

The Jedi Archives has long been forgotten, but that should not stop us from rebuilding this masterpiece of knowledge.
The JediArchives app is the first step to rebuilding the collective knowledge about the Star Wars universe. The app
should help any user that is interested in some Star Wars data to go through the archive and find what they are looking
for. A small step for the internet, but a huge step for Star Wars fans.

## Requirements 📃

The web page should be:

- Single page application
- There should be only one page
- The logo should show at the front of the page
- On the page there should be an image of **person** and **space-ship** that get data for the corresponding image and
  display a table
- Tables:
  - Person
    - Name
    - Height
    - Mass
    - Gender
    - Birth Year
    - Appearances ( Count of movies they appeared in )
  - Ship
    - Name
    - Model
    - Manufacturer
    - Cost
    - People Capacity ( Max people on board )
    - Class
- There should be 10 records per page of a table
- There should be next/previous buttons to change the pages

## Flow 🌈

1. Person opens the web app
2. Right away the StarWars logo is shown and images of a person and spaceship
3. The person clicks on the person image
4. A table is generated with 10 people from the StarWars universe and below, a next button
5. The person clicks on the Next button
6. Immediately the view changes to a new table with new people and a previous button appears
7. A table is generated with 10 ships from the StarWars universe and below, a next button
8. The person clicks on the Next button
9. Immediately the view changes to a new table with new ships and a previous button appears
10. The person clicks on the previous button
11. Immediately the view changes to a new table with the first ships and the previous button disappears

---

Phase 1: Project Setup & Structure
v Create project folder structure

v Initialize Git repository

v Set up basic HTML5 structure

c Create main CSS file

v Create main JavaScript file

---

Phase 2: HTML Structure Development
v Create header with JediArchives logo

v Design selection section with two clickable cards

v Person selection card with image/icon

v Starship selection card with image/icon

Create person data table section (initially hidden) v

Build table with 6 columns: Name, Height, Mass, Gender, Birth Year, Appearances v

Add pagination controls (Previous/Next buttons, page indicator) v

Add back button to return to selection v

Create starship data table section (initially hidden) v

Build table with 6 columns: Name, Model, Manufacturer, Cost, People Capacity, Class v

Add pagination controls (Previous/Next buttons, page indicator) v

Add back button to return to selection v

Add loading states for both tables v

Create footer section v

---

Phase 3: CSS Styling & Design
Set up color scheme (Star Wars theme: dark blues, gold accents) v

Style header and logo v

Style selection cards with hover effects v

Design tables with proper spacing and readability v

Create responsive design for mobile/tablet/desktop v

Add loading animations

Implement smooth transitions between views

---

Phase 4: JavaScript Functionality

Implement event listeners for: v

Person selection card click v

Starship selection card click v

Back buttons v

Pagination buttons v

Integrate with SWAPI (Star Wars API) v

---

Create API service functions:

fetchPeople(page) - gets 10 people per page v

fetchStarships(page) - gets 10 starships per page v

Implement data parsing and formatting:

Parse person data for table display

Parse starship data for table display

Calculate "Appearances" from films array

Calculate "People Capacity" from crew + passengers

Format cost values with commas

Create table rendering functions:

renderPersonTable(data)

renderStarshipTable(data)

Implement pagination logic:

Track current page for each data type

Enable/disable pagination buttons based on available data

Update page indicators

Add error handling for API calls

Implement loading state management

---

Phase 5: Polish & Optimization
Test all user flows:

Person selection → table display → pagination → back to selection

Starship selection → table display → pagination → back to selection

Optimize API calls (caching if needed)

Add accessibility features (ARIA labels, keyboard navigation)

Implement proper error messages

Test responsive design on multiple screen sizes

Optimize performance (lazy loading, efficient DOM updates)

Add visual feedback for loading states

Test browser compatibility

---

Phase 6: Deployment & Documentation
Clean up code (remove console logs, optimize)

Add comments to code

Create README with usage instructions

Deploy to hosting service (GitHub Pages, Netlify, Vercel)

Test deployed version

Add favicon and meta tags

Set up analytics (optional)

Testing Checklist
Unit test API functions

Test table rendering with mock data

Test pagination functionality

Test view switching

Test error scenarios

Test mobile responsiveness

Test browser compatibility (Chrome, Firefox, Safari)

Test accessibility with screen readers

Bonus Features (If time allows)
Search/filter functionality within tables

Sorting by column headers

Dark/light mode toggle

Data export option (CSV/JSON)

Favorite/bookmark characters or starships

Detailed view on row click

Animation transitions between pages

Loading skeleton screens

Local storage for user preferences

Shareable URLs for specific pages
