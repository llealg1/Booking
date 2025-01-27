export class User {
  token?: string
  access_token?: any
  id?: number;
  name?: string;
  last_name?: string;
  contactEmergencyCustomer?: any[]; // Puedes definir el tipo exacto si se conoce
  email?: string;
  phone?: string;
  identityCard?: string;
  frequent_traveler?: boolean;
  passport?: string;
  country?: string;
  child?: boolean;
  state?: string;
  street?: string;
  birth_date?: string; // ISO formato de fecha. Usa `Date` si se prefiere una instancia de fecha
  instagram?: string | null;
  createdAt?: string; // ISO formato de fecha
  updatedAt?: string; // ISO formato de fecha
  assignedUser?: any | null; // Define el tipo exacto si se conoce
  ticket?: any[]; // Puedes definir el tipo exacto si se conoce
  identityImage?: string | null;
  passportImage?: string | null;
  imgUrl?: string | null;
  type?: {
    id?: number;
    name?: string;
  };
  rol?: string;

}
