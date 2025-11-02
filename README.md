# Calendar App - Demanual AI Assignment (Task done) // written by lakshmans singh

A modern event management calendar application built with Next.js, Firebase Authentication, and localStorage for data persistence.

## Features

- **Firebase Authentication**
  - Email/Password Sign up and Login
  - Google Sign-In integration
  - Protected routes with authentication checks

- **Event Management**
  - Google Calendar-like interface
  - Click on any date to create events
  - Edit and delete existing events
  - Color-coded events
  - Event details with title, description, start/end times
  - Persistent storage with localStoage

- **Modern UI**
  - Responsive design
  - Clean, professional interface
  - Smooth transitions and hover effects
  - Dark mode support

## Tech Stack

- **Frontend**: Next.js 13 (App Router)
- **Authentication**: Firebase Authentication
- **Database**: localStorage (PostgreSQL later)
- **UI Components**: shadcn/ui, Tailwind CSS
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites

1. Node.js 18+ installed
2. A Firebase project
3. A LocalStorage project

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google Sign-In
4. Get your Firebase configuration from Project Settings > General


### Environment Variables

Create a `.env.local` file in the root directory with your credentials:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
 
## Usage

1. **Sign Up**: Create a new account using email/password or Google Sign-In
2. **Login**: Access your calendar with your credentials
3. **Create Event**: Click on any date to open the event dialog
4. **Edit Event**: Click on an existing event to modify its details
5. **Delete Event**: Open an event and click the delete button
6. **Navigate**: Use the arrow buttons or "Today" button to navigate months

## Project Structure

```
├── app/
│   ├── calendar/          # Calendar page (protected)
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── page.tsx           # Landing page
├── components/
│   ├── Calendar.tsx       # Main calendar component
│   ├── EventDialog.tsx    # Event creation/editing dialog
│   └── ui/                # shadcn/ui components
├── contexts/
│   └── AuthContext.tsx    # Firebase authentication context
├── lib/
│   ├── firebase.ts        # Firebase configuration 