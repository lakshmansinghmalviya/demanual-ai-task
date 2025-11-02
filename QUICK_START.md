# Quick Start Guide

Get your Calendar App running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Git installed
- A Firebase account
- A Supabase account
- A Vercel account (for deployment)

## Step 1: Get Your Credentials (5 minutes)

### Firebase
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Create/select a project
3. Enable Email/Password and Google authentication
4. Copy your web app config values

### Supabase
1. Your Supabase project is already set up
2. Get your Project URL and Anon Key from Settings > API

## Step 2: Local Setup (2 minutes)

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local with your credentials
# Use any text editor to add your Firebase and Supabase values
```

## Step 3: Test Locally (1 minute)

```bash
npm run dev
```

Visit `http://localhost:3000` and test:
- Sign up with email
- Create an event
- Sign out and sign in again
- Verify your event is still there

## Step 4: Deploy to Vercel (3 minutes)

### Option A: GitHub + Vercel Dashboard

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/calendar-app.git
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo
4. Add environment variables (copy from .env.local)
5. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and add environment variables
```

## Step 5: Configure Firebase (1 minute)

After deployment:
1. Add your Vercel URL to Firebase authorized domains
2. Update Google OAuth settings with your Vercel domain

## Done! 🎉

Your calendar app is now live and ready to use.

## Test Your Deployment

1. Visit your Vercel URL
2. Sign up with a new account
3. Create some events
4. Test on mobile
5. Share with others!

## Need Help?

- **Detailed instructions**: See SETUP_GUIDE.md
- **Requirements checklist**: See ASSIGNMENT_CHECKLIST.md
- **Project overview**: See PROJECT_OVERVIEW.md
- **Troubleshooting**: Check README.md

## Common Issues

**Build fails?**
- Check all environment variables are set
- Verify Firebase config is correct

**Can't sign in?**
- Add your domain to Firebase authorized domains
- Check browser console for errors

**Events not saving?**
- Verify Supabase credentials
- Check browser network tab

---

**Total time**: ~15 minutes from zero to deployed! ⚡
