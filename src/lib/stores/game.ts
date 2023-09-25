import type { Game, Group, Player } from '$lib/types';
import { writable } from 'svelte/store';

export type GameQueue = {
  courts: (Game | null)[];
  queue: Group[];
};

function createGroup(players: Player[]) {
  return {
    players,
    numSkips: 0
  };
}

function createGame(players: Player[]) {
  return {
    players,
    startTime: new Date()
  };
}

export function createGameQueueStore(numCourts: number) {
  const initialGameQueue = {
    courts: Array(numCourts).fill(null),
    queue: []
  };

  const { subscribe, update } = writable<GameQueue>(initialGameQueue);

  function enqueueGroup(players: Player[]) {
    update((gameQueue) => {
      if (players.length === 4) {
        const newGroup = createGroup(players);
        gameQueue.queue.push(newGroup);
      } else {
        throw new Error(`Expected group of 4, got group of ${players.length}`);
      }

      return gameQueue;
    });
  }

  function removeGroup(groupNum: number) {
    update((gameQueue) => {
      gameQueue.queue.splice(groupNum, 1);
      return gameQueue;
    });
  }

  function finishGame(courtNum: number, enqueueSameGroup: boolean) {
    update((gameQueue) => {
      const game = gameQueue.courts[courtNum];
      gameQueue.courts[courtNum] = null;

      if (game && enqueueSameGroup) {
        enqueueGroup(game.players);
      }

      return gameQueue;
    });
  }

  function addNewGame(courtNum: number) {
    update((gameQueue) => {
      // TODO: follow these rules instead of assuming that players.length is 4
      // 1. Skipped over 2 times, looks for all lower teams
      // 2. How high are they in the queue
      // 3. Complete team
      // 4. Able to be paired with lower team(s) within 10

      if (gameQueue.queue.length < 1) {
        throw new Error('Queue is empty, please try again.');
      }

      const nextGroup = gameQueue.queue.shift();

      if (nextGroup && nextGroup?.players.length === 4) {
        const nextGame = createGame(nextGroup.players);
        gameQueue.courts[courtNum] = nextGame;
      }

      return gameQueue;
    });
  }

  return {
    subscribe,
    enqueueGroup,
    removeGroup,
    addNewGame,
    finishGame
  };
}

const gameQueueStore = createGameQueueStore(6);
export default gameQueueStore;
