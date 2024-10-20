import { createClient } from "./common";
import { convertXML } from "simple-xml-to-json";
const axios = createClient();
var transaction_type;
(function (transaction_type) {
    transaction_type[transaction_type["manual"] = 11] = "manual";
    transaction_type[transaction_type["administrative"] = 4] = "administrative";
})(transaction_type || (transaction_type = {}));
var transaction_status;
(function (transaction_status) {
    transaction_status["pending"] = "Pending";
    transaction_status["approved"] = "Approved";
    transaction_status["paid"] = "Paid";
    transaction_status["denied"] = "Denied";
    transaction_status["dead"] = "Dead";
    transaction_status["rejected"] = "Rejected";
})(transaction_status || (transaction_status = {}));
export async function create_transaction(user_id, transaction_type, transaction_date, display_date, amount, converted_amount, visbility, status, assignee, wallet, reference, notes, comment) {
    const params = {
        FEED_ID: 27,
        user_id: user_id,
        transaction_type: transaction_type,
        transaction_date: transaction_date,
        display_date: display_date,
        amount: amount,
        converted_amount: converted_amount,
        visbility: visbility,
        status: status,
        assignee: assignee,
        wallet: wallet,
        reference: reference,
        notes: notes,
        comment: comment
    };
    const request = await axios.post('/feeds.php', {}, {
        params: params
    });
    let output;
    const response = request.data;
    const parsed_xml = convertXML(response);
    if (parsed_xml.ERRORS) {
        output = {
            errors: parsed_xml.ERRORS.ERROR
        };
    }
    else {
        output = {
            transaction_id: parsed_xml.TRANSACTION.TRANSACTION_ID,
        };
    }
    return output;
}
