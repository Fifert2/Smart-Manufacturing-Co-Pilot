<div align="center">

<img src="website/webpages/assets/testlogo.png" alt="Smart Manufacturing Research Co-Pilot logo" width="150">

Smart Manufacturing Research Co-Pilot

An interactive front-end prototype for exploring AI-assisted manufacturing operations, machine telemetry, reporting, and workflow automation.

Website Source · Dashboard Source · Machine View Source

</div>

Overview

The Smart Manufacturing Research Co-Pilot explores how an edge-based AI platform can make cyber-physical manufacturing systems easier to understand and operate. The prototype combines a public-facing product website with an operations console for machine monitoring, production analysis, reporting, and automation.

The interface was designed around the needs of operators and researchers working with real-time and historical manufacturing data.

Project at a Glance

Area

Details

Domain

Smart manufacturing and cyber-physical systems

My role

Front-End & Product Design Engineer / UX Research Lead

Focus

Product interface design, sensor-data dashboards, UX research, and industrial-systems research

Technologies

HTML, CSS, JavaScript, Figma

Project period

June–August 2026

Status

Functional front-end prototype using demonstration data

Product Structure

flowchart TD
    A["Smart Manufacturing Co-Pilot"] --> B["Product Website"]
    A --> C["Operations Console"]
    B --> D["Platform, solutions, customers"]
    C --> E["Machines and telemetry"]
    C --> F["Production, reports, automations"]

Interface Areas

Operations Dashboard

The operations console presents manufacturing status, build progress, health indicators, production metrics, and process conditions in one interface.

Machine Monitoring

Machine views support filtering, utilization review, status inspection, and expandable equipment details.

Production Analytics

Production views organize performance indicators and time-oriented manufacturing information for operator review.

Reports and Automations

The prototype includes report-management concepts and configurable automation-rule interfaces.

Product Website

The public-facing website explains the platform, use cases, company context, customer value, and contact path.

My Contributions

Designed and prototyped interfaces for an edge-based AI manufacturing platform.

Developed dashboard concepts for real-time and historical multi-modal sensor data.

Applied time-series visualization and sensor-fusion concepts to operator-facing screens.

Conducted user interviews and focus groups.

Translated research findings into high-fidelity Figma prototypes and interface improvements.

Researched industrial automation standards, embedded AI systems, and ERP integration considerations.

Connected user needs, system capabilities, and manufacturing workflows through product-oriented information architecture.

Design Goals

Make complex manufacturing telemetry understandable at a glance.

Separate live operational information from historical analysis.

Help users move from system status to investigation and action.

Maintain consistent navigation across machines, dashboards, reports, production, and automations.

Present AI assistance as part of an operational workflow rather than as a standalone chatbot.

Run Locally

Clone the repository:

git clone https://github.com/Fifert2/Smart-Manufacturing-Co-Pilot.git
cd Smart-Manufacturing-Co-Pilot

Start a local web server:

python3 -m http.server 8000

Open the two prototype areas:

http://localhost:8000/start_page.html
http://localhost:8000/website/

Repository Structure

Smart-Manufacturing-Co-Pilot/
├── start_page.html          # Operations-console entry point
├── main.css                 # Dashboard interface styles
├── pages/
│   ├── dashboard.html
│   ├── machines.html
│   ├── production.html
│   ├── reports.html
│   └── automations.html
└── website/
    ├── index.html           # Public product website
    ├── main.css
    ├── main.js
    └── webpages/
        ├── platform.html
        ├── solutions.html
        ├── customers.html
        ├── company.html
        └── contact.html

Scope and Data

This repository presents a front-end research and product prototype. Values shown in the interface are demonstration data and should not be interpreted as live production telemetry. Proprietary system details, confidential research information, and production integrations are intentionally excluded.

Author

Abdur Rahim Islam
Front-End & Product Design Engineer / UX Research Lead

Portfolio · GitHub
