import type { Player } from '$lib/types';
import { writable } from 'svelte/store';

export function createPlayer(id: number, name: string): Player {
  return {
    id,
    name
  };
}

export function createPlayersStore() {
  const playerSet = new Set<Player>();
  let id = 0;

  const { subscribe, update } = writable<Set<Player>>(playerSet);

  function addPlayer(name: string) {
    update((playerSet) => {
      const player = createPlayer(id++, name);
      playerSet.add(player);

      return playerSet;
    });
  }

  function removePlayer(player: Player) {
    update((playerSet) => {
      playerSet.delete(player);
      return playerSet;
    });
  }

  return {
    subscribe,
    addPlayer,
    removePlayer
  };
}

const playersStore = createPlayersStore();
export default playersStore;
