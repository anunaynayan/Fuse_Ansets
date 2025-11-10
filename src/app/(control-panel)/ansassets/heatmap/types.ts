export type ChannelMetric = {
  channel: string;
  metric: string;
  value: number;
  impressions?: number;
  conversions?: number;
};

export type CampaignClick = {
  campaign: string;
  date: string; // YYYY-MM-DD
  clicks: number;
  impressions?: number;
  cost?: number;
};
