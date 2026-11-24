# Presentation Outline (16-slide format)

1. **Title Slide** — Automated Testing of a Movie Ticket Booking Application (Seat Selection Flow); team of five, roll numbers, guide, department, college, year.
2. **Abstract** — Test automation of movie selection and seat-booking UI using Playwright/TypeScript; test coverage and report artifacts; actual execution outcome (fill after running).
3. **Introduction** — Automation improves repeatability, speed, consistency, regression coverage; Playwright overview.
4. **Problem Statement** — Manual testing is repetitive and error-prone; booking UI requires validating seats, price, selection state, date/time, confirmation.
5. **Objectives** — Validate booking journey; seat selection rules; calculations; summary; automated reporting.
6. **Literature Survey / Existing System** — Manual testing vs Selenium vs Cypress vs Playwright; Playwright strengths: auto-wait, multi-browser, traces, screenshots; cite official documentation in slide references.
7. **Proposed System** — Local demo application and browser-based end-to-end automated tests.
8. **System Architecture / Framework Design** — Playwright tests → browser automation → demo app → assertions → HTML/JSON/JUnit reports → screenshot/video/trace evidence.
9. **Tools and Technologies** — TypeScript, Playwright Test, Node.js, npm, HTML/CSS/JavaScript, VS Code, Git/GitHub.
10. **Application Under Test** — CineBook movie page; date and time options; seat map; booking summary; ticket price ₹180 + ₹18 fee per ticket.
11. **Test Plan and Test Cases** — Scope, test types, entry/exit criteria; show sample cases TC02, TC04, TC06, TC10.
12. **Implementation** — Folder structure; Playwright config; example test; selectors; assertions; reports.
13. **Results and Reports** — Run commands; screenshots of actual HTML report; pass/fail counts; runtime; demo.
14. **Defects Found** — Only verified defects; defect table with ID, steps, severity, priority, status, evidence.
15. **Conclusion and Future Scope** — Achievements and limitations; API, real-time inventory, payment sandbox, cross-browser, mobile, CI, accessibility.
16. **References and Q&A** — Playwright docs, Node.js docs, references used; Thank You.


## Suggested demo sequence
1. Open the local demo website.
2. Point out movie/date/showtime and seat map.
3. Select 2 seats and show total price.
4. Select a booked seat to demonstrate disabled state.
5. Clear selection and show disabled booking button.
6. Run `npm test` in terminal.
7. Open `playwright-report/index.html` using `npm run report`.
8. Show failure evidence (only if any test fails; do not fabricate failure screenshots).
