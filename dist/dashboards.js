import { createClient } from "./common";
import * as luxon from 'luxon';
const axios = createClient();
export async function dashboard_graph_data() {
    const request = await axios.get(`/ajax.php?task=dashboard_graph_data&country=%&manager=&dashboard_tag=&dashboard_plan=`);
    let data = request.data;
    let output = [];
    for (const line of data.split('\n')) {
        let [month, clicks_count, first_depositors, signups, earnings] = line.split('\t');
        const earningsNo = parseFloat(earnings);
        const clicksNo = parseInt(clicks_count);
        const first_depositorsNo = parseInt(first_depositors);
        const signupsNo = parseInt(signups);
        output.push({
            month: month,
            clicks_count: clicksNo,
            first_depositors: first_depositorsNo,
            signups: signupsNo,
            earnings: earningsNo
        });
    }
    return output;
}
export async function get_top_comissions_by_channel() {
    const start_of_month = luxon.DateTime.local().startOf('month').toISODate();
    const end_of_month = luxon.DateTime.local().endOf('month').toISODate();
    const request = await axios.get(`/ajax.php?task=generate_commission_graph&date_from=${start_of_month}&date_to=${end_of_month}&dashboardManager=&current_country=%&dashboard_tag=&mode=plan`);
    let output = [];
    const data = request.data;
    for (const commission of data) {
        output.push({
            channel: commission[0],
            amount: parseFloat(commission[1])
        });
    }
    return output;
}
