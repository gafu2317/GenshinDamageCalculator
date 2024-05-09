
//武器のステータスを定義するクラス
export class Weapon {
    //名前、画像パス、基礎攻撃力、HP%、防御力、元素熟知、会心率、会心ダメージ、元素チャージ、元素ダメージバフ、ダメージバフを引数に取る
    constructor(
      name,
      imgPath,
      hpper,
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
