import { Designation } from "./Designation";

export class WorkExperienceData{
        companyName: string = '';
        place: string = '';
        workType: string = '';
        totalWorkingYears: string = '';
        companyLogo: string = '';
        designations: Array<Designation> = [];
        rolesAndResponsibilities: Array<string> = [];
}