import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This rug isn't in our atelier.</p>
        <Link href="/" className="mt-6 inline-flex px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-glow">Go home</Link>
      </div>
    </div>
  );
}
