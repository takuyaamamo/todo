'use strict'
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
* TODOを追加する
* @param {string} task
*/
// falseは未完了
const todo = (task) => {
  tasks.set(task, false);
};

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了したかどうか
*/
// taskAndIsDonePairのvalue部分のFalesを返す
const isDone = (taskAndIsDonePair) => {
  return taskAndIsDonePair[1];
};

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了していないかどうか
*/
const isNotDone = (taskAndIsDonePair) => {
  return !isDone(taskAndIsDonePair);
};

/**
* TODOの一覧の配列を取得する
* @return {array}
*/
// Array.fromでMapをArrayに再構築し、filterでタスク完了していないものを取り出し、mapでtasks[0]番目のkey部分のみを取り出している。
const list = () => {
  return Array.from(tasks).filter(isNotDone).map(t => t[0]);
};
/**
* TODOを完了状態にする
* @param {string} task
*/
const done = task => {
  if (tasks.has(task)) {
    tasks.set(task, true)
  }
};
/**
* 完了済みのタスクの一覧の配列を取得する
* @return {array}
*/
const donelist = () => {
  return Array.from(tasks).filter(isDone).map(t => t[0]);
}
/**
* 項目を削除する
* @param {string} task
*/
const del = task => {
  tasks.delete(task);
};

module.exports = {
  todo : todo,
  list : list,
  done : done,
  donelist : donelist,
  del :del
};
