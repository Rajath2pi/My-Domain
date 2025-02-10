
import fs from 'fs';
import path from 'path';

export default class StaticDataService {
    async request(url: string) {
        try {
            const filePath = path.resolve(url); // Specify the path to your text file
            if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                return await JSON.parse(fileContent);
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}