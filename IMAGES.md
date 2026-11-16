# Images

All 10 work cards, the profile photo, the hero card stack, the services images and the CV are in place.
Edit `lib/content.ts` to change which images a card uses.

## Optional, still missing
These fall back gracefully (initials or names), so the site looks complete without them.

| File | Where it shows | Size / notes |
|---|---|---|
| `public/images/companies/*.png` | Experience timeline icons | 64×64, transparent: puresquare, v8, evolution-wings, eir, sybrid, ssuet (maqsad already loads) |
| `public/images/clients/*.svg` | "Companies I've built for" marquee | White/mono logos, ~26px tall: maqsad, puresquare, disrupt, v8, webroot, evolution-wings, eir, sybrid, california-pizza, mcdonalds |

## Where each work card's images come from
| # | Project | Layout | Source |
|---|---|---|---|
| 1 | Maqsad — Android | phones | Google Play listing (`public/screenshots/maqsad/`) |
| 2 | Maqsad — Web | browser windows | maqsad.io, /mdcat, /ecat captured with headless Chrome (`maqsad-web/`) |
| 3 | Onvexia | browser windows | onvexia.com home, /developers, /docs (`images/work`, `images/services`) |
| 4 | Neural Delta X | browser windows | Your own screenshots sent in chat (`neural-delta-x/`) |
| 5 | AngelVPN | phones | Google Play listing (`angelvpn/`) |
| 6 | SecureVPN by Webroot | phones | Google Play `com.webroot.android.vpn` (`webroot/`) |
| 7 | PureVPN | phones | Google Play `com.gaditek.purevpnics` (`purevpn/`) |
| 8 | Cheflic | phones | **Designed mockup**, source `mockups/cheflic.html` (`cheflic/`) |
| 9 | Premium Crypto Signals | browser windows | **Designed mockup**, source `mockups/signals.html` (`crypto-signals/`) |
| 10 | California Pizza | phones | Google Play `com.indolj.californiapizza` (`california-pizza/`) |

To re-render a mockup after editing it (from the project folder, Git Bash):
```
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=3 --window-size=360,664 --screenshot=out.png "file:///E:/Projects/Portfolio/mockups/cheflic.html#home"
```
Screens: `cheflic.html#home|menu|track` (360×664, scale 3) and `signals.html#dash|detail` (1440×900, scale 1). Convert with `sharp` to WebP at 600px (phones) or 1200px (web).

All screenshots are WebP, 600px wide for phones and 1200px for web, about 1.9 MB in total.
