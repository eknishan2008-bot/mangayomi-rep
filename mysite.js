const mangayomiSources = [{
    "name": "My Personal Stream",
    "id": 554433,
    "baseUrl": "https://google.com",
    "lang": "en",
    "typeSource": "anime",
    "itemType": 0,
    "version": "1.0.0",
    "pkgPath": "mysite.js"
}];

class DefaultSource extends Backend {
    async getAnimeList(page) {
        return { "list": [], "hasNextPage": false };
    }
}
