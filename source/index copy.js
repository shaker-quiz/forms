import POST_checkin_admin from './fields/POST/checkin/admin.json' with { type: 'json' }
import POST_checkin_organizer from './fields/POST/checkin/organizer.json' with { type: 'json' }
import POST_checkin_Unknown from './fields/POST/checkin/Unknown.json' with { type: 'json' }
import POST_city_admin from './fields/POST/city/admin.json' with { type: 'json' }
import POST_game_admin from './fields/POST/game/admin.json' with { type: 'json' }
import POST_game_organizer from './fields/POST/game/organizer.json' with { type: 'json' }
import POST_registration_admin from './fields/POST/registration/admin.json' with { type: 'json' }
import POST_registration_organizer from './fields/POST/registration/organizer.json' with { type: 'json' }
import POST_registration_Unknown from './fields/POST/registration/Unknown.json' with { type: 'json' }
import POST_theme_admin from './fields/POST/theme/admin.json' with { type: 'json' }
import POST_user_admin from './fields/POST/user/admin.json' with { type: 'json' }
import POST_user_password_admin from './fields/POST/user/password/admin.json' with { type: 'json' }
import POST_user_role_admin from './fields/POST/user/role/admin.json' with { type: 'json' }
import POST_venue_admin from './fields/POST/venue/admin.json' with { type: 'json' }
import POST_venue_organizer from './fields/POST/venue/organizer.json' with { type: 'json' }
import PATCH_city_admin from './fields/PATCH/city/admin.json' with { type: 'json' }
import PATCH_city_organizer from './fields/PATCH/city/organizer.json' with { type: 'json' }
import PATCH_city_country_admin from './fields/PATCH/city/country/admin.json' with { type: 'json' }
import PATCH_city_country_organizer from './fields/PATCH/city/country/organizer.json' with { type: 'json' }
import PATCH_city_currency_admin from './fields/PATCH/city/currency/admin.json' with { type: 'json' }
import PATCH_city_currency_organizer from './fields/PATCH/city/currency/organizer.json' with { type: 'json' }
import PATCH_city_timezone_admin from './fields/PATCH/city/timezone/admin.json' with { type: 'json' }
import PATCH_city_timezone_organizer from './fields/PATCH/city/timezone/organizer.json' with { type: 'json' }
import PATCH_game_admin from './fields/PATCH/game/admin.json' with { type: 'json' }
import PATCH_game_organizer from './fields/PATCH/game/organizer.json' with { type: 'json' }
import PATCH_registration_admin from './fields/PATCH/registration/admin.json' with { type: 'json' }
import PATCH_registration_organizer from './fields/PATCH/registration/organizer.json' with { type: 'json' }
import PATCH_registration_Unknown from './fields/PATCH/registration/Unknown.json' with { type: 'json' }
import PATCH_theme_admin from './fields/PATCH/theme/admin.json' with { type: 'json' }
import PATCH_user_admin from './fields/PATCH/user/admin.json' with { type: 'json' }
import PATCH_user_password_admin from './fields/PATCH/user/password/admin.json' with { type: 'json' }
import PATCH_user_role_admin from './fields/PATCH/user/role/admin.json' with { type: 'json' }
import PATCH_venue_admin from './fields/PATCH/venue/admin.json' with { type: 'json' }
import PATCH_venue_organizer from './fields/PATCH/venue/organizer.json' with { type: 'json' }

export const Field = Object.freeze({  'POST/checkin/admin': 'POST/checkin/admin',   'POST/checkin/organizer': 'POST/checkin/organizer',   'POST/checkin/Unknown': 'POST/checkin/Unknown',   'POST/city/admin': 'POST/city/admin',   'POST/game/admin': 'POST/game/admin',   'POST/game/organizer': 'POST/game/organizer',   'POST/registration/admin': 'POST/registration/admin',   'POST/registration/organizer': 'POST/registration/organizer',   'POST/registration/Unknown': 'POST/registration/Unknown',   'POST/theme/admin': 'POST/theme/admin',   'POST/user/admin': 'POST/user/admin',   'POST/user/password/admin': 'POST/user/password/admin',   'POST/user/role/admin': 'POST/user/role/admin',   'POST/venue/admin': 'POST/venue/admin',   'POST/venue/organizer': 'POST/venue/organizer',   'PATCH/city/admin': 'PATCH/city/admin',   'PATCH/city/organizer': 'PATCH/city/organizer',   'PATCH/city/country/admin': 'PATCH/city/country/admin',   'PATCH/city/country/organizer': 'PATCH/city/country/organizer',   'PATCH/city/currency/admin': 'PATCH/city/currency/admin',   'PATCH/city/currency/organizer': 'PATCH/city/currency/organizer',   'PATCH/city/timezone/admin': 'PATCH/city/timezone/admin',   'PATCH/city/timezone/organizer': 'PATCH/city/timezone/organizer',   'PATCH/game/admin': 'PATCH/game/admin',   'PATCH/game/organizer': 'PATCH/game/organizer',   'PATCH/registration/admin': 'PATCH/registration/admin',   'PATCH/registration/organizer': 'PATCH/registration/organizer',   'PATCH/registration/Unknown': 'PATCH/registration/Unknown',   'PATCH/theme/admin': 'PATCH/theme/admin',   'PATCH/user/admin': 'PATCH/user/admin',   'PATCH/user/password/admin': 'PATCH/user/password/admin',   'PATCH/user/role/admin': 'PATCH/user/role/admin',   'PATCH/venue/admin': 'PATCH/venue/admin',   'PATCH/venue/organizer': 'PATCH/venue/organizer'})

export const Fields = Object.freeze(Object.values(Field))

export const inferField = Object.freeze(
  /** @returns {typeof Field[keyof typeof Field] | 'Unknown'} */
  x => Field[x] ?? 'Unknown',
)

export const FieldSchema = Object.freeze({  'POST/checkin/admin': POST_checkin_admin,   'POST/checkin/organizer': POST_checkin_organizer,   'POST/checkin/Unknown': POST_checkin_Unknown,   'POST/city/admin': POST_city_admin,   'POST/game/admin': POST_game_admin,   'POST/game/organizer': POST_game_organizer,   'POST/registration/admin': POST_registration_admin,   'POST/registration/organizer': POST_registration_organizer,   'POST/registration/Unknown': POST_registration_Unknown,   'POST/theme/admin': POST_theme_admin,   'POST/user/admin': POST_user_admin,   'POST/user/password/admin': POST_user_password_admin,   'POST/user/role/admin': POST_user_role_admin,   'POST/venue/admin': POST_venue_admin,   'POST/venue/organizer': POST_venue_organizer,   'PATCH/city/admin': PATCH_city_admin,   'PATCH/city/organizer': PATCH_city_organizer,   'PATCH/city/country/admin': PATCH_city_country_admin,   'PATCH/city/country/organizer': PATCH_city_country_organizer,   'PATCH/city/currency/admin': PATCH_city_currency_admin,   'PATCH/city/currency/organizer': PATCH_city_currency_organizer,   'PATCH/city/timezone/admin': PATCH_city_timezone_admin,   'PATCH/city/timezone/organizer': PATCH_city_timezone_organizer,   'PATCH/game/admin': PATCH_game_admin,   'PATCH/game/organizer': PATCH_game_organizer,   'PATCH/registration/admin': PATCH_registration_admin,   'PATCH/registration/organizer': PATCH_registration_organizer,   'PATCH/registration/Unknown': PATCH_registration_Unknown,   'PATCH/theme/admin': PATCH_theme_admin,   'PATCH/user/admin': PATCH_user_admin,   'PATCH/user/password/admin': PATCH_user_password_admin,   'PATCH/user/role/admin': PATCH_user_role_admin,   'PATCH/venue/admin': PATCH_venue_admin,   'PATCH/venue/organizer': PATCH_venue_organizer})

export const inferFieldSchema = Object.freeze(
  /** @returns {typeof FieldSchema[keyof typeof FieldSchema] | 'Unknown'} */
  x => FieldSchema[x] ?? 'Unknown',
)
