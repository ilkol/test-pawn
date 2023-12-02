/*
* VALLEY ROLE PLAY
* Основной мод valley RP by jekmant & il_kol
*/
#include <a_samp>
//  ---------------------       Настройка компилятора        --------------------
#pragma dynamic 13000           //Установление динамической памяти мода
#pragma warning disable 239     //Отключение предупреждения компилятора
#pragma warning disable 214		//Отключение предупреждения компилятора
//  ---------------------       Дефайны        --------------------
//#define NEW_YEAR 						2023  		//новый год | commit - off
stock KickPlayerFix(playerid) Kick(playerid);
#include <../gm/constants.pwn>

//  ---------------------       Доступа в моде        --------------------
#define FD1 "Dmitry_Mukhlisov"			//Разработчик
#define FD2 "Oleg_Alegro"				//Создатель
#define FD3 "Dmitry_Mukhlisov"			//
#define FD4 "Dmitry_Mukhlisov"			//Создатель
#define FD5 "Dmitry_Mukhlisov"			//
#define FD6 "Jack_Reddle"				//Разработчик
#define FD7 "ValleyAdmin"				//BOT
#define FD8 "Dmitry_Mukhlisov"			//
#define FD9 "Maxim_Lidman"				//Основатель
#define FD10 "James_Reddle"				//Вадя зачем-то

#define FULL_1 (!strcmp(PlayerInfo[playerid][pNames], FD1, true))
#define FULL_2 (!strcmp(PlayerInfo[playerid][pNames], FD2, true))
#define FULL_3 (!strcmp(PlayerInfo[playerid][pNames], FD3, true))
#define FULL_4 (!strcmp(PlayerInfo[playerid][pNames], FD4, true))
#define FULL_5 (!strcmp(PlayerInfo[playerid][pNames], FD5, true))
#define FULL_6 (!strcmp(PlayerInfo[playerid][pNames], FD6, true))
#define FULL_7 (!strcmp(PlayerInfo[playerid][pNames], FD7, true))
#define FULL_8 (!strcmp(PlayerInfo[playerid][pNames], FD8, true))
#define FULL_9 (!strcmp(PlayerInfo[playerid][pNames], FD9, true))
#define FULL_10 (!strcmp(PlayerInfo[playerid][pNames], FD10, true))
new ownerid = -1;

//  ---------------------       Основная информация        --------------------
#define ONE_PROJECT_NAME				"Valley"				//название проекта
#define PROJECT_NAME					"Valley RP"				//короткое название проекта
#define FULL_PROJECT_NAME				"Valley Role Play"		//полное название проекта
#define SITE_URL						"valley-rp.ru"			//ссылка на сайт проекта
#define FORUM_URL						"forum.valley-rp.ru"	//ссылка на форум проекта
#define VK_URL							"vk.com/vllrp"			//ссылка на группу вконтакте проекта
#define DISCORD_URL						"valley-rp.ru/discord"	//ссылка на вступление в дискорд канал проекта
#define TECH_SITE_URL					"dev.valley-rp.ru"		//ссылка на тех. сайт проекта (не трогать)
//  ---------------------       Сервера        --------------------
#define SERVER_01						0
#define SERVER_TEST						2
#define SERVER_01_NAME1					"•••Valley RP | 9lvl 50kk 10k (НУЖНЫ ЛИДЕРЫ)•••"
#define SERVER_01_NAME2					"•••Valley RP | 9lvl 50kk 10k | VOICE•••"
#define SERVER_TEST_NAME				"••• Valley RP TEST •••"
#define SERVER_01_IP					"62.122.215.58"
#define SERVER_TEST_IP					"77.220.171.68"
//  ---------------------       Создатели сервера        --------------------
#define CREATOR_NAME					"Jack_Reddle"
#define CREATOR_VK 						"vk.com/dimanded"
//  ---------------------       HostName/ServerIP        -------------------- 
new HostName[100];
new HostNameChange = 1;
new ServerIP[15];
//  ---------------------       Инклуды        -------------------- 
//#include <a_npc>
#include sampvoice
#include crashdetect
#include Pawn.RakNet
#include streamer
#include mxdate
#include a_mysql
#include sscanf2
#include dc_cmd
#include md5
#include timestamp
#include mailer
#include TOTP
#include colandreas
#include filemanager
#include chrono
#include nex-ac
#include mobile
#include setgravity
#include frobj
#include YSF
#include <progress>
#include <w_shot>
#include <profiler>
#include <pawnbots>

#include <../gm/db.pwn>	//базаы данных
#include <../gm/colors.pwn>//инклуд цветов
#include <../gm/main.pwn>
#include <..\gm\SendMessages/SendMessages.pwn>//Выводы текста игроку в чат с инфой/ошибкой/успешным сообщением
//глобальные строки. Если ты это читаешь и видишь эти строки - удаляй их нахер и создавай локальные переменные! 
new stringa		[2700];
//ну кроме этих, они ещё нужны, вроде...
new format_stringa [144];
new log_stringa[244];
//строчки
#include <../gm/logs.pwn>//логи
#include <../gm/functions.pwn>//основные функции
#include <../gm/3dTexts.pwn>			//3dtext'ы
#include <../gm/pickups.pwn>//pickup'ы
#include <../gm/obj.pwn>//объекты

new bool:Start[MAX_VEHICLES char];//зачем-то надо античиту...next-ac - лучший античит =_=
new bool:AlhambraDJ = true;//когда-нибудь перепишу

//вот от этого надо избавлятся! Че за глобальные переменные то. PVarString на что? Занял и удалил
new NameStatsName[MAX_PLAYERS][32];
new stringaName[MAX_PLAYERS][15];
//посты администрации
#include <../gm/selfi.pwn>				//система селфи
#include <../gm/dialogs.pwn>			//диалоги
#include <..\gm\gps.pwn>
#include <../gm/anim.pwn>				//анимации
#include <../gm/guns.pwn>				//оружие
#include <../gm/oldeconomy.pwn>			//старая экономика
#include <../gm/graffity.pwn>			//графиити, надо будет переписать когда-то
#include <../gm/driveExam.pwn>			//эээээээкзамен в аш...должен был быть
#include <../gm/informations.pwn>
#include <../gm/antisliv.pwn>			//антислив
#include <../gm/player/player.pwn>				//функции для игроков
#include <../gm/atmsystem.pwn>			//система банкоматов
#include <../gm/works/artifacts.pwn>	//артифакты
#include <..\gm\banksystem/banksystem.pwn>
#include <../gm/works/oilrigs.pwn>		//работа на нефтевышках
#include <../gm/works/collectors.pwn>	//работа инкасаторов
#include <../gm/works/works.pwn>		//работы
#include <../gm/accessories.pwn>		//аксессуары
#include <../gm/containers.pwn>			//Контейнеры
#include <../gm/licenses.pwn>			//Лицензии
#include <../gm/tuning.pwn>				//tuning
#include <../gm/games.pwn>				//mp
#include <../gm/bots.pwn>				//старо-новая система ботов
#include <../gm/oldquests.pwn>			//старые квесты
#include <../gm/quests.pwn>				//квесты
#include <..\gm\vehicles/vehicles.pwn>
#include <../gm/vehicles.pwn>			//машины
#include <..\gm/test.pwn>

#include <../gm/mobilesystem.pwn>		//система телефонов
#include <../gm/frac/fractions.pwn>		//фракции
#include <../gm/economy.pwn>			//экономика
#include <../gm/unofficialFractions/fractions.pwn>  //Неофициальные организации
#include <../gm/dmzone.pwn>				//DM-zone
#include <../gm/inventory.pwn>			//инвентарь
#include <..\gm\phone/phone.pwn>				//телефон
#include <../gm/frac/police.pwn>		//полиция
#include <../gm/family/family.pwn>		//семьи
#include <..\gm\houses\houses.pwn>		//дома
#include <..\gm\houses\objects.pwn>		//объекты для домов
#include <../gm/businesses/businesses.pwn>			//бизнесы
#include <../gm/topsystem.pwn>			//система топов
#include <../gm/donate/adminpaks.pwn>	//покупка админки
#include <..\gm\rentcars.pwn>
#if defined NEW_YEAR
	#include <../gm/newyear.pwn>
#endif
#include <..\gm\admin/admins.pwn>		//система администрирования
#include <..\gm\helpers/helpers.pwn>	//система хелперов
#include <../gm/voice.pwn>				//voice mode (sampvoice)
#include <../gm/TextDraws.pwn>			//textdraws
#include <../gm/radars.pwn>				//Радары скорости
#include <../gm/DynamicAreas.pwn>		//динамические арены
#include <../gm/recorder.pwn>			//магнитофоны
#include <../gm/binder.pwn>				//Биндер
#include <../gm/drugsmarks.pwn>			//Закладки
#include <..\gm\auth/auth.pwn>			//авторизация
#include <..\gm\passport.pwn>
#include <../gm/airdrops.pwn>			//Air Drops
#include <../gm/rewards.pwn>			//Ежедневные награды
#include <../gm/referalsystem.pwn>		//Реферальная система
#include <../gm/objects.pwn>			//объекты
#include <../gm/actors.pwn>				//NPC
#include <../gm/OnPlayerConnect.pwn>	//подключенние игрока

stock PlayerShowDialog(playerid, const func[], style, caption[], info[], button1[], button2[])
{
	if(PlayerInfo[playerid][pSpinStage] && GetPVarInt(playerid, #DialogSpinCarSlot) != 1) {a();}
	format(PlayerInfo[playerid][pDialogName], 64, "%s", func);
	PlayerInfo[playerid][pDialogID] = DIALOG_CALLBACK;
	PlayerInfo[playerid][pDialogStyle] = style;
	ShowPlayerDialog(playerid, DIALOG_CALLBACK, style, caption, info, button1, button2);
	return 1;
}
stock SPD(playerid, dialogid, style, caption[], info[], button1[], button2[])
{
	if(PlayerInfo[playerid][pSpinStage] && GetPVarInt(playerid, #DialogSpinCarSlot) != 1) return 0;
	PlayerInfo[playerid][pDialogName][0] = EOS;
	PlayerInfo[playerid][pDialogID] = dialogid;
	PlayerInfo[playerid][pDialogStyle] = style;
	ShowPlayerDialog(playerid, 5051, style, caption, info, button1, button2);
	return 1;
}
#if defined _ALS_ShowPlayerDialog
	#undef ShowPlayerDialog
#else
	#define _ALS_ShowPlayerDialog
#endif
#define ShowPlayerDialog SPD

#include <../gm/donate/main.pwn>
#include <../gm/OnDialogresponse.pwn>
#include <../gm/OnPlayerDisconnect.pwn>
stock OnPlayerBulletDeath(playerid, killerid, reason)
{
	if(GetPVarInt(playerid, "UpdateRacing")) KillTimer(GetPVarInt(playerid, "UpdateRacing")), DeletePVar(playerid, "UpdateRacing");
	if(GetPVarInt(playerid, "StartWanted")) KillTimer(GetPVarInt(playerid, "StartWanted")), DeletePVar(playerid, "StartWanted");
	if(GetPVarInt(playerid, "StartSleep")) KillTimer(GetPVarInt(playerid, "SleepTimer")), DeletePVar(playerid, "SleepTimer"), DeletePVar(playerid, "StartSleep");
	if(GetPVarInt(playerid, "RobBankTimer")) KillTimer(GetPVarInt(playerid, "RobBankTimer")), DeletePVar(playerid, "RobBankTimer"), BankRob_Status = false;
	if(killerid == INVALID_PLAYER_ID) SendDeadAdm(killerid,playerid,reason);
	else if(!PlayerInfo[playerid][pKilled]) OnPlayerKilled(killerid, playerid, reason);
	for(new i=0; i<sizeof(speed_PTD[]); i++) PlayerTextDrawHide(playerid, PlayerText:speed_PTD[playerid][i]);
	for(new i=0; i<sizeof(speed_TD[]); i++) TextDrawHideForPlayer(playerid, speed_TD[IsPlayerMobile(playerid)][i]);
	if(pTemp[playerid][pOnExam]) FailExam(playerid, 4);
	if(GetPVarInt(playerid, "BikersRobFuel"))
	{
		DeletePVar(playerid, "BikersRobFuel");
		SendClientMessage(playerid, COLOR_RED, "Вы потеряли канистру с бензином!");
	}
	if(GetPVarInt(playerid, #type_efir) == 1 && epfireuse)
	{
		SendClientMessage(playerid,COLOR_WHITE, "Вы вышли из прямого эфира");
		DeletePVar(playerid, #type_efir);
		epfireuse=false;
		SendClientMessageToAll(COLOR_SERVER, "[СМИ]: Прямой эфир закончен.");
	}
	RaceExit(playerid, 3);
	ResetPlayerWeapons(playerid);
	SetPVarInt(playerid,"K_Times",GetPVarInt(playerid,"K_Times") + 1);
	if(GetPVarInt(playerid,"K_Times") > 1) {
		printf("кик из-за какого-то таймера. Крч при спавне");
		return KickEx(playerid);
	}
	if(GetPVarInt(playerid,"adchecking_fix"))
	{
		gAdvert[GetPVarInt(playerid,"adchecking_fix")-1][adCheking]=false;
		DeletePVar(playerid,"adchecking_fix");
	}
	pTemp[playerid][pSpawn] = false;
	DeletePVar(walk_goto_me[playerid]-1,"walk_goto_me_player");
	walk_goto_me[playerid]=0;
	if(AlhambraDJ == true && AlhambraDJID == playerid) AlhambraDJ = false, AlhambraDJID = INVALID_PLAYER_ID;
	SetPlayerHealth(playerid, 0.0);
	DeletePVar(playerid, "udar");
	for(new i; i < 5; i ++)
	{
		if(!IsPlayerAttachedObjectSlotUsed(playerid, i)) continue;
		RemovePlayerAttachedObject(playerid, i);
	}
	DeletePVar(playerid, "usemats");
	DisablePlayerCheckpoint(playerid);
	DeletePVar(playerid, "Keys");
	new caller = GetPVarInt(playerid, "Mobile");
	if(caller != 999)
	{
		SendClientMessage(caller,  COLOR_GRAD2, "Связь оборвалась...");
		SetPVarInt(playerid,"calling",false);
		SetPVarInt(caller,"calling",false);
		SetPVarInt(caller, "Mobile", 999);
		SetPVarInt(playerid, "Mobile", 999);
	}
	if(GetPVarInt(playerid, "is_boat") - 1 != 0)
	{
		DestroyVehicle(GetPVarInt(playerid, "is_boat") - 1);
		DeletePVar(playerid, "is_boat");
	}
	if(PlayerInfo[playerid][pAvia] != -1) destroyPlayerAvia(playerid);
	DisablePlayerCheckpoint(playerid);
	if(PlayerInfo[playerid][pHospital] != 1 && PlayerInfo[playerid][pZoneid] == -1 && PlayerInfo[playerid][pZoneweap] == -1)
	{
		if(IsPlayerInBand(playerid) || isPlayerInPolice(playerid) || isPlayerInArmy(playerid) || isPlayerInHospital(playerid) || isPlayerInMafia(playerid) || isPlayerInHitmans(playerid) || PlayerInfo[playerid][pPrisonTime]>0 || PlayerInfo_MP_START{playerid} || isPlayerInBikers(playerid)) return 1;
		PlayerInfo[playerid][pHospital] = 1;
		UpdatePlayerData(playerid, "pHospital", 1);
		pTemp[playerid][pInHospital] = true;
	}
	TextDrawHideForPlayer(playerid,Boxmenu0);
	TextDrawHideForPlayer(playerid,Boxmenu1);
	TextDrawHideForPlayer(playerid,Boxmenu2);
	TextDrawHideForPlayer(playerid,Boxmenu3);
	TextDrawHideForPlayer(playerid,ButtonLeft);
	TextDrawHideForPlayer(playerid,ButtonRight);
	TextDrawHideForPlayer(playerid,ButtonCancel);
	TextDrawHideForPlayer(playerid,ButtonSelect);
	TextDrawHideForPlayer(playerid,boxaccept);
	TextDrawHideForPlayer(playerid,boxcancel);
	PlayerTextDrawHide(playerid,InfoText[playerid]);
	return 1;
}

#include <../gm/OnPlayerSpawn.pwn>
#include <../gm/OnPlayerEnterCheckpoint.pwn>
#include <../gm/OnPlayerPickUpDynamicPickup.pwn>
#include <../gm/OnPlayerSelectDynamicObject.pwn>
#include <../gm/OnPlayerStateChange.pwn>
#include <../gm/CheckBanList.pwn>
#include <../gm/OnPlayerRequestClass.pwn>
#include <../gm/fresh.pwn>
#include <../gm/chat.pwn>
#include <..\gm\publics/OnGameModeInit.pwn>
#include <../gm/payday.pwn>
#include <../gm/OnPlayerUpdate.pwn>
#include <../gm/OnPlayerKeyStateChange.pwn>
#include <../gm/OnPlayerGiveDamage.pwn>
#include <../gm/OnPlayerKilled.pwn>
#include <../gm/publics/OnDynamicObjectMove.pwn>
#include <../gm/publics/OnGameModeExit.pwn>
publics: PlayerKick(playerid)
{
	if(!IsPlayerConnected(playerid)) return 1;
	if(PlayerInfo[playerid][pAvia] != -1) destroyPlayerAvia(playerid);
	printf("Server kick %d",playerid);
	KickPlayerFix(playerid);
	return 1;
}
#include <../gm/OnVehicleSpawn.pwn>
#include <../gm/vk.pwn>
#include <../gm/whitelist.pwn>
#include <../gm/OnCommand.pwn>
#include <../gm/commands.pwn>
#include <../gm/job.pwn>
CMD:neon(playerid)
{
	if(!IsPlayerInAnyVehicle(playerid)) return SCN(playerid, "Вы не в транспорте!");
	new veh = GetPlayerVehicleID(playerid);
	if(NyNahyi(veh)) return SCN(playerid, "На этот транспорт нельзя использовать неон!");
	if(getPlayerAdminLevel(playerid) >= 4 ||
	(veh == caridhouse[playerid][0] && PlayerInfo[playerid][pNeon][0]) || (veh == caridhouse[playerid][1] && PlayerInfo[playerid][pNeon][1]) || (veh == caridhouse[playerid][2] && PlayerInfo[playerid][pNeon][2]))
	{
		return SPLC(playerid, #OnDialogNeonSelect, !"Выбор неона", !"{FF0606}Красный неон\n{0CD7E7}Голубой неон\n{089401}Зелёный неон\n{FFDE24}Жёлтый неон\n{FF00EF}Розовый неон\n{FAFAFA}Белый неон\n{FFFFFF}Удалить неон", btnSelect, btnCanc);
	}
	return SCN(playerid, !"Вам не доступна эта команда!");
}
DialogList:OnDialogNeonSelect() {
	if(!response) return 1;
	if(listitem < 0 || listitem > 6) return 1;
	new veh = GetPlayerVehicleID(playerid);
	if(veh <= 0) return SCN(playerid, !"Вы не сидите в машине!");
	DestroyDynamicObject(VehInfo[veh-1][vNeon1]),VehInfo[veh-1][vNeon1]=0;
	DestroyDynamicObject(VehInfo[veh-1][vNeon2]),VehInfo[veh-1][vNeon2]=0;
	if(listitem == 6) return SCG(playerid, !"Ты удалил неон!");
	VehInfo[veh-1][vNeon1] = CreateDynamicObject(18647+listitem,0,0,0,0,0,0);
	VehInfo[veh-1][vNeon2] = CreateDynamicObject(18647+listitem,0,0,0,0,0,0);
	AttachDynamicObjectToVehicle(VehInfo[veh-1][vNeon1], veh, -0.8, 0.0, -0.70, 0.0, 0.0, 0.0);
	AttachDynamicObjectToVehicle(VehInfo[veh-1][vNeon2], veh, 0.8, 0.0, -0.70, 0.0, 0.0, 0.0);
	return SCG(playerid, !"Ты удачно установил неон!");
}
#include <../gm/premium.pwn>
CMD:tuning(playerid, params[])
{
	if(!IsPlayerConnected(playerid)) return SCN(playerid, "Вы не авторизовались!");
	if(!IsPlayerInRangeOfPoint(playerid, 10.0, 813.40, -558.06, 16.32)) return SCN(playerid, "Вы должны находится возле автомастерской!");
	if(!IsPlayerInAnyVehicle(playerid)) return SCN(playerid, "Вы должны находится за рулем т/с!");
	new veh = GetPlayerVehicleID(playerid);
	if(IsABicycle(veh)) return SCN(playerid, !"Этот транспорт нельзя улучшить!");
	if(!isPlayerOwnVeh(veh, playerid, 0)) return SCN(playerid, "Нужно находится за рулем своего т/с");
	SelectTextDraw(playerid,0x708090FF);
	for(new i = 0; i != 14; i++) TextDrawShowForPlayer(playerid, Tuning[i]);
	for(new i = 0; i != 16; i++) PlayerTextDrawShow(playerid, Tune[i]),PlayerTextDrawSetString(playerid, Tune[i], "_");
	PlayerTextDrawSetString(playerid, Tune[0], "Repair Engine");
	PlayerTextDrawSetString(playerid, Tune[1], "Repair vehicle");
	SetPVarInt(playerid, "TuneType",4),SetPVarInt(playerid, "TuninG",true);
	for(new i = 0; i < 3; i++)
		if(caridhouse[playerid][i] == veh) SetPVarInt(playerid, "carid_1", i + 1);
	return 1;
}
#include <../gm/promo.pwn>
#include <../gm/changenick.pwn>
stock Deleted(playerid)
{
	for(new i; i < sizeof(speed_PTD[]); i++) PlayerTextDrawDestroy(playerid, PlayerText:speed_PTD[playerid][i]);
	for(new i; i < sizeof(capture_TD); i++) TextDrawHideForPlayer(playerid, capture_TD[i]);
	for(new i; i < sizeof(capture_PTD[]); i++) PlayerTextDrawDestroy(playerid, capture_PTD[playerid][i]);
	for(new i; i < sizeof(Bizwar[]); i++) PlayerTextDrawDestroy(playerid, Bizwar[playerid][i]);
	for(new i; i < sizeof(PTD_AS[]); i++) PlayerTextDrawDestroy(playerid, PTD_AS[playerid][i]);
	for(new i; i < sizeof(CounterSText); i++) TextDrawHideForPlayer(playerid, CounterSText[i]);
	PlayerTextDrawDestroy(playerid, GrabText[playerid]);
	DeletePVar(playerid,"PlayerInfo_MP");
	PlayerInfo_MP_START{playerid} = false;
}
stock SendDeadAdm(killerid,playerid,reason)
{
	tforeach(i)
	{
		if(!IsPlayerConnected(i)) continue;
		if((getAdminLvl(i) > 0) && (GetPVarInt(i, #WatchKills))) SendDeathMessageToPlayer(i, killerid, playerid, reason);
	}
	return 1;
}
stock OnPlayerAmmoChange(playerid, newammo, oldammo)
{
	if(newammo < oldammo)
	{
		GivePVarInt(playerid, "Shot", 1);
		switch(GetPlayerWeapon(playerid))
		{
		case 24: if(GetPVarInt(playerid, "Shot") >= 25 && PlayerInfo[playerid][pSkills][1] < 100) PlayerInfo[playerid][pSkills][1]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pDesertEagle", PlayerInfo[playerid][pSkills][1]);
		case 23: if(GetPVarInt(playerid, "Shot") >= 25 && PlayerInfo[playerid][pSkills][0] < 100) PlayerInfo[playerid][pSkills][0]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pSDPistol", PlayerInfo[playerid][pSkills][0]);
		case 25: if(GetPVarInt(playerid, "Shot") >= 50 && PlayerInfo[playerid][pSkills][2] < 100) PlayerInfo[playerid][pSkills][2]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pShotGun", PlayerInfo[playerid][pSkills][2]);
		case 29: if(GetPVarInt(playerid, "Shot") >= 50 && PlayerInfo[playerid][pSkills][3] < 100) PlayerInfo[playerid][pSkills][3]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pMP5", PlayerInfo[playerid][pSkills][3]);
		case 30: if(GetPVarInt(playerid, "Shot") >= 50 && PlayerInfo[playerid][pSkills][4] < 100) PlayerInfo[playerid][pSkills][4]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pAK47", PlayerInfo[playerid][pSkills][4]);
		case 31: if(GetPVarInt(playerid, "Shot") >= 50 && PlayerInfo[playerid][pSkills][5] < 100) PlayerInfo[playerid][pSkills][5]++, DeletePVar(playerid, "Shot"), UpdatePlayerData(playerid, "pM4", PlayerInfo[playerid][pSkills][5]);
		}
	}
	return 1;
}