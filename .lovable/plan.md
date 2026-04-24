## Goal

Remove the existing **Vinwash Promotional** and **Bansal Group Promotional** AI video entries from the portfolio, and replace them with **5 new AI videos** from your uploads, each with a proper cover image (poster frame extracted from the video itself).

## New AI Videos to Add

| # | Title | Source File | Suggested Tag |
|---|-------|-------------|---------------|
| 1 | Bansal Group AI Influencer | `BANSAL_GROUP_AI_INFLUENCER.mp4` | AI Video / Influencer |
| 2 | Carnival Studio | `CARNIVAL_STUDIO_AI_VIDEO.mp4` | AI Video / Studio |
| 3 | Government Campaign | `GOVERNMENT_AI_VIDEO.mp4` | AI Video / Campaign |
| 4 | Lime Product Ad | `LIME_PRODUCT.mp4` | AI Video / Product |
| 5 | Shark Tank | `SHARK_TANK_1.mp4` | AI Video / Concept |

(Titles & descriptions can be tweaked — let me know if you want different wording.)

## Implementation Steps

1. **Copy new videos** from uploads → `public/videos/`:
   - `bansal-ai-influencer.mp4`
   - `carnival-studio.mp4`
   - `government-ai.mp4`
   - `lime-product.mp4`
   - `shark-tank.mp4`

2. **Generate poster covers** using `ffmpeg` — extract a clean frame (~1–2s in) from each video and save as JPEG in `public/portfolio-posters/`:
   - `bansal-ai-influencer-poster.jpg`
   - `carnival-studio-poster.jpg`
   - `government-ai-poster.jpg`
   - `lime-product-poster.jpg`
   - `shark-tank-poster.jpg`
   - QA each poster visually before finalizing (re-extract a different timestamp if a frame is blurry/black).

3. **Update `src/pages/portfolio/portfolio-data.ts`**:
   - Remove `id: 6` (Bansal Group Promotional) and `id: 9` (Vinwash Promotional) entries.
   - Add 5 new entries under the `// AI Videos` section with the videos, posters, titles, descriptions, and tags above.

4. **Optional cleanup** (won't break anything if skipped): delete the now-unused files `public/videos/bansal-group.mp4`, `public/videos/vinwash.mp4`, and `public/portfolio-posters/bansal-group-poster.jpeg`.

## Result

The AI Videos section will show 6 items: 3D Wedding Invitation, Perfume Commercial, The Rising Real Estate, Bansal Group AI Influencer, Carnival Studio, Government Campaign, Lime Product Ad, and Shark Tank — each with a proper cover frame instead of a generic placeholder.

Approve to proceed and I'll implement.