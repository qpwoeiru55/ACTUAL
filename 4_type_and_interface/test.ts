class Review {
  name = "주인님";

  getY = () => {
    return this.name; // 화살표 함수 → this는 항상 인스턴스를 바라봄
  };

  getX() {
    return this.name; // 일반 함수 → this가 상황 따라 바뀜
  }
}

const r = new Review();
const f1 = r.getY;
const f2 = r.getX;

console.log(r.getX());

console.log(f1()); //
console.log(f2()); //