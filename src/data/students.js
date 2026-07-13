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
  }
];

export function findStudentById(verificationId) {
  if (!verificationId) return undefined;

  return students.find(
    (student) =>
      student.verificationId.trim().toUpperCase() ===
      verificationId.trim().toUpperCase()
  );
}