import { UniversityConfig } from "../types";

export const universities: UniversityConfig[] = [
  // =========================================================================
  // 1. UNITED KINGDOM (EN)
  // =========================================================================
  {
    id: "oxford_uk",
    country: "United Kingdom",
    name: "University of Oxford",
    department: "Student Registry",
    address: ["Examination Schools", "75-81 High Street", "Oxford, OX1 4BG"],
    website: "www.ox.ac.uk",
    color: "#002147",
    logoText: { top: "DOMINUS ILLUMINATIO", bottom: "MEA" },
    locale: "en-GB",
    refFormat: "REG/2024/",
    docTitle: "CERTIFICATE OF ENROLLMENT",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at the University of Oxford. The student is currently enrolled in the **Bachelor of Arts (Honours)** programme within the Faculty of Humanities.`,
      details: () => 
        `The student matriculated in Michaelmas Term 2023 and is expected to complete their final examinations in Trinity Term 2026. This course of study is delivered on-site in Oxford, United Kingdom.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Gill Aitken", title: "REGISTRAR OF THE UNIVERSITY" }
  },
  {
    id: "cambridge_uk",
    country: "United Kingdom",
    name: "University of Cambridge",
    department: "Student Registry",
    address: ["The Old Schools", "Trinity Lane", "Cambridge, CB2 1TN"],
    website: "www.cam.ac.uk",
    color: "#A3C1AD",
    logoText: { top: "HINC LUCEM", bottom: "ET POCULA SACRA" },
    locale: "en-GB",
    refFormat: "CAM/REG/",
    docTitle: "CERTIFICATE OF ENROLLMENT",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at the University of Cambridge. The student is currently enrolled in the **Bachelor of Arts (Honours)** programme within the Faculty of Humanities.`,
      details: () => 
        `The student matriculated in Michaelmas Term 2023 and is expected to complete their final examinations in Easter Term 2026. This course of study is delivered on-site in Cambridge, United Kingdom.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Dr. Anthony Freeling", title: "ACADEMIC REGISTRAR" }
  },
  {
    id: "imperial_uk",
    country: "United Kingdom",
    name: "Imperial College London",
    department: "Registry",
    address: ["South Kensington Campus", "London, SW7 2AZ", "United Kingdom"],
    website: "www.imperial.ac.uk",
    color: "#003E74",
    logoText: { top: "SCIENTIA IMPERII", bottom: "DECUS ET TUTAMEN" },
    locale: "en-GB",
    refFormat: "ICL/REG/",
    docTitle: "CERTIFICATE OF ENROLLMENT",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at Imperial College London. The student is currently enrolled in the **Bachelor of Science (Honours)** programme within the Faculty of Natural Sciences.`,
      details: () => 
        `The student matriculated in Autumn Term 2023 and is expected to complete their final examinations in Summer Term 2026. This course of study is delivered on-site in London, United Kingdom.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "David Parrott", title: "ACADEMIC REGISTRAR" }
  },
  {
    id: "ucl_uk",
    country: "United Kingdom",
    name: "University College London",
    department: "Student & Registry Services",
    address: ["Gower Street", "London, WC1E 6BT", "United Kingdom"],
    website: "www.ucl.ac.uk",
    color: "#500778",
    logoText: { top: "CUNCTI ADSINT", bottom: "MERITAEQUE EXPECTENT" },
    locale: "en-GB",
    refFormat: "UCL/SRS/",
    docTitle: "CERTIFICATE OF ENROLLMENT",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at University College London. The student is currently enrolled in the **Bachelor of Arts (Honours)** programme within the Faculty of Social & Historical Sciences.`,
      details: () => 
        `The student matriculated in September 2023 and is expected to complete their final examinations in June 2026. This course of study is delivered on-site in London, United Kingdom.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Derfel Owen", title: "DIRECTOR OF ACADEMIC SERVICES" }
  },
  {
    id: "lse_uk",
    country: "United Kingdom",
    name: "LSE",
    department: "Student Services Centre",
    address: ["Houghton Street", "London, WC2A 2AE", "United Kingdom"],
    website: "www.lse.ac.uk",
    color: "#E03C31",
    logoText: { top: "RERUM COGNOSCERE", bottom: "CAUSAS" },
    locale: "en-GB",
    refFormat: "LSE/SSC/",
    docTitle: "CERTIFICATE OF ENROLLMENT",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at the London School of Economics and Political Science. The student is currently enrolled in the **Bachelor of Science** programme within the Department of Economics.`,
      details: () => 
        `The student matriculated in Michaelmas Term 2023 and is expected to complete their final examinations in Summer Term 2026. This course of study is delivered on-site in London, United Kingdom.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Mark Heath", title: "ACADEMIC REGISTRAR" }
  },

  // =========================================================================
  // 2. UNITED STATES (EN)
  // =========================================================================
  {
    id: "harvard_usa",
    country: "United States",
    name: "Harvard University",
    department: "Faculty of Arts and Sciences",
    address: ["Massachusetts Hall", "Cambridge, MA 02138", "United States"],
    website: "www.harvard.edu",
    color: "#A51C30",
    logoText: { top: "VERITAS", bottom: "CHRISTO ET ECCLESIAE" },
    locale: "en-US",
    refFormat: "HAR/REG/",
    docTitle: "ENROLLMENT VERIFICATION",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at Harvard University. The student is currently enrolled in the **Bachelor of Arts** programme within the Faculty of Arts and Sciences.`,
      details: () => 
        `The student matriculated in the Fall Term 2023 and is expected to complete their final examinations in Spring Term 2027. This course of study is delivered on-site in Cambridge, Massachusetts.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Michael P. Smith", title: "UNIVERSITY REGISTRAR" }
  },
  {
    id: "mit_usa",
    country: "United States",
    name: "MIT",
    department: "Office of the Registrar",
    address: ["77 Massachusetts Avenue", "Cambridge, MA 02139", "United States"],
    website: "www.mit.edu",
    color: "#8A8B8C",
    logoText: { top: "MENS", bottom: "MANUS" },
    locale: "en-US",
    refFormat: "MIT/REG/",
    docTitle: "ENROLLMENT VERIFICATION",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at the Massachusetts Institute of Technology. The student is currently enrolled in the **Bachelor of Science** programme within the School of Science.`,
      details: () => 
        `The student matriculated in the Fall Term 2023 and is expected to complete their final examinations in Spring Term 2027. This course of study is delivered on-site in Cambridge, Massachusetts.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Mary Callahan", title: "REGISTRAR" }
  },
  {
    id: "stanford_usa",
    country: "United States",
    name: "Stanford University",
    department: "Office of the University Registrar",
    address: ["450 Serra Mall", "Stanford, CA 94305", "United States"],
    website: "www.stanford.edu",
    color: "#8C1515",
    logoText: { top: "DIE LUFT", bottom: "DER FREIHEIT WEHT" },
    locale: "en-US",
    refFormat: "STAN/REG/",
    docTitle: "ENROLLMENT VERIFICATION",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at Stanford University. The student is currently enrolled in the **Bachelor of Arts** programme within the School of Humanities and Sciences.`,
      details: () => 
        `The student matriculated in the Autumn Quarter 2023 and is expected to complete their final examinations in Spring Quarter 2027. This course of study is delivered on-site in Stanford, California.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Johanna Metzgar", title: "UNIVERSITY REGISTRAR" }
  },
  {
    id: "yale_usa",
    country: "United States",
    name: "Yale University",
    department: "University Registrar's Office",
    address: ["PO Box 208321", "New Haven, CT 06520", "United States"],
    website: "www.yale.edu",
    color: "#00356B",
    logoText: { top: "LUX", bottom: "ET VERITAS" },
    locale: "en-US",
    refFormat: "YALE/REG/",
    docTitle: "ENROLLMENT VERIFICATION",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at Yale University. The student is currently enrolled in the **Bachelor of Arts** programme within Yale College.`,
      details: () => 
        `The student matriculated in the Fall Term 2023 and is expected to complete their final examinations in Spring Term 2027. This course of study is delivered on-site in New Haven, Connecticut.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Emily Shandley", title: "UNIVERSITY REGISTRAR" }
  },
  {
    id: "princeton_usa",
    country: "United States",
    name: "Princeton University",
    department: "Office of the Registrar",
    address: ["Princeton", "NJ 08544", "United States"],
    website: "www.princeton.edu",
    color: "#EE7F2D",
    logoText: { top: "DEI SUB NUMINE", bottom: "VIGET" },
    locale: "en-US",
    refFormat: "PRIN/REG/",
    docTitle: "ENROLLMENT VERIFICATION",
    body: {
      salutation: "TO WHOM IT MAY CONCERN,",
      intro: (student, parent) => 
        `This is to certify that **${student}** is a registered full-time student at Princeton University. The student is currently enrolled in the **Bachelor of Arts** programme within the Undergraduate College.`,
      details: () => 
        `The student matriculated in the Fall Term 2023 and is expected to complete their final examinations in Spring Term 2027. This course of study is delivered on-site in Princeton, New Jersey.`,
      closing: "The University can confirm that the student is in good academic standing. This certificate is issued for visa, banking, or administrative purposes as requested by the student."
    },
    labels: { studentName: "Student Name", guardianName: "Guardian Record", date: "DATE OF ISSUE", ref: "DOCUMENT REFERENCE", status: "Registration Status", college: "College Affiliation" },
    signatory: { name: "Emily Shandley", title: "UNIVERSITY REGISTRAR" }
  },

  // =========================================================================
  // 3. INDONESIA (ID)
  // =========================================================================
  {
    id: "ui_id",
    country: "Indonesia",
    name: "Universitas Indonesia",
    department: "Direktorat Pendidikan",
    address: ["Kampus UI Depok", "Jawa Barat, 16424", "Indonesia"],
    website: "www.ui.ac.id",
    color: "#FFD700", 
    logoText: { top: "UNIVERSITAS INDONESIA", bottom: "VERITAS, PROBITAS, IUSTITIA" },
    locale: "id-ID",
    refFormat: "UI/REG/2025/",
    docTitle: "SURAT KETERANGAN MAHASISWA",
    body: {
      salutation: "KEPADA PIHAK YANG BERKEPENTINGAN,",
      intro: (student, parent) => 
        `Dengan ini menyatakan bahwa **${student}** adalah mahasiswa purna waktu yang terdaftar di Universitas Indonesia. Mahasiswa saat ini terdaftar dalam program **Sarjana (S1)** di dalam Fakultas Ilmu Pengetahuan Budaya.`,
      details: () => 
        `Mahasiswa melakukan imatrikulasi pada Semester Ganjil 2023 dan diperkirakan akan menyelesaikan ujian akhir pada Semester Genap 2027. Program studi ini dilaksanakan secara tatap muka di Depok, Indonesia.`,
      closing: "Universitas dapat mengonfirmasi bahwa mahasiswa dalam status akademik yang baik. Sertifikat ini diterbitkan untuk keperluan visa, perbankan, atau administrasi sebagaimana diminta oleh mahasiswa."
    },
    labels: { studentName: "NAMA MAHASISWA", guardianName: "DATA WALI", date: "TANGGAL TERBIT", ref: "REFERENSI DOKUMEN", status: "STATUS REGISTRASI", college: "AFILIASI FAKULTAS" },
    signatory: { name: "Prof. Dr. Ari Kuncoro, S.E.", title: "REKTOR UNIVERSITAS" }
  },
  {
    id: "ugm_id",
    country: "Indonesia",
    name: "Universitas Gadjah Mada",
    department: "Direktorat Pendidikan",
    address: ["Bulaksumur, Caturtunggal", "Sleman, DIY 55281", "Indonesia"],
    website: "www.ugm.ac.id",
    color: "#163E5A",
    logoText: { top: "UNIVERSITAS GADJAH MADA", bottom: "YOGYAKARTA" },
    locale: "id-ID",
    refFormat: "UGM/AKD/2025/",
    docTitle: "SURAT KETERANGAN MAHASISWA",
    body: {
      salutation: "KEPADA PIHAK YANG BERKEPENTINGAN,",
      intro: (student, parent) => 
        `Dengan ini menyatakan bahwa **${student}** adalah mahasiswa purna waktu yang terdaftar di Universitas Gadjah Mada. Mahasiswa saat ini terdaftar dalam program **Sarjana (S1)** di dalam Fakultas Ilmu Budaya.`,
      details: () => 
        `Mahasiswa melakukan imatrikulasi pada Semester Ganjil 2023 dan diperkirakan akan menyelesaikan ujian akhir pada Semester Genap 2027. Program studi ini dilaksanakan secara tatap muka di Yogyakarta, Indonesia.`,
      closing: "Universitas dapat mengonfirmasi bahwa mahasiswa dalam status akademik yang baik. Sertifikat ini diterbitkan untuk keperluan visa, perbankan, atau administrasi sebagaimana diminta oleh mahasiswa."
    },
    labels: { studentName: "NAMA MAHASISWA", guardianName: "DATA WALI", date: "TANGGAL TERBIT", ref: "REFERENSI DOKUMEN", status: "STATUS REGISTRASI", college: "AFILIASI FAKULTAS" },
    signatory: { name: "Prof. dr. Ova Emilia, Ph.D.", title: "REKTOR UNIVERSITAS" }
  },
  {
    id: "itb_id",
    country: "Indonesia",
    name: "Institut Teknologi Bandung",
    department: "Direktorat Pendidikan",
    address: ["Jl. Ganesha No.10", "Bandung, 40132", "Indonesia"],
    website: "www.itb.ac.id",
    color: "#0F4C81",
    logoText: { top: "INSTITUT TEKNOLOGI BANDUNG", bottom: "IN HARMONIA PROGRESSIO" },
    locale: "id-ID",
    refFormat: "ITB/REG/",
    docTitle: "SURAT KETERANGAN MAHASISWA",
    body: {
      salutation: "KEPADA PIHAK YANG BERKEPENTINGAN,",
      intro: (student, parent) => 
        `Dengan ini menyatakan bahwa **${student}** adalah mahasiswa purna waktu yang terdaftar di Institut Teknologi Bandung. Mahasiswa saat ini terdaftar dalam program **Sarjana (S1)** di dalam Sekolah Teknik Elektro dan Informatika.`,
      details: () => 
        `Mahasiswa melakukan imatrikulasi pada Semester I 2023 dan diperkirakan akan menyelesaikan ujian akhir pada Semester II 2027. Program studi ini dilaksanakan secara tatap muka di Bandung, Indonesia.`,
      closing: "Universitas dapat mengonfirmasi bahwa mahasiswa dalam status akademik yang baik. Sertifikat ini diterbitkan untuk keperluan visa, perbankan, atau administrasi sebagaimana diminta oleh mahasiswa."
    },
    labels: { studentName: "NAMA MAHASISWA", guardianName: "DATA WALI", date: "TANGGAL TERBIT", ref: "REFERENSI DOKUMEN", status: "STATUS REGISTRASI", college: "AFILIASI FAKULTAS" },
    signatory: { name: "Prof. Reini Wirahadikusumah", title: "REKTOR INSTITUT" }
  },
  {
    id: "ipb_id",
    country: "Indonesia",
    name: "IPB University",
    department: "Direktorat Administrasi Pendidikan",
    address: ["Kampus IPB Dramaga", "Bogor, 16680", "Indonesia"],
    website: "www.ipb.ac.id",
    color: "#005596",
    logoText: { top: "INSTITUT PERTANIAN BOGOR", bottom: "BOGOR, INDONESIA" },
    locale: "id-ID",
    refFormat: "IPB/REG/",
    docTitle: "SURAT KETERANGAN MAHASISWA",
    body: {
      salutation: "KEPADA PIHAK YANG BERKEPENTINGAN,",
      intro: (student, parent) => 
        `Dengan ini menyatakan bahwa **${student}** adalah mahasiswa purna waktu yang terdaftar di IPB University. Mahasiswa saat ini terdaftar dalam program **Sarjana (S1)** di dalam Fakultas Pertanian.`,
      details: () => 
        `Mahasiswa melakukan imatrikulasi pada Semester Ganjil 2023 dan diperkirakan akan menyelesaikan ujian akhir pada Semester Genap 2027. Program studi ini dilaksanakan secara tatap muka di Bogor, Indonesia.`,
      closing: "Universitas dapat mengonfirmasi bahwa mahasiswa dalam status akademik yang baik. Sertifikat ini diterbitkan untuk keperluan visa, perbankan, atau administrasi sebagaimana diminta oleh mahasiswa."
    },
    labels: { studentName: "NAMA MAHASISWA", guardianName: "DATA WALI", date: "TANGGAL TERBIT", ref: "REFERENSI DOKUMEN", status: "STATUS REGISTRASI", college: "AFILIASI FAKULTAS" },
    signatory: { name: "Prof. Dr. Arif Satria", title: "REKTOR UNIVERSITAS" }
  },
  {
    id: "unair_id",
    country: "Indonesia",
    name: "Universitas Airlangga",
    department: "Direktorat Pendidikan",
    address: ["Kampus C Mulyorejo", "Surabaya, 60115", "Indonesia"],
    website: "www.unair.ac.id",
    color: "#FFD200",
    logoText: { top: "UNIVERSITAS AIRLANGGA", bottom: "SURABAYA" },
    locale: "id-ID",
    refFormat: "UNAIR/REG/",
    docTitle: "SURAT KETERANGAN MAHASISWA",
    body: {
      salutation: "KEPADA PIHAK YANG BERKEPENTINGAN,",
      intro: (student, parent) => 
        `Dengan ini menyatakan bahwa **${student}** adalah mahasiswa purna waktu yang terdaftar di Universitas Airlangga. Mahasiswa saat ini terdaftar dalam program **Sarjana (S1)** di dalam Fakultas Kedokteran.`,
      details: () => 
        `Mahasiswa melakukan imatrikulasi pada Semester Ganjil 2023 dan diperkirakan akan menyelesaikan ujian akhir pada Semester Genap 2027. Program studi ini dilaksanakan secara tatap muka di Surabaya, Indonesia.`,
      closing: "Universitas dapat mengonfirmasi bahwa mahasiswa dalam status akademik yang baik. Sertifikat ini diterbitkan untuk keperluan visa, perbankan, atau administrasi sebagaimana diminta oleh mahasiswa."
    },
    labels: { studentName: "NAMA MAHASISWA", guardianName: "DATA WALI", date: "TANGGAL TERBIT", ref: "REFERENSI DOKUMEN", status: "STATUS REGISTRASI", college: "AFILIASI FAKULTAS" },
    signatory: { name: "Prof. Dr. Moh. Nasih", title: "REKTOR UNIVERSITAS" }
  },

  // =========================================================================
  // 4. GERMANY (DE)
  // =========================================================================
  {
    id: "tum_de",
    country: "Germany",
    name: "Technical University of Munich",
    department: "Immatrikulationsamt",
    address: ["Arcisstraße 21", "80333 München", "Deutschland"],
    website: "www.tum.de",
    color: "#3070B3",
    logoText: { top: "TECHNISCHE UNIVERSITÄT", bottom: "MÜNCHEN" },
    locale: "de-DE",
    refFormat: "TUM/IMM/",
    docTitle: "IMMATRIKULATIONSBESCHEINIGUNG",
    body: {
      salutation: "AN ALLE, DIE ES BETRIFFT,",
      intro: (student, parent) => 
        `Hiermit wird bescheinigt, dass **${student}** als Vollzeitstudent an der Technical University of Munich eingeschrieben ist. Der Student ist derzeit im Studiengang **Bachelor of Science** an der Fakultät für Informatik immatrikuliert.`,
      details: () => 
        `Der Student wurde im Wintersemester 2023 immatrikuliert und wird voraussichtlich im Sommersemester 2027 seine Abschlussprüfungen ablegen. Dieser Studiengang wird vor Ort in München, Deutschland, durchgeführt.`,
      closing: "Die Universität bestätigt, dass sich der Student in gutem akademischen Status befindet. Diese Bescheinigung wird auf Antrag des Studenten für Visa-, Bank- oder Verwaltungszwecke ausgestellt."
    },
    labels: { studentName: "NAME DES STUDENTEN", guardianName: "DATEN DES ELTERNTEILS", date: "AUSSTELLUNGSDATUM", ref: "DOKUMENTENREFERENZ", status: "IMMATRIKULATIONSSTATUS", college: "FAKULTÄTSZUGEHÖRIGKEIT" },
    signatory: { name: "Prof. Dr. Thomas Hofmann", title: "PRÄSIDENT" }
  },
  {
    id: "lmu_de",
    country: "Germany",
    name: "LMU Munich",
    department: "Studentenkanzlei",
    address: ["Geschwister-Scholl-Platz 1", "80539 München", "Deutschland"],
    website: "www.lmu.de",
    color: "#00883A",
    logoText: { top: "LUDWIG-MAXIMILIANS", bottom: "UNIVERSITÄT MÜNCHEN" },
    locale: "de-DE",
    refFormat: "LMU/REG/",
    docTitle: "IMMATRIKULATIONSBESCHEINIGUNG",
    body: {
      salutation: "AN ALLE, DIE ES BETRIFFT,",
      intro: (student, parent) => 
        `Hiermit wird bescheinigt, dass **${student}** als Vollzeitstudent an der Ludwig-Maximilians-Universität München eingeschrieben ist. Der Student ist derzeit im Studiengang **Bachelor of Arts** an der Fakultät für Kulturwissenschaften immatrikuliert.`,
      details: () => 
        `Der Student wurde im Wintersemester 2023 immatrikuliert und wird voraussichtlich im Sommersemester 2027 seine Abschlussprüfungen ablegen. Dieser Studiengang wird vor Ort in München, Deutschland, durchgeführt.`,
      closing: "Die Universität bestätigt, dass sich der Student in gutem akademischen Status befindet. Diese Bescheinigung wird auf Antrag des Studenten für Visa-, Bank- oder Verwaltungszwecke ausgestellt."
    },
    labels: { studentName: "NAME DES STUDENTEN", guardianName: "DATEN DES ELTERNTEILS", date: "AUSSTELLUNGSDATUM", ref: "DOKUMENTENREFERENZ", status: "IMMATRIKULATIONSSTATUS", college: "FAKULTÄTSZUGEHÖRIGKEIT" },
    signatory: { name: "Prof. Dr. Bernd Huber", title: "PRÄSIDENT" }
  },
  {
    id: "heidelberg_de",
    country: "Germany",
    name: "Heidelberg University",
    department: "Studierendensekretariat",
    address: ["Seminarstraße 2", "69117 Heidelberg", "Deutschland"],
    website: "www.uni-heidelberg.de",
    color: "#990000",
    logoText: { top: "RUPRECHT-KARLS", bottom: "UNIVERSITÄT HEIDELBERG" },
    locale: "de-DE",
    refFormat: "HEI/REG/",
    docTitle: "IMMATRIKULATIONSBESCHEINIGUNG",
    body: {
      salutation: "AN ALLE, DIE ES BETRIFFT,",
      intro: (student, parent) => 
        `Hiermit wird bescheinigt, dass **${student}** als Vollzeitstudent an der Universität Heidelberg eingeschrieben ist. Der Student ist derzeit im Studiengang **Bachelor of Science** an der Medizinischen Fakultät immatrikuliert.`,
      details: () => 
        `Der Student wurde im Wintersemester 2023 immatrikuliert und wird voraussichtlich im Sommersemester 2027 seine Abschlussprüfungen ablegen. Dieser Studiengang wird vor Ort in Heidelberg, Deutschland, durchgeführt.`,
      closing: "Die Universität bestätigt, dass sich der Student in gutem akademischen Status befindet. Diese Bescheinigung wird auf Antrag des Studenten für Visa-, Bank- oder Verwaltungszwecke ausgestellt."
    },
    labels: { studentName: "NAME DES STUDENTEN", guardianName: "DATEN DES ELTERNTEILS", date: "AUSSTELLUNGSDATUM", ref: "DOKUMENTENREFERENZ", status: "IMMATRIKULATIONSSTATUS", college: "FAKULTÄTSZUGEHÖRIGKEIT" },
    signatory: { name: "Prof. Dr. Bernhard Eitel", title: "REKTOR" }
  },
  {
    id: "humboldt_de",
    country: "Germany",
    name: "Humboldt University of Berlin",
    department: "Immatrikulationsbüro",
    address: ["Unter den Linden 6", "10099 Berlin", "Deutschland"],
    website: "www.hu-berlin.de",
    color: "#00376C",
    logoText: { top: "HUMBOLDT-UNIVERSITÄT", bottom: "ZU BERLIN" },
    locale: "de-DE",
    refFormat: "HU/REG/",
    docTitle: "IMMATRIKULATIONSBESCHEINIGUNG",
    body: {
      salutation: "AN ALLE, DIE ES BETRIFFT,",
      intro: (student, parent) => 
        `Hiermit wird bescheinigt, dass **${student}** als Vollzeitstudent an der Humboldt-Universität zu Berlin eingeschrieben ist. Der Student ist derzeit im Studiengang **Bachelor of Arts** an der Philosophischen Fakultät immatrikuliert.`,
      details: () => 
        `Der Student wurde im Wintersemester 2023 immatrikuliert und wird voraussichtlich im Sommersemester 2027 seine Abschlussprüfungen ablegen. Dieser Studiengang wird vor Ort in Berlin, Deutschland, durchgeführt.`,
      closing: "Die Universität bestätigt, dass sich der Student in gutem akademischen Status befindet. Diese Bescheinigung wird auf Antrag des Studenten für Visa-, Bank- oder Verwaltungszwecke ausgestellt."
    },
    labels: { studentName: "NAME DES STUDENTEN", guardianName: "DATEN DES ELTERNTEILS", date: "AUSSTELLUNGSDATUM", ref: "DOKUMENTENREFERENZ", status: "IMMATRIKULATIONSSTATUS", college: "FAKULTÄTSZUGEHÖRIGKEIT" },
    signatory: { name: "Prof. Dr. Julia von Blumenthal", title: "PRÄSIDENTIN" }
  },
  {
    id: "rwth_de",
    country: "Germany",
    name: "RWTH Aachen University",
    department: "Studierendensekretariat",
    address: ["Templergraben 55", "52062 Aachen", "Deutschland"],
    website: "www.rwth-aachen.de",
    color: "#00549F",
    logoText: { top: "RHEINISCH-WESTFÄLISCHE", bottom: "TECHNISCHE HOCHSCHULE" },
    locale: "de-DE",
    refFormat: "RWTH/REG/",
    docTitle: "IMMATRIKULATIONSBESCHEINIGUNG",
    body: {
      salutation: "AN ALLE, DIE ES BETRIFFT,",
      intro: (student, parent) => 
        `Hiermit wird bescheinigt, dass **${student}** als Vollzeitstudent an der RWTH Aachen eingeschrieben ist. Der Student ist derzeit im Studiengang **Bachelor of Science** an der Fakultät für Maschinenwesen immatrikuliert.`,
      details: () => 
        `Der Student wurde im Wintersemester 2023 immatrikuliert und wird voraussichtlich im Sommersemester 2027 seine Abschlussprüfungen ablegen. Dieser Studiengang wird vor Ort in Aachen, Deutschland, durchgeführt.`,
      closing: "Die Universität bestätigt, dass sich der Student in gutem akademischen Status befindet. Diese Bescheinigung wird auf Antrag des Studenten für Visa-, Bank- oder Verwaltungszwecke ausgestellt."
    },
    labels: { studentName: "NAME DES STUDENTEN", guardianName: "DATEN DES ELTERNTEILS", date: "AUSSTELLUNGSDATUM", ref: "DOKUMENTENREFERENZ", status: "IMMATRIKULATIONSSTATUS", college: "FAKULTÄTSZUGEHÖRIGKEIT" },
    signatory: { name: "Prof. Dr. Ulrich Rüdiger", title: "REKTOR" }
  },

  // =========================================================================
  // 5. FRANCE (FR)
  // =========================================================================
  {
    id: "sorbonne_fr",
    country: "France",
    name: "Sorbonne University",
    department: "Service des Inscriptions",
    address: ["21 Rue de l'École de Médecine", "75006 Paris", "France"],
    website: "www.sorbonne-universite.fr",
    color: "#182B49",
    logoText: { top: "SORBONNE", bottom: "UNIVERSITÉ" },
    locale: "fr-FR",
    refFormat: "SORB/INS/",
    docTitle: "CERTIFICAT DE SCOLARITÉ",
    body: {
      salutation: "À QUI DE DROIT,",
      intro: (student, parent) => 
        `La présente atteste que **${student}** est inscrit(e) en tant qu'étudiant(e) à temps plein à Sorbonne Université. L'étudiant(e) suit actuellement le programme de **Licence** au sein de la Faculté des Lettres.`,
      details: () => 
        `L'étudiant(e) s'est immatriculé(e) au semestre d'automne 2023 et devrait terminer ses examens finaux au semestre de printemps 2027. Ce cursus est dispensé en présentiel à Paris, France.`,
      closing: "L'Université confirme que l'étudiant(e) est en règle académique. Ce certificat est délivré pour des besoins de visa, bancaires ou administratifs à la demande de l'étudiant(e)."
    },
    labels: { studentName: "NOM DE L'ÉTUDIANT", guardianName: "DOSSIER DU TUTEUR", date: "DATE D'ÉMISSION", ref: "RÉFÉRENCE DOCUMENT", status: "STATUT D'INSCRIPTION", college: "AFFILIATION" },
    signatory: { name: "Nathalie Drach-Temam", title: "PRÉSIDENTE" }
  },
  {
    id: "psl_fr",
    country: "France",
    name: "PSL University",
    department: "Service de la Scolarité",
    address: ["60 Rue Mazarine", "75006 Paris", "France"],
    website: "www.psl.eu",
    color: "#000000",
    logoText: { top: "UNIVERSITÉ PARIS", bottom: "SCIENCES & LETTRES" },
    locale: "fr-FR",
    refFormat: "PSL/REG/",
    docTitle: "CERTIFICAT DE SCOLARITÉ",
    body: {
      salutation: "À QUI DE DROIT,",
      intro: (student, parent) => 
        `La présente atteste que **${student}** est inscrit(e) en tant qu'étudiant(e) à temps plein à l'Université PSL. L'étudiant(e) suit actuellement le programme de **Licence** au sein du cycle pluridisciplinaire.`,
      details: () => 
        `L'étudiant(e) s'est immatriculé(e) au semestre d'automne 2023 et devrait terminer ses examens finaux au semestre de printemps 2027. Ce cursus est dispensé en présentiel à Paris, France.`,
      closing: "L'Université confirme que l'étudiant(e) est en règle académique. Ce certificat est délivré pour des besoins de visa, bancaires ou administratifs à la demande de l'étudiant(e)."
    },
    labels: { studentName: "NOM DE L'ÉTUDIANT", guardianName: "DOSSIER DU TUTEUR", date: "DATE D'ÉMISSION", ref: "RÉFÉRENCE DOCUMENT", status: "STATUT D'INSCRIPTION", college: "AFFILIATION" },
    signatory: { name: "Alain Fuchs", title: "PRÉSIDENT" }
  },
  {
    id: "polytechnique_fr",
    country: "France",
    name: "École Polytechnique",
    department: "Registraire",
    address: ["Route de Saclay", "91128 Palaiseau", "France"],
    website: "www.polytechnique.edu",
    color: "#E30613",
    logoText: { top: "ÉCOLE", bottom: "POLYTECHNIQUE" },
    locale: "fr-FR",
    refFormat: "POLY/REG/",
    docTitle: "CERTIFICAT DE SCOLARITÉ",
    body: {
      salutation: "À QUI DE DROIT,",
      intro: (student, parent) => 
        `La présente atteste que **${student}** est inscrit(e) en tant qu'étudiant(e) à temps plein à l'École Polytechnique. L'étudiant(e) suit actuellement le programme de **Bachelor of Science** au sein du département des sciences.`,
      details: () => 
        `L'étudiant(e) s'est immatriculé(e) au semestre d'automne 2023 et devrait terminer ses examens finaux au semestre de printemps 2027. Ce cursus est dispensé en présentiel à Palaiseau, France.`,
      closing: "L'Université confirme que l'étudiant(e) est en règle académique. Ce certificat est délivré pour des besoins de visa, bancaires ou administratifs à la demande de l'étudiant(e)."
    },
    labels: { studentName: "NOM DE L'ÉTUDIANT", guardianName: "DOSSIER DU TUTEUR", date: "DATE D'ÉMISSION", ref: "RÉFÉRENCE DOCUMENT", status: "STATUT D'INSCRIPTION", college: "AFFILIATION" },
    signatory: { name: "Eric Labaye", title: "PRÉSIDENT" }
  },
  {
    id: "saclay_fr",
    country: "France",
    name: "Paris-Saclay University",
    department: "Service des Études",
    address: ["Bâtiment Bréguet", "91190 Gif-sur-Yvette", "France"],
    website: "www.universite-paris-saclay.fr",
    color: "#51255E",
    logoText: { top: "UNIVERSITÉ", bottom: "PARIS-SACLAY" },
    locale: "fr-FR",
    refFormat: "UPS/REG/",
    docTitle: "CERTIFICAT DE SCOLARITÉ",
    body: {
      salutation: "À QUI DE DROIT,",
      intro: (student, parent) => 
        `La présente atteste que **${student}** est inscrit(e) en tant qu'étudiant(e) à temps plein à l'Université Paris-Saclay. L'étudiant(e) suit actuellement le programme de **Licence** au sein de la Faculté des Sciences.`,
      details: () => 
        `L'étudiant(e) s'est immatriculé(e) au semestre d'automne 2023 et devrait terminer ses examens finaux au semestre de printemps 2027. Ce cursus est dispensé en présentiel à Gif-sur-Yvette, France.`,
      closing: "L'Université confirme que l'étudiant(e) est en règle académique. Ce certificat est délivré pour des besoins de visa, bancaires ou administratifs à la demande de l'étudiant(e)."
    },
    labels: { studentName: "NOM DE L'ÉTUDIANT", guardianName: "DOSSIER DU TUTEUR", date: "DATE D'ÉMISSION", ref: "RÉFÉRENCE DOCUMENT", status: "STATUT D'INSCRIPTION", college: "AFFILIATION" },
    signatory: { name: "Estelle Iacona", title: "PRÉSIDENTE" }
  },
  {
    id: "bordeaux_fr",
    country: "France",
    name: "University of Bordeaux",
    department: "Scolarité Centrale",
    address: ["351 Cours de la Libération", "33405 Talence", "France"],
    website: "www.u-bordeaux.fr",
    color: "#7A1C29",
    logoText: { top: "UNIVERSITÉ", bottom: "DE BORDEAUX" },
    locale: "fr-FR",
    refFormat: "UB/REG/",
    docTitle: "CERTIFICAT DE SCOLARITÉ",
    body: {
      salutation: "À QUI DE DROIT,",
      intro: (student, parent) => 
        `La présente atteste que **${student}** est inscrit(e) en tant qu'étudiant(e) à temps plein à l'Université de Bordeaux. L'étudiant(e) suit actuellement le programme de **Licence** au sein du Collège Sciences et Technologies.`,
      details: () => 
        `L'étudiant(e) s'est immatriculé(e) au semestre d'automne 2023 et devrait terminer ses examens finaux au semestre de printemps 2027. Ce cursus est dispensé en présentiel à Bordeaux, France.`,
      closing: "L'Université confirme que l'étudiant(e) est en règle académique. Ce certificat est délivré pour des besoins de visa, bancaires ou administratifs à la demande de l'étudiant(e)."
    },
    labels: { studentName: "NOM DE L'ÉTUDIANT", guardianName: "DOSSIER DU TUTEUR", date: "DATE D'ÉMISSION", ref: "RÉFÉRENCE DOCUMENT", status: "STATUT D'INSCRIPTION", college: "AFFILIATION" },
    signatory: { name: "Dean Lewis", title: "PRÉSIDENT" }
  },

  // =========================================================================
  // 6. JAPAN (JP)
  // =========================================================================
  {
    id: "utokyo_jp",
    country: "Japan",
    name: "The University of Tokyo",
    department: "Registrar's Office",
    address: ["7-3-1 Hongo", "Bunkyo-ku, Tokyo 113-8654", "Japan"],
    website: "www.u-tokyo.ac.jp",
    color: "#2C3E50", 
    logoText: { top: "THE UNIVERSITY", bottom: "OF TOKYO" },
    locale: "ja-JP",
    refFormat: "UT/REG/",
    docTitle: "在学証明書",
    body: {
      salutation: "関係者各位,",
      intro: (student, parent) => 
        `**${student}** は、東京大学の正規学生として登録されていることを証明します。当学生は現在、教養学部の **学士課程** に在籍しています。`,
      details: () => 
        `当学生は2023年秋学期に入学し、2027年春学期に最終試験を完了する予定です。この課程は、日本、東京にて対面形式で行われます。`,
      closing: "当大学は、学生の学業成績が良好であることを確認します。本証明書は、学生の要請により、ビザ、銀行、または行政手続きのために発行されました。"
    },
    labels: { studentName: "氏名", guardianName: "保護者記録", date: "発行日", ref: "文書番号", status: "登録状況", college: "所属カレッジ" },
    signatory: { name: "Teruo Fujii", title: "総長" }
  },
  {
    id: "kyoto_jp",
    country: "Japan",
    name: "Kyoto University",
    department: "Education Promotion",
    address: ["Yoshida-honmachi", "Sakyo-ku, Kyoto 606-8501", "Japan"],
    website: "www.kyoto-u.ac.jp",
    color: "#003366",
    logoText: { top: "KYOTO", bottom: "UNIVERSITY" },
    locale: "ja-JP",
    refFormat: "KU/REG/",
    docTitle: "在学証明書",
    body: {
      salutation: "関係者各位,",
      intro: (student, parent) => 
        `**${student}** は、京都大学の正規学生として登録されていることを証明します。当学生は現在、総合人間学部の **学士課程** に在籍しています。`,
      details: () => 
        `当学生は2023年秋学期に入学し、2027年春学期に最終試験を完了する予定です。この課程は、日本、京都にて対面形式で行われます。`,
      closing: "当大学は、学生の学業成績が良好であることを確認します。本証明書は、学生の要請により、ビザ、銀行、または行政手続きのために発行されました。"
    },
    labels: { studentName: "氏名", guardianName: "保護者記録", date: "発行日", ref: "文書番号", status: "登録状況", college: "所属カレッジ" },
    signatory: { name: "Nagahiro Minato", title: "総長" }
  },
  {
    id: "osaka_jp",
    country: "Japan",
    name: "Osaka University",
    department: "Student Affairs",
    address: ["1-1 Yamadaoka", "Suita, Osaka 565-0871", "Japan"],
    website: "www.osaka-u.ac.jp",
    color: "#0072BC",
    logoText: { top: "OSAKA", bottom: "UNIVERSITY" },
    locale: "ja-JP",
    refFormat: "OU/REG/",
    docTitle: "在学証明書",
    body: {
      salutation: "関係者各位,",
      intro: (student, parent) => 
        `**${student}** は、大阪大学の正規学生として登録されていることを証明します。当学生は現在、工学部の **学士課程** に在籍しています。`,
      details: () => 
        `当学生は2023年秋学期に入学し、2027年春学期に最終試験を完了する予定です。この課程は、日本、大阪にて対面形式で行われます。`,
      closing: "当大学は、学生の学業成績が良好であることを確認します。本証明書は、学生の要請により、ビザ、銀行、または行政手続きのために発行されました。"
    },
    labels: { studentName: "氏名", guardianName: "保護者記録", date: "発行日", ref: "文書番号", status: "登録状況", college: "所属カレッジ" },
    signatory: { name: "Shojiro Nishio", title: "総長" }
  },
  {
    id: "titech_jp",
    country: "Japan",
    name: "Tokyo Institute of Technology",
    department: "Student Division",
    address: ["2-12-1 Ookayama", "Meguro-ku, Tokyo 152-8550", "Japan"],
    website: "www.titech.ac.jp",
    color: "#004F9F",
    logoText: { top: "TOKYO", bottom: "TECH" },
    locale: "ja-JP",
    refFormat: "TIT/REG/",
    docTitle: "在学証明書",
    body: {
      salutation: "関係者各位,",
      intro: (student, parent) => 
        `**${student}** は、東京工業大学の正規学生として登録されていることを証明します。当学生は現在、工学院の **学士課程** に在籍しています。`,
      details: () => 
        `当学生は2023年秋学期に入学し、2027年春学期に最終試験を完了する予定です。この課程は、日本、東京にて対面形式で行われます。`,
      closing: "当大学は、学生の学業成績が良好であることを確認します。本証明書は、学生の要請により、ビザ、銀行、または行政手続きのために発行されました。"
    },
    labels: { studentName: "氏名", guardianName: "保護者記録", date: "発行日", ref: "文書番号", status: "登録状況", college: "所属カレッジ" },
    signatory: { name: "Kazuya Masu", title: "学長" }
  },
  {
    id: "tohoku_jp",
    country: "Japan",
    name: "Tohoku University",
    department: "Education and Student Support",
    address: ["2-1-1 Katahira", "Aoba-ku, Sendai 980-8577", "Japan"],
    website: "www.tohoku.ac.jp",
    color: "#5C315E",
    logoText: { top: "TOHOKU", bottom: "UNIVERSITY" },
    locale: "ja-JP",
    refFormat: "TU/REG/",
    docTitle: "在学証明書",
    body: {
      salutation: "関係者各位,",
      intro: (student, parent) => 
        `**${student}** は、東北大学の正規学生として登録されていることを証明します。当学生は現在、理学部の **学士課程** に在籍しています。`,
      details: () => 
        `当学生は2023年秋学期に入学し、2027年春学期に最終試験を完了する予定です。この課程は、日本、仙台にて対面形式で行われます。`,
      closing: "当大学は、学生の学業成績が良好であることを確認します。本証明書は、学生の要請により、ビザ、銀行、または行政手続きのために発行されました。"
    },
    labels: { studentName: "氏名", guardianName: "保護者記録", date: "発行日", ref: "文書番号", status: "登録状況", college: "所属カレッジ" },
    signatory: { name: "Hideo Ohno", title: "総長" }
  },

  // =========================================================================
  // 7. SOUTH KOREA (KR)
  // =========================================================================
  {
    id: "snu_kr",
    country: "South Korea",
    name: "Seoul National University",
    department: "Office of Admissions",
    address: ["1 Gwanak-ro", "Gwanak-gu, Seoul 08826", "South Korea"],
    website: "www.snu.ac.kr",
    color: "#0F0F70",
    logoText: { top: "SEOUL NATIONAL", bottom: "UNIVERSITY" },
    locale: "ko-KR",
    refFormat: "SNU/REG/",
    docTitle: "재학 증명서",
    body: {
      salutation: "관계자 귀하,",
      intro: (student, parent) => 
        `위 학생 **${student}** 은(는) 서울대학교의 정규 등록 학생임을 증명합니다. 현재 인문대학의 **학사 과정** 에 재학 중입니다.`,
      details: () => 
        `본 학생은 2023년 가을 학기에 입학하였으며, 2027년 봄 학기에 최종 시험을 마칠 예정입니다. 본 과정은 대한민국 서울에서 대면 수업으로 진행됩니다.`,
      closing: "본 대학은 학생의 학업 상태가 양호함을 확인합니다. 이 증명서는 학생의 요청에 따라 비자, 은행 또는 행정 목적으로 발급되었습니다."
    },
    labels: { studentName: "학생 성명", guardianName: "보호자 기록", date: "발급일", ref: "문서 참조 번호", status: "등록 상태", college: "소속 대학" },
    signatory: { name: "Ryu Hong Lim", title: "총장" }
  },
  {
    id: "kaist_kr",
    country: "South Korea",
    name: "KAIST",
    department: "Academic Registrar's Team",
    address: ["291 Daehak-ro", "Yuseong-gu, Daejeon 34141", "South Korea"],
    website: "www.kaist.ac.kr",
    color: "#004191",
    logoText: { top: "KOREA ADVANCED", bottom: "INSTITUTE" },
    locale: "ko-KR",
    refFormat: "KAIST/REG/",
    docTitle: "재학 증명서",
    body: {
      salutation: "관계자 귀하,",
      intro: (student, parent) => 
        `위 학생 **${student}** 은(는) 한국과학기술원(KAIST)의 정규 등록 학생임을 증명합니다. 현재 공과대학의 **학사 과정** 에 재학 중입니다.`,
      details: () => 
        `본 학생은 2023년 가을 학기에 입학하였으며, 2027년 봄 학기에 최종 시험을 마칠 예정입니다. 본 과정은 대한민국 대전에서 대면 수업으로 진행됩니다.`,
      closing: "본 대학은 학생의 학업 상태가 양호함을 확인합니다. 이 증명서는 학생의 요청에 따라 비자, 은행 또는 행정 목적으로 발급되었습니다."
    },
    labels: { studentName: "학생 성명", guardianName: "보호자 기록", date: "발급일", ref: "문서 참조 번호", status: "등록 상태", college: "소속 대학" },
    signatory: { name: "Kwang Hyung Lee", title: "총장" }
  },
  {
    id: "yonsei_kr",
    country: "South Korea",
    name: "Yonsei University",
    department: "Office of Academic Affairs",
    address: ["50 Yonsei-ro", "Seodaemun-gu, Seoul 03722", "South Korea"],
    website: "www.yonsei.ac.kr",
    color: "#182C89",
    logoText: { top: "YONSEI", bottom: "UNIVERSITY" },
    locale: "ko-KR",
    refFormat: "YON/REG/",
    docTitle: "재학 증명서",
    body: {
      salutation: "관계자 귀하,",
      intro: (student, parent) => 
        `위 학생 **${student}** 은(는) 연세대학교의 정규 등록 학생임을 증명합니다. 현재 상경대학의 **학사 과정** 에 재학 중입니다.`,
      details: () => 
        `본 학생은 2023년 가을 학기에 입학하였으며, 2027년 봄 학기에 최종 시험을 마칠 예정입니다. 본 과정은 대한민국 서울에서 대면 수업으로 진행됩니다.`,
      closing: "본 대학은 학생의 학업 상태가 양호함을 확인합니다. 이 증명서는 학생의 요청에 따라 비자, 은행 또는 행정 목적으로 발급되었습니다."
    },
    labels: { studentName: "학생 성명", guardianName: "보호자 기록", date: "발급일", ref: "문서 참조 번호", status: "등록 상태", college: "소속 대학" },
    signatory: { name: "Seoung Hwan Suh", title: "총장" }
  },
  {
    id: "korea_kr",
    country: "South Korea",
    name: "Korea University",
    department: "One-Stop Service Center",
    address: ["145 Anam-ro", "Seongbuk-gu, Seoul 02841", "South Korea"],
    website: "www.korea.ac.kr",
    color: "#9A0000",
    logoText: { top: "KOREA", bottom: "UNIVERSITY" },
    locale: "ko-KR",
    refFormat: "KU/REG/",
    docTitle: "재학 증명서",
    body: {
      salutation: "관계자 귀하,",
      intro: (student, parent) => 
        `위 학생 **${student}** 은(는) 고려대학교의 정규 등록 학생임을 증명합니다. 현재 정경대학의 **학사 과정** 에 재학 중입니다.`,
      details: () => 
        `본 학생은 2023년 가을 학기에 입학하였으며, 2027년 봄 학기에 최종 시험을 마칠 예정입니다. 본 과정은 대한민국 서울에서 대면 수업으로 진행됩니다.`,
      closing: "본 대학은 학생의 학업 상태가 양호함을 확인합니다. 이 증명서는 학생의 요청에 따라 비자, 은행 또는 행정 목적으로 발급되었습니다."
    },
    labels: { studentName: "학생 성명", guardianName: "보호자 기록", date: "발급일", ref: "문서 참조 번호", status: "등록 상태", college: "소속 대학" },
    signatory: { name: "Chung Jin Taek", title: "총장" }
  },
  {
    id: "postech_kr",
    country: "South Korea",
    name: "POSTECH",
    department: "Educational Affairs",
    address: ["77 Cheongam-ro", "Nam-gu, Pohang 37673", "South Korea"],
    website: "www.postech.ac.kr",
    color: "#C70940",
    logoText: { top: "POSTECH", bottom: "UNIVERSITY" },
    locale: "ko-KR",
    refFormat: "POS/REG/",
    docTitle: "재학 증명서",
    body: {
      salutation: "관계자 귀하,",
      intro: (student, parent) => 
        `위 학생 **${student}** 은(는) 포항공과대학교(POSTECH)의 정규 등록 학생임을 증명합니다. 현재 무은재학부의 **학사 과정** 에 재학 중입니다.`,
      details: () => 
        `본 학생은 2023년 가을 학기에 입학하였으며, 2027년 봄 학기에 최종 시험을 마칠 예정입니다. 본 과정은 대한민국 포항에서 대면 수업으로 진행됩니다.`,
      closing: "본 대학은 학생의 학업 상태가 양호함을 확인합니다. 이 증명서는 학생의 요청에 따라 비자, 은행 또는 행정 목적으로 발급되었습니다."
    },
    labels: { studentName: "학생 성명", guardianName: "보호자 기록", date: "발급일", ref: "문서 참조 번호", status: "등록 상태", college: "소속 대학" },
    signatory: { name: "Moo Hwan Kim", title: "총장" }
  },

  // =========================================================================
  // 8. SPAIN (ES)
  // =========================================================================
  {
    id: "ub_es",
    country: "Spain",
    name: "University of Barcelona",
    department: "Secretaría de Estudiantes",
    address: ["Gran Via de les Corts Catalanes, 585", "08007 Barcelona", "España"],
    website: "www.ub.edu",
    color: "#005697",
    logoText: { top: "UNIVERSITAT", bottom: "DE BARCELONA" },
    locale: "es-ES",
    refFormat: "UB/REG/",
    docTitle: "CERTIFICADO DE MATRÍCULA",
    body: {
      salutation: "A QUIEN CORRESPONDA,",
      intro: (student, parent) => 
        `Por la presente se certifica que **${student}** es un estudiante registrado a tiempo completo en la Universidad de Barcelona. El estudiante está actualmente inscrito en el programa de **Grado** dentro de la Facultad de Filología.`,
      details: () => 
        `El estudiante se matriculó en el semestre de otoño de 2023 y se espera que complete sus exámenes finales en el semestre de primavera de 2027. Este curso se imparte de forma presencial en Barcelona, España.`,
      closing: "La Universidad confirma que el estudiante tiene un buen estatus académico. Este certificado se emite para fines de visado, bancarios o administrativos a petición del estudiante."
    },
    labels: { studentName: "NOMBRE DEL ESTUDIANTE", guardianName: "REGISTRO DEL TUTOR", date: "FECHA DE EMISIÓN", ref: "REFERENCIA DOCUMENTO", status: "ESTADO DE REGISTRO", college: "AFILIACIÓN" },
    signatory: { name: "Joan Guàrdia Olmos", title: "RECTOR" }
  },
  {
    id: "uam_es",
    country: "Spain",
    name: "Autonomous University of Madrid",
    department: "Oficina de Registro",
    address: ["Ciudad Universitaria de Cantoblanco", "28049 Madrid", "España"],
    website: "www.uam.es",
    color: "#2C3E50",
    logoText: { top: "UNIVERSIDAD AUTÓNOMA", bottom: "DE MADRID" },
    locale: "es-ES",
    refFormat: "UAM/REG/",
    docTitle: "CERTIFICADO DE MATRÍCULA",
    body: {
      salutation: "A QUIEN CORRESPONDA,",
      intro: (student, parent) => 
        `Por la presente se certifica que **${student}** es un estudiante registrado a tiempo completo en la Universidad Autónoma de Madrid. El estudiante está actualmente inscrito en el programa de **Grado** dentro de la Facultad de Ciencias.`,
      details: () => 
        `El estudiante se matriculó en el semestre de otoño de 2023 y se espera que complete sus exámenes finales en el semestre de primavera de 2027. Este curso se imparte de forma presencial en Madrid, España.`,
      closing: "La Universidad confirma que el estudiante tiene un buen estatus académico. Este certificado se emite para fines de visado, bancarios o administrativos a petición del estudiante."
    },
    labels: { studentName: "NOMBRE DEL ESTUDIANTE", guardianName: "REGISTRO DEL TUTOR", date: "FECHA DE EMISIÓN", ref: "REFERENCIA DOCUMENTO", status: "ESTADO DE REGISTRO", college: "AFILIACIÓN" },
    signatory: { name: "Amaya Mendikoetxea", title: "RECTORA" }
  },
  {
    id: "ucm_es",
    country: "Spain",
    name: "Complutense University of Madrid",
    department: "Secretaría General",
    address: ["Avenida de Séneca, 2", "28040 Madrid", "España"],
    website: "www.ucm.es",
    color: "#A51C30",
    logoText: { top: "UNIVERSIDAD", bottom: "COMPLUTENSE" },
    locale: "es-ES",
    refFormat: "UCM/REG/",
    docTitle: "CERTIFICADO DE MATRÍCULA",
    body: {
      salutation: "A QUIEN CORRESPONDA,",
      intro: (student, parent) => 
        `Por la presente se certifica que **${student}** es un estudiante registrado a tiempo completo en la Universidad Complutense de Madrid. El estudiante está actualmente inscrito en el programa de **Grado** dentro de la Facultad de Derecho.`,
      details: () => 
        `El estudiante se matriculó en el semestre de otoño de 2023 y se espera que complete sus exámenes finales en el semestre de primavera de 2027. Este curso se imparte de forma presencial en Madrid, España.`,
      closing: "La Universidad confirma que el estudiante tiene un buen estatus académico. Este certificado se emite para fines de visado, bancarios o administrativos a petición del estudiante."
    },
    labels: { studentName: "NOMBRE DEL ESTUDIANTE", guardianName: "REGISTRO DEL TUTOR", date: "FECHA DE EMISIÓN", ref: "REFERENCIA DOCUMENTO", status: "ESTADO DE REGISTRO", college: "AFILIACIÓN" },
    signatory: { name: "Joaquín Goyache", title: "RECTOR" }
  },
  {
    id: "upv_es",
    country: "Spain",
    name: "Polytechnic University of Valencia",
    department: "Servicio de Alumnado",
    address: ["Camino de Vera, s/n", "46022 Valencia", "España"],
    website: "www.upv.es",
    color: "#D0303F",
    logoText: { top: "UNIVERSITAT POLITÈCNICA", bottom: "DE VALÈNCIA" },
    locale: "es-ES",
    refFormat: "UPV/REG/",
    docTitle: "CERTIFICADO DE MATRÍCULA",
    body: {
      salutation: "A QUIEN CORRESPONDA,",
      intro: (student, parent) => 
        `Por la presente se certifica que **${student}** es un estudiante registrado a tiempo completo en la Universitat Politècnica de València. El estudiante está actualmente inscrito en el programa de **Grado** dentro de la Escuela Técnica Superior.`,
      details: () => 
        `El estudiante se matriculó en el semestre de otoño de 2023 y se espera que complete sus exámenes finales en el semestre de primavera de 2027. Este curso se imparte de forma presencial en Valencia, España.`,
      closing: "La Universidad confirma que el estudiante tiene un buen estatus académico. Este certificado se emite para fines de visado, bancarios o administrativos a petición del estudiante."
    },
    labels: { studentName: "NOMBRE DEL ESTUDIANTE", guardianName: "REGISTRO DEL TUTOR", date: "FECHA DE EMISIÓN", ref: "REFERENCIA DOCUMENTO", status: "ESTADO DE REGISTRO", college: "AFILIACIÓN" },
    signatory: { name: "José E. Capilla", title: "RECTOR" }
  },
  {
    id: "ugr_es",
    country: "Spain",
    name: "University of Granada",
    department: "Servicio de Admisión",
    address: ["Avenida del Hospicio, s/n", "18071 Granada", "España"],
    website: "www.ugr.es",
    color: "#CF2E2E",
    logoText: { top: "UNIVERSIDAD", bottom: "DE GRANADA" },
    locale: "es-ES",
    refFormat: "UGR/REG/",
    docTitle: "CERTIFICADO DE MATRÍCULA",
    body: {
      salutation: "A QUIEN CORRESPONDA,",
      intro: (student, parent) => 
        `Por la presente se certifica que **${student}** es un estudiante registrado a tiempo completo en la Universidad de Granada. El estudiante está actualmente inscrito en el programa de **Grado** dentro de la Facultad de Filosofía y Letras.`,
      details: () => 
        `El estudiante se matriculó en el semestre de otoño de 2023 y se espera que complete sus exámenes finales en el semestre de primavera de 2027. Este curso se imparte de forma presencial en Granada, España.`,
      closing: "La Universidad confirma que el estudiante tiene un buen estatus académico. Este certificado se emite para fines de visado, bancarios o administrativos a petición del estudiante."
    },
    labels: { studentName: "NOMBRE DEL ESTUDIANTE", guardianName: "REGISTRO DEL TUTOR", date: "FECHA DE EMISIÓN", ref: "REFERENCIA DOCUMENTO", status: "ESTADO DE REGISTRO", college: "AFILIACIÓN" },
    signatory: { name: "Pilar Aranda Ramírez", title: "RECTORA" }
  },

  // =========================================================================
  // 9. ITALY (IT)
  // =========================================================================
  {
    id: "bologna_it",
    country: "Italy",
    name: "University of Bologna",
    department: "Segreteria Studenti",
    address: ["Via Zamboni, 33", "40126 Bologna", "Italia"],
    website: "www.unibo.it",
    color: "#B13133",
    logoText: { top: "ALMA MATER STUDIORUM", bottom: "UNIVERSITÀ DI BOLOGNA" },
    locale: "it-IT",
    refFormat: "UNIBO/REG/",
    docTitle: "CERTIFICATO DI ISCRIZIONE",
    body: {
      salutation: "A CHI DI DOVERE,",
      intro: (student, parent) => 
        `Si certifica con la presente che **${student}** è uno studente regolarmente iscritto a tempo pieno presso l'Università di Bologna. Lo studente è attualmente iscritto al corso di **Laurea** all'interno della Scuola di Lettere e Beni Culturali.`,
      details: () => 
        `Lo studente si è immatricolato nel semestre autunnale 2023 e dovrebbe completare gli esami finali nel semestre primaverile 2027. Questo corso di studi si svolge in presenza a Bologna, Italia.`,
      closing: "L'Università conferma che lo studente è in regola con il percorso accademico. Questo certificato viene rilasciato per scopi visti, bancari o amministrativi su richiesta dello studente."
    },
    labels: { studentName: "NOME DELLO STUDENTE", guardianName: "REGISTRO DEL TUTORE", date: "DATA DI EMISSIONE", ref: "RIFERIMENTO DOCUMENTO", status: "STATO DI ISCRIZIONE", college: "AFFILIAZIONE" },
    signatory: { name: "Giovanni Molari", title: "RETTORE" }
  },
  {
    id: "sapienza_it",
    country: "Italy",
    name: "Sapienza University of Rome",
    department: "Segreteria Amministrativa",
    address: ["Piazzale Aldo Moro 5", "00185 Roma", "Italia"],
    website: "www.uniroma1.it",
    color: "#691C32",
    logoText: { top: "SAPIENZA", bottom: "UNIVERSITÀ DI ROMA" },
    locale: "it-IT",
    refFormat: "SAP/REG/",
    docTitle: "CERTIFICATO DI ISCRIZIONE",
    body: {
      salutation: "A CHI DI DOVERE,",
      intro: (student, parent) => 
        `Si certifica con la presente che **${student}** è uno studente regolarmente iscritto a tempo pieno presso la Sapienza Università di Roma. Lo studente è attualmente iscritto al corso di **Laurea** all'interno della Facoltà di Scienze Politiche.`,
      details: () => 
        `Lo studente si è immatricolato nel semestre autunnale 2023 e dovrebbe completare gli esami finali nel semestre primaverile 2027. Questo corso di studi si svolge in presenza a Roma, Italia.`,
      closing: "L'Università conferma che lo studente è in regola con il percorso accademico. Questo certificato viene rilasciato per scopi visti, bancari o amministrativi su richiesta dello studente."
    },
    labels: { studentName: "NOME DELLO STUDENTE", guardianName: "REGISTRO DEL TUTORE", date: "DATA DI EMISSIONE", ref: "RIFERIMENTO DOCUMENTO", status: "STATO DI ISCRIZIONE", college: "AFFILIAZIONE" },
    signatory: { name: "Antonella Polimeni", title: "RETRICE" }
  },
  {
    id: "milan_it",
    country: "Italy",
    name: "University of Milan",
    department: "Ufficio Segreterie",
    address: ["Via Festa del Perdono 7", "20122 Milano", "Italia"],
    website: "www.unimi.it",
    color: "#00477E",
    logoText: { top: "UNIVERSITÀ DEGLI STUDI", bottom: "DI MILANO" },
    locale: "it-IT",
    refFormat: "UNIMI/REG/",
    docTitle: "CERTIFICATO DI ISCRIZIONE",
    body: {
      salutation: "A CHI DI DOVERE,",
      intro: (student, parent) => 
        `Si certifica con la presente che **${student}** è uno studente regolarmente iscritto a tempo pieno presso l'Università degli Studi di Milano. Lo studente è attualmente iscritto al corso di **Laurea** all'interno della Facoltà di Studi Umanistici.`,
      details: () => 
        `Lo studente si è immatricolato nel semestre autunnale 2023 e dovrebbe completare gli esami finali nel semestre primaverile 2027. Questo corso di studi si svolge in presenza a Milano, Italia.`,
      closing: "L'Università conferma che lo studente è in regola con il percorso accademico. Questo certificato viene rilasciato per scopi visti, bancari o amministrativi su richiesta dello studente."
    },
    labels: { studentName: "NOME DELLO STUDENTE", guardianName: "REGISTRO DEL TUTORE", date: "DATA DI EMISSIONE", ref: "RIFERIMENTO DOCUMENTO", status: "STATO DI ISCRIZIONE", college: "AFFILIAZIONE" },
    signatory: { name: "Elio Franzini", title: "RETTORE" }
  },
  {
    id: "padua_it",
    country: "Italy",
    name: "University of Padua",
    department: "Servizio Segreterie",
    address: ["Via 8 Febbraio, 2", "35122 Padova", "Italia"],
    website: "www.unipd.it",
    color: "#9B0014",
    logoText: { top: "UNIVERSITAS STUDII", bottom: "PADUANI" },
    locale: "it-IT",
    refFormat: "UNIPD/REG/",
    docTitle: "CERTIFICATO DI ISCRIZIONE",
    body: {
      salutation: "A CHI DI DOVERE,",
      intro: (student, parent) => 
        `Si certifica con la presente che **${student}** è uno studente regolarmente iscritto a tempo pieno presso l'Università degli Studi di Padova. Lo studente è attualmente iscritto al corso di **Laurea** all'interno della Scuola di Psicologia.`,
      details: () => 
        `Lo studente si è immatricolato nel semestre autunnale 2023 e dovrebbe completare gli esami finali nel semestre primaverile 2027. Questo corso di studi si svolge in presenza a Padova, Italia.`,
      closing: "L'Università conferma che lo studente è in regola con il percorso accademico. Questo certificato viene rilasciato per scopi visti, bancari o amministrativi su richiesta dello studente."
    },
    labels: { studentName: "NOME DELLO STUDENTE", guardianName: "REGISTRO DEL TUTORE", date: "DATA DI EMISSIONE", ref: "RIFERIMENTO DOCUMENTO", status: "STATO DI ISCRIZIONE", college: "AFFILIAZIONE" },
    signatory: { name: "Daniela Mapelli", title: "RETRICE" }
  },
  {
    id: "pisa_it",
    country: "Italy",
    name: "University of Pisa",
    department: "Segreteria Studenti",
    address: ["Lungarno Pacinotti 43", "56126 Pisa", "Italia"],
    website: "www.unipi.it",
    color: "#003C71",
    logoText: { top: "UNIVERSITÀ", bottom: "DI PISA" },
    locale: "it-IT",
    refFormat: "UNIPI/REG/",
    docTitle: "CERTIFICATO DI ISCRIZIONE",
    body: {
      salutation: "A CHI DI DOVERE,",
      intro: (student, parent) => 
        `Si certifica con la presente che **${student}** è uno studente regolarmente iscritto a tempo pieno presso l'Università di Pisa. Lo studente è attualmente iscritto al corso di **Laurea** all'interno del Dipartimento di Fisica.`,
      details: () => 
        `Lo studente si è immatricolato nel semestre autunnale 2023 e dovrebbe completare gli esami finali nel semestre primaverile 2027. Questo corso di studi si svolge in presenza a Pisa, Italia.`,
      closing: "L'Università conferma che lo studente è in regola con il percorso accademico. Questo certificato viene rilasciato per scopi visti, bancari o amministrativi su richiesta dello studente."
    },
    labels: { studentName: "NOME DELLO STUDENTE", guardianName: "REGISTRO DEL TUTORE", date: "DATA DI EMISSIONE", ref: "RIFERIMENTO DOCUMENTO", status: "STATO DI ISCRIZIONE", college: "AFFILIAZIONE" },
    signatory: { name: "Riccardo Zucchi", title: "RETTORE" }
  },

  // =========================================================================
  // 10. MALAYSIA (MY)
  // =========================================================================
  {
    id: "um_my",
    country: "Malaysia",
    name: "Universiti Malaya",
    department: "Bahagian Akademik",
    address: ["Jalan Universiti", "50603 Kuala Lumpur", "Malaysia"],
    website: "www.um.edu.my",
    color: "#002147",
    logoText: { top: "UNIVERSITI", bottom: "MALAYA" },
    locale: "ms-MY",
    refFormat: "UM/REG/",
    docTitle: "SURAT PENGESAHAN PELAJAR",
    body: {
      salutation: "KEPADA SESIAPA YANG BERKENAAN,",
      intro: (student, parent) => 
        `Dengan ini disahkan bahawa **${student}** adalah pelajar sepenuh masa yang berdaftar di Universiti Malaya. Pelajar kini mengikuti program **Ijazah Sarjana Muda** di dalam Fakulti Sastera dan Sains Sosial.`,
      details: () => 
        `Pelajar telah mendaftar pada Semester I 2023 dan dijangka menamatkan peperiksaan akhir pada Semester II 2027. Kursus pengajian ini dijalankan secara bersemuka di Kuala Lumpur, Malaysia.`,
      closing: "Pihak Universiti mengesahkan bahawa pelajar berada dalam status akademik yang baik. Sijil ini dikeluarkan untuk tujuan visa, perbankan, atau pentadbiran seperti yang diminta oleh pelajar."
    },
    labels: { studentName: "NAMA PELAJAR", guardianName: "REKOD PENJAGA", date: "TARIKH DIKELUARKAN", ref: "RUJUKAN DOKUMEN", status: "STATUS PENDAFTARAN", college: "AFILIASI KOLEJ" },
    signatory: { name: "Prof. Dato' Ir. Dr. Mohd Hamdi", title: "NAIB CANSELOR" }
  },
  {
    id: "usm_my",
    country: "Malaysia",
    name: "Universiti Sains Malaysia",
    department: "Jabatan Pendaftar",
    address: ["11800 USM", "Pulau Pinang", "Malaysia"],
    website: "www.usm.my",
    color: "#5C2D91",
    logoText: { top: "UNIVERSITI", bottom: "SAINS MALAYSIA" },
    locale: "ms-MY",
    refFormat: "USM/REG/",
    docTitle: "SURAT PENGESAHAN PELAJAR",
    body: {
      salutation: "KEPADA SESIAPA YANG BERKENAAN,",
      intro: (student, parent) => 
        `Dengan ini disahkan bahawa **${student}** adalah pelajar sepenuh masa yang berdaftar di Universiti Sains Malaysia. Pelajar kini mengikuti program **Ijazah Sarjana Muda** di dalam Pusat Pengajian Sains Komputer.`,
      details: () => 
        `Pelajar telah mendaftar pada Semester I 2023 dan dijangka menamatkan peperiksaan akhir pada Semester II 2027. Kursus pengajian ini dijalankan secara bersemuka di Pulau Pinang, Malaysia.`,
      closing: "Pihak Universiti mengesahkan bahawa pelajar berada dalam status akademik yang baik. Sijil ini dikeluarkan untuk tujuan visa, perbankan, atau pentadbiran seperti yang diminta oleh pelajar."
    },
    labels: { studentName: "NAMA PELAJAR", guardianName: "REKOD PENJAGA", date: "TARIKH DIKELUARKAN", ref: "RUJUKAN DOKUMEN", status: "STATUS PENDAFTARAN", college: "AFILIASI KOLEJ" },
    signatory: { name: "Prof. Dato' Dr. Faisal Rafiq", title: "NAIB CANSELOR" }
  },
  {
    id: "ukm_my",
    country: "Malaysia",
    name: "Universiti Kebangsaan Malaysia",
    department: "Pusat Pengurusan Akademik",
    address: ["43600 UKM Bangi", "Selangor", "Malaysia"],
    website: "www.ukm.my",
    color: "#ED1C24",
    logoText: { top: "UNIVERSITI KEBANGSAAN", bottom: "MALAYSIA" },
    locale: "ms-MY",
    refFormat: "UKM/REG/",
    docTitle: "SURAT PENGESAHAN PELAJAR",
    body: {
      salutation: "KEPADA SESIAPA YANG BERKENAAN,",
      intro: (student, parent) => 
        `Dengan ini disahkan bahawa **${student}** adalah pelajar sepenuh masa yang berdaftar di Universiti Kebangsaan Malaysia. Pelajar kini mengikuti program **Ijazah Sarjana Muda** di dalam Fakulti Ekonomi dan Pengurusan.`,
      details: () => 
        `Pelajar telah mendaftar pada Semester I 2023 dan dijangka menamatkan peperiksaan akhir pada Semester II 2027. Kursus pengajian ini dijalankan secara bersemuka di Bangi, Malaysia.`,
      closing: "Pihak Universiti mengesahkan bahawa pelajar berada dalam status akademik yang baik. Sijil ini dikeluarkan untuk tujuan visa, perbankan, atau pentadbiran seperti yang diminta oleh pelajar."
    },
    labels: { studentName: "NAMA PELAJAR", guardianName: "REKOD PENJAGA", date: "TARIKH DIKELUARKAN", ref: "RUJUKAN DOKUMEN", status: "STATUS PENDAFTARAN", college: "AFILIASI KOLEJ" },
    signatory: { name: "Prof. Dato' Gs. Ts. Dr. Mohd Ekhwan", title: "NAIB CANSELOR" }
  },
  {
    id: "upm_my",
    country: "Malaysia",
    name: "Universiti Putra Malaysia",
    department: "Bahagian Akademik",
    address: ["43400 UPM Serdang", "Selangor", "Malaysia"],
    website: "www.upm.edu.my",
    color: "#8B0000",
    logoText: { top: "UNIVERSITI PUTRA", bottom: "MALAYSIA" },
    locale: "ms-MY",
    refFormat: "UPM/REG/",
    docTitle: "SURAT PENGESAHAN PELAJAR",
    body: {
      salutation: "KEPADA SESIAPA YANG BERKENAAN,",
      intro: (student, parent) => 
        `Dengan ini disahkan bahawa **${student}** adalah pelajar sepenuh masa yang berdaftar di Universiti Putra Malaysia. Pelajar kini mengikuti program **Ijazah Sarjana Muda** di dalam Fakulti Pertanian.`,
      details: () => 
        `Pelajar telah mendaftar pada Semester I 2023 dan dijangka menamatkan peperiksaan akhir pada Semester II 2027. Kursus pengajian ini dijalankan secara bersemuka di Serdang, Malaysia.`,
      closing: "Pihak Universiti mengesahkan bahawa pelajar berada dalam status akademik yang baik. Sijil ini dikeluarkan untuk tujuan visa, perbankan, atau pentadbiran seperti yang diminta oleh pelajar."
    },
    labels: { studentName: "NAMA PELAJAR", guardianName: "REKOD PENJAGA", date: "TARIKH DIKELUARKAN", ref: "RUJUKAN DOKUMEN", status: "STATUS PENDAFTARAN", college: "AFILIASI KOLEJ" },
    signatory: { name: "Prof. Dato' Dr. Mohd Roslan", title: "NAIB CANSELOR" }
  },
  {
    id: "utm_my",
    country: "Malaysia",
    name: "Universiti Teknologi Malaysia",
    department: "Pejabat Pendaftar",
    address: ["81310 Johor Bahru", "Johor", "Malaysia"],
    website: "www.utm.my",
    color: "#800000",
    logoText: { top: "UNIVERSITI TEKNOLOGI", bottom: "MALAYSIA" },
    locale: "ms-MY",
    refFormat: "UTM/REG/",
    docTitle: "SURAT PENGESAHAN PELAJAR",
    body: {
      salutation: "KEPADA SESIAPA YANG BERKENAAN,",
      intro: (student, parent) => 
        `Dengan ini disahkan bahawa **${student}** adalah pelajar sepenuh masa yang berdaftar di Universiti Teknologi Malaysia. Pelajar kini mengikuti program **Ijazah Sarjana Muda** di dalam Fakulti Kejuruteraan.`,
      details: () => 
        `Pelajar telah mendaftar pada Semester I 2023 dan dijangka menamatkan peperiksaan akhir pada Semester II 2027. Kursus pengajian ini dijalankan secara bersemuka di Johor Bahru, Malaysia.`,
      closing: "Pihak Universiti mengesahkan bahawa pelajar berada dalam status akademik yang baik. Sijil ini dikeluarkan untuk tujuan visa, perbankan, atau pentadbiran seperti yang diminta oleh pelajar."
    },
    labels: { studentName: "NAMA PELAJAR", guardianName: "REKOD PENJAGA", date: "TARIKH DIKELUARKAN", ref: "RUJUKAN DOKUMEN", status: "STATUS PENDAFTARAN", college: "AFILIASI KOLEJ" },
    signatory: { name: "Prof. Datuk Ir. Ts. Dr. Ahmad Fauzi", title: "NAIB CANSELOR" }
  }
];
