/**
 * CALYX — Advanced Calculator State & Logic Engine
 * Built for CodeAlpha Frontend Internship — Task 02
 * Pure Vanilla JavaScript (ES6+) with zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. DOM Element Selection
     ========================================================================== */
  const mainDisplay = document.getElementById('main-display');
  const expressionDisplay = document.getElementById('expression-display');
  const statusText = document.getElementById('status-text');
  const memoryBadge = document.getElementById('memory-badge');
  const copyBtn = document.getElementById('btn-copy');
  const copyToast = document.getElementById('copy-toast');

  // Controls & Modals
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const sunIcon = themeToggleBtn.querySelector('.sun-icon');
  const moonIcon = themeToggleBtn.querySelector('.moon-icon');
  const soundToggleBtn = document.getElementById('btn-sound');
  const soundOnIcon = soundToggleBtn.querySelector('.sound-on-icon');
  const soundOffIcon = soundToggleBtn.querySelector('.sound-off-icon');

  const historyToggleBtn = document.getElementById('btn-history-toggle');
  const historyDrawer = document.getElementById('history-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const closeHistoryBtn = document.getElementById('btn-close-history');
  const clearHistoryBtn = document.getElementById('btn-clear-history');
  const historyList = document.getElementById('history-list');

  const shortcutsBtn = document.getElementById('btn-shortcuts');
  const shortcutsModal = document.getElementById('shortcuts-modal');
  const closeModalBtn = document.getElementById('btn-close-modal');

  const calculatorGrid = document.querySelector('.calculator-grid');
  const memoryBar = document.querySelector('.memory-bar');

  /* ==========================================================================
     2. Application State
     ========================================================================== */
  let currentInput = '0';
  let expressionTokens = [];
  let lastResult = null;
  let isEvaluated = false;
  let isErrorState = false;

  let memoryValue = 0;
  let historyLog = [];

  let soundEnabled = true;
  let audioCtx = null;

  /* ==========================================================================
     3. Audio Feedback Synthesizer (Web Audio API)
     ========================================================================== */
  function playClickSound(freq = 400, type = 'sine') {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      // Audio fallback silent
    }
  }

  /* ==========================================================================
     4. Safe Math Calculation Engine (Shunting-Yard & Precision Evaluator)
     ========================================================================== */
  
  /**
   * Fixes IEEE 754 floating-point inaccuracies (e.g. 0.1 + 0.2 = 0.3)
   */
  function sanitizePrecision(num, decimals = 10) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) return num;
    return Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);
  }

  /**
   * Returns precedence rank for operators
   */
  function getPrecedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
  }

  /**
   * Safe evaluation of a tokenized mathematical sequence
   * @param {Array} tokens - Array of numbers and operator strings e.g. ["12", "+", "5", "*", "3"]
   */
  function evaluateTokens(tokens) {
    if (!tokens || tokens.length === 0) return 0;

    // Convert to Postfix (RPN) via Shunting-Yard
    const outputQueue = [];
    const operatorStack = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (!isNaN(parseFloat(token))) {
        outputQueue.push(parseFloat(token));
      } else if (['+', '-', '*', '/'].includes(token)) {
        while (
          operatorStack.length > 0 &&
          getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    // Evaluate Postfix Expression
    const evalStack = [];
    for (let i = 0; i < outputQueue.length; i++) {
      const item = outputQueue[i];

      if (typeof item === 'number') {
        evalStack.push(item);
      } else {
        if (evalStack.length < 2) return 'Error';
        const b = evalStack.pop();
        const a = evalStack.pop();

        let result = 0;
        switch (item) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            if (b === 0) return 'Cannot divide by zero';
            result = a / b;
            break;
          default:
            return 'Error';
        }
        evalStack.push(sanitizePrecision(result));
      }
    }

    if (evalStack.length !== 1) return 'Error';
    return evalStack[0];
  }

  /* ==========================================================================
     5. Formatting & UI Render Updates
     ========================================================================== */
  
  function formatNumber(valStr) {
    if (valStr === 'Cannot divide by zero' || valStr === 'Error') return valStr;
    if (!valStr && valStr !== 0) return '0';

    const numVal = parseFloat(valStr);
    if (isNaN(numVal)) return valStr;

    // Handle large scientific notation if needed
    if (Math.abs(numVal) >= 1e12 || (Math.abs(numVal) < 1e-7 && numVal !== 0)) {
      return numVal.toExponential(6);
    }

    const parts = valStr.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
  }

  function formatDisplayOperator(op) {
    switch (op) {
      case '*': return '×';
      case '/': return '÷';
      case '-': return '−';
      case '+': return '+';
      default: return op;
    }
  }

  function updateDisplay() {
    // Render Expression Display Line
    if (expressionTokens.length > 0) {
      const formattedExpr = expressionTokens.map(t => {
        return ['+', '-', '*', '/'].includes(t) ? ` ${formatDisplayOperator(t)} ` : formatNumber(t);
      }).join('');

      expressionDisplay.textContent = formattedExpr + (isEvaluated ? ' =' : '');
    } else {
      expressionDisplay.textContent = '';
    }

    // Render Main Display
    if (isErrorState) {
      mainDisplay.textContent = currentInput;
      mainDisplay.classList.add('error-state');
    } else {
      mainDisplay.classList.remove('error-state');
      mainDisplay.textContent = formatNumber(currentInput);
    }

    // Dynamic font resizing for long numbers
    const len = mainDisplay.textContent.length;
    if (len > 14) {
      mainDisplay.style.fontSize = '1.5rem';
    } else if (len > 10) {
      mainDisplay.style.fontSize = '1.9rem';
    } else {
      mainDisplay.style.fontSize = '2.5rem';
    }

    // Active Operator Highlight on Grid Buttons
    const opBtns = document.querySelectorAll('.btn-operator');
    opBtns.forEach(btn => {
      const btnOp = btn.getAttribute('data-val');
      const lastToken = expressionTokens[expressionTokens.length - 1];
      if (!isEvaluated && expressionTokens.length > 0 && lastToken === btnOp && currentInput === '') {
        btn.classList.add('active-op');
      } else {
        btn.classList.remove('active-op');
      }
    });
  }

  function setStatus(msg) {
    statusText.textContent = msg;
  }

  /* ==========================================================================
     6. State Machine Handlers
     ========================================================================== */

  function handleDigit(digit) {
    playClickSound(500, 'sine');
    if (isErrorState) handleClear();

    if (isEvaluated) {
      // Start a fresh calculation after equals if user types a new digit
      currentInput = digit;
      expressionTokens = [];
      isEvaluated = false;
    } else {
      if (currentInput === '0') {
        currentInput = digit;
      } else {
        // Prevent unreasonably long entries
        if (currentInput.replace(/[-.]/g, '').length >= 15) return;
        currentInput += digit;
      }
    }
    setStatus('Ready');
    updateDisplay();
  }

  function handleDecimal() {
    playClickSound(550, 'sine');
    if (isErrorState) handleClear();

    if (isEvaluated) {
      currentInput = '0.';
      expressionTokens = [];
      isEvaluated = false;
    } else {
      if (!currentInput.includes('.')) {
        currentInput = currentInput === '' ? '0.' : currentInput + '.';
      }
    }
    setStatus('Ready');
    updateDisplay();
  }

  function handleOperator(op) {
    playClickSound(420, 'triangle');
    if (isErrorState) handleClear();

    if (isEvaluated) {
      // Continue calculations using previous result as first operand
      expressionTokens = [currentInput, op];
      currentInput = '';
      isEvaluated = false;
    } else {
      if (currentInput !== '') {
        expressionTokens.push(currentInput);
        expressionTokens.push(op);
        currentInput = '';
      } else if (expressionTokens.length > 0) {
        // Replace previous operator if user clicks consecutive operators
        const lastIndex = expressionTokens.length - 1;
        if (['+', '-', '*', '/'].includes(expressionTokens[lastIndex])) {
          expressionTokens[lastIndex] = op;
        }
      } else {
        // If initial input is empty, default first operand to 0
        expressionTokens.push('0');
        expressionTokens.push(op);
        currentInput = '';
      }
    }
    setStatus('Calculating');
    updateDisplay();
  }

  function handleEquals() {
    playClickSound(650, 'sine');
    if (isErrorState || isEvaluated) return;

    if (currentInput !== '') {
      expressionTokens.push(currentInput);
    } else if (expressionTokens.length > 0) {
      // If trailing operator, remove it before evaluating
      const lastToken = expressionTokens[expressionTokens.length - 1];
      if (['+', '-', '*', '/'].includes(lastToken)) {
        expressionTokens.pop();
      }
    }

    if (expressionTokens.length === 0) return;

    const fullExprString = expressionTokens.map(t => formatDisplayOperator(t)).join(' ');
    const result = evaluateTokens(expressionTokens);

    if (result === 'Cannot divide by zero' || result === 'Error') {
      isErrorState = true;
      currentInput = result;
      setStatus('Error');
    } else {
      lastResult = result;
      currentInput = result.toString();
      isEvaluated = true;
      setStatus('Result');

      // Add to History
      addHistoryItem(fullExprString, formatNumber(currentInput));
    }

    updateDisplay();
  }

  function handleClear() {
    playClickSound(300, 'sawtooth');
    currentInput = '0';
    expressionTokens = [];
    lastResult = null;
    isEvaluated = false;
    isErrorState = false;
    setStatus('Ready');
    updateDisplay();
  }

  function handleBackspace() {
    playClickSound(350, 'sine');
    if (isErrorState || isEvaluated) {
      handleClear();
      return;
    }

    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '-' || currentInput === '-0') currentInput = '0';
    } else {
      currentInput = '0';
    }
    updateDisplay();
  }

  function handleNegate() {
    playClickSound(480, 'sine');
    if (isErrorState) return;

    if (currentInput !== '0' && currentInput !== '') {
      if (currentInput.startsWith('-')) {
        currentInput = currentInput.substring(1);
      } else {
        currentInput = '-' + currentInput;
      }
    }
    updateDisplay();
  }

  function handlePercent() {
    playClickSound(520, 'sine');
    if (isErrorState) return;

    const val = parseFloat(currentInput);
    if (!isNaN(val)) {
      const pct = sanitizePrecision(val / 100);
      currentInput = pct.toString();
      updateDisplay();
    }
  }

  /* ==========================================================================
     7. Memory Functions
     ========================================================================== */
  
  function updateMemoryUI() {
    if (memoryValue !== 0) {
      memoryBadge.classList.remove('hidden');
    } else {
      memoryBadge.classList.add('hidden');
    }
  }

  function handleMemory(action) {
    playClickSound(600, 'square');
    const val = parseFloat(currentInput);

    switch (action) {
      case 'mc':
        memoryValue = 0;
        setStatus('Memory Cleared');
        break;
      case 'mr':
        currentInput = memoryValue.toString();
        isEvaluated = false;
        setStatus('Memory Recalled');
        break;
      case 'm-plus':
        if (!isNaN(val)) memoryValue = sanitizePrecision(memoryValue + val);
        setStatus('Memory Added');
        break;
      case 'm-minus':
        if (!isNaN(val)) memoryValue = sanitizePrecision(memoryValue - val);
        setStatus('Memory Subtracted');
        break;
    }
    updateMemoryUI();
    updateDisplay();
  }

  /* ==========================================================================
     8. History Drawer Management
     ========================================================================== */

  function addHistoryItem(expr, res) {
    const item = {
      expr: expr,
      res: res,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    historyLog.unshift(item);
    renderHistory();
  }

  function renderHistory() {
    if (historyLog.length === 0) {
      historyList.innerHTML = `
        <div class="history-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p>No calculations yet</p>
          <span>Calculations will be saved automatically as you work.</span>
        </div>`;
      return;
    }

    historyList.innerHTML = historyLog.map((item, idx) => `
      <div class="history-item" data-index="${idx}">
        <div class="history-item-expr">${item.expr} =</div>
        <div class="history-item-res">${item.res}</div>
      </div>
    `).join('');

    // Clicking a history item restores its result back into the display
    document.querySelectorAll('.history-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = el.getAttribute('data-index');
        const clicked = historyLog[idx];
        if (clicked) {
          currentInput = clicked.res.replace(/,/g, '');
          isEvaluated = true;
          updateDisplay();
          toggleHistoryDrawer(false);
        }
      });
    });
  }

  function toggleHistoryDrawer(show) {
    if (show) {
      historyDrawer.classList.add('open');
      drawerOverlay.classList.remove('hidden');
    } else {
      historyDrawer.classList.remove('open');
      drawerOverlay.classList.add('hidden');
    }
  }

  /* ==========================================================================
     9. Event Listeners (Click, Keypad, Keyboard)
     ========================================================================== */

  // Grid Click Delegation
  calculatorGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const action = btn.getAttribute('data-action');
    const val = btn.getAttribute('data-val');

    if (val && !action) {
      handleDigit(val);
    } else if (action === 'decimal') {
      handleDecimal();
    } else if (action === 'operator') {
      handleOperator(val);
    } else if (action === 'equals') {
      handleEquals();
    } else if (action === 'clear') {
      handleClear();
    } else if (action === 'backspace') {
      handleBackspace();
    } else if (action === 'negate') {
      handleNegate();
    } else if (action === 'percent') {
      handlePercent();
    }
  });

  // Memory Controls Delegation
  memoryBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-memory');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    handleMemory(action);
  });

  // Theme Toggle
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    if (newTheme === 'dark') {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
    playClickSound(700, 'sine');
  });

  // Sound Toggle
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      soundOnIcon.classList.remove('hidden');
      soundOffIcon.classList.add('hidden');
      playClickSound(800, 'sine');
    } else {
      soundOnIcon.classList.add('hidden');
      soundOffIcon.classList.remove('hidden');
    }
  });

  // Copy Result Button
  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(mainDisplay.textContent.replace(/,/g, '')).then(() => {
        copyToast.classList.remove('hidden');
        setTimeout(() => copyToast.classList.add('hidden'), 2000);
      });
    }
  });

  // History Panel Triggers
  historyToggleBtn.addEventListener('click', () => toggleHistoryDrawer(true));
  closeHistoryBtn.addEventListener('click', () => toggleHistoryDrawer(false));
  drawerOverlay.addEventListener('click', () => toggleHistoryDrawer(false));
  clearHistoryBtn.addEventListener('click', () => {
    historyLog = [];
    renderHistory();
  });

  // Shortcuts Modal Triggers
  shortcutsBtn.addEventListener('click', () => shortcutsModal.classList.remove('hidden'));
  closeModalBtn.addEventListener('click', () => shortcutsModal.classList.add('hidden'));
  shortcutsModal.addEventListener('click', (e) => {
    if (e.target === shortcutsModal) shortcutsModal.classList.add('hidden');
  });

  /* ==========================================================================
     10. Keyboard Support & Physical Key Press Feedback
     ========================================================================== */

  document.addEventListener('keydown', (e) => {
    // Avoid triggering when focused inside any text input if added later
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    let targetBtn = null;

    if (e.key >= '0' && e.key <= '9') {
      handleDigit(e.key);
      targetBtn = document.querySelector(`.btn-num[data-val="${e.key}"]`);
    } else if (e.key === '.') {
      handleDecimal();
      targetBtn = document.querySelector('.btn[data-action="decimal"]');
    } else if (['+', '-', '*', '/'].includes(e.key)) {
      handleOperator(e.key);
      targetBtn = document.querySelector(`.btn-operator[data-val="${e.key}"]`);
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      handleEquals();
      targetBtn = document.querySelector('.btn-equals');
    } else if (e.key === 'Backspace') {
      handleBackspace();
      targetBtn = document.querySelector('.btn[data-action="backspace"]');
    } else if (e.key === 'Escape') {
      handleClear();
      targetBtn = document.querySelector('.btn[data-action="clear"]');
    } else if (e.key === '%') {
      handlePercent();
      targetBtn = document.querySelector('.btn[data-action="percent"]');
    } else if (e.key.toLowerCase() === 'h') {
      toggleHistoryDrawer(!historyDrawer.classList.contains('open'));
    } else if (e.key === '?') {
      shortcutsModal.classList.toggle('hidden');
    }

    // Visual press animation simulation for matching button
    if (targetBtn) {
      targetBtn.classList.add('key-pressed');
      setTimeout(() => targetBtn.classList.remove('key-pressed'), 150);
    }
  });

  // Initial setup
  updateDisplay();
});
