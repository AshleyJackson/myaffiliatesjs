type AdminGraphData = {
    month: string;
    clicks_count: number;
    first_depositors: number;
    signups: number;
    earnings: number;
};
export declare function dashboard_graph_data(): Promise<AdminGraphData[]>;
type commissionData = {
    channel: string;
    amount: number;
};
export declare function get_top_comissions_by_channel(): Promise<commissionData[]>;
export {};
