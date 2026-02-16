document.addEventListener('DOMContentLoaded', function () {
    initRiskAssessment();
    initThreatTicker();
    initHamburger();
    initCounters();
    initTerminal();
    initParticles();
    initReveal();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                const nav = document.getElementById('nav-links');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
});

/* --- 1. Navigation --- */
function initHamburger() {
    var btn = document.getElementById('hamburger');
    var nav = document.getElementById('nav-links');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
}

/* --- 2. Counters (Stats) --- */
function initCounters() {
    var stats = document.querySelectorAll('.stat-number');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) {
                var target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(function(s) { observer.observe(s); });
}

function animateValue(el, start, end, duration) {
    var startTs = null;
    function step(ts) {
        if (!startTs) startTs = ts;
        var progress = Math.min((ts - startTs) / duration, 1);
        var ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = new Intl.NumberFormat('en-US').format(Math.floor(ease * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/* --- 3. Terminal Animation --- */
function initTerminal() {
    var termBody = document.getElementById('terminal-body');
    if (!termBody) return;

    var lines = [
        "> nmap -sV -p- target.corp.internal",
        "Starting Nmap 7.94 ( https://nmap.org )",
        "Nmap scan report for target.corp.internal (10.10.45.12)",
        "Host is up (0.0023s latency).",
        "PORT     STATE SERVICE    VERSION",
        "22/tcp   open  ssh        OpenSSH 8.2p1",
        "80/tcp   open  http       nginx 1.18.0",
        "443/tcp  open  ssl/http   nginx 1.18.0",
        "8080/tcp open  http-proxy HAProxy 2.0.13",
        "",
        "> hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.45.12 ssh",
        "[DATA] Attacking ssh://10.10.45.12:22/",
        "[22][ssh] host: 10.10.45.12   login: admin   password: password123",
        "[STATUS] 1 valid password found",
        "",
        "> ssh admin@10.10.45.12",
        "Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-150-generic x86_64)",
        "$ whoami",
        "root",
        "$ cat /etc/shadow",
        "root:$6$hK3...:19123:0:99999:7:::",
        "[!] Critical Asset Compromised.",
        "Generating Report..."
    ];

    var lineIndex = 0;
    var charIndex = 0;
    var currentLine = "";
    var isTyping = true;

    function typeWriter() {
        if (lineIndex >= lines.length) {
            setTimeout(function() {
                termBody.innerHTML = "";
                lineIndex = 0;
                typeWriter();
            }, 5000);
            return;
        }

        var fullLine = lines[lineIndex];
        
        // Fast print for output, slow type for commands
        var isCommand = fullLine.startsWith(">") || fullLine.startsWith("$");
        var speed = isCommand ? (50 + Math.random() * 50) : 5; 

        if (charIndex < fullLine.length) {
            currentLine += fullLine.charAt(charIndex);
            // Re-render all lines so far plus current progress
            var previousContent = lines.slice(0, lineIndex).join("\n");
            termBody.textContent = previousContent + (previousContent ? "\n" : "") + currentLine + "█";
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Line finished
            charIndex = 0;
            currentLine = "";
            lineIndex++;
            termBody.textContent = lines.slice(0, lineIndex).join("\n");
            setTimeout(typeWriter, isCommand ? 600 : 100);
        }
        termBody.scrollTop = termBody.scrollHeight;
    }

    typeWriter();
}

/* --- 4. Particle Network --- */
function initParticles() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    
    var particles = [];
    var particleCount = 60;
    var connectionDistance = 150;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    
    for (var i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.fillStyle = 'rgba(239, 68, 68, 0.5)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Connect
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var dx = p.x - p2.x;
                var dy = p.y - p2.y;
                var dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < connectionDistance) {
                    ctx.strokeStyle = 'rgba(239, 68, 68, ' + (1 - dist/connectionDistance) * 0.2 + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/* --- 5. Reveal Animation --- */
function initReveal() {
    var sections = document.querySelectorAll('.reveal');
    if (!sections.length) return;
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(function(s) {
        observer.observe(s);
    });
}

/* --- 6. Threat Ticker --- */
function initThreatTicker() {
    var tickerContent = document.getElementById('ticker-content');
    if (!tickerContent) return;
    
    var CISA_KEV_URL = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';
    var fallbackThreats = [
        { id: 'CVE-2024-3094', severity: 'CRITICAL', desc: 'XZ Utils Supply Chain Attack - Remote Code Execution' },
        { id: 'CVE-2024-21413', severity: 'CRITICAL', desc: 'Microsoft Outlook Moniker Link RCE Vulnerability' },
        { id: 'CVE-2023-4863', severity: 'HIGH', desc: 'Libwebp Heap Buffer Overflow Affecting Major Browsers' },
        { id: 'ACTOR-VOLT-TYPHOON', severity: 'CRITICAL', desc: 'Nation-state actor targeting US critical infrastructure' },
        { id: 'CVE-2024-001', severity: 'MEDIUM', desc: 'Cloud Provider API Rate Limiting Bypass' },
        { id: 'CVE-2024-23897', severity: 'CRITICAL', desc: 'Jenkins Arbitrary File Read leading to RCE' },
        { id: 'CVE-2024-3400', severity: 'CRITICAL', desc: 'Palo Alto Networks PAN-OS Command Injection' },
        { id: 'APT29', severity: 'HIGH', desc: 'Midnight Blizzard campaigns targeting cloud tenants' },
        { id: 'CVE-2023-23397', severity: 'CRITICAL', desc: 'Microsoft Outlook NTLM Relay Elevation of Privilege' },
        { id: 'CVE-2023-38831', severity: 'HIGH', desc: 'WinRAR Remote Code Execution via Self-Extracting Archives' }
    ];

    function updateTickerUI(items) {
        var baseHtml = items.map(function (item) {
            var cls = item.severity === 'CRITICAL' ? 'severity-critical' : item.severity === 'HIGH' ? 'severity-high' : 'severity-medium';
            return '<span class="ticker-item"><span class="' + cls + '">[' + item.severity + '] ' + item.id + '</span>: ' + item.desc + '</span>';
        }).join('');
        tickerContent.innerHTML = baseHtml + baseHtml + baseHtml; // Triplicate for loop
    }

    fetch(CISA_KEV_URL)
        .then(res => res.json())
        .then(data => {
            if (data && data.vulnerabilities) {
                var items = data.vulnerabilities.slice(0, 10).map(v => ({
                    id: v.cveID,
                    severity: 'CRITICAL',
                    desc: v.vulnerabilityName
                }));
                updateTickerUI(items);
            } else throw new Error();
        })
        .catch(() => updateTickerUI(fallbackThreats));
}

/* --- 6. Risk Calculator Logic (PRESERVED) --- */
var INDUSTRY_DATA = {
    healthcare: { cpr: 408, label: 'Healthcare', regBase: 1.15 },
    finance:    { cpr: 266, label: 'Finance / Banking', regBase: 1.10 },
    tech:       { cpr: 192, label: 'Technology / SaaS', regBase: 1.00 },
    retail:     { cpr: 169, label: 'Retail / E-Commerce', regBase: 1.00 },
    energy:     { cpr: 237, label: 'Energy / Infrastructure', regBase: 1.08 },
    other:      { cpr: 165, label: 'General Business', regBase: 1.00 }
};

var EMPLOYEE_SCALE = {
    'small':      { factor: 1.25, investLow: 15000,   investHigh: 30000,   label: '1-50' },
    'mid-small':  { factor: 1.10, investLow: 50000,   investHigh: 100000,  label: '51-200' },
    'mid':        { factor: 1.00, investLow: 150000,  investHigh: 350000,  label: '201-1,000' },
    'mid-large':  { factor: 0.92, investLow: 400000,  investHigh: 800000,  label: '1,001-5,000' },
    'enterprise': { factor: 0.85, investLow: 1000000, investHigh: 2000000, label: '5,000+' }
};

var POSTURE_FACTORS = {
    'p-ciso':     { savings: 130000,  days: 12,  label: 'Dedicated security team / CISO' },
    'p-ir':       { savings: 1490000, days: 54,  label: 'Tested incident response plan' },
    'p-siem':     { savings: 1760000, days: 108, label: 'Security automation / SIEM' },
    'p-pentest':  { savings: 400000,  days: 30,  label: 'Regular penetration testing' },
    'p-training': { savings: 232000,  days: 15,  label: 'Security awareness training' },
    'p-encrypt':  { savings: 221000,  days: 0,   label: 'Data encryption' },
    'p-mfa':      { savings: 300000,  days: 20,  label: 'Multi-factor authentication' },
    'p-segment':  { savings: 350000,  days: 18,  label: 'Network segmentation' }
};

var REG_MULTIPLIERS = {
    'c-hipaa': 0.15,
    'c-pci':   0.10,
    'c-gdpr':  0.12,
    'c-sox':   0.08,
    'c-cmmc':  0.05
};

var BREACH_DB = {
    healthcare: [
        { company: 'Change Healthcare', year: 2024, summary: 'Ransomware attack via a Citrix remote access portal that lacked multi-factor authentication.', impact: '$872M+ in direct losses. 100 million patient records exposed.', gaps: ['p-mfa', 'p-segment', 'p-ir'] },
        { company: 'Anthem', year: 2015, summary: 'Spear-phishing email gave attackers a foothold. No network segmentation prevented lateral movement to the data warehouse.', impact: '78.8 million records. $115M settlement.', gaps: ['p-training', 'p-segment', 'p-siem'] }
    ],
    finance: [
        { company: 'Equifax', year: 2017, summary: 'Unpatched Apache Struts vulnerability exploited. Attackers moved laterally for 76 days undetected.', impact: '147 million records. $1.4 billion in total costs.', gaps: ['p-pentest', 'p-segment', 'p-siem'] },
        { company: 'Capital One', year: 2019, summary: 'Misconfigured web application firewall allowed SSRF attack. No incident response plan was activated for months.', impact: '106 million records. $190M settlement.', gaps: ['p-pentest', 'p-ir', 'p-siem'] }
    ],
    tech: [
        { company: 'SolarWinds', year: 2020, summary: 'Nation-state supply chain attack injected malicious code into Orion updates. Went undetected for 9+ months.', impact: '18,000 organizations compromised, including U.S. government agencies.', gaps: ['p-siem', 'p-pentest', 'p-segment'] },
        { company: 'LastPass', year: 2022, summary: "Attacker compromised an engineer's home device, then pivoted to cloud storage containing encrypted vault backups.", impact: 'All customer vault data stolen. Catastrophic trust loss.', gaps: ['p-mfa', 'p-segment', 'p-ciso'] }
    ],
    retail: [
        { company: 'Target', year: 2013, summary: "Attackers gained entry through an HVAC vendor's credentials. No network segmentation between vendor access and POS systems.", impact: '110 million records. $292M in total costs.', gaps: ['p-segment', 'p-mfa', 'p-siem'] },
        { company: 'Home Depot', year: 2014, summary: 'Third-party vendor credentials stolen. Attackers deployed custom RAM-scraping malware on POS terminals.', impact: '56 million payment cards. $179M in costs.', gaps: ['p-mfa', 'p-segment', 'p-pentest'] }
    ],
    energy: [
        { company: 'Colonial Pipeline', year: 2021, summary: 'Attackers used a compromised VPN password with no MFA. Ransomware shut down the largest U.S. fuel pipeline.', impact: '$4.4M ransom paid. Nationwide fuel shortage for 6 days.', gaps: ['p-mfa', 'p-ir', 'p-pentest'] },
        { company: 'Norsk Hydro', year: 2019, summary: 'LockerGoga ransomware encrypted production systems. No incident response plan forced the company to manual operations.', impact: '$70M+ in losses. Entire global operation ran on paper for weeks.', gaps: ['p-ir', 'p-siem', 'p-segment'] }
    ],
    other: [
        { company: 'MOVEit / Cl0p', year: 2023, summary: 'Zero-day vulnerability in MOVEit file transfer software exploited at scale before any patch was available.', impact: '2,500+ organizations compromised across every sector.', gaps: ['p-pentest', 'p-siem', 'p-segment'] },
        { company: 'SolarWinds', year: 2020, summary: 'Supply chain attack affected organizations across all industries who used Orion network monitoring.', impact: '18,000+ organizations. Multi-year remediation for many.', gaps: ['p-siem', 'p-pentest', 'p-ir'] }
    ]
};

var TIMELINE_EVENTS = [
    { day: 1,   text: 'Attacker identifies externally exposed service or misconfiguration', ifMissing: 'p-pentest', phase: 'Reconnaissance' },
    { day: 5,   text: 'Phishing campaign launched against employees', ifMissing: 'p-training', phase: 'Initial Access' },
    { day: 8,   text: 'Credentials compromised — no second factor to block unauthorized login', ifMissing: 'p-mfa', phase: 'Initial Access' },
    { day: 14,  text: 'Attacker establishes persistence on compromised endpoint', ifMissing: null, phase: 'Foothold' },
    { day: 30,  text: 'Lateral movement across flat network to high-value targets', ifMissing: 'p-segment', phase: 'Lateral Movement' },
    { day: 47,  text: 'Sensitive data located — stored unencrypted, staging for exfiltration', ifMissing: 'p-encrypt', phase: 'Exfiltration' },
    { day: 90,  text: 'No automated detection triggers — attacker operates freely', ifMissing: 'p-siem', phase: 'Dwell Time' },
    { day: 204, text: 'Breach discovered through external notification or customer complaint', ifMissing: 'p-ir', phase: 'Detection' },
    { day: 241, text: 'Containment efforts begin with no pre-built response playbook', ifMissing: 'p-ir', phase: 'Containment' },
    { day: 277, text: 'Full containment achieved. Regulatory notification clock starts.', ifMissing: null, phase: 'Resolution' }
];

function initRiskAssessment() {
    var form = document.getElementById('risk-form');
    var dashboard = document.getElementById('risk-dashboard');
    if (!form || !dashboard) return;

    var recordInput = document.getElementById('record-count');
    var recordSlider = document.getElementById('record-slider');

    if (recordSlider && recordInput) {
        recordSlider.addEventListener('input', function () { recordInput.value = this.value; });
        recordInput.addEventListener('input', function () {
            var val = parseInt(this.value);
            if (val > 1000000) val = 1000000;
            recordSlider.value = val || 0;
        });
    }

    document.querySelectorAll('.btn-ra-next, .btn-ra-back').forEach(function (btn) {
        btn.addEventListener('click', function () {
            showStep(parseInt(this.getAttribute('data-target')));
        });
    });

    var noneCheck = document.getElementById('c-none');
    var regChecks = document.querySelectorAll('.compliance-options input:not(#c-none)'); // Updated selector
    if (noneCheck) {
        noneCheck.addEventListener('change', function () {
            if (this.checked) regChecks.forEach(function (cb) { cb.checked = false; });
        });
        regChecks.forEach(function (cb) {
            cb.addEventListener('change', function () { if (this.checked) noneCheck.checked = false; });
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('.btn-calculate');
        var btnText = btn.querySelector('.btn-text');
        var originalText = btnText.textContent;
        btnText.textContent = 'ANALYZING...';
        btn.disabled = true;
        setTimeout(function () {
            runAssessment();
            btnText.textContent = originalText;
            btn.disabled = false;
            dashboard.classList.add('active');
            // Hide form to focus on results? Or just scroll
            dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 900);
    });
}

function showStep(num) {
    document.querySelectorAll('.ra-panel').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.ra-step').forEach(function (s) { s.classList.remove('active'); });
    document.getElementById('ra-step-' + num).classList.add('active');
    document.querySelectorAll('.ra-step').forEach(function (s) {
        if (parseInt(s.getAttribute('data-step')) <= num) s.classList.add('active');
    });
}

function runAssessment() {
    var industry = document.getElementById('calc-industry').value;
    var employees = document.getElementById('calc-employees').value;
    var records = parseInt(document.getElementById('record-count').value) || 50000;
    var indData = INDUSTRY_DATA[industry] || INDUSTRY_DATA.other;
    var empData = EMPLOYEE_SCALE[employees] || EMPLOYEE_SCALE.mid;

    var postureState = {};
    var postureOn = 0;
    var postureTotal = Object.keys(POSTURE_FACTORS).length;
    Object.keys(POSTURE_FACTORS).forEach(function (id) {
        var el = document.getElementById(id);
        postureState[id] = el ? el.checked : false;
        if (postureState[id]) postureOn++;
    });

    var regMultiplier = 1.0;
    Object.keys(REG_MULTIPLIERS).forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.checked) regMultiplier += REG_MULTIPLIERS[id];
    });

    var baseCost = records * indData.cpr * empData.factor;
    var unmitigated = Math.round(baseCost * regMultiplier * indData.regBase);

    var totalSavings = 0;
    Object.keys(POSTURE_FACTORS).forEach(function (id) {
        if (postureState[id]) {
            var scaled = POSTURE_FACTORS[id].savings * (records / 50000);
            totalSavings += Math.min(scaled, baseCost * 0.25);
        }
    });
    var adjusted = Math.max(Math.round(unmitigated - totalSavings), Math.round(unmitigated * 0.15));

    var baseDays = 277;
    var savedDays = 0;
    Object.keys(POSTURE_FACTORS).forEach(function (id) {
        if (postureState[id]) savedDays += POSTURE_FACTORS[id].days;
    });
    var totalDays = Math.max(baseDays - savedDays, 45);

    animateValue(document.getElementById('cost-unmitigated'), 0, unmitigated, 1200);
    animateValue(document.getElementById('cost-adjusted'), 0, adjusted, 1200);

    var gradeEl = document.getElementById('posture-grade');
    var ratio = adjusted / unmitigated;
    if (ratio > 0.75) {
        gradeEl.textContent = 'CRITICAL RISK';
        gradeEl.className = 'grade-badge grade-critical';
    } else if (ratio > 0.50) {
        gradeEl.textContent = 'HIGH RISK';
        gradeEl.className = 'grade-badge grade-high';
    } else if (ratio > 0.30) {
        gradeEl.textContent = 'MODERATE RISK';
        gradeEl.className = 'grade-badge grade-moderate';
    } else {
        gradeEl.textContent = 'MANAGED RISK';
        gradeEl.className = 'grade-badge grade-managed';
    }

    buildTimeline(postureState, totalDays);
    buildBreachRefs(industry, postureState);
    buildTCO(empData, adjusted);
    buildRecommendations(postureState, records);
}

function buildTimeline(postureState, totalDays) {
    var container = document.getElementById('breach-timeline');
    container.innerHTML = '';
    var dayScale = totalDays / 277;

    TIMELINE_EVENTS.forEach(function (evt, i) {
        if (evt.ifMissing !== null && postureState[evt.ifMissing]) return;
        var scaledDay = Math.max(1, Math.round(evt.day * dayScale));
        var node = document.createElement('div');
        node.className = 'tl-item';
        node.style.animationDelay = (i * 150) + 'ms';
        var gapLabel = evt.ifMissing ? POSTURE_FACTORS[evt.ifMissing].label : null;
        node.innerHTML = '<div class="tl-marker"></div><div class="tl-content">' +
            '<span class="tl-day">DAY ' + scaledDay + '</span>' +
            '<span class="tl-phase">' + evt.phase + '</span>' +
            '<p style="margin:0; font-size:0.9rem; color:#ccc;">' + evt.text + '</p>' +
            (gapLabel ? '<span style="display:block; margin-top:0.5rem; font-size:0.8rem; color:#ef4444;">Missing: ' + gapLabel + '</span>' : '') +
            '</div>';
        container.appendChild(node);
    });
}

function buildBreachRefs(industry, postureState) {
    var container = document.getElementById('breach-references');
    container.innerHTML = '';
    var breaches = BREACH_DB[industry] || BREACH_DB.other;

    breaches.forEach(function (breach) {
        var matchCount = 0;
        var matchedGaps = [];
        breach.gaps.forEach(function (g) {
            if (!postureState[g]) { matchCount++; matchedGaps.push(POSTURE_FACTORS[g].label); }
        });
        
        // Only show relevant breaches
        var card = document.createElement('div');
        card.className = 'dash-card primary';
        card.style.textAlign = 'left';
        card.style.marginBottom = '1rem';
        
        var matchHtml = matchCount > 0
            ? '<div style="margin-top:0.5rem; color:#ef4444; font-size:0.8rem;">⚠ You share ' + matchCount + ' risk factors with this breach.</div>'
            : '<div style="margin-top:0.5rem; color:#22c55e; font-size:0.8rem;">✓ Your controls would likely mitigate this attack.</div>';
            
        card.innerHTML = '<div style="font-weight:700; color:#fff;">' + breach.company + ' <span style="opacity:0.6; font-weight:400;">(' + breach.year + ')</span></div>' +
            '<p style="font-size:0.9rem; margin:0.5rem 0;">' + breach.summary + '</p>' +
            '<div style="font-size:0.8rem; opacity:0.8;">Impact: ' + breach.impact + '</div>' + matchHtml;
        container.appendChild(card);
    });
}

function buildTCO(empData, adjusted) {
    var investMid = Math.round((empData.investLow + empData.investHigh) / 2);
    document.getElementById('tco-invest').textContent = '$' + new Intl.NumberFormat('en-US').format(investMid);
    document.getElementById('tco-breach').textContent = '$' + new Intl.NumberFormat('en-US').format(adjusted);
    var ratioVal = Math.round(adjusted / Math.max(investMid, 1));
    document.getElementById('tco-ratio').innerHTML = 'For every <strong>$1</strong> invested in proactive security, you avoid an estimated <strong>$' + ratioVal + '</strong> in potential breach costs.';
}

function buildRecommendations(postureState, records) {
    var container = document.getElementById('recommendations');
    container.innerHTML = '';
    var recs = [];
    Object.keys(POSTURE_FACTORS).forEach(function (id) {
        if (!postureState[id]) {
            var f = POSTURE_FACTORS[id];
            recs.push({ label: f.label, savings: Math.round(f.savings * (records / 50000)), days: f.days });
        }
    });
    recs.sort(function (a, b) { return b.savings - a.savings; });

    if (recs.length === 0) {
        container.innerHTML = '<div class="rec-card"><div class="rec-body"><strong>Strong posture.</strong> All assessed controls are active. Consider advanced red team operations to validate detection and response under realistic conditions.</div></div>';
        return;
    }
    recs.slice(0, 3).forEach(function (rec, i) {
        var card = document.createElement('div');
        card.className = 'rec-card';
        card.innerHTML = '<span class="rec-rank">' + (i + 1) + '</span><div class="rec-body"><strong>' + rec.label + '</strong><p style="margin:0; font-size:0.9rem;">Potential impact reduction: <span style="color:#22c55e">$' + new Intl.NumberFormat('en-US').format(rec.savings) + '</span></p></div>';
        container.appendChild(card);
    });
}
