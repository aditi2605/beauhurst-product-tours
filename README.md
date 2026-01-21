#### Beauhurst – Product Tours Page (Take-Home Task)

#### Overview

This project is an improved implementation of the Product Tours page, aimed at helping users quickly find the most relevant walkthroughs, understand the value of the platform, and convert via a clear primary CTA.

The solution focuses on clarity, scannability, and guided discovery, while remaining lightweight and fully responsive.


#### 1. Wireframe Review & UX Improvements

**What works well in the original wireframe**
- Clear intent to showcase product tours rather than individual features
- Strong opportunity to support both self-serve exploration and sales conversion
- Content naturally suited to a scannable, card-based layout

**What could be improved**
- The wireframe does not clearly guide different user types toward relevant tours
- All tours are presented with equal emphasis, increasing cognitive load
- Limited context to help users understand why specific tours are being shown

**Improvements made**
- Introduced a persona-based selector to help users self-identify their goal
- Dynamically filtered tours to reduce noise and speed up decision-making
- Added clearer hierarchy using icons, time indicators, and “recommended” cues
- Reinforced context with a dynamic label showing the currently selected persona


#### 2. Helping Users Choose the Right Tour

To help users quickly find the most relevant tour:
- Users begin by selecting what they are trying to achieve, rather than a product name
- Only tours relevant to that persona are shown
- Tours are designed to be scannable within a few seconds
- Time-to-complete indicators help set expectations

This approach reduces friction while supporting both exploration and conversion.


#### 3. Navigation Placement

I would place the Product Tours page:
- Under **“Product”** or **“How it works”** in the main navigation
- Linked contextually from the homepage hero and key CTAs

This positions the page as:
- A self-serve alternative to booking a demo
- A mid-funnel conversion tool for users who are not yet ready to speak to sales


#### 4. Implementation Details

- Built using HTML, Tailwind CSS, and vanilla JavaScript
- Fully responsive across mobile, tablet, and desktop
- Data-driven rendering allows easy expansion of personas and tours
- Subtle animations and transitions enhance clarity without distraction
- Accessibility considerations include semantic buttons and ARIA labels


#### 5. Running the Project

No build step is required.

Open `index.html` in a browser  
or  
Serve locally using a simple static server (e.g. Live Server)


#### Notes

This implementation prioritises UX clarity, responsiveness, and maintainable structure over visual complexity.


#### Time spent

This task was completed over approximately **6–8 hours**, including design review, implementation, and refinement.
