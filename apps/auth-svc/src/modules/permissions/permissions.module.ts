import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Module({
  providers: [PermissionsService],
})
export class PermissionsModule {}
