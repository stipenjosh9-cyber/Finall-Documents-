import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Download, Loader2, Printer, User, Globe, Landmark, ChevronDown, Check, Search, PenTool, FileText, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { LetterData } from './types';
import { universities } from './data/universities';
import SignaturePad, { SignaturePadHandle } from './components/SignaturePad';
import LetterPreview from './components/LetterPreview';

// --- CUSTOM ANIMATED DROPDOWN COMPONENT WITH SEARCH ---
interface Option {
  label: string;
  value: string;
  subLabel?: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ElementType;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange, placeholder, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
        setSearch("");
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(search.toLowerCase()) || 
    (opt.subLabel && opt.subLabel.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className="relative mb-6 group" ref={dropdownRef}>
      <label className="block text-[11px] font-bold text-gray-500 uppercase mb-2 flex items-center gap-2 group-focus-within:text-blue-600 transition-colors">
        {Icon && <Icon size={14} className="text-gray-400 group-focus-within:text-blue-600" />} {label}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 bg-white border rounded-xl text-sm font-bold flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${isOpen ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-gray-200 hover:border-gray-300'}`}
      >
        <div className="flex flex-col overflow-hidden">
            <span className={`truncate ${value ? "text-gray-900" : "text-gray-400"}`}>
            {selectedOption?.label || placeholder}
            </span>
            {selectedOption?.subLabel && (
                <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider mt-0.5 truncate">{selectedOption.subLabel}</span>
            )}
        </div>
        <ChevronDown size={18} className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top">
          <div className="p-2 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10">
            <div className="relative group/search">
                <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within/search:text-blue-500 transition-colors"/>
                <input 
                    ref={inputRef}
                    type="text" 
                    className="w-full text-xs bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 font-medium" 
                    placeholder="Type to filter..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
          </div>
          
          <div className="max-h-[280px] overflow-y-auto p-1 scrollbar-hide">
            {filteredOptions.length > 0 ? filteredOptions.map(opt => (
              <div 
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                  setSearch("");
                }}
                className={`px-3 py-3 rounded-lg text-sm cursor-pointer flex items-center justify-between hover:bg-blue-50 transition-colors group mb-0.5 ${value === opt.value ? 'bg-blue-50/80 text-blue-700' : 'text-gray-700'}`}
              >
                <div className="flex flex-col">
                    <span className={`font-medium ${value === opt.value ? 'font-bold' : ''}`}>{opt.label}</span>
                    {opt.subLabel && <span className="text-[10px] text-gray-400 group-hover:text-blue-400">{opt.subLabel}</span>}
                </div>
                {value === opt.value && <Check size={16} className="text-blue-600 animate-in zoom-in duration-300"/>}
              </div>
            )) : (
              <div className="px-4 py-8 text-xs text-gray-400 text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Search size={14} className="text-gray-300"/>
                  </div>
                  <span>No results for "{search}"</span>
              </div>
            )}
          </div>
          {filteredOptions.length > 0 && (
              <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-center">
                  Showing {filteredOptions.length} options
              </div>
          )}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  // Auth States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoginAnimating, setIsLoginAnimating] = useState(false);

  // App States
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  
  // Data States
  const countries = useMemo(() => Array.from(new Set(universities.map(u => u.country))).sort(), []);
  const [selectedCountry, setSelectedCountry] = useState('Indonesia');
  const [letterData, setLetterData] = useState<LetterData>({
    studentName: 'TURNIP WILLIAM',
    fatherName: 'BODAT WILLIAM',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    signature: null,
    customFields: [],
    universityId: 'ui_id'
  });

  const letterRef = useRef<HTMLDivElement>(null);
  const signaturePadRef = useRef<SignaturePadHandle>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const availableUniversities = useMemo(() => {
    return universities.filter(u => u.country === selectedCountry);
  }, [selectedCountry]);

  // Handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
        setIsLoginAnimating(true);
        setTimeout(() => {
            setIsAuthenticated(true);
        }, 800);
    } else {
        setLoginError('Invalid credentials');
        setTimeout(() => setLoginError(''), 2000);
    }
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    const firstUni = universities.find(u => u.country === country);
    if (firstUni) handleUniversityChange(firstUni.id);
  };

  const handleUniversityChange = (uniId: string) => {
    const uni = universities.find(u => u.id === uniId);
    if (uni) {
        setLetterData(prev => ({
            ...prev,
            universityId: uniId,
            date: new Date().toLocaleDateString(uni.locale, { day: 'numeric', month: 'long', year: 'numeric' })
        }));
    }
  };

  const generatePDF = async (download = false) => {
    if (!letterRef.current) return;
    setGeneratingPdf(true);
    setLoadingStep(0);
    
    const steps = [
        "Rasterizing Vector Graphics...",
        "Applying Digital Signature...",
        "Verifying Authenticity Token...",
        "Finalizing PDF Structure..."
    ];
    
    for (let i = 0; i < steps.length; i++) {
        setLoadingStep(i);
        await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      const originalTransform = letterRef.current.style.transform;
      letterRef.current.style.transform = 'none';

      const canvas = await html2canvas(letterRef.current, {
        scale: 4.0, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
      });

      letterRef.current.style.transform = originalTransform;
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      const uniName = universities.find(u => u.id === letterData.universityId)?.name || "Oxford";
      const fileName = `${uniName}_Enrollment_${letterData.studentName.replace(/\s+/g, '_')}.pdf`;
      
      if (download) pdf.save(fileName);
    } catch (err) { alert("Error generating PDF."); }
    finally { setGeneratingPdf(false); }
  };

  useEffect(() => {
    const updateScale = () => {
      if (previewContainerRef.current) {
        const containerHeight = previewContainerRef.current.clientHeight;
        const targetHeight = 1123; 
        const newScale = (containerHeight / targetHeight) * 0.95;
        setScale(Math.min(newScale, 1.1)); 
      }
    };
    window.addEventListener('resize', updateScale);
    updateScale();
    setTimeout(updateScale, 100);
    return () => window.removeEventListener('resize', updateScale);
  }, [letterData, isAuthenticated]);

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
        <div className={`min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden relative ${isLoginAnimating ? 'animate-out fade-out duration-700 zoom-out-110' : ''}`}>
             
             {/* Background Animation */}
             <div className="absolute inset-0 z-0">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black"></div>
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             </div>

             <div className="w-full max-w-md relative z-10">
                 <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                     <div className="text-center mb-8">
                         <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/50 mb-4">
                             <ShieldCheck className="text-white" size={32} />
                         </div>
                         <h1 className="text-3xl font-bold text-white tracking-tight">UniGlobal<span className="text-blue-500">.Doc</span></h1>
                         <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Official Document Generator</p>
                     </div>

                     <form onSubmit={handleLogin} className="space-y-5">
                         <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase mb-2 pl-1">Username</label>
                             <div className="relative group">
                                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                 <input 
                                    type="text" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                    placeholder="Enter username"
                                 />
                             </div>
                         </div>
                         <div>
                             <label className="block text-xs font-bold text-gray-400 uppercase mb-2 pl-1">Password</label>
                             <div className="relative group">
                                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                 <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                    placeholder="••••••••"
                                 />
                             </div>
                         </div>

                         {loginError && <p className="text-red-500 text-xs text-center font-bold animate-pulse">{loginError}</p>}

                         <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group">
                             <span>Access Portal</span>
                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                     </form>
                     
                     <div className="mt-8 text-center">
                         <p className="text-[10px] text-gray-500 font-mono">SECURE CONNECTION • ENCRYPTED</p>
                     </div>
                 </div>
             </div>
        </div>
    );
  }

  // --- MAIN APP ---
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-gray-200 selection:text-gray-900 overflow-hidden flex flex-col relative text-gray-800 animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">
      
      {/* LOADING OVERLAY */}
      {generatingPdf && (
          <div className="fixed inset-0 z-50 bg-[#000510]/95 backdrop-blur-3xl flex items-center justify-center flex-col animate-in fade-in duration-500">
             {/* ... same luxury loader code ... */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
             </div>
             <div className="relative mb-12">
                 <div className="w-40 h-40 border-[2px] border-blue-900/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute inset-0 w-40 h-40 border-[2px] border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
                 <div className="absolute inset-2 w-36 h-36 border-[2px] border-b-purple-500 border-t-transparent border-l-transparent border-r-transparent rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck size={48} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-bounce" strokeWidth={1.5} />
                 </div>
             </div>
             <div className="text-center space-y-4 relative z-10 w-full max-w-md px-4">
                 <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 tracking-tighter uppercase">Generating Secure PDF</h3>
                 <div className="h-8 overflow-hidden relative flex items-center justify-center">
                    <p className="text-blue-100 text-sm font-bold font-mono tracking-widest uppercase flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300" key={loadingStep}>
                        {["Rasterizing Vector Graphics...", "Applying Digital Signature...", "Verifying Authenticity Token...", "Finalizing PDF Structure..."][loadingStep] || "Initializing..."}
                    </p>
                 </div>
                 <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-700 ease-out" style={{ width: `${((loadingStep + 1) / 4) * 100}%` }}></div>
                 </div>
             </div>
          </div>
      )}

      <header className="relative z-20 bg-white border-b border-gray-200 sticky top-0 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-20 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 text-white p-3 rounded-xl shadow-lg shadow-gray-200/50 ring-1 ring-gray-900/5">
              <Printer size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight font-serif flex items-center gap-2">
                Uni<span className="text-blue-600">Global</span>.Doc
              </h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5 flex items-center gap-2">
                <Globe size={10} /> {countries.length} Countries • {universities.length} Universities
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-bold">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> SYSTEM ACTIVE
             </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-[1800px] mx-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-6 h-[calc(100vh-80px)]">
          
          {/* LEFT SIDEBAR: CONTROLS */}
          <div className="w-full lg:w-[420px] flex flex-col gap-4 overflow-y-auto pr-1 pb-10 scrollbar-hide">
            
            {/* Control Panel Header */}
            <div className="bg-white p-1.5 rounded-2xl flex gap-1 shadow-sm border border-gray-200">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-gray-900 text-white shadow-md transition-all">
                  <FileText size={14} />Document Editor
              </button>
            </div>

            <div className="flex flex-col gap-4 animate-in slide-in-from-left-4 duration-500 delay-100">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative">
                  
                  {/* COUNTRY SELECTOR */}
                  <CustomSelect 
                    label="Select Country" 
                    icon={Globe}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries.map(c => ({ label: c, value: c }))}
                  />

                  {/* UNIVERSITY SELECTOR */}
                  <CustomSelect 
                    label="Select University" 
                    icon={Landmark}
                    value={letterData.universityId}
                    onChange={handleUniversityChange}
                    options={availableUniversities.map(u => ({ label: u.name, value: u.id, subLabel: u.department }))}
                    placeholder="Search for university..."
                  />

                  <div className="h-px bg-gray-100 my-6"></div>

                  <h2 className="text-sm font-extrabold text-gray-900 tracking-tight mb-6 flex items-center gap-2"><User size={16}/> Student Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase mb-2">Student Full Name</label>
                      <input type="text" name="studentName" value={letterData.studentName} onChange={(e) => setLetterData(prev => ({...prev, studentName: e.target.value}))} className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:border-gray-900 outline-none transition-all focus:ring-4 focus:ring-gray-100" placeholder="e.g. James Smith" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase mb-2">Guardian / Father Name</label>
                      <input type="text" name="fatherName" value={letterData.fatherName} onChange={(e) => setLetterData(prev => ({...prev, fatherName: e.target.value}))} className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:border-gray-900 outline-none transition-all focus:ring-4 focus:ring-gray-100" placeholder="e.g. Robert Smith" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase mb-2">Date of Issue (Auto-Localized)</label>
                      <input type="text" name="date" value={letterData.date} onChange={(e) => setLetterData(prev => ({...prev, date: e.target.value}))} className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:border-gray-900 outline-none transition-all focus:ring-4 focus:ring-gray-100" />
                    </div>
                    <div className="pt-2">
                        <label className="block text-[11px] font-bold text-gray-500 uppercase mb-2 flex items-center gap-2"><PenTool size={12}/> Official Signature</label>
                        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden hover:border-gray-400 transition-colors"><SignaturePad ref={signaturePadRef} onEnd={(url) => setLetterData(prev => ({...prev, signature: url}))} /></div>
                    </div>
                  </div>
                </div>
                <button onClick={() => generatePDF(true)} disabled={generatingPdf} className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 shadow-xl shadow-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    {generatingPdf ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} className="group-hover:scale-110 transition-transform"/>}
                    <span className="relative z-10">Download Official PDF</span>
                </button>
            </div>
          </div>

          {/* RIGHT PREVIEW AREA */}
          <div ref={previewContainerRef} className="w-full lg:flex-1 bg-[#2C3E50] rounded-3xl border-4 border-gray-800 flex items-center justify-center relative overflow-hidden shadow-2xl min-h-[500px] group animate-in zoom-in-95 duration-700 delay-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2">
              <span className="bg-gray-900/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/10"><Landmark size={10} />{universities.find(u => u.id === letterData.universityId)?.country.toUpperCase() || 'OFFICIAL'}</span>
            </div>
            
            <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center', width: '210mm' }} className="transition-transform duration-500 py-10 ease-out">
                <div className="relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-300">
                    <LetterPreview ref={letterRef} data={letterData} />
                </div>
            </div>
            
            <div className="absolute bottom-6 left-6 text-[10px] font-mono text-gray-300 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 opacity-50 group-hover:opacity-100 transition-opacity">View: {Math.round(scale * 100)}% | Print-Ready A4</div>
          </div>
      </main>
    </div>
  );
};

export default App;