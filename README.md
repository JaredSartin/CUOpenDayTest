# Cardiff University Open Day Website

## Client Brief

We are seeking to enhance the [Open Day website](https://cardiffuniversityuitgb.github.io/CUOpenDayTest/) to create a more engaging, accessible, and visually appealing experience for prospective students. The project will involve applying Cardiff University branding, enhancing the user interface and implementing a modern, responsive layout.

## Requirements

### Purpose

- **Represent the University:** The website should look and feel like other portals and pages, using similar branding, colors, fonts and logos.
- **Learn:** Prospective students need to have event data easily accessible - filtering to either general or program specific schedules.
- **Plan Visit:** Attendees should be able to easily see times for events, see maps, learn about site features like parking and accessibility and even add events to their calendar.
- **Learn More:** The individual events pages should link out to the Cardiff University website, other Open Days and events, and have access to University contact details.

### Target Audience

Open Days are intended for prospective students and families to understand the offerings of a University. The target audiences are older students and parents or grandparents of the students.

Students are more often mobile-first, many use tablets and mobile phones instead of a PC to navigate the internet. Given general understanding of device use, the website should be quick, allow easy access to drill-down pages for events and locations, and have app integration (add to calendar, open maps, links to share in chat/whatsapp etc).

Secondarily, parents and grandparents will want to gather information about the day. Focusing on details of the event will be key: easily see map locations in-browser, see calendar views for detailed planning, and see links to local lodging and other event days.

### Technical Requirements and Specifications

- **Functionality:** Core use will be to explore the programs and their associated events, with clear understanding of location and time for each event. Navigation should be intiutive to allow exploration of the day's events without confusion.
- **Accessibility:** The website must be built mobile-first to support both student device trends as well as day-of mobile navigation. Information should be readable and clear, allowing users to opt-in to extra details about the events when necessary.
- **Integrations:** Allowing users to plan their visit requires that external linking to maps and calendars are provided for the events. Additionally deep links to specific to specific events or venues should be accessible and easy to share (either via printing, link copy, or link-out to messaging/WhatsApp to share)
- **Site Search:** Given the amount of locations and events on the day, a simple text search would be beneficial, though ensuring deep links between events, locations, and programs should ensure smooth navigation without a search.
- **Analytics:** Understanding the device metrics and usage patterns is important and analytics should be set up to track user flow. Ongoing improvements for pre-event, day-of use, and cross-event discovery will help improve the designs going forward.
- **Design:** The website is core to Cardiff University and should use established branding, logos, fonts, and colors - specifically ones matching the main Cardiff University website. Design should be mobile first and offer site accessibility for screen readers, font scaling, and contrast needs.

### Content Overview

- **Landing page:** Serves as the main hub for the broader event (in this case the University Open Day).
  - Overview - Title / Date and Time of wider event / Cover Image
  - Topic list - Minimally a list of topics available, such as Architecture, Business, or General - these should navigate to topic landing pages
- **Topic landing page:** Details the individual topic and associated programs.
  - Overview - Title / Description of topic / cover image
  - Program list - Sorted list of programs for the given topic, showing title, location and time - interaction should drill down to the program landing page
- **[DEPRECATED] Program landing page:** Details of the program, timing, and location.
  - Overview - Title / Description of program / Time / Type
  - Location - Both the floor/room where applicable, but also the building name and address - accompanied by a map widget
- **Location landing page:** List locations on campus to allow exploration
  - List of locations (provided by a secondary "API")
- **Location details page:** Details of a given location
  - Overview - Title / description
  - Details - Address / Postal / Ideally a map link or visual
- **Other Events:** Landing page linking to other events that are provided by the API (seeing that there can be multiple Open Days)
  - Simple listings of event name and date

### UX / Wireframes

Normally I would include wireframes for mobile and desktop, as well as navigation structure diagrams. Normally I would use Figma to structure the UX, and even create designs for final use within the tool. Given the expectation of 1-2 hours on this exercise, I will bypass this step and focus on implementation.

---

# Interview Excercise Notes and Feedback

The website is visible here: https://jared.sart.in/CUOpenDayTest/

## Overview

This is one of the most open-ended programming challenges I have ever been a part of - challenging requirements outlining, design creation and brand matching, as well as technical implementation. The expectation that candidates are putting in 1-2 hours of work would really only test one of these areas (and barely that). Happy to discuss my approach and disposition on the matter.

## Next Steps

In order to build the full experience, with all the necessary tooling and tech, this project will likely take multiple days to create something launch-ready. Ideally, there would have been more time for the UX/UI design portion, which would inform both the dev work and the QA.

In a perfect world, a front-end like this would also come with a test suite to ensure it parses and displays all expected permutations of data from the API and handles error-cases gracefully.

### Wrap up notes
- I didn't quite get to the sharing side of things (print styles and buttons to share via IM/WhatsApp) - these can come later, nice to haves.
- Cleanup like moving some things to utils and breaking out more components would be nice - normally next steps at this point.
- Content is messy, so next steps would be to remedy (some locations have nothing more than an address, others have addresses that double up on post code or have line breaks) - would seek internal staff to manage data expectations.

## Time Tracking
- Codebase review and tech setup: 60 minutes
  - *Stage notes: Overall I intend to spend 4 hours or less, but I will be unable to fully complete all steps; defining, designing, and implementing a full experience that usability, accessibily, branding, and interactive functionality is no simple feat.*
  - *Additional notes: Went back and updated some of the core packages - had high sev issues. Also locked versions fully instead of using the ^ and ~ specifications. Finer control of security and build stability*
- Requirements documentation: 45 minutes
  - *Stage notes: I would have loved to spend time on UX design and UI design, but given that I am nearly 1.5 hours in, I need to design on the fly.*
- Initial site build: 3.75 hours
  - *Notes part 1: Created routable setup with some basics to look similar to the Cardiff University website, lots to do to match brand, but won't focus a lot there. Still need to work on the Topic landing and individual Program pages. I will want to work on a getting-around and other events pages (the latter being a mega-stretch)*
  - *Notes part 2: Around 2.5 hours into dev, I think I have just the location details pages, the footer bar, and some navigation helpers (top nav and back button) to make, should be less than an hour. I did change the drill-downs of the programs to be expandable, since many programs are in the same building for most topics - changed the spec above to match.*
  - *Notes part 3: About 3.5 hours into dev, need to add top-nav and a locations landing page. Also a simple footer - that should take about 30 minutes or so and then I have a base site complete.*
  - *Notes part 4: Dev time was just under 4 hours - including some polish work. There are some utilities I would extract and tooling to build, but this is a quick standup of the event pages*

**Total time:** 5.5 Hours (includes setup, requirements documentation, node module updates and dev/polish time)