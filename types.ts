
export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  INR = 'INR',
}

export interface User {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Emoji or SVG identifier
  isCustom: boolean;
}

export enum RecurrenceInterval {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface Expense {
  id: string;
  amount: number;
  currency: Currency;
  date: string; // ISO string date
  categoryId: string;
  description: string;
  notes?: string;
  paidByUserId: string;
  isRecurring: boolean;
  recurrenceInterval?: RecurrenceInterval;
  nextRecurrenceDate?: string; // ISO string date
  groupId?: string;
  participants?: { userId: string; share: number }[]; // User ID and their share of this expense
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  memberIds: string[];
  defaultCurrency: Currency;
}

export interface Settlement {
  fromUserId: string;
  toUserId: string;
  amount: number;
  currency: Currency;
}

export enum AppView {
  DASHBOARD = 'dashboard',
  EXPENSES = 'expenses',
  ADD_EXPENSE = 'add_expense', // Can be for individual or group
  GROUPS = 'groups',
  GROUP_DETAILS = 'group_details',
  SETTINGS = 'settings',
}

export type Theme = 'light' | 'dark';

export interface SavingsTip {
  id: string;
  tip: string;
}
