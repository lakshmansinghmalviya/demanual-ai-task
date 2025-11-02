'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar } from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import { LogOut, Calendar as CalendarIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Event {
  id: string;
  user_id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  color: string;
}

export default function CalendarPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const storageKey = user ? `events_${user.uid}` : null;

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Load events from localStorage
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`events_${user.uid}`);
      setEvents(saved ? JSON.parse(saved) : []);
      setLoadingEvents(false);
    }
  }, [user]);

  const saveToLocalStorage = (newEvents: Event[]) => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(newEvents));
    setEvents(newEvents);
  };

  const handleAddEvent = async (event: Omit<Event, 'id' | 'user_id'>) => {
    const newEvent: Event = {
      id: crypto.randomUUID(),
      user_id: user!.uid,
      ...event,
    };
    const updated = [...events, newEvent];
    saveToLocalStorage(updated);
  };

  const handleUpdateEvent = async (id: string, updates: Partial<Event>) => {
    const updated = events.map((e) => (e.id === id ? { ...e, ...updates } : e));
    saveToLocalStorage(updated);
  };

  const handleDeleteEvent = async (id: string) => {
    const updated = events.filter((e) => e.id !== id);
    saveToLocalStorage(updated);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  if (loading || loadingEvents) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <CalendarIcon className="h-12 w-12 animate-pulse mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <CalendarIcon className="h-10 w-10" />
              My Calendar
            </h1>
            <p className="text-muted-foreground mt-2">
              Welcome back, {user.email}
            </p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <div className="bg-background rounded-xl shadow-lg p-6">
          <Calendar
            events={events}
            onAddEvent={handleAddEvent}
            onUpdateEvent={handleUpdateEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        </div>
      </div>
    </div>
  );
}
