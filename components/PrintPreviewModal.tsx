import React from 'react';
import { X, Download, Printer, FileText, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  onPrint: () => void;
  previewImage: string | null;
  fileName: string;
  isGenerating: boolean;
}

const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({
  isOpen,
  onClose,
  onDownload,
  onPrint,
  previewImage,
  fileName,
  isGenerating
}) => {
  const [zoom, setZoom] = React.useState(100);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoom(100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Print Preview</h2>
              <p className="text-xs text-gray-500 font-medium">{fileName}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Zoom</span>
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="p-1.5 text-gray-600 hover:bg-white hover:shadow rounded-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-bold text-gray-700 w-12 text-center">{zoom}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="p-1.5 text-gray-600 hover:bg-white hover:shadow rounded-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-gray-600 hover:bg-white hover:shadow rounded-md transition-all ml-1"
                title="Reset zoom"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="px-2 py-1 bg-gray-100 rounded font-medium">A4</span>
            <span className="px-2 py-1 bg-gray-100 rounded font-medium">210 × 297 mm</span>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1 overflow-auto bg-gray-200 p-8 flex items-start justify-center min-h-[400px]">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-sm text-gray-600 font-medium">Generating preview...</p>
            </div>
          ) : previewImage ? (
            <div 
              className="bg-white shadow-2xl rounded-sm transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            >
              <img 
                src={previewImage} 
                alt="Document preview" 
                className="max-w-none"
                style={{ width: '210mm', height: 'auto' }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-gray-400">
              <FileText size={48} />
              <p className="text-sm font-medium">No preview available</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500">
            <span className="font-medium">Tip:</span> Use Ctrl+P to print directly from your browser
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onPrint}
              disabled={isGenerating || !previewImage}
              className="px-4 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer size={16} />
              Print
            </button>
            <button
              onClick={onDownload}
              disabled={isGenerating || !previewImage}
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPreviewModal;
