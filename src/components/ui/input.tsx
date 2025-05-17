'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<'input'>
>(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
                             currentTarget,
                             clientX,
                             clientY,
                           }: React.MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generamos el gradiente como un elemento absolutamente posicionado
  const gradientStyle = {
    background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + 'px' : '0px'} circle 
        at ${mouseX}px ${mouseY}px,
        hsla(221.2, 83.2%, 53.3%, 0.75),
        transparent 80%
      )
    `,
  };

  return (
      <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="relative p-[3px] rounded-lg transition duration-300"
      >
        {/* Capa de gradiente DETRÁS del input y sin capturar puntero */}
        <motion.div
            style={gradientStyle}
            className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300"
        />

        {/* Input REAL, por encima */}
        <input
            type={type}
            ref={ref}
            {...props}
            className={cn(
                `relative z-10 flex h-10 w-full
           bg-background-primary/90 text-foreground rounded-md
           px-3 py-2 text-sm placeholder:text-foreground/80
           focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           transition duration-300`,
                className
            )}
        />
      </div>
  );
});
Input.displayName = 'Input';

export { Input };
