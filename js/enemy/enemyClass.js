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
  