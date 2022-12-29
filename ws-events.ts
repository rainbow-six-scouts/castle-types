/**
 * All events prefixed with `Server` are server => client
 * All events prefixed with `Client` are client => server
 */

interface Connect {
  kind: "connect";
  username: string;
  team: 0 | 1;
}
// Removed `username` from `Connect`
export type ClientConnect = Omit<Connect, "username">;
export type ServerConnect = Connect;

interface Disconnect {
  kind: "disconnect";
  reason: string;
}
export type ClientDisconnect = Disconnect;
export type ServerDisconnect = Disconnect;

interface ChangeTeams {
  kind: "change-teams";
  username: string;
  team: 0 | 1;
}
// Removed `username` and `team` from `ChangeTeams`
export type ClientChangeTeams = Omit<ChangeTeams, "username" | "team">;
export type ServerChangeTeams = ChangeTeams;

interface RingTeam {
  kind: "ring-team";
  team: 0 | 1;
}
// Removed `team` from `RingTeam`
export type ClientRingTeam = Omit<RingTeam, "team">;
export type ServerRingTeam = RingTeam;

/**
 *  These events are only send from the server
 */

export interface ServerGameStart {
  kind: "game-start";
}

export interface ServerGameOver {
  kind: "game-over";
}

export type ClientEvent =
  | ClientConnect
  | ClientDisconnect
  | ClientChangeTeams
  | ClientRingTeam;

export type ServerEvent =
  | ServerConnect
  | ServerDisconnect
  | ServerChangeTeams
  | ServerRingTeam
  | ServerGameStart
  | ServerGameOver;
