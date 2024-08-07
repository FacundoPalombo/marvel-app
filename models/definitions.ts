export type CharactersResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Characters;
};

export type Characters = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
};

export type ComicsItem = {
  resourceURI: string;
  name: string;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
};

export type StoriesItem = {
  resourceURI: string;
  name: string;
  type: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type URL = {
  type: string;
  url: string;
};
