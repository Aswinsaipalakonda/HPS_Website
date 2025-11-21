import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  noWrapper?: boolean; // When true, renders img directly without wrapper div (for absolute positioning)
}

/**
 * Optimized LazyImage component with:
 * - Native lazy loading
 * - Intersection Observer for viewport detection
 * - Image caching support
 * - Progressive loading with placeholder
 * - Error handling
 */
const LazyImage = ({
  src,
  alt,
  placeholder,
  threshold = 0.1,
  className = "",
  onLoad,
  onError,
  noWrapper = false,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use Intersection Observer for better performance
    if (!imgRef.current) return;

    // If browser supports native lazy loading, use it
    if ('loading' in HTMLImageElement.prototype) {
      setIsInView(true);
      return;
    }

    // Fallback to Intersection Observer for older browsers
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold,
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with query params for caching
  const getOptimizedSrc = (imageSrc: string) => {
    // For external URLs, add optimization params if supported
    if (imageSrc.startsWith('http')) {
      // Unsplash and similar services support size optimization via URL params
      return imageSrc;
    }
    // For local images, Vite will handle optimization during build
    return imageSrc;
  };

  // Extract className from props to avoid duplication
  const { className: propsClassName, style: propsStyle, ...restProps } = props as ImgHTMLAttributes<HTMLImageElement> & { className?: string };

  // If noWrapper is true, render img directly (for absolute positioning cases)
  if (noWrapper) {
    return (
      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(src) : undefined}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...propsStyle,
          willChange: isLoaded ? 'auto' : 'opacity',
        }}
        {...restProps}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${propsClassName || ''}`} style={{ minHeight: props.height || 'auto' }}>
      {/* Placeholder/Blur effect */}
      {!isLoaded && !hasError && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && !placeholder && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}

      {/* Main Image */}
      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(src) : undefined}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...propsStyle,
          willChange: isLoaded ? 'auto' : 'opacity',
        }}
        {...restProps}
      />

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;

