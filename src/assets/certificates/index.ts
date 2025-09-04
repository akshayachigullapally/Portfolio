// Certificate imports
import AkshayaENT25Certificate from './Akshaya Chigullapally ENT 25 Certificate.pdf';
import AkshayaGeneralCertificate from './Akshaya_Chigullapally_3793556.pdf';
import ConferenceCertificate from './Conference.pdf';
import FlutterWorkshopCertificate from './flutter workshop.jpg';
import CPlusPlusCertificate from './Programming in Modern C++.pdf';
import ResumeAkshaya from './Resume_Akshaya.pdf';
import TableauCertificate from './Tableau Training - Certificate of Completion.pdf';
import WebathonCertificate from './Webathon .pdf';

// Export all certificates
export {
  AkshayaENT25Certificate,
  AkshayaGeneralCertificate,
  ConferenceCertificate,
  FlutterWorkshopCertificate,
  CPlusPlusCertificate,
  ResumeAkshaya,
  TableauCertificate,
  WebathonCertificate,
};

// Certificate mapping for easy access
export const certificates = {
  entrepreneurialThinking: AkshayaENT25Certificate,
  generalCertificate: AkshayaGeneralCertificate,
  conference: ConferenceCertificate,
  flutterWorkshop: FlutterWorkshopCertificate,
  cppProgramming: CPlusPlusCertificate,
  resume: ResumeAkshaya,
  tableau: TableauCertificate,
  webathon: WebathonCertificate,
} as const;

export type CertificateKey = keyof typeof certificates;
