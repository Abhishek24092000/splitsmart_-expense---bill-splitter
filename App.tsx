
import React, { useState, useEffect, useCallback } from 'react';
import { AppView, User, Category, Expense, Group, Currency, Theme } from './types';
import { DashboardIcon, ExpensesIcon, GroupsIcon, SettingsIcon, PlusIcon, getCurrencySymbol, APP_NAME, DEFAULT_USERS, DEFAULT_CATEGORIES } from './constants';
import useLocalStorage from './hooks/useLocalStorage';
import ThemeToggle from './components/ThemeToggle';
import { DashboardView, ExpensesView, ExpenseForm, GroupsView, SettingsView } from './components/ViewComponents';
import { processRecurringExpenses } from './utils/helpers';

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');
  const [currentView, setCurrentViewInternal] = useState<AppView>(AppView.DASHBOARD);
  const [viewParams, setViewParams] = useState<any>(null);

  const [users, setUsers] = useLocalStorage<User[]>('splitSmartUsers', DEFAULT_USERS);
  const [categories, setCategories] = useLocalStorage<Category[]>('splitSmartCategories', DEFAULT_CATEGORIES);
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('splitSmartExpenses', []);
  const [groups, setGroups] = useLocalStorage<Group[]>('splitSmartGroups', []);
  const [currentCurrency, setCurrentCurrency] = useLocalStorage<Currency>('splitSmartCurrency', Currency.USD);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setCurrentView = (view: AppView, params?: any) => {
    setCurrentViewInternal(view);
    setViewParams(params || null);
    window.scrollTo(0, 0); // Scroll to top on view change
  };

  // Process recurring expenses on load
  useEffect(() => {
    const { newExpenses, updatedRecurringExpenses } = processRecurringExpenses(expenses);
    if (newExpenses.length > 0) {
        // Combine new generated expenses with existing non-template expenses, then add updated templates
        setExpenses(prev => {
            const nonTemplateExpenses = prev.filter(e => !e.isRecurring);
            const allRecurringTemplates = updatedRecurringExpenses.filter(e => e.isRecurring); // Ensure only templates
            return [...nonTemplateExpenses, ...newExpenses, ...allRecurringTemplates];
        });
        // Optionally notify user: alert(`${newExpenses.length} recurring expense(s) added.`);
    } else {
        // If no new expenses were generated, still ensure the main list is updated with potentially changed nextRecurrenceDates
        setExpenses(updatedRecurringExpenses);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount


  const renderView = () => {
    const viewProps = { setCurrentView, users, setUsers, categories, setCategories, expenses, setExpenses, groups, setGroups, currentCurrency, setCurrentCurrency, viewParams };
    switch (currentView) {
      case AppView.DASHBOARD:
        return <DashboardView {...viewProps} />;
      case AppView.EXPENSES:
        return <ExpensesView {...viewProps} />;
      case AppView.ADD_EXPENSE:
        return <ExpenseForm {...viewProps} />;
      case AppView.GROUPS:
      case AppView.GROUP_DETAILS: // GroupsView handles both list and detail based on viewParams.groupId
        return <GroupsView {...viewProps} />;
      case AppView.SETTINGS:
        return <SettingsView {...viewProps} />;
      default:
        return <DashboardView {...viewProps} />;
    }
  };
  
  const navItems = [
    { view: AppView.DASHBOARD, label: 'Dashboard', icon: DashboardIcon },
    { view: AppView.EXPENSES, label: 'Expenses', icon: ExpensesIcon },
    { view: AppView.ADD_EXPENSE, label: 'Add New', icon: <div className="bg-primary dark:bg-secondary text-white rounded-full p-2 shadow-lg -mt-2">{PlusIcon}</div>, isCentral: true },
    { view: AppView.GROUPS, label: 'Groups', icon: GroupsIcon },
    { view: AppView.SETTINGS, label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-darkBg text-gray-900 dark:text-darkText">
      <header className="bg-white dark:bg-darkSurface shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary">{APP_NAME}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-darkMuted hidden sm:inline">Currency: {getCurrencySymbol(currentCurrency)}</span>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-0 sm:px-4 py-4 pb-20 sm:pb-4"> {/* Adjusted padding for bottom nav */}
        {renderView()}
      </main>

      {/* Bottom Navigation for mobile-like experience */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darkSurface border-t border-gray-200 dark:border-gray-700 shadow- ऊपर-lg z-40 md:hidden">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center justify-center p-2 rounded-md text-xs w-1/5
                          ${currentView === item.view ? 'text-primary dark:text-secondary font-semibold' : 'text-gray-500 dark:text-darkMuted hover:text-primary dark:hover:text-secondary'}
                          ${item.isCentral ? '-mt-1' : ''}`}
              aria-label={item.label}
            >
              <span className={item.isCentral ? '' : 'text-2xl'}>{item.icon}</span>
              {!item.isCentral && <span className="mt-1">{item.label}</span>}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;
