import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('Index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'get index data', description: 'index page' })
  @ApiResponse({ status: 200, description: 'Hello World', type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
