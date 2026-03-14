export const CRISES = [
  {
    id: "crisis-001",
    title: "Mass Redundancy Leak",
    module: "5CO01",
    icon: "📰",
    description: "Confidential redundancy plans leak to staff before official announcement. Staff morale collapses. Key talent begins departing. Social media amplifies concern. Leadership credibility is damaged.",
    stages: [
      {
        situation: "Redundancy consultant is seen entering offices. Within 2 hours, rumours spread via WhatsApp: \"Mass redundancies planned, announcement Friday.\" HR receives calls from panicked employees. A department head learns of plans from employee (not leadership). Media received anonymous tip about \"major restructure.\"",
        timeLimit: 20,
        options: [
          {
            text: "Deny rumours publicly; state \"we have no plans for restructuring\" to avoid panic",
            impact: "negative",
            points: 0,
            consequence: "Employees lose trust in leadership. When announcement occurs Friday, credibility is destroyed—employees feel lied to. Speculation intensifies. Key people resign immediately."
          },
          {
            text: "Acknowledge leak; provide transparent, honest communication: \"Rumours are circulating. We are exploring options including potential restructuring. Formal communication will come Tuesday with full details. Between now and then, we cannot discuss specifics but will address all questions when announced.\"",
            impact: "positive",
            points: 20,
            consequence: "Leadership transparency reduces speculation damage. Waiting time is anxious but respected. When formal announcement occurs, people have framework for the information. Some resignation still occurs but not cascading panic."
          },
          {
            text: "Accelerate announcement to Monday morning before media story runs; brief senior leaders only; tell them not to discuss until all-hands meeting",
            impact: "neutral",
            points: 10,
            consequence: "Rushed announcement without adequate time for affected people to prepare, without affected person consultation (required), without emotional support infrastructure in place. Staff feel rushed and unsupported. Some relief that secret is out, but execution issues create additional damage."
          }
        ]
      },
      {
        situation: "Friday all-hands meeting occurs. 35% workforce will be made redundant. The announcement includes: roles affected, timelines (departure over 3 months), financial packages (one week per year of service), and support (outplacement, career counselling). Q&A is heated. Multiple employees ask: \"Why wasn't this handled more confidentially? Why did we learn from WhatsApp?\" \"Are we sure these redundancies are necessary?\" \"Why should we stay for 3 months if we're being laid off?\"",
        timeLimit: 20,
        options: [
          {
            text: "Defend the process: \"We handle redundancy professionally. We followed all procedures. Leaks are unfortunate but do not change the business reality that these changes are necessary.\"",
            impact: "negative",
            points: 0,
            consequence: "Employees feel their legitimate concerns (lack of confidence/trust, poor process, unfairness) are dismissed. Morale collapses further. Staying 3 months feels punitive. Key non-redundant people begin updating CVs. Your organisation's reputation for \"poor people practices\" spreads via departing employees."
          },
          {
            text: "Acknowledge missteps: \"The leak was not managed as we intended. That created unnecessary anxiety. We recognise this added to an already difficult situation. We are committed to supporting you through this transition with full transparency, honest communication, and respect. We welcome your questions and concerns.\"",
            impact: "positive",
            points: 20,
            consequence: "Acknowledgment of misstep rebuilds some trust. Direct communication opens dialogue. While redundancy is still unwelcome, people feel heard and respected. Retention of key non-redundant staff is better; departing employees are less angry; reputation damage is contained."
          },
          {
            text: "Provide additional financial package sweetener (extra redundancy payment) to compensate for the process failure and poor communication",
            impact: "neutral",
            points: 10,
            consequence: "Money helps somewhat but doesn't address underlying issue (lack of trust, feeling disrespected). Employees note organisation \"throws money at problems instead of fixing them.\" Redundant people accept better package. Non-redundant staff feel cost increased without service improvement. The fundamental trust issue is unresolved."
          }
        ]
      },
      {
        situation: "Two weeks post-announcement: 12% of non-redundant staff have already resigned (including 3 critical technical roles). Exit interviews cite \"no confidence in leadership,\" \"don't trust they tell truth,\" \"culture has become terrible.\" Redundant staff are angry in final weeks, doing minimal work. Customer complaints about service quality emerge. Key client conversations become tense. Media publishes story: \"Major Company Exodus: Employees Flee After Botched Restructure.\" Stock price drops 4%.",
        timeLimit: 20,
        options: [
          {
            text: "Implement strict return-to-work requirements; terminate employees not meeting performance expectations; cut costs further to recover stock impact",
            impact: "negative",
            points: 0,
            consequence: "Organisation becomes overtly punitive. Employee departures accelerate. Remaining staff are disengaged, focused on self-protection. Customers lose confidence in organisation's stability. Talent acquisition becomes extremely difficult for 12+ months. Long-term damage exceeds short-term cost savings."
          },
          {
            text: "Immediately begin transparent leadership communication: townhall explaining redundancy necessity, acknowledging communication missteps, committing to rebuilt trust through consistency and honesty. Offer outplacement support to departing staff. Invest in support for staying staff (counselling, extra flexibility). Communicate to customers proactively about transition and commitment to service.",
            impact: "positive",
            points: 20,
            consequence: "Acknowledged misstep and genuine commitment to improvement begin rebuilding trust. Departing staff leave with less animosity; some become reasonable external advocates rather than critics. Staying staff see organisation's commitment to them. Customer communication is reassuring. Reputation recovers over 6-9 months. Future recruitment becomes less difficult."
          },
          {
            text: "CEO publicly apologises for communication failures; announces external HR executive to oversee future people matters; creates employee advisory council to guide decisions",
            impact: "neutral",
            points: 10,
            consequence: "Public apology and structural changes show acknowledgment and commitment. However, departing staff have already left; advisory council is too late. Some trust recovery occurs among remaining staff but damage is already significant. This is appropriate but insufficient given the time lag."
          }
        ]
      }
    ]
  },
  {
    id: "crisis-002",
    title: "Discrimination Complaint & Social Media Storm",
    module: "5CO03",
    icon: "⚖️",
    description: "A formal discrimination complaint is filed alleging gender pay discrimination. Simultaneously, a social media post from current employee details the pay disparity. Story gains traction. Media is interested. Organisation's diversity reputation is at risk.",
    stages: [
      {
        situation: "An employee files formal discrimination complaint alleging systematic gender pay disparity. Legal department receives it Friday afternoon. By Saturday, an anonymous post on social media (likely current employee) details: \"Our organisation pays men £5K more than women in equivalent roles. Female managers earn less than male individual contributors. When women ask about pay, HR says 'it's market rate' without explaining disparity.\" Post gains 10K shares in 24 hours. Journalists contact the organisation asking for comment.",
        timeLimit: 20,
        options: [
          {
            text: "Do not respond publicly; issue internal memo stating \"We do not discuss legal matters or compensation details publicly. Employees should not discuss pay on social media.\" Instruct legal team to defend vigorously against claim.",
            impact: "negative",
            points: 0,
            consequence: "Silence appears to confirm allegations. Social media story grows (\"Company refuses to deny pay discrimination\"). More women come forward with their own stories. Media story runs. Employees see organisation as defensive and dismissive. Recruitment of women becomes significantly harder. Regulatory scrutiny increases."
          },
          {
            text: "Acknowledge the concern immediately and transparently: \"We take this seriously. We are immediately conducting independent job evaluation of pay equity. This will take 2 months. In the interim, we are suspending any pay changes to ensure consistency. We are committed to transparent, fair compensation.\" Communicate regularly through the process.",
            impact: "positive",
            points: 20,
            consequence: "Immediate acknowledgment and action-oriented response builds some confidence. The 2-month review timeline shows commitment. If evaluation confirms disparity, you can implement fair remediation from position of proactive discovery rather than defensive response. If evaluation finds no systematic issue, you can communicate clearly. Either way, transparency reduces speculation damage."
          },
          {
            text: "Publicly challenge the social media post: \"The allegations are false and misleading. Our pay is determined by market rates and individual performance. We will defend ourselves fully. We encourage employees to follow proper channels, not social media, to raise concerns.\"",
            impact: "neutral",
            points: 10,
            consequence: "Defensive posture appears to confirm accusations. Employees see organisation as fighting back against employees rather than addressing concern. More current and former employees share experiences. Regulatory investigation becomes more likely. You're fighting the wrong battle (social media perception) instead of addressing the real issue (pay equity)."
          }
        ]
      },
      {
        situation: "Two weeks into independent job evaluation: Preliminary findings show systematic gender pay gap of average 8% across comparable roles. Female managers earn average £28K vs. male managers £32K. The evaluation confirms the disparity is real, not explained by performance or market rate differences. You must now decide: what is fair remediation?",
        timeLimit: 20,
        options: [
          {
            text: "Immediately increase all female employees' pay to correct the disparity (estimated £2.4M cost). Implement transparent salary bands going forward. Make public commitment to pay equity.",
            impact: "positive",
            points: 20,
            consequence: "Decisive action shows genuine commitment to fairness. Employees see organisation correcting injustice, not litigating it. While cost is significant, legal settlement would likely be higher. Employees feel organisation values fairness over bottom line. Reputation improves. Regulatory scrutiny reduces as organisation self-corrected."
          },
          {
            text: "Settle with the complainant (£15K back pay, 3% going-forward increase), but do not make broad adjustment. Claim the disparity was isolated and person-specific, not systemic.",
            impact: "negative",
            points: 0,
            consequence: "Settlement without broader remediation signals disparity is known and being contained. More discrimination claims follow—you've acknowledged injustice but refused systematic correction. Regulatory investigation continues. Reputation damage persists. Long-term cost (multiple settlements + legal + regulatory fines) exceeds cost of proactive correction."
          },
          {
            text: "Phase correction over 3 years: increase women's pay 2-3% annually until parity. This manages cost but acknowledges disparity will persist for 3 years.",
            impact: "neutral",
            points: 10,
            consequence: "Phased approach manages budget but perpetuates injustice for 3 years. Women continue earning less while waiting for parity. Morale remains damaged. Some women leave during the phasing period (\"can't wait 3 years for fair pay\"). Regulatory scrutiny may deem phasing insufficient. Faster correction is more defensible ethically and legally."
          }
        ]
      }
    ]
  },
  {
    id: "crisis-003",
    title: "Strike Threat Over Pay Dispute",
    module: "5HR01",
    icon: "✊",
    description: "Union representing 60% of workforce is threatening strike action over pay dispute. Demands are 6% increase; management offers 1.5% citing budget constraints. Negotiations are deadlocked. Union has set strike date if agreement is not reached.",
    stages: [
      {
        situation: "Union formally notifies intention to strike in 14 days if 6% pay increase is not agreed. Management's position: \"Budget cannot support 6%. Maximum is 1.5% based on financial performance. This is final.\" Union's position: \"Members have had pay freeze for 3 years. 6% is minimum to restore fairness. Strike is authorised unless this is agreed.\" Media frames as \"Battle Looming Over Worker Pay.\"",
        timeLimit: 20,
        options: [
          {
            text: "Publicly hold firm: \"The union's demands exceed what the business can afford. We will not be forced into uneconomical agreements through strike threats. If they strike, we will operate with available staff and management.\"",
            impact: "negative",
            points: 0,
            consequence: "Confrontational stance guarantees strike. Strike harms service, customers, and public. Workers resent organisation fighting them. After strike ends, returning workers are angry and disengaged for months. Labour relations worsen. Future negotiations become more adversarial. Community/public opinion may side with strikers."
          },
          {
            text: "Request interest-based negotiation: \"Our interest is fair compensation and financial sustainability. Your interest is member financial security. Let's explore: What would meaningfully address your members' financial concerns within our financial reality? Structured pay progression? Professional development budget? Flexible benefits?\" Explore creative solutions beyond base pay.",
            impact: "positive",
            points: 20,
            consequence: "Shifting from positional (6% vs. 1.5%) to interest-based (financial security vs. sustainability) opens problem-solving space. Members might value career development budget more than generic pay increase. Structured pay progression addresses some members' frustration. Creative package may be worth more to members than 6% flat increase. Strike avoided. Relationship preserved. Future negotiation foundation is collaborative not adversarial."
          },
          {
            text: "Offer 3.5% compromise (splitting difference). Frame as commitment to workforce despite financial constraints.",
            impact: "neutral",
            points: 10,
            consequence: "Compromise is politically easier than holding line or exploring creatively. 3.5% costs money but avoids strike. However, members still feel it's insufficient (they asked for 6%) and management still feels over-budget (wanted 1.5%). Neither side is satisfied. Underlying concerns (member financial stress, management budget pressure) are not addressed, only partially masked by compromise. Next negotiation will restart same positional cycle."
          }
        ]
      }
    ]
  }
];
