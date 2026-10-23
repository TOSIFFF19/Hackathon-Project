const CAREER_PROFILES = [
  {
    id: "software_developer",
    title: "Software Development",
    description: "Build apps, websites, and tools people use every day.",
    icon: "</>",
    color: "violet",
    aliases: ["software developer", "web developer", "software engineer", "programmer"],
    keywords: ["coding", "web development", "application development"],
    domains: ["technology", "software"],
    interests: ["coding", "problem solving", "building things"],
    skills: {
      required: ["coding", "problem solving"],
      helpful: ["communication", "debugging", "version control"]
    },
    subjects: ["computer science", "mathematics"],
    goals: ["building useful tools", "creative work"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Learn programming fundamentals with one beginner-friendly language.",
      "Practice HTML, CSS, and JavaScript by building small web pages.",
      "Use Git to save versions of a project and learn to debug errors.",
      "Build a small project that solves a real problem and explain how it works."
    ],
    beginnerProjects: [
      {
        title: "Personal study planner",
        description: "Create a simple page to add tasks and mark them complete."
      },
      {
        title: "Campus event page",
        description: "Build a responsive page with event details and a search field."
      }
    ],
    freeResources: [
      {
        title: "MDN Learn Web Development",
        url: "https://developer.mozilla.org/en-US/docs/Learn",
        topic: "HTML, CSS, and JavaScript"
      },
      {
        title: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn",
        topic: "Interactive programming practice"
      }
    ]
  },
  {
    id: "machine_learning",
    title: "AI & Machine Learning",
    description: "Explore ways computers can learn patterns from data.",
    icon: "✳",
    color: "blue",
    aliases: ["AI engineer", "machine learning engineer", "artificial intelligence"],
    keywords: ["AI", "machine learning", "data science"],
    domains: ["technology", "research", "data"],
    interests: ["ai", "coding", "mathematics", "finding patterns", "problem solving"],
    skills: {
      required: ["coding", "mathematics"],
      helpful: ["statistics", "data analysis", "communication"]
    },
    subjects: ["computer science", "mathematics", "statistics"],
    goals: ["research", "building useful tools"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Build programming and mathematics foundations.",
      "Learn basic statistics and how to organize a small dataset.",
      "Study beginner machine-learning concepts and test examples with care.",
      "Create a small project and document its data, limitations, and results."
    ],
    beginnerProjects: [
      {
        title: "Explore a public dataset",
        description: "Make a few charts and describe patterns without claiming they prove cause."
      },
      {
        title: "Simple rule-based study helper",
        description: "Build a small program that suggests revision topics from a checklist."
      }
    ],
    freeResources: [
      {
        title: "Google Machine Learning Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        topic: "Introductory machine-learning concepts"
      },
      {
        title: "Kaggle Learn",
        url: "https://www.kaggle.com/learn",
        topic: "Short lessons in Python and data"
      }
    ]
  },
  {
    id: "data_analyst",
    title: "Data Analytics",
    description: "Turn information into insights that help people make decisions.",
    icon: "▥",
    color: "peach",
    aliases: ["data analyst", "business analyst", "data analysis"],
    keywords: ["analytics", "data visualization", "reporting"],
    domains: ["technology", "business", "data"],
    interests: ["finding patterns", "problem solving", "research"],
    skills: {
      required: ["data analysis", "statistics"],
      helpful: ["spreadsheets", "SQL", "data visualization", "communication"]
    },
    subjects: ["mathematics", "statistics", "computer science", "economics"],
    goals: ["research", "helping people make decisions"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Practice organizing data in a spreadsheet.",
      "Learn descriptive statistics and how to read charts carefully.",
      "Try beginner SQL queries and make clear, labeled visualizations.",
      "Write a short report that separates observations from assumptions."
    ],
    beginnerProjects: [
      {
        title: "Class survey report",
        description: "Summarize an optional anonymous survey and show results with charts."
      },
      {
        title: "Public data dashboard",
        description: "Use a small public dataset to answer one clearly stated question."
      }
    ],
    freeResources: [
      {
        title: "Khan Academy Statistics and Probability",
        url: "https://www.khanacademy.org/math/statistics-probability",
        topic: "Statistics foundations"
      },
      {
        title: "SQLBolt",
        url: "https://sqlbolt.com",
        topic: "Interactive SQL lessons"
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Help protect digital systems, information, and people online.",
    icon: "⬡",
    color: "mint",
    aliases: ["cybersecurity analyst", "security analyst", "information security"],
    keywords: ["cyber security", "network security", "digital safety"],
    domains: ["technology", "security"],
    interests: ["problem solving", "investigation", "protecting people"],
    skills: {
      required: ["networking", "problem solving"],
      helpful: ["coding", "attention to detail", "communication"]
    },
    subjects: ["computer science", "mathematics"],
    goals: ["social impact", "protecting people"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Learn computer, internet, and networking basics.",
      "Practice account safety, privacy, and secure configuration on your own devices.",
      "Study security concepts in beginner learning environments designed for practice.",
      "Document what you learn and only test systems where you have permission."
    ],
    beginnerProjects: [
      {
        title: "Personal security checklist",
        description: "Create a checklist for strong passwords, updates, and account recovery."
      },
      {
        title: "Home network map",
        description: "Draw a map of your own network devices without scanning others' systems."
      }
    ],
    freeResources: [
      {
        title: "Cisco Skills for All",
        url: "https://skillsforall.com",
        topic: "Free introductory networking and cybersecurity learning"
      },
      {
        title: "Cybersecurity and Infrastructure Security Agency",
        url: "https://www.cisa.gov/secure-our-world",
        topic: "Everyday online safety guidance"
      }
    ]
  },
  {
    id: "robotics_engineer",
    title: "Robotics",
    description: "Combine hardware and software to make machines respond to the world.",
    icon: "⚙",
    color: "yellow",
    aliases: ["robotics engineer", "robotics developer", "robot design"],
    keywords: ["robotics", "automation", "electronics"],
    domains: ["technology", "engineering", "hardware"],
    interests: ["building things", "coding", "problem solving"],
    skills: {
      required: ["problem solving", "mathematics"],
      helpful: ["coding", "electronics", "design", "teamwork"]
    },
    subjects: ["physics", "mathematics", "computer science"],
    goals: ["building useful tools", "creative work"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Explore basic physics, measurement, and simple circuits.",
      "Learn beginner programming and how sensors and motors are used.",
      "Try a safe simulation or a low-voltage beginner electronics kit.",
      "Build and test a small prototype, recording what changed between tests."
    ],
    beginnerProjects: [
      {
        title: "Cardboard gripper concept",
        description: "Design a non-powered gripper and test how its shape affects movement."
      },
      {
        title: "Sensor display simulation",
        description: "Use a beginner simulator to show how a sensor reading changes."
      }
    ],
    freeResources: [
      {
        title: "Arduino Documentation",
        url: "https://docs.arduino.cc",
        topic: "Beginner electronics and microcontroller guides"
      },
      {
        title: "PhET Interactive Simulations",
        url: "https://phet.colorado.edu",
        topic: "Free interactive science and engineering simulations"
      }
    ]
  },
  {
    id: "ux_designer",
    title: "UI/UX Design",
    description: "Make digital products easier and more enjoyable for people to use.",
    icon: "✎",
    color: "pink",
    aliases: ["UX designer", "UI designer", "user experience designer", "product designer"],
    keywords: ["user interface", "user experience", "interaction design"],
    domains: ["design", "technology", "product"],
    interests: ["design", "helping people", "problem solving"],
    skills: {
      required: ["design", "communication"],
      helpful: ["research", "prototyping", "accessibility", "teamwork"]
    },
    subjects: ["art", "design", "computer science"],
    goals: ["creative work", "helping people"],
    educationRequirements: {
      summary: "Requirements vary by role and location; verify pathways with schools and employers.",
      entryLevels: [],
      pathways: []
    },
    roadmap: [
      "Notice how people use everyday apps and where they get confused.",
      "Learn basic layout, typography, color contrast, and accessibility principles.",
      "Sketch a simple screen and ask someone for feedback with their permission.",
      "Make a small prototype and explain the changes made from feedback."
    ],
    beginnerProjects: [
      {
        title: "Improve a campus information page",
        description: "Sketch a clearer layout and explain the user problem it addresses."
      },
      {
        title: "Accessible event card",
        description: "Design an event card with readable text, clear actions, and good contrast."
      }
    ],
    freeResources: [
      {
        title: "W3C Web Accessibility Initiative Tutorials",
        url: "https://www.w3.org/WAI/tutorials/",
        topic: "Accessible web design"
      },
      {
        title: "Material Design Guidelines",
        url: "https://m3.material.io",
        topic: "Interface design patterns and guidance"
      }
    ]
  }
];

const ADDITIONAL_CAREERS = [
  {
    id: "nurse", title: "Nursing", description: "Support patients' health, recovery, and everyday care as part of a healthcare team.", category: "healthcare", color: "mint",
    dimensions: ["people", "health", "practical", "responsibility"], interests: ["helping people", "health", "biology"], skills: { required: ["communication", "care"], helpful: ["teamwork", "attention to detail"] }, subjects: ["biology", "health science"],
    educationSummary: "Nursing roles require recognised education and registration; pathways and eligibility vary. Confirm requirements with the relevant nursing council and institutions.",
    roadmap: ["Explore biology and basic health science.", "Learn about patient communication and care ethics.", "Compare recognised nursing programs and their current entry requirements.", "Speak with a qualified nurse about everyday responsibilities."],
    project: ["Health information leaflet", "Create a plain-language, source-checked leaflet about a general wellbeing topic; do not give individual medical advice."],
    resource: ["WHO Health Topics", "https://www.who.int/health-topics", "Public health information"]
  },
  {
    id: "physiotherapist", title: "Physiotherapy", description: "Help people improve movement and function through evidence-informed rehabilitation.", category: "healthcare", color: "mint",
    dimensions: ["people", "health", "science", "practical"], interests: ["helping people", "health", "movement"], skills: { required: ["communication", "biology"], helpful: ["observation", "patience"] }, subjects: ["biology", "physical education"],
    educationSummary: "Professional practice requires recognised qualifications and may require registration. Check current rules with the relevant regulator and institutions.",
    roadmap: ["Review human biology and movement basics.", "Learn the difference between general exercise and clinical rehabilitation.", "Compare recognised physiotherapy courses and official eligibility rules.", "Interview a qualified practitioner about supervised practice."],
    project: ["Movement science explainer", "Use reputable sources to explain how a joint moves; avoid prescribing exercises or treatment."],
    resource: ["WHO Rehabilitation", "https://www.who.int/news-room/fact-sheets/detail/rehabilitation", "Rehabilitation overview"]
  },
  {
    id: "biotechnologist", title: "Biotechnology & Life Sciences", description: "Use biology and laboratory methods to investigate living systems and practical applications.", category: "science", color: "blue",
    dimensions: ["science", "research", "health", "analytical"], interests: ["biology", "research", "experiments"], skills: { required: ["biology", "observation"], helpful: ["data analysis", "laboratory safety"] }, subjects: ["biology", "chemistry"],
    educationSummary: "Study routes vary by role and institution. Some laboratory, clinical, or regulated work needs specific qualifications; verify each pathway.",
    roadmap: ["Build foundations in biology and chemistry.", "Practise reading scientific figures and methods.", "Explore supervised, safe school-level investigations.", "Compare life-science degree curricula and laboratory opportunities."],
    project: ["Public biology dataset", "Visualise a small open biology dataset and clearly label its source and limitations."],
    resource: ["NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/", "Free biomedical books and reports"]
  },
  {
    id: "environmental_scientist", title: "Environmental Science", description: "Study environmental systems and use evidence to understand sustainability challenges.", category: "environment", color: "mint",
    dimensions: ["research", "environment", "science", "practical"], interests: ["nature", "environment", "investigation"], skills: { required: ["observation", "research"], helpful: ["data analysis", "communication"] }, subjects: ["biology", "geography", "chemistry"],
    educationSummary: "Environmental roles span many disciplines. Course requirements and fieldwork expectations vary; check specific institutions and employers.",
    roadmap: ["Explore ecology, geography, and environmental systems.", "Practise recording observations using a clear method.", "Use public environmental data to make a simple chart.", "Learn how local organisations assess environmental questions."],
    project: ["Local biodiversity log", "Record publicly observable plants in a permitted area without disturbing wildlife; cite identification sources."],
    resource: ["UN Environment Programme", "https://www.unep.org/", "Environment topics and reports"]
  },
  {
    id: "teacher", title: "Teaching & Education", description: "Help learners understand ideas and build skills through teaching and learning support.", category: "education", color: "yellow",
    dimensions: ["people", "teaching", "communication", "organisation"], interests: ["helping people", "explaining ideas", "learning"], skills: { required: ["communication", "subject knowledge"], helpful: ["planning", "patience"] }, subjects: ["literature", "mathematics", "science"],
    educationSummary: "Teacher eligibility, qualifications, and certification depend on role, level, and jurisdiction. Confirm current official requirements before choosing a program.",
    roadmap: ["Choose a subject or learner group you enjoy helping.", "Practise explaining one concept in plain language.", "Learn about inclusive teaching and lesson planning.", "Check official qualification rules for the place and age group you have in mind."],
    project: ["Mini lesson plan", "Create a short, accessible lesson with one learning goal and a self-check activity."],
    resource: ["UNESCO Education", "https://www.unesco.org/en/education", "Education topics and resources"]
  },
  {
    id: "psychology_researcher", title: "Psychology & Behavioural Research", description: "Study how people think, feel, and behave using careful research methods.", category: "social_science", color: "pink",
    dimensions: ["people", "research", "analytical", "communication"], interests: ["understanding people", "research", "wellbeing"], skills: { required: ["research", "communication"], helpful: ["statistics", "ethical practice"] }, subjects: ["psychology", "biology", "social science"],
    educationSummary: "Research, counselling, and clinical practice are different pathways. Providing regulated mental-health services requires specific qualifications; verify local rules with official regulators.",
    roadmap: ["Explore introductory psychology and research ethics.", "Learn how surveys differ from experiments and clinical assessment.", "Practise summarising a peer-reviewed public finding without overclaiming.", "Check official qualification and supervision requirements for any practice role."],
    project: ["Research methods explainer", "Compare two public studies and note their sample, method, and limitations; do not diagnose anyone."],
    resource: ["OpenStax Psychology", "https://openstax.org/details/books/psychology-2e", "Free introductory textbook"]
  },
  {
    id: "lawyer", title: "Law & Legal Research", description: "Interpret laws, build arguments, and help people or organisations understand legal issues.", category: "law_governance", color: "violet",
    dimensions: ["analytical", "communication", "people", "research"], interests: ["debating ideas", "justice", "reading"], skills: { required: ["reading", "writing"], helpful: ["research", "public speaking"] }, subjects: ["history", "political science", "literature"],
    educationSummary: "Legal education, admission, and the right to practise vary by jurisdiction and role. Verify current requirements with official legal education and bar authorities.",
    roadmap: ["Build careful reading and writing habits.", "Learn how to distinguish a claim from supporting evidence.", "Explore public legal information and court processes.", "Check official local requirements before pursuing a qualifying law program."],
    project: ["Plain-language policy brief", "Summarise a publicly available policy or law using official sources, with a clear note that it is not legal advice."],
    resource: ["India Code", "https://www.indiacode.nic.in/", "Official Indian legislation portal"]
  },
  {
    id: "public_administrator", title: "Public Administration & Governance", description: "Help plan, deliver, or evaluate public services and community programs.", category: "law_governance", color: "blue",
    dimensions: ["people", "organisation", "research", "social"], interests: ["community", "public service", "current affairs"], skills: { required: ["communication", "organisation"], helpful: ["research", "data analysis"] }, subjects: ["political science", "economics", "history"],
    educationSummary: "Public-service roles have different recruitment routes and eligibility rules. Check official government notices; no single degree guarantees selection.",
    roadmap: ["Follow a public issue using multiple reliable sources.", "Learn how public programs are planned and evaluated.", "Practise writing a balanced one-page policy summary.", "Use official recruitment and service websites to check role-specific requirements."],
    project: ["Community issue map", "Use public information to map a local issue and possible stakeholders without collecting personal data."],
    resource: ["National Portal of India", "https://www.india.gov.in/", "Official government information"]
  },
  {
    id: "accountant", title: "Accounting & Audit", description: "Organise financial records and help check that reporting is accurate and useful.", category: "business_finance", color: "yellow",
    dimensions: ["analytical", "business", "organisation", "detail"], interests: ["numbers", "business", "accuracy"], skills: { required: ["numeracy", "attention to detail"], helpful: ["spreadsheets", "communication"] }, subjects: ["accountancy", "mathematics", "economics"],
    educationSummary: "Accounting roles range from entry-level bookkeeping to regulated professional practice. Professional exams and membership requirements depend on the qualification and jurisdiction; confirm with the issuing body.",
    roadmap: ["Practise basic financial statements and spreadsheet formulas.", "Learn the difference between bookkeeping, accounting, and audit.", "Work through sample transactions with fictional data.", "Compare recognised qualifications using their official websites."],
    project: ["Fictional budget workbook", "Build a clearly labelled monthly budget using made-up numbers; do not use or publish real personal finances."],
    resource: ["NCERT E-Books", "https://ncert.nic.in/textbook.php", "School-level commerce learning material"]
  },
  {
    id: "financial_analyst", title: "Finance & Financial Analysis", description: "Study financial information to support planning, investment, or business decisions.", category: "business_finance", color: "blue",
    dimensions: ["analytical", "business", "research", "detail"], interests: ["markets", "numbers", "decision-making"], skills: { required: ["numeracy", "data analysis"], helpful: ["economics", "communication"] }, subjects: ["economics", "accountancy", "mathematics"],
    educationSummary: "Roles and regulated financial activities have differing qualifications and legal requirements. Check official regulators and employers; this profile is not investment advice.",
    roadmap: ["Learn personal finance and basic economics from reliable sources.", "Practise reading a public company's published statements.", "Use fictional scenarios to explore risk and uncertainty.", "Verify any qualification or licensing requirement with the relevant regulator."],
    project: ["Public-company snapshot", "Summarise publicly reported figures from one annual report without recommending investments."],
    resource: ["Reserve Bank of India", "https://www.rbi.org.in/", "Official financial and banking information"]
  },
  {
    id: "entrepreneur", title: "Entrepreneurship & Business", description: "Identify a customer need and organise people and resources to test a business idea.", category: "business", color: "peach",
    dimensions: ["business", "creative", "organisation", "communication"], interests: ["building ideas", "leading", "solving problems"], skills: { required: ["communication", "planning"], helpful: ["budgeting", "research"] }, subjects: ["business studies", "economics", "mathematics"],
    educationSummary: "There is no single required degree for starting a business. Legal, tax, safety, and licensing responsibilities depend on the activity and location.",
    roadmap: ["Notice a real problem and who experiences it.", "Interview people only with consent and avoid collecting sensitive details.", "Estimate costs using a simple fictional or clearly labelled budget.", "Test a small, safe prototype before making commitments."],
    project: ["One-page business experiment", "Describe a problem, intended audience, low-cost test, and what evidence would change your mind."],
    resource: ["Startup India", "https://www.startupindia.gov.in/", "Indian startup information and initiatives"]
  },
  {
    id: "marketing_researcher", title: "Marketing & Market Research", description: "Understand audiences and communicate products, services, or causes clearly.", category: "business", color: "pink",
    dimensions: ["business", "creative", "research", "communication"], interests: ["communication", "creative work", "audiences"], skills: { required: ["writing", "research"], helpful: ["data analysis", "design"] }, subjects: ["business studies", "economics", "literature"],
    educationSummary: "Marketing routes vary widely across employers and specialisms. Check role descriptions and course content; avoid treating audience data as permission to misuse personal information.",
    roadmap: ["Study how clear messages differ across audiences.", "Learn basic survey design and consent.", "Practise interpreting public campaign or market data.", "Build a small campaign brief with an accessibility check."],
    project: ["Public-interest campaign", "Create a simple campaign concept for a community topic using only fictional audience personas."],
    resource: ["Google Digital Garage", "https://learndigital.withgoogle.com/digitalgarage", "Free digital skills lessons"]
  },
  {
    id: "human_resources", title: "Human Resources & People Operations", description: "Support hiring, learning, workplace processes, and employee wellbeing in organisations.", category: "business", color: "mint",
    dimensions: ["people", "organisation", "communication", "business"], interests: ["supporting people", "organising", "teamwork"], skills: { required: ["communication", "organisation"], helpful: ["conflict resolution", "data literacy"] }, subjects: ["business studies", "psychology", "social science"],
    educationSummary: "Requirements vary by organisation and HR specialism. Employment law and privacy obligations are location-specific; consult official sources and qualified professionals.",
    roadmap: ["Explore workplace communication and organisational behaviour.", "Practise writing clear, inclusive process instructions.", "Learn basic privacy and confidentiality principles.", "Compare entry-level role descriptions and their stated requirements."],
    project: ["New-starter checklist", "Draft a fictional, inclusive first-week checklist that avoids collecting unnecessary personal information."],
    resource: ["International Labour Organization", "https://www.ilo.org/", "Work and labour standards information"]
  },
  {
    id: "graphic_designer", title: "Graphic & Communication Design", description: "Use visual systems to make information engaging, clear, and accessible.", category: "creative", color: "pink",
    dimensions: ["creative", "communication", "design", "practical"], interests: ["design", "visual storytelling", "making things"], skills: { required: ["visual communication", "design"], helpful: ["typography", "accessibility"] }, subjects: ["art", "design", "media"],
    educationSummary: "Portfolios and course expectations vary by design role and institution. Review current course requirements and build work with appropriate permissions.",
    roadmap: ["Observe how layout, colour, and type guide attention.", "Learn basic contrast and accessibility principles.", "Create small studies using original or openly licensed materials.", "Build a portfolio that explains the purpose and iteration of each piece."],
    project: ["Accessible event poster", "Design a poster with readable type, strong contrast, and a clear information order."],
    resource: ["Canva Design School", "https://www.canva.com/designschool/", "Free design lessons and tutorials"]
  },
  {
    id: "animator", title: "Animation & Multimedia", description: "Create moving images and interactive media for stories, learning, or entertainment.", category: "creative", color: "violet",
    dimensions: ["creative", "design", "practical", "communication"], interests: ["storytelling", "art", "digital media"], skills: { required: ["visual storytelling", "observation"], helpful: ["drawing", "editing", "teamwork"] }, subjects: ["art", "media", "computer science"],
    educationSummary: "Animation roles value different combinations of portfolio, software familiarity, and study. Specific course and employer expectations vary.",
    roadmap: ["Practise sketching movement and visual storytelling.", "Try free or built-in tools to make a short sequence.", "Learn file formats, accessibility, and responsible asset licensing.", "Create a short original piece and document revisions."],
    project: ["Five-second motion study", "Animate a simple original object movement and describe the timing choices."],
    resource: ["Blender Fundamentals", "https://www.blender.org/support/tutorials/", "Free 3D creation tutorials"]
  },
  {
    id: "journalist", title: "Journalism & Content Creation", description: "Research, verify, and communicate information for public audiences.", category: "creative", color: "peach",
    dimensions: ["communication", "research", "creative", "social"], interests: ["writing", "current affairs", "asking questions"], skills: { required: ["writing", "research"], helpful: ["interviewing", "media literacy"] }, subjects: ["literature", "history", "media"],
    educationSummary: "Entry routes vary across journalism and content roles. Ethical reporting, source protection, and local laws matter; verify professional guidance from reputable bodies.",
    roadmap: ["Practise checking claims against primary sources.", "Learn to separate fact, quotation, and opinion.", "Write a short explainer with links to credible sources.", "Ask for editorial feedback and revise transparently."],
    project: ["Source-checked explainer", "Explain a non-sensitive public topic using at least two reliable sources and clear attribution."],
    resource: ["Reuters Handbook of Journalism", "https://www.reutersagency.com/en/about/standards-values/", "News standards and principles"]
  },
  {
    id: "architect", title: "Architecture & Built Environment", description: "Plan spaces and buildings with attention to people, materials, function, and context.", category: "design_engineering", color: "yellow",
    dimensions: ["creative", "practical", "analytical", "design"], interests: ["design", "buildings", "spatial problems"], skills: { required: ["drawing", "spatial reasoning"], helpful: ["mathematics", "communication"] }, subjects: ["mathematics", "art", "physics"],
    educationSummary: "Architectural practice is regulated in many places and requires recognised qualifications and registration. Confirm current rules with the official council and institutions.",
    roadmap: ["Observe how people use everyday spaces.", "Practise scale drawing and basic geometry.", "Explore sustainable materials and accessible design.", "Check official qualification and registration routes before planning professional practice."],
    project: ["Study-space redesign", "Sketch an accessible layout for a small study area and explain your design choices."],
    resource: ["Council of Architecture, India", "https://www.coa.gov.in/", "Official architecture education and registration information"]
  },
  {
    id: "agricultural_scientist", title: "Agriculture & Food Systems", description: "Explore how crops, soil, food, technology, and communities shape sustainable food systems.", category: "environment", color: "mint",
    dimensions: ["science", "environment", "research", "practical"], interests: ["plants", "food", "nature"], skills: { required: ["observation", "biology"], helpful: ["data analysis", "communication"] }, subjects: ["biology", "chemistry", "geography"],
    educationSummary: "Agriculture includes research, business, field, and technical routes. Course and professional requirements vary; consult official agricultural universities and employers.",
    roadmap: ["Explore plant biology, soil, and food systems.", "Keep a careful observation log of a permitted plant or garden.", "Learn how weather and soil data are recorded.", "Compare agricultural programs and their current subject requirements."],
    project: ["Seed observation journal", "Track a small plant observation using safe, ordinary materials and record conditions without making broad claims."],
    resource: ["Indian Council of Agricultural Research", "https://icar.org.in/", "Official agricultural research and education information"]
  },
  {
    id: "skilled_technician", title: "Skilled Technical Trades", description: "Use practical training to install, maintain, or repair equipment and systems safely.", category: "vocational", color: "peach",
    dimensions: ["practical", "hands_on", "problem solving", "responsibility"], interests: ["building things", "repairing", "tools"], skills: { required: ["safety awareness", "practical problem solving"], helpful: ["measurement", "teamwork"] }, subjects: ["physics", "vocational studies", "mathematics"],
    educationSummary: "Trade pathways, licences, and safety requirements depend on the occupation and location. Use recognised training providers and verify current rules before practising.",
    roadmap: ["Explore different trades through safe demonstrations.", "Learn measurement and workplace safety fundamentals.", "Compare recognised vocational or apprenticeship routes.", "Practise only under appropriate supervision with suitable equipment."],
    project: ["Household energy audit", "With permission, record visible energy-saving opportunities; do not open, repair, or handle electrical equipment."],
    resource: ["Skill India Digital Hub", "https://www.skillindiadigital.gov.in/", "Indian vocational learning and skills information"]
  },
  {
    id: "food_scientist", title: "Food Science & Nutrition Research", description: "Study food composition, quality, safety, and how food systems affect people.", category: "science", color: "peach",
    dimensions: ["science", "research", "health", "analytical"], interests: ["food", "biology", "experiments"], skills: { required: ["biology", "observation"], helpful: ["chemistry", "data analysis"] }, subjects: ["biology", "chemistry", "home science"],
    educationSummary: "Food science and regulated nutrition practice are distinct pathways. Check course content, local professional rules, and official requirements for the role you are considering.",
    roadmap: ["Explore food chemistry and microbiology basics.", "Learn the meaning of food safety and reliable labelling.", "Compare food-science courses at recognised institutions.", "Use public food data for a simple, carefully sourced comparison."],
    project: ["Food label comparison", "Compare publicly available nutrition labels and explain serving sizes and data limits without giving medical advice."],
    resource: ["Food Safety and Standards Authority of India", "https://www.fssai.gov.in/", "Official food safety information"]
  },
  {
    id: "civil_services", title: "Civil Services & Public Policy", description: "Work on public administration, policy implementation, and services for communities.", category: "law_governance", color: "violet",
    dimensions: ["social", "research", "organisation", "communication"], interests: ["public service", "society", "problem solving"], skills: { required: ["reading", "communication"], helpful: ["research", "organisation"] }, subjects: ["history", "political science", "economics"],
    educationSummary: "Civil-service examinations and roles have specific eligibility and recruitment rules that can change. Check the official commission notification for the relevant service and year.",
    roadmap: ["Explore how public institutions and policies work.", "Build a habit of reading reliable current-affairs sources.", "Practise writing a balanced summary of a public issue.", "Use only official recruitment notifications for eligibility and exam details."],
    project: ["Policy options brief", "Compare two possible responses to a public issue using public sources and note trade-offs."],
    resource: ["Union Public Service Commission", "https://upsc.gov.in/", "Official examination notices and information"]
  }
];

CAREER_PROFILES.push(...ADDITIONAL_CAREERS.map((career) => ({
  ...career,
  aliases: [career.title],
  keywords: [career.category, ...career.dimensions],
  domains: [career.category],
  goals: career.dimensions,
  educationRequirements: {
    summary: career.educationSummary,
    entryLevels: [],
    pathways: []
  },
  streams: ["pcm", "pcb", "pcmb", "commerce_math", "commerce", "arts", "vocational", "diploma", "other", "undecided"],
  pathways: ["Explore relevant subjects and introductory learning.", "Compare recognised programs and verify current eligibility with official institutions."],
  beginnerProjects: [{ title: career.project[0], description: career.project[1] }],
  freeResources: [{ title: career.resource[0], url: career.resource[1], topic: career.resource[2] }]
})));

const QUIZ_QUESTIONS = [
  {
    statement: "I enjoy solving logical problems and finding patterns.",
    dimensions: ["analytical", "technology", "problem solving"]
  },
  {
    statement: "I enjoy helping people, understanding their needs, or supporting their wellbeing.",
    dimensions: ["people", "health", "teaching", "social"]
  },
  {
    statement: "I like expressing ideas through writing, art, design, videos, or other creative work.",
    dimensions: ["creative", "design", "communication"]
  },
  {
    statement: "I enjoy organising tasks, taking responsibility, or coordinating people.",
    dimensions: ["organisation", "business", "leadership"]
  },
  {
    statement: "I am curious about science, nature, research, or understanding how things work.",
    dimensions: ["research", "science", "environment", "health"]
  },
  {
    statement: "I enjoy building, repairing, experimenting, or working with practical tools.",
    dimensions: ["practical", "hands_on", "problem solving", "science"]
  },
  {
    statement: "I like analysing information and comparing evidence before making decisions.",
    dimensions: ["analytical", "research", "business"]
  },
  {
    statement: "I enjoy communicating ideas, presenting information, persuading others, or working with people.",
    dimensions: ["communication", "people", "leadership", "teaching", "business"]
  },
  {
    statement: "I would enjoy learning new technical, digital, business, or professional skills through practice.",
    dimensions: ["technology", "business", "analytical", "practical"]
  },
  {
    statement: "I prefer activities where I can create something useful and see the result of my work.",
    dimensions: ["creative", "practical", "design", "problem solving"]
  },
  {
    statement: "I enjoy designing and constructing customized furniture or wooden structures.",
    dimensions: ["creative", "design", "practical", "hands_on", "problem solving"]
  },
  {
    statement: "I am interested in carrying out construction tasks involving materials such as bricks, tiles, and masonry.",
    dimensions: ["practical", "hands_on", "problem solving", "responsibility"]
  },
  {
    statement: "I would enjoy researching and developing new medicines or pharmaceutical treatments.",
    dimensions: ["science", "research", "health", "analytical"]
  },
  {
    statement: "I am interested in finding scientific solutions to water pollution and environmental challenges.",
    dimensions: ["science", "research", "environment", "problem solving"]
  },
  {
    statement: "I enjoy writing creative content, including books, stories, or dramatic scripts.",
    dimensions: ["creative", "communication", "teaching", "social"]
  },
  {
    statement: "I am interested in learning, practicing, and performing music using musical instruments.",
    dimensions: ["creative", "practical", "communication"]
  },
  {
    statement: "I enjoy helping individuals improve their physical fitness through structured exercise routines.",
    dimensions: ["people", "health", "teaching", "practical"]
  },
  {
    statement: "I am interested in supporting people as they work through personal challenges and emotional difficulties.",
    dimensions: ["people", "health", "social", "communication"]
  },
  {
    statement: "I enjoy analyzing financial markets and making informed decisions about stocks and bonds.",
    dimensions: ["analytical", "business", "research", "detail"]
  },
  {
    statement: "I would enjoy overseeing the daily operations of a retail store.",
    dimensions: ["business", "organisation", "leadership", "people"]
  },
  {
    statement: "I am interested in creating and managing spreadsheets to organize, analyze, and process information.",
    dimensions: ["analytical", "technology", "organisation", "detail"]
  },
  {
    statement: "I enjoy reviewing documents and records to identify grammatical errors, inconsistencies, or inaccuracies.",
    dimensions: ["analytical", "communication", "research", "detail"]
  },
  {
    statement: "I am interested in diagnosing and repairing faults in household electrical or mechanical appliances.",
    dimensions: ["practical", "hands_on", "problem solving", "technology"]
  },
  {
    statement: "I would enjoy working in aquaculture, including raising and caring for fish in a controlled environment.",
    dimensions: ["science", "environment", "practical", "responsibility"]
  },
  {
    statement: "I enjoy conducting chemical experiments to investigate substances and their properties.",
    dimensions: ["science", "research", "analytical", "practical"]
  },
  {
    statement: "I am curious about astronomy and enjoy studying planetary motion and other celestial phenomena.",
    dimensions: ["science", "research", "analytical", "problem solving"]
  },
  {
    statement: "I enjoy composing, arranging, or developing original musical pieces.",
    dimensions: ["creative", "design", "communication"]
  },
  {
    statement: "I am interested in expressing ideas through drawing, illustration, or visual art.",
    dimensions: ["creative", "design", "practical"]
  },
  {
    statement: "I enjoy helping individuals identify suitable career options based on their interests and goals.",
    dimensions: ["people", "communication", "teaching", "social"]
  },
  {
    statement: "I am interested in helping people recover physical abilities through rehabilitation and therapeutic exercises.",
    dimensions: ["people", "health", "science", "practical"]
  },
  {
    statement: "I would enjoy providing professional grooming and personal-care services, such as hairstyling or barbering.",
    dimensions: ["people", "creative", "practical", "hands_on"]
  },
  {
    statement: "I am interested in managing a department and coordinating its people, resources, and objectives.",
    dimensions: ["organisation", "business", "leadership", "communication"]
  },
  {
    statement: "I enjoy installing, configuring, and maintaining software across computer networks.",
    dimensions: ["technology", "problem solving", "practical", "hands_on"]
  },
  {
    statement: "I am comfortable performing numerical calculations accurately using calculators or digital tools.",
    dimensions: ["analytical", "technology", "business", "detail"]
  },
  {
    statement: "I enjoy assembling electronic components and understanding how they work together.",
    dimensions: ["technology", "practical", "hands_on", "problem solving"]
  },
  {
    statement: "I would be comfortable working in logistics and delivering goods safely and efficiently to different locations.",
    dimensions: ["practical", "organisation", "responsibility", "problem solving"]
  },
  {
    statement: "I am interested in examining biological samples using microscopes and laboratory equipment.",
    dimensions: ["science", "research", "health", "analytical"]
  },
  {
    statement: "I would enjoy investigating incidents to determine their causes, including fire-related incidents.",
    dimensions: ["analytical", "research", "problem solving", "responsibility"]
  },
  {
    statement: "I am interested in creating visual effects and digital imagery for films or other media.",
    dimensions: ["creative", "design", "technology", "communication"]
  },
  {
    statement: "I enjoy designing and painting stage sets for theatrical performances.",
    dimensions: ["creative", "design", "practical", "hands_on"]
  },
  {
    statement: "I find it meaningful to contribute my time and skills to charitable or nonprofit organizations.",
    dimensions: ["social", "people", "communication", "responsibility"]
  },
  {
    statement: "I enjoy teaching sports skills and helping children develop their athletic abilities.",
    dimensions: ["teaching", "people", "health", "communication"]
  },
  {
    statement: "I am interested in developing a business idea and turning it into a sustainable venture.",
    dimensions: ["business", "creative", "leadership", "problem solving"]
  },
  {
    statement: "I enjoy negotiating agreements and finding mutually beneficial solutions in business discussions.",
    dimensions: ["business", "communication", "people", "leadership"]
  },
  {
    statement: "I am comfortable maintaining accurate records of shipments, deliveries, and received goods.",
    dimensions: ["organisation", "detail", "business", "responsibility"]
  },
  {
    statement: "I enjoy calculating employee salaries, wages, and related payroll information accurately.",
    dimensions: ["analytical", "business", "organisation", "detail"]
  },
  {
    statement: "I am interested in inspecting products and testing components to ensure they meet quality standards.",
    dimensions: ["analytical", "research", "practical", "detail"]
  },
  {
    statement: "I enjoy practical technical work involving the installation, maintenance, or repair of locking systems.",
    dimensions: ["practical", "hands_on", "problem solving", "responsibility"]
  },
  {
    statement: "I would enjoy developing scientific or data-driven methods to improve weather forecasting.",
    dimensions: ["science", "analytical", "research", "technology"]
  },
  {
    statement: "I am interested in conducting experiments and investigations in a biological research laboratory.",
    dimensions: ["science", "research", "health", "analytical"]
  },
  {
    statement: "I enjoy developing scripts, storylines, and dialogue for films or television productions.",
    dimensions: ["creative", "communication", "design", "social"]
  },
  {
    statement: "I am interested in performing dance styles such as jazz or tap as a creative form of expression.",
    dimensions: ["creative", "practical", "communication"]
  },
  {
    statement: "I would enjoy teaching sign language and helping improve communication accessibility.",
    dimensions: ["teaching", "communication", "people", "social"]
  },
  {
    statement: "I am interested in supporting structured group sessions that help people address emotional or behavioural challenges.",
    dimensions: ["people", "health", "teaching", "communication"]
  },
  {
    statement: "I would enjoy analyzing legal issues and representing clients in legal proceedings.",
    dimensions: ["analytical", "communication", "people", "research"]
  },
  {
    statement: "I am interested in promoting fashion products and developing marketing strategies for clothing brands.",
    dimensions: ["business", "creative", "research", "communication"]
  },
  {
    statement: "I enjoy using digital tools to track, organize, and manage inventory efficiently.",
    dimensions: ["technology", "organisation", "business", "detail"]
  },
  {
    statement: "I am comfortable maintaining accurate records of rental payments and related financial transactions.",
    dimensions: ["analytical", "business", "organisation", "detail"]
  },
  {
    statement: "I enjoy operating production equipment and understanding how manufacturing processes work.",
    dimensions: ["practical", "hands_on", "technology", "responsibility"]
  },
  {
    statement: "I would be interested in contributing to forest-fire prevention and emergency response activities.",
    dimensions: ["environment", "practical", "responsibility", "problem solving"]
  },
  {
    statement: "I enjoy applying scientific knowledge to develop alternative ingredients or improve existing food products.",
    dimensions: ["science", "research", "creative", "analytical"]
  },
  {
    statement: "I am interested in performing laboratory tests that help identify diseases and support medical diagnosis.",
    dimensions: ["science", "health", "research", "analytical"]
  },
  {
    statement: "I enjoy singing and collaborating with other musicians in a band or musical group.",
    dimensions: ["creative", "communication", "people"]
  },
  {
    statement: "I am interested in editing video footage to create polished and engaging visual content.",
    dimensions: ["creative", "design", "technology", "communication"]
  },
  {
    statement: "I enjoy caring for young children and supporting their early learning and development.",
    dimensions: ["people", "teaching", "health", "social"]
  },
  {
    statement: "I would enjoy teaching academic subjects and helping high-school students understand complex concepts.",
    dimensions: ["teaching", "communication", "people", "science"]
  },
  {
    statement: "I enjoy interacting with customers and helping them choose suitable products in a retail environment.",
    dimensions: ["people", "communication", "business"]
  },
  {
    statement: "I am interested in managing a clothing store, including its staff, merchandise, and daily operations.",
    dimensions: ["business", "organisation", "leadership", "people"]
  },
  {
    statement: "I enjoy maintaining organized inventory records and ensuring that stock information remains accurate.",
    dimensions: ["organisation", "detail", "business", "responsibility"]
  },
  {
    statement: "I am comfortable performing structured administrative tasks, such as sorting, organizing, and distributing organizational correspondence.",
    dimensions: ["organisation", "detail", "communication", "responsibility"]
  }
];

const DIMENSION_LABELS = {
  analytical: "analytical thinking", technology: "technology and computing", people: "people-focused work",
  health: "health and wellbeing", teaching: "teaching and learning", creative: "creative expression",
  design: "design and visual communication", communication: "communication", organisation: "planning and organisation",
  business: "business and enterprise", leadership: "leadership and coordination", research: "research and investigation",
  science: "science and discovery", environment: "environment and sustainability", practical: "practical problem-solving",
  "hands_on": "hands-on work", "problem solving": "problem-solving", social: "community and social impact",
  responsibility: "responsibility and dependable work", detail: "accuracy and attention to detail"
};

const FACTORS = [
  { key: "interests", label: "interests", weight: 30 },
  { key: "skills", label: "skills", weight: 30 },
  { key: "favouriteSubjects", careerKey: "subjects", label: "favourite subjects", weight: 15 },
  { key: "goals", label: "goals", weight: 15 }
];

const TERM_ALIASES = {
  "artificial intelligence": "ai",
  "programming": "coding",
  "programming skills": "coding",
  "coding skills": "coding",
  "math": "mathematics",
  "cyber security": "cybersecurity"
};

const LEGACY_DIMENSIONS = {
  software_developer: ["technology", "analytical", "problem solving"],
  machine_learning: ["technology", "analytical", "research", "science"],
  data_analyst: ["analytical", "research", "business"],
  cybersecurity: ["technology", "analytical", "social", "problem solving"],
  robotics_engineer: ["technology", "practical", "hands_on", "analytical"],
  ux_designer: ["creative", "design", "people", "communication"]
};

const PATHWAYS_BY_CATEGORY = {
  technology: ["Explore relevant computing and mathematics subjects.", "Compare recognised degrees, diplomas, and portfolio-based routes; check program-level subject requirements."],
  healthcare: ["Explore recognised health-science study and supervised practical training.", "Confirm qualification, registration, and scope-of-practice requirements with the relevant official authority."],
  science: ["Compare relevant science programs and their laboratory or research opportunities.", "Check subject prerequisites and the qualifications needed for the specific role."],
  environment: ["Explore environmental, biological, geographical, or engineering study options.", "Check course prerequisites and fieldwork expectations with institutions."],
  education: ["Explore subject knowledge, education study, and supervised classroom experience.", "Check current teacher qualification and certification rules for the role and location."],
  social_science: ["Explore social-science study and research-methods foundations.", "Check distinct qualification rules for research, counselling, and regulated practice roles."],
  law_governance: ["Explore law, public policy, or public-administration study relevant to the role.", "Verify official professional qualification or recruitment routes; these are not interchangeable."],
  business_finance: ["Explore accounting, economics, commerce, or finance study relevant to the role.", "Check the official requirements of any professional qualification or regulated activity."],
  business: ["Explore business, communication, research, or management study that fits the role.", "Build small projects and check employer or institution expectations; no single degree guarantees entry."],
  creative: ["Explore design, media, communication, or arts programs and build a portfolio.", "Review current course or employer requirements and use properly licensed materials."],
  design_engineering: ["Explore mathematics, physics, design, and built-environment programs.", "Check official program prerequisites and any professional registration requirements."],
  vocational: ["Compare recognised vocational courses, apprenticeships, or supervised training.", "Verify trade-specific safety, licensing, and qualification rules before practising."]
};

CAREER_PROFILES.forEach((career) => {
  career.dimensions = career.dimensions || LEGACY_DIMENSIONS[career.id] || [];
  career.category = career.category || "technology";
  career.pathways = PATHWAYS_BY_CATEGORY[career.category] || PATHWAYS_BY_CATEGORY.technology;
});

const SESSION_KEY = "spectra-career-session";
const profileForm = document.querySelector("#profile-form");
const recommendationSummary = document.querySelector("#recommendation-summary");
const recommendationResults = document.querySelector("#recommendation-results");
const careerSearch = document.querySelector("#career-search");
const careerResults = document.querySelector("#career-results");
const careerCount = document.querySelector("#career-count");
const searchStatus = document.querySelector("#search-status");
const quizForm = document.querySelector("#career-quiz");
const quizIntro = document.querySelector("#quiz-intro");
const quizStart = document.querySelector("#quiz-start");
const quizQuestion = document.querySelector("#quiz-question");
const quizProgressLabel = document.querySelector("#quiz-progress-label");
const quizProgress = document.querySelector("#quiz-progress");
const quizError = document.querySelector("#quiz-error");
const quizBack = document.querySelector("#quiz-back");
const resultsDashboard = document.querySelector("#results-dashboard");

function readSessionState() {
  try {
    const saved = sessionStorage.getItem(SESSION_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Could not read the saved career assessment.", error);
    return {};
  }
}

const savedSession = readSessionState();
let profile = savedSession.profile && typeof savedSession.profile === "object" ? savedSession.profile : {};
let quizAnswers = Array.isArray(savedSession.quizAnswers) && savedSession.quizAnswers.length === QUIZ_QUESTIONS.length
  ? savedSession.quizAnswers.map((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : null)
  : Array(QUIZ_QUESTIONS.length).fill(null);
let currentQuestion = Number.isInteger(savedSession.currentQuestion)
  ? Math.min(Math.max(savedSession.currentQuestion, 0), QUIZ_QUESTIONS.length - 1)
  : 0;
let assessmentComplete = savedSession.assessmentComplete === true;
let isNavigating = false;
let navigationTimer = null;
let selectedCareerCategories = null;

function persistSessionState() {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      profile,
      quizAnswers,
      currentQuestion,
      assessmentComplete
    }));
  } catch (error) {
    console.warn("Could not save the career assessment in this browser session.", error);
  }
}

function normalizeTerm(value) {
  const normalized = String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

  return Object.prototype.hasOwnProperty.call(TERM_ALIASES, normalized)
    ? TERM_ALIASES[normalized]
    : normalized;
}

function parseList(value) {
  return [...new Set(
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  )];
}

function asList(value) {
  return Array.isArray(value) ? value : [];
}

function readProfile() {
  if (!profileForm) return {};
  const profile = {};
  const listFields = ["interests", "skills", "favouriteSubjects", "difficultSubjects", "goals"];

  listFields.forEach((field) => {
    const values = parseList(profileForm.elements[field].value);
    if (values.length > 0) {
      profile[field] = values;
    }
  });

  ["educationStage", "educationStream", "studyLocation", "studyPreference"].forEach((field) => {
    const value = profileForm.elements[field].value;
    if (value) profile[field] = value;
  });

  return profile;
}

function getFactorValues(profile, factor, career) {
  const answers = profile[factor.key] || [];
  const careerTerms = factor.key === "skills"
    ? asList(career.skills && career.skills.required)
    : asList(career[factor.careerKey || factor.key]);

  if (answers.length === 0 || careerTerms.length === 0) {
    return null;
  }

  return { answers, careerTerms };
}

function compareFactor(answers, careerTerms) {
  const uniqueAnswers = [...new Map(
    answers.map((answer) => [normalizeTerm(answer), answer])
  ).values()];
  const availableTerms = new Set(careerTerms.map(normalizeTerm));
  const matchedAnswers = uniqueAnswers.filter((answer) => availableTerms.has(normalizeTerm(answer)));

  return {
    score: uniqueAnswers.length === 0
      ? 0
      : Math.round((matchedAnswers.length / uniqueAnswers.length) * 100),
    matchedAnswers,
    answerCount: uniqueAnswers.length
  };
}

function scoreCareer(profile, career) {
  let weightedTotal = 0;
  let answeredWeight = 0;
  let comparableWeight = 0;
  const factorResults = [];
  const unavailableCategories = [];

  FACTORS.forEach((factor) => {
    const values = getFactorValues(profile, factor, career);
    if ((profile[factor.key] || []).length === 0) {
      return;
    }

    answeredWeight += factor.weight;
    if (!values) {
      unavailableCategories.push(factor.label);
      return;
    }

    const comparison = compareFactor(values.answers, values.careerTerms);
    weightedTotal += comparison.score * factor.weight;
    comparableWeight += factor.weight;
    factorResults.push({
      key: factor.key,
      label: factor.label,
      weight: factor.weight,
      ...comparison
    });
  });

  const dimensionWeights = profile.quizDimensionWeights || {};
  const careerDimensions = new Set(asList(career.dimensions));
  const relevantDimensionScores = Object.entries(dimensionWeights)
    .filter(([dimension]) => careerDimensions.has(dimension))
    .map(([, result]) => result.percent);
  const quizScore = relevantDimensionScores.length > 0
    ? Math.round(relevantDimensionScores.reduce((total, score) => total + score, 0) / relevantDimensionScores.length)
    : null;
  const profileScore = comparableWeight > 0
    ? Math.round(weightedTotal / comparableWeight)
    : null;

  if (quizScore === null && profileScore === null) {
    return { score: null, dataCoverage: 0, comparedCategories: 0, unavailableCategories, factorResults, quizScore };
  }

  const score = quizScore !== null && profileScore !== null
    ? Math.round(quizScore * 0.7 + profileScore * 0.3)
    : quizScore ?? profileScore;

  return {
    score,
    quizScore,
    profileScore,
    dataCoverage: answeredWeight === 0 ? 100 : Math.round((comparableWeight / answeredWeight) * 100),
    comparedCategories: factorResults.length,
    unavailableCategories,
    factorResults,
    matchedDimensions: [...careerDimensions]
      .filter((dimension) => dimensionWeights[dimension])
      .map((dimension) => ({ key: dimension, ...dimensionWeights[dimension] }))
  };
}

function createReasons(match) {
  const reasons = match.factorResults.map((factor) => {
    if (factor.matchedAnswers.length > 0) {
      return `Matched ${factor.label}: ${factor.matchedAnswers.join(", ")}.`;
    }
    return `No exact ${factor.label} overlap in the available profile tags yet.`;
  });

  if (match.unavailableCategories.length > 0) {
    reasons.push(`Not compared because career profile data is missing for: ${match.unavailableCategories.join(", ")}.`);
  }
  if (match.matchedDimensions && match.matchedDimensions.length > 0) {
    reasons.unshift(`Quiz agreement for related interests: ${match.matchedDimensions.map((dimension) => `${DIMENSION_LABELS[dimension.key] || dimension.key} ${dimension.mean.toFixed(1)}/5`).join(", ")}.`);
  }

  if (match.score === null && reasons.length === 0) {
    reasons.push("There is not enough profile data to compare this career yet.");
  }

  return reasons;
}

function getPotentialSkillGaps(profile, career) {
  if (!profile.skills || profile.skills.length === 0) {
    return [];
  }

  const studentSkills = new Set(profile.skills.map(normalizeTerm));
  return asList(career.skills && career.skills.required)
    .filter((skill) => !studentSkills.has(normalizeTerm(skill)));
}

function buildRecommendationResponse(profile) {
  const scoreLimitations = ["Scores compare mapped quiz-interest dimensions and, when available, optional profile-tag overlap. They are not a probability of success, an aptitude measure, or a professional assessment."];
  const results = CAREER_PROFILES
    .map((career) => {
      const match = scoreCareer(profile, career);
      return {
        career,
        match,
        matchedReasons: createReasons(match),
        potentialSkillGaps: getPotentialSkillGaps(profile, career)
      };
    })
    .filter((result) => result.match.score !== null)
    .sort((a, b) => (
      b.match.score - a.match.score
      || b.match.dataCoverage - a.match.dataCoverage
      || a.career.title.localeCompare(b.career.title)
    ))
    .filter((result) => result.match.score >= 12)
    .slice(0, 5);

  return {
    scoreLimitations,
    results: results.map(({ career, match, matchedReasons, potentialSkillGaps }) => ({
      careerId: career.id,
      title: career.title,
      score: match.score,
      quizScore: match.quizScore,
      profileScore: match.profileScore,
      dataCoverage: match.dataCoverage,
      comparedCategories: match.comparedCategories,
      unavailableCategories: match.unavailableCategories,
      scoreLimitations,
      skillsProvided: Boolean(profile.skills && profile.skills.length > 0),
      skillsToDevelop: profile.skillsToDevelop || [],
      skillRequirementsAvailable: asList(career.skills && career.skills.required).length > 0,
      matchedDimensions: match.matchedDimensions || [],
      matchedReasons,
      potentialSkillGaps,
      careerProfile: career
    }))
  };
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderList(items) {
  const list = asList(items);
  if (!list.length) {
    return "<p>Not yet added to this career profile.</p>";
  }
  return `<ul>${list.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderResources(resources) {
  const list = asList(resources);
  if (!list.length) {
    return "<p>Not yet added to this career profile.</p>";
  }

  return `<ul>${list.map((resource) => `
    <li>
      <a href="${escapeHTML(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(resource.title)}</a>
      <span> — ${escapeHTML(resource.topic)}</span>
    </li>
  `).join("")}</ul>`;
}

function renderCareerCard(career, result = null, index = 0, extraText = "") {
  const skills = career.skills || {};
  const educationRequirements = career.educationRequirements || {};
  const matchBadge = result
    ? result.score === null
      ? '<span class="match-badge match-unscored">Not enough data to score</span>'
      : `<span class="match-badge">Interest alignment ${result.score}/100</span>`
    : '<span class="match-badge match-neutral">Career profile</span>';
  const matchDetails = result
    ? `
      <div class="match-explanation">
        <p><strong>What this score means:</strong> It averages agreement percentages for quiz dimensions listed in this career profile${result.profileScore === null ? " (100% quiz score; no profile tags were comparable)." : " (70% of the score), plus 30% from comparable interests, skills, subjects, and goals you provided."} Neutral answers contribute the midpoint and are not treated as weaknesses. This score is not a success probability or an assessment of ability.</p>
        <h4>Why it appeared</h4>
        ${renderList(result.matchedReasons)}
        ${result.scoreLimitations && result.scoreLimitations.length
          ? `<h4>Scoring limitations</h4>${renderList(result.scoreLimitations)}`
          : ""}
        ${!result.skillRequirementsAvailable
          ? "<h4>Skill comparison</h4><p>Required skill data is not available for this career profile yet.</p>"
          : result.skillsProvided
          ? `
            <h4>Skills to explore</h4>
            <p>These are listed in the career profile and may be useful to practise; not listing a skill does not mean you lack it.</p>
            ${result.potentialSkillGaps.length
              ? renderList(result.potentialSkillGaps)
              : "<p>No additional required skills to explore from this profile.</p>"}
          `
          : "<h4>Skill comparison</h4><p>Add skills above to compare them with this profile.</p>"}
        ${result.skillsToDevelop && result.skillsToDevelop.length
          ? `<h4>Skills you chose to develop</h4>${renderList(result.skillsToDevelop)}`
          : ""}
      </div>
    `
    : "";
  return `
    <article class="career-card career-${escapeHTML(career.color)} profile-card">
      <div class="career-card-top">
        <span class="career-icon" aria-hidden="true">${escapeHTML(career.icon || "✦")}</span>
        <span class="career-index">FIELD ${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="career-card-title-row">
        <h3>${escapeHTML(career.title)}</h3>
        ${matchBadge}
      </div>
      <p>${escapeHTML(career.description || "A career description is not yet available in this profile.")}</p>
      ${extraText ? `<p class="career-extra-reason">${escapeHTML(extraText)}</p>` : ""}
      <details class="career-details">
        <summary>Explore career profile</summary>
        ${matchDetails}
        <h4>Required skills</h4>
        ${renderList(skills.required)}
        <h4>Helpful skills</h4>
        ${renderList(skills.helpful)}
        <h4>Relevant subjects</h4>
        ${renderList(career.subjects)}
        <h4>Education notes</h4>
        <p>${escapeHTML(educationRequirements.summary || "Education information is not yet available in this career profile.")}</p>
        ${result ? `<h4>How your background may relate</h4><p>${escapeHTML(getEducationFitNote(profile, career))}</p>` : ""}
        <h4>Possible study pathways</h4>
        ${renderList(career.pathways)}
        <p class="profile-data-note">Career information is a starting point. Check current requirements with schools and employers.</p>
      </details>
      <a class="button button-outline career-roadmap-link" href="roadmap.html?career=${encodeURIComponent(career.id)}">Explore learning roadmap <span aria-hidden="true">→</span></a>
    </article>
  `;
}

function renderCareerResults(careers, container) {
  if (careers.length === 0) {
    container.innerHTML = '<p class="empty-state">No career profiles match that search. Try a different title, skill, or domain.</p>';
    return;
  }
  container.innerHTML = careers.map((career, index) => renderCareerCard(career, null, index)).join("");
}

function getEducationFitNote(studentProfile, career) {
  const stream = studentProfile.educationStream;
  const streamLabels = {
    pcm: "Science PCM", pcb: "Science PCB", pcmb: "Science PCMB",
    commerce_math: "Commerce with Mathematics", commerce: "Commerce without Mathematics",
    arts: "Arts and Humanities", vocational: "Vocational", diploma: "Diploma / Polytechnic",
    other: "Other", undecided: "Undecided"
  };
  if (!stream || stream === "undecided") {
    return `No stream was selected. This profile lists ${asList(career.subjects).join(", ") || "no verified subject details"} as relevant topics to explore, not official eligibility criteria. Confirm current prerequisites with institutions and regulators.`;
  }

  const label = streamLabels[stream] || "your selected stream";
  return `${label} is recorded for context only; this profile does not contain verified, program-level stream eligibility for every route. It does not automatically rule out this career. ${asList(career.subjects).length ? `This profile lists ${career.subjects.join(", ")} as topics to explore, not entry requirements.` : ""} Check official sources for prerequisites, bridge courses, exams, or qualifications.`;
}

function getQuizDimensionScores(answers) {
  const scores = {};
  answers.forEach((rating, questionIndex) => {
    QUIZ_QUESTIONS[questionIndex].dimensions.forEach((dimension) => {
      if (!scores[dimension]) scores[dimension] = [];
      scores[dimension].push(rating);
    });
  });
  return Object.fromEntries(Object.entries(scores).map(([dimension, ratings]) => {
    const mean = ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
    return [dimension, {
      mean,
      percent: Math.round(((mean - 1) / 4) * 100),
      responses: ratings.length
    }];
  }));
}

function getChosenDevelopmentFocus() {
  const rating = quizAnswers[8];
  return rating >= 4
    ? QUIZ_QUESTIONS[8].dimensions.map((dimension) => DIMENSION_LABELS[dimension] || dimension)
    : [];
}

function renderListItems(items) {
  if (!items.length) return "<p>Not enough information to suggest this yet.</p>";
  return `<ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderDashboard(response) {
  const dimensionWeights = profile.quizDimensionWeights;
  const strongestDimensions = Object.entries(dimensionWeights)
    .sort((a, b) => b[1].mean - a[1].mean || (DIMENSION_LABELS[a[0]] || a[0]).localeCompare(DIMENSION_LABELS[b[0]] || b[0]))
    .filter(([, result]) => result.mean > 3)
    .slice(0, 4);
  const topLabels = strongestDimensions.map(([dimension]) => DIMENSION_LABELS[dimension] || dimension);

  const interestSummary = topLabels.length
    ? `Your answers suggest interest in ${topLabels.join(", ")}.`
    : "Your responses did not rate a particular interest dimension above neutral; neutral or disagreement is not a weakness and does not limit your potential.";
  recommendationSummary.textContent = `${interestSummary} Dimension scores are calculated as the mean of the 1–5 agreement ratings mapped to each dimension, then converted with ((mean − 1) ÷ 4) × 100; neutral is the midpoint (50). We compared your answers with ${CAREER_PROFILES.length} career profiles and show up to five profiles with the strongest available overlap.`;

  document.querySelector("#strengths-results").innerHTML = strongestDimensions.length ? `<ul>${strongestDimensions.map(([dimension]) => {
    const supportingAnswers = quizAnswers.reduce((questions, rating, questionIndex) => {
      if (QUIZ_QUESTIONS[questionIndex].dimensions.includes(dimension)) {
        questions.push(`Q${questionIndex + 1} (${rating}/5)`);
      }
      return questions;
    }, []);
    return `<li><strong>${escapeHTML(DIMENSION_LABELS[dimension] || dimension)}</strong> — Your answers suggest this may be worth exploring (average ${dimensionWeights[dimension].mean.toFixed(1)}/5; ${dimensionWeights[dimension].percent}/100 of the scale range). Responses: ${supportingAnswers.join(", ")}.</li>`;
  }).join("")}</ul>` : "<p>No dimensions were rated above neutral in this quiz. You can still explore every career; these answers do not measure ability or potential.</p>";

  const explicitDevelopment = getChosenDevelopmentFocus();
  const careerSkills = [...new Set(response.results
    .slice(0, 3)
    .flatMap((result) => asList(result.careerProfile.skills && result.careerProfile.skills.required)))].slice(0, 4);
  document.querySelector("#development-results").innerHTML = `
    <p><strong>You expressed interest in learning:</strong> Your response to statement 9 was ${quizAnswers[8]}/5${quizAnswers[8] >= 4 ? ", suggesting the listed skill areas may be worth exploring." : "; this is a preference rating, not a skill gap."}</p>
    ${renderListItems(explicitDevelopment)}
    <p><strong>Skills that may be useful in your leading career ideas:</strong> These are learning opportunities, not inferred weaknesses.</p>
    ${renderListItems(careerSkills)}
  `;

  document.querySelector("#workstyle-results").innerHTML = `
    <p>${topLabels.length
      ? `Your ratings suggest interest in activities involving ${topLabels.join(", ")}. This is a snapshot of stated preferences, not a permanent personality type.`
      : "Your answers did not show a preference above neutral for one particular work-style dimension. This is not a weakness or a fixed classification."}</p>
    <details class="answer-review">
      <summary>Review your ${QUIZ_QUESTIONS.length} answers</summary>
      <ol>${quizAnswers.map((rating, index) => `<li><strong>${escapeHTML(QUIZ_QUESTIONS[index].statement)}</strong> — ${rating}/5 (${["", "Strongly Disagree", "Disagree", "Neutral / Not Sure", "Agree", "Strongly Agree"][rating]}).</li>`).join("")}</ol>
    </details>
  `;

  const stageLabels = {
    school_8_below: "Class 8 or below", class_9_10: "Class 9–10", class_11_12: "Class 11–12",
    diploma: "Diploma or polytechnic", undergraduate: "Undergraduate", postgraduate: "Postgraduate",
    working: "Graduate or working professional", other: "Other / undecided"
  };
  const streamLabels = {
    pcm: "Science PCM", pcb: "Science PCB", pcmb: "Science PCMB",
    commerce_math: "Commerce with Mathematics", commerce: "Commerce without Mathematics",
    arts: "Arts and Humanities", vocational: "Vocational", diploma: "Diploma / Polytechnic",
    other: "Other", undecided: "Not decided yet"
  };
  const educationLines = [
    `Education stage: ${stageLabels[profile.educationStage] || "not provided"}.`,
    `Stream: ${streamLabels[profile.educationStream] || "not provided"}.`,
    `Preferred location: ${profile.studyLocation === "india" ? "India" : profile.studyLocation === "abroad" ? "Abroad" : profile.studyLocation === "either" ? "Either / undecided" : "not provided"}.`,
    `Study preference: ${({
      long: "open to longer study",
      affordable: "prefer affordable pathways",
      short: "interested in shorter skill-based pathways"
    })[profile.studyPreference] || "not provided"}.`,
    "Stream and stage inform pathway notes but never automatically remove a career from your results.",
    "Check official institution and regulator sources for current prerequisites, entrance exams, qualifications, and location-specific rules."
  ];
  if (profile.difficultSubjects && profile.difficultSubjects.length) {
    educationLines.push(`You mentioned preferring to avoid: ${profile.difficultSubjects.join(", ")}. This was not used to penalise or remove a career.`);
  }
  document.querySelector("#education-results").innerHTML = `<ul>${educationLines.map((line) => `<li>${escapeHTML(line)}</li>`).join("")}</ul>`;

  recommendationResults.innerHTML = response.results.length ? response.results.map((result, index) => {
    const career = CAREER_PROFILES.find((item) => item.id === result.careerId);
    return renderCareerCard(career, result, index);
  }).join("") : '<p class="empty-state">No career profile passed the exploratory match threshold for these answers. This does not mean you lack potential. Browse all career paths below or retake the quiz with answers that best reflect your preferences.</p>';

  const excludedIds = new Set(response.results.map((result) => result.careerId));
  const alternatives = CAREER_PROFILES.filter((career) => !excludedIds.has(career.id))
    .sort((a, b) => {
      const aOverlap = a.dimensions.reduce((total, dimension) => total + (dimensionWeights[dimension] ? dimensionWeights[dimension].mean : 0), 0);
      const bOverlap = b.dimensions.reduce((total, dimension) => total + (dimensionWeights[dimension] ? dimensionWeights[dimension].mean : 0), 0);
      return bOverlap - aOverlap || a.title.localeCompare(b.title);
    })
    .slice(0, 3);
  document.querySelector("#alternative-results").innerHTML = alternatives
    .map((career, index) => {
      const relatedDimensions = career.dimensions
        .filter((dimension) => dimensionWeights[dimension] && dimensionWeights[dimension].mean >= 3)
        .map((dimension) => DIMENSION_LABELS[dimension] || dimension);
      const reason = relatedDimensions.length
        ? `Worth exploring because your quiz also touched on ${relatedDimensions.join(", ")}.`
        : "A different direction to browse beyond your strongest profile overlaps.";
      return renderCareerCard(career, null, index, reason);
    }).join("");
  document.querySelector("#alternative-section").hidden = alternatives.length === 0;
}

function renderQuizQuestion() {
  const question = QUIZ_QUESTIONS[currentQuestion];
  quizProgressLabel.textContent = `Question ${currentQuestion + 1} of ${QUIZ_QUESTIONS.length}`;
  quizProgress.max = QUIZ_QUESTIONS.length;
  quizProgress.value = currentQuestion + 1;
  quizBack.disabled = currentQuestion === 0;
  quizError.hidden = true;
  quizQuestion.innerHTML = `
    <h3 id="quiz-question-title" tabindex="-1">${escapeHTML(question.statement)}</h3>
    <div class="likert-scale" role="radiogroup" aria-labelledby="quiz-question-title">
      <span class="likert-endpoint likert-start">Strongly Disagree</span>
      ${[1, 2, 3, 4, 5].map((rating) => `
        <label class="likert-point likert-point-${rating}" for="quiz-rating-${rating}">
          <input id="quiz-rating-${rating}" type="radio" name="quiz-answer" value="${rating}" aria-label="${rating}, ${["", "Strongly Disagree", "Disagree", "Neutral / Not Sure", "Agree", "Strongly Agree"][rating]}" ${quizAnswers[currentQuestion] === rating ? "checked" : ""}>
          <span class="likert-dot" aria-hidden="true"></span>
          <span class="likert-value" aria-hidden="true">${rating}</span>
        </label>
      `).join("")}
      <span class="likert-endpoint likert-end">Strongly Agree</span>
    </div>
    ${Number.isInteger(quizAnswers[currentQuestion])
      ? '<button class="button button-primary quiz-continue" id="quiz-continue" type="button">Continue with this answer <span aria-hidden="true">→</span></button>'
      : ""}
  `;
  quizQuestion.querySelectorAll('input[name="quiz-answer"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (isNavigating) return;
      const rating = Number(input.value);
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) return;
      quizAnswers[currentQuestion] = rating;
      persistSessionState();
      quizError.hidden = true;
      quizQuestion.querySelectorAll('input[name="quiz-answer"]').forEach((radio) => {
        radio.disabled = true;
      });
      advanceQuiz();
    });
  });
  const continueButton = quizQuestion.querySelector("#quiz-continue");
  if (continueButton) continueButton.addEventListener("click", advanceQuiz);
}

function showQuizResults() {
  if (quizAnswers.length !== QUIZ_QUESTIONS.length
    || quizAnswers.some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5)) {
    if (quizError) quizError.hidden = false;
    return;
  }
  profile.quizDimensionWeights = getQuizDimensionScores(quizAnswers);
  profile.skillsToDevelop = getChosenDevelopmentFocus();
  assessmentComplete = true;
  persistSessionState();
  window.location.href = "results.html";
}

function advanceQuiz() {
  if (isNavigating) return;
  isNavigating = true;
  quizBack.disabled = true;
  quizQuestion.classList.add("is-transitioning");
  navigationTimer = window.setTimeout(() => {
    navigationTimer = null;
    quizQuestion.classList.remove("is-transitioning");
    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      isNavigating = false;
      showQuizResults();
      return;
    }
    currentQuestion += 1;
    persistSessionState();
    renderQuizQuestion();
    isNavigating = false;
    quizBack.disabled = currentQuestion === 0;
    (quizQuestion.querySelector('input[name="quiz-answer"]:checked')
      || quizQuestion.querySelector('input[name="quiz-answer"]')).focus();
  }, 120);
}

function getSearchRank(career, query) {
  const title = career.title.toLocaleLowerCase();
  const aliases = asList(career.aliases).map((value) => value.toLocaleLowerCase());
  const skills = career.skills || {};
  const otherTerms = [
    ...asList(career.keywords),
    ...asList(career.domains),
    ...asList(skills.required),
    ...asList(skills.helpful)
  ].map((value) => value.toLocaleLowerCase());

  if (title === query) {
    return 4;
  }
  if (title.includes(query) || aliases.some((alias) => alias.includes(query))) {
    return 3;
  }
  if (otherTerms.some((term) => term.includes(query))) {
    return 2;
  }
  return 0;
}

function updateCareerSearch() {
  if (!careerSearch || !careerResults || !careerCount || !searchStatus) return;
  const query = careerSearch.value.trim().toLocaleLowerCase();
  const matchingCareers = selectedCareerCategories
    ? CAREER_PROFILES.filter((career) => selectedCareerCategories.has(career.category))
    : CAREER_PROFILES;
  const results = query
    ? matchingCareers
      .map((career) => ({ career, rank: getSearchRank(career, query) }))
      .filter((result) => result.rank > 0)
      .sort((a, b) => b.rank - a.rank || a.career.title.localeCompare(b.career.title))
      .map((result) => result.career)
    : matchingCareers;

  renderCareerResults(results, careerResults);
  careerCount.textContent = `${String(results.length).padStart(2, "0")} CAREER ${results.length === 1 ? "PATH" : "PATHS"}`;
  searchStatus.textContent = query
    ? `${results.length} search ${results.length === 1 ? "result" : "results"}${selectedCareerCategories ? " in this category" : ""} — not personalized recommendations.`
    : selectedCareerCategories ? `Showing ${results.length} career profiles in this category.` : "Showing all career profiles.";
}

function setQuizVisible(visible) {
  const profileSection = document.querySelector("#profile-section");
  if (profileSection) profileSection.hidden = visible;
  if (quizIntro) quizIntro.hidden = visible;
  if (quizStart) quizStart.hidden = visible;
  if (quizForm) quizForm.hidden = !visible;
  if (visible && quizForm) {
    renderQuizQuestion();
    quizForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showQuizIntro(resetAnswers = false) {
  const profileSection = document.querySelector("#profile-section");
  if (profileForm) profile = readProfile();
  if (resetAnswers || assessmentComplete) {
    quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
    currentQuestion = 0;
  }
  assessmentComplete = false;
  isNavigating = false;
  if (navigationTimer !== null) {
    window.clearTimeout(navigationTimer);
    navigationTimer = null;
  }
  persistSessionState();
  if (profileSection) profileSection.hidden = true;
  if (quizIntro) quizIntro.hidden = false;
  if (quizStart) quizStart.hidden = true;
  if (quizForm) quizForm.hidden = true;
  if (quizIntro) quizIntro.scrollIntoView({ behavior: "smooth", block: "start" });
}

function beginAssessment(resetAnswers) {
  if (profileForm) profile = readProfile();
  if (resetAnswers || assessmentComplete) {
    quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
    currentQuestion = 0;
  }
  assessmentComplete = false;
  isNavigating = false;
  if (navigationTimer !== null) {
    window.clearTimeout(navigationTimer);
    navigationTimer = null;
  }
  persistSessionState();
  if (!quizForm) {
    window.location.href = "quiz.html";
    return;
  }
  setQuizVisible(true);
}

function initializeQuiz() {
  if (!quizForm || !quizStart) return;
  if (profileForm) {
    const listFields = new Set(["interests", "skills", "favouriteSubjects", "difficultSubjects", "goals"]);
    Array.from(profileForm.elements).forEach((field) => {
      if (!field.name || !(field.name in profile)) return;
      field.value = listFields.has(field.name) && Array.isArray(profile[field.name])
        ? profile[field.name].join(", ")
        : profile[field.name];
    });
    profileForm.addEventListener("input", () => {
      profile = readProfile();
      persistSessionState();
    });
    profileForm.addEventListener("change", () => {
      profile = readProfile();
      persistSessionState();
    });
    profileForm.addEventListener("submit", (event) => {
      event.preventDefault();
      showQuizIntro(true);
    });
    profileForm.addEventListener("reset", () => {
      profile = {};
      persistSessionState();
    });
  }

  const params = new URLSearchParams(window.location.search);
  if (params.has("restart")) {
    quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
    currentQuestion = 0;
    assessmentComplete = false;
    persistSessionState();
  }
  if (params.has("review")) {
    currentQuestion = 0;
    assessmentComplete = false;
    persistSessionState();
    setQuizVisible(true);
  } else if (params.has("start") || params.has("restart")) {
    showQuizIntro();
  } else if (!assessmentComplete && quizAnswers.some(Number.isInteger)) {
    setQuizVisible(true);
  }

  const startButton = document.querySelector("#start-quiz");
  if (startButton) {
    startButton.addEventListener("click", showQuizIntro);
  }
  const introNextButton = document.querySelector("#quiz-intro-next");
  if (introNextButton) {
    introNextButton.addEventListener("click", () => beginAssessment(false));
  }
  if (quizBack) {
    quizBack.addEventListener("click", () => {
      if (currentQuestion === 0 || isNavigating) return;
      currentQuestion -= 1;
      persistSessionState();
      renderQuizQuestion();
      (quizQuestion.querySelector('input[name="quiz-answer"]:checked')
        || quizQuestion.querySelector('input[name="quiz-answer"]')).focus();
    });
  }
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (quizAnswers.some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5) && quizError) {
      quizError.hidden = false;
    }
  });
}

function initializeCareers() {
  if (!careerResults) return;
  if (careerSearch) careerSearch.addEventListener("input", updateCareerSearch);
  document.querySelectorAll(".category-filter").forEach((button) => {
    button.addEventListener("click", () => {
      const categories = button.dataset.categories;
      selectedCareerCategories = categories === "all" ? null : new Set(categories.split(","));
      document.querySelectorAll(".category-filter").forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("is-active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });
      updateCareerSearch();
    });
  });
  updateCareerSearch();
}

function initializeResults() {
  if (!resultsDashboard) return;
  const emptyState = document.querySelector("#results-empty");
  if (!assessmentComplete || quizAnswers.some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5)) {
    resultsDashboard.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  profile.quizDimensionWeights = getQuizDimensionScores(quizAnswers);
  profile.skillsToDevelop = getChosenDevelopmentFocus();
  persistSessionState();
  renderDashboard(buildRecommendationResponse(profile));
  resultsDashboard.hidden = false;
  if (emptyState) emptyState.hidden = true;
}

function buildPersonalRoadmap(career) {
  const steps = [];
  if (profile.educationStage === "school_8_below" || profile.educationStage === "class_9_10") {
    steps.push("At your stage, explore school subjects and short, safe activities; there is no need to rush a degree or entrance-exam decision.");
  }
  if (profile.studyPreference === "affordable") {
    steps.push("Start with free learning resources in the career profile and compare total costs before choosing a course.");
  } else if (profile.studyPreference === "short") {
    steps.push("You prefer shorter skill-based learning. Check whether a recognised short route exists for this role and what prerequisites it requires.");
  }
  const firstProject = asList(career.beginnerProjects)[0];
  steps.push(...(firstProject
    ? [
      ...asList(career.roadmap).slice(0, 3),
      `Try this beginner activity: ${firstProject.title} — ${firstProject.description}`,
      "After trying it, note what you enjoyed and what you would like to learn next."
    ]
    : asList(career.roadmap)));
  if (!steps.length) {
    steps.push("Explore a subject you enjoy, try a beginner-friendly activity, and reflect on what you learned.");
  }
  return steps;
}

function initializeRoadmap() {
  const roadmapContent = document.querySelector("#roadmap-content");
  if (!roadmapContent) return;
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("career");
  const validResults = assessmentComplete && quizAnswers.every((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5)
    ? buildRecommendationResponse({ ...profile, quizDimensionWeights: getQuizDimensionScores(quizAnswers) }).results
    : [];
  const career = CAREER_PROFILES.find((item) => item.id === requestedId)
    || (validResults[0] && validResults[0].careerProfile);
  if (!career) {
    roadmapContent.innerHTML = `
      <div class="empty-state">
        <p>Choose a career from the explorer or complete the quiz to build a personalized learning roadmap.</p>
        <a class="button button-primary" href="careers.html">Explore careers <span aria-hidden="true">→</span></a>
      </div>
    `;
    return;
  }

  const match = validResults.find((result) => result.careerId === career.id);
  const heading = document.querySelector("#roadmap-title");
  const description = document.querySelector("#roadmap-description");
  if (heading) heading.textContent = `${career.title} learning roadmap`;
  if (description) description.textContent = career.description;
  roadmapContent.innerHTML = `
    ${match ? `<p class="match-badge">Interest alignment ${match.score}/100</p>` : ""}
    <section class="dashboard-panel roadmap-panel">
      <h2>Your next steps</h2>
      ${renderListItems(buildPersonalRoadmap(career))}
    </section>
    <section class="dashboard-panel">
      <h2>Learning roadmap</h2>
      ${renderList(career.roadmap)}
    </section>
    <section class="dashboard-panel">
      <h2>Beginner projects</h2>
      ${career.beginnerProjects && career.beginnerProjects.length
        ? `<ul>${career.beginnerProjects.map((project) => `<li><strong>${escapeHTML(project.title)}:</strong> ${escapeHTML(project.description)}</li>`).join("")}</ul>`
        : "<p>Not yet added to this career profile.</p>"}
    </section>
    <section class="dashboard-panel">
      <h2>Free learning resources</h2>
      ${renderResources(career.freeResources)}
    </section>
    <section class="dashboard-panel">
      <h2>Skills and study pathways</h2>
      <h3>Required skills</h3>${renderList(career.skills && career.skills.required)}
      <h3>Helpful skills</h3>${renderList(career.skills && career.skills.helpful)}
      <h3>Relevant subjects</h3>${renderList(career.subjects)}
      <h3>Possible study pathways</h3>${renderList(career.pathways)}
      <p>${escapeHTML(career.educationRequirements && career.educationRequirements.summary || "Education information is not yet available in this career profile.")}</p>
    </section>
    <p class="matching-note">Career information is a starting point. Check current requirements with schools and employers.</p>
  `;
}

function initializeNavigation() {
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelector("#nav-links");
  const navHoverBg = navLinks && navLinks.querySelector(".nav-hover-bg");
  const navCta = document.querySelector(".nav-cta");
  const themeToggle = document.querySelector("#theme-toggle");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const closeNavigation = () => {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
  };

  if (navLinks) {
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === window.location.pathname.split("/").pop()) {
        link.setAttribute("aria-current", "page");
      }
      const showNavHover = () => {
        if (!navHoverBg || window.innerWidth <= 700) return;
        navHoverBg.style.width = `${link.offsetWidth}px`;
        navHoverBg.style.height = `${link.offsetHeight}px`;
        navHoverBg.style.transform = `translate3d(${link.offsetLeft}px, ${link.offsetTop}px, 0)`;
        navLinks.classList.add("has-active-link");
      };
      link.addEventListener("pointerenter", showNavHover);
      link.addEventListener("focus", showNavHover);
    });
    navLinks.addEventListener("pointerleave", () => navLinks.classList.remove("has-active-link"));
    navLinks.addEventListener("focusout", (event) => {
      if (!navLinks.contains(event.relatedTarget)) navLinks.classList.remove("has-active-link");
    });
    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNavigation();
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      navLinks.classList.toggle("is-open", isOpen);
    });
  }
  if (navCta) navCta.addEventListener("click", closeNavigation);

  const updateThemeToggle = (theme) => {
    if (!themeToggle) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeToggle.title = `Switch to ${nextTheme} theme`;
    if (themeColorMeta) themeColorMeta.content = theme === "dark" ? "#000000" : "#f8faf7";
  };
  updateThemeToggle(document.documentElement.dataset.theme);
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      updateThemeToggle(theme);
      try {
        localStorage.setItem("spectra-theme", theme);
      } catch (error) {
        console.warn("Could not save the theme preference.", error);
      }
      if (window.innerWidth <= 700) closeNavigation();
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeNavigation();
  });
  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();
}

initializeNavigation();
initializeCareers();
initializeQuiz();
initializeResults();
initializeRoadmap();
