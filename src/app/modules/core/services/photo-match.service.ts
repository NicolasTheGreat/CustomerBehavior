import {Injectable} from '@angular/core';
import {log} from "util";
import {max} from "rxjs/operators";

export enum AGE_RANGE {
  YOUNG = 'young',
  MIDDLE = 'middle',
  OLD = 'old',
}

export enum PROFESSION {
  AIR_TRAFFIC_CONTROLLER = 'Air_traffic_controller',
  ANALYST = 'Analyst',
  ARCHITECT = 'Architect',
  ARMY_OFFICER = 'Army_officer',
  ARTIST = 'Artist',
  AVIATOR = 'Aviator',
  BIOMEDICAL_ENGINEER = 'Biomedical_Engineer',
  CHARTERED_ACCOUNTANT = 'Chartered_Accountant',
  CHEF = 'Chef',
  CHEMICAL_ENGINEER = 'Chemical_engineer',
  CIVIL_ENGINEER = 'Civil_engineer',
  CIVIL_SERVANT = 'Civil_servant',
  COMEDIAN = 'Comedian',
  COMPUTER_HARDWARE_ENGINEER = 'Computer_hardware_engineer',
  COMPUTER_OPERATOR = 'Computer_operator',
  CONSULTANT = 'Consultant',
  DENTIST = 'Dentist',
  DESIGN_ENGINEER = 'Design_Engineer',
  DESIGNER = 'Designer',
  DRAFTER = 'Drafter',
  ECONOMIST = 'Economist',
  ENGINEER = 'Engineer',
  FASHION_DESIGNER = 'Fashion_Designer',
  FINANCIAL_ANALYST = 'Financial_Analyst',
  FIREFIGHTER = 'Firefighter',
  FLIGHT_ATTENDANT = 'Flight_attendant',
  GEOLOGIST = 'Geologist',
  GRAPHIC_DESIGNER = 'Graphic_Designer',
  HOTEL_MANAGER = 'Hotel_Manager',
  INDUSTRIAL_ENGINEER = 'Industrial_Engineer',
  LAWYER = 'Lawyer',
  LIBRARIAN = 'Librarian',
  MAGISTRATE = 'Magistrate',
  MECHANICAL_ENGINEER = 'Mechanical_engineer',
  MICROBIOLOGIST = 'Microbiologist',
  OFFICIAL = 'Official',
  PETROLEUM_ENGINEER = 'Petroleum_Engineer',
  PHYSICIAN = 'Physician',
  POLICE_OFFICER = 'Police_officer',
  POLITICIAN = 'Politician',
  PSYCHOLOGIST = 'Psychologist',
  SCIENTIST = 'Scientist',
  SECRETARY = 'Secretary',
  SOFTWARE_DEVELOPER = 'Software_Developer',
  STATISTICIAN = 'Statistician',
  SURGEON = 'Surgeon',
  SURVEYOR = 'Surveyor',
  TECHNICAL_WRITER = 'Technical_writer',
  TECHNICIAN = 'Technician',
  TECHNOLOGY_SPECIALIST = 'Technology_specialist',
  WEB_DESIGNER = 'Web_designer',
}

export class JobCategory {
  categories: PROFESSION[]
  catalogName: string;
  maxItems: number

  constructor(categories: PROFESSION[], name: string, maxItems: number) {
    this.catalogName = name;
    this.categories = categories;
    this.maxItems = maxItems;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoMatchService {


  public professionCats: JobCategory[] = [];

  constructor() {
    const catList = [
      new JobCategory([
        PROFESSION.ANALYST,
        PROFESSION.COMPUTER_HARDWARE_ENGINEER,
        PROFESSION.SOFTWARE_DEVELOPER,
        PROFESSION.AIR_TRAFFIC_CONTROLLER,
        PROFESSION.CHEMICAL_ENGINEER,
        PROFESSION.CHEMICAL_ENGINEER,
        PROFESSION.FINANCIAL_ANALYST,
        PROFESSION.STATISTICIAN,
        PROFESSION.SECRETARY,
        PROFESSION.CONSULTANT,
        PROFESSION.CHARTERED_ACCOUNTANT,
        PROFESSION.HOTEL_MANAGER,
        PROFESSION.WEB_DESIGNER,
      ], 'office', 8),
      new JobCategory([
        PROFESSION.POLICE_OFFICER,
        PROFESSION.CIVIL_SERVANT,
      ], 'police', 1),
      new JobCategory([
        PROFESSION.PETROLEUM_ENGINEER,
        PROFESSION.TECHNICIAN,
        PROFESSION.SURVEYOR,
        PROFESSION.TECHNICAL_WRITER,
        PROFESSION.MECHANICAL_ENGINEER,
        PROFESSION.COMPUTER_OPERATOR,
        PROFESSION.TECHNOLOGY_SPECIALIST,
      ], 'builder', 4),
      new JobCategory([
        PROFESSION.BIOMEDICAL_ENGINEER,
        PROFESSION.SURGEON,
        PROFESSION.MICROBIOLOGIST,
        PROFESSION.DENTIST,
      ], 'medicine', 4),
      new JobCategory([
        PROFESSION.ARCHITECT,
        PROFESSION.ARTIST,
        PROFESSION.COMEDIAN,
        PROFESSION.DESIGNER,
        PROFESSION.FASHION_DESIGNER,
      ], 'art', 4),
      new JobCategory([
        PROFESSION.ARMY_OFFICER,
      ], 'army', 1),

    ]

    catList.forEach(el => this.professionCats.push(el))
  }

  public getPhoto(age: number, profession: string): string {
    // console.log(this.professionCats);
    let ageRange = null;
    if (age < 35) {
      ageRange = AGE_RANGE.YOUNG;
    } else if (age < 60) {
      ageRange = AGE_RANGE.MIDDLE;
    } else {
      ageRange = AGE_RANGE.OLD;
    }

    const catalog = this.getJobFolder(profession as PROFESSION)
    // console.log(catalog)
    // const index = this.randomIntFromInterval(1, 6)
    // console.log(index)
    return `assets/${ageRange}/${catalog}`;
  }

  public getJobFolder(profession: PROFESSION): string {
    let name = 'default'
    let itemMaxIndex = 4;
    this.professionCats.forEach((cat: JobCategory) => {
      cat.categories.forEach((prof: PROFESSION) => {
        if (JSON.stringify(prof) === JSON.stringify(profession)) {
          name = cat.catalogName
          itemMaxIndex = cat.maxItems;
        }
      })
    })
    const randIndex = this.randomIntFromInterval(1, itemMaxIndex)
    return `${name}/${itemMaxIndex}.jpg`
  }

  public randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
