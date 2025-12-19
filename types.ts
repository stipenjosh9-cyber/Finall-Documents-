export interface CustomField {
  id: string;
  label: string; 
  value: string;
  type: 'text' | 'textarea' | 'date';
  alignment?: 'left' | 'center' | 'right' | 'justify';
  isBold?: boolean;
  fontSize?: 'small' | 'medium' | 'large' | 'xl';
}

export interface UniversityConfig {
  id: string;
  country: string;
  name: string;
  department: string;
  address: string[];
  website: string;
  color: string; // Primary color for header/borders
  logoText: { top: string; bottom: string }; // For the circular stamp
  locale: string; // e.g., 'en-GB', 'de-DE', 'id-ID'
  
  // Dynamic Content Templates
  refFormat: string;
  docTitle: string;
  body: {
    salutation: string;
    intro: (student: string, parent: string) => string;
    details: (course: string, term: string) => string;
    closing: string;
  };
  labels: {
    studentName: string;
    guardianName: string;
    date: string;
    ref: string;
    status: string;
    college: string; // Added for 'College Affiliation' translation
  };
  signatory: {
    name: string;
    title: string;
  };
}

export interface LetterData {
  studentName: string;
  fatherName: string;
  date: string;
  signature: string | null; 
  customFields?: CustomField[];
  universityId: string; // Link to the config
}

export interface SignaturePadRef {
  clear: () => void;
  getTrimmedCanvas: () => HTMLCanvasElement;
  isEmpty: () => boolean;
}
