import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { RotateCcw, PenLine } from 'lucide-react';

interface SignaturePadProps {
  onEnd: (dataUrl: string | null) => void;
}

export interface SignaturePadHandle {
  clear: () => void;
}

const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(({ onEnd }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useImperativeHandle(ref, () => ({
    clear: handleClear
  }));

  // Initialize canvas size and context
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      
      if (canvas && container) {
        const rect = container.getBoundingClientRect();
        // High DPI scaling for crisp lines
        const dpr = window.devicePixelRatio || 1;
        
        // Set actual canvas size (memory)
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        // Set display size (css)
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.scale(dpr, dpr);
          ctx.lineWidth = 3; 
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = '#000000'; 
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Slight delay to allow container to render fully
    const timeout = setTimeout(resizeCanvas, 100);

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        clearTimeout(timeout);
    };
  }, []);

  const getPos = (e: React.PointerEvent | PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.PointerEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    setIsDrawing(true);
    setIsEmpty(false);
    
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const draw = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDrawing) return;
    
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDrawing = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDrawing) return;
    setIsDrawing(false);
    
    const canvas = canvasRef.current;
    if (canvas) {
      onEnd(canvas.toDataURL('image/png'));
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setIsEmpty(true);
      onEnd(null);
    }
  };

  return (
    <div ref={containerRef} className="relative group rounded-xl overflow-hidden cursor-crosshair h-80 w-full bg-white shadow-inner border border-gray-200 touch-none">
      {isEmpty && !isDrawing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
            <div className="bg-gray-50 p-3 rounded-full mb-2">
                <PenLine className="text-gray-300" size={24} />
            </div>
            <p className="text-gray-300 font-sans text-sm font-bold uppercase tracking-wider">Sign Here</p>
        </div>
      )}
      
      {/* Visual baseline for signature */}
      <div className="absolute bottom-16 left-8 right-8 h-[1px] bg-gray-200 pointer-events-none"></div>

      <canvas
        ref={canvasRef}
        className="block w-full h-full touch-none relative z-10"
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={endDrawing}
        onPointerLeave={endDrawing}
      />

      {/* Floating Toolbar */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={handleClear}
          type="button"
          className="flex items-center gap-2 bg-white/90 backdrop-blur text-red-500 hover:text-red-600 hover:bg-red-50 border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm transition-all text-xs font-bold uppercase tracking-wider"
        >
          <RotateCcw size={14} /> Clear
        </button>
      </div>
    </div>
  );
});

SignaturePad.displayName = 'SignaturePad';
export default SignaturePad;