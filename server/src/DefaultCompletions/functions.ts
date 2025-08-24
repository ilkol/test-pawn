import { Locale } from "../Locale";

interface Arg
{
	name: string;
	string: string;
	doc?: string;
}

interface FunctionCompl {
	name: string;
	description: string;
	detail?: string;
	args?: Arg[];
}

export const defaultFunctionsCompletions: FunctionCompl[] = [
	{
		name: "print",
		description: Locale.t("Print text to console."),
		detail: Locale.t("Always returns `0`.\n\rAttempt to output text longer than 511 characters may crash the server."),
		args: [
			{
				name: "string",
				string: "const string[]",
				doc: Locale.t("String to output.")
			}
		]
	},
	{
		name: "printf",
		description: Locale.t("Formats a using the data and prints the result to the console."),
		detail: Locale.t("Always returns `0`.\n\rAttempt to output text longer than 511 characters may crash the server.") + "\n\r" + Locale.t("The function does not support packed strings, including as data."),
		args: [
			{
				name: "string",
				string: "const string[]",
				doc: Locale.t("Format string.")
			},
			{
				name: "...",
				string: "{Float,_}:...",
				doc: Locale.t("Data for substitution.")
			}
		]
	},
	{
		name: "format",
		description: Locale.t("Formats a string by converting data to a string and substituting it for special characters."),
		detail: Locale.t("Always returns `1`.\n\rThe maximum length of the final string is 4095 characters.\n\rThe function does not support packed strings, including as data."),
		args: [
			{
				name: "output",
				string: "const output[]",
				doc: Locale.t("Array to write formatted string to.")
			},
			{
				name: "len",
				string: "len",
				doc: Locale.t("Size of array `output`")
			},
			{
				name: "format",
				string: "const format[]",
				doc: Locale.t("Format string.")
			},
			{
				name: "...",
				string: "{Float,_}:...",
				doc: Locale.t("Data for substitution.")
			}
		]
	},
	{
		name: "SendClientMessage",
		description: Locale.t("Send message to player in chat"),
		args: [
			{
				string: "playerid",
				name: "playerid",
				doc: Locale.t("ID of the player to whom the message will be sent")
			},
			{
				string: "color",
				name: "color",
				doc: Locale.t("HEX message color")
			},
			{
				string: "const message[]",
				name: "message",
				doc: Locale.t("Message text")
			}
		]
	},
	{
		name: "SendClientMessageToAll",
		description: Locale.t("Send message to all players in chat"),
		args: [
			{
				string: "color",
				name: "color",
				doc: Locale.t("HEX message color")
			},
			{
				string: "const message[]",
				name: "message",
				doc: Locale.t("Message text")
			}
		]
	},
	{
		name: "SendPlayerMessageToPlayer",
		description: Locale.t("Sends a message to a player in chat on behalf of another player."),
		args: [
			{
				string: "playerid",
				name: "playerid",
				doc: Locale.t("ID of the player to whom the message will be sent")
			},
			{
				string: "sender",
				name: "sender",
				doc: Locale.t("ID of the player on whose behalf the message is being sent")
			},
			{
				string: "const message[]",
				name: "message",
				doc: Locale.t("Message text")
			}
		]
	},
	{
		name: "SendPlayerMessageToAll",
		description: Locale.t("Sends a message to all players in the server chat on behalf of another player."),
		args: [
			{
				string: "sender",
				name: "sender",
				doc: Locale.t("ID of the player on whose behalf the message is being sent")
			},
			{
				string: "const message[]",
				name: "message",
				doc: Locale.t("Message text")
			}
		]
	},
	{
		name: "SendDeathMessage",
		description: Locale.t("Sends a message about the death of a player."),
		args: [
			{
				string: "killer",
				name: "killer",
				doc: Locale.t("ID player who killed")
			},
			{
				string: "killee",
				name: "killee",
				doc: Locale.t("ID player who was killed")
			},
			{
				string: "weapon",
				name: "weapon",
				doc: Locale.t("Death reason ID")
			}
		]
	},
	{
		name: "SendDeathMessageToPlayer",
		description: Locale.t("Sends a player death message to a specific player."),
		args: [
			{
				string: "playerid",
				name: "playerid",
				doc: Locale.t("ID of the player to whom the message will be sent")
			},
			{
				string: "killer",
				name: "killer",
				doc: Locale.t("ID player who killed")
			},
			{
				string: "killee",
				name: "killee",
				doc: Locale.t("ID player who was killed")
			},
			{
				string: "weapon",
				name: "weapon",
				doc: Locale.t("Death reason ID")
			}
		]
	},
	{
		name: "GameTextForAll",
		description: Locale.t("Send game text for all players"),
		args: [
			{
				string: "const string[]",
				name: "string",
				doc: Locale.t("Message")
			},
			{
				string: "time",
				name: "time",
				doc: Locale.t("Number of seconds before hiding")
			},
			{
				string: "style",
				name: "style",
				doc: Locale.t("Message style ID")
			}
		]
	},
	{
		name: "GameTextForPlayer",
		description: Locale.t("Send game text for the player"),
		args: [
			{
				string: "playerid",
				name: "playerid",
				doc: Locale.t("ID of the player to whom the message will be sent")
			},
			{
				string: "const string[]",
				name: "string",
				doc: Locale.t("Message")
			},
			{
				string: "time",
				name: "time",
				doc: Locale.t("Number of seconds before hiding")
			},
			{
				string: "style",
				name: "style",
				doc: Locale.t("Message style ID")
			}
		]
	},
	
	{
		name: "SetTimer",
		description: Locale.t("Sets a 'timer' to call a function after some time"),
		args: [
			{
				string: "funcname[]",
				name: "funcname",
				doc: Locale.t("The name of the function that will be called when the timer expires")
			},
			{
				string: "interval",
				name: "interval",
				doc: Locale.t("Number of milliseconds until timer expires")
			},
			{
				string: "repeating",
				name: "repeating",
				doc: Locale.t("True if the timer should repeat")
			}
		]
	},
];


// native SetTimer(funcname[], interval, repeating);
// native SetTimerEx(funcname[], interval, repeating, const format[], {Float,_}:...);
// native KillTimer(timerid);
// native GetTickCount();
// native GetMaxPlayers();
// native CallRemoteFunction(const function[], const format[], {Float,_}:...);
// native CallLocalFunction(const function[], const format[], {Float,_}:...);
// native Float:VectorSize(Float:x, Float:y, Float:z);
// native Float:asin(Float:value);
// native Float:acos(Float:value);
// native Float:atan(Float:value);
// native Float:atan2(Float:x, Float:y);
// native GetPlayerPoolSize();
// native GetVehiclePoolSize();
// native GetActorPoolSize();

// // Hash
// native SHA256_PassHash(password[], salt[], ret_hash[], ret_hash_len); // SHA256 for password hashing

// // Server wide persistent variable system (SVars)
// native SetSVarInt(varname[], int_value);
// native GetSVarInt(varname[]);
// native SetSVarString(varname[], string_value[]);
// native GetSVarString(varname[], string_return[], len);
// native SetSVarFloat(varname[], Float:float_value);
// native Float:GetSVarFloat(varname[]);
// native DeleteSVar(varname[]);


// native GetSVarsUpperIndex();
// native GetSVarNameAtIndex(index, ret_varname[], ret_len);
// native GetSVarType(varname[]);

// // Game
// native SetGameModeText(const string[]);
// native SetTeamCount(count);
// native AddPlayerClass(modelid, Float:spawn_x, Float:spawn_y, Float:spawn_z, Float:z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
// native AddPlayerClassEx(teamid, modelid, Float:spawn_x, Float:spawn_y, Float:spawn_z, Float:z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
// native AddStaticVehicle(modelid, Float:spawn_x, Float:spawn_y, Float:spawn_z, Float:z_angle, color1, color2);
// native AddStaticVehicleEx(modelid, Float:spawn_x, Float:spawn_y, Float:spawn_z, Float:z_angle, color1, color2, respawn_delay, addsiren=0);
// native AddStaticPickup(model, type, Float:X, Float:Y, Float:Z, virtualworld = 0);
// native CreatePickup(model, type, Float:X, Float:Y, Float:Z, virtualworld = 0);
// native DestroyPickup(pickup);
// native ShowNameTags(show);
// native ShowPlayerMarkers(mode);
// native GameModeExit();
// native SetWorldTime(hour);
// native GetWeaponName(weaponid, const weapon[], len);
// native EnableTirePopping(enable); // deprecated function
// native EnableVehicleFriendlyFire();
// native AllowInteriorWeapons(allow);
// native SetWeather(weatherid);
// native SetGravity(Float:gravity);
// native AllowAdminTeleport(allow);
// native SetDeathDropAmount(amount);
// native CreateExplosion(Float:X, Float:Y, Float:Z, type, Float:Radius);
// native EnableZoneNames(enable);
// native UsePlayerPedAnims();		// Will cause the players to use CJ running/walking animations
// native DisableInteriorEnterExits();  // will disable all interior enter/exits in the game.
// native SetNameTagDrawDistance(Float:distance); // Distance at which nametags will start rendering on the client.
// native DisableNameTagLOS(); // Disables the nametag Line-Of-Sight checking
// native LimitGlobalChatRadius(Float:chat_radius);
// native LimitPlayerMarkerRadius(Float:marker_radius);

// // Npc
// native ConnectNPC(name[], script[]);
// native IsPlayerNPC(playerid);

// // Admin
// native IsPlayerAdmin(playerid);
// native Kick(playerid);
// native Ban(playerid);
// native BanEx(playerid, const reason[]);
// native SendRconCommand(command[]);
// native GetPlayerNetworkStats(playerid, retstr[], retstr_size);
// native GetNetworkStats(retstr[], retstr_size);
// native GetPlayerVersion(playerid, const version[], len); // Returns the SA-MP client revision as reported by the player
// native BlockIpAddress(ip_address[], timems);
// native UnBlockIpAddress(ip_address[]);

// // Deprecated:
// native GetServerVarAsString(const varname[], buffer[], len);
// native GetServerVarAsInt(const varname[]);
// native GetServerVarAsBool(const varname[]);
// // These are the same 3 functions as above although they avoid the name ambiguity/conflict with the SVar system.
// native GetConsoleVarAsString(const varname[], buffer[], len);
// native GetConsoleVarAsInt(const varname[]);
// native GetConsoleVarAsBool(const varname[]);

// // Extended admin network stats
// native GetServerTickRate();
// native NetStats_GetConnectedTime(playerid);
// native NetStats_MessagesReceived(playerid);
// native NetStats_BytesReceived(playerid);
// native NetStats_MessagesSent(playerid);
// native NetStats_BytesSent(playerid);
// native NetStats_MessagesRecvPerSecond(playerid);
// native Float:NetStats_PacketLossPercent(playerid);
// native NetStats_ConnectionStatus(playerid);
// native NetStats_GetIpPort(playerid, ip_port[], ip_port_len);

// // Menu
// native Menu:CreateMenu(const title[], columns, Float:x, Float:y, Float:col1width, Float:col2width = 0.0);
// native DestroyMenu(Menu:menuid);
// native AddMenuItem(Menu:menuid, column, const menutext[]);
// native SetMenuColumnHeader(Menu:menuid, column, const columnheader[]);
// native ShowMenuForPlayer(Menu:menuid, playerid);
// native HideMenuForPlayer(Menu:menuid, playerid);
// native IsValidMenu(Menu:menuid);
// native DisableMenu(Menu:menuid);
// native DisableMenuRow(Menu:menuid, row);
// native Menu:GetPlayerMenu(playerid);


// native Text:TextDrawCreate(Float:x, Float:y, text[]);
// native TextDrawDestroy(Text:text);
// native TextDrawLetterSize(Text:text, Float:x, Float:y);
// native TextDrawTextSize(Text:text, Float:x, Float:y);
// native TextDrawAlignment(Text:text, alignment);
// native TextDrawColor(Text:text, color);
// native TextDrawUseBox(Text:text, use);
// native TextDrawBoxColor(Text:text, color);
// native TextDrawSetShadow(Text:text, size);
// native TextDrawSetOutline(Text:text, size);
// native TextDrawBackgroundColor(Text:text, color);
// native TextDrawFont(Text:text, font);
// native TextDrawSetProportional(Text:text, set);
// native TextDrawSetSelectable(Text:text, set);
// native TextDrawShowForPlayer(playerid, Text:text);
// native TextDrawHideForPlayer(playerid, Text:text);
// native TextDrawShowForAll(Text:text);
// native TextDrawHideForAll(Text:text);
// native TextDrawSetString(Text:text, string[]);
// native TextDrawSetPreviewModel(Text:text, modelindex);
// native TextDrawSetPreviewRot(Text:text, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fZoom = 1.0);
// native TextDrawSetPreviewVehCol(Text:text, color1, color2);

// // Gang Zones
// native GangZoneCreate(Float:minx, Float:miny, Float:maxx, Float:maxy);
// native GangZoneDestroy(zone);
// native GangZoneShowForPlayer(playerid, zone, color);
// native GangZoneShowForAll(zone, color);
// native GangZoneHideForPlayer(playerid, zone);
// native GangZoneHideForAll(zone);
// native GangZoneFlashForPlayer(playerid, zone, flashcolor);
// native GangZoneFlashForAll(zone, flashcolor);
// native GangZoneStopFlashForPlayer(playerid, zone);
// native GangZoneStopFlashForAll(zone);

// // Global 3D Text Labels
// native Text3D:Create3DTextLabel(text[], color, Float:X, Float:Y, Float:Z, Float:DrawDistance, virtualworld, testLOS=0);
// native Delete3DTextLabel(Text3D:id);
// native Attach3DTextLabelToPlayer(Text3D:id, playerid, Float:OffsetX, Float:OffsetY, Float:OffsetZ);
// native Attach3DTextLabelToVehicle(Text3D:id, vehicleid, Float:OffsetX, Float:OffsetY, Float:OffsetZ);
// native Update3DTextLabelText(Text3D:id, color, text[]);

// native PlayerText3D:CreatePlayer3DTextLabel(playerid, text[], color, Float:X, Float:Y, Float:Z, Float:DrawDistance, attachedplayer=INVALID_PLAYER_ID, attachedvehicle=INVALID_VEHICLE_ID, testLOS=0);
// native DeletePlayer3DTextLabel(playerid, PlayerText3D:id);
// native UpdatePlayer3DTextLabelText(playerid, PlayerText3D:id, color, text[]);

// native ShowPlayerDialog(playerid, dialogid, style, caption[], info[], button1[], button2[]);


