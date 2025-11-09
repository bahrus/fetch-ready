export interface FetchReadyEvent extends Event {
    url: string
    options: RequestInit
}