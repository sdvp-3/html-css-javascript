function DarkMode() {
  const body= document.querySelector("body");
  const btn = document.querySelector(".js-mode");

  if (body.classList.contains("is-dark-mode")) {
    body.classList.remove("is-dark-mode");
    btn.textContent = "Dark Mode";
  } else {
    body.classList.add("is-dark-mode");
    btn.textContent = "Light Mode";
  }
}

const kmInput = document.querySelector(".js-km");
const milInput = document.querySelector(".js-mil");
const metInput = document.querySelector(".js-met");

function kmToMil(km) {
  return (km / 1.6).toFixed(2);
}

function milToKm(mil) {
  return (mil * 1.6).toFixed(2);
}

function kmToMetr(km) {
  return (km * 1000).toFixed(2);
}

function metrToKm(met) {
  return (met / 1000).toFixed(2);
}
function metrToMil(met) {
  return (met / 1609.34).toFixed(2);
}

function milToMetr(mil) {
  return (mil * 1609.34).toFixed(2);
}

function convertToLength(source) {
  const val = Number(source.value);
  if (!source.value) return clearAll();
  if (val <= 0) return;
  if (val >= 1e10) return alertMessage(source);

  if (source === kmInput) {
    milInput.value = kmToMil(val);
    metInput.value = kmToMetr(val);
  } else if (source === milInput) {
    kmInput.value = milToKm(val);
    metInput.value = milToMetr(val);
  } else if (source === metInput) {
    kmInput.value = metrToKm(val);
    milInput.value = metrToMil(val);
  }
}

kmInput.addEventListener("input", () => convertToLength(kmInput));
milInput.addEventListener("input", () => convertToLength(milInput));
metInput.addEventListener("input", () => convertToLength(metInput));

function clearAll() {
  kmInput.value = "";
  milInput.value = "";
  metInput.value = "";
}

const m2Input = document.querySelector(".js-m2");
const hecInput = document.querySelector(".js-hec");
const ft2Input = document.querySelector(".js-ft2");

function m2ToHec(m2) {
  return (m2 / 10000).toFixed(2);
}

function hecToM2(hec) {
  return (hec * 10000).toFixed(2);
}

function ft2ToM2(ft2) {
  return (ft2 / 10.764).toFixed(2);
}

function m2Toft2(m2) {
  return (m2 * 10.764).toFixed(2);
}

function hecToft2(hec) {
  return (hec * 107639.1).toFixed(2);
}

function ft2Tohec(ft2) {
  return  (ft2/107639.1).toFixed(2);
  
}

function convertToLength2(source2) {
  const val2 = Number(source2.value);
  if (!source2.value) return clearAllArea();

  if (val2 <= 0) return;
  if (val2 >= 1e10) return alertMessage(source2);

  if (source2 === m2Input) {
    hecInput.value = m2ToHec(val2);
    ft2Input.value = m2Toft2(val2);
  } else if (source2 === hecInput) {
    m2Input.value = hecToM2(val2);
    ft2Input.value = hecToft2(val2);
  } else if (source2 === ft2Input) {
    m2Input.value = ft2ToM2(val2);
    hecInput.value = ft2Tohec(val2);
  }
}

m2Input.addEventListener("input", () => convertToLength2(m2Input));
hecInput.addEventListener("input", () => convertToLength2(hecInput));
ft2Input.addEventListener("input", () => convertToLength2(ft2Input));

function clearAllArea() {
  m2Input.value = "";
  hecInput.value = "";
  ft2Input.value = "";
}

const m1 = document.querySelector(".js-am");
const m2 = document.querySelector(".js-bm");
const result = document.querySelector(".js-met2");

function multiply(source3) {
  const a = Number(m1.value);
  const b = Number(m2.value);

  if (!source3.value) return clearAllMultiply();

  if (a <= 0 || b <= 0) return;

  if (a >= 1e10 || b >= 1e10) return alertMessage(source3);
  result.value = (a * b).toFixed(2);
}
m1.addEventListener("input", () => multiply(m1));
m2.addEventListener("input", () => multiply(m2));

function clearAllMultiply() {
  m1.value = "";
  m2.value = "";
}

function alertMessage(input) {
  input.value = input.value.slice(0, -1);
  const box = document.getElementById("alert-box");
  box.style.display = "block";
  setTimeout(() => {
    box.style.display = "none";
  }, 4000);
}
