export interface Status {
  name: string;
  value: string;
}

export interface Country {
  name: string;
  value: string;
}

export interface Department {
  name: string;
  value: string;
}

export interface MetaData {
  countries: Country[];
  departments: Department[];
}
