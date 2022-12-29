/**
 * All events prefixed with `Server` are server => client
 * All events prefixed with `Client` are client => server
 */

interface Connect {
  kind: "connect";
  username: string;
  team: 0 | 1;
}
export type ClientConnect = Omit<Connect, "username">;
export type ServerConnect = Connect;

interface Disconnect {
  kind: "disconnect";
  reason: string;
}
export type ServerDisconnect = Disconnect;

interface ChangeTeam {
  kind: "change-team";
  username: string;
}
export type ClientChangeTeam = Omit<ChangeTeam, "username">;
export type ServerChangeTeam = ChangeTeam;

interface RingTeam {
  kind: "ring-team";
}
export type ClientRingTeam = RingTeam;
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
  | ClientChangeTeam
  | ClientRingTeam;

export type ServerEvent =
  | ServerConnect
  | ServerDisconnect
  | ServerChangeTeam
  | ServerRingTeam
  | ServerGameStart
  | ServerGameOver;
