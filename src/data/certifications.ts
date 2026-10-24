import kcna from '../assets/img/certs/kcna-badge.png';
import aws from '../assets/img/certs/aws-ccp-badge.png';
import gcp from '../assets/img/certs/gcp-ace-badge.png';

export const CERTIFICATIONS = [
  {
    name: 'Kubernetes and Cloud Native Associate (KCNA)',
    issuer: 'The Linux Foundation',
    date: '2025-09',
    badge: kcna,
    verify: 'https://www.credly.com/badges/31d02228-b0cb-4af6-aa7a-b704f4d4c433',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025-08',
    badge: aws,
    verify: 'https://www.credly.com/badges/2ec8b1f4-5ec7-4ea1-9f3b-25ed3b8bf1ad',
  },
  {
    name: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2024-12',
    badge: gcp,
    verify: 'https://www.credly.com/badges/e4c7b665-e0e7-4471-83d5-61865a1aa2cf',
  },
];
