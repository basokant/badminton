import type { Player } from '$lib/types';
import { writable } from 'svelte/store';

export function createPlayer(id: number, name: string): Player {
  return {
    id,
    name
  };
}

export function createPlayersStore() {
  const players: Player[] = [];
  let id = 0;

  const { subscribe, update } = writable<Player[]>(players);

  function addPlayer(name: string) {
    update((players) => {
      const player = createPlayer(id++, name);
      players.unshift(player);

      return players;
    });
  }

  function removePlayer(player: Player) {
    update((players) => {
      players = players.filter((pl) => pl.id !== player.id);
      return players;
    });
  }

  return {
    subscribe,
    addPlayer,
    removePlayer
  };
}

const playersStore = createPlayersStore();

// TODO: Make this populate if dev env var is set
// const playerNames = [...Array(20)].map(() => faker.person.firstName());
// playerNames.map((name) => {
//   playersStore.addPlayer(name);
// });

export default playersStore;
