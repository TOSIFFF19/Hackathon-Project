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

const FACTORS = [
  { key: "interests", label: "interests", weight: 30 },
  { key: "skills", label: "skills", weight: 30 },
  { key: "favouriteSubjects", careerKey: "subjects", label: "favourite subjects", weight: 15 },
  { key: "educationLevel", label: "education level", weight: 10 },
  { key: "goals", label: "goals", weight: 15 }
];

const TERM_ALIASES = {
  "artificial intelligence": "ai",
  "machine learning": "ai",
  "programming": "coding",
  "software development": "coding",
  "web development": "coding",
  "visual design": "design",
  "creative work": "creative work",
  "statistics": "statistics",
  "data analysis": "data analysis",
  "helping people make decisions": "helping people make decisions"
};

const profileForm = document.querySelector("#profile-form");
const recommendationHeading = document.querySelector("#recommendation-heading");
const recommendationSummary = document.querySelector("#recommendation-summary");
const recommendationResults = document.querySelector("#recommendation-results");
const careerSearch = document.querySelector("#career-search");
const careerResults = document.querySelector("#career-results");
const careerCount = document.querySelector("#career-count");
const searchStatus = document.querySelector("#search-status");

function normalizeTerm(value) {
  const normalized = value
    .toLocaleLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

  return TERM_ALIASES[normalized] || normalized;
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
  const profile = {};
  const listFields = ["interests", "skills", "favouriteSubjects", "goals"];

  listFields.forEach((field) => {
    const values = parseList(profileForm.elements[field].value);
    if (values.length > 0) {
      profile[field] = values;
    }
  });

  const educationLevel = profileForm.elements.educationLevel.value;
  if (educationLevel) {
    profile.educationLevel = educationLevel;
  }

  return profile;
}

function getFactorValues(profile, factor, career) {
  if (factor.key === "educationLevel") {
    const acceptedLevels = asList(
      career.educationRequirements && career.educationRequirements.entryLevels
    );
    if (!acceptedLevels.length) {
      return null;
    }
    return {
      answers: [profile.educationLevel],
      careerTerms: acceptedLevels
    };
  }

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
  const availableTerms = new Set(careerTerms.map(normalizeTerm));
  const matchedAnswers = answers.filter((answer) => availableTerms.has(normalizeTerm(answer)));

  return {
    score: Math.round((matchedAnswers.length / answers.length) * 100),
    matchedAnswers,
    answerCount: answers.length
  };
}

function scoreCareer(profile, career) {
  let weightedTotal = 0;
  let includedWeight = 0;
  let answeredWeight = 0;
  const factorResults = [];

  FACTORS.forEach((factor) => {
    const values = getFactorValues(profile, factor, career);
    const hasAnswer = factor.key === "educationLevel"
      ? Boolean(profile.educationLevel)
      : (profile[factor.key] || []).length > 0;

    if (hasAnswer) {
      answeredWeight += factor.weight;
    }
    if (!values) {
      return;
    }

    const comparison = compareFactor(values.answers, values.careerTerms);
    weightedTotal += comparison.score * factor.weight;
    includedWeight += factor.weight;
    factorResults.push({
      key: factor.key,
      label: factor.label,
      weight: factor.weight,
      ...comparison
    });
  });

  if (includedWeight === 0) {
    return {
      score: null,
      dataCoverage: 0,
      comparedCategories: 0,
      factorResults
    };
  }

  return {
    score: Math.round(weightedTotal / includedWeight),
    dataCoverage: answeredWeight === 0 ? 0 : Math.round((includedWeight / answeredWeight) * 100),
    comparedCategories: factorResults.length,
    factorResults
  };
}

function createReasons(match) {
  if (match.score === null) {
    return ["There is not enough profile data to compare this career yet."];
  }

  return match.factorResults.map((factor) => {
    if (factor.matchedAnswers.length > 0) {
      return `Matched ${factor.label}: ${factor.matchedAnswers.join(", ")}.`;
    }
    return `No exact ${factor.label} overlap in the available profile tags yet.`;
  });
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
    ));

  return {
    results: results.map(({ career, match, matchedReasons, potentialSkillGaps }) => ({
      careerId: career.id,
      title: career.title,
      score: match.score,
      dataCoverage: match.dataCoverage,
      comparedCategories: match.comparedCategories,
      skillsProvided: Boolean(profile.skills && profile.skills.length > 0),
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

function renderCareerCard(career, result = null, index = 0) {
  const skills = career.skills || {};
  const roadmap = asList(career.roadmap);
  const projects = asList(career.beginnerProjects);
  const educationRequirements = career.educationRequirements || {};
  const matchBadge = result
    ? result.score === null
      ? '<span class="match-badge match-unscored">Not enough data to score</span>'
      : `<span class="match-badge">Score ${result.score}/100</span>`
    : '<span class="match-badge match-neutral">Career profile</span>';
  const matchDetails = result
    ? `
      <div class="match-explanation">
        <p><strong>Data coverage:</strong> ${result.dataCoverage}% of the weight for your answered categories was comparable (${result.comparedCategories} ${result.comparedCategories === 1 ? "category" : "categories"} compared).</p>
        <h4>Why it appeared</h4>
        ${renderList(result.matchedReasons)}
        ${result.skillsProvided
          ? `
            <h4>Potential skills to explore</h4>
            <p>These are listed as required in this profile but were not listed in your answers; this does not mean you lack them.</p>
            ${result.potentialSkillGaps.length
              ? renderList(result.potentialSkillGaps)
              : "<p>No potential gaps to show from your answers.</p>"}
          `
          : "<h4>Skill comparison</h4><p>Add your skills above to compare them with the listed requirements.</p>"}
      </div>
    `
    : "";
  const roadmapItems = roadmap.length
    ? roadmap.map((step) => `<li>${escapeHTML(step)}</li>`).join("")
    : "<li>Learning steps are not yet available in this career profile.</li>";
  const projectItems = projects.map((project) => (
    `<li><strong>${escapeHTML(project.title)}:</strong> ${escapeHTML(project.description)}</li>`
  )).join("");

  return `
    <article class="career-card career-${escapeHTML(career.color)} profile-card">
      <div class="career-card-top">
        <span class="career-icon" aria-hidden="true">${escapeHTML(career.icon)}</span>
        <span class="career-index">FIELD ${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="career-card-title-row">
        <h3>${escapeHTML(career.title)}</h3>
        ${matchBadge}
      </div>
      <p>${escapeHTML(career.description || "A career description is not yet available in this profile.")}</p>
      <details class="career-details">
        <summary>Explore skills, roadmap &amp; resources</summary>
        ${matchDetails}
        <h4>Required skills</h4>
        ${renderList(skills.required)}
        <h4>Helpful skills</h4>
        ${renderList(skills.helpful)}
        <h4>Relevant subjects</h4>
        ${renderList(career.subjects)}
        <h4>Education notes</h4>
        <p>${escapeHTML(educationRequirements.summary || "Education information is not yet available in this career profile.")}</p>
        <h4>Learning roadmap</h4>
        <ol>${roadmapItems}</ol>
        <h4>Beginner projects</h4>
        ${projectItems ? `<ul>${projectItems}</ul>` : "<p>Not yet added to this career profile.</p>"}
        <h4>Free learning resources</h4>
        ${renderResources(career.freeResources)}
        <p class="profile-data-note">Career information is a starting point. Check current requirements with schools and employers.</p>
      </details>
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
  const query = careerSearch.value.trim().toLocaleLowerCase();
  const results = query
    ? CAREER_PROFILES
      .map((career) => ({ career, rank: getSearchRank(career, query) }))
      .filter((result) => result.rank > 0)
      .sort((a, b) => b.rank - a.rank || a.career.title.localeCompare(b.career.title))
      .map((result) => result.career)
    : CAREER_PROFILES;

  renderCareerResults(results, careerResults);
  careerCount.textContent = `${String(results.length).padStart(2, "0")} CAREER ${results.length === 1 ? "PATH" : "PATHS"}`;
  searchStatus.textContent = query
    ? `${results.length} search ${results.length === 1 ? "result" : "results"} — not personalized recommendations.`
    : "Showing all career profiles.";
}

function clearRecommendations(message = "") {
  recommendationHeading.hidden = !message;
  recommendationSummary.textContent = message;
  recommendationResults.innerHTML = "";
}

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = readProfile();
  const hasAnswers = Object.keys(profile).length > 0;

  if (!hasAnswers) {
    clearRecommendations("Add at least one answer to compare careers. Search the career profiles below any time.");
    return;
  }

  const response = buildRecommendationResponse(profile);
  recommendationHeading.hidden = false;

  if (response.results.length === 0) {
    recommendationSummary.textContent = "Your answers do not overlap with the current profile data enough to calculate a score. Try adding another category or browse the career profiles below.";
    recommendationResults.innerHTML = "";
    return;
  }

  recommendationSummary.textContent = `Compared with ${CAREER_PROFILES.length} career profiles. Scores are rounded and ranked by score, then data coverage, then title.`;
  recommendationResults.innerHTML = response.results
    .map((result, index) => renderCareerCard(
      CAREER_PROFILES.find((career) => career.id === result.careerId),
      result,
      index
    ))
    .join("");
});

profileForm.addEventListener("reset", () => {
  clearRecommendations();
});

careerSearch.addEventListener("input", updateCareerSearch);

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateCareerSearch();
