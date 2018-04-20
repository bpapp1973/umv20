export class Partner {
  id?: number;
  partnerName?: string;
  partnerZip?: string;
  partnerCountry?: string;
  partnerCity?: string;
  partnerAddress?: string;
  partnerVatnumberEu?: string;
  partnerVatnumberHu?: string;
  partnerIbanNumber?: string;
  partnerAccount?: string;
  partnerCredit?: string;
  partnerPromt?: string;
  partnerPaymode?: number;
  partnerMainpricelist?: number;
  partnerGroup?: string;
  partnerWarehouse?: number;
  partnerCurrency?: string;
  partnerMainpreference?: number;
  partnerTransportZip?: string;
  partnerTransportCity?: string;
  partnerTransportAddress?: string;
  partnerMailName?: string;
  partnerMailZip?: string;
  partnerMailCity?: string;
  partnerMailAddress?: string;
  partnerPhone?: string;
  partnerFax?: string;
  partnerMobile?: string;
  partnerEmail?: string;
  partnerWebsite?: string;
  partnerPicture?: string;
  partnerSale?: number;
  partnerSalePremium?: string;
  partnerContract?: number;
  partnerWarriant?: number;
  deleted?: number;
  partnerLat?: number;
  partnerLng?: number;
  partnerRemoteId?: string;
  partnerLang?: string;
  storeId?: number;
  password?: string;
  rank?: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
