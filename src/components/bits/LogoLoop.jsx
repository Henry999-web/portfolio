import React, { useMemo, useState, useCallback } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos,
  speed = 30, // Default to 30s for better visibility
  direction = 'left',
  pauseOnHover = true,
  scaleOnHover = false,
  fade = false,
  className = '',
  renderItem,
}) => {
  const [paused, setPaused] = useState(false);
  // 1. Ensure we have enough logos to fill a wide screen.
  // If we have few logos, repeat them until we have a safe amount (e.g., at least 15 items).
  const filledLogos = useMemo(() => {
    if (!logos || logos.length === 0) return [];
    
    let safeLogos = [...logos];
    const MIN_ITEMS = 16; // Arbitrary safe number to fill >1920px with small logos
    
    while (safeLogos.length < MIN_ITEMS) {
      safeLogos = [...safeLogos, ...logos];
    }
    return safeLogos;
  }, [logos]);

  const contentParams = useMemo(() => {
    return {
      '--duration': `${speed}s`,
      '--direction': direction === 'left' ? 'normal' : 'reverse',
      '--play-state': paused ? 'paused' : 'running',
    };
  }, [speed, direction]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setPaused(false);
  }, [pauseOnHover]);

  // Use focus capture to pause when any child link receives keyboard focus
  const handleFocusCapture = useCallback(() => {
    if (pauseOnHover) setPaused(true);
  }, [pauseOnHover]);

  const handleBlurCapture = useCallback(() => {
    if (pauseOnHover) setPaused(false);
  }, [pauseOnHover]);

  // Render individual item (either node or image)
  const renderLogo = (item, index) => {
    // If a custom render function is provided
    if (renderItem) return <li key={index} className="logoloop__item">{renderItem(item)}</li>;

    const content = 'node' in item ? (
      <span
        className="logoloop__node"
        aria-label={item.title || undefined}
        title={item.title || undefined}
      >
        {item.node}
      </span>
    ) : (
      <img src={item.src} alt={item.alt || ''} className="logoloop__image" loading="lazy" />
    );

    const wrappedContent = item.href ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="logoloop__link"
        aria-label={item.title || undefined}
      >
        {content}
      </a>
    ) : (
      content
    );

    return (
      <li key={index} className="logoloop__item">
        {wrappedContent}
      </li>
    );
  };

  return (
    <div
      className={`logoloop ${fade ? 'logoloop--fade' : ''} ${pauseOnHover ? 'logoloop--pause-hover' : ''} ${
        scaleOnHover ? 'logoloop--scale' : ''
      } ${className}`}
      style={contentParams}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      {/* 
         Standard Infinite Marquee:
         Two identical lists side-by-side. 
         We animate both to the left by -100% of their width.
      */}
      <ul className="logoloop__track" role="list">
        {filledLogos.map((logo, i) => (
          <li role="listitem" key={`a-${i}`} className="logoloop__item">
            {renderLogo(logo, `a-${i}`)}
          </li>
        ))}
      </ul>
      <ul className="logoloop__track" aria-hidden="true" role="list">
        {filledLogos.map((logo, i) => (
          <li role="listitem" key={`b-${i}`} className="logoloop__item">
            {renderLogo(logo, `b-${i}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default LogoLoop;
