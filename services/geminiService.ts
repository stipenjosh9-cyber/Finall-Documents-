// AI Service features have been removed as per request.
// This file is kept as a placeholder to maintain file structure integrity if referenced elsewhere,
// though currently unused in the main application flow.

import { LetterData } from "../types";

export const generateSampleData = async (): Promise<Partial<LetterData>> => {
    return {
      studentName: "John Doe",
      fatherName: "Richard Doe",
      date: new Date().toLocaleDateString()
    };
};

export const analyzeDocument = async (
  fileBase64: string,
  mimeType: string
): Promise<any[]> => {
    console.warn("AI Analysis feature has been disabled.");
    return [];
};
