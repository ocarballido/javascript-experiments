<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'luditawebdb');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'myoscarbal');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '56aF@hjPerv67#');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'tIf,^};1n~JnPhK1U^D-Y|2klUQPh6=p2z|~5*-QLZqr3kw(+g/J|S]u[%~`dK$U');
define('SECURE_AUTH_KEY',  'kMcrF^yP<#,x&Y+ JM0Rm-Nzaw2VmX1q|re|F5&RJ.xY]|*KO*qP@M+fSHMp62]+');
define('LOGGED_IN_KEY',    'hHrC.~g.nV&.3Idc>Ib|/^#y003.M#}}k~$!YEu|:o/.qrJ+o|AnD`L}=,f.)W^f');
define('NONCE_KEY',        '&sck-5~oy|bmd[b5J|!)$Mh5g~-P.%(hj%-|di&~PlzaHU !j@}^PJ|[%-@ddM{u');
define('AUTH_SALT',        'ByM/6u|3A?fz:8Jo;KV-2n-LN~8UMr{3lb.iltz,mutvm9 eUm{Fg_^jUr^tJG;?');
define('SECURE_AUTH_SALT', 'DT8U3vlWxQgH+jjMu}i^/#Blyj8xG;Z-B}^.W#Fx$5,QJ`x(.^)Ocl<`8^+djK{2');
define('LOGGED_IN_SALT',   '2U-ZPDT0rgE](`@,<iw-#78@DP?8E{epRq_B#gdxPdl/s?#1IQI=L!K%@e1z757U');
define('NONCE_SALT',       'Opz6l7P>n*hCh@/W[Ups+TO;hw(I81QMy97reJ,7l:XReE.||r|S2tr,cd;@^@Vl');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';

/**
 * Idioma de WordPress.
 *
 * Cambia lo siguiente para tener WordPress en tu idioma. El correspondiente archivo MO
 * del lenguaje elegido debe encontrarse en wp-content/languages.
 * Por ejemplo, instala ca_ES.mo copiándolo a wp-content/languages y define WPLANG como 'ca_ES'
 * para traducir WordPress al catalán.
 */
define('WPLANG', 'es_ES');

/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

define( 'WP_AUTO_UPDATE_CORE', false );

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

