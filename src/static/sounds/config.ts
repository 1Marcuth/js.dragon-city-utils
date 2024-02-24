const musicNames = ["107_audio_nw_maintheme", "150_dc_music_labyrinth_island_2015", "151_dc_music_labyrinth_battle_2015", "152_dc_christmas_music_2015", "166_dc_sun_island_music", "168_dc_moon_island_music", "196_dc_ninja_island_main", "197_dc_ninja_island_battle", "200_anniversary_island_music", "201_pirates_island_music", "202_pirates_island_battle_music", "203_journey_island_battle_music", "205_journey_island_part_02", "206_journey_island_part_03", "207_earth_travel_island_music", "207_heroic_race_music", "208_earth_travel_battle_music", "209_dc_jungle_island_music", "212_dc_music_atlantis_island", "213_dc_music_atlantis_battle", "214_dc_music_crazylab_island", "215_dc_music_crazylab_battle", "216_dc_summer_island_music", "217_dc_music_olympic_island", "218_dc_music_olympic_battle", "222_dc_amusument_park_island_music", "223_dc_amusument_park_battle_music", "224_dc_frankenstein_island", "225_dc_frankenstein_battle", "226_dc_dc_music_forest_battle", "227_dc_dc_music_forest_white", "232_dc_heroic_races_ocean_music", "233_dc_vampiric_island_music", "234_dc_vampiric_island_battle_music", "235_dc_heroic_races_winter_music", "236_dc_winter_tower_island_music", "247_dc_heroic_races_dark_realm_music", "248_dc_fairytale_island_music", "249_dc_fairytale_battle_music", "250_dc_heroic_races_elders_forest", "251_dc_stvalentine_island_music", "252_dc_stvalentine_battle_music", "257_dc_apocaypse_island_music", "264_dc_beautybeast_island_music", "265_dc_beautybeast_battle_music", "266_dc_boneyard_music", "267_dc_dc2056_island_music", "268_dc_dc2056_battle_music", "269_dc_heroic_races_spring", "270_dc_happyinferno_island_music", "271_dc_happyinferno_battle_music", "275_dc_music_got_island", "276_dc_music_got_island_battle", "281_dc_heroic_races_demonic_dojo", "283_dc_videogame_island_music", "284_dc_videogame_battle_music", "285_dc_summer_island_music", "286_dc_heroic_races_summer", "288_dc_music_dungeon_island", "289_dc_music_dungeon_battle", "291_dc_music_ragnarok_island", "292_dc_heroic_races_oni_forest", "293_dc_pvp_battle_theme_01", "296_dc_heroic_races_crystal", "297_dc_music_comic_island", "298_dc_music_comic_island_battle", "299_dc_heroic_races_factory", "300_dc_music_shadow_island", "301_dc_music_shadow_island_battle", "302_dc_heroic_races_galactic", "303_dc_heroic_races_frozen_lake", "304_dc_music_dragon_justice_island", "311_dc_music_illusion_island", "312_dc_music_illusion_island_battle", "363_dc_farm_island_music", "364_dc_farm_battle_music", "365_dc_burglar_island_music", "391_dc_music_blizzard_island", "392_dc_heroic_races_vortex", "393_dc_fire_and_ice_island_music_b", "394_dc_fire_and_ice_battle_music_b", "402_dc_music_snow_island", "403_dc_heroic_races_heaven", "406_dc_turbo_island_music", "407_dc_turbo_battle_music", "412_dc_music_oni_island", "413_dc_music_oni_island_battle", "414_dc_heroic_races_black_magic", "416_dc_watchtower_island_music", "418_dc_magic_castle_island_music", "419_dc_magic_castle_island_battle_music", "420_dc_neo_tokyo_island_music", "421_dc_heroic_races_pixel_art", "438_dc_dragon_wars_island", "439_dc_dragon_wars_island_battle", "440_dc_heroic_races_metagame", "443_dc_music_pyramid_island", "444_dc_pyramid_battle_music", "449_dc_team_races_atlas", "450_dc_music_ruined_tower_island", "451_dc_fae_island_music", "452_dc_fae_castle_music", "456_dc_team_races_yggdrassil", "457_dc_music_moon_elevator_tower_island", "459_dc_heroic_races_luxury_cruise", "460_dc_wasteland_rescue_island", "461_dc_wasteland_rescue_battle", "462_dc_funfair_island_music", "463_dc_music_funfair_battle_music", "476_dc_puzzle_island_music", "478_dc_chocolate_tower_island_music", "482_dc_heroic_races_dreamfields", "484_dc_hallomuertos_island_music", "485_dc_hallomuertos_battle_music", "486_dc_lost_temple_alliance_race_music", "487_dc_catacombs_island_music", "490_dc_divination_island_music", "491_dc_divination_battle_music", "492_dc_seasons_island_music", "493_dc_seasons_island_battle_music", "494_dc_weather_machine_island_music", "495_dc_heroic_races_christmas_party", "496_dc_color_splash_island_music", "497_dc_color_splash_battle_music", "498_dc_battleground_menu_music", "499_dc_battleground_battle_music_1", "501_dc_heroic_races_superheroes", "502_dc_galactic_mini_island_music", "503_dc_galactic_mini_battle_music", "504_dc_chinese_new_year_island_music", "505_dc_chinese_new_year_battle_music", "506_dc_valentine_puzzle_island_music", "507_dc_liberty_island_music", "508_dc_abyssal_island_music", "509_dc_abyssal_island_battle_music", "510_dc_carnaval_island_music", "514_dc_heroic_races_true_superheroes", "515_dc_sushi_puzzle_island_music", "517_dc_castle_town_island_music", "518_dc_castle_town_battle_music", "519_dc_heroic_races_eternity", "520_dc_chibi_puzzle_island_music", "521_dc_easter_fog_island_music", "522_dc_fast_food_island_music", "523_dc_fast_food_battle_music", "524_dc_cosmic_puzzle", "525_dc_heroic_races_the_fallen_music", "527_dc_tank_blitz_island_music", "528_dc_tank_blitz_battle_music", "529_dc_pet_island_music", "530_dc_pet_island_battle_music", "531_dc_party_planning_island", "532_dc_party_planning_island_battle", "533_dc_heroic_races_positivity", "536_dc_runner_island_menu_music", "537_dc_runner_island_level_music_01", "540_dc_search_puzzle_island_music", "541_dc_toy_tower_island_music", "549_dc_martial_arts_island_music", "557_dc_music_festival_island_music", "558_dc_music_festival_island_battle_music", "561_dc_heroic_races_pirates", "562_dc_fantasy_island_music", "563_dc_fantasy_island_battle_music", "564_dc_safari_puzzle_island_music", "566_dc_heroic_races_community", "567_dc_wild_animals_island_music", "568_dc_wild_animals_island_battle_music", "569_dc_mafia_island_music", "570_dc_heroic_races_halloween", "571_dc_seven_wonders_island_music", "572_dc_seven_wonders_island_battle_music", "577_dc_puzzle_knights_island_music", "578_dc_knights_paladins_island_music", "579_dc_knights_paladins_island_battle_music", "580_dc_heroic_races_cybernetic", "581_dc_aquatic_runner_island_menu_music", "582_dc_aquatic_runner_island_level_music", "583_dc_winter_runner_island_menu_music", "584_dc_winter_runner_island_level_music", "586_dc_xmas_19_island_music", "587_dc_xmas_19_island_battle_music", "588_dc_winter_island_music", "589_dc_winter_island_battle_music", "590_dc_heroic_races_frozen_cave", "591_dc_abyssal_fog_island_music", "600_dc_heroic_races_virago", "608_dc_music_maze_easter_map_loop", "609_dc_music_maze_easter_battle_loop", "610_dc_music_maze_gods_island_loop", "611_dc_music_puzzle_gods_island_loop", "612_dc_music_battle_gods_island_loop", "613_dc_music_maze_5_de_mayo_loop", "614_dc_music_battle_5_de_mayo_loop", "617_dc_music_battle_pass_mysterious_loop", "MAIN1.MP3", "MAIN2.MP3", "MAIN3.MP3", "New Text Document.txt", "dc_music_celestial_island_2015", "dc_music_garden_battle", "dc_music_garden_island", "dc_music_got_island_2015", "dc_music_halloween_battle_2015", "dc_music_halloween_island_2015", "dc_music_hollywood_island_battle", "dc_music_idol_island", "dc_music_ufo_island_2015", "dungeon_gridisland_background_music", "dungeon_gridisland_battle_music", "songcolisseum_b_2", "songcolisseum_c_1"]

function getMusicNameByTag(tag: string): string | undefined {
    const tagInLowerCase = tag.toLowerCase()
    const musicnameKey1 = `dc_${tagInLowerCase}_island`
    const musicNameKey2 = `_${tagInLowerCase}`

    for (const musicName of musicNames) {
        if (musicName.includes(musicnameKey1) || musicName.includes(musicNameKey2)) {
            return musicName
        }
    }
}

export { getMusicNameByTag, musicNames }