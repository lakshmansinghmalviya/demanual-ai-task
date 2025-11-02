# Calendar App - Project Overview

## 🎯 Assignment Completion

This project fulfills all requirements for the Demanual AI Frontend Developer assignment:

✅ Firebase Authentication (Email/Password + Google Sign-In)
✅ Google Calendar-like Event Management Interface
✅ Protected Routes & Authentication Flow
✅ Event Persistence with Supabase Database
✅ Ready for Vercel Deployment

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### Backend Services
- **Authentication**: Firebase Authentication
  - Email/Password sign up and login
  - Google OAuth integration
  - Secure token management

- **Database**: Supabase (PostgreSQL)
  - Persistent event storage
  - Row Level Security (RLS)
  - User-specific data isolation
  - Optimized indexes

## 📁 Project Structure

```
calendar-app/
├── app/                          # Next.js App Router
│   ├── calendar/                # Calendar page (protected route)
│   │   └── page.tsx            # Main calendar interface
│   ├── login/                   # Login page
│   │   └── page.tsx            # Email/Password + Google Sign-In
│   ├── signup/                  # Signup page
│   │   └── page.tsx            # New user registration
│   ├── layout.tsx              # Root layout with AuthProvider
│   ├── page.tsx                # Landing page with route protection
│   └── globals.css             # Global styles
│
├── components/                  # Reusable components
│   ├── Calendar.tsx            # Calendar grid and event display
│   ├── EventDialog.tsx         # Event creation/editing modal
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── [40+ other UI components]
│
├── contexts/                    # React context providers
│   └── AuthContext.tsx         # Firebase authentication state
│
├── hooks/                       # Custom React hooks
│   ├── useSupabase.ts         # Supabase client hook
│   └── use-toast.ts           # Toast notifications
│
├── lib/                        # Library configurations
│   ├── firebase.ts            # Firebase setup and config
│   ├── supabase.ts            # Supabase client
│   └── utils.ts               # Utility functions
│
├── public/                     # Static assets
├── .env.local                 # Environment variables (not in git)
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment config
│
└── Documentation/
    ├── README.md              # Quick start guide
    ├── SETUP_GUIDE.md         # Detailed setup instructions
    ├── ASSIGNMENT_CHECKLIST.md # Requirements verification
    └── PROJECT_OVERVIEW.md     # This file
```

## 🔐 Security Implementation

### Firebase Authentication
- Secure token-based authentication
- OAuth 2.0 for Google Sign-In
- Session management with automatic refresh
- Protected route middleware

### Supabase Row Level Security
```sql
-- Users can only view their own events
CREATE POLICY "Users can view own events"
  ON events FOR SELECT
  TO authenticated
  USING (user_id = current_setting('request.jwt.claims', true)::json->>'sub');

-- Similar policies for INSERT, UPDATE, DELETE
```

### Environment Security
- All secrets in environment variables
- .env.local excluded from git
- No hardcoded credentials
- Separate dev/prod configurations

## 🎨 UI/UX Features

### Calendar Interface
- **Monthly Grid View**: 7-column grid showing full month
- **Visual Indicators**: Current day highlighted
- **Event Display**: Color-coded events on dates
- **Overflow Handling**: Shows "+X more" for multiple events
- **Navigation**: Previous/Next month, Today button

### Event Management
- **Create**: Click any date to open event dialog
- **Edit**: Click existing event to modify
- **Delete**: Remove button in event dialog
- **Details**: Title, description, start/end time, color
- **Validation**: Form validation for required fields

### Responsive Design
- Desktop-optimized calendar grid
- Mobile-friendly navigation
- Touch-friendly interface
- Adaptive layouts

## 🔄 Data Flow

### Authentication Flow
```
1. User visits app → AuthContext checks auth state
2. Not authenticated → Redirect to /login
3. User signs in → Firebase returns auth token
4. Auth token stored → Context updates user state
5. Redirect to /calendar → Protected route accessible
```

### Event Management Flow
```
1. User clicks date → EventDialog opens
2. User fills form → Client-side validation
3. Submit event → Supabase INSERT with user_id
4. RLS check → Verifies user owns event
5. Success → Local state updated, dialog closes
6. Calendar refreshes → New event displayed
```

## 📊 Database Schema

### Events Table
```typescript
interface Event {
  id: string;              // UUID primary key
  user_id: string;         // Firebase user ID
  title: string;           // Event title (required)
  description: string;     // Event details (optional)
  start_date: string;      // ISO timestamp
  end_date: string;        // ISO timestamp
  color: string;           // Hex color code
  created_at: string;      // Auto-generated
  updated_at: string;      // Auto-generated
}
```

### Indexes
- `user_id` - Fast user-specific queries
- `start_date` - Efficient date range filtering

## 🚀 Deployment

### Build Output
```
Route (app)                    Size     First Load JS
├ ○ /                          1.96 kB  135 kB
├ ○ /calendar                  55.8 kB  182 kB
├ ○ /login                     3.37 kB  136 kB
└ ○ /signup                    3.47 kB  136 kB
```

### Performance
- Static generation where possible
- Dynamic rendering for authenticated routes
- Code splitting for optimal loading
- Tree shaking for smaller bundles

### Vercel Configuration
- Automatic deployments from Git
- Environment variables in dashboard
- Edge network distribution
- HTTPS by default

## 🧪 Testing Checklist

### Authentication
- [x] Sign up with email/password
- [x] Login with email/password
- [x] Google Sign-In
- [x] Sign out
- [x] Protected route redirection
- [x] Session persistence

### Event Management
- [x] Create event
- [x] Edit event
- [x] Delete event
- [x] Event persistence
- [x] User-specific events
- [x] Date/time handling
- [x] Color customization

### Calendar Interface
- [x] Display current month
- [x] Navigate previous/next
- [x] Today button
- [x] Event rendering
- [x] Multiple events per day
- [x] Date selection

## 📝 Environment Variables

### Required for Deployment

```bash
# Firebase (from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID

# Supabase (from Supabase Dashboard)
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 🎓 Key Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| Next.js | Framework | 13.5.1 |
| React | UI Library | 18.2.0 |
| TypeScript | Type Safety | 5.2.2 |
| Firebase | Authentication | Latest |
| Supabase | Database | Latest |
| Tailwind CSS | Styling | 3.3.3 |
| shadcn/ui | Components | Latest |

## 🔗 Quick Links

- **Firebase Console**: [console.firebase.google.com](https://console.firebase.google.com)
- **Supabase Dashboard**: Your project URL
- **Vercel Dashboard**: [vercel.com](https://vercel.com)
- **Documentation**: See README.md and SETUP_GUIDE.md

## 📈 Future Enhancements

Potential features for future iterations:
- Event reminders and notifications
- Recurring events
- Calendar sharing between users
- Event categories and filtering
- Search functionality
- Export to iCal format
- Multiple calendar views (week, day, agenda)
- Drag-and-drop event scheduling

## 🤝 Support

For setup assistance, refer to:
1. **README.md** - Quick overview and basic setup
2. **SETUP_GUIDE.md** - Detailed step-by-step instructions
3. **ASSIGNMENT_CHECKLIST.md** - Requirements verification

## ✨ Highlights

- **Production-Ready**: Built with enterprise-grade tools
- **Secure**: Proper authentication and data isolation
- **Scalable**: Database with RLS and optimized queries
- **Modern**: Latest React patterns and Next.js features
- **Maintainable**: Clean code structure and TypeScript
- **Responsive**: Works on all device sizes
- **Accessible**: Proper semantic HTML and ARIA labels

---

**Ready to deploy!** Follow SETUP_GUIDE.md for deployment instructions.
