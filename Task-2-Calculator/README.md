
# ⚡ CALYX — Advanced Calculator

<div align="center">

<img src="https://img.shields.io/badge/CodeAlpha-Frontend%20Development-00D9FF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="CodeAlpha">

<img src="https://img.shields.io/badge/Task-02-8A2BE2?style=for-the-badge" alt="Task 02">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">

<img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

<img src="https://img.shields.io/badge/Zero%20Frameworks-100%25-111827?style=for-the-badge" alt="Zero Frameworks">

<br><br>

### `PRECISION • MOTION • INTELLIGENCE`

**A premium, production-quality calculator engineered with pure HTML5, CSS3 & Vanilla JavaScript.**

<br>

[ ✦ Calculator ](#-calyx--advanced-calculator) •
[ ✦ Features ](#-features) •
[ ✦ How to Run ](#-how-to-run) •
[ ✦ Architecture ](#-architecture) •
[ ✦ Keyboard ](#-keyboard-shortcuts)

</div>

---

<div align="center">

## ◈ THE EXPERIENCE

> **CALYX isn't designed to look like a basic calculator.**
>
> It is designed to feel like a polished digital instrument.

</div>

CALYX combines a **luxury obsidian interface**, animated ambient lighting, glassmorphism surfaces, responsive layouts, keyboard-first interaction, safe mathematical parsing, calculation history, memory operations, and subtle audio feedback into one focused frontend experience.

The entire application runs natively in the browser.

**No frameworks. No dependencies. No build pipeline.**

Just the web platform.

---

# ✦ Features

## 🎨 Visual Experience

| Feature                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| ◈ **Obsidian Theme**      | Deep dark interface with cyan/violet ambient lighting  |
| ◇ **Ethereal Theme**      | Clean porcelain-inspired light interface               |
| 🧊 **Glassmorphism**      | Frosted acrylic surfaces with depth and blur           |
| ✨ **Ambient Animation**   | Animated background glow and atmospheric movement      |
| 🫧 **Micro Interactions** | Hover, press, focus and transition effects             |
| 📱 **Responsive UI**      | Optimized for mobile, tablet and desktop               |
| 📐 **Adaptive Display**   | Display typography dynamically scales for large values |
| 🎞️ **Motion System**     | Smooth entrance, state and interaction animations      |

---

# 🧮 Mathematical Engine

CALYX goes beyond a simple button-based calculator.

### `ZERO eval()`

The application does **not** rely on JavaScript's `eval()` for expression execution.

Instead, it uses a dedicated mathematical evaluation pipeline:

```text
USER INPUT
    │
    ▼
┌───────────────┐
│ Tokenization  │
└───────┬───────┘
        │
        ▼
┌────────────────┐
│ Shunting-Yard  │
│   Algorithm    │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ Postfix / RPN  │
│   Evaluation   │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ Result Format  │
│ & Sanitization │
└───────┬────────┘
        │
        ▼
     RESULT
```

### Precision Handling

CALYX also sanitizes common JavaScript floating-point artifacts.

For example:

```text
0.1 + 0.2
```

is presented as:

```text
0.3
```

rather than exposing the underlying IEEE 754 representation:

```text
0.30000000000000004
```

---

# ⚡ Premium Features

### 🕘 Calculation History

Every completed calculation can be stored inside an animated history drawer.

Features include:

* Automatic calculation logging
* Expression + result display
* Timestamp information
* Animated drawer entrance
* Click-to-restore calculations
* Clear history functionality

---

### 🧠 Memory System

CALYX includes a functional calculator memory system:

```text
MC  → Memory Clear
MR  → Memory Recall
M+  → Memory Add
M−  → Memory Subtract
```

An active:

```text
[M]
```

indicator communicates when memory contains a stored value.

---

### 📋 Copy Result

Results can be copied directly to the clipboard.

A lightweight toast notification confirms the action without interrupting the calculation flow.

```text
RESULT
  │
  ▼
COPY
  │
  ▼
CLIPBOARD
  │
  ▼
✓ COPIED
```

---

### 🔊 Web Audio Feedback

CALYX can generate subtle interface sounds directly through the browser's **Web Audio API**.

No audio files are required.

The sound system can be toggled ON/OFF.

---

### ⌨️ Keyboard-First Interaction

The calculator can be controlled without touching the mouse.

Physical keyboard input is mapped directly to calculator actions.

Press:

```text
?
```

to open the interactive keyboard-shortcut reference.

---

# 🌌 Animation System

CALYX uses animation as part of the interface rather than decoration.

### Motion Layers

```text
┌─────────────────────────────────────┐
│          AMBIENT BACKGROUND         │
│       ✦ floating light fields ✦     │
├─────────────────────────────────────┤
│          GLASS CONTAINER            │
│       ↳ depth + blur + glow         │
├─────────────────────────────────────┤
│            DISPLAY                  │
│       ↳ dynamic transitions         │
├─────────────────────────────────────┤
│          BUTTON MATRIX              │
│       ↳ hover + press feedback      │
├─────────────────────────────────────┤
│          DRAWERS / MODALS           │
│       ↳ slide + fade transitions    │
└─────────────────────────────────────┘
```

### Included Motion

* Calculator entrance animation
* Ambient background movement
* Glass surface transitions
* Button hover effects
* Button press feedback
* Keyboard press animation
* Display transitions
* History drawer animation
* Modal transitions
* Toast notifications
* Theme transition
* Focus-state animations

Animations remain subtle enough to preserve usability.

---

# 🌗 Dynamic Themes

CALYX supports two visual modes.

### ◼ OBSIDIAN

```text
Dark glass
+
Cyan atmosphere
+
Violet glow
+
Soft depth
+
High contrast
```

### ◻ ETHEREAL

```text
Porcelain surfaces
+
Clean typography
+
Soft shadows
+
Bright interface
+
Minimal atmosphere
```

The interface transitions between themes without requiring a page reload.

---

# 📱 Responsive Design

CALYX is designed around a mobile-first responsive system.

### Supported Layouts

```text
MOBILE
320px+
   ↓
TABLET
768px+
   ↓
DESKTOP
1024px+
   ↓
LARGE DISPLAY
1440px+
```

The calculator automatically adapts:

* Container dimensions
* Button sizing
* Display typography
* Spacing
* History drawer
* Modal dimensions
* Touch targets

---

# ⌨️ Keyboard Shortcuts

| Key         | Action         |
| ----------- | -------------- |
| `0 – 9`     | Enter number   |
| `.`         | Decimal point  |
| `+`         | Addition       |
| `-`         | Subtraction    |
| `*`         | Multiplication |
| `/`         | Division       |
| `Enter`     | Calculate      |
| `=`         | Calculate      |
| `Backspace` | Delete         |
| `Escape`    | All Clear      |
| `%`         | Percentage     |
| `H`         | Toggle history |
| `M`         | Memory Add     |
| `?`         | Keyboard help  |

---

# 🛡️ Error Handling

CALYX is designed to fail gracefully.

### Division by Zero

```text
5 ÷ 0
```

produces:

```text
Cannot divide by zero
```

instead of crashing the application.

### Other Protections

* Invalid expression detection
* Consecutive operator handling
* Decimal validation
* Overflow protection
* Empty expression handling
* Safe state recovery
* Large-number display protection
* Calculation-state reset

---

# 🔄 Smart Input Behavior

CALYX understands calculator interaction patterns.

For example:

```text
5 + ×
```

automatically resolves the operator conflict rather than creating an invalid expression.

Likewise:

```text
5 + 5 =
```

produces:

```text
10
```

and continuing with:

```text
+ 2 =
```

produces:

```text
12
```

Starting with a new digit after a completed calculation begins a fresh calculation.

---

# 🧱 Architecture

The project is intentionally separated into three primary layers.

```text
                    ┌──────────────┐
                    │    USER      │
                    │ INTERACTION  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   index.html │
                    │   UI / DOM   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   script.js  │
                    │ STATE + MATH │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   style.css  │
                    │ VISUAL LAYER │
                    └──────────────┘
```

---

# 📁 Project Structure

```text
Task-2-Calculator/
│
├── 📄 index.html
│   └── Semantic application structure
│
├── 🎨 style.css
│   └── Design system, themes, responsive layout,
│       glassmorphism and animations
│
├── ⚙️ script.js
│   └── Calculator engine, state management,
│       history, memory, keyboard and UI logic
│
└── 📖 README.md
    └── Project documentation
```

---

# 🚀 How to Run

## METHOD 01 — Run Directly ⭐ Recommended

CALYX is a dependency-free frontend application.

You do **not** need:

* Node.js
* npm
* Webpack
* Vite
* React
* A database
* An API
* A backend

Simply open:

```text
index.html
```

in a modern browser.

### Steps

**1. Download or clone the repository**

```bash
git clone https://github.com/your-username/CodeAlpha_FrontendTasks.git
```

**2. Enter the repository**

```bash
cd CodeAlpha_FrontendTasks
```

**3. Open the Task 2 folder**

```bash
cd Task-2-Calculator
```

**4. Launch the application**

Open:

```text
index.html
```

with:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Apple Safari

That's it.

---

# 🧑‍💻 METHOD 02 — VS Code

If you're using **Visual Studio Code**:

### Step 1

Open the project folder in VS Code.

```text
CodeAlpha_FrontendTasks/
└── Task-2-Calculator/
```

### Step 2

Open:

```text
index.html
```

### Step 3

Run it using your preferred browser.

If you have the **Live Server** extension installed:

```text
Right Click index.html
        ↓
Open with Live Server
```

The application will open in your browser automatically.

---

# 🌐 METHOD 03 — Local HTTP Server

For a local development server, you can use Python if installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Or from the project directory:

```bash
cd Task-2-Calculator
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

> **No npm installation is required.**

---

# 🧪 Verification Matrix

| Test               | Expected Result |
| ------------------ | --------------- |
| `2 + 2`            | `4`             |
| `10 − 3`           | `7`             |
| `6 × 7`            | `42`            |
| `20 ÷ 4`           | `5`             |
| `0.1 + 0.2`        | `0.3`           |
| `5 ÷ 0`            | Error message   |
| `−15 + 8`          | `−7`            |
| `50 × 10%`         | `5`             |
| `5 + 5 = + 2`      | `12`            |
| Keyboard numbers   | Supported       |
| Keyboard operators | Supported       |
| Backspace          | Supported       |
| Escape             | Clears          |
| History            | Supported       |
| Memory             | Supported       |
| Theme switching    | Supported       |

---

# ♿ Accessibility

CALYX follows modern accessibility principles.

### Included

* Semantic HTML5
* Accessible button labels
* ARIA attributes
* Keyboard navigation
* Visible focus states
* `aria-live` result announcements
* Responsive touch targets
* High-contrast interface
* Reduced-motion consideration

---

# 🛠️ Technology Stack

<div align="center">

| Technology             | Purpose                   |
| ---------------------- | ------------------------- |
| **HTML5**              | Semantic structure        |
| **CSS3**               | Visual system & animation |
| **JavaScript ES6+**    | Application logic         |
| **CSS Grid**           | Calculator layout         |
| **Flexbox**            | UI alignment              |
| **Web Audio API**      | Sound feedback            |
| **Clipboard API**      | Copy results              |
| **Local Browser APIs** | Native functionality      |

</div>

### Zero Dependencies

```text
React       ❌
Vue         ❌
Angular     ❌
Bootstrap   ❌
Tailwind    ❌
jQuery      ❌

HTML5       ✓
CSS3        ✓
JavaScript  ✓
```

---

# 📊 Project Highlights

```text
┌────────────────────────────────────────┐
│             CALYX METRICS              │
├────────────────────────────────────────┤
│                                        │
│  Frameworks             0              │
│  External Dependencies  0              │
│  Backend                0              │
│  Build Step             0              │
│                                        │
│  HTML5                  ✓              │
│  CSS3                   ✓              │
│  ES6+ JavaScript       ✓              │
│  Responsive             ✓              │
│  Keyboard Support       ✓              │
│  Safe Parser            ✓              │
│  History                ✓              │
│  Memory                 ✓              │
│  Theme Switching        ✓              │
│  Animations             ✓              │
│                                        │
└────────────────────────────────────────┘
```

---

# 🎓 CodeAlpha Internship

This project was developed as part of the:

**CodeAlpha Frontend Development Internship**

### Task

```text
TASK 02
───────
Build a Calculator
```

The official task requirements include:

* Basic calculator functionality
* Arithmetic operations
* Calculator display
* User input
* Clearing functionality
* Real-time result display
* Keyboard support as a bonus
* Styling enhancements as a bonus

CALYX extends these requirements with additional interface, interaction, accessibility, and mathematical-engine capabilities.

---

# 👨‍💻 Developer

**Developer:** Antigravity Pair Programmer

**Project:** CALYX — Advanced Calculator

**Program:** CodeAlpha Frontend Development Internship

---

# 🏆 Quality Philosophy

CALYX was built around one principle:

> **A calculator can be simple internally while still being exceptional externally.**

The goal was not merely to satisfy the arithmetic requirements.

The goal was to create a project that demonstrates:

```text
FUNCTIONALITY
      +
ENGINEERING
      +
DESIGN
      +
ACCESSIBILITY
      +
MOTION
      +
RESPONSIVE UX
      =
POLISHED FRONTEND EXPERIENCE
```

---

# 🔮 Future Improvements

Potential future enhancements include:

* Scientific calculator mode
* Trigonometric functions
* Square root and exponentiation
* Persistent history using LocalStorage
* Custom expression input
* Calculation export
* PWA support
* Installable mobile experience
* Haptic feedback on supported devices
* More visual themes
* Advanced mathematical functions

---

# 📜 License

This project was created for educational and internship purposes as part of the **CodeAlpha Frontend Development Internship**.

---

<div align="center">

# ⚡ CALYX

### `CALCULATE WITHOUT COMPROMISE.`

**Built with HTML5 · CSS3 · Vanilla JavaScript**

<br>

`TASK 02 / CODEALPHA FRONTEND DEVELOPMENT INTERNSHIP`

<br>

---

### ✦ Designed for precision.

### ✦ Engineered for interaction.

### ✦ Built for the browser.

</div>
