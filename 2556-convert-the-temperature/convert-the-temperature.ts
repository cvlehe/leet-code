function convertTemperature(celsius: number): number[] {
    const k = celsius + 273.15;
    const f = celsius * 1.8 + 32;
    return [k, f];
};