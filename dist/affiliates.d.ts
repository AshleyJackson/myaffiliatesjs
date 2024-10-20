/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const USER_ID = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the affiliate earnings that were generated within that date range.
 * @param baseUrl
 * @param username
 * @param password
 * @param USER_ID
 * @param date_from
 * @param date_to
 * @returns Promise<any>
 */
export declare function get_affiliate_earnings(baseUrl: string, username: string, password: string, USER_ID: number, date_from: Date, date_to: Date): Promise<any>;
type affiliate_account_type = '' | 'shell';
export declare function create_affiliate(account_type: affiliate_account_type, username: string, password: string, email: string, plan_force: string, plans: string, country?: string, referrer_token?: string): Promise<any>;
export {};
