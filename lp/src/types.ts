/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RoutineItem {
  id: string;
  name: string;
  time: string;
  status: 'completed' | 'due' | 'overdue' | 'skipped' | 'none';
  productsCount?: number;
  products?: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  expiresInDays?: number;
  timerMinutes?: number;
  imageColor: string;
}

export interface ConcernItem {
  id: string;
  label: string;
  level: 'low' | 'medium' | 'high' | 'none';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  handle: string;
  role: string;
  company: string;
  score: number;
}
