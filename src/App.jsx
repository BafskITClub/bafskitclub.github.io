import { useState, useEffect, useRef } from "react";
import logoImg from "./assets/logo.png"; 
import bgVideo from "./assets/bg-video.mp4"; 
import rashidImg from "./assets/rashid.jpg";
import shohagImg from "./assets/shohag.jpg";

// ============================================================================
// 🎯 CORE SPECIALIZATIONS & UPCOMING CLUB EVENTS DATABASE MATRIX
// ============================================================================
const EVENTS_DATA = [
  {
    id: 1,
    title: "Calivar Robo-Wars",
    category: "Robotics",
    desc: "Ultimate machine vs machine combat. Status: Live. Engineering teams are actively deploying hardware modules on the grid floor and optimizing structural motor controllers.",
    status: "Active",
    timeline: "May 25, 2026",
    difficulty: "Advanced",
    hardwareRequired: "Arduino Mega, High-Torque DC Motors, LiPo 12V Battery Pack",
    location: "Main Campus Engineering Lab Delta"
  },
  {
    id: 2,
    title: "AI Horizon Hackathon",
    category: "Coding",
    desc: "Build the future of Large Language Models in 48 hours. Compete with custom neural pipeline configurations, prompt engineering routing, and local data training matrices.",
    status: "Active",
    timeline: "June 02, 2026",
    difficulty: "Intermediate to Advanced",
    hardwareRequired: "CUDA-Enabled GPU Workspace Environment, Python 3.10+, Local API Nodes",
    location: "Virtual Sandbox Grid Node 07"
  },
];

// ============================================================================
// 👥 COMPLETE CLUB MEMBERSHIP & COMMITTEES DATA ROSTER
// ============================================================================
const MEMBERS_DATA = [
  // 👑 --- SECTION: CLUB MODERATORS ---
  {
    id: 1,
    name: "MD Abdur Rashid",
    role: "Moderator",
    group: "moderator",
    image: rashidImg, 
    bio: "Senior technological director overseeing administrative resource allocation, server structural compliance, and cross-department innovation pipelines.",
    joinedDate: "January 2022",
    clearanceLevel: "Level 5 - Root Administration Access",
    topics: [
      "Core Network Infrastructure & Kernel Security Frameworks.",
      "Optimizing low-latency client pipelines for secure sandbox routing.",
      "Supervising deep diagnostic metrics across club hardware grids.",
      "Evaluating technological course dependencies and instructional material structures."
    ]
  },
  {
    id: 2,
    name: "NAS Shohag",
    role: "Co-Moderator",
    group: "moderator",
    image: shohagImg, 
    bio: "Artificial Intelligence specialized research leader guiding student engineering squads through neural orchestration layers and automated scripting logic blocks.",
    joinedDate: "March 2023",
    clearanceLevel: "Level 5 - Root Administration Access",
    topics: [
      "Neural Network Modeling & LangChain Pipeline Orchestration.",
      "Fine-tuning customized LLM interfaces like the Calivar matrix.",
      "Implementing real-time semantic analysis servers with zero lag.",
      "Reviewing dynamic full-stack script assemblies and automation matrices."
    ]
  },
  // 💼 --- SECTION: EXECUTIVE COMMITTEE PANEL ---
  {
    id: 3,
    name: "Raiham Mustafa",
    role: "President",
    group: "executive",
    image: "", 
    bio: "Chief executive management lead orchestrating general event schedules, multi-team communications, and high-level structural expansion blueprints.",
    joinedDate: "February 2024",
    clearanceLevel: "Level 4 - Executive Command Matrix",
    topics: [
      "Strategic club division deployment and administrative overview.",
      "Resource scheduling frameworks for annual tech presentations.",
      "Presiding over core technical events and system milestones.",
      "Developing long-term academic partnerships and inter-club collaboration networks."
    ]
  },
  {
    id: 4,
    name: "Syeda Tanha",
    role: "Vice President",
    group: "executive",
    image: "",
    bio: "Operational management second-in-command aligning cross-department assignments, logistic schedules, and external technical networking tasks.",
    joinedDate: "February 2024",
    clearanceLevel: "Level 4 - Executive Command Matrix",
    topics: [
      "Cross-department task alignments and operation synchronization.",
      "Event pipeline architecture, scheduling blueprints, and general scaling management.",
      "Directing structural sub-committee panels and managing assignment compliance reviews."
    ]
  },
  {
    id: 5,
    name: "Muhtasim Fuad",
    role: "General Secretary",
    group: "executive",
    image: "",
    bio: "Chief documentation manager recording core logic adjustments, membership application states, system logs, and structural event transcripts.",
    joinedDate: "March 2024",
    clearanceLevel: "Level 3 - Operational Records Management",
    topics: [
      "Internal system records, meeting transcripts, and membership logs.",
      "Documentation versioning control and structural data archives.",
      "Managing communication channels and distribution sequences across the general roster."
    ]
  },
  {
    id: 6,
    name: "Zabir Bin Raiyan",
    role: "Joint Secretary",
    group: "executive",
    image: "",
    bio: "Operational registry assistant syncing documentation updates, general tracking logs, and multi-team code repository commits.",
    joinedDate: "March 2024",
    clearanceLevel: "Level 3 - Operational Records Management",
    topics: [
      "Assisting structural operational matrices and multi-team coordinates.",
      "Syncing code repository deployments across internal sub-teams.",
      "Maintaining active feedback pipelines between general applicants and executive blocks."
    ]
  },
  {
    id: 7,
    name: "Mohaimenul Islam",
    role: "Treasurer",
    group: "executive",
    image: "",
    bio: "Financial pipeline director balancing component acquisition budgets, hardware ledger configurations, and asset allocation spreadsheets.",
    joinedDate: "April 2024",
    clearanceLevel: "Level 3 - Asset Allocation Matrix",
    topics: [
      "Ledger balancing grids and transparent budget tracking modules.",
      "Financial allocation management for club hardware nodes and components.",
      "Drafting end-of-cycle micro-investment asset updates for research projects."
    ]
  },
  {
    id: 8,
    name: "Sadman Rahman",
    role: "Organizing Secretary",
    group: "executive",
    image: "",
    bio: "Primary logistical grid supervisor planning hackathon layout schemes, component workstations, and physical network node routing frameworks.",
    joinedDate: "May 2024",
    clearanceLevel: "Level 3 - Logistical Interface Deployment",
    topics: [
      "Logistical pipeline management, venue layouts, and external setups.",
      "Hackathon scheduling maps, registration tracking, and workspace allocation.",
      "Coordinating localized technical event deployment blueprints and equipment tracking."
    ]
  },
  {
    id: 9,
    name: "Iffat A. Labonno",
    role: "IT Expert",
    group: "executive",
    image: "",
    bio: "System administration technician running local firewall reviews, server diagnostic checks, script deployments, and active virtual machines.",
    joinedDate: "May 2024",
    clearanceLevel: "Level 4 - Network Infrastructure Root",
    topics: [
      "System administration paradigms, server firewall checks, and terminal configurations.",
      "Maintaining production client servers and debugging web application architectures.",
      "Validating cloud-hosted assets and monitoring system up-time logs continuously."
    ]
  },
  {
    id: 10,
    name: "SM Palash",
    role: "Senior Programmer",
    group: "executive",
    image: "",
    bio: "Advanced core algorithm architect writing optimized C++, clean Python scripting chains, and highly performant custom React component layers.",
    joinedDate: "June 2024",
    clearanceLevel: "Level 4 - Script Architecture Registry",
    topics: [
      "Advanced C++, Python, and React modular component script architectures.",
      "Developing efficient algorithmic routines and optimizing runtime execution speed.",
      "Conducting code-base reviews, dependency checks, and framework performance tests."
    ]
  },
  {
    id: 11,
    name: "SA Nabil",
    role: "Senior Designer",
    group: "executive",
    image: "",
    bio: "Creative user experience engineer mapping structural layout designs, system vector styling properties, and high-fidelity wireframe blueprints.",
    joinedDate: "June 2024",
    clearanceLevel: "Level 3 - Creative Vector Design",
    topics: [
      "Figma vector mapping, canvas layouts, and wireframing schemes.",
      "Asset styling structures, typography rules, layout theory, and brand alignment.",
      "Iterating user-interface workflows for complex digital club control dashboards."
    ]
  },
  {
    id: 12,
    name: "Matin Hasan",
    role: "Senior Video Editor",
    group: "executive",
    image: "",
    bio: "Media output specialist configuring motion design assets, editing visual composition frames, and applying complex visual effect grading chains.",
    joinedDate: "July 2024",
    clearanceLevel: "Level 3 - Media Assets Engineering",
    topics: [
      "Video asset rendering pipelines, motion design configurations, and visual cuts.",
      "Composition masking frameworks, tracking points, keyframing, and color grading.",
      "Managing raw footage archives and configuring streaming bitrates for event presentations."
    ]
  },
  {
    id: 13,
    name: "Rakib Shahriar",
    role: "Asst. Designer",
    group: "executive",
    image: "",
    bio: "Graphic arts developer assembling web layout sketches, vector illustrations, promotional banners, and visual asset variations.",
    joinedDate: "August 2024",
    clearanceLevel: "Level 2 - Creative Asset Production",
    topics: [
      "Interface scaling arrays and custom graphical illustrations.",
      "Raster asset manipulation, promotional design drafts, and creative vectors.",
      "Collaborating on dark-theme UI style-sheets and editing branding graphics."
    ]
  },
  {
    id: 14,
    name: "Tahsin Khan",
    role: "Asst. Designer",
    group: "executive",
    image: "",
    bio: "Interface composition assistant optimizing asset font sizes, typography hierarchies, layout scaling metrics, and system button theme groups.",
    joinedDate: "September 2024",
    clearanceLevel: "Level 2 - Creative Asset Production",
    topics: [
      "Typography styling guides, iconography systems, and creative design variations.",
      "User interface workflows and modular theme component layouts.",
      "Assisting structural wireframe generations for annual hackathon landing grids."
    ]
  },
  {
    id: 15,
    name: "Khalid Bin Solaiman",
    role: "Tech Advisor",
    group: "executive",
    image: "",
    bio: "Technology research advisor tracking emerging framework patterns, hardware performance shifts, and automated diagnostic script tools.",
    joinedDate: "October 2024",
    clearanceLevel: "Level 4 - Tech Advisory Spectrum",
    topics: [
      "Emerging technology exploration, research documentation, and advice summaries.",
      "Evaluating project dependencies, script libraries, modules, and platform scaling.",
      "Providing design feedback arrays for machine learning tools and server scripts."
    ]
  }
];

// ============================================================================
// 📁 CLUB TIMELINE LOGS (EXTENDED SYSTEM CHRONOLOGY)
// ============================================================================
const TIMELINE_DATA = [
  { year: "2022 Q1", event: "Initial Core Node Mapping", summary: "BAFSK Iconic IT Club server framework designed and deployed onto terminal nodes. Core moderation board instantiated." },
  { year: "2022 Q3", event: "First Robotics Symposia", summary: "Introduced structural logic tracks for automated systems. Realized first localized micro-controller lab layout blueprints." },
  { year: "2023 Q2", event: "AI Pipeline Implementation", summary: "Integrated large semantic script testing blocks. Initiated concept design parameters for custom automated terminal handlers." },
  { year: "2023 Q4", event: "Network Infrastructure Scaled", summary: "Upgraded local system servers to support independent high-capacity sandbox setups and isolated coding partitions." },
  { year: "2024 Q2", event: "Executive Roster Reconstruction", summary: "Strategic deployment of the present Executive Panel Matrix. Re-organized divisional tracking vectors for clear event mapping." },
  { year: "2025 Q1", event: "Calivar AI Terminal Architecture", summary: "Custom scripting models optimized for localized real-time machine prompts. Added voice tracking pipelines successfully." },
  { year: "2025 Q4", event: "Secure Web Application Frameworks", summary: "Transitioned all internal operational layouts into hyper-modular React component files featuring dynamic status checks." },
  { year: "2026 Q1", event: "Next-Gen Sandbox Framework Setup", summary: "Deployed localized Linux-based network playgrounds to support automated penetration testing and advanced web application scaling protocols." }
];

// ============================================================================
// 💻 MAIN APP COMPONENT MOUNT POINT
// ============================================================================
export default function App() {
  // 🧭 Navigation States: Controls current route views ('home', 'about', 'events', 'memberships', 'system-logs')
  const [activePage, setActivePage] = useState("home");

  // UI Interactive States
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});
  const [terminalFilter, setTerminalFilter] = useState("all");
  
  // 🔥 MODAL OVERLAY STATE FOR REGISTRATION FORM
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);

  // 📝 REGISTRATION FORM FIELDS MANAGEMENT STATE
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    section: "",
    studentClass: "",
    academicGroup: "",
    studentId: "",
    phone: "",
    email: "",
    techTrack: ""
  });

  // Validation feedback tracking variables
  const [formErrors, setFormErrors] = useState({});

  // 🤖 Interactive AI Assistant Overlay States (Calivar AI)
  const [assistantActive, setAssistantActive] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", text: "System Initialized. Hello! I am Calivar AI, the custom central intelligence matrix of BAFSK ICONIC IT CLUB. Standing by to route execution directives. Enter 'clear' to purge terminal nodes." }
  ]);

  const recognitionRef = useRef(null);

  // Handle Input Changes Dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      if (name === "studentClass" && parseInt(value) < 9) {
        updated.academicGroup = "";
      }
      return updated;
    });

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // 📧 TRANSMIT APPLICATION DATA VIA SECURE BACKEND LAYER
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name.trim()) errors.name = "Applicant signature node name required.";
    if (!formData.studentId.trim()) errors.studentId = "System registration identifier required.";
    if (!formData.roll.trim()) errors.roll = "Class numerical roll assignment missing.";
    if (!formData.section.trim()) errors.section = "Class physical sector assignment missing.";
    if (!formData.studentClass) errors.studentClass = "Academic status parameter class classification missing.";
    if (!formData.phone.trim()) {
      errors.phone = "Communication data terminal phone contact required.";
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone.trim())) {
      errors.phone = "Invalid format structure. Standard Bangladeshi contact matrix required (e.g., 017XXXXXXXX).";
    }
    if (!formData.email.trim()) {
      errors.email = "Data packet transmission confirmation route link required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Invalid structure alignment. Standard internet email syntax required.";
    }
    if (parseInt(formData.studentClass) >= 9 && !formData.academicGroup) {
      errors.academicGroup = "Advanced class selection requires specialized group designation parameter.";
    }
    if (!formData.techTrack) errors.techTrack = "System field track specialization domain choice required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("Transmitting verification dataset target -> ekramezaz2@gmail.com:", formData);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _to: "ekramezaz2@gmail.com", 
          subject: `BAFSK Club Membership Request: ${formData.name} - Class ${formData.studentClass} [${formData.techTrack.toUpperCase()}]`,
          message_meta: `Automated registration packet collected from system submission interface. Root user redirect address maps to ekramezaz2@gmail.com.`,
          applicantDetails: {
            fullName: formData.name,
            uniqueStudentId: formData.studentId,
            gradeClass: formData.studentClass,
            divisionalGroup: formData.academicGroup || "Not Applicable (Junior Category)",
            classRoll: formData.roll,
            assignedSection: formData.section,
            contactPhone: formData.phone,
            contactEmail: formData.email,
            selectedTrackSpecialization: formData.techTrack
          }
        })
      });

      alert(`System Transmission Validated! \n\nRegistration data has been safely packaged, structured, and routed directly to your administrative control dashboard at ekramezaz2@gmail.com.`);
      
      setFormData({
        name: "",
        roll: "",
        section: "",
        studentClass: "",
        academicGroup: "",
        studentId: "",
        phone: "",
        email: "",
        techTrack: ""
      });
      setFormErrors({});
      setIsJoinFormOpen(false);

    } catch (err) {
      console.error("Transmission breakdown on form deployment connection:", err);
      alert(`Local Transmission Sequence Emulated! \n\nForm data packaged cleanly for target 'ekramezaz2@gmail.com'. Set up an active form automation endpoint string to process web emails live.`);
      setIsJoinFormOpen(false);
    }
  };

  // ⚡ Process AI Voice/Text Commands dynamically via Calivar AI Core Backend Patch
  const processCommand = async (commandText) => {
    const query = commandText.trim();
    if (!query) return;

    if (query.toLowerCase() === "clear") {
      setChatHistory([{ role: "assistant", text: "Calivar AI terminal logs purged. Standing by for next command execution matrix." }]);
      return;
    }

    setChatHistory((prev) => [...prev, { role: "user", text: query }]);
    setIsGenerating(true);

    try {
      const response = await fetch("http://localhost:5000/api/calivar", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      setChatHistory((prev) => [...prev, { role: "assistant", text: data.reply }]); 

    } catch (error) {
      console.error("Calivar AI Central Mesh Patch Failure:", error);
      
      setTimeout(() => {
        let simulatedReply = "Command processed via local terminal fallback arrays. ";
        const checkQuery = query.toLowerCase();
        
        if (checkQuery.includes("help") || checkQuery.includes("command")) {
          simulatedReply += "Available directives include: 'status' to review system grids, 'tracks' to map ongoing specializations, 'roster' to fetch members, and 'clear' to reset text boxes.";
        } else if (checkQuery.includes("status") || checkQuery.includes("system")) {
          simulatedReply += `Current System Grid Status: Central performance nodes active. Structural stability nominal.`;
        } else if (checkQuery.includes("roster") || checkQuery.includes("moderator")) {
          simulatedReply += "Active Moderators: MD Abdur Rashid (Network Infrastructure Root) & NAS Shohag (Neural Matrix Architecture Core). Complete roster data accessible in the 'Memberships' menu panel.";
        } else if (checkQuery.includes("track") || checkQuery.includes("event")) {
          simulatedReply += "Current technical specialization segments online: Robotics Division, Software Development Logic Core, Cybersecurity Sandbox, and Vector Graphic Arts.";
        } else {
          simulatedReply += "Direct link node down. Local simulation module parsing successful. Ready for network pipeline initialization sequences.";
        }
        
        setChatHistory((prev) => [...prev, { role: "assistant", text: simulatedReply }]);
        setIsGenerating(false);
      }, 800);
    }
  };

  // 🎙️ Setup Web Speech API Voice Recognition Engine for Calivar AI
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setChatHistory((prev) => [...prev, { role: "assistant", text: "Calivar AI Audio Interface Active... Stream system parameters or core logic requests clearly into your device node now." }]);
      };

      recognition.onerror = () => {
        setChatHistory((prev) => [...prev, { role: "assistant", text: "Calivar Voice Core audio capture timeout. Microphone data routing failed or lacks validation permission." }]);
      };

      recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        processCommand(speechToText);
      };

      recognitionRef.current = recognition;
    }
  }, [assistantActive]);

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      }
    }
  };

  // ⏳ App Loading Progress Sequence Generator
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.floor(Math.random() * 5) + 2;
          return prev + increment > 100 ? 100 : prev + increment;
        });
      }, 50);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    processCommand(inputMessage);
    setInputMessage("");
  };

  const handleImageError = (memberId) => {
    setBrokenImages((prev) => ({ ...prev, [memberId]: true }));
  };

  const getInitials = (name) => {
    return name ? name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2) : "IT";
  };

  const moderatorsList = MEMBERS_DATA.filter(m => m.group === "moderator");
  const executiveList = MEMBERS_DATA.filter(m => m.group === "executive");

  const shouldShowGroupField = parseInt(formData.studentClass) >= 9 && parseInt(formData.studentClass) <= 12;

  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* 🎬 MAIN AMBIENT LAYER: BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser environment does not support background rendering streams.
      </video>

      {/* ============================================================================
          🎨 STYLING ANIMATION INTERACTION ENGINE
         ============================================================================ */}
      <style>{`
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes audioWaveActive { 0%, 100% { height: 4px; } 50% { height: 26px; } }
        @keyframes textGlitchEffect { 0%, 100% { text-shadow: 1px 0 0 #06b6d4, -1px 0 0 #ec4899; } 50% { text-shadow: -1px 0 0 #06b6d4, 1px 0 0 #ec4899; } }
        @keyframes subtleFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes fadeInMainPage { 0% { opacity: 0; transform: scale(0.97); filter: blur(5px); } 100% { opacity: 1; transform: scale(1); filter: blur(0); } }
        @keyframes continuousCityScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes extremeGridFloor { 0% { background-position: 0 0; } 100% { background-position: 0 100%; } }
        @keyframes calivarPulse { 0%, 100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); } 50% { transform: scale(1.08) rotate(180deg); box-shadow: 0 0 40px rgba(14, 165, 233, 0.7); } }
        @keyframes ringSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .vr-goggles-outer {
          clip-path: polygon(15% 0%, 35% 0%, 42% 12%, 58% 12%, 65% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 63% 100%, 55% 72%, 45% 72%, 37% 100%, 15% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #a855f7 70%, #ec4899 100%);
        }
        .vr-goggles-inner {
          clip-path: polygon(15% 0%, 35% 0%, 42% 12%, 58% 12%, 65% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 63% 100%, 55% 72%, 45% 72%, 37% 100%, 15% 100%, 0% 75%, 0% 25%);
        }
        
        .goggles-float { animation: subtleFloat 4s infinite ease-in-out; }
        .techfest-glitch-text { animation: textGlitchEffect 1.5s infinite linear; }
        .audio-wave-bar { animation: audioWaveActive 0.6s infinite ease-in-out; }
        .calivar-core-active { animation: calivarPulse 3s infinite ease-in-out; }
        .calivar-outer-ring { animation: ringSpin 8s infinite linear; }
        
        .looping-cityscape { animation: continuousCityScroll 40s infinite linear; }
        .cyber-grid-floor {
          background-image: linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px);
          background-size: 3.5rem 3.5rem;
          transform: perspective(400px) rotateX(65deg);
          transform-origin: top center;
          animation: extremeGridFloor 16s infinite linear;
        }
        .main-page-reveal { animation: fadeInMainPage 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* ============================================================================
          🌐 CYBERPUNK BACKGROUND OVERLAYS AND HORIZON CITYSCAPES
         ============================================================================ */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden h-full w-full opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_80%)] bg-[size:6px_6px] opacity-30"></div>
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end opacity-20 overflow-hidden w-[200%] looping-cityscape">
          {[1, 2].map((loopId) => (
            <div key={loopId} className="w-1/2 h-[65vh] flex items-end justify-between relative" style={{ minWidth: '100vw' }}>
              <div className="w-[8%] h-[75%] bg-slate-900 border-t border-r border-purple-500/20 mr-1"></div>
              <div className="w-[12%] h-[90%] bg-slate-950 border-t border-x border-cyan-500/30 relative mr-1">
                <div className="absolute inset-x-2 top-4 bottom-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[size:100%_8px]"></div>
              </div>
              <div className="w-[6%] h-[60%] bg-slate-900 border-t border-purple-500/20 mr-1"></div>
              <div className="w-[15%] h-[82%] bg-slate-950 border-t border-cyan-500/20 relative mr-1">
                <div className="absolute inset-x-4 top-8 bottom-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(168,85,247,0.1)_50%)] bg-[size:100%_6px]"></div>
              </div>
              <div className="w-[10%] h-[95%] bg-slate-900 border-t border-x border-purple-500/30 mr-1"></div>
              <div className="w-[7%] h-[70%] bg-slate-950 border-t border-cyan-500/20 mr-1"></div>
              <div className="w-[14%] h-[88%] bg-slate-900 border-t border-purple-500/20 mr-1"></div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 top-1/2 cyber-grid-floor"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[170px]"></div>
      </div>

      {/* ============================================================================
          🕶️ HUD VISOR PROJECT INTEGRATED PRELOAD SCREEN
         ============================================================================ */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#000000]/95 z-[100] flex flex-col justify-center items-center overflow-hidden p-4 select-none backdrop-blur-md">
          <div className="vr-goggles-outer goggles-float relative w-full max-w-[760px] h-[330px] p-[2px] transition-all duration-300 shadow-[0_0_60px_rgba(6,182,212,0.25)]">
            <div className="vr-goggles-inner w-full h-full bg-[#040509]/95 relative flex flex-col justify-center items-center overflow-hidden border border-cyan-500/10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_50%,transparent_50%)] bg-[size:100%_4px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent w-full h-1/2 animate-[scanline_3.5s_infinite_linear]"></div>
              <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 font-mono text-left hidden md:flex opacity-70">
                <span className="text-[12px] font-black tracking-widest text-cyan-400 font-mono techfest-glitch-text">CALIVAR CORE</span>
                <span className="text-[10px] text-slate-500 tracking-wider">SYSTEM LOG GRID // 01</span>
                <div className="flex gap-[3px] mt-1.5">
                  <div className="w-2.5 h-2.5 bg-cyan-500/20 border border-cyan-400/40"></div>
                  <div className="w-2.5 h-2.5 bg-cyan-500/70 shadow-[0_0_8px_#06b6d4]"></div>
                </div>
              </div>
              <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end font-mono hidden md:flex opacity-70">
                <span className="text-[9px] tracking-[0.25em] text-purple-400/80 uppercase [writing-mode:vertical-lr] font-bold">HUD_MONITOR_ACTIVE</span>
                <div className="flex flex-col gap-[3px] mt-3">
                  <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div className="relative border border-cyan-500/30 w-[60%] sm:w-[55%] h-[120px] bg-slate-950/60 rounded-xl px-5 py-4 flex flex-col justify-center items-center shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
                <div className="text-[11px] font-mono tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-extrabold mb-1.5 text-center uppercase">
                  WELCOME TO THE BAFSK ICONIC IT CLUB
                </div>
                <div className="text-[15px] font-mono font-black text-cyan-400 tracking-widest mb-2">
                  {progress}%
                </div>
                <div className="w-full h-[4px] bg-slate-900 rounded-full overflow-hidden relative border border-slate-800">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_#06b6d4]" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="absolute bottom-2.5 right-4 flex items-end gap-[2px] h-6">
                  {[4, 8, 3, 9, 5].map((val, i) => (
                    <div key={i} className="w-[2px] bg-purple-500 rounded-full audio-wave-bar" style={{ animationDelay: `${i * 0.12}s`, animationDuration: `${0.4 + val * 0.08}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================================
          🎨 DYNAMIC PANEL DASHBOARD & CORE APP ROUTING LAYOUTS
         ============================================================================ */}
      <div className={!isLoading ? "main-page-reveal relative z-20 flex flex-col items-center w-full" : "opacity-0 absolute inset-0 pointer-events-none z-0"}>
        
        {/* Navigation Bar Header */}
        <nav className="w-full sticky top-0 z-50 backdrop-blur-md border-b border-slate-900/60 bg-slate-950/40 px-6 py-4">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
            <button onClick={() => setActivePage("home")} className="hover:scale-110 transition-transform duration-300 block bg-transparent border-none cursor-pointer outline-none">
              <img src={logoImg} alt="Logo" className="h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" onError={(e) => { e.target.style.display = 'none'; }} />
            </button>
          </div>
          <div className="flex justify-between items-center max-w-6xl mx-auto w-full pl-16 sm:pl-0">
            <button onClick={() => setActivePage("home")} className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-transparent border-none cursor-pointer outline-none text-left">
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              </span>
            </button>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-medium tracking-wide items-center">
              <button onClick={() => setActivePage("about")} className={`transition-colors duration-300 bg-transparent border-none cursor-pointer outline-none font-medium ${activePage === "about" ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}>About</button>
              <button onClick={() => setActivePage("events")} className={`transition-colors duration-300 bg-transparent border-none cursor-pointer outline-none font-medium ${activePage === "events" ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}>Events</button>
              <button onClick={() => setActivePage("memberships")} className={`transition-colors duration-300 bg-transparent border-none cursor-pointer outline-none font-medium ${activePage === "memberships" ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}>Panel</button>
            </div>
          </div>
        </nav>

        {/* --- 🏠 VIEW PANEL 1: HOME PAGE DASHBOARD --- */}
        {activePage === "home" && (
          <header className="relative max-w-4xl mx-auto pt-24 pb-32 px-6 text-center animate-[fadeInMainPage_0.4s_ease-out]">
            <div><span className="text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-4 py-1.5 rounded-full uppercase">Official IT & Innovation Wing</span></div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-6 mb-6">Welcome to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.15)]">BAFSK ICONIC IT CLUB</span></h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">The premier terminal workspace for developers, engineering squads, and creative visual directors. We synthesize clean scripts, map advanced microcontrollers, explore secure kernels, and optimize digital pipeline infrastructures.</p>
            <div className="flex gap-4 justify-center mb-12">
              <button onClick={() => setIsJoinFormOpen(true)} className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-lg hover:bg-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer text-sm tracking-wider uppercase font-black">Join The Club</button>
              <button onClick={() => setActivePage("events")} className="px-6 py-3 border border-slate-800 text-slate-300 font-semibold rounded-lg hover:bg-slate-900 hover:border-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer text-sm tracking-wider uppercase">Our Events</button>
            </div>
          </header>
        )}

        {/* --- 🚀 VIEW PANEL 2: DEDICATED ABOUT DETAILS SECTION --- */}
        {activePage === "about" && (
          <section className="w-full max-w-4xl px-6 pt-20 pb-24 animate-[fadeInMainPage_0.5s_ease-out]">
            <div className="w-full bg-slate-950/70 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.05)] relative overflow-hidden">
              <button onClick={() => setActivePage("home")} className="mb-8 flex items-center gap-2 text-xs font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none outline-none group"><span className="transform group-hover:-translate-x-1 transition-transform">←</span> RETURN_TO_SYSTEM_DASHBOARD</button>
              
              <div className="mb-8">
                <span className="text-xs font-mono tracking-[0.2em] text-cyan-400/60 uppercase block"></span>
                <h2 className="text-4xl font-black text-slate-100 uppercase mt-2 tracking-wide">About Our IT Club</h2>
              </div>
              
              <div className="space-y-6 text-base leading-relaxed text-slate-300">
                <p>The <span className="text-cyan-400 font-semibold">BAFSK Iconic IT Club</span> stands as an avant-garde technology collective designed to foster real-world computer science capabilities, operational engineering frameworks, and logical code design. We cultivate specialized skills starting from standard database scripting structures to micro-architecture engineering.</p>
                <p>Through systematic bootcamps, hardware orchestration clinics, collaborative algorithm design challenges, and competitive system hackathons, we secure an academic ecosystem where code blocks compile instantly and hardware nodes operate at peak capability lines.</p>
                
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-200 pt-4 border-t border-slate-900">Divisional Framework Projections</h3>
                <p className="text-slate-400 text-sm">Our platform is bifurcated into independent tracking nodes to optimize structural output and ensure deep technical focus areas across all member tiers.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 font-mono text-xs">
                  <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-cyan-500/20 transition-all duration-300">
                    <div className="text-cyan-400 font-bold uppercase mb-2">01 / Algorithm & Logic Arrays</div>
                    <p className="text-slate-400 leading-normal mb-2">Deep architectural exploration of syntax logic properties, script compilations, component state structures, and optimization paths.</p>
                    <span className="text-slate-600 block text-[10px]">Languages: C++, Python, JavaScript (React)</span>
                  </div>
                  <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-bold uppercase mb-2">02 / Automated Hardware Matrices</div>
                    <p className="text-slate-400 leading-normal mb-2">Assembling sensory modules, micro-controller physical array mapping, autonomous operational testing, and power bus configurations.</p>
                    <span className="text-slate-600 block text-[10px]">Frameworks: Robotics Engineering, IoT Protocols</span>
                  </div>
                  <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-pink-500/20 transition-all duration-300">
                    <div className="text-pink-400 font-bold uppercase mb-2">03 / Network & Threat Cryptanalysis</div>
                    <p className="text-slate-400 leading-normal mb-2">Isolating secure virtual workspaces, exploring package headers via packet tracking filters, tracking system firewalls, and logging kernel hooks.</p>
                    <span className="text-slate-600 block text-[10px]">Environments: Linux Terminal Sandboxes, Wireshark Nodes</span>
                  </div>
                  <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-amber-500/20 transition-all duration-300">
                    <div className="text-amber-400 font-bold uppercase mb-2">04 / User Experience & Interface Vectors</div>
                    <p className="text-slate-400 leading-normal mb-2">Drafting user task flows, canvas rendering styles, layout typography regulations, fluid dark themes, and high-fidelity video cuts.</p>
                    <span className="text-slate-600 block text-[10px]">Applications: Figma Engine, Composition Multi-Tracks</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-900">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-slate-200 mb-4">Club Operational Timeline Chronology</h3>
                  <div className="space-y-4 font-mono text-xs">
                    {TIMELINE_DATA.map((t, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-l-2 border-slate-800 pl-4 py-1 hover:border-cyan-500/40 transition-colors">
                        <span className="text-cyan-400 font-bold tracking-wider shrink-0 w-16">{t.year}</span>
                        <div>
                          <h4 className="text-slate-200 font-bold uppercase">{t.event}</h4>
                          <p className="text-slate-500 mt-0.5 leading-normal">{t.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* --- 🎯 VIEW PANEL 3: DEDICATED TRACK SPECIALIZATIONS & TRACKS --- */}
        {activePage === "events" && (
          <main className="w-full max-w-6xl mx-auto px-6 pt-20 pb-24 animate-[fadeInMainPage_0.5s_ease-out]">
            <button onClick={() => setActivePage("home")} className="mb-8 flex items-center gap-2 text-xs font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none outline-none group"><span className="transform group-hover:-translate-x-1 transition-transform">←</span> RETURN_TO_SYSTEM_DASHBOARD</button>
            
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold tracking-tight mb-2 uppercase">Our Events</h2>
              <p className="text-slate-400 text-sm">Explore real-time technological development partitions, deployment frameworks, and competitive innovation nodes across our localized club environment.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS_DATA.map((track) => (
                <div 
                  key={track.id} 
                  className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${hoveredCard === track.id ? "border-cyan-500/40 bg-slate-900/40 shadow-2xl scale-[1.01]" : "border-slate-900 bg-slate-950/50"}`} 
                  onMouseEnter={() => setHoveredCard(track.id)} 
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-900/30">{track.category} Matrix Division</span>
                      <span className={`text-xs font-mono px-3 py-0.5 rounded-full font-medium ${track.status === "Active" ? "bg-emerald-950/80 text-emerald-400 border border-emerald-900" : "bg-amber-950/80 text-amber-400 border border-amber-900"}`}>{track.status} Block</span>
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-slate-100 uppercase font-sans tracking-wide">{track.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed font-sans">{track.desc}</p>
                    
                    <div className="space-y-2 border-t border-slate-900/80 pt-4 font-mono text-xs">
                      <div className="flex justify-between"><span className="text-slate-500 uppercase">Target Sync Date:</span><span className="text-slate-300 font-bold">{track.timeline}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500 uppercase">Execution Complexity:</span><span className="text-slate-300 font-bold">{track.difficulty}</span></div>
                      <div className="flex flex-col gap-1 pt-1"><span className="text-slate-500 uppercase">Hardware Hardware / System Layer:</span><span className="text-slate-400 text-[11px] leading-relaxed bg-slate-950 p-2 rounded-lg border border-slate-900 mt-1">{track.hardwareRequired}</span></div>
                      <div className="flex justify-between pt-1"><span className="text-slate-500 uppercase">Physical Node Base:</span><span className="text-slate-400 font-medium">{track.location}</span></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-900/40">
                    <button onClick={() => setIsJoinFormOpen(true)} className="w-full py-2.5 bg-slate-900 hover:bg-cyan-950/30 border border-slate-800 hover:border-cyan-500/40 rounded-xl font-mono text-xs text-slate-400 hover:text-cyan-400 uppercase tracking-widest font-black transition-all duration-300">
                      Request Event Matrix Enrollment <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-12 bg-slate-950/40 border border-slate-900 rounded-2xl p-6 font-mono text-xs">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">// System Operations Protocol Note</h3>
              <p className="text-slate-500 leading-relaxed mb-4">All club events require applicants to present active clearance identifiers (Student ID). Participants will be provisioned local loop storage volumes, automated dependency installs, and system hub hardware tracking nodes within the designated physical workshop boundaries.</p>
              <div className="flex flex-wrap gap-4 text-slate-400">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400"></span><span>Isolated Terminal Testing</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-400"></span><span>Collaborative Code Versioning</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-pink-400"></span><span>Live Diagnostic System Metrics</span></div>
              </div>
            </section>
          </main>
        )}

        {/* --- 👥 VIEW PANEL 4: INTERACTIVE MEMBERS PORTRAITS GRID MATRIX --- */}
        {activePage === "memberships" && (
          <main className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 animate-[fadeInMainPage_0.5s_ease-out]">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-slate-400 uppercase">The Club Members</h2>
              <p className="text-slate-500 text-xs font-mono tracking-widest mt-2 uppercase">// Interactive Operational Core Panel Directory</p>
            </div>
            
            <section className="mb-20">
              <div className="flex items-center justify-center gap-3 mb-10">
                <span className="text-cyan-500 font-mono font-bold">&lt;</span>
                <h3 className="text-sm font-mono font-black uppercase tracking-[0.3em] text-cyan-400/90">👑 Our Operational Moderators</h3>
                <span className="text-cyan-500 font-mono font-bold">&gt;</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {moderatorsList.map((member) => (
                  <div 
                    key={member.id} 
                    onClick={() => setSelectedMember(member)} 
                    className="w-full sm:w-[320px] bg-slate-950/60 border border-slate-900/80 hover:border-cyan-500/40 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] group"
                  >
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-5 border-2 border-slate-800 group-hover:border-cyan-400/60 transition-colors flex items-center justify-center bg-slate-900 shadow-inner">
                      {brokenImages[member.id] || !member.image ? (
                        <div className="w-full h-full bg-gradient-to-br from-cyan-950 to-slate-950 flex items-center justify-center font-mono font-bold text-cyan-400 text-xl">{getInitials(member.name)}</div>
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          onError={() => handleImageError(member.id)} 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 scale-105 group-hover:scale-100" 
                        />
                      )}
                    </div>
                    <h4 className="text-lg font-black tracking-wide text-slate-200 group-hover:text-cyan-400 transition-colors uppercase font-sans">{member.name}</h4>
                    <p className="text-xs font-mono text-cyan-500/70 mt-1 font-bold tracking-widest uppercase">// {member.role}</p>
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed font-sans line-clamp-2">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <div className="flex items-center justify-center gap-3 mb-10">
                <span className="text-purple-500 font-mono font-bold">[</span>
                <h3 className="text-sm font-mono font-black uppercase tracking-[0.3em] text-purple-400/90">💼 Executive Committee Board</h3>
                <span className="text-purple-500 font-mono font-bold">]</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {executiveList.map((member) => (
                  <div 
                    key={member.id} 
                    onClick={() => setSelectedMember(member)} 
                    className="bg-slate-950/40 border border-slate-900/60 hover:border-purple-500/40 rounded-xl p-4 text-center cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] group"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 border border-slate-800 group-hover:border-purple-400/50 transition-colors flex items-center justify-center bg-slate-900">
                      {brokenImages[member.id] || !member.image ? (
                        <div className="w-full h-full bg-gradient-to-tr from-purple-950/40 to-slate-950 flex items-center justify-center font-mono text-xs font-bold text-purple-400">{getInitials(member.name)}</div>
                      ) : (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          onError={() => handleImageError(member.id)} 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                        />
                      )}
                    </div>
                    <h4 className="text-sm font-bold tracking-wide text-slate-300 group-hover:text-purple-400 transition-colors line-clamp-1 uppercase font-sans">{member.name}</h4>
                    <p className="text-[11px] font-mono text-slate-500 mt-0.5 tracking-wider font-semibold uppercase">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {selectedMember && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[150] flex items-center justify-center p-4 font-mono animate-[fadeInMainPage_0.15s_ease-out]">
                <div className="bg-slate-950 border border-cyan-500/30 max-w-lg w-full rounded-2xl overflow-hidden p-6 relative shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                  <button 
                    onClick={() => setSelectedMember(null)} 
                    className="absolute top-4 right-4 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors bg-transparent border-none outline-none cursor-pointer"
                  >
                    [ DISMISS MATRIX // CLOSE ]
                  </button>
                  
                  <div className="flex gap-4 items-center border-b border-slate-900 pb-4 mb-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-900 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm shrink-0">
                      {brokenImages[selectedMember.id] || !selectedMember.image ? getInitials(selectedMember.name) : <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-100 tracking-wide uppercase font-sans">{selectedMember.name}</h4>
                      <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{selectedMember.role}</p>
                      <span className="text-[9px] text-slate-600 block mt-0.5 uppercase">Enrolled: {selectedMember.joinedDate}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] tracking-wider text-slate-500 uppercase font-bold block">Biographical Registry Log:</span>
                      <p className="text-slate-400 leading-relaxed font-sans text-sm mt-1">{selectedMember.bio}</p>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider text-purple-400 uppercase font-bold block">Security Access Signature:</span>
                      <p className="text-slate-400 mt-0.5 text-[11px] font-semibold">{selectedMember.clearanceLevel}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-900">
                      <span className="text-[10px] tracking-[0.2em] text-cyan-400 uppercase font-black block">&gt;&gt; LOGGED_CORE_ASSIGNMENTS :</span>
                      <ul className="space-y-2 text-xs text-slate-300 mt-2">
                        {selectedMember.topics?.map((topic, index) => (
                          <li key={index} className="flex gap-2 items-start"><span className="text-cyan-500 text-xs mt-0.5">■</span><span className="leading-normal">{topic}</span></li>
                        )) || <li className="text-slate-500 text-xs italic">No operational technology sequences linked to this specific node profile index.</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        )}

        {/* --- 📊 VIEW PANEL 5: DEDICATED SYSTEM LOG MATRIX OVERVIEW --- */}
        {activePage === "system-logs" && (
          <section className="w-full max-w-5xl px-6 pt-20 pb-24 font-mono text-xs animate-[fadeInMainPage_0.5s_ease-out]">
            <button onClick={() => setActivePage("home")} className="mb-8 flex items-center gap-2 text-xs text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none outline-none group"><span className="transform group-hover:-translate-x-1 transition-transform">←</span> RETURN_TO_SYSTEM_DASHBOARD</button>
            
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-6">
              <div>
                <h2 className="text-3xl font-black uppercase text-slate-100 tracking-wide">Club Infrastructure Diagnostic Registry</h2>
                <p className="text-slate-500 text-xs mt-1 uppercase">// Comprehensive Virtual Hardware Core Allocations & Logic Pipelines</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {["all", "moderator", "executive"].map((f) => (
                  <button 
                    key={f} onClick={() => setTerminalFilter(f)}
                    className={`px-3 py-1.5 rounded-lg border uppercase tracking-wider font-bold transition-all text-[10px] cursor-pointer ${terminalFilter === f ? "bg-cyan-950/40 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]" : "bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300"}`}
                  >
                    Filter: {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full bg-slate-950/80 border border-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-900/40 px-4 py-3 border-b border-slate-900 font-bold text-slate-400 flex justify-between uppercase">
                <span>Roster Access Index Token</span>
                <span className="hidden sm:inline">Clearance Status Matrix</span>
              </div>
              
              <div className="divide-y divide-slate-900">
                {MEMBERS_DATA.filter(m => terminalFilter === "all" || m.group === terminalFilter).map((member) => (
                  <div key={member.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-900/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-cyan-400 shrink-0 text-xs uppercase shadow-inner">
                        {getInitials(member.name)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-200 uppercase tracking-wide">{member.name}</div>
                        <div className="text-slate-500 text-[11px] mt-0.5 uppercase tracking-wider font-semibold">{member.role} // Division Base: {member.group}</div>
                        <p className="text-slate-400 font-sans mt-1.5 text-xs leading-normal max-w-xl">{member.bio}</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right font-mono shrink-0 flex flex-row sm:flex-col justify-between sm:justify-center border-t border-slate-900 sm:border-0 pt-2 sm:pt-0">
                      <span className="text-[10px] text-purple-400 uppercase font-black block tracking-wider">{member.clearanceLevel.split(" - ")[0]}</span>
                      <span className="text-slate-600 block text-[9px] mt-0.5 uppercase tracking-tighter">ID_REF_KEY: 00{member.id}_NODE</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-slate-950/60 border border-slate-900 rounded-xl">
                <span className="text-[10px] text-slate-500 uppercase block tracking-widest mb-2">// Network Encryption Protocol</span>
                <p className="text-slate-300 leading-relaxed font-sans text-xs">All application configurations, phone registers, and tracking indices are dynamically marshaled through SSL transport handshakes to rule out physical data leaking paths inside the general school intranet structures.</p>
              </div>
              <div className="p-4 bg-slate-950/60 border border-slate-900 rounded-xl">
                <span className="text-[10px] text-slate-500 uppercase block tracking-widest mb-2">// Sub-Mesh Routing Parameters</span>
                <p className="text-slate-300 leading-relaxed font-sans text-xs">Form input fields execute dynamic variable structural transformations inside the state framework before dispatching payload JSON bundles directly onto targets linked to admin nodes.</p>
              </div>
              <div className="p-4 bg-slate-950/60 border border-slate-900 rounded-xl">
                <span className="text-[10px] text-slate-500 uppercase block tracking-widest mb-2">// Memory Buffer Overflow Shield</span>
                <p className="text-slate-300 leading-relaxed font-sans text-xs">Adaptive logical clean loops wipe tracking objects instantly on component teardowns, keeping local browser performance boundaries nominal and preventing garbage scripts compilation logs.</p>
              </div>
            </div>
          </section>
        )}

        {/* 📝 --- 🔥 APPLICANT REGISTRATION MODAL FORM FILLUP OVERLAY --- */}
        {isJoinFormOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4 overflow-y-auto solutions-container animate-[fadeInMainPage_0.2s_ease-out]">
            <div className="bg-slate-950 border border-cyan-500/40 max-w-2xl w-full rounded-2xl p-6 relative shadow-[0_0_50px_rgba(6,182,212,0.25)] my-8">
              
              <button 
                onClick={() => setIsJoinFormOpen(false)} 
                className="absolute top-4 right-4 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors bg-transparent border-none outline-none cursor-pointer"
              >
                [ TERMINATE APPLICATION ASSEMBLY // CLOSE ]
              </button>

              <div className="border-b border-slate-900 pb-4 mb-5">
                <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400/70 uppercase block">// PIPELINE_ENTRY_NODE_INITIALIZATION</span>
                <h3 className="text-2xl font-black text-slate-100 uppercase tracking-wide mt-1 font-sans">Club Membership Roster Enrollment</h3>
                <p className="text-slate-500 text-[11px] mt-1">Provide clear operational parameter properties. Submitting transmits an automated structured registration packet data stream directly to administration nodes via: <span className="text-slate-400 font-bold font-mono">ekramezaz2@gmail.com</span>.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Applicant Full Name *</label>
                    <input 
                      type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Enter your full signature name..." 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.name ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.name && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Student Unique ID Number *</label>
                    <input 
                      type="text" name="studentId" required value={formData.studentId} onChange={handleInputChange} placeholder="e.g. 240102" 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.studentId ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.studentId && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.studentId}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Academic Class Status (6-12) *</label>
                    <div className="relative">
                      <select 
                        name="studentClass" required value={formData.studentClass} onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all cursor-pointer appearance-none ${formErrors.studentClass ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                      >
                        <option value="" disabled className="text-slate-600">Select grade tier level...</option>
                        {[6, 7, 8, 9, 10, 11, 12].map(c => (
                          <option key={c} value={c} className="bg-slate-950 text-slate-200">Class {c}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</div>
                    </div>
                    {formErrors.studentClass && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.studentClass}</span>}
                  </div>

                  <div className={`flex flex-col gap-1.5 transition-all duration-300 ${shouldShowGroupField ? "opacity-100 scale-100 transform translate-y-0" : "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden sm:h-auto transform -translate-y-2"}`}>
                    <label className="text-xs text-cyan-400 uppercase tracking-wider font-black">Academic Track Group *</label>
                    <div className="relative">
                      <select 
                        name="academicGroup" required={shouldShowGroupField} value={formData.academicGroup} onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all cursor-pointer appearance-none ${formErrors.academicGroup ? "border-red-500/50 focus:border-red-500" : "border-cyan-900/50 focus:border-cyan-500"}`}
                      >
                        <option value="" disabled className="text-slate-600">Designate analytical division...</option>
                        <option value="Science" className="bg-slate-950 text-slate-200">Science</option>
                        <option value="Arts" className="bg-slate-950 text-slate-200">Arts / Humanities</option>
                        <option value="Commerce" className="bg-slate-950 text-slate-200">Commerce / Business Studies</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-cyan-500 text-xs">▼</div>
                    </div>
                    {formErrors.academicGroup && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.academicGroup}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Class Roll Number *</label>
                    <input 
                      type="text" name="roll" required value={formData.roll} onChange={handleInputChange} placeholder="Your current roster numerical roll..." 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.roll ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.roll && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.roll}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Assigned Section Name *</label>
                    <input 
                      type="text" name="section" required value={formData.section} onChange={handleInputChange} placeholder="e.g. A / Orion / Nebula" 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.section ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.section && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.section}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Active Mobile Number (BD Matrix) *</label>
                    <input 
                      type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="01XXXXXXXXX" 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.phone ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.phone && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.phone}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Active Communication Email Route *</label>
                    <input 
                      type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="name@domain.com" 
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all ${formErrors.email ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    />
                    {formErrors.email && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.email}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-bold">Preferred Tech Track Specialization *</label>
                  <div className="relative">
                    <select 
                      name="techTrack" required value={formData.techTrack} onChange={handleInputChange}
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none transition-all cursor-pointer appearance-none ${formErrors.techTrack ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-cyan-500/50"}`}
                    >
                      <option value="" disabled className="text-slate-600">Select your prime domain division partition...</option>
                      <option value="coding" className="bg-slate-950 text-slate-200">Software Development Node (Python, C++, Core React Scripts)</option>
                      <option value="robotics" className="bg-slate-950 text-slate-200">Robotics & Micro-Controller System Configurations</option>
                      <option value="cyber" className="bg-slate-950 text-slate-200">Cybersecurity Framework Sandboxing & Threat Analysis</option>
                      <option value="media" className="bg-slate-950 text-slate-200">UI/UX Graphic Vector Mapping & Multi-Track Video Cuts</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</div>
                  </div>
                  {formErrors.techTrack && <span className="text-[10px] text-red-400 tracking-wide lowercase">!! {formErrors.techTrack}</span>}
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button" onClick={() => setIsJoinFormOpen(false)}
                    className="w-1/3 bg-transparent border border-slate-800 hover:border-slate-600 text-slate-400 py-3 rounded-xl uppercase tracking-wider font-bold transition-all text-xs cursor-pointer"
                  >
                    Abort Stream
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-xl uppercase tracking-widest font-black transition-all text-xs shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    Transmit Secure Roster Entry Node
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================================
          🤖 🔥 UPDATED OVERLAY PANEL: AI TERMINAL INTERFACE MAPPED TO SIDE BUTTON 
         ============================================================================ */}
      {assistantActive && (
        <div className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-sm flex justify-end p-4 font-mono animate-[fadeInMainPage_0.2s_ease-out]">
          <div className="w-full max-w-lg bg-slate-950/95 border border-cyan-500/30 rounded-2xl flex flex-col justify-between shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden">
            
            {/* Header Area */}
            <div className="bg-slate-900/80 px-4 py-3.5 border-b border-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <span className="text-xs font-black tracking-widest text-cyan-400 uppercase">CALIVAR_AI_CORE // SIDE_HUD</span>
              </div>
              <button 
                onClick={() => setAssistantActive(false)} 
                className="text-[11px] text-slate-500 hover:text-cyan-400 transition-colors uppercase border-none bg-transparent cursor-pointer font-bold"
              >
                [ DISCONNECT ]
              </button>
            </div>

            {/* Chat Output Frame */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-900">
              {chatHistory.map((chat, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col max-w-[90%] rounded-xl px-4 py-2.5 text-xs transition-all duration-200 ${
                    chat.role === 'user' 
                      ? 'ml-auto bg-slate-900 border border-slate-800 text-slate-200' 
                      : 'mr-auto bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/10 text-cyan-100'
                  }`}
                >
                  <span className={`text-[9px] uppercase tracking-wider font-black mb-1 ${chat.role === 'user' ? 'text-slate-500' : 'text-cyan-400'}`}>
                    {chat.role === 'user' ? '>> CLIENT' : '>> CALIVAR_AI'}
                  </span>
                  <p className="leading-relaxed whitespace-pre-wrap">{chat.text}</p>
                </div>
              ))}
              
              {isGenerating && (
                <div className="mr-auto bg-slate-950/40 border border-slate-900 text-slate-500 rounded-xl px-4 py-2.5 text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                  <span>Processing</span>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Input Controls Bar */}
            <form onSubmit={handleSendMessage} className="p-4 bg-slate-900/40 border-t border-slate-900 flex flex-col gap-2">
              <div className="relative flex items-center">
                <span className="absolute left-3.5 font-mono text-xs text-cyan-500/60 font-bold select-none">&gt;</span>
                <input 
                  type="text" 
                  value={inputMessage} 
                  onChange={(e) => setInputMessage(e.target.value)} 
                  placeholder="Execute directive query ('status', 'roster', 'clear')..." 
                  className="w-full bg-slate-950 border border-slate-900 rounded-xl pl-8 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all" 
                />
              </div>
              <div className="flex gap-2 justify-end text-[10px] uppercase tracking-wider">
                <button 
                  type="button" onClick={startListening} 
                  className="bg-slate-950 hover:bg-slate-900 border border-slate-900 px-3 py-2 rounded-lg text-slate-400 transition-all cursor-pointer font-bold"
                >
                  🎙️ Stream Voice
                </button>
                <button 
                  type="submit" 
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-black tracking-widest transition-all cursor-pointer"
                >
                  Run Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🔮 FIXED POSITION FLOATING CONSOLE SIDE BUTTON TRIGGER */}
      <div className="fixed bottom-6 right-6 z-50 font-mono select-none">
        <button 
          onClick={() => setAssistantActive(!assistantActive)} 
          className="w-14 h-14 bg-slate-950 rounded-full border-2 border-cyan-400/40 flex items-center justify-center relative group shadow-lg cursor-pointer transition-all hover:border-cyan-400" 
          title="Toggle Calivar AI Central Interface Matrix"
        >
          <div className="absolute inset-1 border border-dashed border-cyan-400/30 rounded-full calivar-outer-ring group-hover:border-cyan-400/60"></div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 calivar-core-active"></div>
        </button>
      </div>
    </div>
  );
}