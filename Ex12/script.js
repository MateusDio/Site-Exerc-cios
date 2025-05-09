let timer;
    let seconds = 0;
    let isRunning = false;

    function formatTime(sec) {
      const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
      const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
      const secs = String(sec % 60).padStart(2, '0');
      return `${hrs}:${mins}:${secs}`;
    }

    function updateDisplay() {
      document.getElementById("timer").textContent = formatTime(seconds);
    }

    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }

    function pauseTimer() {
      isRunning = false;
      clearInterval(timer);
    }

    function resetTimer() {
      pauseTimer();
      seconds = 0;
      updateDisplay();
    }

    updateDisplay();