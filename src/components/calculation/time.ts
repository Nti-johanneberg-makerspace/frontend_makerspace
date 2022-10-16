export function tid(tidis: number): string {
    let hour:number = Math.floor(tidis  / 3600);
    let minute:number = Math.floor(tidis % 3600 / 60);
    return `${String(hour).length === 1 ? "0" + String(hour) : hour}:${String(minute).length === 1 ? "0" +String(minute): minute}`
}//funktionen tar tid i sekunder och ger ut en sträng som delar upp tiden i timmar och minuter