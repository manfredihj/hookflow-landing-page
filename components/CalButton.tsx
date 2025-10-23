'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

interface CalButtonProps {
  calLink: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  trackEvent?: string;
  trackData?: Record<string, any>;
}

function CalButtonInner({
  calLink,
  children,
  size = "lg",
  variant = "primary",
  className,
  trackEvent = "Schedule",
  trackData
}: CalButtonProps) {
  const searchParams = useSearchParams();
  const [calUrl, setCalUrl] = useState(calLink);

  useEffect(() => {
    const fbclid = searchParams.get('fbclid');

    if (fbclid) {
      // Construir fbc igual que en WordPress
      const requestTime = Math.floor(Date.now() / 1000);
      const fbc = `fb.1.${requestTime}.${fbclid}`;

      // Obtener datos del cliente
      const eventSourceUrl = window.location.host + window.location.pathname;
      const clientUserAgent = navigator.userAgent;

      // Construir data_uuid con los parámetros de FB
      const dataUuid = `|fbc=${fbc}|client_user_agent=${clientUserAgent}|event_source_url=${eventSourceUrl}|event_time=${requestTime}|`;

      // Agregar data_uuid a la URL de Cal.com
      const url = new URL(calLink);
      url.searchParams.set('data_uuid', dataUuid);

      setCalUrl(url.toString());
    }
  }, [searchParams, calLink]);

  const handleClick = () => {
    // Abrir Cal.com en nueva pestaña
    window.open(calUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
      trackEvent={trackEvent}
      trackData={trackData}
    >
      {children}
    </Button>
  );
}

export function CalButton(props: CalButtonProps) {
  return (
    <Suspense fallback={
      <Button
        size={props.size}
        variant={props.variant}
        className={props.className}
      >
        {props.children}
      </Button>
    }>
      <CalButtonInner {...props} />
    </Suspense>
  );
}
