// 1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases.
// CLASE PROPIETARIO Y 3 ATRIBUTOS
class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this._nombrePropietario = nombrePropietario;
    this._direccion = direccion;
    this._telefono = telefono;
  }
//   4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
// accedido desde las clases inferiores.
  datosPropietario() {
    return `El nombre del dueño es: ${this._nombrePropietario}, el Domicilio es: ${this._direccion} y número teléfonico de contácto es: ${this._telefono}`;
  }
}
// CLASE ANIMAL Y 1 ATRIBUTO + SUPER
class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono);
    this._tipo = tipo;
  }
//   3. Crear un método get para la clase Animal de la propiedad tipo para retornar el
// mensaje “El tipo de animal es un: ${this.tipo}”.
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}
// CLASE MASCOTA Y 2 ATRIBUTOS + SUPER
class Mascota extends Animal {
  _nombreMascota;
  _enfermedad;
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  // 2. Crear los métodos get y set para la clase de mascota. 
  get nombre() {
    return this._nombreMascota;
  }

  set nombre(nombreMascota) {
    this._nombreMascota = nombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

// DECLARACION CONST FORMULARIO PARA  APLICAR addEventListener AL PRESIONAR BOTON.
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // 5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal
  // para realizar la instancia dependiendo del tipo de animal seleccionado. 

  // CAPTURAS DEL DOM CON DISTINTOS METODOS
  const pro = document.querySelector("#propietario").value;
  const dir = document.getElementById("direccion").value;
  const tele = document.querySelector("#telefono").value;
  const tip = document.querySelector("#tipo").value;
  const nombreMascota = document.querySelector("#nombreMascota").value;
  const enf = document.getElementById("enfermedad").value;

  // VARIABLE MASCOTA PARA SER UTILIZADA EN FUNCION imprimirHtml
  let mascota = nuevaMascota(pro, dir, tele, tip, nombreMascota, enf);

// LLAMADO A FUNCIONES EXTERNAS
  imprimirHtml(mascota);
  limpiarHtml();
});

// 6. MOSTRAR a modo de lista los mensajes resultantes para el método “datosPropietario”
// cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
// de las clases Animal y Mascota, concatenando todo en un solo mensaje, como se
// muestra en la imagen a continuación

// FUNCION IMPRIMIR, SE LE ENTREGA UN PARAMETRO EL CUAL ESTA DEFINIDO DENTRO DE DE FUNCION PRINCIPAL
imprimirHtml = (mascota) => {
  let text = document.getElementById("resultado");
  text.innerHTML = `<ul><li>${mascota.datosPropietario()}</li>
  <li>"${mascota.tipo}, mientras que el nombre de la mascota es: ${
    mascota.nombre
  }y la enfermedad es: ${mascota.enfermedad}</li></ul>`;
};
// FUNCION LIMPIAR, ELEMENTOS DOM SE LE PASA ""
limpiarHtml = () => {
  document.querySelector("#propietario").value = "";
  document.querySelector("#direccion").value = "";
  document.querySelector("#telefono").value = "";
  document.querySelector("#nombreMascota").value = "";
  document.querySelector("#enfermedad").value = "";
  document.querySelector("#resultado").value = "";
};

// FUNCION "INSTANCIADORA" SEGUN TIPO DE ANIMAL
nuevaMascota = (pro, dir, tele, tip, nombreMascota, enf) => {
  if (tip === "conejo") {
    let Conejo = new Mascota(pro, dir, tele, tip, nombreMascota, enf);
    return Conejo;
  }
  if (tip == "gato") {
    let Gato = new Mascota(pro, dir, tele, tip, nombreMascota, enf);
    return Gato;
  }

  if (tip == "perro") {
    let Perro = new Mascota(pro, dir, tele, tip, nombreMascota, enf);
    return Perro;
  }
};
