// Local database of student certificate and offer letter records.
// This data file exports an array of student objects.
// In the future, this can be replaced with an API call or Firebase query.

export const students = [
  {
    verificationId: "CITS7291",
    studentName: "Konduru Tharun Kumar",
    studentPhoto: "/images/default-avatar.png",
    courseName: "Python Full Stack",
    category: "Internship",
    company: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
    companyName: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
    duration: "8 Weeks",
    startDate: "06 May 2026",
    certificateType: "Offer Letter",
    remarks: "This offer letter has been verified and is authentic.",
    status: "Verified",
    verificationDate: "06 May 2026"
  }
];

/**
 * Searches for a student by Verification ID.
 * Case-insensitive lookup.
 * @param {string} verificationId 
 * @returns {object|undefined}
 */
export function findStudentById(verificationId) {
  if (!verificationId) return undefined;
  return students.find(
    (student) => student.verificationId.trim().toUpperCase() === verificationId.trim().toUpperCase()
  );
}
