//classを定義するファイル
//キャラクタのステータスを定義するクラス
export class Character {
  //名前、画像パス、基礎HP、基礎攻撃力、攻撃力％、基礎防御力、防御力％元素熟知、会心率、会心ダメージ、元素チャージ、元素ダメージバフ、ダメージバフを引数に取る
  constructor(
    name,//名前
    imgPath,//画像パス
    hp,//基礎HP 
    atk,//基礎攻撃力
    def,//基礎防御力
    hpPer,//HP%
    atkPer,//攻撃％
    defPer,//防御％
    elementalMastery,//元素熟知
    crtRate,//会心率
    crtDmg,//会心ダメージ
    energyCharge,//元素チャージ効率
    elementalDmgBuff,//元素ダメージバフ
    physicalDmgBuff,//物理ダメージバフ
   

    //
    //三重配列の構造
    //一回目の分岐、（通常攻撃、特殊通常攻撃（倍率変化や元素変化））
    //二回目の分岐、（倍率の入る配列、名前の入る配列）
    //倍率配列の最初の値はどのスキルとして扱うか、二つ目の値はどの元素ダメージとして扱うのか情報としてだす
    //


    //1通常、2特殊通常,3重撃、4特殊重撃、5落下、6特殊落下が入った三重配列
    NomalTempu,

    //スキル、特殊スキルの倍率が入った三重配列
    SkillTempu,
    //爆発、特殊爆発の倍率が入った三重配列
    UltTempu,

    

    
    
  ) {
    this.name = name;
    this.imgPath = imgPath;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.hpPer = hpPer;
    this.atkPer = atkPer;
    this.defPer = defPer;
    this.elementalMastery = elementalMastery;
    this.crtRate = crtRate;
    this.crtDmg = crtDmg;
    this.energyCharge = energyCharge;
    this.elementalDmgBuff = elementalDmgBuff;
    this.physicalDmgBuff = physicalDmgBuff;
    this.NomalTempu = NomalTempu;
    this.SkillTempu = SkillTempu;
    this.UltTempu = UltTempu;
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
  getHpPer() {
    return this.hpPer;
  }
  getAtkPer() {
    return this.atkPer;
  }
  getDefPer() {
    return this.defPer;
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
  getNomalTempu() {
    return this.NomalTempu
    ;
  }
  getDef() {
    return this.def;
  }
  getDef() {
    return this.def;
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
  setHpPer(hpPer) {
    this.hpPer = hpPer;
  }
  setAtkPer(atkPer) {
    this.atkPer = atkPer;
  }
  setDefPer(defPer) {
    this.defPer = defPer;
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
