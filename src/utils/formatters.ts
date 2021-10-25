import { format, parseISO } from 'date-fns'

export function formatNumber(number: number | string, currency?: string) {
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${parts.join(".")} ${(currency || '')}`;
}

export function formatDate(date: string) {
  return format(parseISO(date), 'dd MMM yyyy')
}
