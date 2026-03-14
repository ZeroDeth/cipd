export const MODULES = {
  "5CO01": {
    code: "5CO01",
    name: "Organisational Performance & Culture in Practice",
    desc: "Strategic frameworks for aligning HR with organisational culture, performance management systems, and sustainable competitive advantage.",
    icon: "🏢",
    color: "#e91e63",
    gradient: "linear-gradient(135deg, #e91e63, #f48fb1)",
    questions: [
      {
        q: "According to Schein's model, which cultural level is MOST difficult for competitors to imitate?",
        type: "mc",
        opts: [
          "Artifacts and symbols",
          "Espoused values",
          "Basic underlying assumptions",
          "Observable behaviours"
        ],
        answer: 2,
        explanation: "Schein identified three levels of organisational culture: artifacts (easiest to change), espoused values (stated beliefs), and basic assumptions (deepest level, hardest to change and imitate). The basic underlying assumptions represent the organisation's core worldview and are most resistant to external imitation."
      },
      {
        q: "Which of the following best describes Ulrich's Strategic Partner model when applied to culture change?",
        type: "mc",
        opts: [
          "HR operates as an administrative function executing policies",
          "HR acts as a strategic partner influencing organisational capability and culture strategy",
          "HR functions solely as an employee advocate",
          "HR provides transactional services only"
        ],
        answer: 1,
        explanation: "Ulrich's Strategic Partner role positions HR as a business strategist who influences the organisation's future and shapes culture. This contrasts with administrative roles (administrative expert), employee advocacy, and transaction provision (operational executor roles)."
      },
      {
        q: "True or False: According to the Cultural Web framework, the paradigm represents the core beliefs that are EASY to challenge and change.",
        type: "tf",
        answer: false,
        explanation: "The paradigm (core beliefs) in Johnson and Scholes' Cultural Web is the most fundamental and difficult element to change. It sits at the centre of the web and underpins all other cultural elements like stories, symbols, rituals, and organisational structures."
      },
      {
        q: "PESTLE analysis is primarily used to assess organisational performance at which level?",
        type: "mc",
        opts: [
          "Internal resource capabilities",
          "External macro-environmental factors",
          "Individual employee performance",
          "Departmental team dynamics"
        ],
        answer: 1,
        explanation: "PESTLE examines Political, Economic, Social, Technological, Legal, and Environmental factors affecting an organisation from the external macro environment. This differs from internal analysis (VRIO, resource-based view) or individual/team assessments."
      },
      {
        q: "Which model suggests that organisational culture strength is determined by the alignment between what leaders DO versus what they SAY?",
        type: "mc",
        opts: [
          "Denison Organisational Culture Model",
          "Hofstede's Dimensions of Culture",
          "The Cultural Web",
          "Schein's Three Levels"
        ],
        answer: 0,
        explanation: "The Denison Model emphasises consistency between espoused values and actual leader behaviours. The model proposes that strong cultures emerge when there is high congruence between stated values and observable actions—the 'walk the talk' principle."
      },
      {
        q: "True or False: Porter's Five Forces analysis includes assessment of labour supply and employment relations as a threat from suppliers.",
        type: "tf",
        answer: true,
        explanation: "In Porter's Five Forces, suppliers include labour suppliers (the workforce). In tight labour markets with skill shortages, employees hold power as suppliers of labour, which can threaten organisational performance through higher wages and reduced availability."
      },
      {
        q: "The Balanced Scorecard approach to measuring organisational performance includes which FOUR perspectives?",
        type: "mc",
        opts: [
          "Financial, Customer, Internal Process, Learning & Growth",
          "Financial, Market Share, Employee Satisfaction, Innovation",
          "Profitability, Quality, Time, Cost",
          "Shareholders, Customers, Employees, Community"
        ],
        answer: 0,
        explanation: "Kaplan and Norton's Balanced Scorecard comprises: Financial perspective (shareholder value), Customer perspective (market position), Internal Process perspective (operational excellence), and Learning & Growth perspective (capability development). This ensures performance assessment beyond financial metrics."
      },
      {
        q: "Which of the following is NOT typically considered an \"artifact\" in Schein's model of organisational culture?",
        type: "mc",
        opts: [
          "Office layout and physical environment",
          "Dress codes and visible symbols",
          "The organisation's underlying philosophy about human nature",
          "Rituals and ceremonies"
        ],
        answer: 2,
        explanation: "The organisation's philosophy about human nature is a basic underlying assumption (deepest cultural level), not an artifact. Artifacts are visible, observable elements like physical spaces, symbols, dress codes, rituals, and ceremonies."
      },
      {
        q: "True or False: Kotter's change model suggests that creating a compelling vision PRECEDES establishing urgency in transformation initiatives.",
        type: "tf",
        answer: false,
        explanation: "Kotter's 8-step model establishes urgency first (Step 1), then forms a guiding coalition (Step 2) and creates a vision (Step 3). Urgency is foundational—without it, stakeholders lack motivation to engage with vision development."
      },
      {
        q: "According to resource-based view (RBV) theory, sustainable competitive advantage through culture requires that the culture be:",
        type: "mc",
        opts: [
          "Easily replicable by competitors",
          "Valuable, rare, inimitable, and non-substitutable (VRIN)",
          "Focused on cost minimisation",
          "Standardised across all organisational levels"
        ],
        answer: 1,
        explanation: "RBV theory (Barney, 1991) posits that resources creating sustained competitive advantage must be Valuable, Rare, Inimitable, and Non-substitutable. Organisational culture is a classic VRIN resource: valuable for performance, rare because it's unique, inimitable due to path dependency, and not easily substitutable."
      },
      {
        q: "Which aspect of organisational culture is MOST directly influenced by the incentive and reward systems used?",
        type: "mc",
        opts: [
          "Founder heritage and history",
          "Espoused values and basic assumptions",
          "Actual behaviours that get reinforced and celebrated",
          "External market positioning"
        ],
        answer: 2,
        explanation: "Reward systems reinforce and shape actual behaviours that become cultural norms. While espoused values are stated, the behaviours that are rewarded reveal the true culture and drive cultural change through reinforcement of desired behaviours."
      },
      {
        q: "True or False: The ADKAR change management model suggests resistance to change is primarily a failure to communicate the vision.",
        type: "tf",
        answer: false,
        explanation: "ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) recognises multiple sources of resistance. While awareness and desire require communication, resistance also stems from lack of knowledge (training) and ability (skill development), requiring multi-faceted interventions beyond communication alone."
      }
    ],
    scenarios: [
      {
        title: "Culture Clash Post-Acquisition",
        context: "Your organisation has acquired a competitor with distinctly different cultural values. The acquired company emphasises risk-taking and autonomy, while your organisation prioritises stability and process compliance. Early integration shows significant tension, with 35% of acquired staff already indicating potential departure.",
        choices: [
          {
            text: "Mandate full adoption of the acquiring organisation's culture immediately to ensure consistency",
            outcome: "This approach causes 18% additional voluntary departures in months 1-3, losing key talent. Surviving staff become disengaged. Two years later, cultural integration remains problematic and acquisition ROI targets are missed.",
            quality: "poor",
            points: 5
          },
          {
            text: "Conduct comprehensive cultural assessment using Schein's framework, identify integration points, create hybrid culture that preserves valuable distinctiveness while building integration",
            outcome: "Initial integration period sees 8% departures (normal attrition rate). Over 12 months, a genuinely blended culture emerges leveraging both organisation's strengths. Engagement recovers to 78% in year 2. Acquisition targets exceeded.",
            quality: "good",
            points: 30
          },
          {
            text: "Allow both cultures to operate in parallel without integration; maintain separate reporting lines and systems",
            outcome: "Operational duplication costs 12% of projected synergy savings. After 18 months, inconsistent policies create compliance issues. Eventually forced to merge anyway, requiring the cultural work anyway—with added complexity.",
            quality: "okay",
            points: 15
          }
        ]
      },
      {
        title: "Performance Management System Overhaul",
        context: "Your annual appraisal-based performance management system shows declining engagement and is perceived as unfair. Exit interview data reveals this system is the #2 reason for departures. Senior leadership wants to move to a quarterly check-in model aligned with your newly defined culture values (collaboration, innovation, development).",
        choices: [
          {
            text: "Implement new quarterly system with same rating scales and distribution curve requirements; minimal stakeholder consultation",
            outcome: "Managers struggle with implementation; the new format is perceived as \"more work, same outcomes.\" Engagement actually declines further. The underlying cultural misalignment persists.",
            quality: "poor",
            points: 5
          },
          {
            text: "Co-design the new system with cross-level focus groups, emphasise developmental conversations, remove forced ratings, align explicitly with your culture values and reward system, provide substantial manager training",
            outcome: "Implementation is smoother with manager buy-in. Employees report increased clarity and development focus within 6 months. Engagement improves 23 points. Performance measures remain rigorous but feel fairer.",
            quality: "good",
            points: 30
          },
          {
            text: "Pilot the new system in two departments first to refine before full rollout",
            outcome: "Pilot shows promise and reveals some implementation challenges. Full rollout occurs 6 months later with modifications, but early adopters feel the process was slow. Results eventually positive but with delayed benefit.",
            quality: "okay",
            points: 15
          }
        ]
      },
      {
        title: "Crisis: Reputational Threat from Poor Culture Incidents",
        context: "A series of social media posts from former employees detail bullying and exclusionary behaviour. A local newspaper is developing a story. Internal investigation confirms the incidents occurred in one business unit; the leader has since left. The broader organisation prides itself on values of inclusion and respect.",
        choices: [
          {
            text: "Issue a statement that these were isolated incidents unrepresentative of the organisation's culture; focus on the past leader's departure",
            outcome: "Story runs with headline \"Company culture problems extend beyond one manager.\" Employees lose confidence in leadership credibility. Recruitment becomes significantly harder for 18 months. The incident becomes part of the organisation's search history permanently.",
            quality: "poor",
            points: 5
          },
          {
            text: "Conduct thorough investigation, acknowledge the failures transparently, outline specific culture change interventions, commit publicly to values alignment with measurable accountability metrics, engage affected employees directly",
            outcome: "Story still runs but with leadership credibility intact. Employees see authentic response. The incident becomes a turning point for actual culture strengthening. Trust recovers within 8-12 months. Future recruitment benefits from narrative of proactive change.",
            quality: "good",
            points: 30
          },
          {
            text: "Conduct investigation privately; only communicate findings to leadership and the affected business unit",
            outcome: "Information leaks in modified form. Story runs with company portrayed as secretive. Lack of transparency fuels speculation. Taking longer to restore trust than with transparent approach.",
            quality: "okay",
            points: 15
          }
        ]
      }
    ]
  },

  "5CO02": {
    code: "5CO02",
    name: "Evidence-Based Practice",
    desc: "Critical evaluation of HR research, designing evidence-based HR interventions, evaluating impact, and translating academic research into organisational practice.",
    icon: "🔬",
    color: "#ff7043",
    gradient: "linear-gradient(135deg, #ff7043, #ffab91)",
    questions: [
      {
        q: "Which of the following BEST describes evidence-based HR practice according to Rynes, Colbert and Brown (2002)?",
        type: "mc",
        opts: [
          "Applying the most recent HR trends regardless of organisational context",
          "Making HR decisions by integrating research evidence, practitioner expertise, and organisational context",
          "Following HR policies exactly as documented in published best practice guides",
          "Using only data from the organisation's own experience without external research"
        ],
        answer: 1,
        explanation: "Rynes, Colbert and Brown's seminal work on evidence-based HR defines it as integration of three pillars: research evidence, professional expertise, and organisational context. This contrasts with trend-following, rigid policy adherence, or purely internal data reliance."
      },
      {
        q: "True or False: A randomised controlled trial (RCT) design for HR intervention evaluation is always superior to a quasi-experimental design in organisational settings.",
        type: "tf",
        answer: false,
        explanation: "While RCTs provide high internal validity, organisational realities often make them impractical. Quasi-experimental designs (pre-test/post-test with comparison groups) offer good validity with greater feasibility. The \"best\" design depends on research question, resources, and practical constraints."
      },
      {
        q: "Guest's (1997) research on HRM and performance suggests the connection operates through which mechanism?",
        type: "mc",
        opts: [
          "Direct financial incentives driving productivity",
          "Improved commitment, competence, motivation, and cost-effectiveness",
          "Technology investment reducing headcount",
          "Increased working hours without additional compensation"
        ],
        answer: 1,
        explanation: "Guest's model proposes that HRM practices improve performance through intermediate outcomes: commitment (attachment to organisational goals), competence (capabilities), and motivation (desire to perform). These intermediate factors then drive cost-effectiveness and productivity."
      },
      {
        q: "Which research method would be MOST appropriate to understand the mechanisms through which a new leadership development programme changes behaviour?",
        type: "mc",
        opts: [
          "Survey with 2000 participants measuring overall satisfaction",
          "Qualitative interviews exploring how participants applied learning and contextual factors affecting application",
          "Analysis of training attendance records only",
          "Comparison of pre/post test scores on leadership knowledge"
        ],
        answer: 1,
        explanation: "Understanding mechanisms requires exploration of how and why change occurs, not just whether it does. Qualitative research (interviews, focus groups) is superior for exploring causal mechanisms, barriers to application, and contextual factors affecting transfer."
      },
      {
        q: "True or False: Publication bias in HR research means published studies are likely to show stronger effects than the true population effect.",
        type: "tf",
        answer: true,
        explanation: "Publication bias occurs because studies with positive, significant findings are more likely to be published than null findings. This distorts the literature—published studies systematically overestimate effect sizes. Meta-analysis attempts to correct for this."
      },
      {
        q: "Purcell et al. (2003) identified that the HR-performance link is strongest when which condition is met?",
        type: "mc",
        opts: [
          "HR policies are identical across all departments",
          "Employees understand how their individual efforts connect to organisational outcomes",
          "HR operates with a separate budget from business units",
          "Policies are delivered through centralised rather than line manager implementation"
        ],
        answer: 1,
        explanation: "Purcell's extensive research shows that employees must see the \"line of sight\"—understanding how their performance contributes to organisation goals and how HR practices support this connection. Without this understanding, even strong HR practices fail to translate to performance."
      },
      {
        q: "Which of the following represents a threat to the INTERNAL validity of a study evaluating a new performance management system?",
        type: "mc",
        opts: [
          "Small sample size limiting generalisability to other organisations",
          "Participants improving their performance because they know they're being studied (Hawthorne effect)",
          "Different industries responding differently to the intervention",
          "Results not being representative of the full population"
        ],
        answer: 1,
        explanation: "Internal validity concerns whether the intervention (not other factors) caused the observed change. The Hawthorne effect threatens internal validity by introducing an alternative explanation (awareness of study) for results. Sample size and representativeness affect external validity, not internal."
      },
      {
        q: "True or False: A meta-analysis combines qualitative case studies with quantitative studies in equal proportions to determine overall research findings.",
        type: "tf",
        answer: false,
        explanation: "Meta-analysis is a quantitative technique combining numerical data from multiple quantitative studies to estimate overall effect size and identify moderators. Qualitative research requires meta-synthesis (different methodology). They are not combined equally in standard meta-analysis."
      },
      {
        q: "Which research paradigm is MOST appropriate for exploring how employees interpret and respond to a new HR policy change?",
        type: "mc",
        opts: [
          "Experimental design with random assignment",
          "Large-scale survey collecting numerical data from 1000+ participants",
          "Interpretive qualitative approach using interviews or ethnography",
          "Longitudinal tracking of the same 50 people over 5 years"
        ],
        answer: 2,
        explanation: "Understanding interpretation and meaning requires qualitative methods that capture employee perspectives, values, and sense-making processes. Interviews and ethnographic observation reveal how policies are understood and what factors drive acceptance or resistance."
      },
      {
        q: "True or False: According to Kirkpatrick's evaluation model, measuring Level 3 (behaviour change) is sufficient to conclude that training delivered business impact.",
        type: "tf",
        answer: false,
        explanation: "Kirkpatrick's four levels progress from Reaction (satisfaction) to Learning (knowledge) to Behaviour (application) to Results (business impact). Behaviour change is necessary but not sufficient for impact—application in the job setting must connect to organisational outcomes (Level 4)."
      },
      {
        q: "Which of the following would be classified as a MEDIATING variable in evaluating how mentoring affects retention?",
        type: "mc",
        opts: [
          "Years of organisational tenure (affects who is mentored)",
          "Improved career clarity and sense of belonging (explains HOW mentoring affects retention)",
          "Organisational size (context affecting both mentoring and retention)",
          "Mentee's job title"
        ],
        answer: 1,
        explanation: "A mediating variable explains the mechanism through which an independent variable (mentoring) affects a dependent variable (retention). Career clarity and belonging are psychological outcomes that explain why mentoring improves retention—they are the pathway of influence."
      },
      {
        q: "True or False: A study showing correlation between leadership training and subsequent team performance proves that the training CAUSED the performance improvement.",
        type: "tf",
        answer: false,
        explanation: "Correlation does not imply causation. Confounding variables (e.g., high-performing leaders self-select for training, talented teams attract better leaders, economic conditions improved both) could explain the relationship. Causal claims require experimental or strong quasi-experimental designs with controls for alternatives."
      }
    ],
    scenarios: [
      {
        title: "Evaluating a Recruitment Process Redesign",
        context: "Your organisation is piloting a new recruitment process designed to improve both candidate experience and quality of hire. You need to evaluate whether it works. The pilot runs in one department for 6 months; the rest of the organisation uses the standard process.",
        choices: [
          {
            text: "Survey pilot participants post-hire about their experience; if scores are high, declare the process a success",
            outcome: "Positive candidate feedback is encouraging but insufficient evidence. You don't have performance data, cost data, or comparison with standard process. Cannot distinguish positive experience from actual hire quality. May roll out based on insufficient evidence.",
            quality: "poor",
            points: 5
          },
          {
            text: "Compare pilot department (new process) with standard department on: candidate experience, quality of hires (performance ratings at 6 months), retention, time-to-hire, cost. Use statistical analysis to determine whether differences are significant or due to chance.",
            outcome: "Comprehensive evidence emerges showing pilot delivers 15% better retention and 0.3-point higher performance ratings with 20% longer time-to-hire. Cost is 8% higher due to more thorough assessment. Data informs roll-out decision based on trade-offs, not assumptions.",
            quality: "good",
            points: 30
          },
          {
            text: "Interview a sample of pilot participants and standard process hires about their experience; gather qualitative insights about process strengths and weaknesses",
            outcome: "Rich data about experience, satisfaction, and perceived fairness emerges. However, limited by sample size to detect real differences or to quantify impact. Useful for improvement but insufficient for roll-out decision without quantitative validation.",
            quality: "okay",
            points: 15
          }
        ]
      },
      {
        title: "Applying Research to a Performance Problem",
        context: "Senior leadership reports that productivity has declined 8% despite no staffing changes. They want to implement a new incentive system (bonus programme) based on industry best practice. However, exit interviews suggest employees are demoralised due to restructuring and lack of clarity about career development. You have limited budget for solutions.",
        choices: [
          {
            text: "Recommend the bonus programme as proposed; it's evidence-based best practice that should motivate productivity",
            outcome: "Programme is implemented at significant cost. Initial productivity shows 2% improvement from novelty effect, but by month 4 reverts to current levels. Meanwhile, employees remain demoralised about development paths. Budget is exhausted on incentives rather than root cause.",
            quality: "poor",
            points: 5
          },
          {
            text: "Before implementing solutions, conduct diagnostic research: exit interview analysis to understand demoralisation, survey current employees on productivity barriers, focus groups exploring what would improve motivation. Use research evidence on motivation (intrinsic vs. extrinsic factors). Design targeted intervention addressing actual drivers.",
            outcome: "Research reveals demoralisation is 70% about lack of development clarity, 20% about workload, 10% about compensation. Focused intervention: clarify career paths, redistribute workload, small recognition programme. Costs 40% less than bonus programme. Productivity recovers 6% within 3 months. Engagement improves significantly.",
            quality: "good",
            points: 30
          },
          {
            text: "Implement a hybrid approach: 50% of budget to new incentive system, 50% to career development workshops without diagnostic research",
            outcome: "Some improvement from both interventions but neither fully targeted. Incentives help those motivated by money; development workshops help those seeking growth. However, unclear which intervention drives improvement. Budget not optimally allocated. Results moderate.",
            quality: "okay",
            points: 15
          }
        ]
      }
    ]
  },

  "5CO03": {
    code: "5CO03",
    name: "Employee Voice & Inclusion",
    desc: "Strategic frameworks for employee voice, participation, and inclusion; managing diversity; handling discrimination and harassment; and building psychologically inclusive cultures.",
    icon: "👥",
    color: "#66bb6a",
    gradient: "linear-gradient(135deg, #66bb6a, #a5d6a7)",
    questions: [
      {
        q: "Which of the following BEST represents psychological safety in Edmondson's (2018) framework?",
        type: "mc",
        opts: [
          "Absence of all interpersonal conflict in the workplace",
          "Belief that you can take interpersonal risks without fear of negative consequences",
          "Agreement with all organisational decisions and policies",
          "Formal protection against dismissal"
        ],
        answer: 1,
        explanation: "Psychological safety is the shared belief that you can speak up with ideas, questions, concerns, or mistakes without fear of embarrassment, retribution, or punishment. It enables voice and learning but doesn't require universal agreement—people can disagree safely."
      },
      {
        q: "True or False: Research by Katzenbach and Katzenbach suggests that diversity of demographic characteristics automatically improves team performance.",
        type: "tf",
        answer: false,
        explanation: "Demographic diversity can increase cognitive diversity and perspective-taking—factors that improve decision-making—but only when psychological safety and inclusive norms enable participation. Without these conditions, diverse teams may perform worse than homogeneous teams due to in-group bias and silence."
      },
      {
        q: "Which model of inclusion best describes the idea that people contribute most fully when they can bring their authentic selves to work?",
        type: "mc",
        opts: [
          "Integration-and-learning perspective",
          "Assimilation perspective",
          "Segregation perspective",
          "Melting pot perspective"
        ],
        answer: 0,
        explanation: "The integration-and-learning perspective (Thomas and Ely, 1996) posits that organisations benefit when diverse people are authentically included—able to bring their full selves and perspectives. This differs from assimilation (conform to dominant culture) or segregation models."
      },
      {
        q: "True or False: According to employment law, an employer can require all employees to adopt the same communication style and way of working, even if this disadvantages employees from certain demographic groups.",
        type: "tf",
        answer: false,
        explanation: "Workplace adjustments may be legally required to accommodate protected characteristics (disability, religion, etc.). Policies that appear neutral but disproportionately disadvantage protected groups may constitute indirect discrimination. Flexibility is often both good practice and legal requirement."
      },
      {
        q: "Which of the following is NOT a typical mechanism through which employee voice impacts organisational performance (according to research)?",
        type: "mc",
        opts: [
          "Improved decision-making through diverse information and perspectives",
          "Increased intrinsic motivation through autonomy and influence",
          "Better implementation of decisions when employees have been heard",
          "Guaranteed elimination of all dissent and conflict in the organisation"
        ],
        answer: 3,
        explanation: "Voice does not eliminate conflict—it may surface it. The value of voice is that it improves decision quality, increases engagement and commitment, and enables better implementation through understanding. Conflict is often necessary and healthy; voice makes it productive rather than hidden."
      },
      {
        q: "Hirschman's (1970) theory proposes three responses to dissatisfaction: voice, exit, and loyalty. Which of these represents staying in the organisation without raising concerns?",
        type: "mc",
        opts: [
          "Voice",
          "Exit",
          "Loyalty",
          "Apathy"
        ],
        answer: 2,
        explanation: "Loyalty is remaining committed and accepting problems in hope of improvement or due to organisational attachment—without necessarily voicing concerns. Organisations need voice (raising issues) not just loyalty (acceptance). Voice + loyalty = engagement; loyalty without voice = passivity."
      },
      {
        q: "True or False: Microaggressions—small, subtle discriminatory comments—have been shown to have minimal cumulative impact on employee wellbeing compared to overt discrimination.",
        type: "tf",
        answer: false,
        explanation: "Research (Sue et al., 2007) documents that microaggressions, through cumulative exposure, significantly damage psychological wellbeing, sense of belonging, and engagement. The pattern of subtle slights can be more psychologically damaging than single overt incidents."
      },
      {
        q: "Which of the following best describes \"tokenism\" in diversity contexts?",
        type: "mc",
        opts: [
          "Hiring one person from an underrepresented group to demonstrate diversity without meaningful inclusion",
          "Providing equal opportunities to all applicants",
          "Creating development programmes specifically for underrepresented groups",
          "Using merit-based selection processes"
        ],
        answer: 0,
        explanation: "Tokenism is hiring or promotion of members of underrepresented groups for symbolic purposes without creating genuinely inclusive environment or culture. Tokens often experience heightened visibility, stereotyping, and pressure. True diversity requires both representation and genuine inclusion."
      }
    ]
  },

  "5HR01": {
    code: "5HR01",
    name: "Conflict & Employment Relations",
    desc: "Frameworks for managing conflict, negotiation, employment law essentials, and union relations in complex organisational contexts.",
    icon: "⚖️",
    color: "#ff9800",
    gradient: "linear-gradient(135deg, #ff9800, #ffb74d)",
    questions: [
      {
        q: "According to Thomas and Kilmann, which conflict mode involves high assertiveness and low cooperativeness?",
        type: "mc",
        opts: [
          "Avoiding",
          "Competing",
          "Compromising",
          "Collaborating"
        ],
        answer: 1,
        explanation: "Competing is high assertiveness (pursuing your goals) and low cooperativeness (not considering others). It's appropriate for urgent decisions or defending important principles but risks damaging relationships and creative problem-solving."
      },
      {
        q: "True or False: The UK Employment Rights Act 1996 requires an employer to provide a reason for dismissal within 7 days of termination.",
        type: "tf",
        answer: false,
        explanation: "Employees must request written reasons; employers then have 14 days to provide. For unfair dismissal claims, the burden is on the employer to prove the reason was fair and the process was fair. Unfair dismissal law doesn't require specific notice period for providing reasons."
      },
      {
        q: "Which of the following is NOT protected by UK discrimination law under the Equality Act 2010?",
        type: "mc",
        opts: [
          "Age",
          "Sexual orientation",
          "Political beliefs",
          "Disability"
        ],
        answer: 2,
        explanation: "The nine protected characteristics are: age, disability, gender reassignment, marriage/civil partnership, pregnancy/maternity, race, religion/belief, sex, and sexual orientation. Political beliefs are not a protected characteristic."
      },
      {
        q: "In interest-based negotiation, which of the following is an appropriate opening move?",
        type: "mc",
        opts: [
          "Make a very ambitious opening offer expecting to be challenged down",
          "Ask clarifying questions about the other side's underlying interests and concerns",
          "Hold firm to your position, communicating resolve",
          "Propose compromise splitting the difference between positions"
        ],
        answer: 1,
        explanation: "Interest-based (integrative) negotiation begins by understanding underlying interests, not positions. Questions revealing what matters, why it matters, and what would satisfy each side open problem-solving space. This contrasts with positional bargaining."
      }
    ]
  },

  "5HR02": {
    code: "5HR02",
    name: "Talent Strategy & Succession",
    desc: "Strategic approaches to talent acquisition, development, retention, succession planning, and building organisational capability for future needs.",
    icon: "🎯",
    color: "#5c6bc0",
    gradient: "linear-gradient(135deg, #5c6bc0, #9fa8da)",
    questions: [
      {
        q: "Which of the following best describes a 'critical role' in succession planning?",
        type: "mc",
        opts: [
          "The highest-paid positions in the organisation",
          "Roles whose vacancy would significantly impact business continuity or strategy execution",
          "Senior management positions only",
          "The most difficult positions to fill"
        ],
        answer: 1,
        explanation: "Critical roles are those where vacancy creates material business risk through loss of key knowledge, disruption of critical processes, or inability to execute strategy. This may include technical experts, relationship holders, and senior leaders—not just senior positions."
      },
      {
        q: "True or False: Research on high-potentials shows that those identified early and given accelerated development consistently outperform those developed in standard career paths.",
        type: "tf",
        answer: false,
        explanation: "High-potential identification is subject to bias and self-fulfilling prophecy. Some high-potentials thrive with development; others resent elite labelling or develop arrogance. Conversely, some standard-pathway employees become exceptional leaders. Development matters more than labelling."
      }
    ]
  },

  "5HR03": {
    code: "5HR03",
    name: "Reward Strategy & Pay",
    desc: "Strategic reward design, pay equity, performance incentives, benefits, and building reward systems that attract, motivate, and retain talent.",
    icon: "💰",
    color: "#26a69a",
    gradient: "linear-gradient(135deg, #26a69a, #80cbc4)",
    questions: [
      {
        q: "Which of the following best describes equal pay for work of equal value under the Equality Act 2010?",
        type: "mc",
        opts: [
          "Men and women must be paid identical salaries regardless of role",
          "Pay must be equal only for jobs with identical titles",
          "Different roles must be paid equally if they require equivalent skill, effort, and responsibility",
          "Equal pay applies only to roles in the same department"
        ],
        answer: 2,
        explanation: "Equal pay law (UK and EU) requires equal pay for work of equal value—roles may have different titles/duties but if they demand comparable skill, effort, and responsibility, pay must be equivalent. Job evaluation is key to defending pay structures."
      },
      {
        q: "True or False: Performance-related pay consistently increases motivation and productivity according to research evidence.",
        type: "tf",
        answer: false,
        explanation: "Research by Pink (2009) and others shows performance pay can undermine intrinsic motivation for complex tasks requiring creativity and problem-solving. It works for simple, repetitive tasks but for knowledge work, autonomy, mastery, and purpose typically drive performance more than pay-for-performance schemes."
      }
    ]
  }
};
