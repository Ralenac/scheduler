import {useState} from 'react';

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

   // Set a new mode and add it to the history
  const transition = function(newMode, replace = false) {
    if (!replace) {
      setHistory(prev => [...prev, newMode])
      setMode(newMode)
    }
    setMode(newMode)
  }
 
  // Set a previous mode and removes the last one from the history
  const back = function() {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}

