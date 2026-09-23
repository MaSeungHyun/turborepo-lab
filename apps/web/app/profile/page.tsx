import ProfileHeader from "./_components/ProfileHeader";

export default function ProfilePage() {
  return (
    <section className="flex w-lg flex-1 flex-col gap-6 rounded-2xl bg-linear-to-b from-secondary/30 to-background p-3 shadow-md lg:w-xl">
      <ProfileHeader />
    </section>
  );
}
