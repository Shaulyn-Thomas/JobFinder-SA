export type OpportunityType = 'Job' | 'Learnership' | 'Internship';

export type EducationLevel =
  | 'Grade 9'
  | 'Grade 10'
  | 'Grade 11'
  | 'Grade 12 / Matric'
  | 'N1-N3 Certificate'
  | 'N4-N6 Certificate'
  | 'National Diploma'
  | 'Degree'
  | 'Any';

export type Province =
  | 'Eastern Cape'
  | 'Free State'
  | 'Gauteng'
  | 'KwaZulu-Natal'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'North West'
  | 'Northern Cape'
  | 'Western Cape'
  | 'All Provinces';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  province: Province;
  type: OpportunityType;
  education: EducationLevel;
  closingDate: string;
  salary?: string;
  duration?: string;
  field: string;
  description: string;
  isSample: boolean;
}

export const PROVINCES: Province[] = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Northern Cape',
  'Western Cape',
];

export const OPPORTUNITY_TYPES: OpportunityType[] = ['Job', 'Learnership', 'Internship'];

export const EDUCATION_LEVELS: EducationLevel[] = [
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12 / Matric',
  'N1-N3 Certificate',
  'N4-N6 Certificate',
  'National Diploma',
  'Degree',
  'Any',
];

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-001',
    title: 'Retail Assistant',
    company: 'Shoprite Holdings',
    location: 'Johannesburg, Gauteng',
    province: 'Gauteng',
    type: 'Job',
    education: 'Grade 12 / Matric',
    closingDate: '2026-10-20',
    salary: 'R4,500/month',
    field: 'Retail',
    description:
      'Join the Shoprite team as a retail assistant. Duties include stocking shelves, assisting customers, and maintaining store cleanliness. Training provided.',
    isSample: true,
  },
  {
    id: 'opp-002',
    title: 'IT Technical Support Learnership',
    company: 'Vodacom South Africa',
    location: 'Midrand, Gauteng',
    province: 'Gauteng',
    type: 'Learnership',
    education: 'Grade 12 / Matric',
    closingDate: '2026-10-15',
    duration: '12 months',
    salary: 'R3,500 stipend/month',
    field: 'Information Technology',
    description:
      'A 12-month learnership programme combining workplace experience and theoretical training in IT support. Successful learners receive an NQF Level 4 qualification.',
    isSample: true,
  },
  {
    id: 'opp-003',
    title: 'Marketing Intern',
    company: 'Naspers',
    location: 'Cape Town, Western Cape',
    province: 'Western Cape',
    type: 'Internship',
    education: 'Degree',
    closingDate: '2026-10-30',
    duration: '6 months',
    salary: 'R8,000/month',
    field: 'Marketing',
    description:
      'Support the digital marketing team with social media campaigns, content creation, and analytics reporting. Gain hands-on experience in a fast-paced tech environment.',
    isSample: true,
  },
  {
    id: 'opp-004',
    title: 'Call Centre Agent',
    company: 'Telkom SA',
    location: 'Durban, KwaZulu-Natal',
    province: 'KwaZulu-Natal',
    type: 'Job',
    education: 'Grade 12 / Matric',
    closingDate: '2026-10-18',
    salary: 'R5,200/month',
    field: 'Customer Service',
    description:
      'Handle inbound customer calls, resolve queries, and provide product information. Full training provided. Must be fluent in English and one other official language.',
    isSample: true,
  },
  {
    id: 'opp-005',
    title: 'Electrical Engineering Learnership',
    company: 'Eskom Holdings',
    location: 'Witbank, Mpumalanga',
    province: 'Mpumalanga',
    type: 'Learnership',
    education: 'N4-N6 Certificate',
    closingDate: '2026-10-12',
    duration: '18 months',
    salary: 'R4,200 stipend/month',
    field: 'Engineering',
    description:
      'Practical and theoretical training in electrical engineering at Eskom power stations. Leads to an Artisan Trade Test qualification. Safety gear provided.',
    isSample: true,
  },
  {
    id: 'opp-006',
    title: 'Finance Intern',
    company: 'Standard Bank',
    location: 'Sandton, Gauteng',
    province: 'Gauteng',
    type: 'Internship',
    education: 'Degree',
    closingDate: '2026-11-05',
    duration: '12 months',
    salary: 'R10,000/month',
    field: 'Finance',
    description:
      'Rotational internship across finance departments including risk, audit, and corporate banking. Mentorship and professional development included.',
    isSample: true,
  },
  {
    id: 'opp-007',
    title: 'Warehouse Picker',
    company: 'Takealot.com',
    location: 'Centurion, Gauteng',
    province: 'Gauteng',
    type: 'Job',
    education: 'Grade 10',
    closingDate: '2026-10-25',
    salary: 'R4,800/month',
    field: 'Logistics',
    description:
      'Pick and pack online orders in a fast-paced warehouse. Must be physically fit and available for shift work. Transport provided for night shifts.',
    isSample: true,
  },
  {
    id: 'opp-008',
    title: 'Hospitality Learnership',
    company: 'Sun International',
    location: 'Port Elizabeth, Eastern Cape',
    province: 'Eastern Cape',
    type: 'Learnership',
    education: 'Grade 11',
    closingDate: '2026-10-22',
    duration: '12 months',
    salary: 'R3,000 stipend/month',
    field: 'Hospitality',
    description:
      'Learn food and beverage service, housekeeping, and front desk operations at a luxury hotel. NQF Level 2 qualification on completion.',
    isSample: true,
  },
  {
    id: 'opp-009',
    title: 'Software Development Intern',
    company: 'Discovery Health',
    location: 'Sandton, Gauteng',
    province: 'Gauteng',
    type: 'Internship',
    education: 'National Diploma',
    closingDate: '2026-11-10',
    duration: '6 months',
    salary: 'R12,000/month',
    field: 'Software Development',
    description:
      'Work alongside senior developers building health-tech solutions. Exposure to React, Java, and cloud platforms. Great pathway to a permanent role.',
    isSample: true,
  },
  {
    id: 'opp-010',
    title: 'Data Capturer',
    company: 'South African Revenue Service (SARS)',
    location: 'Pretoria, Gauteng',
    province: 'Gauteng',
    type: 'Job',
    education: 'Grade 12 / Matric',
    closingDate: '2026-10-28',
    salary: 'R6,000/month',
    field: 'Administration',
    description:
      'Capture and verify taxpayer data with high accuracy. Must have strong computer literacy and attention to detail. Government benefits included.',
    isSample: true,
  },
  {
    id: 'opp-011',
    title: 'Automotive Mechanics Learnership',
    company: 'Toyota South Africa',
    location: 'Durban, KwaZulu-Natal',
    province: 'KwaZulu-Natal',
    type: 'Learnership',
    education: 'N1-N3 Certificate',
    closingDate: '2026-10-14',
    duration: '24 months',
    salary: 'R4,500 stipend/month',
    field: 'Engineering',
    description:
      'Hands-on training in vehicle maintenance and repair at the Toyota manufacturing plant. Leads to a qualified Motor Mechanic trade certificate.',
    isSample: true,
  },
  {
    id: 'opp-012',
    title: 'Human Resources Intern',
    company: 'Unilever South Africa',
    location: 'Durban, KwaZulu-Natal',
    province: 'KwaZulu-Natal',
    type: 'Internship',
    education: 'Degree',
    closingDate: '2026-11-01',
    duration: '12 months',
    salary: 'R9,000/month',
    field: 'Human Resources',
    description:
      'Support the HR team with recruitment coordination, onboarding, and employee engagement initiatives. Gain exposure to HR systems and processes.',
    isSample: true,
  },
  {
    id: 'opp-013',
    title: 'Cashier',
    company: 'Pick n Pay',
    location: 'Bloemfontein, Free State',
    province: 'Free State',
    type: 'Job',
    education: 'Grade 11',
    closingDate: '2026-10-19',
    salary: 'R4,200/month',
    field: 'Retail',
    description:
      'Operate point-of-sale systems, handle cash, and provide friendly customer service. Flexible working hours with weekend shifts.',
    isSample: true,
  },
  {
    id: 'opp-014',
    title: 'Agriculture Learnership',
    company: 'Senwes',
    location: 'Kroonstad, Free State',
    province: 'Free State',
    type: 'Learnership',
    education: 'Grade 10',
    closingDate: '2026-10-16',
    duration: '12 months',
    salary: 'R3,200 stipend/month',
    field: 'Agriculture',
    description:
      'Practical training in crop farming, irrigation systems, and farm management. Includes both field work and classroom learning modules.',
    isSample: true,
  },
  {
    id: 'opp-015',
    title: 'Graphic Design Intern',
    company: 'Ogilvy South Africa',
    location: 'Cape Town, Western Cape',
    province: 'Western Cape',
    type: 'Internship',
    education: 'National Diploma',
    closingDate: '2026-11-08',
    duration: '6 months',
    salary: 'R7,500/month',
    field: 'Design',
    description:
      'Create visual content for major brands under the guidance of senior designers. Must have portfolio and proficiency in Adobe Creative Suite.',
    isSample: true,
  },
  {
    id: 'opp-016',
    title: 'Security Officer',
    company: 'Fidelity Services Group',
    location: 'Polokwane, Limpopo',
    province: 'Limpopo',
    type: 'Job',
    education: 'Grade 10',
    closingDate: '2026-10-21',
    salary: 'R5,000/month',
    field: 'Security',
    description:
      'Patrol and monitor premises to ensure safety. PSIRA registration training provided. Must be physically fit and willing to work shifts.',
    isSample: true,
  },
  {
    id: 'opp-017',
    title: 'Mining Engineering Learnership',
    company: 'Anglo American',
    location: 'Rustenburg, North West',
    province: 'North West',
    type: 'Learnership',
    education: 'N4-N6 Certificate',
    closingDate: '2026-10-13',
    duration: '24 months',
    salary: 'R5,500 stipend/month',
    field: 'Mining',
    description:
      'Underground and surface mining operations training at a platinum mine. Includes safety training, equipment operation, and mineral processing.',
    isSample: true,
  },
  {
    id: 'opp-018',
    title: 'Social Media Intern',
    company: 'MTN South Africa',
    location: 'Johannesburg, Gauteng',
    province: 'Gauteng',
    type: 'Internship',
    education: 'National Diploma',
    closingDate: '2026-11-03',
    duration: '6 months',
    salary: 'R6,500/month',
    field: 'Digital Media',
    description:
      'Create and schedule social media content, engage with online communities, and track performance metrics for MTN youth campaigns.',
    isSample: true,
  },
  {
    id: 'opp-019',
    title: 'Cleaner',
    company: 'Bidvest Facilities Management',
    location: 'Kimberley, Northern Cape',
    province: 'Northern Cape',
    type: 'Job',
    education: 'Grade 9',
    closingDate: '2026-10-24',
    salary: 'R3,800/month',
    field: 'Facilities',
    description:
      'General cleaning and maintenance of office buildings. Cleaning materials and uniform provided. Reliable and hardworking candidates encouraged to apply.',
    isSample: true,
  },
  {
    id: 'opp-020',
    title: 'Logistics Intern',
    company: 'Imperial Logistics',
    location: 'Johannesburg, Gauteng',
    province: 'Gauteng',
    type: 'Internship',
    education: 'Degree',
    closingDate: '2026-11-12',
    duration: '12 months',
    salary: 'R8,500/month',
    field: 'Logistics',
    description:
      'Gain experience in supply chain management, route planning, and warehouse operations. Work with logistics software and cross-functional teams.',
    isSample: true,
  },
];
