import { DashboardData, MemberStatus, SummaryStats, ChartData } from './types';
import dashboardRawData from '../data/dashboard_data.json';

const data = dashboardRawData as DashboardData;

export function getDashboardData(): DashboardData {
    return data;
}

export function getSummaryStats(): SummaryStats {
    const totalMembers = data.members.length;
    const totalFiles = data.files.length;
    let totalSubmissions = 0;
    let totalPossible = totalMembers * totalFiles;
    let actualSubmissions = 0;

    data.files.forEach((file) => {
        const fileName = `${file}.xlsx`;
        const fileResult = data.results[fileName];
        if (fileResult) {
            data.members.forEach((member) => {
                if (fileResult[member] && fileResult[member].count > 0) {
                    actualSubmissions++;
                }
                if (fileResult[member]) {
                    totalSubmissions += fileResult[member].count;
                }
            });
        }
    });

    const averageRate = totalPossible > 0 ? (actualSubmissions / totalPossible) * 100 : 0;

    return {
        totalMembers,
        averageRate,
        totalSubmissions,
    };
}

export function getChartData(): ChartData[] {
    return data.files.map((file) => {
        const fileName = `${file}.xlsx`;
        const fileResult = data.results[fileName];
        let count = 0;
        if (fileResult) {
            data.members.forEach((member) => {
                if (fileResult[member] && fileResult[member].count > 0) {
                    count++;
                }
            });
        }
        return {
            name: file.split('_').pop() || file, // Extract date part if possible
            count,
        };
    });
}

export function getMemberStatusList(): MemberStatus[] {
    return data.members.map((member) => {
        const submissions: { [fileName: string]: { isSubmitted: boolean; contents: string[]; date: string } } = {};
        let totalCount = 0;
        let submittedCount = 0;

        data.files.forEach((file) => {
            const fileName = `${file}.xlsx`;
            const fileResult = data.results[fileName];
            const memberRes = fileResult ? fileResult[member] : null;
            const isSubmitted = !!(memberRes && memberRes.count > 0);

            submissions[file] = {
                isSubmitted,
                contents: memberRes ? memberRes.contents : [],
                date: memberRes && memberRes.dates.length > 0 ? memberRes.dates[0] : ''
            };

            if (isSubmitted) {
                submittedCount++;
            }
            if (memberRes) {
                totalCount += memberRes.count;
            }
        });

        return {
            name: member,
            submissions: Object.fromEntries(Object.entries(submissions).map(([k, v]) => [k, v.isSubmitted])),
            totalCount,
            rate: data.files.length > 0 ? (submittedCount / data.files.length) * 100 : 0,
        };
    });
}

export function getMemberDetail(name: string) {
    const memberStat = getMemberStatusList().find(m => m.name === name);
    if (!memberStat) return null;

    const details: { fileName: string; isSubmitted: boolean; contents: string[]; date: string }[] = [];

    data.files.forEach((file) => {
        const fileName = `${file}.xlsx`;
        const fileResult = data.results[fileName];
        const memberRes = fileResult ? fileResult[name] : null;

        details.push({
            fileName: file,
            isSubmitted: !!(memberRes && memberRes.count > 0),
            contents: memberRes ? memberRes.contents : [],
            date: memberRes && memberRes.dates.length > 0 ? memberRes.dates[0] : ''
        });
    });

    return {
        ...memberStat,
        details
    };
}

export function getMissingRecently(): string[] {
    const lastFile = data.files[data.files.length - 1];
    const fileName = `${lastFile}.xlsx`;
    const fileResult = data.results[fileName];

    if (!fileResult) return [];

    return data.members.filter((member) => {
        return !fileResult[member] || fileResult[member].count === 0;
    });
}
