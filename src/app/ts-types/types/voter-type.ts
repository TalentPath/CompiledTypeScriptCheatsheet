export type Voter = {
    name: string,
    age: number,
    registered: boolean
}

export type VoterFunc = {
    (voter: Voter, voters: Voter[]): void
}