export type PaginationItem = {
  count: number;
  total: number;
  per_page: number;
};
export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: PaginationItem;
};
export type DataImage = {
  image_url: string;
  small_image_url: string;
  medium_image_url?: string;
  large_image_url: string;
  maximum_image_url?: string;
};
export type DataAiredProp = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type DataBroadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};
export type DataDetail = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
export type Data = {
  mal_id: number;
  url: string;
  images: {
    jpg: DataImage;
    webp: DataImage;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: DataImage;
  };
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[] | [];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string | null;
    prop: {
      from: DataAiredProp;
      to: DataAiredProp;
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  season: string;
  year: number;
  broadcast: DataBroadcast;
  producers: DataDetail[] | [];
  licensors: DataDetail[] | [];
  studios: DataDetail[] | [];
  genres: DataDetail[] | [];
  explicit_genres: DataDetail[] | [];
  themes: DataDetail[] | [];
  demographics: DataDetail[] | [];
};
export type DataAnime = {
  pagination: Pagination;
  data: Data[];
};
