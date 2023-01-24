export function getWeatherResources(): Promise<Array<WeatherResource>> {
    return Promise.resolve([{
        id: 1,
        name: 'RCC - ACIS',
        address: 'https://www.rcc-acis.org/examples.html',
        keywords: ['acis', 'rcc', 'example', 'demo']
    }, {
        id: 2,
        name: 'Western Region Climate Center',
        address: 'https://wrcc.dri.edu/',
        keywords: ['western', 'climate', 'stuff', 'good']
    }]);
}

export interface WeatherResource {
    id: Number,
    name: string,
    address: string,
    keywords: Array<string>,
}