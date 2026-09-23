type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center justify-center py-6">
      {children}
    </main>
  );
}
