TAKES A TEAM PLAYBOOK — iPAD GAME, VERSION 2
Baylor University Counseling Center outreach · Men's Mental Health Month

WHAT IT IS
A 2-minute tabling game for 1 to 3 players, run by staff on an iPad.
  Play 1 (pre-test) > Guess the stat > Huddle > Play 2 (post-test)
  > Was this useful? > Build your team (vCard QR) > Thanks
In group mode, each player locks in a secret pick, and answers are
revealed together. An abandoned game returns to the start after 2 minutes.

WHAT DATA IT KEEPS
One row per player:
  event name, date/time, game ID, group size, player number,
  Play 1 pick and whether it was right, their friend-stat and
  counselor-stat guesses and whether each was right,
  Play 2 pick and whether it was right, usefulness answer,
  and whether staff marked the contact as saved.
It does NOT collect names, emails, student IDs, photos, location, or any
device information.

WHERE THE DATA LIVES
Only in the browser storage on the iPad running the game. The page makes no
network requests: no analytics, no outside fonts, no third-party code. Data
leaves the iPad only when staff tap "Export results (CSV)" and choose where
to save it.

The statistic shown comes from Pew Research Center, "Men, Women and Social
Connections" (survey of 6,204 U.S. adults, Sept. 3-15, 2024):
https://www.pewresearch.org/social-trends/2025/01/16/men-women-and-social-connections/

------------------------------------------------------------
UPDATING YOUR GITHUB SITE (from version 1 or an earlier version 2)
  1. Open your takes-a-team repository on GitHub.
  2. Click Add file > Upload files. Drag in index.html, sw.js and
     README.txt from this folder. GitHub replaces the old copies.
     Click Commit changes.
  3. Wait 1 to 3 minutes. On the iPad, open the game once with internet,
     close it, and open it again. You should see "Play solo," "With a
     friend," and "With two friends" on the start screen.
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

AFTER EVERY EVENT
  1. Hold "Staff · hold."
  2. Tap "Export results (CSV)" and save it to your team folder.
  3. Once it's saved, tap "Erase all results" for a clean start.
