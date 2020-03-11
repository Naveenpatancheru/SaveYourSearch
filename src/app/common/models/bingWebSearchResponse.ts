
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
    dateLastCrawled: Date;
    displayUrl: string;
    id: string;
    isFamilyFriendly: boolean;
    isNavigational: boolean;
    language: string;
    name: string;
    snippet: string;
    url: string; 
    userid: string;
}
export interface rankingResponse {
    mainline: items[];
}
export interface items {
    answerType: string;
   
}