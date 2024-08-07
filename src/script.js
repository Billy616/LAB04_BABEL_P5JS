// Declarar variables globales para la posición del círculo
let x;
let y;

function setup() {
  // Crear el lienzo con un tamaño de 800x600 píxeles
  createCanvas(800, 600);
  // Inicializar la posición del círculo al centro del lienzo
  x = width / 2;
  y = height / 2;
}

function draw() {
  // Establecer el color de fondo a un gris oscuro
  background(50);

  // Establecer el color del círculo a un tono azul
  fill(0, 0, 255);
  noStroke(); // Desactivar el contorno del círculo
  
  // Dibujar un círculo en la posición del cursor
  ellipse(mouseX, mouseY, 50, 50);
}
