//インスタンス化するためのファイル
import { Character } from "./characterClass";
import { Enemy } from "./characterClass";


export const characters = [
  Nuvillette = new Character(
    "Nuvillette",
    "./img/chara/nuvillette.webp",
    14695,
    232,
    576,
    0,
    5,
    88.4,
    100,
    0,
    0,
  ),
  
];
export const enemies = [
  MasshuRaputoru = new Enemy(
    "MasshuRaputoru",
    "./img/enemy/masshu_raputoru.webp",
    965,
    93,
    0.25,
    0.25,
    0.25,
    0.80,
    0.25,
    0.25,
    0.25,
    0.25),
  ];
