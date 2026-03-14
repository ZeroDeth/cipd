export const WAR_ROOM_CASES = [
  {
    id: "case-001",
    title: "TechFlow Transformation: Post-Acquisition Culture Clash",
    icon: "🚀",
    brief: "<p><strong>Context:</strong> TechFlow, a 120-person innovative fintech startup known for flat hierarchy, rapid experimentation, and autonomous decision-making, has been acquired by LegacyBank, a 5,000-person traditional financial institution with hierarchical structure, risk-averse culture, and process-heavy decision-making.</p><p><strong>The Challenge:</strong> Day 1 post-acquisition, TechFlow leadership learns that all decisions require sign-off from LegacyBank committees; innovation proposals face 6-month approval timelines; engineering teams must follow strict security protocols preventing rapid experimentation; compensation has been standardised to LegacyBank grids (eliminating TechFlow's generous equity packages).</p><p><strong>The Crisis:</strong> Within 3 months, 40% of TechFlow's top engineers have resigned to rebuild the company independently or join competitors. Product roadmap is stalled awaiting approvals. Customer delivery timelines have doubled. The £80M acquisition value is evaporating.</p><p><strong>Your Role:</strong> You are the Chief HR Officer responsible for cultural integration. You must simultaneously: (1) preserve TechFlow's innovation capability (the reason for acquisition), (2) integrate governance and compliance standards necessary for the regulated financial environment, (3) prevent further talent exodus, (4) reconcile fundamentally different working paradigms.</p><p><strong>Stakeholder Pressures:</strong> TechFlow leadership demands operational autonomy; LegacyBank board demands compliance and cultural alignment; employees are frustrated and disengaged; customers are losing confidence in delivery timelines.</p>",
    dimensions: ["Legal Compliance", "Employee Engagement", "Business Impact", "Ethical Practice", "Strategic Alignment"],
    phases: [
      {
        title: "Phase 1: Emergency Stabilisation & Diagnosis",
        question: "The acquisition is at crisis point with talent exodus and operational breakdown. What is your first move to stabilise the situation and understand what is actually happening versus what should happen?",
        options: [
          {
            text: "Implement immediate \"integration task force\" with equal LegacyBank and TechFlow representation. Commission rapid 2-week audit: What are TechFlow employees' core concerns? What LegacyBank governance is genuinely required vs. over-applied? Where can autonomy be preserved?",
            scores: { legal: 8, engagement: 9, business: 8, ethics: 8, strategy: 9 },
            feedback: "Excellent. Diagnostic phase is critical. Involvement of both sides builds credibility and surface real constraints vs. perceived constraints. The rapid timeline signals urgency. This approach buys time and information before making irreversible decisions."
          },
          {
            text: "Mandate TechFlow adopt LegacyBank policies and structure completely. Communicate clearly: \"You are now part of LegacyBank. Our way is the way.\" Offer relocation bonus for those staying.",
            scores: { legal: 7, engagement: 2, business: 2, ethics: 3, strategy: 2 },
            feedback: "Compliance is achieved in the short term but at massive cost. Talent exodus accelerates; those staying resent the mandate. You destroy the innovation capability that was the acquisition target. This is a strategic failure masquerading as cultural discipline."
          },
          {
            text: "Give TechFlow complete operational autonomy: \"Operate as you did before; we won't interfere.\" Meanwhile, quietly ensure compliance is managed at governance level without TechFlow involvement.",
            scores: { legal: 3, engagement: 8, business: 6, ethics: 3, strategy: 3 },
            feedback: "Employee engagement improves and talent exodus pauses, but you've created a compliance time bomb. Financial regulations require operational compliance, not just governance. When regulators inspect TechFlow operations, violations emerge. Legal and strategic risks are severe."
          },
          {
            text: "Wait 6 months for \"organic\" cultural integration; assume people will adapt over time; continue with current integration policies while monitoring attrition",
            scores: { legal: 4, engagement: 2, business: 2, ethics: 4, strategy: 2 },
            feedback: "Passive approach delays necessary decisions. Attrition continues; momentum is lost. By month 6, the best and brightest have left; culture integration is actually impossible because you've lost the people who could bridge cultures."
          }
        ]
      },
      {
        title: "Phase 2: Design Hybrid Operating Model",
        question: "Your audit has revealed: TechFlow needs faster decision cycles to maintain innovation; LegacyBank truly requires regulatory compliance and financial controls; both cultures have merit for different purposes. How do you design a hybrid model that achieves both innovation AND compliance?",
        options: [
          {
            text: "Create two-track decision model: (1) Product/innovation decisions: TechFlow retains rapid experimentation model with post-hoc compliance review. (2) Financial/customer data decisions: Full LegacyBank governance applies. (3) Cultural bridge: Cross-company integration team helps translate between cultures. Define explicitly which decisions follow which path.",
            scores: { legal: 8, engagement: 8, business: 9, ethics: 8, strategy: 9 },
            feedback: "Sophisticated. You're preserving innovation autonomy where it matters while protecting compliance where required. Explicit decision paths reduce ambiguity. Cross-cultural translation team is key. This requires genuine change from BOTH sides, not compromise from one."
          },
          {
            text: "Create a single unified governance process that is \"faster than LegacyBank but more rigorous than TechFlow.\" Apply it to all decisions. This creates consistency and fairness.",
            scores: { legal: 7, engagement: 5, business: 6, ethics: 7, strategy: 6 },
            feedback: "Consistency is valuable but this is a compromise that may dissatisfy everyone. \"Faster than LegacyBank\" may still feel slow to TechFlow. \"More rigorous than TechFlow\" may feel bureaucratic. You get the worst of both if the process is poorly designed. However, if well-executed, this can work through clear, transparent processes."
          },
          {
            text: "Establish that TechFlow operates as a separate subsidiary with its own governance; LegacyBank maintains regulatory oversight but does not interfere operationally. Two separate cultures coexist.",
            scores: { legal: 7, engagement: 9, business: 7, ethics: 6, strategy: 5 },
            feedback: "Preserves innovation and employee engagement but misses synergy opportunity. You're managing two cultures rather than integrating them. Longer-term, this creates coordination challenges and loses the strategic benefit of the acquisition (combining innovation and financial strength)."
          },
          {
            text: "Blend the cultures slowly over 18 months: Year 1 = TechFlow autonomy; Year 2 = gradual integration; Year 3 = full integration. This allows organic adaptation.",
            scores: { legal: 4, engagement: 6, business: 4, ethics: 5, strategy: 3 },
            feedback: "Slow timeline allows people to adjust but creates prolonged ambiguity. Talent continues to leave during the uncertainty. By year 2, the decision to integrate fully will face resistance. Delays are problematic when compliance is genuinely at risk."
          }
        ]
      },
      {
        title: "Phase 3: Managing Compensation & Equity Disparity",
        question: "TechFlow employees had generous equity packages (startup potential upside); LegacyBank has lower base pay with pension. Post-acquisition, equity is converted to cash or restricted shares. Compensation disparity creates resentment: equivalent roles between TechFlow and LegacyBank have 20-30% pay difference. How do you address this?",
        options: [
          {
            text: "Conduct job evaluation of equivalent roles across both organisations. Where TechFlow roles are paid less despite equivalent responsibilities, provide one-time catch-up payment (e.g., £15K) plus adjusted baseline going forward. Communicate the rationale: \"Equity packages were startup compensation structure; now we're aligning to market rates for equivalent roles.\"",
            scores: { legal: 8, engagement: 8, business: 7, ethics: 9, strategy: 8 },
            feedback: "Fair and transparent. One-time catch-up acknowledges past disparity without creating ongoing pay inflation. Going forward consistency prevents resentment. Communication of rationale helps people understand this isn't favouritism. Cost is moderate and justified."
          },
          {
            text: "Equalise all compensation immediately to the higher rate (TechFlow level). State: \"We value TechFlow talent; this is our commitment to integration.\"",
            scores: { legal: 7, engagement: 9, business: 6, ethics: 7, strategy: 5 },
            feedback: "Dramatic gesture showing commitment. However, cost is enormous (likely £3-5M across the organisation). LegacyBank employees perceive unfairness (being paid less than acquired company). Creates resentment. This is emotionally good but financially problematic."
          },
          {
            text: "Maintain current compensation structure; state \"pay reflects market rates for roles.\" Do not address disparity.",
            scores: { legal: 6, engagement: 2, business: 3, ethics: 3, strategy: 2 },
            feedback: "Ignoring the disparity maintains the status quo but signals to TechFlow people: \"Your contributions aren't valued as highly as LegacyBank equivalents.\" Talent exodus continues. This is economically tidy but strategically costly."
          },
          {
            text: "Create new \"acquisition integration premium\" for all TechFlow employees: 15% salary increase for 3 years to offset equity loss and show commitment. After 3 years, people transition to standard LegacyBank pay grids.",
            scores: { legal: 7, engagement: 7, business: 6, ethics: 7, strategy: 6 },
            feedback: "Acknowledges the loss and buys time for integration. However, after year 3, when premium ends, resentment may resurface. Time-limited solutions can work if phased transition is clear and employees feel genuinely integrated by year 3."
          }
        ]
      },
      {
        title: "Phase 4: Embedding Innovation in LegacyBank Culture",
        question: "Your hybrid operating model is working. Talent exodus has stabilised; some TechFlow initiatives are delivering value. However, the larger challenge emerges: LegacyBank organisation (including middle management) resists TechFlow's innovation approach as \"too risky.\" Compliance teams slow product releases with extensive reviews. The board questions whether TechFlow innovation is \"compatible with our culture.\" How do you embed innovation broadly without creating parallel cultures indefinitely?",
        options: [
          {
            text: "Launch enterprise-wide \"Innovation Academy\" led by TechFlow leaders. Train 100+ LegacyBank managers in rapid experimentation, fail-forward mindset, agile decision-making. Create innovation \"safe spaces\" where LegacyBank teams can experiment with TechFlow approaches. Celebrate early wins. Gradually shift cultural norms toward innovation.",
            scores: { legal: 7, engagement: 8, business: 8, ethics: 8, strategy: 9 },
            feedback: "Excellent. You're not imposing TechFlow culture but teaching LegacyBank people the skills and mindset. Safe spaces allow experimentation. Celebrating wins shifts cultural norms gradually. This is true integration—teaching, not mandating. Timeline is 18-24 months to embed."
          },
          {
            text: "Announce mandate: \"All business units will adopt TechFlow innovation practices. We are transforming to an innovation culture.\" Provide training; measure compliance; discipline non-compliance.",
            scores: { legal: 6, engagement: 3, business: 4, ethics: 4, strategy: 3 },
            feedback: "Mandate creates compliance but not genuine culture change. People go through motions of \"innovation\" without internalising it. Resistance remains. This is cultural forcing, which typically fails."
          },
          {
            text: "Maintain separate innovation unit within TechFlow; keep LegacyBank operating in traditional mode; use TechFlow innovations to improve LegacyBank products but don't change LegacyBank culture. Accept dualism.",
            scores: { legal: 7, engagement: 7, business: 6, ethics: 6, strategy: 5 },
            feedback: "Pragmatic and sustains both cultures without conflict. However, you miss the opportunity to truly integrate and make LegacyBank more innovative. Dualism can persist long-term but limits the full strategic benefit of acquisition (combining innovation and financial strength)."
          },
          {
            text: "Partner with executive coaching firms to change senior LegacyBank leadership mindset around innovation. If leaders embrace innovation, it cascades.",
            scores: { legal: 6, engagement: 5, business: 6, ethics: 6, strategy: 6 },
            feedback: "Targeting leadership is wise but not sufficient alone. Structural changes (incentives, decision processes, safe spaces) are also needed. Coaching without structural support creates frustration—people learn to value innovation but systems still block it."
          }
        ]
      }
    ]
  },

  {
    id: "case-002",
    title: "GreenCare NHS Trust: Aging Workforce, Funding Crisis, Union Tensions",
    icon: "🏥",
    brief: "<p><strong>Context:</strong> GreenCare is a 2,500-person NHS Trust providing mental health and social care services across a region. The workforce is aging: 45% are over 50; 12% are eligible for retirement within 2 years. Funding has been reduced 15% over 5 years. Service demand is increasing due to rising mental health needs in the population.</p><p><strong>The Pressures:</strong> (1) <strong>Workforce aging:</strong> Loss of experienced practitioners combined with recruitment challenges in mental health (difficult, low-pay roles). (2) <strong>Funding constraints:</strong> Reduced budget for recruitment, training, and retention initiatives. Limited resources for competitive pay. (3) <strong>Service demand:</strong> More people seeking care; fewer staff to provide it; existing staff are stretched. (4) <strong>Union tension:</strong> Staff union is pushing for pay increases to match private sector; management says budget doesn't allow; pay freeze is in place. (5) <strong>Burnout crisis:</strong> Staff morale is low; sickness absence is rising (12% vs. 6% pre-crisis); turnover is increasing among younger staff (35-45-year-olds leaving for less demanding roles).</p><p><strong>Your Role:</strong> You are the Director of HR for GreenCare. You must navigate simultaneous crises: aging workforce transition, funding constraints, union relations, and service quality under pressure. Unlike private sector, you cannot simply increase pay; health service has fixed budgets. You must find creative retention, engagement, and succession solutions within severe financial constraints.</p><p><strong>Unique Complexity:</strong> This is public sector healthcare. Your employees are motivated by mission (helping people) but are exhausted by resource constraints. Money alone won't solve the problem (it's not available anyway), but resource constraints and burnout are driving departures.</p>",
    dimensions: ["Legal Compliance", "Employee Engagement", "Business Impact", "Ethical Practice", "Strategic Alignment"],
    phases: [
      {
        title: "Phase 1: Understand the Real Crisis",
        question: "Aging workforce data shows 12% retirement-eligible within 2 years, but data also shows many over-50s are staying even when eligible (pension requirements mean working longer is necessary). Union is demanding pay increase; leadership sees this as unaffordable. However, exit interview data suggests pay is not the #1 reason people leave. What is the actual crisis and how should you diagnose it?",
        options: [
          {
            text: "Commission comprehensive diagnostic: (1) Detailed exit interviews exploring WHY people leave (is it pay, workload, career development, values misalignment?). (2) Stay interviews with high-performers: What keeps them? What would make them leave? (3) Demographic analysis: Who is retiring when? Who are the flight risks (age, tenure, role)? (4) Workload/burnout analysis: How does current staffing impact work intensity?",
            scores: { legal: 8, engagement: 8, business: 9, ethics: 9, strategy: 9 },
            feedback: "Excellent. Data-driven approach reveals actual drivers of departure, not assumed drivers. Exit data is often different from what leadership assumes. You might find: people leave due to burnout (solvable through workload rebalancing), lack of career development (solvable through training), or feeling undervalued (solvable through recognition). This diagnosis guides cost-effective solutions."
          },
          {
            text: "Assume pay is the issue; prepare business case for pay increases. Even if budget is tight, argue that retention investment should be prioritised.",
            scores: { legal: 6, engagement: 5, business: 3, ethics: 5, strategy: 3 },
            feedback: "If pay isn't actually the problem, this solution misallocates scarce resources. Public sector budgets are zero-sum; money spent on pay increases is money not spent on other retention levers. You're treating the symptom (union demands pay) not the disease (departures driven by other factors)."
          },
          {
            text: "Conduct brief pulse survey asking: \"On scale 1-10, how would you rate your job security, workload, career development, compensation, values alignment, management support?\" Use scores to identify which factors correlate with departure risk.",
            scores: { legal: 7, engagement: 7, business: 7, ethics: 7, strategy: 7 },
            feedback: "Good. Survey data is faster than comprehensive interviews and identifies multiple factors. However, survey alone may miss depth—why does someone rate workload as 6? Is it volume, intensity, support? Exit interviews provide richer understanding. Combine survey with targeted interviews for strongest diagnosis."
          },
          {
            text: "Address union demands directly: Negotiate creative compensation (flexible benefits, professional development budgets, flexible hours) that acknowledges staff concerns while respecting budget constraints.",
            scores: { legal: 7, engagement: 6, business: 6, ethics: 7, strategy: 6 },
            feedback: "Creative non-monetary compensation is valuable and realistic for public sector. However, this is a response to union demands, not a diagnosis of actual problems. If workload or career development is the real issue, addressing compensation (even creatively) misses the point. Do diagnosis first, then design response."
          }
        ]
      },
      {
        title: "Phase 2: Succession Planning With Limited Budget",
        question: "Diagnostic reveals: people are leaving due to (1) overwhelming workload and burnout (sickness absence increasing, staff working unpaid overtime), (2) limited career development opportunity (mental health practitioners want progression paths but none exist due to budget), (3) feeling undervalued despite important mission. Pay is secondary concern. Over 2 years, you will lose 8 experienced senior practitioners to retirement. How do you plan succession without significant budget increase?",
        options: [
          {
            text: "Implement zero-cost/low-cost succession strategies: (1) Identify 3-year development plans for mid-career staff moving toward senior roles (structured mentoring from retiring practitioners, stretch assignments, external training budget reallocation). (2) Create formal \"practitioner and specialist tracks\"—career paths not requiring management role. (3) Workload rebalancing: redistribute work to reduce burnout; use efficiency gains to create development time. (4) Recognition programme: celebrate impact and contribution (no cost).",
            scores: { legal: 8, engagement: 9, business: 8, ethics: 9, strategy: 9 },
            feedback: "Excellent. You're using the real solutions to the actual problems: career paths, mentoring, workload rebalancing. These are largely cost-neutral (reallocation rather than addition) and directly address the diagnosed drivers. Succession is built proactively rather than reactively recruiting when people leave."
          },
          {
            text: "Accept that without budget increase, you cannot retain senior practitioners. Plan for their departure; focus on recruitment and onboarding of replacements. Budget for external recruitment costs.",
            scores: { legal: 5, engagement: 2, business: 2, ethics: 3, strategy: 2 },
            feedback: "Defeatist approach misses what you can do without budget. Recruitment of experienced mental health practitioners is very difficult in NHS; recruitment timeline is long. Losing 8 experienced people and backfilling with external hires is expensive and risky. Proactive retention of existing talent is far better strategy."
          },
          {
            text: "Request emergency budget increase for \"retention and succession.\" Prepare business case showing cost of turnover (recruitment, training, service disruption) vs. investment in development and workload management.",
            scores: { legal: 7, engagement: 7, business: 7, ethics: 8, strategy: 7 },
            feedback: "Good approach. Making visible the true cost of turnover can justify investment. However, NHS budgets are constrained at system level; additional funding may not be available. Prepare this case but also have Plan B that works within current budget. The zero-cost/low-cost strategies above are that Plan B."
          },
          {
            text: "Implement mandatory mentoring pairing retiring practitioners with junior staff for 1-2 years before retirement. Require knowledge transfer documentation. Ensure successors are ready.",
            scores: { legal: 6, engagement: 7, business: 7, ethics: 7, strategy: 7 },
            feedback: "Good tactic but incomplete strategy. Mentoring and knowledge transfer are crucial but must be paired with career path clarity and workload relief. Without those, junior staff won't be attracted to senior roles. Mentoring is one element of comprehensive succession, not sufficient alone."
          }
        ]
      }
    ]
  },

  {
    id: "case-003",
    title: "Pinnacle Retail: Equal Pay Crisis, Turnover, Digital Transformation",
    icon: "🛒",
    brief: "<p><strong>Context:</strong> Pinnacle Retail is a 800-person fashion retail company with headquarters (200 people, mostly white-collar roles) and 25 store locations (600 store staff, largely frontline and supervisory roles). The company is family-owned, now in its third generation of leadership.</p><p><strong>The Crises (Simultaneous):</strong></p><p><strong>Crisis 1 - Equal Pay:</strong> A group of current and former store managers (87% women) have filed equal pay claim alleging systematic underpayment compared to warehouse/logistics managers (70% men). Analysis shows store managers earn £28,000 average while logistics managers earn £34,000 average. Store manager roles are complex (customer service, staff management, sales targets, inventory, health/safety) but have historically been lower-valued. No documented job evaluation exists.</p><p><strong>Crisis 2 - Turnover:</strong> Frontline store staff turnover is 45% annually (industry average is 30%). Exit interviews show: wages are inadequate (£10.50/hour, minimum wage+), no career progression visible, workload is high, scheduling is unpredictable (difficulty planning personal life). Many young staff see this as temporary job, not career. Store supervisors are burned out managing constant turnover.</p><p><strong>Crisis 3 - Digital Transformation:</strong> Leadership wants to transform to digital-first retail (online ordering, in-store pickup, virtual styling). This requires: new technical skills in stores (customer service tech, online integration), reduced floor space for inventory (more online fulfillment), different staffing model. But current workforce is aging, largely without digital skills. Retraining is needed alongside transformation.</p><p><strong>Your Role:</strong> You are the Chief People Officer newly hired from outside the organisation. You must simultaneously address: pay equity claim (legal/reputational), turnover crisis (business continuity), and workforce transformation (strategic). These are not sequential—they overlap and must be addressed together.</p><p><strong>Stakeholder Complexity:</strong> Family ownership means decisions are personal (they care about employees but grew up with \"retail staff are transactional\"). Headquarters resists acknowledging pay issues. Stores are understaffed and burning out. Leadership is afraid of legal costs and bad publicity. Frontline staff are exhausted and cynical about change.</p>",
    dimensions: ["Legal Compliance", "Employee Engagement", "Business Impact", "Ethical Practice", "Strategic Alignment"],
    phases: [
      {
        title: "Phase 1: Simultaneous Crisis Triage",
        question: "You have three crises occurring simultaneously with interconnected implications: equal pay claim (legal/reputation), turnover (operational/morale), digital transformation (strategic/capability). Which do you address first and how do you prevent them from being separate responses that contradict each other?",
        options: [
          {
            text: "Treat as integrated system rather than separate crises. Acknowledge all three explicitly to leadership: \"We have immediate legal/reputational risk (equal pay), immediate operational risk (turnover destroying stores), and strategic capability gap (digital transformation requires skills we lack). These are connected: pay equity + career paths + transformation investment are part of one solution.\" Propose comprehensive intervention addressing all three.",
            scores: { legal: 8, engagement: 9, business: 9, ethics: 9, strategy: 10 },
            feedback: "Excellent systems thinking. You're reframing from \"three separate problems to manage\" to \"one systemic opportunity.\" Equal pay settlement combined with career pathways and digital training investment addresses all three: fixes legal issue, improves retention, builds capability for transformation. Cost-effective because investments serve multiple purposes."
          },
          {
            text: "Prioritise equal pay claim (highest legal risk). Conduct urgent job evaluation, identify underpayment, offer settlement to claimants. Handle this separately from turnover and transformation issues.",
            scores: { legal: 7, engagement: 4, business: 4, ethics: 6, strategy: 3 },
            feedback: "You fix the immediate legal crisis but miss opportunity to solve the root problem. Settling equal pay without addressing systemic pay issues (store staff wages are minimum+) and without addressing career progression means turnover continues and transformation is still difficult. You're treating symptom, not disease."
          },
          {
            text: "Focus on turnover first: increase store staff wages, improve scheduling flexibility, create visible career progression. This is cheapest/fastest to implement and shows you care about frontline. Then address equal pay and transformation.",
            scores: { legal: 5, engagement: 8, business: 7, ethics: 7, strategy: 5 },
            feedback: "Good employee focus but leaves legal claim unresolved (gets worse over time). Equal pay settlement cost is unpredictable if not proactively managed. Transformation is delayed while you handle current crisis. Sequential approach means you're always in crisis mode."
          },
          {
            text: "Begin digital transformation first: invest in technology, retrain staff on digital skills, redesign stores. This is the strategic priority and sets up for future success.",
            scores: { legal: 3, engagement: 3, business: 4, ethics: 3, strategy: 5 },
            feedback: "Strategic thinking but terrible timing. You're launching transformation while people are exhausted from high turnover, while equal pay crisis is unresolved, while morale is low. Transformation without addressing engagement/legal issues will fail. You need stable platform to transform from."
          }
        ]
      }
    ]
  }
];
