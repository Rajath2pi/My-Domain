
import { Profile } from '@/app/onepageportfolio/portfolio/components/portfolio/banner';
import fetStaticData from '../apicalls/getStaticData'


class StaticDataController{
    constructor(){

    }

    async fetchStaticData(url : string):Promise<any>{
        try{
            const data : Profile = await fetStaticData(url);
            if(data)
                return {statusCode: 200, data : data, statusMessage: 'Successfully retrieved'};
            else
             return {statusCode: 402, data : {}, statusMessage: 'Data not found'}
        }
        catch(error: any){
            return {statusCode: 500, data : {}, statusMessage: 'Something went wrong'}
        }
    }
}

export const staticDataController = new StaticDataController();