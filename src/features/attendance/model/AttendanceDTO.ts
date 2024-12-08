export interface AttendanceDay {
  day: number;
  working_hour: number;
}

export interface AttendanceItem {
  id: number;
  full_name: string;
  total_hours: number;
  days: AttendanceDay[];
}

export interface AttendanceFilters {
  year: number | string;
  month: number | string;
}
