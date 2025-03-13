import { CommonModule } from '@angular/common'
import { Component, inject, ViewChild, ElementRef } from '@angular/core'
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms'
import { Router } from '@angular/router'
import { last } from 'rxjs'
import { CountryService } from '@/app/core/services/country.service'
import { ContactService } from '@/app/core/services/contact.service'
import { TinySliderSettings } from 'tiny-slider'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { ConfirmTicketComponent } from './components/confirm-ticket/confirm-ticket.component'
import { ReviewCardComponent } from '../admin/reviews/components/review-card/review-card.component'
import { ReviewDetailComponent } from './components/review-detail/review-detail.component'
import { HttpClient } from '@angular/common/http'

type OurStoryType = {
  title: string
  description: string
  icon: string
  variant: string
}

type TestimonialType = {
  title: string
  description: string
  image: string
}

const testimonialData: TestimonialType[] = [
  {
    title: 'Asesoría Personalizada',
    description: 'Te ayudamos a encontrar el mejor vuelo.',
    image: 'assets/images/asesoria.jpg',
  },
  {
    title: 'Seguro de viajes',
    description: 'Obtén una póliza para imprevistos del viaje.',
    image: 'assets/images/seguro.jpg',
  },
  {
    title: 'Financiamiento Disponible',
    description: 'Paga tu boleto en cómodas cuotas y viaja sin estrés.',
    image: 'assets/images/financiamiento.jpg',
  },
  {
    title: 'Promociones y Ofertas',
    description:
      'Accede a tarifas especiales que no encontrarás en otros sitios.',
    image: 'assets/images/promocion.jpg',
  },
  {
    title: 'eSIM para Viajeros',
    description:
      'Conéctate a internet desde el momento en que aterrizas sin costo.',
    image: 'assets/images/esim.jpg',
  },
  {
    title: 'Código de referidos',
    description: 'Viaja con nosotros y gana puntos viajeros recomendándono',
    image: 'assets/images/referidos.jpg',
  },
]

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TinySliderComponent,
    ConfirmTicketComponent,
    ReviewDetailComponent,
  ],
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.scss',
})
export class EuropeComponent {
  @ViewChild('inicio') inicio!: ElementRef
  // phoneCodeControl = new FormControl('')

  prefixArray: any[] = [
    {
      name: 'Afganistán',
      code: 'AF',
      phoneCode: '+93',
      flagEmoji: '🇦🇫',
    },
    {
      name: 'Albania',
      code: 'AL',
      phoneCode: '+355',
      flagEmoji: '🇦🇱',
    },
    {
      name: 'Alemania',
      code: 'DE',
      phoneCode: '+49',
      flagEmoji: '🇩🇪',
    },
    {
      name: 'Andorra',
      code: 'AD',
      phoneCode: '+376',
      flagEmoji: '🇦🇩',
    },
    {
      name: 'Angola',
      code: 'AO',
      phoneCode: '+244',
      flagEmoji: '🇦🇴',
    },
    {
      name: 'Anguila',
      code: 'AI',
      phoneCode: '+1264',
      flagEmoji: '🇦🇮',
    },
    {
      name: 'Antártida',
      code: 'AQ',
      phoneCode: '+672',
      flagEmoji: '🇦🇶',
    },
    {
      name: 'Antigua y Barbuda',
      code: 'AG',
      phoneCode: '+1268',
      flagEmoji: '🇦🇬',
    },
    {
      name: 'Antillas Holandesas',
      code: 'AN',
      phoneCode: '+599',
      flagEmoji: '🇧🇶',
    },
    {
      name: 'Arabia Saudita',
      code: 'SA',
      phoneCode: '+966',
      flagEmoji: '🇸🇦',
    },
    {
      name: 'Argelia',
      code: 'DZ',
      phoneCode: '+213',
      flagEmoji: '🇩🇿',
    },
    {
      name: 'Argentina',
      code: 'AR',
      phoneCode: '+54',
      flagEmoji: '🇦🇷',
    },
    {
      name: 'Armenia',
      code: 'AM',
      phoneCode: '+374',
      flagEmoji: '🇦🇲',
    },
    {
      name: 'Aruba',
      code: 'AW',
      phoneCode: '+297',
      flagEmoji: '🇦🇼',
    },
    {
      name: 'Australia',
      code: 'AU',
      phoneCode: '+61',
      flagEmoji: '🇦🇺',
    },
    {
      name: 'Austria',
      code: 'AT',
      phoneCode: '+43',
      flagEmoji: '🇦🇹',
    },
    {
      name: 'Azerbaiyán',
      code: 'AZ',
      phoneCode: '+994',
      flagEmoji: '🇦🇿',
    },
    {
      name: 'Bahamas',
      code: 'BS',
      phoneCode: '+1242',
      flagEmoji: '🇧🇸',
    },
    {
      name: 'Bahrein',
      code: 'BH',
      phoneCode: '+973',
      flagEmoji: '🇧🇭',
    },
    {
      name: 'Bangladesh',
      code: 'BD',
      phoneCode: '+880',
      flagEmoji: '🇧🇩',
    },
    {
      name: 'Barbados',
      code: 'BB',
      phoneCode: '+1246',
      flagEmoji: '🇧🇧',
    },
    {
      name: 'Bélgica',
      code: 'BE',
      phoneCode: '+32',
      flagEmoji: '🇧🇪',
    },
    {
      name: 'Belice',
      code: 'BZ',
      phoneCode: '+501',
      flagEmoji: '🇧🇿',
    },
    {
      name: 'Benín',
      code: 'BJ',
      phoneCode: '+229',
      flagEmoji: '🇧🇯',
    },
    {
      name: 'Bhután',
      code: 'BT',
      phoneCode: '+975',
      flagEmoji: '🇧🇹',
    },
    {
      name: 'Bielorrusia',
      code: 'BY',
      phoneCode: '+375',
      flagEmoji: '🇧🇾',
    },
    {
      name: 'Birmania',
      code: 'MM',
      phoneCode: '+95',
      flagEmoji: '🇲🇲',
    },
    {
      name: 'Bolivia',
      code: 'BO',
      phoneCode: '+591',
      flagEmoji: '🇧🇴',
    },
    {
      name: 'Bosnia y Herzegovina',
      code: 'BA',
      phoneCode: '+387',
      flagEmoji: '🇧🇦',
    },
    {
      name: 'Botsuana',
      code: 'BW',
      phoneCode: '+267',
      flagEmoji: '🇧🇼',
    },
    {
      name: 'Brasil',
      code: 'BR',
      phoneCode: '+55',
      flagEmoji: '🇧🇷',
    },
    {
      name: 'Brunéi',
      code: 'BN',
      phoneCode: '+673',
      flagEmoji: '🇧🇳',
    },
    {
      name: 'Bulgaria',
      code: 'BG',
      phoneCode: '+359',
      flagEmoji: '🇧🇬',
    },
    {
      name: 'Burkina Faso',
      code: 'BF',
      phoneCode: '+226',
      flagEmoji: '🇧🇫',
    },
    {
      name: 'Burundi',
      code: 'BI',
      phoneCode: '+257',
      flagEmoji: '🇧🇮',
    },
    {
      name: 'Cabo Verde',
      code: 'CV',
      phoneCode: '+238',
      flagEmoji: '🇨🇻',
    },
    {
      name: 'Camboya',
      code: 'KH',
      phoneCode: '+855',
      flagEmoji: '🇰🇭',
    },
    {
      name: 'Camerún',
      code: 'CM',
      phoneCode: '+237',
      flagEmoji: '🇨🇲',
    },
    {
      name: 'Canadá',
      code: 'CA',
      phoneCode: '+1',
      flagEmoji: '🇨🇦',
    },
    {
      name: 'Chad',
      code: 'TD',
      phoneCode: '+235',
      flagEmoji: '🇹🇩',
    },
    {
      name: 'Chile',
      code: 'CL',
      phoneCode: '+56',
      flagEmoji: '🇨🇱',
    },
    {
      name: 'China',
      code: 'CN',
      phoneCode: '+86',
      flagEmoji: '🇨🇳',
    },
    {
      name: 'Chipre',
      code: 'CY',
      phoneCode: '+357',
      flagEmoji: '🇨🇾',
    },
    {
      name: 'Ciudad del Vaticano',
      code: 'VA',
      phoneCode: '+379',
      flagEmoji: '🇻🇦',
    },
    {
      name: 'Colombia',
      code: 'CO',
      phoneCode: '+57',
      flagEmoji: '🇨🇴',
    },
    {
      name: 'Comoras',
      code: 'KM',
      phoneCode: '+269',
      flagEmoji: '🇰🇲',
    },
    {
      name: 'Corea del Norte',
      code: 'KP',
      phoneCode: '+850',
      flagEmoji: '🇰🇵',
    },
    {
      name: 'Corea del Sur',
      code: 'KR',
      phoneCode: '+82',
      flagEmoji: '🇰🇷',
    },
    {
      name: 'Costa de Marfil',
      code: 'CI',
      phoneCode: '+225',
      flagEmoji: '🇨🇮',
    },
    {
      name: 'Costa Rica',
      code: 'CR',
      phoneCode: '+506',
      flagEmoji: '🇨🇷',
    },
    {
      name: 'Croacia',
      code: 'HR',
      phoneCode: '+385',
      flagEmoji: '🇭🇷',
    },
    {
      name: 'Cuba',
      code: 'CU',
      phoneCode: '+53',
      flagEmoji: '🇨🇺',
    },
    {
      name: 'Dinamarca',
      code: 'DK',
      phoneCode: '+45',
      flagEmoji: '🇩🇰',
    },
    {
      name: 'Dominica',
      code: 'DM',
      phoneCode: '+1767',
      flagEmoji: '🇩🇲',
    },
    {
      name: 'Ecuador',
      code: 'EC',
      phoneCode: '+593',
      flagEmoji: '🇪🇨',
    },
    {
      name: 'Egipto',
      code: 'EG',
      phoneCode: '+20',
      flagEmoji: '🇪🇬',
    },
    {
      name: 'El Salvador',
      code: 'SV',
      phoneCode: '+503',
      flagEmoji: '🇸🇻',
    },
    {
      name: 'Emiratos Árabes Unidos',
      code: 'AE',
      phoneCode: '+971',
      flagEmoji: '🇦🇪',
    },
    {
      name: 'Eritrea',
      code: 'ER',
      phoneCode: '+291',
      flagEmoji: '🇪🇷',
    },
    {
      name: 'Eslovaquia',
      code: 'SK',
      phoneCode: '+421',
      flagEmoji: '🇸🇰',
    },
    {
      name: 'Eslovenia',
      code: 'SI',
      phoneCode: '+386',
      flagEmoji: '🇸🇮',
    },
    {
      name: 'España',
      code: 'ES',
      phoneCode: '+34',
      flagEmoji: '🇪🇸',
    },
    {
      name: 'Estados Unidos de América',
      code: 'US',
      phoneCode: '+1',
      flagEmoji: '🇺🇸',
    },
    {
      name: 'Estonia',
      code: 'EE',
      phoneCode: '+372',
      flagEmoji: '🇪🇪',
    },
    {
      name: 'Etiopía',
      code: 'ET',
      phoneCode: '+251',
      flagEmoji: '🇪🇹',
    },
    {
      name: 'Filipinas',
      code: 'PH',
      phoneCode: '+63',
      flagEmoji: '🇵🇭',
    },
    {
      name: 'Finlandia',
      code: 'FI',
      phoneCode: '+358',
      flagEmoji: '🇫🇮',
    },
    {
      name: 'Fiyi',
      code: 'FJ',
      phoneCode: '+679',
      flagEmoji: '🇫🇯',
    },
    {
      name: 'Francia',
      code: 'FR',
      phoneCode: '+33',
      flagEmoji: '🇫🇷',
    },
    {
      name: 'Gabón',
      code: 'GA',
      phoneCode: '+241',
      flagEmoji: '🇬🇦',
    },
    {
      name: 'Gambia',
      code: 'GM',
      phoneCode: '+220',
      flagEmoji: '🇬🇲',
    },
    {
      name: 'Georgia',
      code: 'GE',
      phoneCode: '+995',
      flagEmoji: '🇬🇪',
    },
    {
      name: 'Ghana',
      code: 'GH',
      phoneCode: '+233',
      flagEmoji: '🇬🇭',
    },
    {
      name: 'Gibraltar',
      code: 'GI',
      phoneCode: '+350',
      flagEmoji: '🇬🇮',
    },
    {
      name: 'Granada',
      code: 'GD',
      phoneCode: '+1473',
      flagEmoji: '🇬🇩',
    },
    {
      name: 'Grecia',
      code: 'GR',
      phoneCode: '+30',
      flagEmoji: '🇬🇷',
    },
    {
      name: 'Groenlandia',
      code: 'GL',
      phoneCode: '+299',
      flagEmoji: '🇬🇱',
    },
    {
      name: 'Guadalupe',
      code: 'GP',
      phoneCode: '+590',
      flagEmoji: '🇬🇵',
    },
    {
      name: 'Guam',
      code: 'GU',
      phoneCode: '+1671',
      flagEmoji: '🇬🇺',
    },
    {
      name: 'Guatemala',
      code: 'GT',
      phoneCode: '+502',
      flagEmoji: '🇬🇹',
    },
    {
      name: 'Guayana Francesa',
      code: 'GF',
      phoneCode: '+594',
      flagEmoji: '🇬🇫',
    },
    {
      name: 'Guernsey',
      code: 'GG',
      phoneCode: '+44',
      flagEmoji: '🇬🇬',
    },
    {
      name: 'Guinea',
      code: 'GN',
      phoneCode: '+224',
      flagEmoji: '🇬🇳',
    },
    {
      name: 'Guinea Ecuatorial',
      code: 'GQ',
      phoneCode: '+240',
      flagEmoji: '🇬🇶',
    },
    {
      name: 'Guinea-Bissau',
      code: 'GW',
      phoneCode: '+245',
      flagEmoji: '🇬🇼',
    },
    {
      name: 'Guyana',
      code: 'GY',
      phoneCode: '+595',
      flagEmoji: '🇬🇾',
    },
    {
      name: 'Haití',
      code: 'HT',
      phoneCode: '+509',
      flagEmoji: '🇭🇹',
    },
    {
      name: 'Honduras',
      code: 'HN',
      phoneCode: '+504',
      flagEmoji: '🇭🇳',
    },
    {
      name: 'Hong kong',
      code: 'HK',
      phoneCode: '+852',
      flagEmoji: '🇭🇰',
    },
    {
      name: 'Hungría',
      code: 'HU',
      phoneCode: '+36',
      flagEmoji: '🇭🇺',
    },
    {
      name: 'India',
      code: 'IN',
      phoneCode: '+91',
      flagEmoji: '🇮🇳',
    },
    {
      name: 'Indonesia',
      code: 'ID',
      phoneCode: '+62',
      flagEmoji: '🇮🇩',
    },
    {
      name: 'Irak',
      code: 'IQ',
      phoneCode: '+964',
      flagEmoji: '🇮🇷',
    },
    {
      name: 'Irán',
      code: 'IR',
      phoneCode: '+98',
      flagEmoji: '🇮🇷',
    },
    {
      name: 'Irlanda',
      code: 'IE',
      phoneCode: '+353',
      flagEmoji: '🇮🇪',
    },
    {
      name: 'Isla de Man',
      code: 'IM',
      phoneCode: '+44',
      flagEmoji: '🇮🇲',
    },
    {
      name: 'Isla de Navidad',
      code: 'CX',
      phoneCode: '+61',
      flagEmoji: '🇨🇽',
    },
    {
      name: 'Isla Norfolk',
      code: 'NF',
      phoneCode: '+672',
      flagEmoji: '🇳🇫',
    },
    {
      name: 'Islandia',
      code: 'IS',
      phoneCode: '+354',
      flagEmoji: '🇮🇸',
    },
    {
      name: 'Islas Bermudas',
      code: 'BM',
      phoneCode: '+1441',
      flagEmoji: '🇧🇲',
    },
    {
      name: 'Islas Caimán',
      code: 'KY',
      phoneCode: '+345',
      flagEmoji: '🇰🇾',
    },
    {
      name: 'Islas Cocos (Keeling)',
      code: 'CC',
      phoneCode: '+61',
      flagEmoji: '🇨🇨',
    },
    {
      name: 'Islas Cook',
      code: 'CK',
      phoneCode: '+682',
      flagEmoji: '🇨🇰',
    },
    {
      name: 'Islas de Åland',
      code: 'AX',
      phoneCode: '+358',
      flagEmoji: '🇦🇽',
    },
    {
      name: 'Islas Feroe',
      code: 'FO',
      phoneCode: '+298',
      flagEmoji: '🇫🇴',
    },
    {
      name: 'Islas Georgias del Sur y Sandwich del Sur',
      code: 'GS',
      phoneCode: '+500',
      flagEmoji: '🇬🇸',
    },
    {
      name: 'Islas Maldivas',
      code: 'MV',
      phoneCode: '+960',
      flagEmoji: '🇲🇻',
    },
    {
      name: 'Islas Malvinas',
      code: 'FK',
      phoneCode: '+500',
      flagEmoji: '🇫🇰',
    },
    {
      name: 'Islas Marianas del Norte',
      code: 'MP',
      phoneCode: '+1670',
      flagEmoji: '🇲🇵',
    },
    {
      name: 'Islas Marshall',
      code: 'MH',
      phoneCode: '+692',
      flagEmoji: '🇲🇭',
    },
    {
      name: 'Islas Pitcairn',
      code: 'PN',
      phoneCode: '+872',
      flagEmoji: '🇵🇳',
    },
    {
      name: 'Islas Salomón',
      code: 'SB',
      phoneCode: '+677',
      flagEmoji: '🇸🇧',
    },
    {
      name: 'Islas Turcas y Caicos',
      code: 'TC',
      phoneCode: '+1649',
      flagEmoji: '🇹🇨',
    },
    {
      name: 'Islas Vírgenes Británicas',
      code: 'VG',
      phoneCode: '+1284',
      flagEmoji: '🇻🇬',
    },
    {
      name: 'Islas Vírgenes de los Estados Unidos',
      code: 'VI',
      phoneCode: '+1340',
      flagEmoji: '🇻🇮',
    },
    {
      name: 'Israel',
      code: 'IL',
      phoneCode: '+972',
      flagEmoji: '🇮🇱',
    },
    {
      name: 'Italia',
      code: 'IT',
      phoneCode: '+39',
      flagEmoji: '🇮🇹',
    },
    {
      name: 'Jamaica',
      code: 'JM',
      phoneCode: '+1876',
      flagEmoji: '🇯🇲',
    },
    {
      name: 'Japón',
      code: 'JP',
      phoneCode: '+81',
      flagEmoji: '🇯🇵',
    },
    {
      name: 'Jersey',
      code: 'JE',
      phoneCode: '+44',
      flagEmoji: '🇯🇪',
    },
    {
      name: 'Jordania',
      code: 'JO',
      phoneCode: '+962',
      flagEmoji: '🇯🇴',
    },
    {
      name: 'Kazajistán',
      code: 'KZ',
      phoneCode: '+77',
      flagEmoji: '🇰🇿',
    },
    {
      name: 'Kenia',
      code: 'KE',
      phoneCode: '+254',
      flagEmoji: '🇰🇪',
    },
    {
      name: 'Kirguistán',
      code: 'KG',
      phoneCode: '+996',
      flagEmoji: '🇰🇬',
    },
    {
      name: 'Kiribati',
      code: 'KI',
      phoneCode: '+686',
      flagEmoji: '🇰🇮',
    },
    {
      name: 'Kuwait',
      code: 'KW',
      phoneCode: '+965',
      flagEmoji: '🇰🇼',
    },
    {
      name: 'Laos',
      code: 'LA',
      phoneCode: '+856',
      flagEmoji: '🇱🇦',
    },
    {
      name: 'Lesoto',
      code: 'LS',
      phoneCode: '+266',
      flagEmoji: '🇱🇸',
    },
    {
      name: 'Letonia',
      code: 'LV',
      phoneCode: '+371',
      flagEmoji: '🇱🇻',
    },
    {
      name: 'Líbano',
      code: 'LB',
      phoneCode: '+961',
      flagEmoji: '🇱🇧',
    },
    {
      name: 'Liberia',
      code: 'LR',
      phoneCode: '+231',
      flagEmoji: '🇱🇷',
    },
    {
      name: 'Libia',
      code: 'LY',
      phoneCode: '+218',
      flagEmoji: '🇱🇾',
    },
    {
      name: 'Liechtenstein',
      code: 'LI',
      phoneCode: '+423',
      flagEmoji: '🇱🇮',
    },
    {
      name: 'Lituania',
      code: 'LT',
      phoneCode: '+370',
      flagEmoji: '🇱🇹',
    },
    {
      name: 'Luxemburgo',
      code: 'LU',
      phoneCode: '+352',
      flagEmoji: '🇱🇺',
    },
    {
      name: 'Macao',
      code: 'MO',
      phoneCode: '+853',
      flagEmoji: '🇲🇴',
    },
    {
      name: 'Macedonia del Norte',
      code: 'MK',
      phoneCode: '+389',
      flagEmoji: '🇲🇰',
    },
    {
      name: 'Madagascar',
      code: 'MG',
      phoneCode: '+261',
      flagEmoji: '🇲🇬',
    },
    {
      name: 'Malasia',
      code: 'MY',
      phoneCode: '+60',
      flagEmoji: '🇲🇾',
    },
    {
      name: 'Malawi',
      code: 'MW',
      phoneCode: '+265',
      flagEmoji: '🇲🇼',
    },
    {
      name: 'Mali',
      code: 'ML',
      phoneCode: '+223',
      flagEmoji: '🇲🇱',
    },
    {
      name: 'Malta',
      code: 'MT',
      phoneCode: '+356',
      flagEmoji: '🇲🇹',
    },
    {
      name: 'Marruecos',
      code: 'MA',
      phoneCode: '+212',
      flagEmoji: '🇲🇦',
    },
    {
      name: 'Martinica',
      code: 'MQ',
      phoneCode: '+596',
      flagEmoji: '🇲🇶',
    },
    {
      name: 'Mauricio',
      code: 'MU',
      phoneCode: '+230',
      flagEmoji: '🇲🇺',
    },
    {
      name: 'Mauritania',
      code: 'MR',
      phoneCode: '+222',
      flagEmoji: '🇲🇷',
    },
    {
      name: 'Mayotte',
      code: 'YT',
      phoneCode: '+262',
      flagEmoji: '🇾🇹',
    },
    {
      name: 'México',
      code: 'MX',
      phoneCode: '+52',
      flagEmoji: '🇲🇽',
    },
    {
      name: 'Micronesia',
      code: 'FM',
      phoneCode: '+691',
      flagEmoji: '🇫🇲',
    },
    {
      name: 'Moldavia',
      code: 'MD',
      phoneCode: '+373',
      flagEmoji: '🇲🇩',
    },
    {
      name: 'Mónaco',
      code: 'MC',
      phoneCode: '+377',
      flagEmoji: '🇲🇨',
    },
    {
      name: 'Mongolia',
      code: 'MN',
      phoneCode: '+976',
      flagEmoji: '🇲🇳',
    },
    {
      name: 'Montenegro',
      code: 'ME',
      phoneCode: '+382',
      flagEmoji: '🇲🇪',
    },
    {
      name: 'Montserrat',
      code: 'MS',
      phoneCode: '+1664',
      flagEmoji: '🇲🇸',
    },
    {
      name: 'Mozambique',
      code: 'MZ',
      phoneCode: '+258',
      flagEmoji: '🇲🇿',
    },
    {
      name: 'Namibia',
      code: 'NA',
      phoneCode: '+264',
      flagEmoji: '🇳🇦',
    },
    {
      name: 'Nauru',
      code: 'NR',
      phoneCode: '+674',
      flagEmoji: '🇳🇷',
    },
    {
      name: 'Nepal',
      code: 'NP',
      phoneCode: '+977',
      flagEmoji: '🇳🇵',
    },
    {
      name: 'Nicaragua',
      code: 'NI',
      phoneCode: '+505',
      flagEmoji: '🇳🇮',
    },
    {
      name: 'Niger',
      code: 'NE',
      phoneCode: '+227',
      flagEmoji: '🇳🇪',
    },
    {
      name: 'Nigeria',
      code: 'NG',
      phoneCode: '+234',
      flagEmoji: '🇳🇬',
    },
    {
      name: 'Niue',
      code: 'NU',
      phoneCode: '+683',
      flagEmoji: '🇳🇺',
    },
    {
      name: 'Noruega',
      code: 'NO',
      phoneCode: '+47',
      flagEmoji: '🇳🇴',
    },
    {
      name: 'Nueva Caledonia',
      code: 'NC',
      phoneCode: '+687',
      flagEmoji: '🇳🇨',
    },
    {
      name: 'Nueva Zelanda',
      code: 'NZ',
      phoneCode: '+64',
      flagEmoji: '🇳🇿',
    },
    {
      name: 'Omán',
      code: 'OM',
      phoneCode: '+968',
      flagEmoji: '🇴🇲',
    },
    {
      name: 'Países Bajos',
      code: 'NL',
      phoneCode: '+31',
      flagEmoji: '🇳🇱',
    },
    {
      name: 'Pakistán',
      code: 'PK',
      phoneCode: '+92',
      flagEmoji: '🇵🇰',
    },
    {
      name: 'Palau',
      code: 'PW',
      phoneCode: '+680',
      flagEmoji: '🇵🇼',
    },
    {
      name: 'Palestina',
      code: 'PS',
      phoneCode: '+970',
      flagEmoji: '🇵🇸',
    },
    {
      name: 'Panamá',
      code: 'PA',
      phoneCode: '+507',
      flagEmoji: '🇵🇦',
    },
    {
      name: 'Papúa Nueva Guinea',
      code: 'PG',
      phoneCode: '+675',
      flagEmoji: '🇵🇬',
    },
    {
      name: 'Paraguay',
      code: 'PY',
      phoneCode: '+595',
      flagEmoji: '🇵🇾',
    },
    {
      name: 'Perú',
      code: 'PE',
      phoneCode: '+51',
      flagEmoji: '🇵🇪',
    },
    {
      name: 'Polinesia Francesa',
      code: 'PF',
      phoneCode: '+689',
      flagEmoji: '🇵🇫',
    },
    {
      name: 'Polonia',
      code: 'PL',
      phoneCode: '+48',
      flagEmoji: '🇵🇱',
    },
    {
      name: 'Portugal',
      code: 'PT',
      phoneCode: '+351',
      flagEmoji: '🇵🇹',
    },
    {
      name: 'Puerto Rico',
      code: 'PR',
      phoneCode: '+1939',
      flagEmoji: '🇵🇷',
    },
    {
      name: 'Qatar',
      code: 'QA',
      phoneCode: '+974',
      flagEmoji: '🇶🇦',
    },
    {
      name: 'Reino Unido',
      code: 'GB',
      phoneCode: '+44',
      flagEmoji: '🇬🇧',
    },
    {
      name: 'República Centroafricana',
      code: 'CF',
      phoneCode: '+236',
      flagEmoji: '🇨🇫',
    },
    {
      name: 'República Checa',
      code: 'CZ',
      phoneCode: '+420',
      flagEmoji: '🇨🇿',
    },
    {
      name: 'República de Sudán del Sur',
      code: 'SS',
      phoneCode: '+211',
      flagEmoji: '🇸🇸',
    },
    {
      name: 'República del Congo',
      code: 'CG',
      phoneCode: '+242',
      flagEmoji: '🇨🇬',
    },
    {
      name: 'República Democrática del Congo',
      code: 'CD',
      phoneCode: '+243',
      flagEmoji: '🇨🇩',
    },
    {
      name: 'República Dominicana',
      code: 'DO',
      phoneCode: '+1849',
      flagEmoji: '🇩🇴',
    },
    {
      name: 'Reunión',
      code: 'RE',
      phoneCode: '+262',
      flagEmoji: '🇷🇪',
    },
    {
      name: 'Ruanda',
      code: 'RW',
      phoneCode: '+250',
      flagEmoji: '🇷🇼',
    },
    {
      name: 'Rumanía',
      code: 'RO',
      phoneCode: '+40',
      flagEmoji: '🇷🇴',
    },
    {
      name: 'Rusia',
      code: 'RU',
      phoneCode: '+7',
      flagEmoji: '🇷🇺',
    },
    {
      name: 'Samoa',
      code: 'WS',
      phoneCode: '+685',
      flagEmoji: '🇼🇸',
    },
    {
      name: 'Samoa Americana',
      code: 'AS',
      phoneCode: '+1684',
      flagEmoji: '🇦🇸',
    },
    {
      name: 'San Bartolomé',
      code: 'BL',
      phoneCode: '+590',
      flagEmoji: '🇧🇱',
    },
    {
      name: 'San Cristóbal y Nieves',
      code: 'KN',
      phoneCode: '+1869',
      flagEmoji: '🇰🇳',
    },
    {
      name: 'San Marino',
      code: 'SM',
      phoneCode: '+378',
      flagEmoji: '🇸🇲',
    },
    {
      name: 'San Martín (Francia)',
      code: 'MF',
      phoneCode: '+590',
      flagEmoji: '🇲🇫',
    },
    {
      name: 'San Pedro y Miquelón',
      code: 'PM',
      phoneCode: '+508',
      flagEmoji: '🇵🇲',
    },
    {
      name: 'San Vicente y las Granadinas',
      code: 'VC',
      phoneCode: '+1784',
      flagEmoji: '🇻🇨',
    },
    {
      name: 'Santa Elena',
      code: 'SH',
      phoneCode: '+290',
      flagEmoji: '🇸🇭',
    },
    {
      name: 'Santa Lucía',
      code: 'LC',
      phoneCode: '+1758',
      flagEmoji: '🇱🇨',
    },
    {
      name: 'Santo Tomé y Príncipe',
      code: 'ST',
      phoneCode: '+239',
      flagEmoji: '🇸🇹',
    },
    {
      name: 'Senegal',
      code: 'SN',
      phoneCode: '+221',
      flagEmoji: '🇸🇳',
    },
    {
      name: 'Serbia',
      code: 'RS',
      phoneCode: '+381',
      flagEmoji: '🇷🇸',
    },
    {
      name: 'Seychelles',
      code: 'SC',
      phoneCode: '+248',
      flagEmoji: '🇸🇨',
    },
    {
      name: 'Sierra Leona',
      code: 'SL',
      phoneCode: '+232',
      flagEmoji: '🇸🇱',
    },
    {
      name: 'Singapur',
      code: 'SG',
      phoneCode: '+65',
      flagEmoji: '🇸🇬',
    },
    {
      name: 'Siria',
      code: 'SY',
      phoneCode: '+963',
      flagEmoji: '🇸🇾',
    },
    {
      name: 'Somalia',
      code: 'SO',
      phoneCode: '+252',
      flagEmoji: '🇸🇴',
    },
    {
      name: 'Sri lanka',
      code: 'LK',
      phoneCode: '+94',
      flagEmoji: '🇱🇰',
    },
    {
      name: 'Sudáfrica',
      code: 'ZA',
      phoneCode: '+27',
      flagEmoji: '🇿🇦',
    },
    {
      name: 'Sudán',
      code: 'SD',
      phoneCode: '+249',
      flagEmoji: '🇸🇩',
    },
    {
      name: 'Suecia',
      code: 'SE',
      phoneCode: '+46',
      flagEmoji: '🇸🇪',
    },
    {
      name: 'Suiza',
      code: 'CH',
      phoneCode: '+41',
      flagEmoji: '🇨🇭',
    },
    {
      name: 'Surinám',
      code: 'SR',
      phoneCode: '+597',
      flagEmoji: '🇸🇷',
    },
    {
      name: 'Svalbard y Jan Mayen',
      code: 'SJ',
      phoneCode: '+47',
      flagEmoji: '🇸🇯',
    },
    {
      name: 'Swazilandia',
      code: 'SZ',
      phoneCode: '+268',
      flagEmoji: '🇸🇿',
    },
    {
      name: 'Tailandia',
      code: 'TH',
      phoneCode: '+66',
      flagEmoji: '🇹🇭',
    },
    {
      name: 'Taiwán',
      code: 'TW',
      phoneCode: '+886',
      flagEmoji: '🇹🇼',
    },
    {
      name: 'Tanzania',
      code: 'TZ',
      phoneCode: '+255',
      flagEmoji: '🇹🇿',
    },
    {
      name: 'Tayikistán',
      code: 'TJ',
      phoneCode: '+992',
      flagEmoji: '🇹🇯',
    },
    {
      name: 'Territorio Británico del Océano Índico',
      code: 'IO',
      phoneCode: '+246',
      flagEmoji: '🇮🇴',
    },
    {
      name: 'Timor Oriental',
      code: 'TL',
      phoneCode: '+670',
      flagEmoji: '🇹🇱',
    },
    {
      name: 'Togo',
      code: 'TG',
      phoneCode: '+228',
      flagEmoji: '🇹🇬',
    },
    {
      name: 'Tokelau',
      code: 'TK',
      phoneCode: '+690',
      flagEmoji: '🇹🇰',
    },
    {
      name: 'Tonga',
      code: 'TO',
      phoneCode: '+676',
      flagEmoji: '🇹🇴',
    },
    {
      name: 'Trinidad y Tobago',
      code: 'TT',
      phoneCode: '+1868',
      flagEmoji: '🇹🇹',
    },
    {
      name: 'Tunez',
      code: 'TN',
      phoneCode: '+216',
      flagEmoji: '🇹🇳',
    },
    {
      name: 'Turkmenistán',
      code: 'TM',
      phoneCode: '+993',
      flagEmoji: '🇹🇲',
    },
    {
      name: 'Turquía',
      code: 'TR',
      phoneCode: '+90',
      flagEmoji: '🇹🇷',
    },
    {
      name: 'Tuvalu',
      code: 'TV',
      phoneCode: '+688',
      flagEmoji: '🇹🇻',
    },
    {
      name: 'Ucrania',
      code: 'UA',
      phoneCode: '+380',
      flagEmoji: '🇺🇦',
    },
    {
      name: 'Uganda',
      code: 'UG',
      phoneCode: '+256',
      flagEmoji: '🇺🇬',
    },
    {
      name: 'Uruguay',
      code: 'UY',
      phoneCode: '+598',
      flagEmoji: '🇺🇾',
    },
    {
      name: 'Uzbekistán',
      code: 'UZ',
      phoneCode: '+998',
      flagEmoji: '🇺🇿',
    },
    {
      name: 'Vanuatu',
      code: 'VU',
      phoneCode: '+678',
      flagEmoji: '🇻🇺',
    },
    {
      name: 'Venezuela',
      code: 'VE',
      phoneCode: '+58',
      flagEmoji: '🇻🇪',
    },
    {
      name: 'Vietnam',
      code: 'VN',
      phoneCode: '+84',
      flagEmoji: '🇻🇳',
    },
    {
      name: 'Wallis y Futuna',
      code: 'WF',
      phoneCode: '+681',
      flagEmoji: '🇼🇫',
    },
    {
      name: 'Yemen',
      code: 'YE',
      phoneCode: '+967',
      flagEmoji: '🇾🇪',
    },
    {
      name: 'Yibuti',
      code: 'DJ',
      phoneCode: '+253',
      flagEmoji: '🇩🇯',
    },
    {
      name: 'Zambia',
      code: 'ZM',
      phoneCode: '+260',
      flagEmoji: '🇿🇲',
    },
    {
      name: 'Zimbabue',
      code: 'ZW',
      phoneCode: '+263',
      flagEmoji: '🇿🇼',
    },
  ]
  contactForm!: UntypedFormGroup
  submitted: boolean = false
  loading: boolean = false
  successMessage: string = ''
  scrollOffset = 450
  button!: HTMLElement
  private fb = inject(UntypedFormBuilder)
  private router = inject(Router)
  private contactService = inject(ContactService)
  private ghlWebhookUrl =
    // 'https://services.leadconnectorhq.com/hooks/YgkmNvWZLeyHSzp8YaOl/webhook-trigger/4a89bae5-9a83-4b20-b99b-686b5d23c2ce'
    'https://hooks.zapier.com/hooks/catch/22029691/2l23n9k/'

  destinations: any

  constructor(
    private countryService: CountryService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      description: ['', [Validators.required]],
      phoneCode: ['', [Validators.required]],
      // subject: ['', [Validators.required]],
    })
    this.countryService.getCountry().subscribe((rest) => {
      this.destinations = rest.data.map((data: any) => {
        return {
          label: data.name,
          value: data.id,
        }
      })
    })
  }
  get form() {
    return this.contactForm.controls
  }
  onSubmit() {
    this.submitted = true

    this.loading = true
    this.contactService.sendContactForm(this.contactForm.value).subscribe(
      (response) => {
        console.log('Form submitted successfully', response)
        this.enviarDatosAGHL(this.contactForm.value)
        this.loading = false
        this.successMessage = 'Formulario enviado con éxito!'
        setTimeout(() => {
          this.router.navigate(['/europe/europe-congratulation'])
        }, 2000)
      },

      (error) => {
        console.error('Error submitting form', error)
        this.loading = false
      }
    )
  }

  private enviarDatosAGHL(datos: any) {
    console.log(this.ghlWebhookUrl)
    console.log(datos)
    console.log('funciona')
    const aux = {
      ...this.contactForm.getRawValue(),
    }

    const aux2 = {
      contact: {
        firstName: aux.name,
        lastName: aux.lastName,
        email: aux.email,
        phone: aux.phone,
        description: aux.description,
      },
    }
    this.http.post(this.ghlWebhookUrl, aux2, {}).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.error('❌ Error al enviar a Zapier', error),
    })
  }

  reviews = [
    {
      name: 'Ysacleidi Duran Landinez',
      date: 'October 20, 2024',
      comment: 'Excelente servicio, siempre seguro y placentero.',
    },
    {
      name: 'Ali Hernandez',
      date: 'August 20, 2024',
      comment: 'Excelente, muy buena atención!',
    },
    {
      name: 'Ember Sanchez',
      date: 'December 20, 2024',
      comment: 'Muy bueno en realidad lo recomiendo',
    },
    {
      name: 'Mariauxy',
      date: 'August 20, 2024',
      comment: 'Mi asesor Johan Pereira, hasta ahora excelente asesoría.',
    },
  ]

  storyList: OurStoryType[] = [
    {
      title: '9 sedes en todo el mundo',
      description:
        'Contamos con oficinas en Perú, Chile , Argentina, Colombia, España, Venezuela.',
      icon: 'bi bi-airplane',
      variant: 'bg-orange text-orange',
    },
    {
      title: 'Lleva tus requisitos al día',
      description:
        'Te guiamos en visados y requisitos para viajes en todo el mundo.',
      icon: 'bi bi-luggage',
      variant: 'bg-success text-success',
    },
    {
      title: 'Financiamiento disponible',
      description:
        'Viaja ahora y paga en cómodas cuotas con nuestras opciones de financiamiento flexibles.',
      icon: 'bi bi-credit-card',
      variant: 'bg-primary text-primary',
    },
    {
      title: 'Aceptamos todos los métodos de pago',
      description:
        'Puedes pagar con tarjeta de crédito, debito, tranferencia bancaria y medios electrónicos.',
      icon: 'bi bi-bag-check',
      variant: 'bg-info text-info',
    },
  ]

  experienceList = testimonialData

  @ViewChild('experienceSlider', { static: false }) experienceSlider: any

  experienceSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 4,
    autoplayDirection: 'forward',
    responsive: {
      1: {
        items: 1,
        gutter: 10,
      },
      768: {
        items: 2,
        gutter: 10,
      },
      992: {
        items: 3,
        gutter: 30,
      },
      1200: {
        items: 4,
        gutter: 30,
      },
    },
  }

  onWindowScroll() {
    if (!this.button) return
    const target = window
    if (target && target.scrollY > this.scrollOffset) {
      this.button.classList.add('back-top-show')
    } else {
      this.button.classList.remove('back-top-show')
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
