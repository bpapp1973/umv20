export class Invoice {
  id: number;
  invoiceType: number;
  invoiceTypeName: string;
  invoiceWarehouseMove: number;
  invoicePartnerId: number;
  invoicePartnerName: string;
  invoicePartnerTransport: number;
  invoicePaymode: number;
  invoiceStartDate: string;
  invoiceEndDate: string;
  invoicePayDate: string;
  invoiceCurrency: string;
  invoicePricelist: number;
  invoiceNetto: number;
  invoiceVat: number;
  invoiceBrutto: number;
  invoiceId: number;
  invoiceNumber: string;
  invoiceUserId: number;
  companyId: number;
  deleted: number;
  invoiceCreated: string;
  invoiceNote: string;
  invoiceBenefitCode: string;
  transferPrice: number;
  transferDate: string;
  invoiceSale: number;
  html: number;
  userNote: string;
  emailSend: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
