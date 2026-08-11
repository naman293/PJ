import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="filmstrip" aria-hidden />
      <div className="mx-auto grid max-w-site gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="display text-[clamp(1.88rem,4.5vw,3.38rem)]">
            Explaining
            <br />
            the <span className="text-signal">noise</span>.
          </p>
          <p className="mt-4 max-w-sm text-ash">
            Movie breakdowns, story theories and internet culture — decoded by PJ.
          </p>
        </div>

        <div>
          <p className="label-xs text-signal">Pages</p>
          <ul className="mt-4 space-y-2 text-ash">
            <li>
              <Link to="/" className="hover:text-paper">
                Home
              </Link>
            </li>
            <li>
              <Link to="/videos" className="hover:text-paper">
                Videos
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-paper">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-paper">
                Contact & Press
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-xs text-signal">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-ash">
            <li>
              <a href="https://whatsapp.com/channel/0029VaijEmHFXUuRpevXex2o" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                WhatsApp Channel
              </a>
            </li>
            <li>
              <a href="https://instagram.com/pjexplained" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/pjexplained" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com/pjexplained" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-2 border-t border-border px-6 py-6">
        <p className="label-xs text-ash">© {new Date().getFullYear()} PJ Explained</p>
        <p className="label-xs text-ash">Cinematic • Editorial • Sharp • Human</p>
      </div>
    </footer>
  );
}
