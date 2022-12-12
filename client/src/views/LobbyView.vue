<template>
  <div class="wrapper">
    <div class="lobby">
      <div class="lobby__header">
        <div class="lobby__header__title">{{ lobby.name }}</div>
        <span
          v-if="lobby.name !== 'Not connected'"
          class="material-symbols-outlined leave-icon"
          @click="$leaveLobby()"
          >logout</span
        >
      </div>
      <div class="lobby__players">
        <div
          class="lobby__players__player"
          v-bind:key="player"
          v-for="player in lobby.players"
        >
          <span
            class="material-symbols-outlined connected-icon"
            v-if="player.active"
            >person</span
          ><span class="material-symbols-outlined connected-icon off" v-else
            >person_off</span
          >{{ player.nick
          }}<span
            v-if="player.userid === lobby.owner"
            class="material-symbols-outlined owner-icon"
            >star</span
          >
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__title">Join a Lobby</div>
      <div class="divider--vertical"></div>
      <form class="form" style="margin-bottom: 10%">
        <div class="form__group">
          <label for="join-nick">Nickname</label>
          <input
            type="text"
            id="join-nick"
            placeholder="nickname"
            class="form__group__input"
            v-model="joinNick"
            maxlength="36"
            @input="this.joinNickError = ''"
            :class="{ 'form__group__input--error': joinNickError !== '' }"
          />
          <div class="form__group__error-message">{{ joinNickError }}</div>
        </div>
        <div class="form__group">
          <label for="join-name">Lobby Name</label>
          <input
            type="text"
            id="join-name"
            placeholder="lobby name"
            class="form__group__input"
            v-model="joinName"
            maxlength="36"
            @input="this.joinNameError = ''"
            :class="{ 'form__group__input--error': joinNameError !== '' }"
          />
          <div class="form__group__error-message">{{ joinNameError }}</div>
        </div>
        <div class="form__group">
          <label for="join-password">Password</label>
          <input
            type="text"
            id="join-password"
            placeholder="password (can be empty)"
            class="form__group__input"
            v-model="joinPassword"
            @input="this.joinPasswordError = ''"
            :class="{ 'form__group__input--error': joinPasswordError !== '' }"
          />
          <div class="form__group__error-message">{{ joinPasswordError }}</div>
        </div>
        <div class="form__group">
          <button
            @click.prevent="join()"
            type="submit"
            class="form__group__submit form__group__input"
          >
            join
          </button>
          <div
            class="form__group__error-message"
            :class="{
              'form__group__submit--success':
                joinServerError === 'Joined lobby!',
            }"
          >
            {{ joinServerError }}
          </div>
        </div>
      </form>
      <div class="card__title">Create a Lobby</div>
      <div class="divider--vertical"></div>
      <form class="form">
        <div class="form__group">
          <label for="create-nick">Nickname</label>
          <input
            type="text"
            id="create-nick"
            placeholder="nickname"
            class="form__group__input"
            v-model="createNick"
            maxlength="36"
            @input="this.createNickError = ''"
            :class="{ 'form__group__input--error': createNickError !== '' }"
          />
          <div class="form__group__error-message">{{ createNickError }}</div>
        </div>
        <div class="form__group">
          <label for="create-name">Lobby Name</label>
          <input
            type="text"
            id="create-name"
            placeholder="lobby name"
            class="form__group__input"
            v-model="createName"
            maxlength="36"
            @input="this.createNameError = ''"
            :class="{ 'form__group__input--error': createNameError !== '' }"
          />
          <div class="form__group__error-message">{{ createNameError }}</div>
        </div>
        <div class="form__group">
          <label for="create-password">Password</label>
          <input
            type="text"
            id="create-password"
            placeholder="password (optional)"
            class="form__group__input"
            v-model="createPassword"
            @input="this.createPasswordError = ''"
            :class="{ 'form__group__input--error': createPasswordError !== '' }"
          />
          <div class="form__group__error-message">
            {{ createPasswordError }}
          </div>
        </div>
        <div class="form__group">
          <button
            @click.prevent="create()"
            type="submit"
            class="form__group__submit form__group__input"
          >
            create
          </button>
          <div
            class="form__group__error-message"
            :class="{
              'card-form-submit-success':
                createServerError === 'Created lobby!',
            }"
          >
            {{ createServerError }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import lobbyStore from "../lobby/store/lobbyStore";
import host from "../lobby/host";

export default {
  setup() {
    const lobby = lobbyStore.lobby;
    return { lobby };
  },
  data() {
    return {
      joinNick: "",
      joinNickError: "",
      joinName: "",
      joinNameError: "",
      joinPassword: "",
      joinPasswordError: "",
      joinServerError: "",
      createNick: "",
      createNickError: "",
      createName: "",
      createNameError: "",
      createPassword: "",
      createPasswordError: "",
      createServerError: "",
    };
  },
  methods: {
    create() {
      host.createLobby({
        name: this.createName,
        nick: this.createNick,
        password: this.createPassword,
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/form.css";
@import "../assets/styles/card.css";
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 130%;
  margin-top: 2%;
}
.form {
  align-self: flex-start;
}
.lobby {
  width: 30%;
  margin: 0 3%;
  padding: 3% 5%;
  padding-bottom: 3%;
  background: var(--color-background-soft);
}

.lobby__header {
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  max-width: 100%;
}

.lobby__header__title {
  font-weight: bold;
  overflow-wrap: anywhere;
  margin-right: 1%;
}

.lobby__players {
  font-size: 1rem;
}

.lobby__players__player {
  display: flex;
  flex-direction: row;
  word-break: break-all;
}

.leave-icon {
  margin-left: auto;
  margin-top: 0.2rem;
  cursor: pointer;
  transition: 0.2s ease;
}

.leave-icon:hover {
  color: var(--red);
}

.owner-icon {
  font-size: 1rem;
  margin-left: 0.3rem;
  margin-top: -0.15rem;
  color: gold;
  align-self: center;
}

.connected-icon {
  position: absolute;
  left: -15%;
  font-size: 1.4rem;
  color: var(--success);
  opacity: 0.6;
}

.off {
  color: var(--error);
}
</style>
