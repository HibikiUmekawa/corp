import Link from "next/link";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2H21l-7.42 8.49L22 22h-6.955l-5.1-6.17L3.9 22H2l7.87-8.99L2 2h7l4.64 5.61L18.244 2Zm-2.44 18.26h1.93L7.73 3.64H5.7l10.105 16.62Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.16 8.98 7.54 10.43.55.1.75-.24.75-.53 0-.26-.01-.95-.01-1.87-3.07.67-3.72-1.32-3.72-1.32-.5-1.29-1.21-1.64-1.21-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.2.9.1-.71.38-1.19.68-1.47-2.45-.28-5.02-1.22-5.02-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.01 1.13.87-.24 1.8-.36 2.73-.36.92 0 1.85.12 2.72.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.77 1.12 1.75 1.12 2.95 0 4.24-2.58 5.16-5.03 5.43.4.35.72 1.04.72 2.1 0 1.51-.01 2.72-.01 3.09 0 .29.2.64.76.53 4.37-1.45 7.53-5.57 7.53-10.43C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function ZennIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.439-.118.586-.353z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t py-12 md:py-16 lg:py-20 text-gray-700">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              <span className="text-xl font-bold">TS Prime</span>
            </div>
            <p className="text-sm text-muted-foreground">
              複業人材×AI開発の受託企業。DX・BPOからモバイル/WEBまで高品質に実装します。
            </p>
            <div className="flex gap-4">
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="https://x.com/ume660"
                rel="noopener noreferrer"
                target="_blank"
              >
                <XIcon className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="https://github.com/HibikiUmekawa"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="https://zenn.dev/hibikiumekawa"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ZennIcon className="h-5 w-5" />
                <span className="sr-only">Zenn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TS Prime Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
