export type ServerSideComponentProps<Params, SearchParams = unknown> = {
  params: Params;
  searchParams: SearchParams & { viewport: 'mobile' | 'desktop'; os: string };
};

export type DataLayerParameters<AdditionalParams = unknown> = {
  event: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
} & AdditionalParams;
