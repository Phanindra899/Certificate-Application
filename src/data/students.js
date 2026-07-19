// Local database of student certificate and offer letter records.

export const students = [
  {
    verificationId: "CITS7291",
    studentName: "Konduru Tharun Kumar",
    courseName: "Python Full Stack",
    category: "Internship",
    duration: "8 Weeks",
    companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",

    certificateType: "Offer Letter",
    status: "Verified",

    startDate: "06 May 2026",
    endDate: "01 July 2026",
    verificationDate: "06 May 2026"
  },

  {
    verificationId: "CITS8427",
    studentName: "T Drakshayani",
    courseName: "Machine Learning",
    category: "Internship",
    duration: "8 Weeks",
    companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",

    certificateType: "Offer Letter",
    status: "Verified",

    startDate: "06 May 2026",
    endDate: "01 July 2026",
    verificationDate: "06 May 2026"
  },
  {
  verificationId: "CITS5823",
  studentName: "K. Pomani",

  courseName: "Python Full Stack",
  category: "Internship",

  companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",

  certificateType: "Offer Letter",

  duration: "8 Weeks",

  startDate: "06 May 2026",
  endDate: "01 July 2026",

  verificationDate: "06 May 2026",

  status: "Verified",

  remarks:
    "Demonstrated strong dedication, technical skills, and a positive learning attitude throughout the internship. Successfully completed all assigned tasks with consistency and professionalism."
},

{
  verificationId: "CITS9210",
  studentName: "C. Ganesh",

  courseName: "Python Full Stack",
  category: "Internship",

  companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",

  certificateType: "Offer Letter",

  duration: "8 Weeks",

  startDate: "06 May 2026",
  endDate: "01 July 2026",

  verificationDate: "06 May 2026",

  status: "Verified",

  remarks:
    "Demonstrated strong dedication, technical skills, and a positive learning attitude throughout the internship. Successfully completed all assigned tasks with consistency and professionalism."
},
{
  verificationId: "CITS6134",
  studentName: "DUDEKULA KHAJA HUSSAIN",
  courseName: "Data Analytics",
  category: "Internship",
  duration: "8 Weeks",
  companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
  startDate: "06 May 2026",
  endDate: "01 July 2026",
  verificationDate: "06 May 2026"
},

{
  verificationId: "CITS4278",
  studentName: "GOLLA BHARATH",
  courseName: "Data Analytics",
  category: "Internship",
  duration: "8 Weeks",
  companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
  startDate: "06 May 2026",
  endDate: "01 July 2026",
  verificationDate: "06 May 2026"
},

{
  verificationId: "CITS8951",
  studentName: "Jakkala Raju",
  courseName: "Data Analytics",
  category: "Internship",
  duration: "8 Weeks",
  companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
  startDate: "06 May 2026",
  endDate: "01 July 2026",
  verificationDate: "06 May 2026"
},
];

export function findStudentById(verificationId) {
  if (!verificationId) return undefined;

  return students.find(
    (student) =>
      student.verificationId.trim().toUpperCase() ===
      verificationId.trim().toUpperCase()
  );
}