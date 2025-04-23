import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-secondary-background py-6 px-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm font-base">
            Copyright by{" "}
            <a
              href="https://github.com/yunusmujadidi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @yunusmujadidi
            </a>
            . All rights reserved.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/yunusmujadidi/bert-hatespeech-id-next"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 neo-button py-2"
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
