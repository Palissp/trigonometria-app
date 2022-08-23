import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-calcular-figura',
  templateUrl: './calcular-figura.component.html',
  styleUrls: ['./calcular-figura.component.scss']
})
export class CalcularFiguraComponent implements OnInit {
  @Input()
  public selectedFigura: string = ''
  public historial: Array<any> = [];
  public base!: number;
  public altura!: number;
  public lado1!: number;
  public lado2!: number;
  public lado3!: number;
  public lado4!: number;
  public radio!: number;
  public resultado!: number;

  public isArea: boolean = false;
  public isPerimetro: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    if (this.selectedFigura === 'triangulo') {
      this.historial = JSON.parse(localStorage.getItem('historialTriangulo')!) || [];
    }
    if (this.selectedFigura === 'circulo') {
      this.historial = JSON.parse(localStorage.getItem('historialCirculo')!) || [];
    }
    if (this.selectedFigura === 'cuadrado') {
      this.historial = JSON.parse(localStorage.getItem('historialCuadrado')!) || [];
    }
    if (this.selectedFigura === 'rectangulo') {
      this.historial = JSON.parse(localStorage.getItem('historialRectangulo')!) || [];
    }
  }

  public calcularAreaCuadrado(base: number, altura: number) {
    this.historial.push('Base: ' + base + ' Altura: ' + altura + ' Area: ' + base * altura);
    localStorage.setItem('historialCuadrado', JSON.stringify(this.historial));
    this.resultado = base * altura;
  }

  calcularAreaTriangulo(base: number, altura: number) {
    this.historial.push('Base: ' + base + ' Altura: ' + altura + ' Area: ' + (base * altura) / 2);
    localStorage.setItem('historialTriangulo', JSON.stringify(this.historial));
    this.resultado = (base * altura) / 2;
  }

  public calcularAreaCirculo(radio: number) {
    this.historial.push('Radio: ' + radio + ' Area: ' + Math.PI * Math.pow(radio, 2));
    localStorage.setItem('historialCirculo', JSON.stringify(this.historial));
    this.resultado = Math.PI * Math.pow(radio, 2);
  }

  calcularAreaRectangulo(base: number, altura: number) {
    this.historial.push('Base: ' + base + ' Altura: ' + altura + ' Area: ' + base * altura);
    localStorage.setItem('historialRectangulo', JSON.stringify(this.historial));
    this.resultado = base * altura;
  }

  public saveHistory(): void {
    const blob = new Blob(this.historial, {type: 'application/msword'});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  calcularPerimetroCuadrados(lado1: number, lado2: number, lado3: number, lado4: number) {
    this.historial.push('Lado 1: ' + lado1 + ' Lado 2: ' + lado2 + ' Lado 3: ' + lado3 + ' Lado 4: ' + lado4 + ' Perimetro: ' + (lado1 + lado2 + lado3 + lado4));
    localStorage.setItem('historialCuadrado', JSON.stringify(this.historial));
    this.resultado = lado1 + lado2 + lado3 + lado4;
  }

  calcularPerimetroTriangulo(lado1: number, lado2: number, lado3: number) {
    this.historial.push('Lado 1: ' + lado1 + ' Lado 2: ' + lado2 + ' Lado 3: ' + lado3 + ' Perimetro: ' + (lado1 + lado2 + lado3));
    localStorage.setItem('historialTriangulo', JSON.stringify(this.historial));
    this.resultado = lado1 + lado2 + lado3;
  }

  calcularPerimetroCirculo(radio: number) {
    this.historial.push('Radio: ' + radio + ' Perimetro: ' + (2 * Math.PI * radio));
    localStorage.setItem('historialCirculo', JSON.stringify(this.historial));
    this.resultado = 2 * Math.PI * radio;
  }

  calcularPerimetroRectangulo(base: number, altura: number) {
    this.historial.push('Base: ' + base + ' Altura: ' + altura + ' Perimetro: ' + 2 * (base + altura));
    localStorage.setItem('historialRectangulo', JSON.stringify(this.historial));
    this.resultado = 2 * (base + altura);
  }
}
