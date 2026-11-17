# 09 — UI/UX Design System Specification

## 1. Design Philosophy: "Emerald Forest + Neon Lime + Charcoal"
**The visual **identity moves away from flat near-black into deep layered forest and emerald tones:
- <strong style="color: #E26D5C; font-weight: 600;">Atmosphere:</strong> <span style="color: #B2CEBD;">Futuristic, technical, calm, and trustworthy.</span>
- <strong style="color: #E26D5C; font-weight: 600;">Lighting:</strong> <span style="color: #B2CEBD;">Subtle radial gradients and ambient glows behind key focal points.</span>
- <strong style="color: #E26D5C; font-weight: 600;">Restraint:</strong> <span style="color: #B2CEBD;">Neon lime used strictly for high-priority CTA actions and critical keywords, avoiding loud neon cliches.</span>

---

## 2. Color Palette System

| Color Token | Hex Code | Visual Role |
| :--- | :--- | :--- |
| `--bg-tertiary` | `#0A1510` | Deepest background foundation (Hero & Footer) |
| `--bg-primary` | `#0D1A12` | Deep forest canvas for main sections |
| `--bg-secondary` | `#152B1E` | Rich emerald dark background |
| `--bg-card` | `#1A3326` | Elevated emerald card surface |
| `--bg-card-hover` | `#223D2E` | Highlighted interactive card state |
| `--accent-lime` | `#A8FF3E` | Neon Lime primary call-to-action & focus indicator |
| `--accent-emerald` | `#55D68A` | Vibrant emerald for headers, badges, and verified dots |
| `--accent-mint` | `#C9F7D5` | Soft mint for headings and secondary accents |
| `--text-main` | `#F4F8F4` | High-contrast readable near-white text |
| `--text-muted` | `#9BB8A4` | Secondary explanatory body text |

---

## 3. Typographic Hierarchy
- <strong style="color: #E26D5C; font-weight: 600;">Primary Body Font:</strong> <span style="color: #B2CEBD;">`Inter`, `-apple-system`, `sans-serif` (Optimal readability at all densities).</span>
- <strong style="color: #E26D5C; font-weight: 600;">Code & Metadata Font:</strong> <span style="color: #B2CEBD;">`Fira Code`, `JetBrains Mono`, `monospace` (Used for tags, terminal brackets, and data flows).</span>
- <strong style="color: #E26D5C; font-weight: 600;">Contrast Compliance:</strong> <span style="color: #B2CEBD;">Contrast ratio between `#F4F8F4` and `#1A3326` is > **9.2:1**, comfortably exceeding WCAG AAA standard (7:1).</span>

---

## 4. Signature Orbital Avatar Specification
- <strong style="color: #E26D5C; font-weight: 600;">Centerpiece:</strong> <span style="color: #B2CEBD;">High-resolution cropped portrait headshot in circular frame (`230px`).</span>
- <strong style="color: #E26D5C; font-weight: 600;">Inner Ring:</strong> <span style="color: #B2CEBD;">Crimson/Red gradient (`#FF3344` $\rightarrow$ `#FF5252`), radius $r = 128\text{px}$, stroke width `0.85px`, clockwise rotation (`22s`).</span>
- <strong style="color: #E26D5C; font-weight: 600;">Outer Ring:</strong> <span style="color: #B2CEBD;">Lime/Emerald gradient (`#A8FF3E` $\rightarrow$ `#55D68A`), radius $r = 136\text{px}$, stroke width `0.85px`, counter-clockwise rotation (`28s`).</span>
- <strong style="color: #E26D5C; font-weight: 600;">Glow & Particles:</strong> <span style="color: #B2CEBD;">Ambient radial bloom with subtle glowing orbital nodes traveling along the ring paths.</span>

