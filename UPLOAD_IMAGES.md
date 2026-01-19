# How to Upload Your Recipe Images

## Quick Start

Your cookbook is now configured to use local images! Here's how to add them:

### Step 1: Save Your Images

Save the 5 images you uploaded with these **exact filenames**:

1. `scrambled-eggs.jpg` - Perfect Scrambled Eggs
2. `simple-pasta.jpg` - Simple Pasta with Butter and Cheese
3. `grilled-cheese.jpg` - Grilled Cheese Sandwich
4. `mac-and-cheese.jpg` - Classic Mac and Cheese
5. `chicken-tacos.jpg` - Easy Chicken Tacos

### Step 2: Place Files in the Right Location

Copy your images to this directory:
```
/home/user/Cookbook/beginner-cookbook/public/images/
```

You can do this by:

**Option A: Using the file browser (if available)**
- Navigate to `beginner-cookbook/public/images/`
- Drag and drop your 5 images there

**Option B: Using terminal commands**
- Upload images to any location
- Move them with: `mv /path/to/your-image.jpg /home/user/Cookbook/beginner-cookbook/public/images/`

### Step 3: Verify Images

Run this command to check if images are in place:
```bash
ls -lh /home/user/Cookbook/beginner-cookbook/public/images/
```

You should see your .jpg files listed!

### Step 4: Build and View

```bash
cd /home/user/Cookbook/beginner-cookbook
npm run dev
```

Then open your browser and you'll see your custom images!

---

## Current Status

✅ Image directory created at `/home/user/Cookbook/beginner-cookbook/public/images/`
✅ Recipes 1-6 configured to use local images
⏳ Waiting for you to place the image files

## Need Help?

The images will automatically load once you place them in the public/images/ directory with the correct filenames!
