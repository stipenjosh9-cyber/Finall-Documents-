import React, { forwardRef } from 'react';
import { LetterData } from '../types';
import { universities } from '../data/universities';
import { QrCode } from 'lucide-react';

interface LetterPreviewProps {
  data: LetterData;
}

// Helper to parse "**bold**" text from strings
const renderTextWithBold = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={index} className="font-bold">{part.slice(2, -2)}</span>;
    }
    return <span key={index}>{part}</span>;
  });
};

// --- DYNAMIC UNIVERSITY LOGO COMPONENT ---
const UniversityLogo = ({ id, color, name }: { id: string, color: string, name: string }) => {
  const svgClass = "w-full h-full drop-shadow-sm";

  // Check if we have a specific SVG for this ID
  switch (id) {
    case 'oxford_uk':
      return (
        <svg viewBox="0 0 120 140" className={svgClass}>
           <path d="M10 10 L10 70 C10 110 60 135 60 135 C60 135 110 110 110 70 L110 10 Z" fill={color} stroke="none" />
           <path d="M15 15 L15 70 C15 105 60 128 60 128 C60 128 105 105 105 70 L105 15 Z" fill="none" stroke="#FFF" strokeWidth="2.5" />
           <rect x="35" y="30" width="50" height="25" fill="#FFF" rx="1" />
           <text x="60" y="47" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif" fontWeight="bold">DOMINUS</text>
           <rect x="35" y="60" width="50" height="25" fill="#FFF" rx="1" />
           <text x="60" y="77" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif" fontWeight="bold">ILLUMINATIO</text>
           <rect x="35" y="90" width="50" height="25" fill="#FFF" rx="1" />
           <text x="60" y="107" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif" fontWeight="bold">MEA</text>
        </svg>
      );

    case 'harvard_usa':
      return (
        <svg viewBox="0 0 120 140" className={svgClass}>
            <path d="M10 10 L10 90 C10 120 60 135 60 135 C60 135 110 120 110 90 L110 10 Z" fill={color} />
            <rect x="30" y="30" width="25" height="30" fill="#FFF" />
            <text x="42.5" y="50" textAnchor="middle" fontSize="10" fill={color} fontWeight="bold">VE</text>
            <rect x="65" y="30" width="25" height="30" fill="#FFF" />
            <text x="77.5" y="50" textAnchor="middle" fontSize="10" fill={color} fontWeight="bold">RI</text>
            <rect x="47.5" y="70" width="25" height="30" fill="#FFF" />
            <text x="60" y="90" textAnchor="middle" fontSize="10" fill={color} fontWeight="bold">TAS</text>
            <path d="M20 100 Q60 130 100 100" fill="none" stroke="#FFF" strokeWidth="2" />
        </svg>
      );

    case 'ui_id':
      return (
        <svg viewBox="0 0 120 140" className={svgClass}>
             <circle cx="60" cy="70" r="55" fill={color} />
             <path d="M60 20 L60 120 M60 20 L40 50 M60 20 L80 50 M60 60 L30 80 M60 60 L90 80" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
             <path d="M40 90 L20 100 M80 90 L100 100" stroke="#FFF" strokeWidth="4" />
        </svg>
      );
    
    case 'ugm_id':
      return (
         <svg viewBox="0 0 120 140" className={svgClass}>
            <circle cx="60" cy="70" r="50" fill="none" stroke={color} strokeWidth="5" />
            <path d="M60 20 L72 55 L108 55 L78 78 L90 112 L60 90 L30 112 L42 78 L12 55 L48 55 Z" fill={color} transform="scale(0.9) translate(6,6)" />
            <circle cx="60" cy="70" r="15" fill="#FFF" />
         </svg>
      );

    case 'itb_id':
      return (
         <svg viewBox="0 0 120 140" className={svgClass}>
            <path d="M15 20 H105 V100 C105 120 60 135 60 135 C60 135 15 120 15 100 Z" fill={color} />
            <path d="M40 50 Q60 30 80 50 Q90 70 80 100 L60 120 L40 100 Q30 70 40 50" fill="#FFF" />
            <circle cx="45" cy="60" r="4" fill={color}/>
            <circle cx="75" cy="60" r="4" fill={color}/>
         </svg>
      );

    case 'cambridge_uk':
      return (
        <svg viewBox="0 0 120 140" className={svgClass}>
            <path d="M10 10 L10 80 C10 110 60 135 60 135 C60 135 110 110 110 80 L110 10 Z" fill={color} />
            <rect x="58" y="10" width="4" height="120" fill="#FFF" />
            <rect x="10" y="68" width="100" height="4" fill="#FFF" />
            <path d="M25 30 L45 30 L45 50 L25 50 Z" fill="#FFF" />
            <path d="M75 30 L95 30 L95 50 L75 50 Z" fill="#FFF" />
            <path d="M25 80 L45 80 L45 100 L25 100 Z" fill="#FFF" />
            <path d="M75 80 L95 80 L95 100 L75 100 Z" fill="#FFF" />
        </svg>
      );

    default:
      // SMART GENERIC FALLBACK for the newly added universities
      // Generates initials (e.g., "National University of Singapore" -> "NUS")
      const initials = name.split(' ')
        .filter(w => w.length > 2 && w !== 'University' && w !== 'of' && w !== 'The' && w !== 'College' && w !== 'Universitas' && w !== 'Institut' && w !== 'Universität' && w !== 'Université')
        .map(w => w[0])
        .join('')
        .substring(0, 3)
        .toUpperCase() || id.substring(0, 2).toUpperCase();

      return (
        <svg viewBox="0 0 120 140" className={svgClass}>
            <path d="M10 10 L10 70 C10 110 60 135 60 135 C60 135 110 110 110 70 L110 10 Z" fill={color} stroke="none" />
            <path d="M15 15 L15 70 C15 105 60 128 60 128 C60 128 105 105 105 70 L105 15 Z" fill="none" stroke="#FFF" strokeWidth="2.5" />
            
            {/* Crown Decoration */}
            <path d="M40 35 L50 20 L60 30 L70 20 L80 35" fill="none" stroke="#FFF" strokeWidth="2" />
            
            {/* Initials */}
            <text x="60" y="85" textAnchor="middle" fontSize="38" fill="#FFF" fontFamily="serif" fontWeight="bold" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
                {initials}
            </text>
        </svg>
      );
  }
};

const LetterPreview = forwardRef<HTMLDivElement, LetterPreviewProps>(({ data }, ref) => {
  const uni = universities.find(u => u.id === data.universityId) || universities[0]; 

  if (data.customFields && data.customFields.length > 0) {
      return null; // Removed AI custom fields view
  }

  return (
    <div className="w-full flex justify-center p-0 overflow-hidden">
      <div
        ref={ref}
        className="bg-white relative font-document text-gray-900 shrink-0 flex flex-col"
        style={{
          width: '210mm',
          height: '297mm',
          padding: '15mm 25mm 15mm 25mm', 
          boxSizing: 'border-box',
          lineHeight: '1.6', 
          fontSmooth: 'always',
          WebkitFontSmoothing: 'antialiased',
          fontFamily: '"Times New Roman", Times, serif'
        }}
      >
        <div className="flex flex-row items-start justify-between mb-6">
            <div className="w-[32mm] h-[38mm] flex-shrink-0 mt-1">
                <UniversityLogo id={uni.id} color={uni.color} name={uni.name} />
            </div>

            <div className="flex-1 text-right pt-2">
                <h1 className="font-bold text-[24pt] uppercase tracking-wide leading-none font-serif" style={{ color: uni.color }}>
                    {uni.name}
                </h1>
                <div className="text-[10pt] font-sans font-bold uppercase tracking-[0.2em] text-gray-500 mt-2 mb-2">
                    {uni.department.toUpperCase()}
                </div>
                <div className="text-[9pt] font-serif text-gray-500 leading-tight">
                    {uni.address.slice(0, 3).map((line, i) => (
                        <div key={i}>{line}</div>
                    ))}
                </div>
            </div>
        </div>

        <div className="w-full border-t-[2.5px] mb-6" style={{ borderColor: uni.color }}></div>

        <div className="flex justify-between items-start mb-10 px-1">
            <div className="space-y-1">
                <div className="text-[8pt] font-sans font-bold text-gray-500 uppercase tracking-widest">{uni.labels.ref || "DOCUMENT REFERENCE"}</div>
                <div className="text-[12pt] font-serif text-black">{uni.refFormat}2024/STU-{Math.floor(Math.random() * 89999 + 10000)}</div>
            </div>
            <div className="space-y-1 text-right">
                <div className="text-[8pt] font-sans font-bold text-gray-500 uppercase tracking-widest">{uni.labels.date || "DATE OF ISSUE"}</div>
                <div className="text-[12pt] font-serif text-black">{data.date}</div>
            </div>
        </div>

        <div className="mb-8 text-center">
            <h2 className="text-[16pt] font-serif font-bold uppercase tracking-wider text-black underline decoration-[1.5px] underline-offset-[6px]">
                {uni.docTitle}
            </h2>
        </div>

        <div className="mb-4 font-serif text-[12pt] font-bold text-black uppercase">
            {uni.body.salutation.replace(',', '')},
        </div>

        <div className="mb-6 font-serif text-[12pt] leading-[1.8] text-justify text-gray-900">
            {renderTextWithBold(uni.body.intro(data.studentName, data.fatherName))}
        </div>

        <div className="bg-[#F8F9FA] p-6 mb-6 border-l-0">
            <div className="grid grid-cols-[180px_1fr] gap-y-4 items-center font-serif">
                <div className="font-bold text-[#374151] text-[11pt]">{uni.labels.studentName}:</div>
                <div className="uppercase text-[11pt] tracking-wide text-black font-semibold">{data.studentName}</div>

                <div className="font-bold text-[#374151] text-[11pt]">{uni.labels.guardianName}:</div>
                <div className="uppercase text-[11pt] tracking-wide text-black">{data.fatherName}</div>

                <div className="font-bold text-[#374151] text-[11pt]">{uni.labels.status}:</div>
                <div className="flex">
                    <span className="text-[9pt] font-bold uppercase text-[#15803d] tracking-widest bg-[#dcfce7] px-3 py-1 rounded-sm shadow-sm">
                        ACTIVE • FULL TIME
                    </span>
                </div>

                <div className="font-bold text-[#374151] text-[11pt]">{uni.labels.college}:</div>
                <div className="text-[11pt] text-black">Main Campus / {uni.department}</div>
            </div>
        </div>

        <div className="mb-6 font-serif text-[12pt] leading-[1.8] text-justify text-gray-900">
             {renderTextWithBold(uni.body.details("Bachelor Degree", "Current Term"))}
        </div>

        <div className="mb-8 font-serif text-[12pt] leading-[1.8] text-justify text-gray-900">
             {renderTextWithBold(uni.body.closing)}
        </div>

        <div className="mt-auto flex justify-between items-end pb-0">
            <div className="flex flex-col gap-3">
                <div className="text-[7pt] font-sans font-bold text-gray-400 uppercase tracking-widest">AUTHENTICITY VERIFICATION</div>
                <div className="border border-black p-1 w-fit">
                     <QrCode size={48} color="black" />
                </div>
                <div className="text-[6pt] font-serif text-gray-400 max-w-[150px] leading-tight mt-1">
                    Scan to verify via the<br/>University Secure Portal.
                </div>
            </div>

            <div className="relative flex flex-col items-center w-[70mm]">
                <div className="absolute bottom-16 right-4 w-[48mm] h-[48mm] opacity-90 pointer-events-none mix-blend-multiply z-10">
                    <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-12 drop-shadow-md">
                        <defs>
                            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                        </defs>
                        <circle cx="100" cy="100" r="95" fill="none" stroke={uni.color} strokeWidth="3" />
                        <circle cx="100" cy="100" r="88" fill="none" stroke={uni.color} strokeWidth="1" />
                        <text fill={uni.color} fontSize="12" fontWeight="bold" letterSpacing="2">
                            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                {uni.logoText.top} • {uni.logoText.bottom} •
                            </textPath>
                        </text>
                         <path d="M60 100 L140 100" stroke={uni.color} strokeWidth="1" />
                         <path d="M60 110 L140 110" stroke={uni.color} strokeWidth="1" />
                         <text x="100" y="90" textAnchor="middle" fill={uni.color} fontSize="24" fontWeight="bold" fontFamily="serif">VERIFIED</text>
                         <text x="100" y="130" textAnchor="middle" fill={uni.color} fontSize="10" fontWeight="bold" fontFamily="sans-serif">OFFICIAL COPY</text>
                    </svg>
                </div>

                <div className="h-[25mm] w-full flex justify-center items-end mb-1 z-20 relative">
                     {data.signature ? (
                        <img src={data.signature} alt="Signature" className="h-full object-contain filter contrast-125" />
                    ) : (
                        <div className="text-gray-300 italic text-[10pt] font-serif">Digitally Signed</div>
                    )}
                </div>

                <div className="w-full h-[1px] bg-[#002147] mb-3"></div>

                <div className="text-center w-full z-20 relative">
                    <p className="text-[12pt] font-serif font-bold text-[#002147] leading-none mb-1">{uni.signatory.name}</p>
                    <p className="text-[8pt] font-sans font-bold uppercase tracking-widest text-gray-500">{uni.signatory.title}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
});

LetterPreview.displayName = 'LetterPreview';
export default LetterPreview;
