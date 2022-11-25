import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var fnc = function () {
  let carriers = [];
  for (let i = 0; i < this.$parent.carriers.length; i++) {
    let findOne = carriers.filter((carrier) => {
      return carrier.carrier_name == this.$parent.carriers[i].carrier_name;
    });
    if (findOne.length > 0) {
      continue;
    }
    let carrier = {};
    carrier.carrier_name = this.$parent.carriers[i].carrier_name;
    carrier.carrier_team_id = this.$parent.carriers[i].carrier_team_id;
    carriers.push(carrier);
  }
  return carriers;
};

let orderPlaceFiles = [
  {
    id: 1,
    file_type: "sign",
    file: { key: 1, id: 1, name: "name", created_at: Date() }
  },
  {
    id: 2,
    file_type: "sign1",
    file: { key: 1, id: 1, name: "name", created_at: Date() }
  }
];

let label = "1";
// timer 시작
console.time(label);
console.log("-------------------------");
_.forEach(orderPlaceFiles, (value, index) => {
  console.log(value);
});
// timer 종료
console.timeEnd(label);
