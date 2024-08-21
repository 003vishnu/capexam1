namespace ust.vishnuvardhan.thirunagari.db;
 
using { cuid, Currency } from '@sap/cds/common';
using { ust.vishnuvardhan.thirunagari.reuse } from './commons';
 
context master {
   
    entity employees: cuid {
        nameFirst: String(40);
        nameMiddle: String(40);
        nameLast: String(40);
        nameInitials: String(40);
        Gender: reuse.Gender;
        Language: String(1);
        phoneNumber: reuse.PhoneNumber;
        Email: reuse.Email;
        loginName: String(12);
        Currency: Currency;
        salaryAmount: reuse.AmountT;
        accountNumber: String(16);
        bankId: String(9);
        bankName: String(64);
    }
}
