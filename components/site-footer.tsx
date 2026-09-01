export function SiteFooter() {
  return (
    <footer className="border-t border-black/6 pb-10 pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-[var(--muted)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Software engineer portfolio v1 built with Next.js, React, and TypeScript.</p>
        <p>Designed to stay fast, readable, and easy to extend with case studies.</p>
      </div>
    </footer>
  );
}