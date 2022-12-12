import lobbyStore from "./store/lobbyStore";

import util from "./utils/util";

export default {
  createLobby(data) {
    let lobby = lobbyStore.lobby.value;
    lobby.name = data.name;
    lobby.password = data.password;
    lobby.host = data.nick;
    lobby.players.push(new util.Player(data.nick));
    lobby.room = data.nick + new Date().getTime();
  },
};
