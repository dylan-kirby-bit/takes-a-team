TAKES A TEAM PLAYBOOK — iPAD GAME, VERSION 2
Baylor University Counseling Center outreach · Men's Mental Health Month

WHAT IT IS
A 2-minute tabling game for one student or a team, run by staff on an iPad.
  Play 1 (pre-test) > Gut check > Huddle > Play 2 (post-test)
  > Was this useful? > Build your team (vCard QR) > Thanks
Teams of 2 to 5+ talk it over and share one answer on every screen. An abandoned game returns to the start after 2 minutes.

WHAT DATA IT KEEPS
One row per game:
  event name, date/time, game ID, group size (1-5; 5 means 5 or more),
  the team's Play 1 and Play 2 picks and whether each was right,
  the gut-check answer, the usefulness answer, and how many saved the
  contact (tapped by staff).
It does NOT collect names, emails, student IDs, photos, location, or any
device information.

WHERE THE DATA LIVES
In the browser storage on the iPad running the game, until staff send it.
The page has no analytics, outside fonts, or third-party code. Data leaves
the iPad only when staff tap "Send results to Qualtrics" (it goes to the
BUCC Qualtrics account) or use the backup "Copy results" / "Export CSV file".

The statistic shown comes from Pew Research Center, "Men, Women and Social
Connections" (survey of 6,204 U.S. adults, Sept. 3-15, 2024):
https://www.pewresearch.org/social-trends/2025/01/16/men-women-and-social-connections/

------------------------------------------------------------
UPDATING YOUR GITHUB SITE (from version 1 or an earlier version 2)
  1. Open your takes-a-team repository on GitHub.
  2. Click Add file > Upload files. Drag in index.html, sw.js,
     sent.html, reader.html and README.txt from this folder. GitHub
     replaces the old copies. Click Commit changes.
  3. Wait about 10 minutes (GitHub holds the old copy that long). Then,
     with the iPad online, open the game, close it fully (swipe it
     away), and open it again. Repeat until the start screen asks
     "How many are playing?" After that, future updates show up the
     next time the game opens online.
Your event name carries over. The final screen now has separate iPhone
and Android QR codes, so add both under Staff > Event setup (a QR image
added in version 1 won't carry over). Version 1 results stay on the
iPad but don't show in the version 2 staff screen, so export them first if
you still need them.

FIRST-TIME SETUP (if you haven't hosted version 1)
  1. Upload all files in this folder to a public GitHub repository and
     turn on GitHub Pages (Settings > Pages > Deploy from a branch >
     main, / (root)).
  2. On the iPad, open the site in Safari (Private Browsing off), then
     Share > Add to Home Screen. Open it from the Home Screen icon.
  3. Hold "Staff · hold" for 1 second, check the event name, and add both
     vCard QR images (iPhone and Android).
  4. Optional: turn on Guided Access (Settings > Accessibility).

QR CODES (vCards)
The final screen loads two image files from the GitHub folder:
  qr-iphone.png    the iPhone vCard QR code
  qr-android.png   the Android vCard QR code
Upload both to the repository with exactly these names (lowercase).
PNG or JPEG both work: qr-iphone.jpg or qr-iphone.jpeg is fine too.
Every device then shows them automatically, offline too after one
online visit. To change a QR code, upload a new file with the same name.

AFTER EVERY EVENT (needs Wi-Fi)
  1. Hold "Staff · hold."
  2. Tap "Send results to Qualtrics" and wait for "Sent ✓".
  3. Tap "Erase results from this iPad".
Results land in the "Takes a Team: Results drop" Qualtrics survey.
To read them: export that survey as CSV and open reader.html
(…github.io/takes-a-team/reader.html) on a laptop.

The Send button appears once DROP_URL in index.html holds the results-drop
survey's anonymous link. Backups on the Staff screen: "Copy results" and
"Export CSV file".
