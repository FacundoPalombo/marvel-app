type ComicsResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Comics;
};

type Comics = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
};

type Comic = {
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

type Events = {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
};

type Stories = {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
};

type Item2 = {
  resourceURI: string;
  name: string;
  type: string;
};

type Characters = {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
};

type Creators = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

type Item = {
  resourceURI: string;
  name: string;
  role: string;
};

type Thumbnail = {
  path: string;
  extension: string;
};

type Price = {
  type: string;
  price: number;
};

type DateFrom = {
  type: string;
  date: string;
};

type Series = {
  resourceURI: string;
  name: string;
};

type Url = {
  type: string;
  url: string;
};
