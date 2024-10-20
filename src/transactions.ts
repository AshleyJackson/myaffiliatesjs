import { createClient } from "./common";
import fs from 'fs'
import { convertXML } from "simple-xml-to-json";

const axios = createClient()

enum transaction_type {
  manual = 11,
  administrative = 4,
}
enum transaction_status {
  pending = 'Pending',
  approved = 'Approved',
  paid = 'Paid',
  denied = 'Denied',
  dead = 'Dead',
  rejected = 'Rejected',
}

type create_transaction_params = {
  FEED_ID: 27,
  user_id: string,
  transaction_type: transaction_type,
  transaction_date: string,
  display_date: string,
  amount: number,
  converted_amount: number,
  visbility: boolean,
  status: transaction_status,
  assignee?: number,
  wallet?: string,
  reference?: string,
  notes?: string,
  comment?: string
}

type create_transaction_output = | {
  transaction_id: number,
} | {
  errors: string
}

export async function create_transaction(user_id: string, transaction_type: transaction_type, transaction_date: string, display_date: string, amount: number, converted_amount: number, visbility: boolean, status: transaction_status, assignee?: number, wallet?: string, reference?: string, notes?: string, comment?: string) {
  const params: create_transaction_params = {
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
  }
  const request = await axios.post('/feeds.php', {}, {
    params: params
  });
  let output: create_transaction_output
  const response = request.data;
  const parsed_xml: any = convertXML(response);
  if (parsed_xml.ERRORS) {
    output = {
      errors: parsed_xml.ERRORS.ERROR
    }
  } else {
    output = {
      transaction_id: parsed_xml.TRANSACTION.TRANSACTION_ID,
    }
  }
  return output
}
