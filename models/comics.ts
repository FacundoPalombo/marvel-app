export type ComicsResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Comics;
};

export type Comics = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
};

export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: DateFrom[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
};

export type Events = {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
};

export type Item2 = {
  resourceURI: string;
  name: string;
  type: string;
};

export type Characters = {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
};

export type Creators = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Item = {
  resourceURI: string;
  name: string;
  role: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type Price = {
  type: string;
  price: number;
};

export type DateFrom = {
  type: string;
  date: string;
};

export type Series = {
  resourceURI: string;
  name: string;
};

export type Url = {
  type: string;
  url: string;
};
