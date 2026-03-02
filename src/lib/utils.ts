import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, fmt = 'MMMM d, yyyy'): string {
  return format(parseISO(dateString), fmt)
}

export function formatDateShort(dateString: string): string {
  return format(parseISO(dateString), 'MMM d, yyyy')
}
