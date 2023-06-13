import { ApiProperty } from '@nestjs/swagger';

export class UserRequest {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;
}

export class UserResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role_id: string;

  @ApiProperty()
  session_id: string;

  @ApiProperty()
  refresh_tokens_id: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}
