/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional. Your phone number, only shown when site.showPhone is true. Never commit it. */
  readonly VITE_CONTACT_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
