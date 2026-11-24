# Test Plan — CineBook Seat Selection Flow

## 1. Purpose
Validate the movie booking user journey from movie details through selecting a show, selecting seats, reviewing totals, and receiving demo booking confirmation. Use automated browser testing with Playwright.


## 2. Objectives
- Confirm the page and essential booking controls load and are usable.
- Verify available/unavailable seat behavior and selected-state UI.
- Validate seat selection boundaries (zero, one, six, and attempt seven).
- Verify date/showtime selections appear in the summary.
- Check fee and total arithmetic for selected ticket counts.
- Verify clearing seats resets totals and booking button state.
- Validate confirmation content for the chosen booking.
- Produce reproducible test evidence and reports.

## 3. Application Under Test
CineBook local demo web application, `app/index.html`, served on `http://127.0.0.1:4173`. Movie: Galaxy Run. Ticket base price: ₹180. Convenience fee: ₹18 per ticket. Demo only; no real booking/payment.

## 4. Scope
**In scope:** page rendering, movie summary, date selection, showtime selection, seat map, booked seats disabled, seat selection/deselection, max six seats, seat count, fee and total, clear selection, booking confirmation, desktop Chromium UI.

**Out of scope:** payment gateway, authentication, API/database, production inventory lock, concurrency, notification delivery, browser compatibility matrix beyond configured Chromium, accessibility audit, security testing, mobile native testing.

## 5. Test types
- Functional testing
- UI testing
- End-to-end testing
- Regression testing
- Boundary-value testing
- Smoke testing
- Basic responsive layout observation (manual)

## 6. Test approach
Playwright with TypeScript. Tests run in Chromium. Assertions use visible controls and displayed summary values. Parallel execution is enabled. In CI, one retry and two workers are configured. On failure, screenshot/video and trace are retained. Reports include HTML, JSON and JUnit.

## 7. Entry criteria
- Node.js and npm installed.
- Project dependencies installed.
- Chromium installed for Playwright.
- Demo app can load on localhost.

## 8. Exit criteria
- All planned test cases executed or documented as blocked/not run.
- Failures investigated and defect records created where applicable.
- Test evidence/report generated.
- Critical booking flow tests pass on the final candidate build.

## 9. Environment
- OS: Windows/Linux/macOS (Node supported)
- Browser: Chromium (Playwright-managed)
- Framework: Playwright Test
- Language: TypeScript
- Local web server: `http-server`
- IDE: VS Code (optional)

## 10. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Browser install/network issue | Run `npx playwright install chromium`; document environment limitation |
| Test flakiness from shared seat state | App is local/static and seats are reset on each page load |
| Report missing | Run tests before `npm run report` |
| False defect claims | Log only reproducible observed issues; sample defect ideas are not confirmed defects |
| Scope/time constraint | Prioritize booking happy path, seat boundaries, disabled seats, price and reset |

## 11. Deliverables
Test plan, scenarios and cases, Playwright code, run evidence, HTML/JSON/JUnit reports, defect log, final summary and presentation.

## 12. Schedule (4 weeks)
- Week 1: scope, application-under-test selection/build, test plan, scenario design.
- Week 2: detailed cases, test data, Playwright setup, first scripts.
- Week 3: automate core and boundary tests, execute, capture failures/evidence.
- Week 4: regression, defect documentation, final report, presentation and demo.
