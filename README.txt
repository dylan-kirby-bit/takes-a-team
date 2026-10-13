TAKES A TEAM PLAYBOOK — OFFLINE iPAD VERSION
Baylor University Counseling Center outreach · Men's Mental Health Month

WHAT IT IS
A 90-second tabling game. Students answer one scenario (pre), staff teach
three points, students answer a second scenario (post), then scan the
Counseling Center vCard QR code. Staff see before/after results and export
them as a CSV.

WHAT DATA IT KEEPS
For each finished game, one row:
  event name, date/time, card picked in Play 1 and Play 2,
  right or wrong for each, and whether staff tapped Saved or Skipped.
It does NOT collect names, emails, student IDs, photos, location, or any
device information.

WHERE THE DATA LIVES
Only in the browser storage on the iPad running the game. The page makes no
network requests: no analytics, no outside fonts, no third-party code. Data
leaves the iPad only when staff tap "Export results (CSV)" and choose where
to save or send the file (for example, a university OneDrive folder).

FILES (keep them together in one folder)
  index.html            the game
  sw.js                 lets the game load with no internet after first visit
  manifest.webmanifest  app name and icon for the iPad home screen
  icon-180.png, icon-512.png

------------------------------------------------------------
STEP 1 — HOST THE FOLDER (one time, usually IT or web services)
iPads won't run a game file opened from the Files app, so the folder needs
to be served from a web address, ideally university web space.
  - Upload all five files to one folder on a university web server (https).
  - Example address: https://<university site>/outreach/takes-a-team/
Nothing on the server stores data; it only delivers the game files.

STEP 2 — SET UP EACH iPAD (one time per iPad)
  1. Open the address in Safari. Make sure Private Browsing is OFF.
  2. Tap Share > Add to Home Screen > Add.
  3. Open "Takes a Team" from the Home Screen (not from Safari).
     From now on, it opens with no internet.
  4. Press and hold "Staff · hold" in the bottom corner for 1 second.
     - Check the event name.
     - Under "vCard QR image," add a screenshot or image of your QR code.
  5. Optional: turn on Guided Access (Settings > Accessibility >
     Guided Access) so students can't leave the game.

Results saved inside the Home Screen app stay separate from Safari, so
always use the Home Screen icon.

STEP 3 — AFTER EVERY EVENT
  1. Press and hold "Staff · hold."
  2. Tap "Export results (CSV)" and save it to your team folder.
  3. Once the file is saved, you can tap "Erase all results" for a clean
     start. The staff screen warns you if any plays haven't been exported.

Each iPad keeps its own results. If two iPads run the same event, export
both and combine the CSVs.

ON A LAPTOP
Double-click index.html to open it in Chrome, Edge, or Safari. It works the
same, except it needs the file each time (no offline install).

UPDATING THE GAME LATER
Replace index.html on the server and change VERSION in sw.js
(for example, to "takes-a-team-v2"). iPads pick up the update the next time
they open the game with internet.
