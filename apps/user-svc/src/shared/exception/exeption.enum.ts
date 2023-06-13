export enum CODE_ERROR_RESPONSE {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
  PHONE_OR_PASSWORD_NOT_MATCH = 'PHONE_OR_PASSWORD_NOT_MATCH',
  EMAIL_OR_PASSWORD_NOT_MATCH = 'EMAIL_OR_PASSWORD_NOT_MATCH',
  EMAIL_NOT_VERIFY = 'EMAIL_NOT_VERIFY',
  PHONE_NOT_VERIFY = 'PHONE_NOT_VERIFY',
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  USER_EXISTS = 'USER_EXISTS',
  PHONE_EXISTS = 'PHONE_EXISTS',
  PHONE_NUMBER_INVALID = 'PHONE_NUMBER_INVALID',
  OTP_NOT_FOUND = 'OTP_NOT_FOUND',
  OTP_NOT_MATCH = 'OTP_NOT_MATCH',
  OTP_EXPIRED = 'OTP_EXPIRED',
  EMAIL_OR_PHONE_NOT_VERIFY = 'EMAIL_OR_PHONE_NOT_VERIFY',
  LIMIT_BACKGROUND_IMAGE = 'LIMIT_BACKGROUND_IMAGE',
  NO_PERMISSION_NEWS = 'NO_PERMISSION_NEWS',
  NO_PERMISSION_BLOCK = 'NO_PERMISSION_BLOCK',
  NO_PERMISSION_DELETE_NEWS = 'NO_PERMISSION_DELETE_NEWS',
  NO_PERMISSION_UPDATE_NEWS = 'NO_PERMISSION_UPDATE_NEWS',
  NO_PERMISSION = 'NO_PERMISSION',
  NO_ROOT_ADMIN_PERMISSION = 'NO_ROOT_ADMIN_PERMISSION',
  NO_AGENCY_PERMISSION = 'NO_AGENCY_PERMISSION',
  PROFILE_NOT_VALID = 'PROFILE_NOT_VALID',
  KYC_NOT_VALID = 'KYC_NOT_VALID',
  POST_NOT_FOUND = 'POST_NOT_FOUND',
  POST_NOT_ENOUGH_REACTION = 'POST_NOT_ENOUGH_REACTION',
  COMMENT_NOT_FOUND = 'COMMENT_NOT_FOUND',
  MEDIA_NOT_FOUND = 'MEDIA_NOT_FOUND',
  MEDIA_NOT_VALID = 'MEDIA_NOT_VALID',
  P_DONE_CANNOT_UPDATE_KYC = 'P_DONE_CANNOT_UPDATE_KYC',
  NOT_P_DONE = 'NOT_P_DONE',
  NOT_JA = 'NOT_JA',
  NOT_VSHOP = 'NOT_VSHOP',
  PROTECTOR_NOT_JA = 'PROTECTOR_NOT_JA',
  GENERATE_P_DONE_ID_FAIL = 'GENERATE_P_DONE_ID_FAIL',
  ONLY_JOIN_ONE_TEAM = 'ONLY_JOIN_ONE_TEAM',
  LIVE_NOT_FOUND = 'LIVE_NOT_FOUND',
  INVALID_LIVE_DATA = 'INVALID_LIVE_DATA',
  LIVE_OWNER_REQUIRED = 'LIVE_OWNER_REQUIRED',
  LIVE_MODERATOR_REQUIRED = 'LIVE_MODERATOR_REQUIRED',
  LIVE_SUPERVISOR_REQUIRED = 'LIVE_SUPERVISOR_REQUIRED',
  LIVE_TOP_CREATED = 'LIVE_TOP_CREATED',
  MISSING_LIVE_MODERATOR_INVITE = 'MISSING_LIVE_MODERATOR_INVITE',
  LIVE_CONTEST_NOT_FOUND = 'LIVE_CONTEST_NOT_FOUND',
  LIVE_CONTEST_COACH_NOT_REGISTRABLE = 'LIVE_CONTEST_COACH_NOT_REGISTRABLE',
  LIVE_CONTEST_NOT_VOTEABLE = 'LIVE_CONTEST_NOT_VOTEABLE',
  LIVE_TYPE_CONFLICT_WITH_GIFT = 'LIVE_TYPE_CONFLICT_WITH_GIFT',
  CAN_NOT_CHARGE_POINT_TO_YOURSELF = 'CAN_NOT_CHARGE_POINT_TO_YOURSELF',
  NOT_MODERATOR = 'USER_NOT_MODERATOR',
  TEAM_NOT_FOUND = 'TEAM_NOT_FOUND',
  TEAM_EXISTS = 'TEAM_EXISTS',
  NOT_BOSS_TEAM = 'NOT_BOSS_TEAM',
  GROUP_NOT_FOUND = 'GROUP_NOT_FOUND',
  NOT_BOSS_GROUP = 'NOT_BOSS_GROUP',
  GROUP_EXISTS = 'GROUP_EXISTS',
  BOSS_ONLY_ONE_COMMUNITY = 'BOSS_ONLY_ONE_COMMUNITY',
  CANNOT_GENERATE_CODE = 'CANNOT_GENERATE_CODE',
  CATEGORY_EXISTED = 'CATEGORY_EXISTED',
  CATEGORY_NOT_FOUND = 'CATEGORY_NOT_FOUND',
  PROTECTOR_NOT_FOUND = 'PROTECTOR_NOT_FOUND',
  PROTECTOR_INVALID = 'PROTECTOR_INVALID',
  PROTECTOR_EMAIL_OR_PHONE_INVALID = 'PROTECTOR_EMAIL_OR_PHONE_INVALID',
  PROTECTOR_IDENTITY_INVALID = 'PROTECTOR_IDENTITY_INVALID',
  ACCOUNT_ALREADY_EMAIL = 'ACCOUNT_ALREADY_EMAIL',
  ACCOUNT_ALREADY_PHONE = 'ACCOUNT_ALREADY_PHONE',
  CANNOT_DELETE_DELIVERY_DEFAULT = 'CANNOT_DELETE_DELIVERY_DEFAULT',
  NOTIFICATION_NOT_FOUND = 'NOTIFICATION_NOT_FOUND',
  CONSERVATION_NOT_FOUND = 'CONSERVATION_NOT_FOUND',
  TOO_MANY_REQUEST = 'TOO_MANY_REQUEST',
  NOT_ENOUGH_POINT = 'NOT_ENOUGH_POINT',
  NOT_ENOUGH_AGE = 'NOT_ENOUGH_AGE',
  NOT_ENOUGH_12_AGE = 'NOT_ENOUGH_12_AGE',
  NOT_ENOUGH_15_AGE = 'NOT_ENOUGH_15_AGE',
  NOT_ENOUGH_18_AGE = 'NOT_ENOUGH_18_AGE',
  NOT_ENOUGH_MEDIAS_FESTIVAL = 'NOT_ENOUGH_MEDIAS_FESTIVAL',
  GIFT_NOT_FOUND = 'GIFT_NOT_FOUND',

  TRANSACTION_NOT_FOUND = 'TRANSACTION_NOT_FOUND',
  YOU_WERE_JA = 'YOU_WERE_JA',
  YOU_NEED_TO_BE_OVER_15_YEARS_OLD = 'YOU_NEED_TO_BE_OVER_15_YEARS_OLD',
  YOU_NEED_TO_UPDATE_PDONE = 'YOU_NEED_TO_UPDATE_PDONE',
  SETTING_VALUE_INVALID = 'SETTING_VALUE_INVALID',
  YOU_COULD_JOIN_TEAM_AFTER_6_MONTH = 'YOU_COULD_JOIN_TEAM_AFTER_6_MONTH',
  YOU_COULD_JOIN_TEAM_AFTER_3_MONTH = 'YOU_COULD_JOIN_TEAM_AFTER_3_MONTH',
  DATA_HAS_DUPLICATE = 'DATA_HAS_DUPLICATE',
  ID_MEDIA_NOT_FOUND = 'ID_MEDIA_NOT_FOUND',
  FAVORITE_TYPE_INVALID = 'FAVORITE_TYPE_INVALID',
  BANK_INFO_REQUIRED = 'BANK_INFO_REQUIRED',
  BANK_ACCOUNT_NOT_FOUND = 'BANK_ACCOUNT_NOT_FOUND',
  NOT_ENOUGH_BALANCE = 'NOT_ENOUGH_BALANCE',
  SIGNATURE_NOT_MATCH = 'SIGNATURE_NOT_MATCH',
  ORDER_EXISTED = 'ORDER_EXISTED',
  WAREHOUSE_EXISTED = 'WAREHOUSE_EXISTED',
  FESTIVAL_USER_NOT_FOUND = 'FESTIVAL_USER_NOT_FOUND',
  NOT_REGISTER_FESTIVAL = 'NOT_REGISTER_FESTIVAL',
  EXISTS_FESTIVAL_EXAM = 'EXISTS_FESTIVAL_EXAM',
  VSHOP_ACCOUNT_EXISTED = 'VSHOP_ACCOUNT_EXISTED',
  CANNOT_REGISTER_VSHOP = 'CANNOT_REGISTER_VSHOP',
  NO_ACCOUNTANT_PERMISSION = 'NO_ACCOUNTANT_PERMISSION',
  IS_BOSS_TEAM = 'IS_BOSS_TEAM',
  BUYER_NOT_FOUND = 'BUYER_NOT_FOUND',
  CURRENT_PASSWORD_NOT_MATCH = 'CURRENT_PASSWORD_NOT_MATCH',
  DUPLICATE_ACCOUNT_BANK = 'DUPLICATE_ACCOUNT_BANK',
  UNABLE_TO_SET_SELF_REMINICENT_NAME = 'UNABLE_TO_SET_SELF_REMINICENT_NAME',
  ESTIMATE_VND_AND_COIN_NOT_MATCH = 'ESTIMATE_VND_AND_COIN_NOT_MATCH',

  JUDGE_GROUP_EXISTED = 'JUDGE_GROUP_EXISTED',
  JUDGE_GROUP_NOT_FOUND = 'JUDGE_GROUP_NOT_FOUND',
  JUDGE_GROUP_PERMISSION_NOT_FOUND = 'JUDGE_GROUP_PERMISSION_NOT_FOUND',

  COACH_EXISTED = 'COACH_EXISTED',
  COACH_NOT_FOUND = 'COACH_NOT_FOUND',
  REGISTERED_COACH = 'REGISTERED_COACH',
  CANDIDATE_ALREADY_REGISTERED = 'CANDIDATE_ALREADY_REGISTERED',
  COACH_REGISTRATION_NOT_FOUND = 'COACH_REGISTRATION_NOT_FOUND',
  COACH_REQUIRED = 'COACH_REQUIRED',

  REGISTER_FESTIVAL_MUSIC_EXISTS = 'REGISTER_FESTIVAL_MUSIC_EXISTS',
  REGISTER_FESTIVAL_MUSIC_LTE_3 = 'REGISTER_FESTIVAL_MUSIC_LTE_3',
  DATA_INVALID = 'DATA_INVALID',
  ONE_MUSIC_ONLY_REGISTER_THREE_EXAM = 'ONE_MUSIC_ONLY_REGISTER_THREE_EXAM',
  PROTECTOR_GTE_18_OLD = 'PROTECTOR_GTE_18_OLD',

  CANNOT_CREATE_FROM_V_SHOP = 'CANNOT_CREATE_FROM_V_SHOP',
  CANNOT_UPDATE_FROM_V_SHOP = 'CANNOT_UPDATE_FROM_V_SHOP',
  CANNOT_CONFIRM_FROM_V_STORE = 'CANNOT_CONFIRM_FROM_V_STORE',
  CANNOT_UPDATE_STATUS_WAIT_ADMIN_FROM_V_STORE = 'CANNOT_UPDATE_STATUS_WAIT_ADMIN_FROM_V_STORE',
  PASSWORD_NOT_MATCH = 'PASSWORD_NOT_MATCH',

  YOU_HAVE_BEEN_BLOCKED = 'YOU_HAVE_BEEN_BLOCKED',
  YOU_BLOCKED_THIS_PERSON = 'YOU_BLOCKED_THIS_PERSON',
  CONTESTS_INVALID = 'CONTESTS_INVALID',
  BOSS_NOT_FOUND = 'BOSS_NOT_FOUND',
  NOT_JOIN = 'NOT_JOIN',
  NOT_BOSS = 'NOT_BOSS',
  YOU_HAVE_JOIN_GROUP = 'YOU_HAVE_JOIN_GROUP',
  GROUP_LTE_10_BOSS = 'GROUP_LTE_10_BOSS',

  CONTESTS_NOT_FOUND = 'CONTESTS_NOT_FOUND',
  CONTESTS_IS_OVER = 'CONTESTS_IS_OVER',
  CONTESTS_IS_START_ALREADY = 'CONTESTS_IS_START_ALREADY',

  COIN_CONTEST_EXISTED = 'COIN_CONTEST_EXISTED',
  COIN_CONTEST_NOT_ENOUGH = 'COIN_CONTEST_NOT_ENOUGH',
  COIN_CONTEST_IS_STOPPED = 'COIN_CONTEST_IS_STOPPED',

  USER_RATE_EXISTED = 'USER_RATE_EXISTED',
  USER_RATE_NOT_FOUND = 'USER_RATE_NOT_FOUND',

  NOT_FOUND_TIME_TO_SUBMISSION = 'NOT_FOUND_TIME_TO_SUBMISSION',
  NOT_WITHIN_THE_SUBMISSION_TIME = 'NOT_WITHIN_THE_SUBMISSION_TIME',

  AGENCY_NOT_FOUND = 'AGENCY_NOT_FOUND',
}