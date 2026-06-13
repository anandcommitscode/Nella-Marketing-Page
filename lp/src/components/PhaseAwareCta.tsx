import React from 'react';
import Link from 'next/link';
import { IS_PRE_LAUNCH } from '../config/phase';

interface PhaseAwareCtaProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
  as?: 'link' | 'button';
  type?: 'button' | 'submit' | 'reset';
  preLaunchText?: string;
  postLaunchText?: string;
}

export default function PhaseAwareCta({
  className = "",
  style,
  onClick,
  children,
  as = 'link',
  type = 'button',
  preLaunchText = "join the waitlist",
  postLaunchText = "get nella on the App Store",
}: PhaseAwareCtaProps) {
  const text = IS_PRE_LAUNCH ? preLaunchText : postLaunchText;
  const href = IS_PRE_LAUNCH ? "/waitlist" : "/download";

  if (as === 'button') {
    return (
      <button
        type={type}
        className={className}
        style={style}
        onClick={onClick}
      >
        {children || text}
      </button>
    );
  }

  return (
    <Link href={href} className={className} style={style} onClick={onClick}>
      {children || text}
    </Link>
  );
}
