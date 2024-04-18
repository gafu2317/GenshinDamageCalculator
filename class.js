//classを定義するファイル
//キャラクタのステータスを定義するクラス
export class Character {
  //名前、画像パス、HP、攻撃力、防御力、元素熟知、会心率、会心ダメージ、元素チャージ、元素ダメージバフ、ダメージバフを引数に取る
  constructor(
    name,
    imgPath,
    hp,
    atk,
    def,
    elementalMastery,
    crtRate,
    crtDmg,
    energyCharge,
    elementalDmgBuff,
    DmgBuff
  ) {
    this.name = name;
    this.imgPath = imgPath;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.elementalMastery = elementalMastery;
    this.crtRate = crtRate;
    this.crtDmg = crtDmg;
    this.energyCharge = energyCharge;
    this.elementalDmgBuff = elementalDmgBuff;
    this.DmgBuff = DmgBuff;
  }

  //メソッド
  //ゲッター
  getName() {
    return this.name;
  }
  getImgPath() {
    return this.imgPath;
  }
  getHp() {
    return this.hp;
  }
  getAtk() {
    return this.atk;
  }
  getDef() {
    return this.def;
  }
  getElementalMastery() {
    return this.elementalMastery;
  }
  getCrtRate() {
    return this.crtRate;
  }
  getCrtDmg() {
    return this.crtDmg;
  }
  getEnergyCharge() {
    return this.energyCharge;
  }
  getElementalDmgBuff() {
    return this.elementalDmgBuff;
  }
  getDmgBuff() {
    return this.DmgBuff;
  }
  //セッター
  setName(name) {
    this.name = name;
  }
  setImgPath(imgPath) {
    this.imgPath = imgPath;
  }
  setHp(hp) {
    this.hp = hp;
  }
  setAtk(atk) {
    this.atk = atk;
  }
  setDef(def) {
    this.def = def;
  }
  setElementalMastery(elementalMastery) {
    this.elementalMastery = elementalMastery;
  }
  setCrtRate(crtRate) {
    this.crtRate = crtRate;
  }
  setCrtDmg(crtDmg) {
    this.crtDmg = crtDmg;
  }
  setEnergyCharge(energyCharge) {
    this.energyCharge = energyCharge;
  }
  setElementalDmgBuff(elementalDmgBuff) {
    this.elementalDmgBuff = elementalDmgBuff;
  }
  setDmgBuff(DmgBuff) {
    this.DmgBuff = DmgBuff;
  }
}

//敵のステータスを定義するクラス
export class Enemy {
  constructor(
    name,
    imgPath,
    def,
    level,
    PhysicsR,
    PyroR,
    HydroR,
    DendroR,
    ElectroR,
    AnemoR,
    CryoR,
    GeoR
  ) {
    this.name = name;
    this.imgPath = imgPath;
    this.def = def;
    this.level = level;
    this.PhysicsR = PhysicsR;
    this.PyroR = PyroR;
    this.HydroR = HydroR;
    this.DendroR = DendroR;
    this.ElectroR = ElectroR;
    this.AnemoR = AnemoR;
    this.CryoR = CryoR;
    this.GeoR = GeoR;
  }
  //メソッド
  //ゲッター
  getName() {
    return this.name;
  }
  getImgPath() {
    return this.imgPath;
  }
  getDef() {
    return this.def;
  }
  getLevel() {
    return this.level;
  }
  getPhysicsR() {
    return this.PhysicsR;
  }
  getPyroR() {
    return this.PyroR;
  }
  getHydroR() {
    return this.HydroR;
  }
  getDendroR() {
    return this.DendroR;
  }
  getElectroR() {
    return this.ElectroR;
  }
  getAnemoR() {
    return this.AnemoR;
  }
  getCryoR() {
    return this.CryoR;
  }
  getGeoR() {
    return this.GeoR;
  }
  //セッター
  setName(name) {
    this.name = name;
  }
  setImgPath(imgPath) {
    this.imgPath = imgPath;
  }
  setDef(def) {
    this.def = def;
  }
  setLevel(level) {
    this.level = level;
  }
  setPhysicsR(PhysicsR) {
    this.PhysicsR = PhysicsR;
  }
  setPyroR(PyroR) {
    this.PyroR = PyroR;
  }
  setHydroR(HydroR) {
    this.HydroR = HydroR;
  }
  setDendroR(DendroR) {
    this.DendroR = DendroR;
  }
  setElectroR(ElectroR) {
    this.ElectroR = ElectroR;
  }
  setAnemoR(AnemoR) {
    this.AnemoR = AnemoR;
  }
  setCryoR(CryoR) {
    this.CryoR = CryoR;
  }
  setGeoR(GeoR) {
    this.GeoR = GeoR;
  }
}

export class ElementalColor {
  static Pyro1 = "#cc3b00";
  static Pyro2 = "#ff7755";
  static Pyro3 = "#ffc39b";
  static Hydro1 = "#0066cc";
  static Hydro2 = "00aeee";
  static Hydro3 = "#9be4ff";
  static Dendro1 = "#";
  static Dendro2 = "#";
  static Dendro3 = "#";
  static Electro1 = "#7b30c0";
  static Electro2 = "#aa4eff";
  static Electro3 = "#e6ccff";
  static Anemo1 = "#008b8b";
  static Anemo2 = "#66cc9a";
  static Anemo3 = "#bbffdc";
  static Cryo1 = "#00aadd";
  static Cryo2 = "#12deed";
  static Cryo3 = "#b8e5ea";
  static Geo1 = "#b8860b";
  static Geo2 = "#ffcc00";
  static Geo3 = "#ffeb98";
  static Physical1 = "#808080";
  static Physical2 = "#808080";
  static Physical3 = "#808080";
}
