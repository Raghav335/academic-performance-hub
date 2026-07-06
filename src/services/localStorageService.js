const STORAGE_KEY = "academic_performance_history";

// Save New Record
export const saveCalculation = (data) => {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  history.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...data,
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

// Get All Records
export const getCalculations = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

// Get Latest Record
export const getLatestCalculation = () => {
  const history = getCalculations();
  return history.length > 0 ? history[0] : null;
};

// Delete One Record
export const deleteCalculation = (id) => {
  const history = getCalculations().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

// Clear All History
export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};