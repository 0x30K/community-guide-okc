import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signout } from "../auth/actions";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch profile data from the profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-background-dark min-h-screen py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Cover / Header */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
            <div className="h-32 bg-primary/10 relative">
              <div className="absolute -bottom-12 left-8">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center overflow-hidden">
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt={profile.full_name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-primary">person</span>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-black tracking-tight mb-1">{profile?.full_name || "Community Member"}</h1>
                <p className="text-slate-500 font-medium">{user.email}</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all border border-slate-100 dark:border-slate-700">
                  Edit Profile
                </button>
                <form action={signout}>
                   <button type="submit" className="px-6 py-3 bg-red-50 text-red-600 dark:bg-red-900/20 rounded-xl font-bold text-sm hover:bg-red-100 transition-all">
                    Sign Out
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar Stats */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Saved Resources</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Reviews</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black">0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-black">Saved Resources</h2>
                  <Link href="/resources" className="text-primary font-bold text-sm hover:underline">Browse Directory →</Link>
                </div>

                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                   <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 block">bookmark</span>
                   <p className="text-slate-500 font-medium">You haven't saved any resources yet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
