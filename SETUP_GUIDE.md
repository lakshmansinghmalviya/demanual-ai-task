# Complete Setup Guide

This guide will walk you through setting up and deploying the Calendar App from scratch.

## Step 1: Firebase Setup

### Create Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "calendar-app")
4. You can disable Google Analytics if not needed
5. Click "Create project"

### Enable Authentication Methods

1. In your Firebase project, click "Authentication" in the left sidebar
2. Click "Get started" if this is your first time
3. Go to "Sign-in method" tab
4. Enable **Email/Password**:
   - Click on "Email/Password"
   - Toggle "Enable"
   - Click "Save"
5. Enable **Google**:
   - Click on "Google"
   - Toggle "Enable"
   - Select a support email
   - Click "Save"

### Get Firebase Configuration

1. Click the gear icon (⚙️) next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Register your app with a nickname
6. Copy the Firebase configuration object
7. You'll need these values:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

## Step 2: Supabase Setup

### Get Supabase Credentials

Your Supabase project is already set up with the database schema. You need:

1. **Project URL**: Found in your Supabase project settings
2. **Anon Key**: Found in Settings > API

The database table `events` has been created with:
- Proper Row Level Security (RLS) policies
- User isolation (users can only see their own events)
- Optimal indexes for performance

## Step 3: Local Development Setup

### Clone and Install

```bash
# Navigate to your project directory
cd /path/to/calendar-app

# Install dependencies
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_from_firebase
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Test Locally

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to test the application.

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/calendar-app.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - In the deployment settings, add all variables from `.env.local`
   - Click "Add" for each variable
   - Make sure to use production values

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

## Step 5: Post-Deployment Configuration

### Update Firebase Settings

1. Go to Firebase Console > Authentication > Settings
2. Scroll to "Authorized domains"
3. Add your Vercel domain: `your-project.vercel.app`

### Update Google OAuth (if using Google Sign-In)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to "APIs & Services" > "Credentials"
4. Click on your OAuth 2.0 Client ID
5. Add Authorized JavaScript origins:
   - `https://your-project.vercel.app`
6. Add Authorized redirect URIs:
   - `https://your-project.vercel.app/__/auth/handler`
7. Click "Save"

## Step 6: Verify Deployment

1. Visit your deployed URL
2. Test sign up with email/password
3. Test Google Sign-In
4. Create a few events
5. Edit and delete events
6. Test on mobile devices

## Troubleshooting

### Firebase Authentication Not Working

- Check that your domain is added to authorized domains
- Verify all Firebase env variables are correct
- Check browser console for errors

### Supabase Connection Issues

- Verify Supabase URL and anon key are correct
- Check that RLS policies are enabled
- Confirm the events table exists

### Build Failures

- Ensure all dependencies are installed
- Check that environment variables are set in Vercel
- Review build logs for specific errors

### Events Not Saving

- Check browser network tab for failed requests
- Verify user is authenticated (check console)
- Ensure Supabase policies allow the operation

## Environment Variable Checklist

Before deploying, make sure you have:

- [ ] Firebase API Key
- [ ] Firebase Auth Domain
- [ ] Firebase Project ID
- [ ] Firebase Storage Bucket
- [ ] Firebase Messaging Sender ID
- [ ] Firebase App ID
- [ ] Supabase URL
- [ ] Supabase Anon Key

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Getting Help

If you encounter issues:

1. Check the console for error messages
2. Review the Vercel deployment logs
3. Verify all environment variables are set correctly
4. Ensure Firebase and Supabase services are properly configured

---

**Congratulations!** Your calendar app should now be live and fully functional.
