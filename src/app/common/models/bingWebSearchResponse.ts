
export interface BingWebSearchResponse {
    _type: string;
    queryContext: QueryContext;
    WebPages: WebPages;
    images: images;
    news: news;
    videos: videos;
}

export interface QueryContext {
    OriginalQuery: string;
}
export interface WebPages {
    webSearchUrl: string;
    totalEstimatedMatches: number;
    value: value[];
}
export interface images {
    id: string;
    readLink: string;
    webSearchUrl: string;
    isFamilyFriendly: boolean;
}
export interface news {
    id: string;
    readLink: string;
}
export interface videos {
    id: string;
    readLink: string;
    webSearchUrl: string;
    scenario: string;
    isFamilyFriendly: boolean;
}
export interface value {
    id: string;
    name: string;
    url: string;
    isFamilyFriendly: boolean;
    displayUrl: string;
    snippet: string;
    dateLastCrawled: Date;
    language: string;
    isNavigational: boolean
}
export interface rankingResponse {
    mainline: items[];
}
export interface items {
    answerType: string;
   
}