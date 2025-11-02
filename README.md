# Calendar App - Demanual AI Assignment

A modern event management calendar application built with Next.js, Firebase Authentication, and Supabase for data persistence.

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
  - Persistent storage with Supabase

- **Modern UI**
  - Responsive design
  - Clean, professional interface
  - Smooth transitions and hover effects
  - Dark mode support

## Tech Stack

- **Frontend**: Next.js 13 (App Router)
- **Authentication**: Firebase Authentication
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui, Tailwind CSS
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites

1. Node.js 18+ installed
2. A Firebase project
3. A Supabase project

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google Sign-In
4. Get your Firebase configuration from Project Settings > General

### Supabase Setup

The database schema is already created. The `events` table includes:
- Row Level Security (RLS) enabled
- Policies for authenticated users to manage their own events
- Indexes for optimal query performance

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

## Deployment on Vercel

1. Push your code to a GitHub repository

2. Go to [Vercel](https://vercel.com)

3. Click "New Project" and import your repository

4. Configure environment variables:
   - Add all the variables from your `.env.local` file
   - Make sure to use the production Firebase configuration

5. Click "Deploy"

6. Once deployed, configure Firebase:
   - Add your Vercel domain to Firebase authorized domains
   - Update Google OAuth redirect URIs if using Google Sign-In

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
├── hooks/
│   └── useSupabase.ts     # Supabase client hook
├── lib/
│   ├── firebase.ts        # Firebase configuration
│   └── supabase.ts        # Supabase client
└── README.md
```

## Security

- All routes are protected with authentication checks
- Supabase Row Level Security (RLS) ensures users can only access their own events
- Firebase handles secure authentication and token management
- Environment variables keep sensitive credentials secure

## Database Schema

### Events Table

```sql
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  color text DEFAULT '#3b82f6',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## Support

For issues or questions, please open an issue on GitHub.

## License

MIT License
