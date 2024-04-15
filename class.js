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
    DmgBuff,
    themeColor1,
    themeColor2,
    themeColor3,
    themeColor4,
    themeColor5
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
    this.themeColor1 = themeColor1;
    this.themeColor2 = themeColor2;
    this.themeColor3 = themeColor3;
    this.themeColor4 = themeColor4;
    this.themeColor5 = themeColor5;
  }

  //メソッド
  //ゲッター
  getName() {return this.name;}
  getImgPath() {return this.imgPath;}
  getHp() {return this.hp;}
  getAtk() {return this.atk;}
  getDef() {return this.def;}
  getElementalMastery() {return this.elementalMastery;}
  getCrtRate() {return this.crtRate;}
  getCrtDmg() {return this.crtDmg;}
  getEnergyCharge() {return this.energyCharge;}
  getElementalDmgBuff() {return this.elementalDmgBuff;}
  getDmgBuff() {return this.DmgBuff;}
  getThemeColor1() {return this.themeColor1;}
  getThemeColor2() {return this.themeColor2;}
  getThemeColor3() {return this.themeColor3;}
  getThemeColor4() {return this.themeColor4;}
  getThemeColor5() {return this.themeColor5;}
  //セッター
  setName(name) {this.name = name;}
  setImgPath(imgPath) {this.imgPath = imgPath;}
  setHp(hp) {this.hp = hp;}
  setAtk(atk) {this.atk = atk;}
  setDef(def) {this.def = def;}
  setElementalMastery(elementalMastery) {this.elementalMastery = elementalMastery;}
  setCrtRate(crtRate) {this.crtRate = crtRate;}
  setCrtDmg(crtDmg) {this.crtDmg = crtDmg;}
  setEnergyCharge(energyCharge) {this.energyCharge = energyCharge;}
  setElementalDmgBuff(elementalDmgBuff) {this.elementalDmgBuff = elementalDmgBuff;}
  setDmgBuff(DmgBuff) {this.DmgBuff = DmgBuff;}
  setThemeColor1(themeColor1) {this.themeColor1 = themeColor1;}
  setThemeColor2(themeColor2) {this.themeColor2 = themeColor2;}
  setThemeColor3(themeColor3) {this.themeColor3 = themeColor3;}
  setThemeColor4(themeColor4) {this.themeColor4 = themeColor4;}
  setThemeColor5(themeColor5) {this.themeColor5 = themeColor5;}
  
}

//敵のステータスを定義するクラス
export class Enemy {
  constructor(name, imgPath, def, level) {
    this.name = name;
    this.imgPath = imgPath;
    this.def = def;
    this.level = level;
  }
  //メソッド
  //ゲッター
  getName() {return this.name;}
  getImgPath() {return this.imgPath;}
  getDef() {return this.def;}
  getLevel() {return this.level;}
  //セッター
  setName(name) {this.name = name;}
  setImgPath(imgPath) {this.imgPath = imgPath;}
  setDef(def) {this.def = def;}
  setLevel(level) {this.level = level;}
}
