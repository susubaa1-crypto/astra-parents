export interface MemberResult {
  count: number;
  dates: string[];
  contents: string[];
}

export interface FileResults {
  [memberName: string]: MemberResult;
}

export interface DashboardData {
  generated_at: string;
  files: string[];
  members: string[];
  results: {
    [fileName: string]: FileResults;
  };
}

export interface SummaryStats {
  totalMembers: number;
  averageRate: number;
  totalSubmissions: number;
}

export interface ChartData {
  name: string;
  count: number;
}

export interface MemberStatus {
  name: string;
  submissions: { [fileName: string]: boolean };
  totalCount: number;
  rate: number;
}
