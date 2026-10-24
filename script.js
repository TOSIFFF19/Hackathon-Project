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

const CAREER_MARKET_GROUPS = [
  {
    category: "vocational",
    color: "peach",
    dimensions: ["practical", "hands_on", "problem solving", "responsibility"],
    interests: ["hands-on work", "tools", "practical problem-solving"],
    skills: { required: ["practical problem-solving", "safety awareness"], helpful: ["measurement", "attention to detail", "teamwork"] },
    subjects: ["vocational studies", "mathematics", "science"],
    description: "Apply practical skills, technical knowledge, and safety procedures in a hands-on role.",
    roadmap: ["Explore the tools, tasks, and safety practices used in this occupation.", "Build foundational skills through safe, supervised activities.", "Compare recognised training routes and local job descriptions.", "Speak with a qualified practitioner about the day-to-day work."],
    project: ["Career task explainer", "Research a typical task in this role using reliable public sources and describe its tools, safety considerations, and skills."],
    roles: [
      ["carpenter_cabinet_maker", "Carpenter / cabinet maker", "Moderate", "2.8", "10th pass / ITI"],
      ["mason_tile_setter", "Mason / tile setter", "Moderate", "2.5", "No formal / 10th"],
      ["electrician", "Electrician", "High", "3.0", "ITI"],
      ["appliance_repair_technician", "Appliance repair technician", "Moderate", "2.6", "ITI / Diploma"],
      ["electronics_assembler_technician", "Electronics assembler / technician", "High", "2.8", "ITI / Diploma"],
      ["truck_delivery_driver", "Truck / delivery driver", "High", "2.8", "10th pass"],
      ["locksmith", "Locksmith", "Low", "2.4", "10th pass"],
      ["cnc_machine_operator", "CNC / machine operator", "High", "3.2", "ITI / Diploma"],
      ["quality_control_inspector", "Quality control inspector", "Moderate", "3.5", "Diploma / B.Tech"],
      ["firefighter_forest_guard", "Firefighter / forest guard", "Moderate", "4.0", "12th + training"],
      ["fisheries_aquaculture_technician", "Fisheries / aquaculture technician", "High", "3.0", "Diploma / B.F.Sc"],
      ["ev_automobile_technician", "EV / automobile technician", "Very High", "3.0", "ITI / Diploma"]
    ]
  },
  {
    category: "science",
    color: "blue",
    dimensions: ["science", "research", "analytical", "problem solving"],
    interests: ["science", "experiments", "research"],
    skills: { required: ["observation", "research"], helpful: ["data analysis", "scientific communication", "attention to detail"] },
    subjects: ["science", "biology", "chemistry", "mathematics"],
    description: "Use scientific methods, evidence, and specialist knowledge to investigate questions and solve problems.",
    roadmap: ["Strengthen relevant science and mathematics foundations.", "Practise reading research and distinguishing evidence from assumptions.", "Explore safe, supervised activities and public datasets.", "Compare recognised courses and role-specific requirements."],
    project: ["Research question brief", "Summarise a public scientific source about this field and clearly note its methods, findings, and limitations."],
    roles: [
      ["pharmaceutical_rd_scientist", "Pharmaceutical R&D scientist", "High", "6.0", "M.Pharm / M.Sc / PhD"],
      ["environmental_scientist_engineer", "Environmental scientist / engineer", "High", "5.0", "B.Tech / M.Sc"],
      ["chemist", "Chemist", "Moderate", "4.5", "M.Sc"],
      ["astronomer_space_scientist", "Astronomer / space scientist", "Low (small field)", "9.0", "PhD"],
      ["medical_lab_technologist", "Medical lab technologist", "High", "3.0", "DMLT / B.Sc MLT"],
      ["pathologist", "Pathologist", "High", "12.0", "MBBS + MD"],
      ["meteorologist", "Meteorologist", "Moderate", "8.0", "M.Sc"],
      ["biotech_biology_researcher", "Biotech / biology researcher", "High", "5.0", "M.Sc / PhD"],
      ["food_scientist_market", "Food scientist", "High", "4.5", "B.Tech Food Tech"],
      ["data_scientist", "Data scientist", "Very High", "12.0", "B.Tech / Master’s"],
      ["forensic_scientist_fire_investigator", "Forensic scientist / fire investigator", "High", "5.0", "M.Sc Forensic Science"]
    ]
  },
  {
    category: "creative",
    color: "pink",
    dimensions: ["creative", "design", "communication"],
    interests: ["creative work", "visual expression", "storytelling"],
    skills: { required: ["creative practice", "communication"], helpful: ["design", "observation", "attention to detail"] },
    subjects: ["art", "design", "media", "literature"],
    description: "Create, perform, or shape visual and written work for audiences and experiences.",
    roadmap: ["Explore the tools and techniques used in this creative field.", "Practise the fundamentals and keep examples of your work.", "Seek constructive feedback and learn about accessibility and attribution.", "Build a small portfolio project using original or appropriately licensed material."],
    project: ["Creative portfolio study", "Create a small original study related to this field and document your idea, process, and revisions."],
    roles: [
      ["author_content_writer", "Author / content writer", "Moderate", "4.0", "Bachelor’s"],
      ["musician_instrumentalist", "Musician / instrumentalist", "Moderate", "3.0", "Training / diploma"],
      ["music_composer_arranger", "Music composer / arranger", "Moderate", "5.0", "Training / degree"],
      ["graphic_designer_market", "Graphic designer", "High", "4.0", "Bachelor’s / diploma"],
      ["animator_illustrator", "Animator / illustrator", "High", "4.5", "Bachelor’s / diploma"],
      ["vfx_artist", "VFX artist", "High", "5.0", "Bachelor’s / diploma"],
      ["set_art_director", "Set / art director", "Moderate", "5.0", "Bachelor’s (Fine Arts)"],
      ["screenwriter", "Screenwriter", "Moderate", "6.0", "Bachelor’s"],
      ["dancer_choreographer", "Dancer / choreographer", "Moderate", "3.5", "Training"],
      ["video_editor", "Video editor", "High", "4.0", "Bachelor’s / diploma"],
      ["ux_ui_designer", "UX/UI designer", "Very High", "9.0", "Bachelor’s"]
    ]
  },
  {
    category: "social_science",
    color: "mint",
    dimensions: ["people", "teaching", "communication", "social"],
    interests: ["helping people", "teaching", "community"],
    skills: { required: ["communication", "empathy"], helpful: ["planning", "teamwork", "active listening"] },
    subjects: ["social science", "psychology", "biology", "education"],
    description: "Support people’s wellbeing, learning, communication, or participation in their communities.",
    roadmap: ["Learn about the people and communities this role serves.", "Explore ethical practice, communication, and relevant subject foundations.", "Speak with a qualified professional about the role’s responsibilities.", "Check recognised training and any professional registration requirements."],
    project: ["Accessible information resource", "Create a source-checked, plain-language resource that helps explain a general topic related to this role."],
    roles: [
      ["fitness_trainer", "Fitness trainer", "High", "3.0", "Certification"],
      ["counsellor_psychologist", "Counsellor / psychologist", "Very High", "4.0", "Master’s"],
      ["career_counsellor", "Career counsellor", "High", "4.0", "Master’s"],
      ["physiotherapist_occupational_therapist", "Physiotherapist / occupational therapist", "High", "4.0", "Bachelor’s (BPT/BOT)"],
      ["social_worker_ngo_programme_officer", "Social worker / NGO programme officer", "Moderate", "3.6", "MSW / Master’s"],
      ["sports_coach", "Sports coach", "Moderate", "3.5", "Certification / degree"],
      ["special_educator_sign_language_interpreter", "Special educator / sign language interpreter", "High", "3.6", "B.Ed (Special) / RCI diploma"],
      ["preschool_day_care_teacher", "Preschool / day-care teacher", "High", "2.4", "Diploma / NTT"],
      ["high_school_teacher", "High-school teacher", "Moderate", "5.0", "B.Ed"],
      ["nurse_market", "Nurse", "High", "3.6", "B.Sc Nursing / GNM"],
      ["speech_therapist_audiologist", "Speech therapist / audiologist", "High", "4.2", "Bachelor’s / Master’s"]
    ]
  },
  {
    category: "business",
    color: "yellow",
    dimensions: ["business", "leadership", "communication", "organisation"],
    interests: ["business", "leadership", "working with people"],
    skills: { required: ["communication", "planning"], helpful: ["negotiation", "research", "numeracy"] },
    subjects: ["business studies", "economics", "communication"],
    description: "Coordinate people, products, services, or commercial decisions in a range of organisations.",
    roadmap: ["Explore how this role contributes to an organisation or customer.", "Build communication, planning, and relevant business foundations.", "Practise analysing a simple public or fictional business scenario.", "Compare current job descriptions and recognised learning options."],
    project: ["Role and market brief", "Use public information to outline the customers, tasks, and decisions connected with this role."],
    roles: [
      ["equity_dealer_investment_analyst", "Equity dealer / investment analyst", "High", "8.0", "Bachelor’s / MBA / CFA"],
      ["retail_store_manager", "Retail store manager", "High", "4.5", "Graduate"],
      ["hair_stylist_salon_owner", "Hair stylist / salon owner", "High", "3.0", "Certification / diploma"],
      ["department_operations_manager", "Department / operations manager", "Moderate", "12.0", "MBA / Bachelor’s"],
      ["entrepreneur_market", "Entrepreneur", "Highly variable", "Varies", "Varies"],
      ["procurement_contract_negotiator", "Procurement / contract negotiator", "Moderate", "8.0", "Bachelor’s / MBA"],
      ["lawyer_market", "Lawyer", "High", "6.0", "LLB"],
      ["marketing_brand_manager", "Marketing / brand manager", "High", "10.0", "MBA / Bachelor’s"],
      ["sales_executive_retail", "Sales executive (retail)", "Moderate", "2.4", "12th / Graduate"],
      ["fashion_merchandiser", "Fashion merchandiser", "Moderate", "4.5", "Bachelor’s (Fashion/Retail)"],
      ["digital_marketer", "Digital marketer", "Very High", "5.0", "Bachelor’s"]
    ]
  },
  {
    category: "business_finance",
    color: "violet",
    dimensions: ["analytical", "organisation", "detail", "technology"],
    interests: ["organising information", "accuracy", "working with data"],
    skills: { required: ["attention to detail", "organisation"], helpful: ["numeracy", "spreadsheets", "communication"] },
    subjects: ["mathematics", "business studies", "computer science"],
    description: "Maintain accurate information and support the systems and processes organisations rely on.",
    roadmap: ["Explore the records, tools, and processes used in this occupation.", "Practise accuracy and organisation with fictional examples.", "Build relevant digital, numeracy, or communication skills.", "Compare current job descriptions and recognised training options."],
    project: ["Organised records exercise", "Create a small fictional record-keeping or information workflow and explain how you would check it for accuracy."],
    roles: [
      ["accountant_market", "Accountant", "Moderate", "3.8", "B.Com"],
      ["data_entry_mis_executive", "Data entry / MIS executive", "Low", "2.8", "12th / Graduate"],
      ["proofreader_copy_editor", "Proofreader / copy editor", "Moderate", "3.0", "Bachelor’s"],
      ["system_administrator", "System administrator", "High", "5.5", "BCA / B.Tech"],
      ["storekeeper_inventory_clerk", "Storekeeper / inventory clerk", "Moderate", "2.6", "12th"],
      ["payroll_executive", "Payroll executive", "Moderate", "3.5", "B.Com / Graduate"],
      ["logistics_warehouse_executive", "Logistics / warehouse executive", "High", "3.2", "Graduate"],
      ["bank_clerk_officer", "Bank clerk / officer", "Moderate", "5.0", "Graduate"],
      ["postal_assistant", "Postal assistant", "Low", "4.0", "12th / Graduate"],
      ["chartered_accountant_auditor", "Chartered accountant / auditor", "High", "8.0", "CA"],
      ["tax_consultant", "Tax consultant", "Moderate", "5.0", "B.Com / CA / LLB"]
    ]
  }
];

CAREER_PROFILES.push(...CAREER_MARKET_GROUPS.flatMap((group) => group.roles.map(([id, title, growthOutlook, medianSalaryLpa, typicalEducation]) => ({
  id,
  title,
  description: group.description,
  category: group.category,
  color: group.color,
  dimensions: group.dimensions,
  interests: group.interests,
  skills: group.skills,
  subjects: group.subjects,
  goals: group.dimensions,
  growthOutlook,
  medianSalaryLpa,
  typicalEducation,
  educationSummary: `Typical education listed: ${typicalEducation}. Requirements vary by role, location, employer, and course; verify current details with official institutions and employers.`,
  roadmap: group.roadmap,
  project: group.project,
  resource: ["National Career Service", "https://www.ncs.gov.in/", "Explore occupational information and career services"]
}))));

const CAREER_EXPANSION_GROUPS = [
  {
    category: "technology",
    color: "blue",
    subjects: ["computer science", "mathematics", "technology"],
    skills: { required: ["problem-solving", "technical foundations"], helpful: ["communication", "careful testing", "teamwork"] },
    resource: ["CS50x", "https://cs50.harvard.edu/x/", "Free introductory computer science course; certificate options may have separate terms"],
    roles: [
      ["frontend_developer", "Frontend Developer", "building the browser-facing parts of websites, with attention to interaction, accessibility, and performance", "Computing or related study can help, but routes vary; a portfolio may support entry-level applications.", "tech"],
      ["backend_developer", "Backend Developer", "designing server-side application logic, data handling, and reliable APIs", "Computing or related study is common; practical projects and role requirements vary by employer.", "analysis"],
      ["full_stack_developer", "Full-Stack Developer", "connecting browser interfaces with server-side services across a complete application", "Computing study or a portfolio-based route may be relevant; check each employer's expectations.", "tech"],
      ["mobile_application_developer", "Mobile Application Developer", "creating and testing applications for phones and tablets", "Computing study or demonstrable projects can be useful; platform and employer expectations differ.", "tech"],
      ["data_engineer", "Data Engineer", "building dependable pipelines that collect, transform, and prepare data for analysis", "Computing, mathematics, or related study is common; specific tools depend on the role.", "analysis"],
      ["cloud_engineer", "Cloud Engineer", "configuring and maintaining cloud infrastructure with attention to reliability and security", "Computing or networking foundations are useful; platform certifications are optional and role-dependent.", "tech"],
      ["devops_engineer", "DevOps Engineer", "improving how software is tested, released, monitored, and operated", "Computing foundations and hands-on practice are common; entry routes vary by employer.", "tech"],
      ["embedded_systems_engineer", "Embedded Systems Engineer", "developing software that runs inside electronic devices and constrained hardware", "Electronics, electrical engineering, or computing study may be relevant; check program prerequisites.", "build"],
      ["automation_engineer", "Automation Engineer", "designing control systems that make industrial or technical processes more consistent", "Engineering or mechatronics study and supervised practical training may be relevant.", "build"],
      ["computer_hardware_engineer", "Computer Hardware Engineer", "designing, testing, or evaluating computer components and hardware systems", "Electrical, electronics, or computer engineering study is common; verify institution-specific eligibility.", "build"],
      ["network_engineer", "Network Engineer", "planning and maintaining the wired and wireless networks used by organisations", "Networking or computing study is useful; employer-specific certifications may be optional.", "tech"],
      ["electrical_engineer", "Electrical Engineer", "applying electrical engineering principles to power, circuits, and electrical systems", "A recognised electrical engineering pathway is typical; check accreditation and any local registration rules.", "build"],
      ["mechanical_engineer", "Mechanical Engineer", "designing and improving machines, components, and mechanical processes", "A recognised mechanical engineering degree is a common route; check entry requirements and accreditation.", "build"],
      ["civil_engineer", "Civil Engineer", "planning and delivering infrastructure such as buildings, transport, and water systems", "A recognised civil engineering qualification is commonly expected; registration rules depend on jurisdiction and work.", "build"],
      ["electronics_engineer", "Electronics Engineer", "designing and testing circuits, devices, and electronic control systems", "Electronics or electrical engineering study is common; verify course and employer requirements.", "build"],
      ["mechatronics_engineer", "Mechatronics Engineer", "integrating mechanical, electronic, and control systems in smart machines", "Mechatronics or related engineering study is common; practical laboratory experience is useful.", "build"],
      ["aerospace_engineer", "Aerospace Engineer", "working on the design, analysis, or testing of aircraft and space systems", "Aerospace or related engineering study is typical; specialist roles may require postgraduate study.", "build"],
      ["renewable_energy_engineer", "Renewable Energy Engineer", "developing or maintaining energy systems such as solar, wind, and storage", "Engineering or energy-related study may be relevant; requirements vary by specialisation and employer.", "environment"]
    ]
  },
  {
    category: "healthcare",
    color: "mint",
    subjects: ["biology", "health science", "chemistry"],
    skills: { required: ["clear communication", "careful information handling"], helpful: ["teamwork", "attention to detail", "ethical practice"] },
    resource: ["WHO Health Topics", "https://www.who.int/health-topics", "Public health information for general learning, not individual medical advice"],
    roles: [
      ["physician", "Physician / Medical Doctor", "assessing patients, considering evidence, and coordinating appropriate diagnosis and care", "In India, becoming a physician generally requires an MBBS from a recognised institution and registration under applicable rules; confirm current NMC and institutional requirements.", "health"],
      ["surgeon", "Surgeon", "providing operative care after extensive medical and specialist training", "Requires a recognised medical degree, postgraduate surgical training, and applicable registration; exact routes and recognition rules must be checked with official authorities.", "diagnostic"],
      ["pediatrician", "Pediatrician", "supporting the health and development of infants, children, and adolescents", "Requires medical training followed by recognised postgraduate paediatrics training and applicable registration; verify current official requirements.", "health"],
      ["cardiologist", "Cardiologist", "specialising in assessment and treatment of heart and circulatory conditions", "Requires medical training and specialist postgraduate qualifications; pathway and registration must be verified with current official authorities.", "diagnostic"],
      ["dermatologist", "Dermatologist", "assessing and treating conditions affecting skin, hair, and nails", "Requires a recognised medical degree and postgraduate specialist training with applicable registration; verify current rules.", "diagnostic"],
      ["psychiatrist", "Psychiatrist", "a medical doctor specialising in mental health assessment and treatment", "Requires a recognised medical degree and specialist postgraduate psychiatry training; this is distinct from non-medical counselling roles.", "health"],
      ["radiologist", "Radiologist", "interpreting medical images as part of a qualified clinical team", "Requires a recognised medical degree and postgraduate radiology training with applicable registration; verify current official requirements.", "diagnostic"],
      ["anesthesiologist", "Anesthesiologist", "providing anaesthesia and perioperative medical care in clinical settings", "Requires a recognised medical degree and specialist anaesthesiology training; confirm current recognition and registration rules.", "diagnostic"],
      ["dentist", "Dentist", "preventing, assessing, and treating conditions of the teeth and mouth", "Typically requires a recognised BDS qualification and applicable registration; confirm current Dental Council and institutional requirements.", "health"],
      ["veterinarian", "Veterinary Doctor", "diagnosing and treating animal health problems and advising on animal welfare", "Typically requires a recognised veterinary qualification such as B.V.Sc. & A.H. and applicable registration; confirm current Veterinary Council requirements.", "health"],
      ["nurse_practitioner", "Nurse Practitioner / Advanced Practice Nurse", "providing advanced nursing services within the scope allowed by local regulation", "Advanced-practice titles and scope vary substantially by jurisdiction; confirm whether the role and pathway are recognised in the intended location.", "people"],
      ["pharmacist", "Pharmacist", "supporting safe medicine use, dispensing, and patient or health-team information", "Typically requires a recognised pharmacy qualification and registration for regulated practice; verify current Pharmacy Council requirements.", "health"],
      ["occupational_therapist", "Occupational Therapist", "helping people participate in everyday activities through assessment and rehabilitation", "A recognised occupational therapy qualification and any applicable registration or practice rules are needed; check current local requirements.", "people"],
      ["speech_language_therapist", "Speech-Language Therapist", "assessing communication and swallowing needs and supporting therapy plans", "Requires a recognised qualification for the intended scope of practice; check current RCI or other applicable registration rules and institutional criteria.", "people"],
      ["medical_imaging_technologist", "Radiology / Medical Imaging Technologist", "operating imaging equipment and supporting safe, accurate diagnostic imaging", "Requires recognised imaging or radiography education and supervised clinical training; exact qualification and registration requirements vary.", "diagnostic"],
      ["optometrist", "Optometrist", "examining vision and identifying eye-health concerns within the profession's scope", "Requires recognised optometry education and compliance with applicable practice rules; confirm current requirements with official bodies.", "health"],
      ["ophthalmologist", "Ophthalmologist", "a medical doctor specialising in eye and vision care", "Requires a recognised medical degree and postgraduate ophthalmology training with applicable registration; verify current requirements.", "diagnostic"],
      ["dietitian_nutritionist", "Dietitian / Nutritionist", "using nutrition knowledge to support food and health goals in appropriate settings", "Qualifications and protected titles vary by role and jurisdiction; verify recognised education and registration requirements before clinical practice.", "health"],
      ["public_health_professional", "Public Health Professional", "working on prevention, health promotion, and health services for communities", "Relevant routes include public-health or health-science study; specific roles may require postgraduate training or public recruitment eligibility.", "social"],
      ["epidemiologist", "Epidemiologist", "studying patterns and causes of health events to inform prevention and policy", "Public-health, statistics, or life-science study is relevant; many research roles expect postgraduate training.", "analysis"],
      ["clinical_research_associate", "Clinical Research Associate", "helping coordinate and monitor clinical studies under research and ethics requirements", "Life-science or health-related education is common; employers may require research training and role-specific experience.", "research"],
      ["biomedical_scientist", "Biomedical Scientist", "investigating biological processes and health questions through laboratory research", "Life-science education is common; clinical laboratory posts may require particular recognised qualifications and supervised practice.", "research"],
      ["genetic_counsellor", "Genetic Counsellor", "explaining genetic information and supporting informed family or patient decisions", "Typically involves specialised postgraduate education and supervised training; availability and recognised pathways vary by country.", "people"],
      ["respiratory_therapist", "Respiratory Therapist", "supporting respiratory assessment and treatment as part of a clinical team", "Training and professional recognition vary by country; confirm that the title and education route are recognised where you intend to practise.", "health"],
      ["paramedic", "Emergency Medical Technician / Paramedic", "providing time-sensitive pre-hospital care and safe patient transport", "Requires recognised emergency medical training and any applicable certification or registration; verify current local rules.", "practical"],
      ["clinical_technology_specialist", "Medical Equipment / Clinical Technology Specialist", "helping select, maintain, and safely use equipment in healthcare environments", "Biomedical engineering, electronics, or related training may be relevant; clinical responsibilities and employer requirements differ.", "technology"],
      ["health_informatics_specialist", "Health Informatics Specialist", "improving how healthcare information systems support safe services and decisions", "Health information, computing, statistics, or health-science study can be relevant; privacy and security knowledge is important.", "technology"],
      ["healthcare_administrator", "Healthcare Administrator", "coordinating the operational, people, and service processes of a healthcare organisation", "Routes vary across health administration, management, and public health; clinical licensure is not automatically implied.", "leadership"]
    ]
  },
  {
    category: "science",
    color: "blue",
    subjects: ["science", "mathematics", "research methods"],
    skills: { required: ["observation", "evidence-based reasoning"], helpful: ["data analysis", "scientific writing", "laboratory safety"] },
    resource: ["OpenStax", "https://openstax.org/subjects/science", "Free science textbooks and introductory learning material"],
    roles: [
      ["physicist", "Physicist", "investigating matter, energy, and physical systems through theory, experiments, or modelling", "Physics study is foundational; research and specialist posts often require postgraduate qualifications.", "science"],
      ["biologist", "Biologist", "studying living organisms, their structures, and their interactions", "Biology or life-science study is relevant; specialist research roles may require postgraduate training.", "science"],
      ["microbiologist", "Microbiologist", "studying microorganisms and their roles in health, industry, and ecosystems", "Microbiology or related life-science study is common; laboratory roles may require supervised practical training.", "research"],
      ["biochemist", "Biochemist", "examining the chemical processes that occur in living systems", "Biochemistry or related life-science study is relevant; research positions may expect postgraduate education.", "research"],
      ["molecular_biologist", "Molecular Biologist", "investigating biological processes at the molecular and cellular level", "Life-science education is common; research roles often require advanced laboratory skills and postgraduate study.", "research"],
      ["geneticist", "Geneticist", "studying genes, inheritance, and variation in organisms or populations", "Relevant biology or genetics study is foundational; independent research roles often require postgraduate qualifications.", "research"],
      ["neuroscientist", "Neuroscientist", "studying the nervous system and how it relates to behaviour and health", "Neuroscience can draw on biology, psychology, medicine, and engineering; research posts usually need advanced training.", "research"],
      ["astrophysicist", "Astrophysicist", "using physics and data to study stars, galaxies, and the wider universe", "Physics and mathematics are essential foundations; research careers commonly require a PhD.", "science"],
      ["geologist", "Geologist", "studying Earth materials, processes, and geological history", "Geology or Earth-science study is relevant; fieldwork and specialist requirements depend on the role.", "environment"],
      ["oceanographer", "Marine Scientist / Oceanographer", "investigating ocean systems, marine environments, and coastal processes", "Marine science or related study is relevant; fieldwork, safety, and postgraduate requirements vary.", "environment"],
      ["climate_scientist", "Climate Scientist", "analysing climate observations and models to understand changing climate systems", "Climate research commonly combines mathematics with physics, environmental science, or data skills; advanced study is often expected.", "environment"],
      ["materials_scientist", "Materials Scientist", "studying how materials are made, tested, and used in products or infrastructure", "Materials science, chemistry, physics, or engineering education may lead into this field; specialist roles vary.", "science"]
    ]
  },
  {
    category: "business_finance",
    color: "peach",
    subjects: ["commerce", "economics", "mathematics"],
    skills: { required: ["structured analysis", "clear communication"], helpful: ["spreadsheets", "research", "attention to detail"] },
    resource: ["NPTEL", "https://nptel.ac.in/", "Free-to-learn course content across business, finance, and technology; certificate terms may vary"],
    roles: [
      ["risk_analyst", "Risk Analyst", "identifying and explaining financial or operational risks using evidence and scenario analysis", "Finance, economics, statistics, or related study is common; regulated financial duties have separate requirements.", "analysis"],
      ["financial_planner", "Financial Planner", "helping clients organise financial goals and understand planning options", "Commerce or finance study is relevant; investment advice and other regulated activities require applicable qualifications and authorisation.", "business"],
      ["product_manager", "Product Manager", "coordinating customer needs, product priorities, and delivery across teams", "There is no single required degree; relevant domain knowledge and project experience are common expectations.", "leadership"]
    ]
  },
  {
    category: "creative",
    color: "pink",
    subjects: ["art", "design", "media", "communication"],
    skills: { required: ["creative practice", "clear communication"], helpful: ["observation", "iterative feedback", "digital tools"] },
    resource: ["W3C WAI Tutorials", "https://www.w3.org/WAI/tutorials/", "Free accessibility guidance useful for digital and communication design"],
    roles: [
      ["three_d_artist", "3D Artist", "creating three-dimensional models and imagery for products, media, games, or visualisation", "A portfolio-led route or relevant arts, design, and animation study may help; requirements vary by studio.", "creative"],
      ["game_artist", "Game Artist", "creating visual assets and environments that support a game's style and play experience", "Art or game-design study and a relevant portfolio are common routes; software expectations vary.", "creative"],
      ["cinematographer", "Cinematographer", "shaping the visual capture of film or video through camera, lighting, and composition choices", "Training, practice, and collaboration are common; no single qualification is universal.", "creative"],
      ["photographer", "Photographer", "planning and producing images for editorial, commercial, documentary, or personal projects", "A portfolio, technical practice, and ethical image handling matter; formal study is optional and varies.", "creative"],
      ["concept_artist", "Concept Artist", "developing visual ideas that guide characters, settings, and objects in media production", "A strong portfolio and relevant art practice are central; formal pathways differ by employer and project.", "creative"],
      ["motion_graphics_designer", "Motion Graphics Designer", "combining graphic design and animation to communicate ideas through moving visuals", "Design or media study can help; a portfolio showing typography, timing, and visual reasoning is useful.", "design"],
      ["copywriter", "Copywriter", "writing clear, audience-aware text for products, services, campaigns, or organisations", "Writing samples and research skills are useful; study routes vary across communications, media, and humanities.", "communication"],
      ["social_media_creator", "Social Media Creator", "planning and producing digital content for a defined audience and purpose", "A portfolio and media literacy are useful; understand consent, copyright, platform safety, and disclosure.", "communication"],
      ["sound_designer", "Sound Designer", "creating and editing audio elements that support media, games, or live experiences", "Audio production practice and a portfolio are useful; technical tools and formal study vary by role.", "creative"],
      ["music_producer", "Music Producer", "developing and recording music arrangements with performers and production tools", "Practice, collaboration, and recorded examples can build a portfolio; formal training is optional.", "creative"],
      ["fashion_designer", "Fashion Designer", "developing clothing concepts, materials, and designs for people and markets", "Fashion design study or a portfolio-based route may be relevant; course and employer expectations vary.", "design"]
    ]
  },
  {
    category: "law_governance",
    color: "violet",
    subjects: ["civics", "social science", "communication", "law"],
    skills: { required: ["research", "clear writing"], helpful: ["ethical judgement", "analysis", "communication"] },
    resource: ["India Code", "https://www.indiacode.nic.in/", "Free access to central legislation; consult qualified legal professionals for advice"],
    roles: [
      ["corporate_lawyer", "Corporate Lawyer", "advising organisations on legal obligations, transactions, and governance", "Requires a recognised law qualification and applicable enrolment to practise as an advocate; verify current Bar Council rules.", "analysis"],
      ["criminal_lawyer", "Criminal Lawyer", "working on criminal-law matters through legal research, case preparation, and advocacy", "Requires recognised legal education and applicable professional enrolment for advocacy; check current official rules.", "communication"],
      ["civil_lawyer", "Civil Lawyer", "handling non-criminal disputes and legal proceedings in areas such as contracts or property", "Requires a recognised law qualification and applicable enrolment to practise; confirm jurisdiction-specific requirements.", "analysis"],
      ["legal_researcher", "Legal Researcher", "finding, organising, and explaining statutes, judgments, and legal sources", "Law education is relevant; legal research roles do not automatically authorise independent legal practice.", "research"],
      ["legal_consultant", "Legal Consultant", "providing legal subject-matter support within the scope permitted by qualifications and local rules", "Qualifications and authority depend on the work and jurisdiction; regulated legal representation requires applicable credentials.", "analysis"],
      ["paralegal", "Paralegal", "supporting legal teams with research, records, drafting, and case administration", "Training routes vary; paralegal work is distinct from practising as a qualified advocate.", "organisation"],
      ["compliance_professional", "Compliance Professional", "helping organisations understand and monitor applicable rules and internal controls", "Relevant law, finance, or business knowledge helps; requirements differ by sector and regulated activity.", "detail"],
      ["civil_services_officer", "Civil Services Officer", "working in public administration through an official recruitment and service pathway", "Entry depends on the relevant public-service examination, eligibility, and recruitment notification; check official UPSC or state commission sources.", "leadership"],
      ["public_policy_analyst", "Public Policy Analyst", "studying policy evidence and options to support public decisions", "Social science, economics, public policy, or research training may be relevant; no single route is universal.", "research"],
      ["government_programme_officer", "Government Programme Officer", "coordinating public programmes, implementation, monitoring, or community services", "Entry requirements depend on the agency and recruitment notice; confirm official qualifications and selection criteria.", "organisation"],
      ["diplomatic_service_professional", "Diplomatic Service Professional", "representing public interests and supporting international relations through official service", "In India, diplomatic roles are associated with notified public-service recruitment; check official UPSC and government information.", "communication"],
      ["urban_policy_professional", "Urban Policy Professional", "researching and coordinating policy related to cities, housing, transport, or services", "Relevant routes include planning, public policy, geography, economics, and social science; requirements vary.", "environment"],
      ["public_administration_specialist", "Public Administration Specialist", "improving public-sector processes, service delivery, and organisational accountability", "Public administration, management, or social-science study can help; roles may use distinct recruitment criteria.", "organisation"],
      ["human_rights_researcher", "Human Rights Researcher", "documenting rights-related issues and analysing evidence, policy, or public information", "Relevant study can include law and social sciences; protect sources and follow ethical research practice.", "social"],
      ["public_sector_project_manager", "Public Sector Project Manager", "coordinating public projects, resources, stakeholders, and delivery milestones", "Project experience and relevant domain knowledge are useful; public recruitment requirements vary by post.", "leadership"],
      ["labour_relations_specialist", "Labour Relations Specialist", "supporting workplace relations through policy, negotiation, and employment information", "Study in law, human resources, or industrial relations may help; legal advice and representation have separate requirements.", "communication"],
      ["legislative_researcher", "Legislative Researcher", "analysing bills, laws, and policy evidence to inform legislative work", "Law, public policy, economics, or political science study may be relevant; employer requirements vary.", "research"]
    ]
  },
  {
    category: "social_science",
    color: "mint",
    subjects: ["education", "psychology", "social science", "communication"],
    skills: { required: ["communication", "ethical practice"], helpful: ["research", "planning", "active listening"] },
    resource: ["OpenStax Social Sciences", "https://openstax.org/subjects/social-sciences", "Free introductory textbooks across social science subjects"],
    roles: [
      ["higher_education_lecturer", "Higher Education Lecturer", "teaching a subject to post-secondary learners and supporting their academic progress", "Requirements vary by discipline and institution; many posts expect postgraduate qualifications and relevant teaching or research experience.", "teaching"],
      ["professor_academic_researcher", "Professor / Academic Researcher", "combining advanced subject teaching, research, and academic service", "Usually requires a doctoral qualification and a sustained academic record; appointment criteria vary by institution.", "research"],
      ["instructional_designer", "Instructional Designer", "planning learning experiences, materials, and assessments for defined learner needs", "Education, instructional design, communication, or relevant subject expertise can be useful; portfolios may support entry.", "design"],
      ["curriculum_developer", "Curriculum Developer", "designing and reviewing curricula to align learning goals, content, and assessment", "Relevant teaching, subject, and curriculum expertise are common; formal requirements depend on the organisation.", "teaching"],
      ["educational_technology_specialist", "Educational Technology Specialist", "helping educators select and use digital tools for accessible learning", "Education and technology experience are useful; platform skills and employer requirements vary.", "technology"],
      ["special_education_teacher", "Special Education Teacher", "supporting learners with diverse educational needs through adapted teaching", "Requires recognised teacher education and role-specific special-education qualifications or registration where applicable; verify current NCTE/RCI rules.", "teaching"],
      ["educational_counsellor", "Educational Counsellor", "supporting learners with academic planning and wellbeing referrals within a defined professional scope", "Qualifications vary; counselling and clinical practice may be regulated. Verify requirements and supervision with official authorities.", "people"],
      ["clinical_psychologist", "Clinical Psychologist", "providing specialist psychological assessment and care within a regulated clinical scope", "Requires recognised advanced psychology education, supervised training, and applicable registration; confirm current RCI and legal requirements.", "health"],
      ["counselling_psychologist", "Counselling Psychologist", "supporting people through psychological approaches within a qualified and supervised scope", "Requires appropriate postgraduate education and supervised practice; titles and registration rules differ, so check official local requirements.", "people"],
      ["social_worker", "Social Worker", "working with individuals and communities to connect people with support and services", "Social work education is a common route; roles involving regulated or clinical practice may require additional qualifications.", "social"],
      ["sociologist", "Sociologist", "studying social groups, institutions, and patterns through research and analysis", "Sociology or related social-science study is relevant; research positions may require postgraduate training.", "research"],
      ["anthropologist", "Anthropologist", "studying human societies, cultures, and lived experiences using ethical research methods", "Anthropology or related study is relevant; fieldwork requires appropriate ethics, consent, and supervision.", "research"]
    ]
  },
  {
    category: "vocational",
    color: "peach",
    subjects: ["vocational studies", "mathematics", "science"],
    skills: { required: ["safe practical work", "measurement"], helpful: ["troubleshooting", "teamwork", "attention to detail"] },
    resource: ["National Career Service", "https://www.ncs.gov.in/", "Government career information and occupational exploration"],
    roles: [
      ["hvac_technician", "HVAC Technician", "installing, inspecting, and maintaining heating, ventilation, and air-conditioning systems", "Recognised vocational or diploma training and supervised practical experience are common; verify trade and safety rules locally.", "build"],
      ["welder", "Welder", "joining metal components using processes selected for the material and task", "Trade training, safety instruction, and supervised practice are important; certification requirements vary by work and location.", "build"],
      ["machinist", "Machinist", "setting up and operating machine tools to make accurate components", "ITI or other recognised machining training may be relevant; check employer and equipment-specific safety requirements.", "build"],
      ["industrial_maintenance_technician", "Industrial Maintenance Technician", "inspecting and repairing equipment to keep manufacturing operations safe and reliable", "Relevant ITI or diploma training and supervised experience are common; site safety requirements apply.", "practical"],
      ["plumber", "Plumbing Professional", "installing and maintaining water, drainage, and plumbing systems", "Vocational training or apprenticeship routes vary by location; follow applicable building codes and safety requirements.", "build"],
      ["construction_supervisor", "Construction Supervisor", "coordinating site activities, workers, materials, and safety procedures", "Construction experience and relevant technical training are useful; statutory safety and site requirements vary.", "leadership"],
      ["civil_engineering_technician", "Civil Engineering Technician", "supporting surveys, tests, drawings, and site work for civil engineering projects", "A civil engineering diploma or recognised technical course may be relevant; check project and employer requirements.", "practical"],
      ["solar_installation_technician", "Solar Installation Technician", "installing and maintaining solar equipment under electrical and work-at-height safety procedures", "Recognised vocational training and supervised practice are important; follow current electrical and safety regulations.", "environment"],
      ["industrial_automation_technician", "Industrial Automation Technician", "maintaining sensors, control panels, and automated production equipment", "Electronics, instrumentation, or automation training is relevant; site-specific safety and qualifications apply.", "technology"],
      ["robotics_maintenance_technician", "Robotics Maintenance Technician", "inspecting and maintaining robotic equipment used in production or services", "Mechatronics, electronics, or mechanical training may help; use supervised, safety-compliant practice.", "technology"],
      ["mechatronics_technician", "Mechatronics Technician", "troubleshooting equipment that combines mechanical, electronic, and control components", "Recognised ITI or diploma study in a related trade is common; exact pathways vary by institution.", "build"],
      ["manufacturing_technician", "Manufacturing Technician", "supporting production setup, process checks, equipment use, and quality procedures", "Vocational or diploma training may be useful; employer-specific safety and quality systems must be learned.", "practical"]
    ]
  },
  {
    category: "environment",
    color: "mint",
    subjects: ["biology", "agriculture", "environmental science", "geography"],
    skills: { required: ["observation", "evidence-based problem-solving"], helpful: ["data collection", "communication", "field safety"] },
    resource: ["FAO e-learning Academy", "https://elearning.fao.org/", "Free online learning on food and agriculture topics; course availability can change"],
    roles: [
      ["agronomist", "Agronomist", "applying crop and soil knowledge to improve agricultural practices", "Agronomy or agricultural science education is common; local roles and eligibility vary.", "environment"],
      ["agricultural_engineer", "Agricultural Engineer", "designing equipment and systems for farming, processing, and rural infrastructure", "Agricultural or related engineering study is common; verify program prerequisites and any registration rules.", "build"],
      ["horticulturist", "Horticulturist", "growing and managing plants for food, landscapes, nurseries, or research", "Horticulture or plant-science study and practical experience may help; requirements vary by employer.", "environment"],
      ["soil_scientist", "Soil Scientist", "analysing soils and their physical, chemical, and biological properties", "Soil science, agriculture, or environmental study is relevant; specialist research roles may require postgraduate training.", "science"],
      ["plant_pathologist", "Plant Pathologist", "studying plant diseases and ways to protect crops and ecosystems", "Plant pathology or related biological and agricultural study is relevant; advanced research roles often need postgraduate training.", "research"],
      ["agricultural_extension_officer", "Agricultural Extension Officer", "sharing practical agricultural information with farmers and local communities", "Agriculture or related study is common; public-sector roles may require a specific recruitment examination.", "communication"],
      ["food_safety_specialist", "Food Safety Specialist", "supporting hygiene, quality, and safety systems across food production and handling", "Food science, microbiology, or related study may be useful; regulated duties require applicable training and compliance.", "detail"],
      ["agricultural_economist", "Agricultural Economist", "analysing markets, policy, and economic questions affecting food and farming", "Economics or agricultural economics study is relevant; data and policy skills are useful.", "analysis"],
      ["precision_agriculture_specialist", "Precision Agriculture Specialist", "using sensors, maps, and data to support site-specific farm decisions", "Agriculture combined with data, GIS, or engineering study can help; tools and employer requirements vary.", "technology"],
      ["irrigation_specialist", "Irrigation Specialist", "planning and evaluating water delivery systems for crops and landscapes", "Agricultural engineering, water science, or irrigation study may be relevant; local design rules apply.", "environment"],
      ["forestry_professional", "Forestry Professional", "supporting the sustainable management, restoration, and monitoring of forests", "Forestry or environmental study is relevant; public posts may have formal recruitment and physical criteria.", "environment"],
      ["wildlife_conservationist", "Wildlife Conservationist", "supporting the study and protection of wildlife and habitats", "Ecology, zoology, or conservation study is relevant; fieldwork requires safety and ethical practice.", "science"],
      ["ecologist", "Ecologist", "studying relationships among organisms, habitats, and environmental conditions", "Ecology, biology, or environmental science study is relevant; fieldwork and research requirements vary.", "science"],
      ["environmental_consultant", "Environmental Consultant", "assessing environmental information and helping organisations understand impacts and obligations", "Environmental science, engineering, or policy study may be relevant; statutory assessments have specific rules.", "research"],
      ["sustainability_analyst", "Sustainability Analyst", "organising evidence on resource use and environmental or social performance", "Environmental, business, engineering, or data study may help; reporting standards vary by sector.", "analysis"],
      ["renewable_energy_project_specialist", "Renewable Energy Project Specialist", "coordinating the planning and delivery of renewable energy projects", "Engineering, energy, planning, or project study may be relevant; project roles differ by technology and employer.", "leadership"],
      ["water_resource_specialist", "Water Resource Specialist", "studying and planning the responsible use and protection of water resources", "Water science, hydrology, environmental studies, or civil engineering may be relevant.", "environment"],
      ["waste_management_specialist", "Waste Management Specialist", "supporting waste reduction, collection, processing, and compliance systems", "Environmental science, engineering, or operations study may help; follow local waste and safety regulations.", "practical"]
    ]
  },
  {
    category: "hospitality",
    color: "peach",
    subjects: ["hospitality", "communication", "business", "food studies"],
    skills: { required: ["service communication", "organisation"], helpful: ["teamwork", "problem-solving", "attention to detail"] },
    resource: ["NPTEL Hospitality Courses", "https://nptel.ac.in/", "Free-to-learn hospitality and service-related course content; certificate terms may vary"],
    roles: [
      ["hotel_manager", "Hotel Manager", "coordinating guest services, staff, budgets, and daily hotel operations", "Hospitality education or relevant experience may help; employer requirements vary and no single qualification guarantees entry.", "leadership"],
      ["hotel_operations_supervisor", "Hotel Operations Supervisor", "overseeing shift-level operations and service quality across hotel teams", "Hospitality training and supervised experience are useful; requirements depend on the property and role.", "organisation"],
      ["restaurant_manager", "Restaurant Manager", "coordinating restaurant staff, service, supplies, and guest experience", "Hospitality or business study and operational experience may help; food-safety rules apply.", "leadership"],
      ["chef", "Chef", "planning and preparing food while coordinating kitchen workflow and safe handling", "Culinary training or supervised kitchen experience is common; food-safety requirements apply locally.", "practical"],
      ["pastry_chef", "Pastry Chef", "making baked goods and desserts using precise preparation and kitchen techniques", "Culinary or pastry training and supervised practice are useful; workplace food-safety rules apply.", "creative"],
      ["food_beverage_manager", "Food and Beverage Manager", "coordinating food service operations, staffing, stock, and guest standards", "Hospitality education or related operational experience may help; requirements vary by employer.", "leadership"],
      ["event_planner", "Event Planner", "organising event schedules, suppliers, budgets, and guest or participant needs", "Event, hospitality, or project experience can help; build planning examples and check local requirements.", "organisation"],
      ["wedding_planner", "Wedding Planner", "coordinating wedding logistics, suppliers, timelines, and client preferences", "There is no single required qualification; practical event experience, contracts, and clear communication matter.", "communication"],
      ["travel_consultant", "Travel Consultant", "helping customers compare travel options and coordinate bookings or itinerary details", "Hospitality or travel training may help; follow current consumer, booking, and travel-advice rules.", "communication"],
      ["tour_operator", "Tour Operator", "designing and coordinating tours, schedules, transport, and visitor services", "Tourism study and operational experience may help; permits and safety requirements depend on location and activity.", "organisation"],
      ["tourism_manager", "Tourism Manager", "coordinating tourism services, partnerships, promotion, and destination operations", "Tourism, hospitality, or business study is relevant; public and private role criteria vary.", "leadership"],
      ["airline_ground_operations_professional", "Airline Ground Operations Professional", "supporting airport-side passenger, baggage, and aircraft turnaround operations", "Employer training and airport security requirements apply; roles may involve shifts and safety procedures.", "organisation"],
      ["cabin_crew_member", "Cabin Crew Member", "supporting passenger service and onboard safety as part of an airline crew", "Recruitment criteria, training, medical fitness, and language requirements are set by each airline and regulator.", "people"],
      ["front_office_executive", "Front Office Executive", "welcoming guests and coordinating reservations, check-in, and information", "Hospitality training can help; communication, data handling, and shift expectations vary by employer.", "communication"],
      ["guest_relations_specialist", "Guest Relations Specialist", "responding to guest needs and helping coordinate a positive service experience", "Hospitality experience and communication skills are useful; role expectations vary by property.", "people"],
      ["housekeeping_operations_manager", "Housekeeping Operations Manager", "coordinating room readiness, staff schedules, supplies, and service standards", "Hospitality training or supervisory experience may help; workplace health and safety procedures apply.", "leadership"],
      ["hospitality_marketing_specialist", "Hospitality Marketing Specialist", "communicating hospitality offers through research, content, and customer outreach", "Marketing, communications, or hospitality study is useful; digital portfolio projects can help.", "business"],
      ["conference_planner", "Convention and Conference Planner", "coordinating venues, schedules, speakers, suppliers, and attendee logistics", "Event or hospitality experience is useful; accessibility, contracts, and safety planning are important.", "organisation"],
      ["customer_experience_specialist", "Customer Experience Specialist", "studying service feedback and helping teams improve customer journeys", "Communication, business, research, or service experience may be relevant; employer expectations vary.", "people"],
      ["resort_operations_manager", "Resort Operations Manager", "coordinating guest services and operational teams across a resort property", "Hospitality operations experience is common; property-specific training and safety responsibilities apply.", "leadership"]
    ]
  }
];

const CAREER_SIGNAL_DIMENSIONS = {
  tech: ["technology", "analytical", "problem solving"],
  analysis: ["analytical", "detail", "research"],
  build: ["practical", "hands_on", "problem solving"],
  environment: ["environment", "science", "research"],
  health: ["health", "people", "responsibility"],
  diagnostic: ["health", "analytical", "detail"],
  people: ["people", "health", "communication"],
  research: ["research", "science", "analytical"],
  science: ["science", "research", "problem solving"],
  business: ["business", "analytical", "communication"],
  leadership: ["leadership", "organisation", "communication"],
  creative: ["creative", "design", "communication"],
  design: ["design", "creative", "technology"],
  communication: ["communication", "creative", "social"],
  social: ["social", "people", "communication"],
  teaching: ["teaching", "communication", "people"],
  organisation: ["organisation", "detail", "responsibility"],
  practical: ["practical", "hands_on", "responsibility"],
  technology: ["technology", "analytical", "problem solving"],
  detail: ["detail", "analytical", "responsibility"]
};

CAREER_PROFILES.push(...CAREER_EXPANSION_GROUPS.flatMap((group) => group.roles.map(([id, title, focus, education, signal]) => {
  const dimensions = CAREER_SIGNAL_DIMENSIONS[signal];
  if (!dimensions) throw new Error(`Career "${id}" uses unknown scoring signal "${signal}".`);
  const summary = `${title} work focuses on ${focus}. Day-to-day responsibilities, work settings, and entry routes vary across employers and specialisations.`;
  const projectDescription = `Create a small, safe learning exercise about ${focus}. Use public or original material, state what you did, and note the limitations; do not provide professional services or advice.`;
  const roadmap = [
    `Build foundations in ${group.subjects.slice(0, 3).join(", ")} and learn the vocabulary used in this field.`,
    `Explore how practitioners approach ${focus} through reputable case studies or supervised activities.`,
    `Practise ${dimensions.slice(0, 2).join(" and ")} with a beginner project and document your process.`,
    `Compare specific courses, entry routes, and job descriptions; verify current requirements with official institutions and employers.`
  ];
  const educationSummary = `${education} Requirements and protected titles can vary by state, institution, employer, and country. Confirm current eligibility, recognition, licensing, or registration with the relevant official authority before choosing a programme or practising.`;
  const pathways = [
    `Explore ${group.subjects.slice(0, 3).join(", ")} and introductory material related to ${title}.`,
    education,
    `Build a beginner portfolio or supervised practice example related to ${focus}.`,
    "Check current course eligibility and professional requirements with official institutions or regulators."
  ];
  return {
    id,
    title,
    description: summary,
    icon: "✦",
    color: group.color,
    category: group.category,
    aliases: [title],
    keywords: [group.category, ...dimensions, ...group.subjects],
    domains: [group.category, ...group.subjects.slice(0, 2)],
    interests: dimensions,
    goals: dimensions,
    dimensions,
    skills: group.skills,
    subjects: group.subjects,
    educationRequirements: {
      summary: educationSummary,
      entryLevels: ["Introductory study in relevant subjects; formal entry requirements depend on the chosen programme."],
      pathways: [...pathways]
    },
    educationSummary,
    streams: ["pcm", "pcb", "pcmb", "commerce_math", "commerce", "arts", "vocational", "diploma", "other", "undecided"],
    pathways,
    roadmap,
    beginnerProjects: [{ title: `${title} starter project`, description: projectDescription }],
    freeResources: [{ title: group.resource[0], url: group.resource[1], topic: group.resource[2] }]
  };
})));

const QUIZ_QUESTIONS = [
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

const FIELD_ASSESSMENTS = [
  {
    id: "technology_engineering",
    title: "Technology & Engineering",
    description: "Computing, engineering, software, hardware, and technical systems.",
    icon: "⌘",
    categories: ["technology", "design_engineering"],
    questions: [
      ["I enjoy solving logical problems by breaking them into smaller steps.", ["analytical", "problem solving"]],
      ["I am curious about how computers, machines, and electronic systems work.", ["technology", "practical"]],
      ["I would enjoy learning to write code to solve practical problems.", ["technology", "problem solving"]],
      ["I like finding patterns in information and using them to reach conclusions.", ["analytical", "research"]],
      ["I would enjoy designing or building a device, machine, or technical system.", ["design", "practical", "hands_on"]],
      ["I am interested in exploring artificial intelligence, robotics, or automation.", ["technology", "science"]],
      ["I enjoy experimenting with different approaches when a technical solution fails.", ["problem solving", "research"]],
      ["I would like to understand how software applications and websites are developed.", ["technology", "design"]],
      ["I enjoy understanding mathematical concepts when they help solve real problems.", ["analytical", "problem solving"]],
      ["I would be interested in testing systems to identify errors and improve reliability.", ["analytical", "detail"]],
      ["I enjoy learning how electrical, mechanical, or digital components work together.", ["technology", "practical"]],
      ["I would enjoy designing technology that solves a real-world problem.", ["design", "problem solving"]],
      ["I am comfortable learning new technical tools even when they initially seem difficult.", ["technology", "responsibility"]],
      ["I would enjoy working on a project that requires careful testing and repeated improvement.", ["detail", "research"]],
      ["I am interested in understanding how emerging technologies could change everyday life.", ["technology", "research"]]
    ]
  },
  {
    id: "medical_healthcare",
    title: "Medical & Healthcare",
    description: "Patient care, health science, diagnosis, prevention, and medical research.",
    icon: "♡",
    categories: ["healthcare"],
    questions: [
      ["I am interested in understanding how the human body works.", ["health", "science"]],
      ["I would enjoy learning about diseases, their causes, and ways to prevent them.", ["health", "research"]],
      ["I am curious about how medicines affect the human body.", ["health", "science"]],
      ["I would enjoy studying biology and other subjects related to health.", ["science", "health"]],
      ["I am interested in understanding how medical tests help identify health conditions.", ["analytical", "health"]],
      ["I would like to learn how healthcare professionals support patients during recovery.", ["people", "health"]],
      ["I am interested in public health and preventing illness in communities.", ["health", "social"]],
      ["I would enjoy carefully analysing information before reaching a health-related conclusion.", ["analytical", "research"]],
      ["I am interested in learning how medical equipment and diagnostic technologies work.", ["technology", "health"]],
      ["I would enjoy explaining health information in a clear and understandable way.", ["communication", "people"]],
      ["I am curious about genetics, biotechnology, or medical research.", ["science", "research"]],
      ["I would be interested in understanding nutrition and its relationship with health.", ["health", "science"]],
      ["I can see myself learning procedures that require accuracy and careful attention to detail.", ["detail", "responsibility"]],
      ["I am interested in improving healthcare through research, technology, or better services.", ["health", "problem solving"]],
      ["I would like to explore different healthcare careers before deciding which role suits me.", ["people", "research"]]
    ]
  },
  {
    id: "science_research",
    title: "Science & Research",
    description: "Scientific investigation, experiments, data, and discovery.",
    icon: "⚗",
    categories: ["science"],
    questions: [
      ["I often wonder why natural phenomena happen and how they can be explained.", ["science", "research"]],
      ["I enjoy investigating questions for which the answer is not immediately obvious.", ["research", "problem solving"]],
      ["I would enjoy designing experiments to test an idea.", ["research", "science"]],
      ["I am interested in understanding matter, energy, and physical processes.", ["science", "analytical"]],
      ["I would enjoy studying living organisms and their interactions with the environment.", ["science", "environment"]],
      ["I am curious about chemicals, materials, and how substances behave.", ["science", "research"]],
      ["I like interpreting graphs, measurements, or experimental observations.", ["analytical", "detail"]],
      ["I would enjoy analysing evidence before accepting a scientific explanation.", ["analytical", "research"]],
      ["I am interested in astronomy, space science, or planetary exploration.", ["science", "research"]],
      ["I would enjoy learning how scientific discoveries are made.", ["research", "science"]],
      ["I am interested in environmental problems and their scientific causes.", ["environment", "science"]],
      ["I would enjoy using mathematics or statistics to analyse research data.", ["analytical", "technology"]],
      ["I am comfortable investigating a question even when progress is slow.", ["research", "responsibility"]],
      ["I would enjoy reading scientific explanations and comparing different findings.", ["research", "communication"]],
      ["I am interested in using research to develop new knowledge or practical solutions.", ["research", "problem solving"]]
    ]
  },
  {
    id: "business_finance",
    title: "Business & Finance",
    description: "Business operations, markets, customer needs, and financial decisions.",
    icon: "↗",
    categories: ["business", "business_finance"],
    questions: [
      ["I enjoy understanding how businesses create value for customers.", ["business", "people"]],
      ["I am interested in how people make financial decisions.", ["business", "analytical"]],
      ["I would enjoy planning how a business could grow.", ["business", "leadership"]],
      ["I like comparing options before deciding how money or resources should be used.", ["analytical", "business"]],
      ["I would enjoy understanding how products are marketed to different audiences.", ["business", "communication"]],
      ["I am interested in budgeting, accounting, or analysing financial information.", ["analytical", "detail"]],
      ["I would enjoy identifying customer needs and suggesting suitable products or services.", ["people", "communication"]],
      ["I like organising tasks, resources, and deadlines to achieve a goal.", ["organisation", "responsibility"]],
      ["I am interested in how businesses compete and respond to market changes.", ["business", "research"]],
      ["I would enjoy developing and presenting a business idea.", ["business", "creative"]],
      ["I like negotiating or finding solutions that work for different people.", ["communication", "leadership"]],
      ["I would enjoy using data to understand business performance.", ["analytical", "technology"]],
      ["I am interested in entrepreneurship and how new businesses get started.", ["business", "creative"]],
      ["I would enjoy coordinating people or projects toward a shared objective.", ["leadership", "organisation"]],
      ["I am curious about how economic events affect businesses and individuals.", ["business", "research"]]
    ]
  },
  {
    id: "creative_arts_media",
    title: "Creative Arts & Media",
    description: "Visual design, writing, digital media, performance, and creative communication.",
    icon: "✦",
    categories: ["creative"],
    questions: [
      ["I enjoy coming up with original ideas for projects or experiences.", ["creative", "design"]],
      ["I would enjoy creating visual designs, illustrations, or digital artwork.", ["creative", "design"]],
      ["I am interested in how colour, layout, typography, and composition affect communication.", ["design", "communication"]],
      ["I would enjoy writing stories, scripts, articles, or other forms of content.", ["creative", "communication"]],
      ["I am interested in photography, filmmaking, or video editing.", ["creative", "technology"]],
      ["I enjoy communicating ideas through images, sound, words, or movement.", ["creative", "communication"]],
      ["I would enjoy designing websites or digital interfaces that are easy to use.", ["design", "technology"]],
      ["I like experimenting with different creative approaches to express an idea.", ["creative", "problem solving"]],
      ["I am interested in animation, 3D design, or digital visual effects.", ["creative", "technology"]],
      ["I would enjoy understanding how audiences respond to creative work.", ["research", "communication"]],
      ["I like improving a creative project through feedback and revision.", ["creative", "responsibility"]],
      ["I am interested in branding, advertising, or visual communication.", ["design", "business"]],
      ["I would enjoy planning content for social media or other digital platforms.", ["creative", "technology"]],
      ["I like combining creativity with practical constraints or a specific brief.", ["creative", "problem solving"]],
      ["I would enjoy building a portfolio of original creative projects.", ["creative", "responsibility"]]
    ]
  },
  {
    id: "law_public_service",
    title: "Law & Public Service",
    description: "Legal systems, public policy, civic work, and community services.",
    icon: "§",
    categories: ["law_governance"],
    questions: [
      ["I am interested in understanding laws, rules, and the reasons behind them.", ["analytical", "social"]],
      ["I enjoy examining different sides of a disagreement before forming an opinion.", ["analytical", "communication"]],
      ["I would enjoy researching a complex issue and organising supporting evidence.", ["research", "organisation"]],
      ["I am interested in how governments and public institutions work.", ["social", "research"]],
      ["I would like to understand citizens' rights and legal responsibilities.", ["social", "responsibility"]],
      ["I enjoy explaining a position clearly and supporting it with reasons.", ["communication", "analytical"]],
      ["I am interested in public policy and how decisions affect communities.", ["social", "research"]],
      ["I would enjoy analysing documents, rules, or cases carefully.", ["detail", "analytical"]],
      ["I am curious about how justice systems attempt to resolve disputes.", ["social", "research"]],
      ["I would enjoy helping people understand formal processes or public services.", ["people", "communication"]],
      ["I am interested in community development and solving public problems.", ["social", "problem solving"]],
      ["I would enjoy comparing policies and evaluating their possible consequences.", ["analytical", "research"]],
      ["I am comfortable considering evidence that challenges my initial opinion.", ["research", "responsibility"]],
      ["I am interested in ethical questions involving fairness and responsibility.", ["social", "responsibility"]],
      ["I would enjoy contributing to public administration, legal work, or civic initiatives.", ["social", "organisation"]]
    ]
  },
  {
    id: "education_social_sciences",
    title: "Education & Social Sciences",
    description: "Teaching, learning, human behaviour, and understanding communities.",
    icon: "◎",
    categories: ["education", "social_science"],
    questions: [
      ["I enjoy helping others understand a difficult concept.", ["teaching", "communication"]],
      ["I am curious about why people think, feel, and behave differently.", ["people", "research"]],
      ["I would enjoy preparing an explanation or activity for someone who is learning.", ["teaching", "creative"]],
      ["I am interested in how families, communities, and societies influence people.", ["social", "research"]],
      ["I enjoy listening to different perspectives and trying to understand them.", ["people", "communication"]],
      ["I would like to understand how people learn and develop new skills.", ["teaching", "research"]],
      ["I am interested in psychology and human behaviour.", ["people", "analytical"]],
      ["I would enjoy researching social issues and their possible causes.", ["social", "research"]],
      ["I like organising information into a clear and understandable explanation.", ["communication", "organisation"]],
      ["I would enjoy developing learning materials or educational activities.", ["teaching", "creative"]],
      ["I am interested in how culture and social environments shape experiences.", ["social", "people"]],
      ["I would enjoy evaluating whether a teaching or learning approach is effective.", ["teaching", "analytical"]],
      ["I am curious about how surveys and interviews can help researchers understand people.", ["research", "communication"]],
      ["I would enjoy contributing to programmes that support learning or communities.", ["teaching", "social"]],
      ["I am interested in careers that combine communication, research, and human understanding.", ["communication", "research"]]
    ]
  },
  {
    id: "skilled_trades_applied",
    title: "Skilled Trades & Applied Work",
    description: "Hands-on construction, repair, manufacturing, transport, and technical work.",
    icon: "⚒",
    categories: ["vocational"],
    questions: [
      ["I enjoy understanding how practical tools and equipment are used.", ["practical", "hands_on"]],
      ["I would enjoy assembling, repairing, or maintaining physical objects.", ["practical", "problem solving"]],
      ["I am interested in how electrical, mechanical, or construction systems work.", ["technology", "practical"]],
      ["I like following a practical process while paying attention to safety and quality.", ["responsibility", "detail"]],
      ["I would enjoy learning a hands-on skill through demonstration and practice.", ["hands_on", "practical"]],
      ["I am interested in identifying why a machine or device is not working properly.", ["problem solving", "technology"]],
      ["I would enjoy measuring materials and working from technical drawings or instructions.", ["detail", "design"]],
      ["I like seeing a physical result from the work I complete.", ["practical", "responsibility"]],
      ["I would enjoy learning how buildings, vehicles, or industrial equipment are maintained.", ["practical", "technology"]],
      ["I am interested in how materials are selected and used in construction or manufacturing.", ["practical", "research"]],
      ["I can see myself practising a practical task repeatedly to improve accuracy.", ["detail", "responsibility"]],
      ["I would enjoy working with a team to install, build, or repair something.", ["hands_on", "people"]],
      ["I am interested in learning about workshop tools and safe operating procedures.", ["practical", "responsibility"]],
      ["I would enjoy finding efficient ways to complete practical tasks.", ["problem solving", "organisation"]],
      ["I am interested in careers where technical knowledge is applied directly to real-world work.", ["technology", "practical"]]
    ]
  },
  {
    id: "agriculture_environment",
    title: "Agriculture & Environment",
    description: "Agriculture, ecosystems, sustainability, food systems, and environmental science.",
    icon: "❋",
    categories: ["environment"],
    questions: [
      ["I am interested in how plants grow and what affects their health.", ["environment", "science"]],
      ["I would enjoy understanding how farming methods influence food production.", ["environment", "research"]],
      ["I am curious about ecosystems and how living things interact.", ["environment", "science"]],
      ["I would like to learn how water and soil quality affect the environment.", ["environment", "analytical"]],
      ["I am interested in practical ways to reduce pollution and waste.", ["environment", "problem solving"]],
      ["I would enjoy exploring sustainable ways to produce food or materials.", ["environment", "creative"]],
      ["I am curious about climate change and its effects on natural systems.", ["environment", "research"]],
      ["I would enjoy collecting observations about plants, animals, soil, or weather.", ["science", "detail"]],
      ["I am interested in technologies that help monitor or improve agriculture.", ["technology", "environment"]],
      ["I would enjoy understanding how natural resources can be used responsibly.", ["environment", "responsibility"]],
      ["I am interested in biodiversity and protecting different species.", ["environment", "science"]],
      ["I would enjoy analysing environmental data to understand a problem.", ["analytical", "research"]],
      ["I am curious about food science, crop quality, or agricultural innovation.", ["science", "environment"]],
      ["I would enjoy finding practical solutions to environmental challenges.", ["problem solving", "environment"]],
      ["I am interested in careers that connect science, sustainability, and real-world impact.", ["science", "responsibility"]]
    ]
  },
  {
    id: "hospitality_services",
    title: "Hospitality & Services",
    description: "Hospitality, tourism, event coordination, and customer experience.",
    icon: "✧",
    categories: ["hospitality"],
    questions: [
      ["I enjoy helping people have a positive experience when using a service.", ["people", "communication"]],
      ["I would enjoy planning events or coordinating activities.", ["organisation", "creative"]],
      ["I am interested in how hotels, restaurants, and travel services operate.", ["business", "organisation"]],
      ["I like organising multiple tasks while keeping track of details.", ["organisation", "detail"]],
      ["I would enjoy communicating with people from different backgrounds.", ["communication", "people"]],
      ["I am interested in travel, tourism, or learning about different cultures.", ["social", "people"]],
      ["I would enjoy solving practical problems when plans change unexpectedly.", ["problem solving", "responsibility"]],
      ["I like helping people find information or services that meet their needs.", ["people", "communication"]],
      ["I would enjoy coordinating schedules, bookings, or customer requests.", ["organisation", "detail"]],
      ["I am interested in how service businesses maintain quality and customer satisfaction.", ["business", "research"]],
      ["I would enjoy working with a team to deliver a well-organised experience.", ["people", "organisation"]],
      ["I am comfortable learning procedures that help a service operate reliably.", ["responsibility", "detail"]],
      ["I would enjoy planning the details of a trip, event, or customer experience.", ["organisation", "creative"]],
      ["I am interested in how hospitality businesses manage costs and resources.", ["business", "analytical"]],
      ["I would enjoy improving a service by understanding customer feedback.", ["research", "problem solving"]]
    ]
  }
].map((field) => ({
  ...field,
  questions: field.questions.map(([text, dimensions], index) => ({
    id: `${field.id}-${String(index + 1).padStart(2, "0")}`,
    fieldId: field.id,
    text,
    scale: [1, 2, 3, 4, 5],
    dimensions
  }))
}));

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
  vocational: ["Compare recognised vocational courses, apprenticeships, or supervised training.", "Verify trade-specific safety, licensing, and qualification rules before practising."],
  hospitality: ["Explore hospitality, customer service, and business foundations through supervised practice.", "Check employer training, food-safety, travel, aviation, and event-specific requirements for the role."]
};

CAREER_PROFILES.forEach((career) => {
  career.dimensions = career.dimensions || LEGACY_DIMENSIONS[career.id] || [];
  career.category = career.category || "technology";
  career.pathways = PATHWAYS_BY_CATEGORY[career.category] || PATHWAYS_BY_CATEGORY.technology;
  career.beginnerProjects = career.beginnerProjects || (career.project
    ? [{ title: career.project[0], description: career.project[1] }]
    : []);
  career.freeResources = career.freeResources || (career.resource
    ? [{ title: career.resource[0], url: career.resource[1], topic: career.resource[2] }]
    : []);
  career.educationRequirements = career.educationRequirements || {
    summary: career.educationSummary || "Education and entry requirements vary by role and location; verify current details with official institutions and employers.",
    entryLevels: [],
    pathways: career.pathways
  };
});

function validateCareerDatabase() {
  const fieldCategoryIds = new Set(FIELD_ASSESSMENTS.flatMap((field) => field.categories));
  const ids = new Set();
  const titles = new Set();
  const errors = [];
  const counts = Object.fromEntries(FIELD_ASSESSMENTS.map((field) => [
    field.id,
    CAREER_PROFILES.filter((career) => field.categories.includes(career.category)).length
  ]));

  CAREER_PROFILES.forEach((career) => {
    const normalizedTitle = normalizeTerm(career.title);
    if (!career.id || ids.has(career.id)) errors.push(`Missing or duplicate career ID: ${career.id || "(empty)"}`);
    ids.add(career.id);
    if (!career.title || titles.has(normalizedTitle)) errors.push(`Missing or duplicate career title: ${career.title || "(empty)"}`);
    titles.add(normalizedTitle);
    if (!fieldCategoryIds.has(career.category)) errors.push(`${career.id} has unknown category "${career.category}".`);
    if (!career.description || !Array.isArray(career.dimensions) || !career.dimensions.length) errors.push(`${career.id} is missing a description or matching dimensions.`);
    if (career.dimensions.some((dimension) => !Object.prototype.hasOwnProperty.call(DIMENSION_LABELS, dimension))) errors.push(`${career.id} uses an unknown scoring dimension.`);
    if (!career.skills || !Array.isArray(career.skills.required) || !Array.isArray(career.skills.helpful)) errors.push(`${career.id} is missing skill lists.`);
    if (!Array.isArray(career.subjects) || !Array.isArray(career.roadmap) || !career.roadmap.length) errors.push(`${career.id} is missing subjects or roadmap steps.`);
    if (!career.educationRequirements || typeof career.educationRequirements.summary !== "string" || !Array.isArray(career.pathways)) errors.push(`${career.id} is missing education or pathway information.`);
    if (!Array.isArray(career.beginnerProjects) || career.beginnerProjects.some((project) => !project.title || !project.description)) errors.push(`${career.id} has an invalid beginner project.`);
    if (!Array.isArray(career.freeResources) || career.freeResources.some((resource) => {
      try {
        return !resource.title || !resource.topic || new URL(resource.url).protocol !== "https:";
      } catch (error) {
        return true;
      }
    })) errors.push(`${career.id} has an invalid resource.`);
  });

  return { total: CAREER_PROFILES.length, counts, errors };
}

const CAREER_DATABASE_REPORT = validateCareerDatabase();
if (CAREER_DATABASE_REPORT.errors.length) {
  throw new Error(`Career database validation failed: ${CAREER_DATABASE_REPORT.errors.join(" ")}`);
}
window.SPECTRA_CAREER_DATABASE_REPORT = CAREER_DATABASE_REPORT;

const SESSION_KEY = "spectra-career-session";
const profileForm = document.querySelector("#profile-form");
const recommendationSummary = document.querySelector("#recommendation-summary");
const careerSearch = document.querySelector("#career-search");
const careerResults = document.querySelector("#career-results");
const careerCount = document.querySelector("#career-count");
const searchStatus = document.querySelector("#search-status");
const quizForm = document.querySelector("#career-quiz");
const quizIntro = document.querySelector("#quiz-intro");
const quizStart = document.querySelector("#quiz-start");
const quizPathChoice = document.querySelector("#quiz-path-choice");
const fieldSelection = document.querySelector("#field-selection");
const selectedFieldIntro = document.querySelector("#selected-field-intro");
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
let assessmentType = savedSession.assessmentType === "field" ? "field" : "general";
let selectedFieldId = FIELD_ASSESSMENTS.some((field) => field.id === savedSession.selectedFieldId)
  ? savedSession.selectedFieldId
  : null;
let fieldResponses = FIELD_ASSESSMENTS.reduce((responses, field) => {
  const saved = savedSession.fieldResponses && savedSession.fieldResponses[field.id];
  const answers = Array.isArray(saved && saved.answers) && saved.answers.length === field.questions.length
    ? saved.answers.map((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : null)
    : Array(field.questions.length).fill(null);
  responses[field.id] = {
    answers,
    currentQuestion: Number.isInteger(saved && saved.currentQuestion)
      ? Math.min(Math.max(saved.currentQuestion, 0), field.questions.length - 1)
      : 0
  };
  return responses;
}, {});
let assessmentComplete = savedSession.assessmentComplete === true;
let isNavigating = false;
let navigationTimer = null;
let selectedCareerCategories = null;

function writeQuizHistory(stage, mode = "push", questionIndex = getActiveQuestionIndex()) {
  if (!quizForm || !["choices", "general-intro", "field-selection", "field-intro", "questions"].includes(stage)) return;
  const url = new URL(window.location.href);
  url.searchParams.delete("restart");
  url.searchParams.set("flow", stage);
  if (stage === "questions") {
    url.searchParams.set("question", String(questionIndex));
  } else {
    url.searchParams.delete("question");
  }
  const state = { spectraQuiz: true, stage, questionIndex };
  if (mode === "replace") {
    window.history.replaceState(state, "", url);
  } else if (mode === "push") {
    window.history.pushState(state, "", url);
  }
}

function persistSessionState() {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      profile,
      quizAnswers,
      currentQuestion,
      assessmentType,
      selectedFieldId,
      fieldResponses,
      assessmentComplete
    }));
  } catch (error) {
    console.warn("Could not save the career assessment in this browser session.", error);
  }
}

function getSelectedField() {
  return FIELD_ASSESSMENTS.find((field) => field.id === selectedFieldId) || null;
}

function getActiveQuestions() {
  return assessmentType === "field" && getSelectedField()
    ? getSelectedField().questions
    : QUIZ_QUESTIONS;
}

function getActiveAnswers() {
  return assessmentType === "field" && selectedFieldId
    ? fieldResponses[selectedFieldId].answers
    : quizAnswers;
}

function getActiveQuestionIndex() {
  return assessmentType === "field" && selectedFieldId
    ? fieldResponses[selectedFieldId].currentQuestion
    : currentQuestion;
}

function setActiveQuestionIndex(index) {
  if (assessmentType === "field" && selectedFieldId) {
    fieldResponses[selectedFieldId].currentQuestion = index;
  } else {
    currentQuestion = index;
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

function buildRecommendationResponse(profile, careerCategories = null) {
  const scoreLimitations = ["Scores compare mapped quiz-interest dimensions and, when available, optional profile-tag overlap. They are not a probability of success, an aptitude measure, or a professional assessment."];
  const eligibleCareers = CAREER_PROFILES
    .filter((career) => !careerCategories || careerCategories.includes(career.category));
  const results = eligibleCareers
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
    comparedCareerCount: eligibleCareers.length,
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

function renderCareerCard(career) {
  const category = FIELD_ASSESSMENTS.find((field) => field.categories.includes(career.category));
  return `
    <article class="career-card career-${escapeHTML(career.color)} profile-card">
      <div class="career-card-title-row">
        <h3>${escapeHTML(career.title)}</h3>
        <span class="match-badge match-neutral">Career profile</span>
      </div>
      <p class="career-card-field">${escapeHTML(category ? category.title : career.category)}</p>
      <p>${escapeHTML(career.description || "A career description is not yet available in this profile.")}</p>
      <div class="career-card-actions">
        <button class="button button-outline career-detail-button" type="button" data-career-id="${escapeHTML(career.id)}">Explore profile</button>
        <a class="text-link career-roadmap-link" href="roadmap.html?career=${encodeURIComponent(career.id)}">View roadmap <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function renderCareerDialog(career, result = null) {
  const field = FIELD_ASSESSMENTS.find((item) => item.categories.includes(career.category));
  const scoreMarkup = result
    ? `<div class="career-dialog-fit">
        <div class="career-dialog-fit-label"><span>Interest alignment</span><strong>${result.score}/100</strong></div>
        <div class="career-dialog-fit-track" role="progressbar" aria-label="Interest alignment" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${result.score}"><span style="--fit-width:${result.score}%"></span></div>
        <p>Exploratory preference comparison, not a measure of ability or a prediction of success.</p>
      </div>`
    : "";
  const reasons = result ? `<section><h3>Why it appeared</h3>${renderList(result.matchedReasons)}</section>` : "";
  const projects = asList(career.beginnerProjects);
  return `
    <div class="career-dialog-header">
      <div><p class="eyebrow">${escapeHTML(field ? field.title : career.category)}</p><h2 id="career-dialog-title">${escapeHTML(career.title)}</h2></div>
      <button class="career-dialog-close" type="button" aria-label="Close career profile">×</button>
    </div>
    <div class="career-dialog-body">
      ${scoreMarkup}
      <p class="career-dialog-summary">${escapeHTML(career.description || "A detailed summary is not yet available for this profile.")}</p>
      ${reasons}
      <div class="career-dialog-columns">
        <section><h3>Skills to develop</h3>${renderList(career.skills && career.skills.required)}</section>
        <section><h3>Relevant subjects</h3>${renderList(career.subjects)}</section>
      </div>
      <section><h3>Education and training</h3><p>${escapeHTML(career.educationRequirements && career.educationRequirements.summary || "Education information is not available yet. Check requirements with relevant institutions and regulators.")}</p></section>
      <section><h3>Roadmap preview</h3>${renderList(asList(career.roadmap).slice(0, 3))}</section>
      ${projects.length ? `<section><h3>Try a beginner project</h3><p><strong>${escapeHTML(projects[0].title)}:</strong> ${escapeHTML(projects[0].description)}</p></section>` : ""}
    </div>
    <div class="career-dialog-actions">
      <a class="button button-primary" href="roadmap.html?career=${encodeURIComponent(career.id)}">View full roadmap <span aria-hidden="true">→</span></a>
      <button class="button button-outline career-dialog-dismiss" type="button">Close</button>
    </div>
  `;
}

function renderRelatedCareer(result) {
  const career = result.careerProfile;
  const field = FIELD_ASSESSMENTS.find((item) => item.categories.includes(career.category));
  return `
    <article class="related-career-card">
      <div><p class="eyebrow">${escapeHTML(field ? field.title : career.category)} · ${result.score}/100 alignment</p><h4>${escapeHTML(career.title)}</h4><p>${escapeHTML(career.description)}</p></div>
      <div class="related-career-actions">
        <button class="button button-outline career-detail-button" type="button" data-career-id="${escapeHTML(career.id)}">Explore profile</button>
        <a class="text-link" href="roadmap.html?career=${encodeURIComponent(career.id)}">View roadmap <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

let lastCareerDialogTrigger = null;

function openCareerDialog(careerId, trigger) {
  const dialog = document.querySelector("#career-detail-dialog");
  const career = CAREER_PROFILES.find((item) => item.id === careerId);
  if (!dialog || !career) {
    console.error(`Cannot open career profile "${careerId}": dialog or profile is unavailable.`);
    return;
  }
  lastCareerDialogTrigger = trigger;
  const result = asList(window.SPECTRA_RECOMMENDATION_RESULTS).find((item) => item.careerId === careerId) || null;
  dialog.innerHTML = renderCareerDialog(career, result);
  dialog.showModal();
  dialog.querySelector(".career-dialog-close")?.focus();
}

function initializeCareerDetails() {
  const dialog = document.querySelector("#career-detail-dialog");
  if (!dialog) return;

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".career-detail-button");
    if (trigger) openCareerDialog(trigger.dataset.careerId, trigger);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".career-dialog-close, .career-dialog-dismiss")) {
      dialog.close();
    }
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (lastCareerDialogTrigger && document.contains(lastCareerDialogTrigger)) lastCareerDialogTrigger.focus();
  });
}

function renderCareerResults(careers, container) {
  if (careers.length === 0) {
    container.innerHTML = '<p class="empty-state">No career profiles match that search. Try a different title, skill, or domain.</p>';
    return;
  }
  container.innerHTML = careers.map((career) => renderCareerCard(career)).join("");
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

function getQuizDimensionScores(answers, questions = QUIZ_QUESTIONS) {
  const scores = {};
  answers.forEach((rating, questionIndex) => {
    questions[questionIndex].dimensions.forEach((dimension) => {
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

function renderListItems(items) {
  if (!items.length) return "<p>Not enough information to suggest this yet.</p>";
  return `<ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderResultsVisuals(dimensionWeights, answers, questions) {
  const answeredCount = answers.filter((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5).length;
  const answeredCountElement = document.querySelector("#answered-count");
  const dimensionBars = document.querySelector("#interest-score-bars");
  const distribution = document.querySelector("#rating-distribution");
  if (!answeredCountElement || !dimensionBars || !distribution) return;

  answeredCountElement.textContent = `${answeredCount} / ${questions.length} ANSWERED`;
  const leadingDimensions = Object.entries(dimensionWeights)
    .sort((a, b) => b[1].mean - a[1].mean || (DIMENSION_LABELS[a[0]] || a[0]).localeCompare(DIMENSION_LABELS[b[0]] || b[0]))
    .slice(0, 6);
  dimensionBars.innerHTML = leadingDimensions.map(([dimension, result]) => {
    const label = DIMENSION_LABELS[dimension] || dimension;
    return `
      <div class="interest-score">
        <div class="interest-score-label"><span>${escapeHTML(label)}</span><strong>${result.percent}%</strong></div>
        <div class="interest-score-track" role="progressbar" aria-label="${escapeHTML(label)} interest score" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${result.percent}" aria-valuetext="${result.percent} out of 100; neutral is 50">
          <span class="interest-score-fill" style="--score-width: ${result.percent}%"></span>
        </div>
        <span class="interest-score-detail">Average ${result.mean.toFixed(1)} / 5 · ${result.responses} mapped answers</span>
      </div>
    `;
  }).join("");

  const ratingCounts = [1, 2, 3, 4, 5].map((rating) => answers.filter((answer) => answer === rating).length);
  const maxCount = Math.max(...ratingCounts, 1);
  distribution.setAttribute("aria-label", `Rating counts from ${answeredCount} assessment answers: ${ratingCounts.map((count, index) => `rating ${index + 1}, ${count}`).join("; ")}.`);
  distribution.innerHTML = `
    <div class="rating-chart-axis" aria-hidden="true"><span>${maxCount}</span><span>${Math.ceil(maxCount / 2)}</span><span>0</span></div>
    <div class="rating-chart-bars">
      ${ratingCounts.map((count, index) => `
        <div class="rating-chart-column">
          <span class="rating-chart-count">${count}</span>
          <span class="rating-chart-track"><span class="rating-chart-bar rating-chart-bar-${index + 1}" style="--bar-height: ${count / maxCount * 100}%"></span></span>
          <span class="rating-chart-label">${index + 1}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPrimaryRoadmap(career) {
  const projects = asList(career.beginnerProjects);
  const resources = asList(career.freeResources);
  return `
    <div class="primary-roadmap-overview"><p>${escapeHTML(career.description || "A detailed description is not available in this profile yet.")}</p></div>
    <div class="primary-roadmap-grid">
      <section class="roadmap-detail-panel"><h4>Skills and subjects</h4><h5>Skills to develop</h5>${renderList(career.skills && career.skills.required)}<h5>Relevant subjects</h5>${renderList(career.subjects)}</section>
      <section class="roadmap-detail-panel"><h4>Education and training</h4><p>${escapeHTML(career.educationRequirements && career.educationRequirements.summary || "Education details are not available yet. Confirm current requirements with official institutions or regulators.")}</p><h5>Possible pathways</h5>${renderList(career.pathways)}</section>
    </div>
    <section class="roadmap-detail-panel primary-learning-steps"><h4>Learning roadmap</h4>${renderList(career.roadmap)}</section>
    <div class="primary-roadmap-grid">
      <section class="roadmap-detail-panel"><h4>Beginner project</h4>${projects.length ? `<p><strong>${escapeHTML(projects[0].title)}:</strong> ${escapeHTML(projects[0].description)}</p>` : "<p>Project ideas are not yet available for this profile.</p>"}</section>
      <section class="roadmap-detail-panel"><h4>Free learning resources</h4>${renderResources(resources)}</section>
    </div>
    <p class="profile-data-note">Check local qualification, licensing, and registration requirements before making education or career decisions.</p>
  `;
}

function renderDashboard(response) {
  const dimensionWeights = profile.quizDimensionWeights;
  const answers = getActiveAnswers();
  const questions = getActiveQuestions();
  const selectedField = assessmentType === "field" ? getSelectedField() : null;
  renderResultsVisuals(dimensionWeights, answers, questions);
  const strongestDimensions = Object.entries(dimensionWeights)
    .sort((a, b) => b[1].mean - a[1].mean || (DIMENSION_LABELS[a[0]] || a[0]).localeCompare(DIMENSION_LABELS[b[0]] || b[0]))
    .filter(([, result]) => result.mean > 3)
    .slice(0, 4);
  const topLabels = strongestDimensions.map(([dimension]) => DIMENSION_LABELS[dimension] || dimension);

  const interestSummary = topLabels.length
    ? `Your answers suggest interest in ${topLabels.join(", ")}.`
    : "Your responses did not rate a particular interest dimension above neutral; neutral or disagreement is not a weakness and does not limit your potential.";
  recommendationSummary.textContent = `${selectedField ? `Field explored: ${selectedField.title}. ` : ""}${interestSummary} Dimension scores are calculated as the mean of the 1–5 agreement ratings mapped to each dimension, then converted with ((mean − 1) ÷ 4) × 100; neutral is the midpoint (50). We compared your answers with ${response.comparedCareerCount} ${selectedField ? "matching-field " : ""}career profiles and show up to five profiles with the strongest available overlap.`;
  document.querySelector("#strengths-results").innerHTML = strongestDimensions.length ? `<ul>${strongestDimensions.map(([dimension]) => {
    return `<li><strong>${escapeHTML(DIMENSION_LABELS[dimension] || dimension)}</strong> — This interest area may be worth exploring (average ${dimensionWeights[dimension].mean.toFixed(1)}/5; ${dimensionWeights[dimension].percent}/100 of the scale range).</li>`;
  }).join("")}</ul>` : "<p>No dimensions were rated above neutral in this quiz. You can still explore every career; these answers do not measure ability or potential.</p>";

  const careerSkills = [...new Set(response.results
    .slice(0, 3)
    .flatMap((result) => asList(result.careerProfile.skills && result.careerProfile.skills.required)))].slice(0, 4);
  document.querySelector("#development-results").innerHTML = `
    <p><strong>Skills that may be useful in your leading career ideas:</strong> These are learning opportunities, not inferred weaknesses.</p>
    ${renderListItems(careerSkills)}
  `;

  document.querySelector("#workstyle-results").innerHTML = `
    <p>${topLabels.length
      ? `Your ratings suggest interest in activities involving ${topLabels.join(", ")}. This is a snapshot of stated preferences, not a permanent personality type.`
      : "Your answers did not show a preference above neutral for one particular work-style dimension. This is not a weakness or a fixed classification."}</p>
  `;

  const primarySection = document.querySelector("#primary-recommendation");
  const primaryRoadmapSection = document.querySelector("#primary-roadmap");
  const primaryContent = document.querySelector("#primary-career-content");
  const roadmapContent = document.querySelector("#primary-roadmap-content");
  const relatedSection = document.querySelector("#related-careers-section");
  const relatedContent = document.querySelector("#related-career-results");
  const primaryResult = response.results[0];
  window.SPECTRA_RECOMMENDATION_RESULTS = response.results;

  if (primaryResult && primarySection && primaryContent && primaryRoadmapSection && roadmapContent) {
    const career = primaryResult.careerProfile;
    const category = FIELD_ASSESSMENTS.find((field) => field.categories.includes(career.category));
    primarySection.hidden = false;
    primaryRoadmapSection.hidden = false;
    primaryContent.innerHTML = `
      <div class="primary-career-copy">
        <p class="eyebrow">YOUR TOP EXPLORATORY DIRECTION${category ? ` · ${escapeHTML(category.title)}` : ""}</p>
        <h3 id="primary-career-title">${escapeHTML(career.title)}</h3>
        <p class="primary-career-summary">${escapeHTML(career.description)}</p>
        <div class="primary-career-reasons"><h4>Why this appeared</h4>${renderList(primaryResult.matchedReasons)}</div>
        <div class="primary-career-actions">
          <button class="button button-primary career-detail-button" type="button" data-career-id="${escapeHTML(career.id)}">Explore this career <span aria-hidden="true">→</span></button>
          <a class="button button-outline" href="roadmap.html?career=${encodeURIComponent(career.id)}">Open full roadmap</a>
        </div>
      </div>
      <div class="primary-career-score">
        <span class="primary-score-label">Interest alignment</span><strong>${primaryResult.score}<small>/100</small></strong>
        <div class="primary-score-track" role="progressbar" aria-label="Interest alignment score" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${primaryResult.score}"><span style="--score-width:${primaryResult.score}%"></span></div>
        <p>Calculated from mapped quiz interests${primaryResult.profileScore === null ? "" : " and comparable profile information"}. Not a success probability or measure of ability.</p>
      </div>
    `;
    roadmapContent.innerHTML = renderPrimaryRoadmap(career);
    const roadmapLink = document.querySelector("#primary-roadmap-link");
    if (roadmapLink) {
      roadmapLink.href = `roadmap.html?career=${encodeURIComponent(career.id)}`;
      roadmapLink.textContent = "Open this career's roadmap →";
    }
  } else {
    if (primarySection) primarySection.hidden = true;
    if (primaryRoadmapSection) primaryRoadmapSection.hidden = true;
    if (relatedContent) relatedContent.innerHTML = '<p class="empty-state">There is not enough mapped profile data to calculate a career alignment for these answers. Explore the career database or review your responses; this is not a reflection of your potential.</p>';
  }

  const related = response.results.slice(1).filter((result) => (
    result.careerId !== primaryResult?.careerId
    && CAREER_PROFILES.some((career) => career.id === result.careerId && career === result.careerProfile)
  ));
  if (relatedContent) relatedContent.innerHTML = related.map((result) => renderRelatedCareer(result)).join("");
  if (relatedSection) relatedSection.hidden = related.length === 0 && Boolean(primaryResult);
  if (relatedContent && !primaryResult) relatedSection.hidden = false;
}

function renderQuizQuestion() {
  const questions = getActiveQuestions();
  const answers = getActiveAnswers();
  const questionIndex = getActiveQuestionIndex();
  const question = questions[questionIndex];
  const questionText = question.text || question.statement;
  const fieldContext = document.querySelector("#quiz-field-context");
  if (fieldContext) {
    fieldContext.hidden = assessmentType !== "field";
    fieldContext.textContent = assessmentType === "field" && getSelectedField()
      ? `Exploring: ${getSelectedField().title}`
      : "";
  }
  const changeFieldButton = document.querySelector("#quiz-change-field");
  if (changeFieldButton) changeFieldButton.hidden = assessmentType !== "field";
  quizProgressLabel.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  quizProgress.max = questions.length;
  quizProgress.value = questionIndex + 1;
  quizBack.disabled = false;
  quizError.hidden = true;
  quizQuestion.innerHTML = `
    <h3 id="quiz-question-title" tabindex="-1">${escapeHTML(questionText)}</h3>
    <div class="likert-scale" role="radiogroup" aria-labelledby="quiz-question-title">
      <span class="likert-endpoint likert-start">Strongly Disagree</span>
      ${[1, 2, 3, 4, 5].map((rating) => `
        <label class="likert-point likert-point-${rating}" for="quiz-rating-${rating}">
          <input id="quiz-rating-${rating}" type="radio" name="quiz-answer" value="${rating}" aria-label="${rating}, ${["", "Strongly Disagree", "Disagree", "Neutral / Not Sure", "Agree", "Strongly Agree"][rating]}" ${answers[questionIndex] === rating ? "checked" : ""}>
          <span class="likert-dot" aria-hidden="true"></span>
          <span class="likert-value" aria-hidden="true">${rating}</span>
        </label>
      `).join("")}
      <span class="likert-endpoint likert-end">Strongly Agree</span>
    </div>
    ${Number.isInteger(answers[questionIndex])
      ? '<button class="button button-primary quiz-continue" id="quiz-continue" type="button">Continue with this answer <span aria-hidden="true">→</span></button>'
      : ""}
  `;
  quizQuestion.querySelectorAll('input[name="quiz-answer"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (isNavigating) return;
      const rating = Number(input.value);
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) return;
      answers[questionIndex] = rating;
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
  const questions = getActiveQuestions();
  const answers = getActiveAnswers();
  if (answers.length !== questions.length
    || answers.some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5)) {
    if (quizError) quizError.hidden = false;
    return;
  }
  profile.quizDimensionWeights = getQuizDimensionScores(answers, questions);
  delete profile.skillsToDevelop;
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
    if (getActiveQuestionIndex() === getActiveQuestions().length - 1) {
      isNavigating = false;
      showQuizResults();
      return;
    }
    setActiveQuestionIndex(getActiveQuestionIndex() + 1);
    persistSessionState();
    showJourneyStage("questions");
    isNavigating = false;
    quizBack.disabled = false;
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

function showJourneyStage(stage, historyMode = "push") {
  writeQuizHistory(stage, historyMode);
  const profileSection = document.querySelector("#profile-section");
  if (profileSection) profileSection.hidden = true;
  if (quizStart) quizStart.hidden = true;
  if (quizPathChoice) quizPathChoice.hidden = stage !== "choices";
  if (quizIntro) quizIntro.hidden = stage !== "general-intro";
  if (fieldSelection) fieldSelection.hidden = stage !== "field-selection";
  if (selectedFieldIntro) selectedFieldIntro.hidden = stage !== "field-intro";
  if (quizForm) quizForm.hidden = stage !== "questions";
  const active = {
    choices: quizPathChoice,
    "general-intro": quizIntro,
    "field-selection": fieldSelection,
    "field-intro": selectedFieldIntro,
    questions: quizForm
  }[stage];
  if (stage === "field-selection") renderFieldOptions();
  if (stage === "field-intro") renderSelectedFieldIntro();
  if (stage === "questions") renderQuizQuestion();
  active?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showPathChoices(resetAnswers = false) {
  if (profileForm) profile = readProfile();
  if (resetAnswers || assessmentComplete) {
    if (assessmentType === "field" && selectedFieldId) {
      fieldResponses[selectedFieldId] = {
        answers: Array(getSelectedField().questions.length).fill(null),
        currentQuestion: 0
      };
    } else {
      quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
      currentQuestion = 0;
    }
    assessmentComplete = false;
  }
  isNavigating = false;
  if (navigationTimer !== null) {
    window.clearTimeout(navigationTimer);
    navigationTimer = null;
  }
  persistSessionState();
  showJourneyStage("choices");
}

function showGeneralIntro() {
  if (assessmentComplete) {
    quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
    currentQuestion = 0;
  }
  assessmentType = "general";
  assessmentComplete = false;
  persistSessionState();
  showJourneyStage("general-intro");
}

function renderFieldOptions() {
  const container = document.querySelector("#field-choice-grid");
  if (!container) return;
  container.innerHTML = FIELD_ASSESSMENTS.map((field) => {
    const profileCount = CAREER_PROFILES.filter((career) => field.categories.includes(career.category)).length;
    const enabled = field.supported !== false && profileCount > 0;
    return `
      <button class="field-choice${enabled ? "" : " field-choice-unavailable"}" type="button" data-field-id="${escapeHTML(field.id)}" ${enabled ? "" : "disabled"}>
        <span class="field-choice-icon" aria-hidden="true">${escapeHTML(field.icon)}</span>
        <strong>${escapeHTML(field.title)}</strong>
        <span>${escapeHTML(field.description)}</span>
        <span class="field-choice-status">${enabled ? `${profileCount} career profiles` : "Not yet available · no matching career profiles"}</span>
      </button>
    `;
  }).join("");
  container.querySelectorAll(".field-choice:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => selectField(button.dataset.fieldId));
  });
}

function renderSelectedFieldIntro() {
  const field = getSelectedField();
  if (!field) {
    showJourneyStage("field-selection");
    return;
  }
  document.querySelector("#selected-field-eyebrow").textContent = `${field.questions.length} QUESTIONS · 5-POINT SCALE`;
  document.querySelector("#selected-field-title").textContent = field.title;
  document.querySelector("#selected-field-description").textContent = `${field.description} Your answers, not the field choice, determine which matching career profiles appear.`;
}

function selectField(fieldId) {
  const field = FIELD_ASSESSMENTS.find((item) => item.id === fieldId);
  if (!field || field.supported === false || !CAREER_PROFILES.some((career) => field.categories.includes(career.category))) {
    return;
  }
  if (assessmentComplete && selectedFieldId === field.id) {
    fieldResponses[field.id] = { answers: Array(field.questions.length).fill(null), currentQuestion: 0 };
  }
  assessmentType = "field";
  selectedFieldId = field.id;
  assessmentComplete = false;
  persistSessionState();
  showJourneyStage("field-intro");
}

function beginAssessment(resetAnswers) {
  if (profileForm) profile = readProfile();
  assessmentType = "general";
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
  showJourneyStage("questions");
}

function beginFieldAssessment() {
  const field = getSelectedField();
  if (!field || field.supported === false) {
    showJourneyStage("field-selection");
    return;
  }
  assessmentType = "field";
  assessmentComplete = false;
  if (profileForm) profile = readProfile();
  persistSessionState();
  showJourneyStage("questions");
}

function seedQuizHistory(stage) {
  if (window.history.state && window.history.state.spectraQuiz) return;
  if (stage === "questions") {
    const introStage = assessmentType === "field" ? "field-intro" : "general-intro";
    writeQuizHistory(introStage, "replace", 0);
    for (let index = 0; index <= getActiveQuestionIndex(); index += 1) {
      writeQuizHistory("questions", "push", index);
    }
    return;
  }
  writeQuizHistory(stage, "replace");
}

function initializeQuiz() {
  if (!quizForm || !quizStart) return;
  window.addEventListener("popstate", (event) => {
    const state = event.state;
    if (!state || !state.spectraQuiz) return;
    if (state.stage === "questions") {
      const maxIndex = getActiveQuestions().length - 1;
      setActiveQuestionIndex(Math.min(Math.max(Number(state.questionIndex) || 0, 0), maxIndex));
      persistSessionState();
    }
    showJourneyStage(state.stage, "none");
  });
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
      showPathChoices(true);
    });
    profileForm.addEventListener("reset", () => {
      profile = {};
      persistSessionState();
    });
  }

  const params = new URLSearchParams(window.location.search);
  if (params.has("restart")) {
    if (assessmentType === "field" && selectedFieldId) {
      fieldResponses[selectedFieldId] = {
        answers: Array(getSelectedField().questions.length).fill(null),
        currentQuestion: 0
      };
    } else {
      quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
      currentQuestion = 0;
    }
    assessmentComplete = false;
    persistSessionState();
    const cleanedUrl = new URL(window.location.href);
    cleanedUrl.searchParams.delete("restart");
    window.history.replaceState(window.history.state, "", cleanedUrl);
  }
  const flow = params.get("flow");
  const validStages = ["choices", "general-intro", "field-selection", "field-intro", "questions"];
  if (validStages.includes(flow)) {
    const questionFromUrl = Number.parseInt(params.get("question"), 10);
    if (flow === "questions" && Number.isInteger(questionFromUrl) && questionFromUrl >= 0 && questionFromUrl < getActiveQuestions().length) {
      setActiveQuestionIndex(questionFromUrl);
    }
    seedQuizHistory(flow);
    showJourneyStage(flow, "none");
  } else if (params.has("review")) {
    if (assessmentType === "field" && getSelectedField()) {
      setActiveQuestionIndex(0);
    } else {
      assessmentType = "general";
      currentQuestion = 0;
    }
    persistSessionState();
    seedQuizHistory("questions");
    showJourneyStage("questions", "none");
  } else if (params.has("start") || params.has("restart")) {
    showPathChoices();
  } else if (!assessmentComplete && (
    (assessmentType === "field" && selectedFieldId && fieldResponses[selectedFieldId].answers.some(Number.isInteger))
    || (assessmentType === "general" && quizAnswers.some(Number.isInteger))
  )) {
    seedQuizHistory("questions");
    showJourneyStage("questions", "none");
  } else if (assessmentType === "field" && !selectedFieldId) {
    showPathChoices();
  }

  const startButton = document.querySelector("#start-quiz");
  if (startButton) {
    startButton.addEventListener("click", () => showPathChoices());
  }
  document.querySelector("#choose-discovery")?.addEventListener("click", showGeneralIntro);
  document.querySelector("#choose-field")?.addEventListener("click", () => showJourneyStage("field-selection"));
  document.querySelector("#field-selection-back")?.addEventListener("click", () => showJourneyStage("choices"));
  document.querySelector("#quiz-change-field")?.addEventListener("click", () => showJourneyStage("field-selection"));
  document.querySelector("#change-selected-field")?.addEventListener("click", () => showJourneyStage("field-selection"));
  document.querySelector("#start-field-quiz")?.addEventListener("click", beginFieldAssessment);
  document.querySelector("#general-intro-back")?.addEventListener("click", () => showJourneyStage("choices"));
  const notSure = document.querySelector("#not-sure-discover");
  if (notSure) {
    notSure.addEventListener("click", showGeneralIntro);
  }
  const introNextButton = document.querySelector("#quiz-intro-next");
  if (introNextButton) {
    introNextButton.addEventListener("click", () => beginAssessment(false));
  }
  if (quizBack) {
    quizBack.addEventListener("click", () => {
      if (isNavigating) return;
      const questionIndex = getActiveQuestionIndex();
      if (questionIndex === 0 && new URLSearchParams(window.location.search).has("review")) {
        window.location.href = "results.html";
        return;
      }
      const expectedPreviousStage = questionIndex > 0
        ? { stage: "questions", questionIndex: questionIndex - 1 }
        : { stage: assessmentType === "field" ? "field-intro" : "general-intro" };
      const currentState = window.history.state;
      if (currentState && currentState.spectraQuiz
        && currentState.stage === "questions"
        && currentState.questionIndex === questionIndex) {
        window.history.back();
        return;
      }
      if (questionIndex > 0) {
        setActiveQuestionIndex(questionIndex - 1);
        persistSessionState();
        showJourneyStage("questions", "replace");
        (quizQuestion.querySelector('input[name="quiz-answer"]:checked')
          || quizQuestion.querySelector('input[name="quiz-answer"]')).focus();
      } else {
        showJourneyStage(expectedPreviousStage.stage);
      }
    });
  }
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (getActiveAnswers().some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5) && quizError) {
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
  const questions = getActiveQuestions();
  const answers = getActiveAnswers();
  const selectedField = assessmentType === "field" ? getSelectedField() : null;
  if (!assessmentComplete
    || (assessmentType === "field" && (!selectedField || selectedField.supported === false))
    || answers.length !== questions.length
    || answers.some((rating) => !Number.isInteger(rating) || rating < 1 || rating > 5)) {
    resultsDashboard.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  profile.quizDimensionWeights = getQuizDimensionScores(answers, questions);
  delete profile.skillsToDevelop;
  persistSessionState();
  renderDashboard(buildRecommendationResponse(profile, selectedField ? selectedField.categories : null));
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
  const answers = getActiveAnswers();
  const questions = getActiveQuestions();
  const selectedField = assessmentType === "field" ? getSelectedField() : null;
  const validResults = assessmentComplete
    && answers.length === questions.length
    && answers.every((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 5)
    ? buildRecommendationResponse({
      ...profile,
      quizDimensionWeights: getQuizDimensionScores(answers, questions)
    }, selectedField ? selectedField.categories : null).results
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
initializeCareerDetails();
initializeCareers();
initializeQuiz();
initializeResults();
initializeRoadmap();
