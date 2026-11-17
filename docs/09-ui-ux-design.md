# 09 — UI/UX Design System Specification

## 1. Design Philosophy: "Emerald Forest + Neon Lime + Charcoal"
The visual identity moves away from flat near-black into deep layered forest and emerald tones:
- **Atmosphere**: Futuristic, technical, calm, and trustworthy.
- **Lighting**: Subtle radial gradients and ambient glows behind key focal points.
- **Restraint**: Neon lime used strictly for high-priority CTA actions and critical keywords, avoiding loud neon cliches.

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
- **Primary Body Font**: `Inter`, `-apple-system`, `sans-serif` (Optimal readability at all densities).
- **Code & Metadata Font**: `Fira Code`, `JetBrains Mono`, `monospace` (Used for tags, terminal brackets, and data flows).
- **Contrast Compliance**: Contrast ratio between `#F4F8F4` and `#1A3326` is > **9.2:1**, comfortably exceeding WCAG AAA standard (7:1).

---

## 4. Signature Orbital Avatar Specification
- **Centerpiece**: High-resolution cropped portrait headshot in circular frame (`230px`).
- **Inner Ring**: Crimson/Red gradient (`#FF3344` $\rightarrow$ `#FF5252`), radius $r = 128\text{px}$, stroke width `0.85px`, clockwise rotation (`22s`).
- **Outer Ring**: Lime/Emerald gradient (`#A8FF3E` $\rightarrow$ `#55D68A`), radius $r = 136\text{px}$, stroke width `0.85px`, counter-clockwise rotation (`28s`).
- **Glow & Particles**: Ambient radial bloom with subtle glowing orbital nodes traveling along the ring paths.
