export default function Footer() {
  return (
    <footer className="relative py-10 px-6 sm:px-10 border-t border-ink-line">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-white/40 text-sm">
          Designed &amp; developed by{' '}
          <span className="text-white/70 hover:text-lime transition-colors">Syed Abdul Rafay</span>
        </p>
        <p className="font-mono text-[11px] text-white/30">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
