import { Controller, Get } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {

    constructor(private latihanService : LatihanService){}

    /** Untuk pemanggilan starndar **/
    // @Get()
    // getLatihan() : string {
    //     return 'latihan';
    // }

    /** Untuk pemanggilan JSON **/
    @Get()
    getLatihan() {
        return this.latihanService.getLatihan();
    }

}
