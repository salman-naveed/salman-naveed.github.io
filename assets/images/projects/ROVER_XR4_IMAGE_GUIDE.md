# XR-4 Rover Project - Image Setup Guide

This guide explains how to add images for the XR-4 Rover project to your portfolio website.

## Required Images

You need to add **5 images** total:

### 1. Main Thumbnail Image (Required)
- **Filename:** `rover-xr4.jpg`
- **Location:** `assets/images/projects/rover-xr4.jpg`
- **Recommended Size:** 800x600px or 1200x675px (16:9 ratio)
- **Usage:** This appears on the projects grid on your homepage and projects page
- **Suggested Content:** Full view of the completed rover, professional angle

### 2. Hero Image (Required)
- **Filename:** `rover-xr4.jpg` (same as thumbnail)
- **Location:** `assets/images/projects/rover-xr4.jpg`
- **Recommended Size:** 1200x675px (16:9 ratio)
- **Usage:** Large hero image at the top of the project detail page
- **Suggested Content:** Best overall shot of your rover

### 3-6. Gallery Images (Optional but Recommended)
Add these to showcase different aspects of your project:

#### Image 1: Controller Unit
- **Filename:** `rover-xr4-1.jpg`
- **Location:** `assets/images/projects/rover-xr4-1.jpg`
- **Suggested Content:** Close-up of the handheld Controller & Telemetry Unit showing LCD, joystick, buttons

#### Image 2: Internal Electronics
- **Filename:** `rover-xr4-2.jpg`
- **Location:** `assets/images/projects/rover-xr4-2.jpg`
- **Suggested Content:** Interior view showing ESP32, motor controllers, wiring, sensors

#### Image 3: Rover in Action
- **Filename:** `rover-xr4-3.jpg`
- **Location:** `assets/images/projects/rover-xr4-3.jpg`
- **Suggested Content:** Outdoor shot of rover in operation, showing mobility

#### Image 4: Movement or Detail Shot
- **Filename:** `rover-xr4-4.jpg`
- **Location:** `assets/images/projects/rover-xr4-4.jpg`
- **Suggested Content:** Animated GIF showing rover movement, OR another interesting angle/detail
- **Note:** Can be .gif format if you want to show animation

---

## How to Add Images

### Step 1: Prepare Your Images
1. Select your best 5 photos from your Google Photos album
2. Download them to your computer
3. Rename them according to the filenames above
4. Optionally resize them to recommended dimensions (use any image editor)
5. Optionally compress them to reduce file size (recommended: tinypng.com)

### Step 2: Place Images in Correct Folder
1. Navigate to: `assets/images/projects/`
2. Copy all your renamed images into this folder
3. Verify the filenames match exactly:
   - `rover-xr4.jpg` (main/hero image)
   - `rover-xr4-1.jpg` (controller)
   - `rover-xr4-2.jpg` (electronics)
   - `rover-xr4-3.jpg` (action shot)
   - `rover-xr4-4.jpg` (movement/detail)

### Step 3: Update HTML File to Show Images

#### For the Hero Image:
1. Open: `pages/rover-xr4.html`
2. Find the section with comment: `<!-- IMAGE INSTRUCTIONS: -->`
3. Delete or comment out the `<div class="image-placeholder">` section
4. Uncomment the `<img>` tag below it by removing `<!--` and `-->`

**Before:**
```html
<div class="image-placeholder">
    <i class="fas fa-image"></i>
    <p>Add main rover image here...</p>
</div>
<!-- <img src="../assets/images/projects/rover-xr4.jpg" alt="XR-4 Rover Control System"> -->
```

**After:**
```html
<img src="../assets/images/projects/rover-xr4.jpg" alt="XR-4 Rover Control System">
```

#### For the Gallery Images:
1. In the same file (`pages/rover-xr4.html`)
2. Find the section with comment: `<!-- GALLERY IMAGE INSTRUCTIONS: -->`
3. Remove the opening `<!--` and closing `-->` to uncomment the entire gallery section

**Before:**
```html
<!--
<section class="content-section">
    <h2>Gallery</h2>
    <div class="image-gallery">
        ...
    </div>
</section>
-->
```

**After:**
```html
<section class="content-section">
    <h2>Gallery</h2>
    <div class="image-gallery">
        ...
    </div>
</section>
```

---

## Quick Checklist

- [ ] Download 5 images from Google Photos
- [ ] Rename images to match required filenames
- [ ] (Optional) Resize/compress images
- [ ] Copy images to `assets/images/projects/` folder
- [ ] Edit `pages/rover-xr4.html` to uncomment hero image
- [ ] Edit `pages/rover-xr4.html` to uncomment gallery section
- [ ] Open `index.html` in browser to verify images appear
- [ ] Open `pages/rover-xr4.html` in browser to verify detail page

---

## Image Recommendations

### Best Practices:
- **Format:** JPG for photos, PNG for graphics with transparency, GIF for animations
- **File Size:** Keep under 500KB per image (use compression)
- **Dimensions:** 16:9 ratio works best (e.g., 1200x675, 800x450)
- **Quality:** High enough to look professional, compressed enough to load fast
- **Lighting:** Well-lit photos show details better
- **Background:** Clean backgrounds make the rover stand out

### Suggested Photo Selection from Your Album:
Based on typical rover projects, try to include:
1. **Hero/Thumbnail:** Best "hero shot" - full rover, good angle, clean background
2. **Controller:** Clear view of all controls and display
3. **Electronics:** Neat wiring, visible components (ESP32, sensors, etc.)
4. **Action:** Rover outdoors or demonstrating capability
5. **Details:** Motor assembly, sensor array, or interesting subsystem

### Optional: Using Animated GIFs
If you have a video of your rover moving, you can create a GIF:
1. Use an online tool like ezgif.com or giphy.com
2. Keep GIF under 5MB
3. Limit duration to 3-5 seconds
4. Save as `rover-xr4-4.gif`
5. Update the HTML img src to use `.gif` extension

---

## Troubleshooting

### Images Not Showing?
1. Check file paths are exactly correct
2. Verify filenames match (case-sensitive!)
3. Make sure images are in `assets/images/projects/` folder
4. Clear browser cache and refresh (Cmd+Shift+R or Ctrl+Shift+R)
5. Check browser console for errors (F12 → Console tab)

### Images Too Large/Slow Loading?
1. Compress images using tinypng.com or similar
2. Resize to recommended dimensions
3. Convert to JPG if currently PNG (smaller file size)

### Want Different Layout?
You can customize the gallery in `pages/rover-xr4.html`:
- Change grid columns by modifying CSS `grid-template-columns`
- Add more images by duplicating gallery-item divs
- Remove gallery section entirely if you prefer single hero image

---

## Need Help?

If you run into issues:
1. Check this guide again carefully
2. Verify all file paths and names match exactly
3. Open browser developer tools (F12) to check for errors
4. Make sure you saved all changes to HTML files

Once images are added, your XR-4 Rover project will look professional and complete!
