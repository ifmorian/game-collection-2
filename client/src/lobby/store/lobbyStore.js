import { ref } from "vue";

const lobby = ref({
  name: null,
  password: null,
  host: null,
  players: [],
  room: null,
  messages: [],
  game: null,
});

export default { lobby };
