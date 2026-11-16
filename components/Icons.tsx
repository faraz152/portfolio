import { siClaude, siGithub, siKotlin, siJetpackcompose, siNextdotjs, siNestjs, siGo, siRust, siPython, siDocker } from "simple-icons";

const brands: Record<string, { path: string; hex: string }> = {
  siClaude, siKotlin, siJetpackcompose, siNextdotjs, siNestjs, siGo, siRust, siPython, siDocker, siGithub,
};

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={siGithub.path} />
    </svg>
  );
}

/* AWS wordmark + smile (simple-icons no longer ships AWS marks) */
function AwsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <text x="12" y="12.4" textAnchor="middle" fontSize="10.5" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="-.3" fill="currentColor">aws</text>
      <path d="M3.6 15.2c4.9 3.3 11.4 3.4 16.4.3" fill="none" stroke="#FF9900" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M17.4 14.4l2.9.8-.9 2.9" fill="none" stroke="#FF9900" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrandIcon({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) {
  if (name === "aws") return <AwsIcon {...props} />;
  const icon = brands[name];
  if (!icon) return null;
  const dark = icon.hex === "000000";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d={icon.path} fill={dark ? "currentColor" : `#${icon.hex}`} />
    </svg>
  );
}
