const dashboardData = {
  all: {
    summary: "Showing the full recruitment portfolio across all functions and regions.",
    coreMetrics: [
      { name: "Time to offer", value: "21 days", delta: "-3 days", tone: "positive", detail: "Median time from approved requisition to verbal offer across all roles." },
      { name: "Time to start", value: "37 days", delta: "+2 days", tone: "warning", detail: "Lag is mainly driven by specialist notice periods and compliance lead time." },
      { name: "Acceptance rate", value: "89%", delta: "+6 pts", tone: "positive", detail: "Offer proposition remains competitive in priority hiring segments." },
      { name: "First-year attrition", value: "11%", delta: "-2 pts", tone: "positive", detail: "Retention improvement suggests stronger matching and onboarding quality." },
      { name: "Cost per starter", value: "£4.8k", delta: "-8%", tone: "positive", detail: "Lower agency dependence is improving efficiency without sacrificing quality." },
      { name: "Stage effectiveness", value: "74%", delta: "+5 pts", tone: "positive", detail: "Interview panels are making faster, clearer decisions with less recycle." }
    ],
    trendData: [
      { month: "Oct", offer: 28, start: 43 },
      { month: "Nov", offer: 26, start: 41 },
      { month: "Dec", offer: 24, start: 40 },
      { month: "Jan", offer: 23, start: 39 },
      { month: "Feb", offer: 22, start: 38 },
      { month: "Mar", offer: 21, start: 37 }
    ],
    strategicMetrics: [
      { title: "Hiring risk", emphasis: "high", copy: "Can we defend hiring decisions in an era of AI, compliance pressure and evolving regulation?", progress: 58 },
      { title: "Time to productivity", emphasis: "medium", copy: "How quickly do new hires create measurable value once they join the business?", progress: 64 },
      { title: "Quality of hire", emphasis: "good", copy: "Track real performance and output, not only retention, to understand hiring quality.", progress: 76 },
      { title: "Revenue per hire", emphasis: "medium", copy: "Especially important for commercial and specialist roles where individual contribution is visible.", progress: 61 },
      { title: "Internal mobility rate", emphasis: "good", copy: "Are we maximising the talent we already have before buying capability from outside?", progress: 72 },
      { title: "Skills coverage vs strategy", emphasis: "high", copy: "Do current hiring outcomes actually close the capability gaps required for strategy execution?", progress: 54 }
    ],
    funnelStages: [
      { title: "Application to shortlist", status: "good", copy: "42% of applicants meet baseline quality thresholds after screening.", progress: 42 },
      { title: "Shortlist to first interview", status: "good", copy: "88% conversion shows recruiters are presenting genuinely viable candidates.", progress: 88 },
      { title: "Interview to final stage", status: "medium", copy: "61% conversion suggests some role briefs still need sharper calibration.", progress: 61 },
      { title: "Final stage to offer", status: "good", copy: "73% indicates strong decision confidence in later stages.", progress: 73 },
      { title: "Offer to start", status: "medium", copy: "81% remains healthy, but specialist roles still see more drop-off than target.", progress: 81 }
    ],
    impactMetrics: [
      { name: "Critical role success", value: "84%", detail: "Priority roles filled within target window and retained through 12 months." },
      { name: "Leadership pipeline strength", value: "67%", detail: "Ready-now and ready-soon bench for manager and director roles." },
      { name: "Skills gaps closed", value: "19", detail: "High-priority capability gaps materially reduced this quarter." },
      { name: "Value created per hire", value: "£182k", detail: "Estimated 12-month contribution for revenue-linked and strategic hires." }
    ]
  },
  Commercial: {
    summary: "Commercial hiring is strongest on value-per-hire but still exposed to offer competition in specialist sales roles.",
    coreMetrics: [
      { name: "Time to offer", value: "18 days", delta: "-4 days", tone: "positive", detail: "Shortened recruiter and hiring-manager turnaround in revenue roles." },
      { name: "Time to start", value: "34 days", delta: "+1 day", tone: "warning", detail: "Offer acceptance is strong, but notice periods remain a factor." },
      { name: "Acceptance rate", value: "86%", delta: "+4 pts", tone: "positive", detail: "Comp packages are landing well in mid-market and enterprise sales." },
      { name: "First-year attrition", value: "13%", delta: "-1 pt", tone: "warning", detail: "Still slightly elevated in customer success compared with target." },
      { name: "Cost per starter", value: "£5.1k", delta: "-6%", tone: "positive", detail: "Improved direct sourcing is softening agency cost pressure." },
      { name: "Stage effectiveness", value: "77%", delta: "+6 pts", tone: "positive", detail: "Calibration around quota experience is reducing late-stage fallout." }
    ],
    trendData: [
      { month: "Oct", offer: 25, start: 39 },
      { month: "Nov", offer: 22, start: 37 },
      { month: "Dec", offer: 21, start: 36 },
      { month: "Jan", offer: 20, start: 35 },
      { month: "Feb", offer: 19, start: 34 },
      { month: "Mar", offer: 18, start: 34 }
    ],
    strategicMetrics: [
      { title: "Hiring risk", emphasis: "medium", copy: "Decision auditability is improving, but AI-led assessment guardrails need more depth.", progress: 65 },
      { title: "Time to productivity", emphasis: "medium", copy: "Ramp time for enterprise sellers remains the biggest commercial productivity lever.", progress: 59 },
      { title: "Quality of hire", emphasis: "good", copy: "Revenue attainment data is beginning to strengthen true quality-of-hire visibility.", progress: 78 },
      { title: "Revenue per hire", emphasis: "good", copy: "Commercial hiring shows the clearest link between talent decisions and business value.", progress: 82 },
      { title: "Internal mobility rate", emphasis: "medium", copy: "Customer success to account management pathways are underused.", progress: 57 },
      { title: "Skills coverage vs strategy", emphasis: "medium", copy: "Gaps remain in consultative selling and strategic account expansion capability.", progress: 63 }
    ],
    funnelStages: [
      { title: "Application to shortlist", status: "medium", copy: "Candidate volume is strong, but quality remains uneven across channels.", progress: 38 },
      { title: "Shortlist to first interview", status: "good", copy: "Recruiters are surfacing high-intent candidates with relevant sector depth.", progress: 84 },
      { title: "Interview to final stage", status: "medium", copy: "Leadership interviews still diverge on profile calibration.", progress: 58 },
      { title: "Final stage to offer", status: "good", copy: "Compelling scorecards are improving decision confidence.", progress: 76 },
      { title: "Offer to start", status: "medium", copy: "Competitive counter-offers remain the biggest leak point.", progress: 79 }
    ],
    impactMetrics: [
      { name: "Critical role success", value: "88%", detail: "Commercial priority roles are being filled inside the target planning window." },
      { name: "Leadership pipeline strength", value: "62%", detail: "Bench for regional sales leadership is improving but still thin." },
      { name: "Skills gaps closed", value: "8", detail: "Strong progress in enterprise sales and solution consulting capability." },
      { name: "Value created per hire", value: "£244k", detail: "Highest projected 12-month contribution of any function." }
    ]
  },
  Technology: {
    summary: "Technology hiring is facing the sharpest time-to-productivity challenge, especially in platform and data roles.",
    coreMetrics: [
      { name: "Time to offer", value: "24 days", delta: "-2 days", tone: "positive", detail: "Panels are moving faster, but technical calibration still adds drag." },
      { name: "Time to start", value: "43 days", delta: "+3 days", tone: "negative", detail: "Long notice periods and relocation complexity affect engineering roles." },
      { name: "Acceptance rate", value: "84%", delta: "+2 pts", tone: "warning", detail: "Good but still vulnerable when top candidates receive multiple offers." },
      { name: "First-year attrition", value: "9%", delta: "-3 pts", tone: "positive", detail: "Retention is improving as role clarity and onboarding mature." },
      { name: "Cost per starter", value: "£6.2k", delta: "-5%", tone: "positive", detail: "Specialist sourcing remains expensive but trending in the right direction." },
      { name: "Stage effectiveness", value: "69%", delta: "+4 pts", tone: "positive", detail: "Technical task quality is reducing wasted interview loops." }
    ],
    trendData: [
      { month: "Oct", offer: 31, start: 48 },
      { month: "Nov", offer: 29, start: 47 },
      { month: "Dec", offer: 28, start: 46 },
      { month: "Jan", offer: 26, start: 45 },
      { month: "Feb", offer: 25, start: 44 },
      { month: "Mar", offer: 24, start: 43 }
    ],
    strategicMetrics: [
      { title: "Hiring risk", emphasis: "high", copy: "Assessment fairness, AI usage and technical interview consistency need stronger governance.", progress: 52 },
      { title: "Time to productivity", emphasis: "high", copy: "Ramp for platform engineers and data specialists is longer than the business needs.", progress: 49 },
      { title: "Quality of hire", emphasis: "good", copy: "Performance data from the first six months is becoming more usable and reliable.", progress: 74 },
      { title: "Revenue per hire", emphasis: "medium", copy: "Value linkage is indirect, so contribution needs proxy measures beyond output volume.", progress: 56 },
      { title: "Internal mobility rate", emphasis: "good", copy: "Engineering manager pathways and internal reskilling are creating healthier movement.", progress: 71 },
      { title: "Skills coverage vs strategy", emphasis: "high", copy: "Data engineering, AI enablement and platform resilience remain the largest strategic gaps.", progress: 47 }
    ],
    funnelStages: [
      { title: "Application to shortlist", status: "good", copy: "Talent density is improving as sourcing becomes more targeted.", progress: 46 },
      { title: "Shortlist to first interview", status: "good", copy: "Most shortlisted candidates are still viable after deeper technical review.", progress: 86 },
      { title: "Interview to final stage", status: "medium", copy: "Some panels continue to over-assess, increasing cycle time.", progress: 57 },
      { title: "Final stage to offer", status: "medium", copy: "Hiring managers still hesitate on leveling for harder-to-find specialists.", progress: 68 },
      { title: "Offer to start", status: "medium", copy: "Lengthy notice periods are the core bottleneck.", progress: 76 }
    ],
    impactMetrics: [
      { name: "Critical role success", value: "79%", detail: "Tech priority roles are moving, but not yet at the pace required by roadmap commitments." },
      { name: "Leadership pipeline strength", value: "69%", detail: "Stronger succession picture in engineering management than in architecture." },
      { name: "Skills gaps closed", value: "6", detail: "Platform, security and data gaps narrowed this quarter." },
      { name: "Value created per hire", value: "£163k", detail: "Projected value is healthy, but slower time-to-value is holding the result back." }
    ]
  }
};

const candidates = [
  { name: "Aisha Khan", role: "Senior Account Executive", function: "Commercial", region: "UK", priority: "Critical", stage: "Final interview", skills: ["Enterprise sales", "MedTech", "Forecasting"], note: "High-value commercial candidate with strong final-stage momentum and excellent stakeholder scores." },
  { name: "Tom Becker", role: "Platform Engineer", function: "Technology", region: "EMEA", priority: "Critical", stage: "Offer", skills: ["AWS", "Kubernetes", "Terraform"], note: "Strong technical signal; main risk is extended notice period before start." },
  { name: "Emily Carter", role: "Talent Partner", function: "People", region: "UK", priority: "Growth", stage: "Shortlist", skills: ["Exec hiring", "Employer brand", "Stakeholder management"], note: "Could improve recruiter capability in leadership and specialist hiring." },
  { name: "Marcus Reed", role: "Revenue Operations Manager", function: "Commercial", region: "North America", priority: "Growth", stage: "Assessment", skills: ["Salesforce", "Planning", "Analytics"], note: "Brings systems discipline and scaling experience for commercial operations." },
  { name: "Priya Nair", role: "Data Engineer", function: "Technology", region: "UK", priority: "Critical", stage: "Technical interview", skills: ["Python", "dbt", "Snowflake"], note: "Strong fit against strategic skills gaps linked to data platform roadmap." },
  { name: "Daniel Moore", role: "Operations Lead", function: "Operations", region: "EMEA", priority: "Steady", stage: "Offer", skills: ["Process design", "Vendor management", "Compliance"], note: "Would stabilise operational resilience and improve regional delivery." }
];

const vacancies = [
  { role: "Senior Account Executive", function: "Commercial", region: "UK", priority: "Critical", openDays: 19, pipeline: "Final interviews booked", manager: "Natalie Webb", status: "on-track", note: "2 strong finalists and one likely offer path." },
  { role: "Platform Engineer", function: "Technology", region: "EMEA", priority: "Critical", openDays: 31, pipeline: "Offer out", manager: "Jonas Keller", status: "watch", note: "Candidate intent is good but notice period is long." },
  { role: "Data Engineer", function: "Technology", region: "UK", priority: "Critical", openDays: 27, pipeline: "Technical interviews", manager: "Priya Solanki", status: "watch", note: "Strong slate forming after targeted sourcing push." },
  { role: "Talent Partner", function: "People", region: "UK", priority: "Growth", openDays: 12, pipeline: "Shortlist ready", manager: "Emma Hughes", status: "on-track", note: "Market response is healthy and turnaround is fast." },
  { role: "Revenue Operations Manager", function: "Commercial", region: "North America", priority: "Growth", openDays: 24, pipeline: "Assessment", manager: "Chris Monroe", status: "on-track", note: "Calibration improved after brief reset with stakeholders." },
  { role: "Operations Lead", function: "Operations", region: "EMEA", priority: "Steady", openDays: 38, pipeline: "Offer approval", manager: "Lena Fischer", status: "at-risk", note: "Process is close, but approvals have slipped twice." }
];

const state = {
  function: "all",
  region: "all",
  priority: "all",
  search: ""
};

function getActiveData() {
  return dashboardData[state.function] || dashboardData.all;
}

function renderCoreMetrics(coreMetrics) {
  const container = document.getElementById("core-metrics");
  container.innerHTML = coreMetrics.map((metric) => `
    <article class="metric-tile">
      <div class="metric-top">
        <p class="metric-name">${metric.name}</p>
        <span class="delta ${metric.tone}">${metric.delta}</span>
      </div>
      <p class="metric-value">${metric.value}</p>
      <p class="metric-detail">${metric.detail}</p>
    </article>
  `).join("");
}

function renderTrendChart(trendData) {
  const container = document.getElementById("trend-chart");
  const maxValue = Math.max(...trendData.flatMap((item) => [item.offer, item.start]));
  container.innerHTML = trendData.map((item) => `
    <div class="chart-row">
      <span class="chart-label">${item.month}</span>
      <div>
        <div class="chart-track">
          <div class="chart-bar offer" style="width: ${(item.offer / maxValue) * 100}%"></div>
        </div>
        <div class="chart-track" style="margin-top: 8px;">
          <div class="chart-bar start" style="width: ${(item.start / maxValue) * 100}%"></div>
        </div>
      </div>
      <span class="chart-value">${item.offer}d / ${item.start}d</span>
    </div>
  `).join("");
}

function renderStrategicMetrics(strategicMetrics) {
  const container = document.getElementById("strategic-metrics");
  container.innerHTML = strategicMetrics.map((metric) => `
    <article class="priority-item">
      <div class="priority-header">
        <p class="priority-title">${metric.title}</p>
        <span class="pill ${metric.emphasis}">${metric.emphasis}</span>
      </div>
      <p class="priority-copy">${metric.copy}</p>
      <div class="progress" aria-hidden="true">
        <span style="width: ${metric.progress}%"></span>
      </div>
    </article>
  `).join("");
}

function renderFunnel(funnelStages) {
  const container = document.getElementById("funnel-stages");
  container.innerHTML = funnelStages.map((stage) => `
    <article class="funnel-item">
      <div class="funnel-header">
        <p class="funnel-title">${stage.title}</p>
        <span class="pill ${stage.status}">${stage.progress}%</span>
      </div>
      <p class="funnel-copy">${stage.copy}</p>
      <div class="progress" aria-hidden="true">
        <span style="width: ${stage.progress}%"></span>
      </div>
    </article>
  `).join("");
}

function renderImpactMetrics(impactMetrics) {
  const container = document.getElementById("impact-metrics");
  container.innerHTML = impactMetrics.map((metric) => `
    <article class="impact-tile">
      <div class="impact-top">
        <p class="impact-name">${metric.name}</p>
      </div>
      <p class="impact-value">${metric.value}</p>
      <p class="impact-detail">${metric.detail}</p>
    </article>
  `).join("");
}

function getFilteredCandidates() {
  const query = state.search.trim().toLowerCase();

  return candidates.filter((candidate) => {
    const matchesFunction = state.function === "all" || candidate.function === state.function;
    const matchesRegion = state.region === "all" || candidate.region === state.region;
    const matchesPriority = state.priority === "all" || candidate.priority === state.priority;
    const matchesSearch = !query || [
      candidate.name,
      candidate.role,
      candidate.stage,
      candidate.note,
      ...candidate.skills
    ].some((value) => value.toLowerCase().includes(query));

    return matchesFunction && matchesRegion && matchesPriority && matchesSearch;
  });
}

function renderCandidates() {
  const container = document.getElementById("candidate-list");
  const results = getFilteredCandidates();

  if (!results.length) {
    container.innerHTML = `
      <div class="empty-state">
        No candidates match the current filters. Try widening region, function or search terms.
      </div>
    `;
    return;
  }

  container.innerHTML = results.map((candidate) => `
    <article class="candidate-tile">
      <div class="candidate-top">
        <div>
          <p class="candidate-name">${candidate.name}</p>
          <p class="candidate-role">${candidate.role}</p>
        </div>
        <span class="pill ${candidate.priority === "Critical" ? "high" : candidate.priority === "Growth" ? "medium" : "good"}">${candidate.stage}</span>
      </div>
      <p class="candidate-meta">${candidate.function} • ${candidate.region} • ${candidate.priority} priority</p>
      <div class="candidate-tags">
        ${candidate.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}
      </div>
      <p class="candidate-copy">${candidate.note}</p>
    </article>
  `).join("");
}

function renderVacancies() {
  const container = document.getElementById("vacancy-table-body");
  const rows = vacancies.filter((vacancy) => {
    const matchesFunction = state.function === "all" || vacancy.function === state.function;
    const matchesRegion = state.region === "all" || vacancy.region === state.region;
    const matchesPriority = state.priority === "all" || vacancy.priority === state.priority;
    const query = state.search.trim().toLowerCase();
    const matchesSearch = !query || [
      vacancy.role,
      vacancy.pipeline,
      vacancy.manager,
      vacancy.note
    ].some((value) => value.toLowerCase().includes(query));

    return matchesFunction && matchesRegion && matchesPriority && matchesSearch;
  });

  if (!rows.length) {
    container.innerHTML = `
      <tr>
        <td colspan="7" class="table-meta">No vacancies match the current filters.</td>
      </tr>
    `;
    return;
  }

  container.innerHTML = rows.map((vacancy) => `
    <tr>
      <td>
        <div class="role-cell">
          <span class="role-title">${vacancy.role}</span>
          <span class="role-note">${vacancy.note}</span>
        </div>
      </td>
      <td>${vacancy.function}</td>
      <td>${vacancy.region}</td>
      <td><span class="pill ${vacancy.priority === "Critical" ? "high" : vacancy.priority === "Growth" ? "medium" : "good"}">${vacancy.priority}</span></td>
      <td>${vacancy.openDays}</td>
      <td><span class="status-chip ${vacancy.status}">${vacancy.pipeline}</span></td>
      <td>${vacancy.manager}</td>
    </tr>
  `).join("");
}

function renderFilterSummary(summary) {
  const container = document.getElementById("filter-summary");
  const functionLabel = state.function === "all" ? "All functions" : state.function;
  const regionLabel = state.region === "all" ? "All regions" : state.region;
  const priorityLabel = state.priority === "all" ? "All priorities" : state.priority;
  const resultCount = getFilteredCandidates().length;

  container.textContent = `${summary} Current lens: ${functionLabel}, ${regionLabel}, ${priorityLabel}. ${resultCount} candidate${resultCount === 1 ? "" : "s"} shown.`;
}

function renderDashboard() {
  const activeData = getActiveData();
  renderCoreMetrics(activeData.coreMetrics);
  renderTrendChart(activeData.trendData);
  renderStrategicMetrics(activeData.strategicMetrics);
  renderFunnel(activeData.funnelStages);
  renderImpactMetrics(activeData.impactMetrics);
  renderCandidates();
  renderVacancies();
  renderFilterSummary(activeData.summary);
}

function bindControls() {
  document.getElementById("function-filter").addEventListener("change", (event) => {
    state.function = event.target.value;
    renderDashboard();
  });

  document.getElementById("region-filter").addEventListener("change", (event) => {
    state.region = event.target.value;
    renderDashboard();
  });

  document.getElementById("priority-filter").addEventListener("change", (event) => {
    state.priority = event.target.value;
    renderDashboard();
  });

  document.getElementById("candidate-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderDashboard();
  });
}

bindControls();
renderDashboard();
