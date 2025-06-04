
import React from 'react';
import { User, Category, Currency } from './types';

export const APP_NAME = "SplitSmart";

export const DEFAULT_USERS: User[] = [
  { id: 'user_alice', name: 'Alice' },
  { id: 'user_bob', name: 'Bob' },
  { id: 'user_charlie', name: 'Charlie' },
  { id: 'user_david', name: 'David' },
];

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'cat_food', name: 'Food & Drinks', icon: '🍔', isCustom: false },
  { id: 'cat_groceries', name: 'Groceries', icon: '🛒', isCustom: false },
  { id: 'cat_transport', name: 'Transport', icon: '🚗', isCustom: false },
  { id: 'cat_housing', name: 'Housing', icon: '🏠', isCustom: false },
  { id: 'cat_entertainment', name: 'Entertainment', icon: '🎉', isCustom: false },
  { id: 'cat_utilities', name: 'Utilities', icon: '💡', isCustom: false },
  { id: 'cat_health', name: 'Health', icon: '❤️‍🩹', isCustom: false },
  { id: 'cat_clothing', name: 'Clothing', icon: '👕', isCustom: false },
  { id: 'cat_other', name: 'Other', icon: '📎', isCustom: false },
];

export const CURRENCIES_LIST: { code: Currency; symbol: string; name: string }[] = [
  { code: Currency.USD, symbol: '$', name: 'US Dollar' },
  { code: Currency.EUR, symbol: '€', name: 'Euro' },
  { code: Currency.GBP, symbol: '£', name: 'British Pound' },
  { code: Currency.INR, symbol: '₹', name: 'Indian Rupee' },
];

export const getCurrencySymbol = (currencyCode: Currency): string => {
  const currency = CURRENCIES_LIST.find(c => c.code === currencyCode);
  return currency ? currency.symbol : '$';
};

// SVG Icons (Heroicons)
export const DashboardIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export const ExpensesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);

export const GroupsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.741M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75a3 3 0 11-6 0 3 3 0 016 0zM12 12.75v.008H12.008V12.75H12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 100-12 6 6 0 000 12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75a9.094 9.094 0 001.5 2.537M3 9.75A9.007 9.007 0 0112 3.75" />
  </svg>
);

export const SettingsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const PlusIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const BackIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const UserCircleIcon = (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
);

export const TrashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.22.094m7.072 0l-.213-.213A3.375 3.375 0 0015.75 4.5h-7.5a3.375 3.375 0 00-2.588.995l-.213.213z" />
  </svg>
);

export const EditIcon = (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
);

export const LightBulbIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-3 0M12.75 4.5v-.75a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.75m0 0h.01M12 18.75h.008v.008H12v-.008zm0 0h.008v.008H12v-.008zm0 0h.008v.008H12v-.008zm0 0h.008v.008H12v-.008zM9.75 15.75H6M14.25 15.75H18M6 10.5V9A6 6 0 0112 3v1.5" />
  </svg>
);
