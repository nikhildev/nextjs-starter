import { SITE_CONFIG } from "@/src/app/config";

export default function Head() {
  return (
    <>
      <title>{SITE_CONFIG.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={SITE_CONFIG.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
