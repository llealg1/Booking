import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  contactos = [
    { pais: 'España', telefono: '+34 602573491' },
    { pais: 'Colombia', telefono: '+57 3009294155' },
    { pais: 'Venezuela', telefono: '+58 424-1542685' },
    { pais: 'Argentina', telefono: '+54 1178543970' },
    { pais: 'Chile', telefono: '+56 322162243' },
    { pais: 'Perú', telefono: '+51 995615590' },
    { pais: 'Ecuador', telefono: '+593 983550811' },
    { pais: 'Santiago', telefono: '+56 9 6141 4833' },
    { pais: 'Madrid', telefono: '+34 655 20 45 86' },
    { pais: 'Barcelona', telefono: '+34 655205035' },
    { pais: 'Valencia', telefono: '+58 424-4097684' },
    { pais: 'Caracas', telefono: '+58 424-1542685' },
    { pais: 'Barquisimeto', telefono: '+58 424-5239195' },
    { pais: 'Lima', telefono: '+51 981 255 261' },
    { pais: 'Bogotá', telefono: '+57 313 8897876' },
    { pais: 'Medellín', telefono: '+57 323 3932626' },
    { pais: 'Buenos Aires', telefono: '+54 1178543970' },
    { pais: 'Quito', telefono: '+593 96 231 8390' },
    { pais: 'Panamá', telefono: '+507 6700 3135' }
  ];


  sedes = [
    {
      nombre: 'Caracas',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/caracas/caracas.jpg',
      address: 'Av. Francisco de Miranda, Torre Cavendes, oficina 6-02.',
    },
    {
      nombre: 'Valencia',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/valencia/valencia.jpg',
      address: 'Av. Bolívar Norte, Torre Majay, oficina principal.',
    },
    {
      nombre: 'Barquisimeto',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/barquisimeto/barquisimeto.jpg',
      address: 'Av. Los Leones, CC. Los Leones, Local #24.',
    },
    {
      nombre: 'Madrid',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/madrid/madrid.jpg',
      address: 'Calle Alcalá 22. Piso 2, puerta DR. 28014. Madrid',
    },
    {
      nombre: 'Barcelona',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/barcelona/barcelona.jpg',
      address: 'Calle Valencia 83 entresuelo. 08029',
    },
    {
      nombre: 'Buenos Aires',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/buenosaires/buenosaires.jpg',
      address: 'Lavalle 669 Local 12, C1047AAM Cdad. Autónoma de Buenos Aires',
    },
    {
      nombre: 'Bogotá',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/bogota/bogota.jpg',
      address: 'Edificio Varese, calle 98 #18-7. Bogotá DC',
    },
    {
      nombre: 'Medellín',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/medellin/medellin.jpg',
      address:
        'El Poblado - Carrera 43 A # 5A - 113 One Plaza Bussines Center Piso 7 Int 713',
    },
    {
      nombre: 'Miami',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/miami/miami.jpg',
      address: '8350 nw 52ter Suite 301 doral Florida 33166 oficina 199.',
    },
    {
      nombre: 'Panamá',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/panama/panama.jpg',
      address:
        'Av. Centenario, Torre Aseguradora Ancon, oficina 14K, Costa del Este, Panamá.',
    },
    {
      nombre: 'Lima',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/lima/lima.jpg',
      address:
        'Centro Comercial Caminos del Inca, Avenida Caminos del Inca 257 – 269, 3er piso oficina 326.',
    },
    {
      nombre: 'Santiago de Chile',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/santiago/santiago.jpg',
      address: 'Serrano 73, torre Snap, piso 3 oficina 313. Stgo. Chile.',
    },
    {
      nombre: 'Quito',
      tipo: 'Oficina',
      imagen: 'assets/images/sedes/quito/quito.jpg',
      address:
        'Av. Moscú y Av. Noruega, Edificio Moscú Platz, piso 1, oficina 4.',
    },
  ]

  items = [
    {
      name: 'Venezuela',
      link: 'https://www.instagram.com/arcadia.viajes/',
      icon: '🇻🇪',
      description: 'Arcadia Venezuela: Viaja feliz, Viaja Arcadia.',
      image: 'assets/images/logosArcadia/venezuela.jpg',
      offices: [
        {
          name: 'Caracas',
          link: '',
          icon: '',
          address: 'Av. Francisco de Miranda, Torre Cavendes, oficina 6-02.',
        },
        {
          name: 'Valencia',
          link: '',
          icon: '',
          address: 'Av. Bolívar Norte, Torre Majay, oficina principal.',
        },
        {
          name: 'Barquisimeto',
          link: '',
          icon: '',
          address: 'Av. Los Leones, CC. Los Leones, Local #24.',
        },
      ],
    },
    {
      name: 'España',
      link: 'https://www.instagram.com/arcadiaviajes.es/',
      icon: '🇪🇸',
      description: 'Arcadia España: Viajamos contigo por el mundo.',
      image: 'assets/images/logosArcadia/spain.jpg',
      offices: [
        {
          name: 'Madrid',
          link: '',
          icon: '',
          address: 'Calle Alcalá 22. Piso 2, puerta DR. 28014. Madrid',
        },
        {
          name: 'Barcelona',
          link: '',
          icon: '',
          address: 'Calle Valencia 83 entresuelo. 08029',
        },
      ],
    },
    {
      name: 'Argentina',
      link: 'https://www.instagram.com/arcadiaviajes.arg/',
      icon: '🇦🇷',
      description: 'Arcadia Argentina: Potenciando tus ideas con pasión.',
      image: 'assets/images/logosArcadia/argentina.jpg',
      offices: [
        {
          name: 'Buenos Aires',
          link: '',
          icon: '',
          address:
            'Lavalle 669 Local 12, C1047AAM Cdad. Autónoma de Buenos Aires',
        },
      ],
    },
    {
      name: 'Colombia',
      link: 'https://www.instagram.com/arcadiaviajes.co/',
      icon: '🇨🇴',
      description: 'Arcadia Colombia: Innovación que transforma vidas.',
      image: 'assets/images/logosArcadia/colombia.jpg',
      offices: [
        {
          name: 'Medellín',
          link: '',
          icon: '',
          address:
            'El Poblado - Carrera 43 A # 5A - 113 One Plaza Bussines Center Piso 7 Int 713',
        },
        {
          name: 'Bogotá',
          link: '',
          icon: '',
          address: 'Edificio Varese, calle 98 #18-7. Bogotá DC',
        },
      ],
    },
    {
      name: 'Estados Unidos',
      link: 'https://www.instagram.com/arcadiaviajes.usa/',
      icon: '🇺🇸',
      description: 'Arcadia USA: Tecnología y futuro en tus manos.',
      image: 'assets/images/logosArcadia/eeuu.jpg',
      offices: [
        {
          name: 'Miami',
          link: '',
          icon: '',
          address: '8350 nw 52ter Suite 301 doral Florida 33166 oficina 199.',
        },
      ],
    },
    {
      name: 'Panamá',
      link: 'https://www.instagram.com/arcadiaviajes.pa/',
      icon: '🇵🇦',
      description: 'Arcadia Panamá: El viaje de tus sueños.',
      image: 'assets/images/logosArcadia/panama.jpg',
      offices: [
        {
          name: 'Panamá',
          link: '',
          icon: '',
          address:
            'Av. Centenario, Torre Aseguradora Ancon, oficina 14K, Costa del Este, Panamá.',
        },
      ],
    },
    {
      name: 'Perú',
      link: 'https://www.instagram.com/arcadiaviajes.pe/',
      icon: '🇵🇪',
      description: 'Arcadia Perú: Innovación al alcance de todos.',
      image: 'assets/images/logosArcadia/peru.jpg',
      offices: [
        {
          name: 'Lima',
          link: '',
          icon: '',
          address:
            'Centro Comercial Caminos del Inca, Avenida Caminos del Inca 257 – 269, 3er piso oficina 326.',
        },
      ],
    },
    {
      name: 'Chile',
      link: 'https://www.instagram.com/arcadiaviajes.cl/',
      icon: '🇨🇱',
      description: 'Arcadia Chile: Creando conexiones que importan.',
      image: 'assets/images/logosArcadia/chile.jpg',
      offices: [
        {
          name: 'Santiago de Chile',
          link: '',
          icon: '',
          address: 'Serrano 73, torre Snap, piso 3 oficina 313. Stgo. Chile.',
        },
      ],
    },
    {
      name: 'Ecuador',
      link: 'https://www.instagram.com/arcadiaviajes.ec/',
      icon: '🇪🇨',
      description: 'Arcadia Ecuador: Inspirando el cambio que necesitamos.',
      image: 'assets/images/logosArcadia/ecuador.jpg',
      offices: [
        {
          name: 'Quito',
          link: '',
          icon: '',
          address:
            'Av. Moscú y Av. Noruega, Edificio Moscú Platz, piso 1, oficina 4.',
        },
      ],
    },
  ]
}
