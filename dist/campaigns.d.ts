/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the campaigns that were created within that date range.
 * @param baseUrl
 * @param username
 * @param password
 * @param date_from
 * @param date_to
 * @returns <any>
 */
export declare function view_campaigns(baseUrl: string, username: string, password: string, date_from: Date, date_to: Date): Promise<any>;
