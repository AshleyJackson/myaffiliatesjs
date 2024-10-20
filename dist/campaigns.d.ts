type create_campaign_output = {
    tracking_id: number;
    user_id: number;
    description: string;
};
export declare function view_campaigns(user_id: number, campaign_id: number, metadata?: string, created?: {
    from: string;
    to: string;
}, modified?: {
    from: string;
    to: string;
}): Promise<any>;
export declare function create_campaign(campaign_id: number, user_id: number, description: string): Promise<create_campaign_output>;
export {};
