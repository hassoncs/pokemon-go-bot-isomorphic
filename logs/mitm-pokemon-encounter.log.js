[+] Virtual endpoint listening on 8082
  [!] -> ENDPOINT USAGE: configure 'custom endpoint' in pokemon-go-xposed
  [+] Proxy listening on 8081
  [!] -> PROXY USAGE: install http://<host>:8082/ca.crt as a trusted certificate
  5:33:53 PM [Request] GetPlayer {
  "player_locale": {
    "country": "US",
      "language": "en"
  },
  "$unknownFields": []
}
5:33:53 PM [Request] CheckChallenge {}
5:33:53 PM [Request] GetPlayer {
  "player_locale": {
    "country": "US",
      "language": "en"
  },
  "$unknownFields": []
}
5:33:53 PM [Request] CheckChallenge {}
5:33:53 PM [Response] GetPlayer {
  "success": true,
    "player_data": {
    "creation_timestamp_ms": "1471916410996",
      "username": "VantaDark6",
      "tutorial_state": [
      "LEGAL_SCREEN",
      "AVATAR_SELECTION",
      "POKEMON_CAPTURE",
      "NAME_SELECTION",
      "FIRST_TIME_EXPERIENCE_COMPLETE"
    ],
      "avatar": {
      "hair": 3,
        "pants": 1,
        "eyes": 3,
        "backpack": 2
    },
    "max_pokemon_storage": 250,
      "max_item_storage": 350,
      "daily_bonus": {},
    "equipped_badge": {},
    "contact_settings": {},
    "currencies": [
      {
        "name": "POKECOIN"
      },
      {
        "name": "STARDUST",
        "amount": 32878
      }
    ],
      "remaining_codename_claims": 1,
      "buddy_pokemon": {}
  },
  "$unknownFields": []
}
5:33:53 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:54 PM [Request] DownloadRemoteConfigVersion {
  "platform": "ANDROID",
    "app_version": 3500,
    "$unknownFields": []
}
5:33:54 PM [Request] CheckChallenge {}
5:33:54 PM [Request] GetHatchedEggs {}
5:33:54 PM [Request] GetInventory {}
5:33:54 PM [Request] CheckAwardedBadges {}
5:33:54 PM [Request] DownloadSettings {}
5:33:55 PM [Request] DownloadRemoteConfigVersion {
  "platform": "ANDROID",
    "app_version": 3500,
    "$unknownFields": []
}
5:33:55 PM [Request] CheckChallenge {}
5:33:55 PM [Request] GetHatchedEggs {}
5:33:55 PM [Request] GetInventory {}
5:33:55 PM [Request] CheckAwardedBadges {}
5:33:55 PM [Request] DownloadSettings {}
5:33:55 PM [Response] DownloadRemoteConfigVersion {
  "result": "SUCCESS",
    "item_templates_timestamp_ms": "1471916269862",
    "asset_digest_timestamp_ms": "1467338276561000",
    "$unknownFields": []
}
5:33:55 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:55 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:33:55 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "new_timestamp_ms": "1472257846656",
      "inventory_items": [
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2209653496479458664",
            "pokemon_id": "PIDGEY",
            "cp": 107,
            "stamina": 29,
            "stamina_max": 29,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.28748151659965515,
            "weight_kg": 1.7191052436828613,
            "individual_attack": 4,
            "individual_defense": 6,
            "individual_stamina": 5,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169679830"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "DRATINI",
            "times_encountered": 5,
            "times_captured": 5
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14736305767930232536",
            "pokemon_id": "PIKACHU",
            "cp": 215,
            "stamina": 32,
            "stamina_max": 32,
            "move_1": "THUNDER_SHOCK_FAST",
            "move_2": "DISCHARGE",
            "height_m": 0.37809547781944275,
            "weight_kg": 3.6120102405548096,
            "individual_attack": 11,
            "individual_defense": 15,
            "individual_stamina": 11,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950020307288064",
            "creation_time_ms": "1472165010369",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "6319436268367233521",
            "pokemon_id": "DRATINI",
            "cp": 72,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "DRAGON_BREATH_FAST",
            "move_2": "WRAP",
            "height_m": 1.7213727235794067,
            "weight_kg": 3.2657885551452637,
            "individual_attack": 15,
            "individual_defense": 14,
            "individual_stamina": 14,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472080876523"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257846600",
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9150660910760306657",
            "pokemon_id": "TENTACOOL",
            "cp": 276,
            "stamina": 40,
            "stamina_max": 40,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.884637176990509,
            "weight_kg": 47.82735824584961,
            "individual_attack": 15,
            "individual_defense": 13,
            "individual_stamina": 11,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950023157317632",
            "creation_time_ms": "1472257846600",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "388290874888967768",
            "pokemon_id": "CLEFAIRY",
            "cp": 217,
            "stamina": 53,
            "stamina_max": 53,
            "move_1": "ZEN_HEADBUTT_FAST",
            "move_2": "DISARMING_VOICE",
            "height_m": 0.46108508110046387,
            "weight_kg": 4.6536054611206055,
            "individual_attack": 7,
            "individual_defense": 13,
            "individual_stamina": 14,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167564510"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7842743879792240212",
            "pokemon_id": "PARAS",
            "cp": 108,
            "stamina": 22,
            "stamina_max": 22,
            "move_1": "BUG_BITE_FAST",
            "move_2": "SEED_BOMB",
            "height_m": 0.25537121295928955,
            "weight_kg": 4.294092178344727,
            "individual_attack": 11,
            "individual_stamina": 8,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168092231"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15368768781727669453",
            "pokemon_id": "BELLSPROUT",
            "cp": 47,
            "stamina": 19,
            "stamina_max": 19,
            "move_1": "ACID_FAST",
            "move_2": "POWER_WHIP",
            "height_m": 0.7778793573379517,
            "weight_kg": 4.540270805358887,
            "individual_attack": 11,
            "individual_defense": 12,
            "individual_stamina": 15,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950024111521792",
            "creation_time_ms": "1472084514524",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_MAGIKARP",
            "candy": 162
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8042755994828642265",
            "pokemon_id": "GOLBAT",
            "cp": 549,
            "stamina": 66,
            "stamina_max": 66,
            "move_1": "BITE_FAST",
            "move_2": "POISON_FANG",
            "height_m": 1.6901830434799194,
            "weight_kg": 68.06587219238281,
            "individual_attack": 9,
            "individual_defense": 9,
            "individual_stamina": 1,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170389678"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10387511529571852145",
            "pokemon_id": "SPEAROW",
            "cp": 25,
            "stamina": 13,
            "stamina_max": 13,
            "move_1": "PECK_FAST",
            "move_2": "DRILL_PECK",
            "height_m": 0.3102978467941284,
            "weight_kg": 2.4198131561279297,
            "individual_attack": 4,
            "individual_defense": 12,
            "individual_stamina": 4,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167420193"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "208516407066776533",
            "pokemon_id": "NIDORAN_FEMALE",
            "cp": 34,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "POISON_STING_FAST",
            "move_2": "POISON_FANG",
            "height_m": 0.40366828441619873,
            "weight_kg": 7.045607566833496,
            "individual_attack": 5,
            "individual_defense": 9,
            "individual_stamina": 15,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166596691"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1673374642311469942",
            "pokemon_id": "TANGELA",
            "cp": 172,
            "stamina": 36,
            "stamina_max": 36,
            "move_1": "VINE_WHIP_FAST",
            "move_2": "SOLAR_BEAM",
            "height_m": 0.7502548098564148,
            "weight_kg": 26.33064079284668,
            "individual_attack": 13,
            "individual_defense": 3,
            "individual_stamina": 14,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472164164068"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1238947966509280918",
            "pokemon_id": "ZUBAT",
            "cp": 46,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "BITE_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.5308092832565308,
            "weight_kg": 3.1440577507019043,
            "individual_attack": 13,
            "individual_defense": 13,
            "individual_stamina": 15,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950027980767232",
            "creation_time_ms": "1472086580623",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2568443327734339014",
            "pokemon_id": "STARYU",
            "cp": 212,
            "stamina": 25,
            "stamina_max": 25,
            "move_1": "WATER_GUN_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 1.0006951093673706,
            "weight_kg": 57.37929916381836,
            "individual_attack": 14,
            "individual_defense": 6,
            "individual_stamina": 4,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163333387"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_DRATINI",
            "candy": 17
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257846600",
        "inventory_item_data": {
          "egg_incubators": {
            "egg_incubator": [
              {
                "id": "EggIncubatorProto-7310226248463706446",
                "item_id": "ITEM_INCUBATOR_BASIC_UNLIMITED",
                "incubator_type": "INCUBATOR_DISTANCE"
              }
            ]
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3193289361456535289",
            "pokemon_id": "PARAS",
            "cp": 274,
            "stamina": 34,
            "stamina_max": 34,
            "move_1": "BUG_BITE_FAST",
            "move_2": "SEED_BOMB",
            "height_m": 0.30691632628440857,
            "weight_kg": 5.44816255569458,
            "individual_attack": 10,
            "individual_defense": 6,
            "individual_stamina": 5,
            "cp_multiplier": 0.4627983868122101,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168397678"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11511869497720336060",
            "pokemon_id": "WEEDLE",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.30216944217681885,
            "weight_kg": 3.489625930786133,
            "individual_attack": 1,
            "individual_defense": 13,
            "individual_stamina": 2,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167454939"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11405601713747021112",
            "pokemon_id": "GOLDUCK",
            "cp": 283,
            "stamina": 46,
            "stamina_max": 46,
            "move_1": "CONFUSION_FAST",
            "move_2": "PSYCHIC",
            "height_m": 2.4249982833862305,
            "weight_kg": 175.7268524169922,
            "individual_attack": 3,
            "individual_defense": 7,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169644939"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "456416962184192939",
            "pokemon_id": "TENTACRUEL",
            "cp": 332,
            "stamina": 54,
            "stamina_max": 54,
            "move_1": "POISON_JAB_FAST",
            "move_2": "HYDRO_PUMP",
            "height_m": 1.6296979188919067,
            "weight_kg": 50.00275421142578,
            "individual_attack": 7,
            "individual_defense": 1,
            "individual_stamina": 9,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083756367"
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_INCUBATOR_BASIC_UNLIMITED",
            "count": 1,
            "unseen": true
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "EEVEE",
            "times_encountered": 11,
            "times_captured": 11
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11767386494643160175",
            "pokemon_id": "PIDGEY",
            "cp": 143,
            "stamina": 33,
            "stamina_max": 33,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "TWISTER",
            "height_m": 0.3073352575302124,
            "weight_kg": 1.8934589624404907,
            "individual_attack": 3,
            "individual_defense": 14,
            "individual_stamina": 3,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472086966714"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17639187363112649194",
            "pokemon_id": "CLEFAIRY",
            "cp": 171,
            "stamina": 45,
            "stamina_max": 45,
            "move_1": "POUND_FAST",
            "move_2": "MOONBLAST",
            "height_m": 0.7038120627403259,
            "weight_kg": 10.89664363861084,
            "individual_attack": 7,
            "individual_defense": 5,
            "individual_stamina": 1,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084460186"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8749096128660158606",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950020307288064",
            "creation_time_ms": "1472167345655"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1239525750230634372",
            "pokemon_id": "PARAS",
            "cp": 300,
            "stamina": 37,
            "stamina_max": 37,
            "move_1": "SCRATCH_FAST",
            "move_2": "CROSS_POISON",
            "height_m": 0.30397459864616394,
            "weight_kg": 5.298880577087402,
            "individual_attack": 11,
            "individual_defense": 3,
            "individual_stamina": 7,
            "cp_multiplier": 0.48168495297431946,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169700790"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9836087930911890805",
            "pokemon_id": "PARAS",
            "cp": 113,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "SCRATCH_FAST",
            "move_2": "X_SCISSOR",
            "height_m": 0.31447044014930725,
            "weight_kg": 6.0534186363220215,
            "individual_attack": 10,
            "individual_defense": 8,
            "individual_stamina": 11,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168662313"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14681988895724594383",
            "pokemon_id": "TENTACOOL",
            "cp": 112,
            "stamina": 27,
            "stamina_max": 27,
            "move_1": "POISON_STING_FAST",
            "move_2": "WRAP",
            "height_m": 0.8501936793327332,
            "weight_kg": 44.425777435302734,
            "individual_attack": 6,
            "individual_defense": 14,
            "individual_stamina": 15,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084044116"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2301909479902473248",
            "pokemon_id": "TENTACOOL",
            "cp": 255,
            "stamina": 41,
            "stamina_max": 41,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.9389392733573914,
            "weight_kg": 53.78997039794922,
            "individual_attack": 5,
            "individual_defense": 10,
            "individual_stamina": 14,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165077094"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10823636875826033145",
            "pokemon_id": "MEOWTH",
            "cp": 51,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "SCRATCH_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.3752334415912628,
            "weight_kg": 3.807032346725464,
            "individual_attack": 12,
            "individual_defense": 3,
            "individual_stamina": 15,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083359248"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16826584630729121114",
            "pokemon_id": "CATERPIE",
            "cp": 25,
            "stamina": 21,
            "stamina_max": 21,
            "move_1": "TACKLE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.3117425739765167,
            "weight_kg": 3.131774663925171,
            "individual_defense": 12,
            "individual_stamina": 11,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170257445"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "CHARMANDER",
            "times_encountered": 2,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_INCUBATOR_BASIC"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1394829603825470715",
            "pokemon_id": "PARAS",
            "cp": 135,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "BUG_BITE_FAST",
            "move_2": "SEED_BOMB",
            "height_m": 0.2742665410041809,
            "weight_kg": 3.5569612979888916,
            "individual_attack": 13,
            "individual_defense": 11,
            "individual_stamina": 2,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472086555577"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11626831292081391884",
            "pokemon_id": "SPEAROW",
            "cp": 161,
            "stamina": 35,
            "stamina_max": 35,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "TWISTER",
            "height_m": 0.31727778911590576,
            "weight_kg": 2.2797622680664062,
            "individual_attack": 4,
            "individual_defense": 10,
            "individual_stamina": 3,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166169921"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "CATERPIE",
            "times_encountered": 10,
            "times_captured": 9
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7891180371631439005",
            "pokemon_id": "HAUNTER",
            "cp": 171,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "LICK_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 1.5576186180114746,
            "weight_kg": 0.09354563057422638,
            "individual_attack": 13,
            "individual_defense": 14,
            "individual_stamina": 2,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166523640"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15752854306400472198",
            "pokemon_id": "MAGIKARP",
            "cp": 22,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 1.0541659593582153,
            "weight_kg": 11.813117980957031,
            "individual_attack": 11,
            "individual_defense": 15,
            "individual_stamina": 1,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169361738"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1898954109243995371",
            "pokemon_id": "NIDORAN_MALE",
            "cp": 212,
            "stamina": 43,
            "stamina_max": 43,
            "move_1": "POISON_STING_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.5097693204879761,
            "weight_kg": 6.620579719543457,
            "individual_attack": 6,
            "individual_defense": 9,
            "individual_stamina": 10,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472164256625"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "WEEDLE",
            "times_encountered": 14,
            "times_captured": 13
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "KAKUNA",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIDGEY",
            "times_encountered": 30,
            "times_captured": 30
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15469644299494382971",
            "pokemon_id": "KRABBY",
            "cp": 50,
            "stamina": 13,
            "stamina_max": 13,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.49064186215400696,
            "weight_kg": 9.936112403869629,
            "individual_attack": 12,
            "individual_defense": 3,
            "individual_stamina": 3,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169670820"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIDGEOTTO",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "RATTATA",
            "times_encountered": 14,
            "times_captured": 14
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "SPEAROW",
            "times_encountered": 4,
            "times_captured": 4
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "EKANS",
            "times_encountered": 5,
            "times_captured": 5
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIKACHU",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7325082606731864427",
            "pokemon_id": "CLEFAIRY",
            "cp": 299,
            "stamina": 63,
            "stamina_max": 63,
            "move_1": "POUND_FAST",
            "move_2": "DISARMING_VOICE",
            "height_m": 0.5136882662773132,
            "weight_kg": 4.723833084106445,
            "individual_attack": 7,
            "individual_stamina": 10,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168765063"
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_REVIVE",
            "count": 17
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9353352146264839597",
            "pokemon_id": "STARYU",
            "cp": 120,
            "stamina": 21,
            "stamina_max": 21,
            "move_1": "TACKLE_FAST",
            "move_2": "POWER_GEM",
            "height_m": 0.7953434586524963,
            "weight_kg": 34.939552307128906,
            "individual_attack": 12,
            "individual_defense": 10,
            "individual_stamina": 13,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950026554703872",
            "creation_time_ms": "1472086340527",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "SANDSHREW",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "NIDORAN_FEMALE",
            "times_encountered": 5,
            "times_captured": 5
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7339645646766947664",
            "pokemon_id": "JIGGLYPUFF",
            "cp": 94,
            "stamina": 62,
            "stamina_max": 62,
            "move_1": "FEINT_ATTACK_FAST",
            "move_2": "DISARMING_VOICE",
            "height_m": 0.458790123462677,
            "weight_kg": 4.857036590576172,
            "individual_attack": 15,
            "individual_defense": 13,
            "individual_stamina": 14,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950031212478464",
            "creation_time_ms": "1472163450349",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "NIDORAN_MALE",
            "times_encountered": 4,
            "times_captured": 4
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_EEVEE",
            "candy": 40
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "CLEFAIRY",
            "times_encountered": 6,
            "times_captured": 6
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16032383909658512980",
            "pokemon_id": "STARYU",
            "cp": 271,
            "stamina": 31,
            "stamina_max": 31,
            "move_1": "WATER_GUN_FAST",
            "move_2": "SWIFT",
            "height_m": 0.8152773976325989,
            "weight_kg": 33.049007415771484,
            "individual_attack": 15,
            "individual_defense": 2,
            "individual_stamina": 10,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167986241"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "JIGGLYPUFF",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10118416093878827501",
            "pokemon_id": "CUBONE",
            "cp": 273,
            "stamina": 48,
            "stamina_max": 48,
            "move_1": "ROCK_SMASH_FAST",
            "move_2": "DIG",
            "height_m": 0.42776116728782654,
            "weight_kg": 7.95228385925293,
            "individual_attack": 12,
            "individual_defense": 7,
            "individual_stamina": 15,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472087566272"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "ZUBAT",
            "times_encountered": 12,
            "times_captured": 12
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "GOLBAT",
            "times_encountered": 3,
            "times_captured": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "ODDISH",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2004419522786766834",
            "pokemon_id": "EKANS",
            "cp": 120,
            "stamina": 24,
            "stamina_max": 24,
            "move_1": "ACID_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 2.0586092472076416,
            "weight_kg": 6.676670551300049,
            "individual_attack": 9,
            "individual_defense": 13,
            "individual_stamina": 5,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170231296"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "18156444509781755918",
            "pokemon_id": "TENTACOOL",
            "cp": 195,
            "stamina": 31,
            "stamina_max": 31,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.6867281198501587,
            "weight_kg": 35.682491302490234,
            "individual_attack": 6,
            "individual_defense": 14,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166827732"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PARAS",
            "times_encountered": 7,
            "times_captured": 7
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "VENONAT",
            "times_encountered": 3,
            "times_captured": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10578170441479374614",
            "pokemon_id": "RATTATA",
            "cp": 119,
            "stamina": 27,
            "stamina_max": 27,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "HYPER_FANG",
            "height_m": 0.3073199689388275,
            "weight_kg": 3.8387393951416016,
            "individual_attack": 7,
            "individual_defense": 14,
            "individual_stamina": 13,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165894266"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "MEOWTH",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17633046173503613986",
            "pokemon_id": "ZUBAT",
            "cp": 127,
            "stamina": 30,
            "stamina_max": 30,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 0.9897154569625854,
            "weight_kg": 10.555551528930664,
            "individual_attack": 10,
            "individual_defense": 14,
            "individual_stamina": 2,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165938704"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PSYDUCK",
            "times_encountered": 14,
            "times_captured": 13
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10538181702411282239",
            "pokemon_id": "TENTACOOL",
            "cp": 11,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "POISON_STING_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.8499559760093689,
            "weight_kg": 35.448631286621094,
            "individual_attack": 5,
            "individual_defense": 7,
            "individual_stamina": 12,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165979672"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "GOLDUCK",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "GROWLITHE",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10011638195746337366",
            "pokemon_id": "RATTATA",
            "cp": 174,
            "stamina": 32,
            "stamina_max": 32,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.3695419430732727,
            "weight_kg": 5.24965238571167,
            "individual_attack": 11,
            "individual_defense": 15,
            "individual_stamina": 14,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950031212478464",
            "creation_time_ms": "1472167040423",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "POLIWAG",
            "times_encountered": 5,
            "times_captured": 5
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17590292594410033932",
            "pokemon_id": "KRABBY",
            "cp": 116,
            "stamina": 19,
            "stamina_max": 19,
            "move_1": "BUBBLE_FAST",
            "move_2": "VICE_GRIP",
            "height_m": 0.4194880425930023,
            "weight_kg": 7.114974021911621,
            "individual_attack": 13,
            "individual_defense": 14,
            "individual_stamina": 2,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083935474"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16370672497361768324",
            "pokemon_id": "MAGIKARP",
            "cp": 17,
            "stamina": 11,
            "stamina_max": 11,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.7494837641716003,
            "weight_kg": 4.467952728271484,
            "individual_attack": 13,
            "individual_defense": 1,
            "individual_stamina": 14,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168032608"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8289547496692443448",
            "pokemon_id": "WEEDLE",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "POISON_STING_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.2876678705215454,
            "weight_kg": 3.0998685359954834,
            "individual_attack": 1,
            "individual_defense": 9,
            "individual_stamina": 14,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168805224"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "BELLSPROUT",
            "times_encountered": 3,
            "times_captured": 3
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257846600",
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "TENTACOOL",
            "times_encountered": 28,
            "times_captured": 28
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "TENTACRUEL",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1934543011514531360",
            "pokemon_id": "TENTACOOL",
            "cp": 106,
            "stamina": 25,
            "stamina_max": 25,
            "move_1": "POISON_STING_FAST",
            "move_2": "WATER_PULSE",
            "height_m": 0.9422383308410645,
            "weight_kg": 53.464508056640625,
            "individual_attack": 5,
            "individual_defense": 14,
            "individual_stamina": 7,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166872782"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "SLOWPOKE",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "MAGNEMITE",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13869095719584090479",
            "pokemon_id": "STARYU",
            "cp": 150,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "TACKLE_FAST",
            "move_2": "SWIFT",
            "height_m": 0.8141844272613525,
            "weight_kg": 34.34702682495117,
            "individual_attack": 13,
            "individual_defense": 14,
            "individual_stamina": 13,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950023157317632",
            "creation_time_ms": "1472167040424",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "DODUO",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "12844957717950873477",
            "pokemon_id": "RATTATA",
            "cp": 54,
            "stamina": 18,
            "stamina_max": 18,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "DIG",
            "height_m": 0.27744260430336,
            "weight_kg": 3.978289842605591,
            "individual_attack": 7,
            "individual_defense": 11,
            "individual_stamina": 13,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168074581"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "HAUNTER",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "ONIX",
            "times_encountered": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1649773948973949325",
            "pokemon_id": "RATTATA",
            "cp": 64,
            "stamina": 17,
            "stamina_max": 17,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "HYPER_FANG",
            "height_m": 0.2552221417427063,
            "weight_kg": 2.1355490684509277,
            "individual_attack": 9,
            "individual_defense": 8,
            "individual_stamina": 1,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166982802"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14240343582167667434",
            "pokemon_id": "KOFFING",
            "cp": 48,
            "stamina": 14,
            "stamina_max": 14,
            "move_1": "TACKLE_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 0.6719623804092407,
            "weight_kg": 1.1054927110671997,
            "individual_attack": 15,
            "individual_defense": 10,
            "individual_stamina": 10,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083585894"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "KRABBY",
            "times_encountered": 2,
            "times_captured": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13492777690099828242",
            "pokemon_id": "MAGIKARP",
            "cp": 60,
            "stamina": 19,
            "stamina_max": 19,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9396647214889526,
            "weight_kg": 12.141115188598633,
            "individual_attack": 12,
            "individual_stamina": 7,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163794400"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1309655230359225403",
            "pokemon_id": "CHARMANDER",
            "cp": 12,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "SCRATCH_FAST",
            "move_2": "FLAMETHROWER",
            "height_m": 0.7560690641403198,
            "weight_kg": 14.30856990814209,
            "individual_attack": 10,
            "individual_defense": 10,
            "individual_stamina": 10,
            "cp_multiplier": 0.09399999678134918,
            "captured_cell_id": "9263761726322507776",
            "creation_time_ms": "1471916449675"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "CUBONE",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11728363878555154645",
            "pokemon_id": "VENONAT",
            "cp": 193,
            "stamina": 46,
            "stamina_max": 46,
            "move_1": "BUG_BITE_FAST",
            "move_2": "PSYBEAM",
            "height_m": 0.8593552708625793,
            "weight_kg": 20.42385482788086,
            "individual_attack": 11,
            "individual_defense": 15,
            "individual_stamina": 13,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472087771381"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "KOFFING",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "6234784013111364479",
            "pokemon_id": "EEVEE",
            "cp": 239,
            "stamina": 45,
            "stamina_max": 45,
            "move_1": "TACKLE_FAST",
            "move_2": "DIG",
            "height_m": 0.24084141850471497,
            "weight_kg": 3.026804208755493,
            "individual_attack": 15,
            "individual_defense": 15,
            "individual_stamina": 12,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472085054996"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16622348127173207240",
            "pokemon_id": "EKANS",
            "cp": 33,
            "stamina": 13,
            "stamina_max": 13,
            "move_1": "POISON_STING_FAST",
            "move_2": "GUNK_SHOT",
            "height_m": 2.244659662246704,
            "weight_kg": 8.641282081604004,
            "individual_attack": 8,
            "individual_defense": 12,
            "individual_stamina": 13,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084621927"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14466831110260356323",
            "pokemon_id": "TENTACOOL",
            "cp": 153,
            "stamina": 32,
            "stamina_max": 32,
            "move_1": "POISON_STING_FAST",
            "move_2": "WATER_PULSE",
            "height_m": 0.8879975080490112,
            "weight_kg": 45.05804443359375,
            "individual_attack": 4,
            "individual_defense": 3,
            "individual_stamina": 14,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168121931"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "TANGELA",
            "times_encountered": 1,
            "times_captured": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1066192321709250132",
            "pokemon_id": "PSYDUCK",
            "cp": 70,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "ZEN_HEADBUTT_FAST",
            "move_2": "PSYBEAM",
            "height_m": 0.6357821822166443,
            "weight_kg": 13.553160667419434,
            "individual_defense": 9,
            "individual_stamina": 10,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166935124"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "HORSEA",
            "times_encountered": 3,
            "times_captured": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9381880326297921441",
            "pokemon_id": "ODDISH",
            "cp": 168,
            "stamina": 29,
            "stamina_max": 29,
            "move_1": "RAZOR_LEAF_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 0.4714772701263428,
            "weight_kg": 4.467739582061768,
            "individual_attack": 9,
            "individual_defense": 13,
            "individual_stamina": 1,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472082952292"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "GOLDEEN",
            "times_encountered": 3,
            "times_captured": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2961549934993926991",
            "pokemon_id": "TENTACOOL",
            "cp": 197,
            "stamina": 32,
            "stamina_max": 32,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.963395357131958,
            "weight_kg": 49.87534713745117,
            "individual_attack": 6,
            "individual_defense": 13,
            "individual_stamina": 2,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168211346"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5203560864785280548",
            "pokemon_id": "TENTACOOL",
            "cp": 154,
            "stamina": 31,
            "stamina_max": 31,
            "move_1": "BUBBLE_FAST",
            "move_2": "WRAP",
            "height_m": 0.6969493627548218,
            "weight_kg": 22.63739013671875,
            "individual_attack": 7,
            "individual_defense": 6,
            "individual_stamina": 9,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169441988"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "STARYU",
            "times_encountered": 4,
            "times_captured": 4
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1233791753614392547",
            "pokemon_id": "KAKUNA",
            "cp": 105,
            "stamina": 42,
            "stamina_max": 42,
            "move_1": "POISON_STING_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.5732197165489197,
            "weight_kg": 11.801264762878418,
            "individual_attack": 2,
            "individual_defense": 2,
            "individual_stamina": 11,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472162936354"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5176458014065721234",
            "pokemon_id": "SPEAROW",
            "cp": 59,
            "stamina": 21,
            "stamina_max": 21,
            "move_1": "PECK_FAST",
            "move_2": "DRILL_PECK",
            "height_m": 0.35670173168182373,
            "weight_kg": 2.6574575901031494,
            "individual_attack": 11,
            "individual_stamina": 4,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472164080432"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9497021452026886464",
            "pokemon_id": "PIDGEY",
            "cp": 26,
            "stamina": 14,
            "stamina_max": 14,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.24029754102230072,
            "weight_kg": 1.063635230064392,
            "individual_attack": 5,
            "individual_defense": 15,
            "individual_stamina": 6,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168449328"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3729524861851968893",
            "pokemon_id": "CATERPIE",
            "cp": 66,
            "stamina": 33,
            "stamina_max": 33,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.25643789768218994,
            "weight_kg": 2.2516214847564697,
            "individual_attack": 10,
            "individual_defense": 13,
            "individual_stamina": 13,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950024929411072",
            "creation_time_ms": "1472166031980",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13710518949846003282",
            "pokemon_id": "CATERPIE",
            "cp": 34,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.31097206473350525,
            "weight_kg": 3.436453104019165,
            "individual_defense": 4,
            "individual_stamina": 13,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166587822"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13129923657217686862",
            "pokemon_id": "MAGIKARP",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 1.0065199136734009,
            "weight_kg": 11.867074966430664,
            "individual_attack": 12,
            "individual_defense": 13,
            "individual_stamina": 14,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169280202"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17415976325155454952",
            "pokemon_id": "POLIWAG",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "BUBBLE_FAST",
            "move_2": "MUD_BOMB",
            "height_m": 0.651106595993042,
            "weight_kg": 12.73001480102539,
            "individual_attack": 14,
            "individual_defense": 5,
            "individual_stamina": 13,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169425833"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7377850750578800892",
            "pokemon_id": "POLIWAG",
            "cp": 222,
            "stamina": 38,
            "stamina_max": 38,
            "move_1": "MUD_SHOT_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.6652386784553528,
            "weight_kg": 14.974770545959473,
            "individual_attack": 11,
            "individual_defense": 6,
            "individual_stamina": 7,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168733170"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14190363010447377220",
            "pokemon_id": "PIDGEOTTO",
            "cp": 176,
            "stamina": 40,
            "stamina_max": 40,
            "move_1": "WING_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 1.1375997066497803,
            "weight_kg": 33.70304489135742,
            "individual_attack": 4,
            "individual_defense": 14,
            "individual_stamina": 1,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084348942"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2127061015004048959",
            "pokemon_id": "MAGNEMITE",
            "cp": 11,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "SPARK_FAST",
            "move_2": "DISCHARGE",
            "height_m": 0.34203049540519714,
            "weight_kg": 6.759245872497559,
            "individual_attack": 14,
            "individual_stamina": 8,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472003192187"
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_RAZZ_BERRY",
            "count": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1105051773397913143",
            "pokemon_id": "HORSEA",
            "cp": 163,
            "stamina": 24,
            "stamina_max": 24,
            "move_1": "WATER_GUN_FAST",
            "move_2": "FLASH_CANNON",
            "height_m": 0.445010244846344,
            "weight_kg": 9.140463829040527,
            "individual_attack": 13,
            "individual_defense": 12,
            "individual_stamina": 6,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472085881776"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10899529831617617054",
            "pokemon_id": "PIDGEY",
            "cp": 90,
            "stamina": 27,
            "stamina_max": 27,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.27534806728363037,
            "weight_kg": 1.628588080406189,
            "individual_attack": 4,
            "individual_defense": 3,
            "individual_stamina": 6,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170303070"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "12388687061750575977",
            "pokemon_id": "GOLDEEN",
            "cp": 70,
            "stamina": 22,
            "stamina_max": 22,
            "move_1": "PECK_FAST",
            "move_2": "AQUA_TAIL",
            "height_m": 0.5351908802986145,
            "weight_kg": 11.1896390914917,
            "individual_attack": 15,
            "individual_defense": 14,
            "individual_stamina": 13,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084976240"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "4805978136072322074",
            "pokemon_id": "DODUO",
            "cp": 100,
            "stamina": 21,
            "stamina_max": 21,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 1.6763755083084106,
            "weight_kg": 69.13565063476562,
            "individual_attack": 12,
            "individual_defense": 4,
            "individual_stamina": 4,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472085441647"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17034002458580371461",
            "pokemon_id": "PIDGEY",
            "cp": 87,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "TWISTER",
            "height_m": 0.22056129574775696,
            "weight_kg": 0.9143984913825989,
            "individual_attack": 2,
            "individual_defense": 4,
            "individual_stamina": 3,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169416871"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16337688724141258084",
            "pokemon_id": "GOLBAT",
            "cp": 295,
            "stamina": 51,
            "stamina_max": 51,
            "move_1": "BITE_FAST",
            "move_2": "OMINOUS_WIND",
            "height_m": 1.449712872505188,
            "weight_kg": 48.391151428222656,
            "individual_attack": 13,
            "individual_defense": 1,
            "individual_stamina": 9,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163884350"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5991954802883631286",
            "pokemon_id": "DRATINI",
            "cp": 177,
            "stamina": 33,
            "stamina_max": 33,
            "move_1": "DRAGON_BREATH_FAST",
            "move_2": "WRAP",
            "height_m": 1.8446041345596313,
            "weight_kg": 2.830061912536621,
            "individual_attack": 5,
            "individual_defense": 14,
            "individual_stamina": 15,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168334832"
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_LUCKY_EGG",
            "count": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2079503171708692855",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950021643173888",
            "creation_time_ms": "1472168907384"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "6014142048331501104",
            "pokemon_id": "RATTATA",
            "cp": 119,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "HYPER_FANG",
            "height_m": 0.31528523564338684,
            "weight_kg": 4.114616870880127,
            "individual_attack": 10,
            "individual_defense": 11,
            "individual_stamina": 11,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950023268466688",
            "creation_time_ms": "1472168839557",
            "from_fort": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14517207971313364848",
            "pokemon_id": "MAGIKARP",
            "cp": 49,
            "stamina": 16,
            "stamina_max": 16,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9742810726165771,
            "weight_kg": 10.54865837097168,
            "individual_attack": 12,
            "individual_defense": 10,
            "individual_stamina": 5,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169752951"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "18138687484860527388",
            "pokemon_id": "PSYDUCK",
            "cp": 182,
            "stamina": 36,
            "stamina_max": 36,
            "move_1": "WATER_GUN_FAST",
            "move_2": "CROSS_CHOP",
            "height_m": 0.8835322260856628,
            "weight_kg": 26.48299789428711,
            "individual_defense": 11,
            "individual_stamina": 4,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168130752"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_CHARMANDER",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14420593826739088147",
            "pokemon_id": "GOLDEEN",
            "cp": 140,
            "stamina": 33,
            "stamina_max": 33,
            "move_1": "MUD_SHOT_FAST",
            "move_2": "HORN_ATTACK",
            "height_m": 0.6284143328666687,
            "weight_kg": 13.712037086486816,
            "individual_attack": 7,
            "individual_defense": 2,
            "individual_stamina": 13,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472082109396"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8463358405042424083",
            "pokemon_id": "MAGIKARP",
            "cp": 43,
            "stamina": 15,
            "stamina_max": 15,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.7759566307067871,
            "weight_kg": 4.439426898956299,
            "individual_attack": 8,
            "individual_defense": 5,
            "individual_stamina": 2,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169475804"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_CATERPIE",
            "candy": 34
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9724559939559659667",
            "pokemon_id": "WEEDLE",
            "cp": 92,
            "stamina": 37,
            "stamina_max": 37,
            "move_1": "POISON_STING_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.28086644411087036,
            "weight_kg": 2.9330215454101562,
            "individual_attack": 1,
            "individual_defense": 10,
            "individual_stamina": 15,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163953627"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3672067867731402427",
            "pokemon_id": "CLEFAIRY",
            "cp": 143,
            "stamina": 41,
            "stamina_max": 41,
            "move_1": "ZEN_HEADBUTT_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.6066802740097046,
            "weight_kg": 7.535055637359619,
            "individual_attack": 6,
            "individual_defense": 14,
            "individual_stamina": 2,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472164917422"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_WEEDLE",
            "candy": 50
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PIDGEY",
            "candy": 114
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5691566898095110166",
            "pokemon_id": "VENONAT",
            "cp": 129,
            "stamina": 38,
            "stamina_max": 38,
            "move_1": "BUG_BITE_FAST",
            "move_2": "POISON_FANG",
            "height_m": 0.9311480522155762,
            "weight_kg": 21.01422691345215,
            "individual_attack": 11,
            "individual_defense": 9,
            "individual_stamina": 12,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166415677"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472186712519",
        "inventory_item_data": {
          "applied_items": {
            "item": [
              {
                "item_id": "ITEM_INCENSE_ORDINARY",
                "item_type": "ITEM_TYPE_INCENSE",
                "expire_ms": "1472188512519",
                "applied_ms": "1472186712519"
              }
            ]
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_RATTATA",
            "candy": 58
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "4196154046861501087",
            "pokemon_id": "PSYDUCK",
            "cp": 184,
            "stamina": 35,
            "stamina_max": 35,
            "move_1": "ZEN_HEADBUTT_FAST",
            "move_2": "AQUA_TAIL",
            "height_m": 0.647331714630127,
            "weight_kg": 12.375863075256348,
            "individual_attack": 1,
            "individual_defense": 13,
            "individual_stamina": 3,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165835149"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_SPEAROW",
            "candy": 12
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_EKANS",
            "candy": 16
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8167204889796597049",
            "pokemon_id": "TENTACRUEL",
            "cp": 89,
            "stamina": 27,
            "stamina_max": 27,
            "move_1": "ACID_FAST",
            "move_2": "BLIZZARD",
            "height_m": 1.4286994934082031,
            "weight_kg": 44.70983123779297,
            "individual_attack": 7,
            "individual_defense": 6,
            "individual_stamina": 6,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472003102450"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PIKACHU",
            "candy": 7
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_SANDSHREW",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1720327999872306075",
            "is_egg": true,
            "egg_km_walked_target": 2,
            "captured_cell_id": "9260950024111521792",
            "creation_time_ms": "1472081649025"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_NIDORAN_FEMALE",
            "candy": 16
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_NIDORAN_MALE",
            "candy": 15
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5678381329762629563",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950030872739840",
            "creation_time_ms": "1472080860747"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "665640432647278604",
            "pokemon_id": "NIDORAN_FEMALE",
            "cp": 33,
            "stamina": 18,
            "stamina_max": 18,
            "move_1": "BITE_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 0.31415674090385437,
            "weight_kg": 5.582039833068848,
            "individual_attack": 6,
            "individual_defense": 13,
            "individual_stamina": 2,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165885277"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_CLEFAIRY",
            "candy": 20
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7225945550348588798",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950028356157440",
            "creation_time_ms": "1472081048275"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_JIGGLYPUFF",
            "candy": 8
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_ZUBAT",
            "candy": 55
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_ODDISH",
            "candy": 7
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10286810791315054664",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950030839185408",
            "creation_time_ms": "1472163825293"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17269116066817234275",
            "pokemon_id": "EKANS",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "POISON_STING_FAST",
            "move_2": "SLUDGE_BOMB",
            "height_m": 2.103573799133301,
            "weight_kg": 8.407390594482422,
            "individual_attack": 9,
            "individual_defense": 2,
            "individual_stamina": 9,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166472523"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PARAS",
            "candy": 23
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8487716521147124208",
            "pokemon_id": "MAGIKARP",
            "cp": 27,
            "stamina": 14,
            "stamina_max": 14,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9566867351531982,
            "weight_kg": 10.613748550415039,
            "individual_attack": 15,
            "individual_defense": 15,
            "individual_stamina": 15,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083680257"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3085052051286062814",
            "pokemon_id": "CATERPIE",
            "cp": 94,
            "stamina": 44,
            "stamina_max": 44,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.34403058886528015,
            "weight_kg": 3.8955657482147217,
            "individual_defense": 3,
            "individual_stamina": 15,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163020269"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_VENONAT",
            "candy": 9
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257846600",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.58540916442871,
            "pokemons_encountered": 255,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 354,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17045581640715256041",
            "pokemon_id": "PIDGEY",
            "cp": 167,
            "stamina": 36,
            "stamina_max": 36,
            "move_1": "TACKLE_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.27671927213668823,
            "weight_kg": 1.3819866180419922,
            "individual_attack": 3,
            "individual_defense": 3,
            "individual_stamina": 3,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167546555"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_MEOWTH",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15708282457238168487",
            "pokemon_id": "JIGGLYPUFF",
            "cp": 243,
            "stamina": 105,
            "stamina_max": 105,
            "move_1": "POUND_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.45831066370010376,
            "weight_kg": 5.090814113616943,
            "individual_attack": 9,
            "individual_defense": 2,
            "individual_stamina": 9,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168505259"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "757300257223666111",
            "pokemon_id": "RATTATA",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "HYPER_FANG",
            "height_m": 0.28215542435646057,
            "weight_kg": 2.5270209312438965,
            "individual_attack": 11,
            "individual_defense": 15,
            "individual_stamina": 5,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169379420"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PSYDUCK",
            "candy": 53
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2532332684720650057",
            "pokemon_id": "SLOWPOKE",
            "cp": 214,
            "stamina": 62,
            "stamina_max": 62,
            "move_1": "WATER_GUN_FAST",
            "move_2": "WATER_PULSE",
            "height_m": 1.036032795906067,
            "weight_kg": 23.195960998535156,
            "individual_attack": 7,
            "individual_defense": 15,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472085412715"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1396389191034599065",
            "pokemon_id": "ZUBAT",
            "cp": 122,
            "stamina": 30,
            "stamina_max": 30,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "POISON_FANG",
            "height_m": 0.6741018891334534,
            "weight_kg": 4.6312103271484375,
            "individual_attack": 10,
            "individual_defense": 9,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163478144"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8083890949189704602",
            "pokemon_id": "NIDORAN_FEMALE",
            "cp": 235,
            "stamina": 50,
            "stamina_max": 50,
            "move_1": "BITE_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.33184024691581726,
            "weight_kg": 5.1568403244018555,
            "individual_attack": 5,
            "individual_defense": 9,
            "individual_stamina": 5,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167217398"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_GROWLITHE",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9650738835536536792",
            "pokemon_id": "NIDORAN_FEMALE",
            "cp": 99,
            "stamina": 31,
            "stamina_max": 31,
            "move_1": "BITE_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.44348159432411194,
            "weight_kg": 8.356590270996094,
            "individual_attack": 6,
            "individual_defense": 8,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084894480"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_POLIWAG",
            "candy": 16
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8755035241431244236",
            "pokemon_id": "RATTATA",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "DIG",
            "height_m": 0.3678334057331085,
            "weight_kg": 4.406000137329102,
            "individual_attack": 7,
            "individual_defense": 10,
            "individual_stamina": 15,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472007398839"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257796820",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 176
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11161601193035969553",
            "pokemon_id": "MAGIKARP",
            "cp": 23,
            "stamina": 11,
            "stamina_max": 11,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.8001798987388611,
            "weight_kg": 5.844413757324219,
            "individual_attack": 13,
            "individual_defense": 11,
            "individual_stamina": 5,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169610249"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257796820",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_GREAT_BALL",
            "count": 31
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_BELLSPROUT",
            "candy": 20
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17652061366881087342",
            "is_egg": true,
            "egg_km_walked_target": 5,
            "captured_cell_id": "9260950021643173888",
            "creation_time_ms": "1472167590113"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472257846600",
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_TENTACOOL",
            "candy": 118
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1785669132748557598",
            "pokemon_id": "PIDGEOTTO",
            "cp": 394,
            "stamina": 65,
            "stamina_max": 65,
            "move_1": "STEEL_WING_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.8662461638450623,
            "weight_kg": 12.146392822265625,
            "individual_attack": 4,
            "individual_defense": 3,
            "individual_stamina": 11,
            "cp_multiplier": 0.48168495297431946,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170168734"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_SLOWPOKE",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10743373805417773456",
            "pokemon_id": "PIDGEY",
            "cp": 201,
            "stamina": 43,
            "stamina_max": 43,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.26362425088882446,
            "weight_kg": 1.4963533878326416,
            "individual_attack": 3,
            "individual_defense": 11,
            "individual_stamina": 13,
            "cp_multiplier": 0.4627983868122101,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167846253"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_MAGNEMITE",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15417438077232260654",
            "pokemon_id": "POLIWAG",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "BUBBLE_FAST",
            "move_2": "BUBBLE_BEAM",
            "height_m": 0.519912600517273,
            "weight_kg": 6.852839469909668,
            "individual_attack": 13,
            "individual_defense": 6,
            "individual_stamina": 11,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472081084597"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_DODUO",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2212656064748788144",
            "pokemon_id": "PIDGEY",
            "cp": 169,
            "stamina": 39,
            "stamina_max": 39,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.3103066086769104,
            "weight_kg": 1.990498661994934,
            "individual_attack": 5,
            "individual_defense": 9,
            "individual_stamina": 13,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168023808"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "12948215968534668410",
            "pokemon_id": "PSYDUCK",
            "cp": 100,
            "stamina": 28,
            "stamina_max": 28,
            "move_1": "ZEN_HEADBUTT_FAST",
            "move_2": "PSYBEAM",
            "height_m": 0.7430064082145691,
            "weight_kg": 12.564596176147461,
            "individual_attack": 1,
            "individual_defense": 10,
            "individual_stamina": 10,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472080955574"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10828732263155007730",
            "pokemon_id": "PSYDUCK",
            "cp": 246,
            "stamina": 39,
            "stamina_max": 39,
            "move_1": "WATER_GUN_FAST",
            "move_2": "PSYBEAM",
            "height_m": 0.9349980354309082,
            "weight_kg": 29.353857040405273,
            "individual_attack": 10,
            "individual_defense": 6,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472164071410"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13480756810701931631",
            "pokemon_id": "MAGIKARP",
            "cp": 61,
            "stamina": 22,
            "stamina_max": 22,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9490794539451599,
            "weight_kg": 10.740224838256836,
            "individual_attack": 8,
            "individual_defense": 6,
            "individual_stamina": 13,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165826160"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_GASTLY",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_KRABBY",
            "candy": 6
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9939769426145364492",
            "pokemon_id": "PIDGEY",
            "cp": 111,
            "stamina": 28,
            "stamina_max": 28,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "TWISTER",
            "height_m": 0.30349525809288025,
            "weight_kg": 1.8047733306884766,
            "individual_attack": 6,
            "individual_defense": 11,
            "individual_stamina": 3,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168083388"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5127950998488078215",
            "pokemon_id": "RATTATA",
            "cp": 51,
            "stamina": 16,
            "stamina_max": 16,
            "move_1": "TACKLE_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.2929627001285553,
            "weight_kg": 2.5552916526794434,
            "individual_attack": 10,
            "individual_defense": 5,
            "individual_stamina": 6,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165175719"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3840395198721126426",
            "pokemon_id": "WEEDLE",
            "cp": 60,
            "stamina": 30,
            "stamina_max": 30,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.2947591245174408,
            "weight_kg": 3.341827630996704,
            "individual_attack": 1,
            "individual_defense": 11,
            "individual_stamina": 15,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169128443"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_CUBONE",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_KOFFING",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11759960102148015827",
            "pokemon_id": "ZUBAT",
            "cp": 70,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "BITE_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.7107124328613281,
            "weight_kg": 4.75435733795166,
            "individual_attack": 8,
            "individual_defense": 4,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170281895"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9794251190118975471",
            "pokemon_id": "BELLSPROUT",
            "cp": 133,
            "stamina": 31,
            "stamina_max": 31,
            "move_1": "VINE_WHIP_FAST",
            "move_2": "WRAP",
            "height_m": 0.6987091302871704,
            "weight_kg": 3.8709325790405273,
            "individual_attack": 12,
            "individual_defense": 2,
            "individual_stamina": 8,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169074960"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2036028894565521941",
            "pokemon_id": "EEVEE",
            "cp": 15,
            "stamina": 11,
            "stamina_max": 11,
            "move_1": "TACKLE_FAST",
            "move_2": "SWIFT",
            "height_m": 0.3166916072368622,
            "weight_kg": 6.927157402038574,
            "individual_attack": 14,
            "individual_defense": 15,
            "individual_stamina": 15,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163713261"
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_TANGELA",
            "candy": 3
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_HORSEA",
            "candy": 10
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_GOLDEEN",
            "candy": 10
          }
        }
      },
      {
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_STARYU",
            "candy": 42
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14546762015500175129",
            "pokemon_id": "MAGIKARP",
            "cp": 44,
            "stamina": 16,
            "stamina_max": 16,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.7995390295982361,
            "weight_kg": 6.859523773193359,
            "individual_attack": 8,
            "individual_defense": 11,
            "individual_stamina": 3,
            "cp_multiplier": 0.37523558735847473,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168186009"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "4756781975050695515",
            "pokemon_id": "EEVEE",
            "cp": 134,
            "stamina": 35,
            "stamina_max": 35,
            "move_1": "TACKLE_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.2544296383857727,
            "weight_kg": 4.399132251739502,
            "individual_attack": 9,
            "individual_defense": 8,
            "individual_stamina": 14,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168254123"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10809570347079981235",
            "pokemon_id": "MAGIKARP",
            "cp": 38,
            "stamina": 17,
            "stamina_max": 17,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9100069403648376,
            "weight_kg": 12.41937255859375,
            "individual_attack": 10,
            "individual_defense": 13,
            "individual_stamina": 13,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168474021"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1460985542818959855",
            "pokemon_id": "EEVEE",
            "cp": 379,
            "stamina": 57,
            "stamina_max": 57,
            "move_1": "TACKLE_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.32320642471313477,
            "weight_kg": 8.212794303894043,
            "individual_attack": 14,
            "individual_defense": 9,
            "individual_stamina": 9,
            "cp_multiplier": 0.48168495297431946,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472170346191"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "2185578410105534122",
            "pokemon_id": "HORSEA",
            "cp": 123,
            "stamina": 21,
            "stamina_max": 21,
            "move_1": "WATER_GUN_FAST",
            "move_2": "DRAGON_PULSE",
            "height_m": 0.29926443099975586,
            "weight_kg": 4.495344161987305,
            "individual_attack": 13,
            "individual_defense": 15,
            "individual_stamina": 8,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472082571793"
          }
        }
      },
      {
        "modified_timestamp_ms": "1472186712519",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_INCENSE_ORDINARY",
            "count": 4
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "8690813904472159056",
            "pokemon_id": "PIDGEY",
            "cp": 144,
            "stamina": 37,
            "stamina_max": 37,
            "move_1": "TACKLE_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 0.3326042890548706,
            "weight_kg": 2.472369432449341,
            "individual_attack": 3,
            "individual_defense": 3,
            "individual_stamina": 14,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167555513"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17460680667702124467",
            "pokemon_id": "GOLBAT",
            "cp": 80,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "BITE_FAST",
            "move_2": "AIR_CUTTER",
            "height_m": 1.3996596336364746,
            "weight_kg": 37.36060333251953,
            "individual_attack": 9,
            "individual_defense": 13,
            "individual_stamina": 8,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472082890441"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13058395514499145561",
            "is_egg": true,
            "egg_km_walked_target": 10,
            "captured_cell_id": "9260950018335965184",
            "creation_time_ms": "1472087010406"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13050954440787035401",
            "pokemon_id": "GROWLITHE",
            "cp": 17,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "EMBER_FAST",
            "move_2": "BODY_SLAM",
            "height_m": 0.812269389629364,
            "weight_kg": 19.918745040893555,
            "individual_attack": 13,
            "individual_defense": 15,
            "individual_stamina": 1,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472083944299"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13555213609037858176",
            "pokemon_id": "SPEAROW",
            "cp": 92,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.3950604796409607,
            "weight_kg": 3.030200242996216,
            "individual_attack": 8,
            "individual_defense": 2,
            "individual_stamina": 3,
            "cp_multiplier": 0.3210875988006592,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472087575226"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "7400642294098694259",
            "pokemon_id": "EKANS",
            "cp": 97,
            "stamina": 22,
            "stamina_max": 22,
            "move_1": "ACID_FAST",
            "move_2": "GUNK_SHOT",
            "height_m": 1.8418930768966675,
            "weight_kg": 5.169585704803467,
            "individual_attack": 5,
            "individual_defense": 15,
            "individual_stamina": 7,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472084807055"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "17292021633024068970",
            "pokemon_id": "DRATINI",
            "cp": 93,
            "stamina": 22,
            "stamina_max": 22,
            "move_1": "DRAGON_BREATH_FAST",
            "move_2": "AQUA_TAIL",
            "height_m": 1.947973370552063,
            "weight_kg": 2.9583613872528076,
            "individual_attack": 15,
            "individual_defense": 6,
            "individual_stamina": 5,
            "cp_multiplier": 0.2557200491428375,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167034839"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "MAGIKARP",
            "times_encountered": 45,
            "times_captured": 44
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POTION",
            "count": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_SUPER_POTION",
            "count": 52
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "14431597795280218433",
            "pokemon_id": "TENTACOOL",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "BUBBLE_FAST",
            "move_2": "WRAP",
            "height_m": 0.7911685705184937,
            "weight_kg": 30.524169921875,
            "individual_attack": 5,
            "individual_defense": 4,
            "individual_stamina": 5,
            "cp_multiplier": 0.09399999678134918,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165860170"
          }
        }
      },
      {
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_TROY_DISK",
            "count": 2
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "16126225818452367800",
            "pokemon_id": "MAGIKARP",
            "cp": 10,
            "stamina": 10,
            "stamina_max": 10,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.908986508846283,
            "weight_kg": 12.489686012268066,
            "individual_attack": 11,
            "individual_defense": 5,
            "individual_stamina": 1,
            "cp_multiplier": 0.16639786958694458,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472168406500"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "985346230363594790",
            "pokemon_id": "BELLSPROUT",
            "cp": 249,
            "stamina": 41,
            "stamina_max": 41,
            "move_1": "ACID_FAST",
            "move_2": "WRAP",
            "height_m": 0.7100275158882141,
            "weight_kg": 3.3758692741394043,
            "individual_attack": 12,
            "individual_defense": 4,
            "individual_stamina": 3,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163297955"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1284632511655671476",
            "pokemon_id": "GOLDUCK",
            "cp": 411,
            "stamina": 57,
            "stamina_max": 57,
            "move_1": "WATER_GUN_FAST",
            "move_2": "ICE_BEAM",
            "height_m": 1.7806732654571533,
            "weight_kg": 98.68665313720703,
            "individual_attack": 3,
            "individual_defense": 2,
            "individual_stamina": 5,
            "cp_multiplier": 0.3492126762866974,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167142996"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "9089808992743917506",
            "pokemon_id": "PIDGEY",
            "cp": 44,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.24672187864780426,
            "weight_kg": 1.2308028936386108,
            "individual_attack": 5,
            "individual_defense": 9,
            "individual_stamina": 14,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472003133192"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "15977212751781630627",
            "pokemon_id": "CATERPIE",
            "cp": 24,
            "stamina": 20,
            "stamina_max": 20,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.28996241092681885,
            "weight_kg": 2.983478307723999,
            "individual_defense": 12,
            "individual_stamina": 6,
            "cp_multiplier": 0.21573247015476227,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472165230339"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "10919897301600469249",
            "pokemon_id": "SANDSHREW",
            "cp": 243,
            "stamina": 53,
            "stamina_max": 53,
            "move_1": "MUD_SHOT_FAST",
            "move_2": "ROCK_SLIDE",
            "height_m": 0.4949106276035309,
            "weight_kg": 7.461650848388672,
            "individual_attack": 5,
            "individual_defense": 11,
            "individual_stamina": 15,
            "cp_multiplier": 0.4627983868122101,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167930698"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13551704713821957882",
            "pokemon_id": "VENONAT",
            "cp": 251,
            "stamina": 51,
            "stamina_max": 51,
            "move_1": "CONFUSION_FAST",
            "move_2": "SIGNAL_BEAM",
            "height_m": 0.9252907633781433,
            "weight_kg": 24.35146141052246,
            "individual_attack": 14,
            "individual_defense": 11,
            "individual_stamina": 9,
            "cp_multiplier": 0.39956727623939514,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472086660623"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "3189527986667038389",
            "pokemon_id": "MAGIKARP",
            "cp": 70,
            "stamina": 23,
            "stamina_max": 23,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.9676710963249207,
            "weight_kg": 11.209567070007324,
            "individual_attack": 12,
            "individual_stamina": 13,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472169557694"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "13856925937932313001",
            "pokemon_id": "POLIWAG",
            "cp": 91,
            "stamina": 26,
            "stamina_max": 26,
            "move_1": "BUBBLE_FAST",
            "move_2": "MUD_BOMB",
            "height_m": 0.5530276894569397,
            "weight_kg": 11.919177055358887,
            "individual_attack": 3,
            "individual_defense": 6,
            "individual_stamina": 12,
            "cp_multiplier": 0.29024988412857056,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472163866472"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "539621971386478612",
            "pokemon_id": "MAGIKARP",
            "cp": 59,
            "stamina": 19,
            "stamina_max": 19,
            "move_1": "SPLASH_FAST",
            "move_2": "STRUGGLE",
            "height_m": 1.1078777313232422,
            "weight_kg": 12.856267929077148,
            "individual_attack": 10,
            "individual_defense": 7,
            "individual_stamina": 5,
            "cp_multiplier": 0.42250001430511475,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166767405"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "11814025632377362302",
            "pokemon_id": "PIDGEY",
            "cp": 178,
            "stamina": 42,
            "stamina_max": 42,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "TWISTER",
            "height_m": 0.26586946845054626,
            "weight_kg": 1.3699467182159424,
            "individual_attack": 3,
            "individual_defense": 2,
            "individual_stamina": 15,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472166818876"
          }
        }
      },
      {
        "inventory_item_data": {
          "pokemon_data": {
            "id": "1899623467465792447",
            "pokemon_id": "WEEDLE",
            "cp": 125,
            "stamina": 43,
            "stamina_max": 43,
            "move_1": "BUG_BITE_FAST",
            "move_2": "STRUGGLE",
            "height_m": 0.25935739278793335,
            "weight_kg": 2.2171661853790283,
            "individual_attack": 1,
            "individual_defense": 12,
            "individual_stamina": 15,
            "cp_multiplier": 0.4627983868122101,
            "pokeball": "ITEM_GREAT_BALL",
            "captured_cell_id": "9260950045757276160",
            "creation_time_ms": "1472167703617"
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:33:55 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:33:55 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "settings": {
    "fort_settings": {
      "interaction_range_meters": 40,
        "max_total_deployed_pokemon": 10,
        "max_player_deployed_pokemon": 1,
        "deploy_stamina_multiplier": 2,
        "far_interaction_range_meters": 1000
    },
    "map_settings": {
      "pokemon_visible_range": 70,
        "poke_nav_range_meters": 751,
        "encounter_range_meters": 50,
        "get_map_objects_min_refresh_seconds": 10,
        "get_map_objects_max_refresh_seconds": 30,
        "get_map_objects_min_distance_meters": 10,
        "google_maps_api_key": "AIzaSyDF9rkP8lhcddBtvH9gVFzjnNo13WtmJIM"
    },
    "inventory_settings": {
      "max_pokemon": 1000,
        "max_bag_items": 1000,
        "base_pokemon": 250,
        "base_bag_items": 350,
        "base_eggs": 9
    },
    "minimum_client_version": "0.33.0"
  },
  "$unknownFields": []
}
5:33:55 PM [Request] GetAssetDigest {
  "platform": "ANDROID",
    "app_version": 3500,
    "$unknownFields": []
}
5:33:55 PM [Request] CheckChallenge {}
5:33:55 PM [Request] GetHatchedEggs {}
5:33:55 PM [Request] GetInventory {
  "last_timestamp_ms": "1472257846656",
    "$unknownFields": []
}
5:33:55 PM [Request] CheckAwardedBadges {}
5:33:55 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:55 PM [Response] GetAssetDigest {
  "digest": [
    {
      "asset_id": "030a3476-668a-47fb-95ed-2bcfc5c15637/1467338129695000",
      "bundle_name": "pm0094",
      "version": "1467338129695000",
      "checksum": 1091692581,
      "size": 401141,
      "key": {
        "type": "Buffer",
        "data": [
          13,
          12,
          146,
          77,
          237,
          147,
          175,
          146,
          246,
          18,
          50,
          128,
          71,
          34,
          183,
          164
        ]
      }
    },
    {
      "asset_id": "0425019c-3e6a-4317-960d-2e7324b3e744/1467337885130000",
      "bundle_name": "pm0002",
      "version": "1467337885130000",
      "checksum": 1262180282,
      "size": 538117,
      "key": {
        "type": "Buffer",
        "data": [
          36,
          115,
          134,
          39,
          83,
          177,
          178,
          202,
          103,
          243,
          159,
          106,
          104,
          224,
          197,
          63
        ]
      }
    },
    {
      "asset_id": "075f80e6-760e-4553-96ef-6e117b933969/1467337919227000",
      "bundle_name": "pm0015",
      "version": "1467337919227000",
      "checksum": 2902084886,
      "size": 320309,
      "key": {
        "type": "Buffer",
        "data": [
          180,
          158,
          107,
          151,
          195,
          205,
          85,
          106,
          8,
          75,
          208,
          21,
          253,
          104,
          99,
          110
        ]
      }
    },
    {
      "asset_id": "0788eb46-368c-480c-bec2-f9709a25caf0/1467338000489000",
      "bundle_name": "pm0045",
      "version": "1467338000489000",
      "checksum": 3950266309,
      "size": 317685,
      "key": {
        "type": "Buffer",
        "data": [
          108,
          250,
          245,
          37,
          6,
          148,
          176,
          186,
          170,
          30,
          222,
          62,
          89,
          221,
          106,
          49
        ]
      }
    },
    {
      "asset_id": "09493d46-29b4-476d-8b4d-fdb152251ec6/1467338194462000",
      "bundle_name": "pm0120",
      "version": "1467338194462000",
      "checksum": 1682924312,
      "size": 241797,
      "key": {
        "type": "Buffer",
        "data": [
          111,
          93,
          162,
          240,
          215,
          161,
          34,
          241,
          140,
          107,
          226,
          148,
          132,
          33,
          56,
          163
        ]
      }
    },
    {
      "asset_id": "0bd50fd0-3d5f-4a1c-98af-88b6ec74a1bd/1467337882194000",
      "bundle_name": "pm0001",
      "version": "1467337882194000",
      "checksum": 3445822759,
      "size": 539253,
      "key": {
        "type": "Buffer",
        "data": [
          165,
          235,
          107,
          194,
          248,
          174,
          254,
          139,
          140,
          165,
          221,
          131,
          37,
          234,
          216,
          168
        ]
      }
    },
    {
      "asset_id": "0d68da6c-ab76-4c31-b3df-4068a8764a12/1467338113910000",
      "bundle_name": "pm0088",
      "version": "1467338113910000",
      "checksum": 1851466744,
      "size": 867109,
      "key": {
        "type": "Buffer",
        "data": [
          156,
          140,
          107,
          48,
          213,
          233,
          230,
          134,
          38,
          111,
          72,
          249,
          18,
          9,
          248,
          131
        ]
      }
    },
    {
      "asset_id": "0ddf030f-2060-4982-a31c-6b90bcc36918/1467337909222000",
      "bundle_name": "pm0011",
      "version": "1467337909222000",
      "checksum": 3452525069,
      "size": 187093,
      "key": {
        "type": "Buffer",
        "data": [
          150,
          71,
          111,
          32,
          225,
          49,
          71,
          63,
          37,
          243,
          157,
          45,
          96,
          107,
          114,
          219
        ]
      }
    },
    {
      "asset_id": "0fc10c28-3391-496b-bf21-4998855cc68d/1467338266042000",
      "bundle_name": "pm0147",
      "version": "1467338266042000",
      "checksum": 590985285,
      "size": 309877,
      "key": {
        "type": "Buffer",
        "data": [
          52,
          137,
          166,
          103,
          220,
          187,
          111,
          127,
          156,
          170,
          227,
          14,
          159,
          237,
          204,
          114
        ]
      }
    },
    {
      "asset_id": "10531b61-bb47-41d2-8a8e-1d1639112419/1467337976073000",
      "bundle_name": "pm0036",
      "version": "1467337976073000",
      "checksum": 1083344592,
      "size": 434533,
      "key": {
        "type": "Buffer",
        "data": [
          236,
          105,
          222,
          45,
          231,
          33,
          145,
          3,
          159,
          158,
          49,
          2,
          43,
          4,
          134,
          138
        ]
      }
    },
    {
      "asset_id": "10d55042-2573-4150-881d-24ce2104c821/1467338091293000",
      "bundle_name": "pm0079",
      "version": "1467338091293000",
      "checksum": 1886181521,
      "size": 374117,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          150,
          129,
          155,
          252,
          251,
          113,
          249,
          128,
          57,
          25,
          23,
          128,
          101,
          63,
          135
        ]
      }
    },
    {
      "asset_id": "113c720a-2bac-4417-b1cf-e095b7ded5f9/1467338069977000",
      "bundle_name": "pm0071",
      "version": "1467338069977000",
      "checksum": 2021977114,
      "size": 678213,
      "key": {
        "type": "Buffer",
        "data": [
          128,
          116,
          169,
          154,
          63,
          23,
          185,
          96,
          63,
          237,
          100,
          212,
          240,
          244,
          56,
          236
        ]
      }
    },
    {
      "asset_id": "13cfc96d-78a5-4c2e-b7da-bcb12b96aaf8/1467338174844000",
      "bundle_name": "pm0112",
      "version": "1467338174844000",
      "checksum": 363541638,
      "size": 452261,
      "key": {
        "type": "Buffer",
        "data": [
          93,
          225,
          155,
          13,
          173,
          121,
          33,
          135,
          22,
          75,
          138,
          199,
          235,
          25,
          205,
          180
        ]
      }
    },
    {
      "asset_id": "144e2ec2-4ce6-4c0c-8fca-fa7e2ae3322c/1467338268569000",
      "bundle_name": "pm0148",
      "version": "1467338268569000",
      "checksum": 3037878969,
      "size": 301029,
      "key": {
        "type": "Buffer",
        "data": [
          90,
          166,
          42,
          88,
          166,
          110,
          99,
          97,
          28,
          234,
          47,
          67,
          15,
          104,
          210,
          125
        ]
      }
    },
    {
      "asset_id": "1512005a-ca80-443d-b1e3-db95bb786718/1467337987049000",
      "bundle_name": "pm0040",
      "version": "1467337987049000",
      "checksum": 2688163078,
      "size": 374613,
      "key": {
        "type": "Buffer",
        "data": [
          22,
          183,
          106,
          200,
          139,
          248,
          3,
          247,
          63,
          189,
          44,
          233,
          23,
          235,
          143,
          167
        ]
      }
    },
    {
      "asset_id": "17e94739-b461-45b2-bba2-254e8b6ebe0e/1467337899180000",
      "bundle_name": "pm0007",
      "version": "1467337899180000",
      "checksum": 2891475622,
      "size": 431269,
      "key": {
        "type": "Buffer",
        "data": [
          249,
          44,
          222,
          192,
          244,
          136,
          166,
          96,
          93,
          207,
          253,
          238,
          234,
          182,
          197,
          89
        ]
      }
    },
    {
      "asset_id": "192d950c-765e-426c-8861-f60d0f7883f3/1467338008565000",
      "bundle_name": "pm0048",
      "version": "1467338008565000",
      "checksum": 3345575021,
      "size": 518213,
      "key": {
        "type": "Buffer",
        "data": [
          104,
          101,
          252,
          60,
          231,
          150,
          230,
          58,
          162,
          107,
          234,
          179,
          199,
          159,
          112,
          240
        ]
      }
    },
    {
      "asset_id": "1a8d8b21-83e5-47e9-8d80-9523f3ad202d/1467337964453000",
      "bundle_name": "pm0032",
      "version": "1467337964453000",
      "checksum": 630362926,
      "size": 405957,
      "key": {
        "type": "Buffer",
        "data": [
          109,
          229,
          241,
          174,
          74,
          51,
          165,
          182,
          254,
          141,
          76,
          81,
          26,
          33,
          154,
          29
        ]
      }
    },
    {
      "asset_id": "1cab52c2-fd34-42f5-81fb-160d559ec52c/1467338086041000",
      "bundle_name": "pm0077",
      "version": "1467338086041000",
      "checksum": 3581097280,
      "size": 696005,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          175,
          51,
          254,
          74,
          119,
          206,
          72,
          62,
          28,
          86,
          53,
          25,
          33,
          105,
          216
        ]
      }
    },
    {
      "asset_id": "1de61775-066c-467b-9d15-bba848613582/1467338189393000",
      "bundle_name": "pm0118",
      "version": "1467338189393000",
      "checksum": 1121624648,
      "size": 519717,
      "key": {
        "type": "Buffer",
        "data": [
          247,
          197,
          212,
          217,
          29,
          38,
          143,
          9,
          90,
          119,
          195,
          34,
          170,
          44,
          129,
          114
        ]
      }
    },
    {
      "asset_id": "1e15c63a-9a35-4089-b89e-ac43a7acd75f/1467337951277000",
      "bundle_name": "pm0027",
      "version": "1467337951277000",
      "checksum": 1335393334,
      "size": 425797,
      "key": {
        "type": "Buffer",
        "data": [
          93,
          62,
          94,
          154,
          224,
          236,
          35,
          227,
          199,
          62,
          207,
          127,
          135,
          232,
          91,
          233
        ]
      }
    },
    {
      "asset_id": "1e4961be-4396-42ee-b40d-1a2fb5ec5a80/1467337971773000",
      "bundle_name": "pm0035",
      "version": "1467337971773000",
      "checksum": 4191243538,
      "size": 362949,
      "key": {
        "type": "Buffer",
        "data": [
          135,
          87,
          115,
          122,
          83,
          40,
          253,
          231,
          22,
          191,
          44,
          108,
          202,
          32,
          209,
          117
        ]
      }
    },
    {
      "asset_id": "1e564e4d-a0ff-44fb-928a-23c0f1f5848a/1467337958911000",
      "bundle_name": "pm0030",
      "version": "1467337958911000",
      "checksum": 2285618556,
      "size": 337397,
      "key": {
        "type": "Buffer",
        "data": [
          55,
          71,
          166,
          53,
          19,
          187,
          103,
          103,
          23,
          141,
          101,
          21,
          60,
          56,
          134,
          134
        ]
      }
    },
    {
      "asset_id": "22104024-0f79-4adb-9b0e-c710e0a7301f/1467338229269000",
      "bundle_name": "pm0133",
      "version": "1467338229269000",
      "checksum": 2667934853,
      "size": 551221,
      "key": {
        "type": "Buffer",
        "data": [
          81,
          7,
          141,
          12,
          226,
          137,
          233,
          201,
          17,
          253,
          59,
          224,
          234,
          23,
          189,
          139
        ]
      }
    },
    {
      "asset_id": "253d320c-a865-4dac-b7fc-65b48f51104c/1467338202540000",
      "bundle_name": "pm0123",
      "version": "1467338202540000",
      "checksum": 3550620028,
      "size": 415301,
      "key": {
        "type": "Buffer",
        "data": [
          18,
          56,
          36,
          240,
          41,
          229,
          195,
          228,
          103,
          62,
          254,
          232,
          93,
          220,
          174,
          34
        ]
      }
    },
    {
      "asset_id": "2727cac4-4bfe-4021-b15f-01e4ac5b66a3/1467337916776000",
      "bundle_name": "pm0014",
      "version": "1467337916776000",
      "checksum": 1789690601,
      "size": 172309,
      "key": {
        "type": "Buffer",
        "data": [
          254,
          225,
          200,
          146,
          97,
          69,
          220,
          21,
          57,
          38,
          115,
          94,
          176,
          14,
          45,
          194
        ]
      }
    },
    {
      "asset_id": "2a17e985-e3be-4e32-bebd-3d9c21a080bc/1467338205053000",
      "bundle_name": "pm0124",
      "version": "1467338205053000",
      "checksum": 475671429,
      "size": 773397,
      "key": {
        "type": "Buffer",
        "data": [
          212,
          57,
          40,
          84,
          205,
          16,
          209,
          133,
          20,
          180,
          187,
          38,
          230,
          137,
          203,
          81
        ]
      }
    },
    {
      "asset_id": "2b57e336-fd00-4f4b-9ff8-fe0b39c1b2ad/1467338213134000",
      "bundle_name": "pm0127",
      "version": "1467338213134000",
      "checksum": 2991925804,
      "size": 468997,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          28,
          178,
          243,
          249,
          168,
          87,
          107,
          14,
          35,
          101,
          96,
          236,
          90,
          59,
          17
        ]
      }
    },
    {
      "asset_id": "2f001c1d-5f65-416a-a062-bbd53b5dcc36/1467338052077000",
      "bundle_name": "pm0064",
      "version": "1467338052077000",
      "checksum": 1381302082,
      "size": 461909,
      "key": {
        "type": "Buffer",
        "data": [
          252,
          114,
          227,
          173,
          143,
          119,
          214,
          151,
          122,
          86,
          234,
          233,
          108,
          60,
          124,
          249
        ]
      }
    },
    {
      "asset_id": "2fbef411-bc29-44c4-b988-fb2b37227082/1467338172347000",
      "bundle_name": "pm0111",
      "version": "1467338172347000",
      "checksum": 1601575968,
      "size": 481557,
      "key": {
        "type": "Buffer",
        "data": [
          132,
          16,
          220,
          249,
          122,
          54,
          203,
          195,
          82,
          101,
          230,
          53,
          5,
          102,
          68,
          129
        ]
      }
    },
    {
      "asset_id": "3106cff7-3cbb-488b-87de-851782cf7514/1467338096154000",
      "bundle_name": "pm0081",
      "version": "1467338096154000",
      "checksum": 74226018,
      "size": 216421,
      "key": {
        "type": "Buffer",
        "data": [
          182,
          96,
          198,
          213,
          214,
          254,
          11,
          92,
          40,
          0,
          153,
          84,
          193,
          178,
          8,
          166
        ]
      }
    },
    {
      "asset_id": "31e4001a-6636-4e37-8f4f-83ec44efabaf/1467337984615000",
      "bundle_name": "pm0039",
      "version": "1467337984615000",
      "checksum": 2862335009,
      "size": 466789,
      "key": {
        "type": "Buffer",
        "data": [
          247,
          6,
          143,
          69,
          5,
          26,
          251,
          114,
          132,
          239,
          124,
          125,
          2,
          38,
          248,
          251
        ]
      }
    },
    {
      "asset_id": "324622df-707d-4916-8498-427306552469/1467338098389000",
      "bundle_name": "pm0082",
      "version": "1467338098389000",
      "checksum": 3074157279,
      "size": 328885,
      "key": {
        "type": "Buffer",
        "data": [
          98,
          69,
          149,
          62,
          229,
          50,
          132,
          120,
          249,
          192,
          136,
          96,
          232,
          188,
          34,
          149
        ]
      }
    },
    {
      "asset_id": "373af218-ca36-4648-a72b-b0f7ae8bf2e9/1467338135579000",
      "bundle_name": "pm0096",
      "version": "1467338135579000",
      "checksum": 115675938,
      "size": 538661,
      "key": {
        "type": "Buffer",
        "data": [
          21,
          242,
          179,
          32,
          180,
          198,
          231,
          255,
          10,
          186,
          212,
          19,
          223,
          62,
          25,
          73
        ]
      }
    },
    {
      "asset_id": "3918f249-3ad9-4dee-a073-9d1ecada65d1/1467338240434000",
      "bundle_name": "pm0137",
      "version": "1467338240434000",
      "checksum": 1906115008,
      "size": 137909,
      "key": {
        "type": "Buffer",
        "data": [
          248,
          171,
          242,
          191,
          173,
          184,
          183,
          191,
          148,
          32,
          165,
          205,
          98,
          186,
          45,
          226
        ]
      }
    },
    {
      "asset_id": "3a5b0f0a-bfac-4009-a263-60f5cbd52a0f/1467337904532000",
      "bundle_name": "pm0009",
      "version": "1467337904532000",
      "checksum": 256607364,
      "size": 581717,
      "key": {
        "type": "Buffer",
        "data": [
          113,
          168,
          178,
          202,
          175,
          22,
          58,
          104,
          26,
          64,
          126,
          136,
          169,
          167,
          19,
          132
        ]
      }
    },
    {
      "asset_id": "3c50d5e8-a587-42a6-bb9b-37fba81cf199/1467338020497000",
      "bundle_name": "pm0052",
      "version": "1467338020497000",
      "checksum": 1233924138,
      "size": 523829,
      "key": {
        "type": "Buffer",
        "data": [
          37,
          57,
          223,
          236,
          180,
          27,
          17,
          181,
          48,
          136,
          33,
          224,
          126,
          11,
          113,
          37
        ]
      }
    },
    {
      "asset_id": "3c75b9ce-d9c0-4646-b175-fe25f1dc9d9d/1467338207442000",
      "bundle_name": "pm0125",
      "version": "1467338207442000",
      "checksum": 211798875,
      "size": 572037,
      "key": {
        "type": "Buffer",
        "data": [
          122,
          123,
          230,
          27,
          126,
          237,
          215,
          22,
          102,
          150,
          92,
          45,
          45,
          229,
          133,
          198
        ]
      }
    },
    {
      "asset_id": "3d1a2fbe-0223-488c-a0f0-aca878917bf4/1467337997895000",
      "bundle_name": "pm0044",
      "version": "1467337997895000",
      "checksum": 730430449,
      "size": 412613,
      "key": {
        "type": "Buffer",
        "data": [
          209,
          12,
          217,
          63,
          112,
          70,
          240,
          1,
          62,
          239,
          204,
          91,
          172,
          56,
          135,
          197
        ]
      }
    },
    {
      "asset_id": "3d3f7e51-d1a2-4697-9644-5c935e781b8f/1467338011578000",
      "bundle_name": "pm0049",
      "version": "1467338011578000",
      "checksum": 1305345479,
      "size": 302901,
      "key": {
        "type": "Buffer",
        "data": [
          177,
          221,
          207,
          237,
          28,
          114,
          145,
          238,
          166,
          41,
          95,
          248,
          70,
          5,
          63,
          18
        ]
      }
    },
    {
      "asset_id": "445b414e-c2ac-4e4f-b038-d4370e0f0197/1467337961777000",
      "bundle_name": "pm0031",
      "version": "1467337961777000",
      "checksum": 4283404323,
      "size": 370069,
      "key": {
        "type": "Buffer",
        "data": [
          140,
          24,
          43,
          113,
          189,
          152,
          166,
          187,
          130,
          147,
          151,
          203,
          251,
          129,
          105,
          84
        ]
      }
    },
    {
      "asset_id": "4d9a5912-a0f7-4bb2-8248-b0021e54d471/1467338165109000",
      "bundle_name": "pm0108",
      "version": "1467338165109000",
      "checksum": 1328162472,
      "size": 510453,
      "key": {
        "type": "Buffer",
        "data": [
          146,
          60,
          41,
          234,
          74,
          195,
          56,
          56,
          69,
          43,
          212,
          77,
          107,
          155,
          183,
          34
        ]
      }
    },
    {
      "asset_id": "4fbc5a41-fa6f-4b6a-aaa1-19028c3d80ff/1467338177160000",
      "bundle_name": "pm0113",
      "version": "1467338177160000",
      "checksum": 2240794369,
      "size": 361109,
      "key": {
        "type": "Buffer",
        "data": [
          53,
          174,
          144,
          185,
          77,
          101,
          91,
          69,
          163,
          226,
          139,
          74,
          241,
          133,
          10,
          156
        ]
      }
    },
    {
      "asset_id": "5052b740-eb53-4d43-b626-7a8446c209a4/1467338044503000",
      "bundle_name": "pm0061",
      "version": "1467338044503000",
      "checksum": 2130499044,
      "size": 338309,
      "key": {
        "type": "Buffer",
        "data": [
          38,
          159,
          43,
          225,
          94,
          92,
          132,
          2,
          136,
          135,
          3,
          194,
          120,
          140,
          182,
          188
        ]
      }
    },
    {
      "asset_id": "509a4b03-21bb-4648-8ec9-13acaa6acd2a/1467338248318000",
      "bundle_name": "pm0140",
      "version": "1467338248318000",
      "checksum": 3970891003,
      "size": 236869,
      "key": {
        "type": "Buffer",
        "data": [
          80,
          220,
          183,
          223,
          96,
          58,
          152,
          44,
          167,
          87,
          211,
          224,
          132,
          75,
          71,
          14
        ]
      }
    },
    {
      "asset_id": "5150fb96-23b5-4e13-b700-14d34a91c609/1467338002945000",
      "bundle_name": "pm0046",
      "version": "1467338002945000",
      "checksum": 902196895,
      "size": 377765,
      "key": {
        "type": "Buffer",
        "data": [
          215,
          249,
          156,
          119,
          79,
          228,
          1,
          194,
          153,
          143,
          173,
          254,
          212,
          234,
          253,
          175
        ]
      }
    },
    {
      "asset_id": "539ce0fa-01f9-4800-b3f5-52ea25038c6e/1467337943229000",
      "bundle_name": "pm0024",
      "version": "1467337943229000",
      "checksum": 3828810246,
      "size": 367957,
      "key": {
        "type": "Buffer",
        "data": [
          215,
          0,
          137,
          127,
          42,
          177,
          117,
          234,
          180,
          139,
          140,
          250,
          123,
          32,
          234,
          221
        ]
      }
    },
    {
      "asset_id": "53b9b877-3496-499f-9268-f493fe6fb423/1467338215957000",
      "bundle_name": "pm0128",
      "version": "1467338215957000",
      "checksum": 2194994395,
      "size": 547237,
      "key": {
        "type": "Buffer",
        "data": [
          237,
          32,
          118,
          36,
          139,
          48,
          110,
          5,
          178,
          209,
          81,
          216,
          40,
          52,
          189,
          231
        ]
      }
    },
    {
      "asset_id": "586bafd6-675a-4799-9ea3-529f205db205/1467338046999000",
      "bundle_name": "pm0062",
      "version": "1467338046999000",
      "checksum": 436642340,
      "size": 441125,
      "key": {
        "type": "Buffer",
        "data": [
          229,
          94,
          29,
          226,
          126,
          6,
          123,
          111,
          192,
          235,
          214,
          59,
          238,
          221,
          144,
          217
        ]
      }
    },
    {
      "asset_id": "5a1ad400-947b-468f-aff5-4ee74b488da1/1467338162694000",
      "bundle_name": "pm0107",
      "version": "1467338162694000",
      "checksum": 2858354579,
      "size": 381301,
      "key": {
        "type": "Buffer",
        "data": [
          87,
          195,
          9,
          176,
          191,
          125,
          185,
          197,
          82,
          194,
          233,
          105,
          212,
          109,
          148,
          78
        ]
      }
    },
    {
      "asset_id": "5be4c90f-8b4b-49ce-92a1-6e1ffd591fda/1467338152232000",
      "bundle_name": "pm0103",
      "version": "1467338152232000",
      "checksum": 1142938153,
      "size": 588149,
      "key": {
        "type": "Buffer",
        "data": [
          128,
          145,
          120,
          98,
          26,
          35,
          244,
          238,
          64,
          129,
          129,
          224,
          121,
          244,
          172,
          108
        ]
      }
    },
    {
      "asset_id": "5c0a5e50-9ea2-4a9a-b450-313faa60fc30/1467337906920000",
      "bundle_name": "pm0010",
      "version": "1467337906920000",
      "checksum": 4264333702,
      "size": 218277,
      "key": {
        "type": "Buffer",
        "data": [
          42,
          199,
          83,
          68,
          198,
          13,
          192,
          3,
          157,
          3,
          160,
          109,
          139,
          160,
          18,
          136
        ]
      }
    },
    {
      "asset_id": "5cbcb961-13dc-440c-a474-50212e6ff120/1467338119418000",
      "bundle_name": "pm0090",
      "version": "1467338119418000",
      "checksum": 260237632,
      "size": 236341,
      "key": {
        "type": "Buffer",
        "data": [
          166,
          250,
          80,
          11,
          159,
          13,
          86,
          76,
          248,
          156,
          238,
          173,
          11,
          68,
          84,
          204
        ]
      }
    },
    {
      "asset_id": "5f96120d-3c3d-49f0-9e37-a32ea310c90f/1467338179500000",
      "bundle_name": "pm0114",
      "version": "1467338179500000",
      "checksum": 3388493016,
      "size": 492309,
      "key": {
        "type": "Buffer",
        "data": [
          43,
          166,
          250,
          229,
          70,
          183,
          141,
          125,
          69,
          49,
          208,
          53,
          84,
          99,
          181,
          63
        ]
      }
    },
    {
      "asset_id": "60f5f204-b8ef-4ebe-9bdd-e22f5e201ac6/1467338080582000",
      "bundle_name": "pm0075",
      "version": "1467338080582000",
      "checksum": 163117988,
      "size": 477029,
      "key": {
        "type": "Buffer",
        "data": [
          73,
          95,
          176,
          11,
          86,
          64,
          34,
          93,
          96,
          252,
          205,
          151,
          176,
          208,
          125,
          179
        ]
      }
    },
    {
      "asset_id": "656e67b5-45c5-4a97-bf61-ccd460fd0711/1467338026213000",
      "bundle_name": "pm0054",
      "version": "1467338026213000",
      "checksum": 2938158766,
      "size": 343813,
      "key": {
        "type": "Buffer",
        "data": [
          118,
          41,
          113,
          237,
          236,
          5,
          173,
          181,
          164,
          0,
          212,
          20,
          15,
          207,
          222,
          121
        ]
      }
    },
    {
      "asset_id": "65c79d4f-ce78-492f-9f44-39a387e8e06d/1467337935414000",
      "bundle_name": "pm0021",
      "version": "1467337935414000",
      "checksum": 2412734403,
      "size": 477333,
      "key": {
        "type": "Buffer",
        "data": [
          192,
          234,
          23,
          252,
          219,
          114,
          96,
          102,
          206,
          154,
          160,
          33,
          199,
          121,
          159,
          105
        ]
      }
    },
    {
      "asset_id": "6650afba-2aa8-45b3-874c-e54983595633/1467338088555000",
      "bundle_name": "pm0078",
      "version": "1467338088555000",
      "checksum": 3498661415,
      "size": 973781,
      "key": {
        "type": "Buffer",
        "data": [
          203,
          188,
          250,
          140,
          54,
          65,
          27,
          32,
          135,
          59,
          80,
          109,
          68,
          75,
          133,
          22
        ]
      }
    },
    {
      "asset_id": "668a3f63-9fd5-41b4-9964-532f467ad1c4/1467338039593000",
      "bundle_name": "pm0059",
      "version": "1467338039593000",
      "checksum": 1067980017,
      "size": 685941,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          190,
          225,
          212,
          152,
          137,
          222,
          157,
          170,
          82,
          59,
          149,
          54,
          131,
          87,
          233
        ]
      }
    },
    {
      "asset_id": "67bd4c6f-dcff-4f03-b90b-4a3713284945/1467337932685000",
      "bundle_name": "pm0020",
      "version": "1467337932685000",
      "checksum": 4211794890,
      "size": 537749,
      "key": {
        "type": "Buffer",
        "data": [
          33,
          107,
          64,
          27,
          8,
          101,
          150,
          69,
          121,
          213,
          86,
          112,
          1,
          178,
          41,
          239
        ]
      }
    },
    {
      "asset_id": "68d7da67-b04a-43e8-82bf-6b5b414c5c15/1467338157779000",
      "bundle_name": "pm0105",
      "version": "1467338157779000",
      "checksum": 3595829723,
      "size": 384405,
      "key": {
        "type": "Buffer",
        "data": [
          50,
          150,
          116,
          69,
          192,
          17,
          236,
          54,
          47,
          131,
          0,
          168,
          51,
          250,
          242,
          38
        ]
      }
    },
    {
      "asset_id": "6a30858b-c6a8-4e4c-a353-4cfc8f4433d4/1467338167524000",
      "bundle_name": "pm0109",
      "version": "1467338167524000",
      "checksum": 3471746952,
      "size": 280085,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          159,
          145,
          52,
          150,
          79,
          138,
          188,
          0,
          167,
          89,
          14,
          147,
          227,
          174,
          216
        ]
      }
    },
    {
      "asset_id": "6a7f5aad-3513-4a84-b106-d1e739929e7c/1467338160277000",
      "bundle_name": "pm0106",
      "version": "1467338160277000",
      "checksum": 3063475515,
      "size": 494101,
      "key": {
        "type": "Buffer",
        "data": [
          90,
          42,
          248,
          89,
          246,
          101,
          138,
          138,
          230,
          36,
          6,
          96,
          43,
          26,
          7,
          227
        ]
      }
    },
    {
      "asset_id": "6d2993b7-7fb3-43b2-8a33-0605c11b0f22/1467338124329000",
      "bundle_name": "pm0092",
      "version": "1467338124329000",
      "checksum": 1499681981,
      "size": 221701,
      "key": {
        "type": "Buffer",
        "data": [
          220,
          132,
          218,
          9,
          239,
          125,
          252,
          98,
          10,
          184,
          200,
          47,
          23,
          208,
          28,
          166
        ]
      }
    },
    {
      "asset_id": "6e6b531b-e153-4f70-831a-afed68fdafdb/1467337992497000",
      "bundle_name": "pm0042",
      "version": "1467337992497000",
      "checksum": 2197171195,
      "size": 389589,
      "key": {
        "type": "Buffer",
        "data": [
          162,
          4,
          220,
          222,
          2,
          8,
          112,
          118,
          94,
          192,
          196,
          201,
          20,
          238,
          243,
          192
        ]
      }
    },
    {
      "asset_id": "6f941a3b-9802-4357-bc8e-b5e5dbec4c15/1467338258380000",
      "bundle_name": "pm0144",
      "version": "1467338258380000",
      "checksum": 3142672630,
      "size": 657237,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          182,
          115,
          189,
          46,
          57,
          250,
          132,
          203,
          122,
          15,
          65,
          53,
          199,
          8,
          108
        ]
      }
    },
    {
      "asset_id": "7085574b-c71c-41f4-a698-9099b00bb8e7/1467338263523000",
      "bundle_name": "pm0146",
      "version": "1467338263523000",
      "checksum": 1469916896,
      "size": 773781,
      "key": {
        "type": "Buffer",
        "data": [
          116,
          157,
          13,
          140,
          197,
          114,
          7,
          38,
          77,
          72,
          59,
          231,
          213,
          213,
          202,
          193
        ]
      }
    },
    {
      "asset_id": "71adbf99-2bd1-441f-91b4-ae9a1a8150d6/1467338145315000",
      "bundle_name": "pm0100",
      "version": "1467338145315000",
      "checksum": 1050692229,
      "size": 210725,
      "key": {
        "type": "Buffer",
        "data": [
          3,
          180,
          79,
          231,
          17,
          196,
          164,
          250,
          57,
          96,
          247,
          126,
          82,
          18,
          3,
          232
        ]
      }
    },
    {
      "asset_id": "75f18b3a-b8ce-43f4-a964-3d6f634a9ffb/1467338067552000",
      "bundle_name": "pm0070",
      "version": "1467338067552000",
      "checksum": 465239564,
      "size": 229285,
      "key": {
        "type": "Buffer",
        "data": [
          147,
          79,
          69,
          147,
          206,
          128,
          98,
          28,
          3,
          231,
          201,
          179,
          98,
          202,
          233,
          164
        ]
      }
    },
    {
      "asset_id": "761bb130-8d7e-49fa-b8f0-9350cfec3b75/1467337966785000",
      "bundle_name": "pm0033",
      "version": "1467337966785000",
      "checksum": 2273269788,
      "size": 356965,
      "key": {
        "type": "Buffer",
        "data": [
          145,
          243,
          207,
          196,
          147,
          179,
          66,
          117,
          18,
          84,
          123,
          198,
          39,
          237,
          66,
          246
        ]
      }
    },
    {
      "asset_id": "7b212dc7-0fe9-4ffd-b817-f84f8c736c1e/1467337995444000",
      "bundle_name": "pm0043",
      "version": "1467337995444000",
      "checksum": 811231416,
      "size": 460997,
      "key": {
        "type": "Buffer",
        "data": [
          214,
          204,
          127,
          110,
          45,
          247,
          154,
          222,
          78,
          170,
          62,
          235,
          219,
          185,
          48,
          215
        ]
      }
    },
    {
      "asset_id": "7e362dac-1743-49e9-a8e2-090b179d7554/1467338186871000",
      "bundle_name": "pm0117",
      "version": "1467338186871000",
      "checksum": 3633190742,
      "size": 292725,
      "key": {
        "type": "Buffer",
        "data": [
          73,
          176,
          160,
          73,
          195,
          121,
          226,
          152,
          140,
          19,
          199,
          145,
          178,
          147,
          112,
          196
        ]
      }
    },
    {
      "asset_id": "7e8de255-1002-4a48-9f5a-84f9fd5510f0/1467338126821000",
      "bundle_name": "pm0093",
      "version": "1467338126821000",
      "checksum": 714286475,
      "size": 298277,
      "key": {
        "type": "Buffer",
        "data": [
          104,
          96,
          247,
          194,
          113,
          44,
          41,
          216,
          66,
          30,
          174,
          114,
          130,
          157,
          35,
          196
        ]
      }
    },
    {
      "asset_id": "7fd908f9-dc2a-44a5-81fd-ebb5b8092b75/1467337927308000",
      "bundle_name": "pm0018",
      "version": "1467337927308000",
      "checksum": 3065838426,
      "size": 613173,
      "key": {
        "type": "Buffer",
        "data": [
          206,
          202,
          79,
          51,
          172,
          93,
          119,
          125,
          139,
          29,
          239,
          81,
          160,
          221,
          131,
          231
        ]
      }
    },
    {
      "asset_id": "82749335-10dc-4c1f-8fae-c49f4bfb852a/1467338142911000",
      "bundle_name": "pm0099",
      "version": "1467338142911000",
      "checksum": 3276185780,
      "size": 406133,
      "key": {
        "type": "Buffer",
        "data": [
          229,
          239,
          134,
          205,
          65,
          131,
          71,
          187,
          250,
          150,
          25,
          120,
          163,
          120,
          243,
          168
        ]
      }
    },
    {
      "asset_id": "83086d0b-cd24-4d3f-9bb3-f749c7e650db/1467337945855000",
      "bundle_name": "pm0025",
      "version": "1467337945855000",
      "checksum": 120139418,
      "size": 465717,
      "key": {
        "type": "Buffer",
        "data": [
          4,
          157,
          221,
          158,
          255,
          11,
          13,
          36,
          98,
          200,
          192,
          228,
          131,
          12,
          182,
          115
        ]
      }
    },
    {
      "asset_id": "849a5f10-3566-4614-984e-b80ed981cd8a/1467338234893000",
      "bundle_name": "pm0135",
      "version": "1467338234893000",
      "checksum": 2515864049,
      "size": 583493,
      "key": {
        "type": "Buffer",
        "data": [
          190,
          198,
          222,
          44,
          74,
          113,
          44,
          141,
          232,
          131,
          96,
          163,
          249,
          139,
          199,
          152
        ]
      }
    },
    {
      "asset_id": "867591c6-7692-42d4-a0a8-4222f23b7862/1467338093814000",
      "bundle_name": "pm0080",
      "version": "1467338093814000",
      "checksum": 1501075165,
      "size": 488149,
      "key": {
        "type": "Buffer",
        "data": [
          71,
          26,
          87,
          240,
          82,
          95,
          189,
          219,
          242,
          193,
          102,
          74,
          182,
          242,
          67,
          138
        ]
      }
    },
    {
      "asset_id": "8677857d-a049-4da0-930c-66368372b8a9/1467337981363000",
      "bundle_name": "pm0038",
      "version": "1467337981363000",
      "checksum": 2031469732,
      "size": 782421,
      "key": {
        "type": "Buffer",
        "data": [
          55,
          174,
          118,
          105,
          156,
          34,
          116,
          218,
          90,
          89,
          135,
          62,
          25,
          207,
          95,
          195
        ]
      }
    },
    {
      "asset_id": "86c68f51-75a7-460b-9874-b3b3b21305b0/1467338181900000",
      "bundle_name": "pm0115",
      "version": "1467338181900000",
      "checksum": 929500556,
      "size": 567957,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          228,
          95,
          118,
          135,
          25,
          200,
          159,
          144,
          69,
          47,
          126,
          93,
          59,
          52,
          118
        ]
      }
    },
    {
      "asset_id": "86f48900-288a-4ec4-be07-2f3594bd3e4b/1467338034062000",
      "bundle_name": "pm0057",
      "version": "1467338034062000",
      "checksum": 878165086,
      "size": 399509,
      "key": {
        "type": "Buffer",
        "data": [
          74,
          108,
          1,
          246,
          114,
          212,
          92,
          65,
          116,
          179,
          104,
          26,
          202,
          173,
          249,
          137
        ]
      }
    },
    {
      "asset_id": "872f637f-ff47-42de-a3c1-6d3b59f27462/1467338138100000",
      "bundle_name": "pm0097",
      "version": "1467338138100000",
      "checksum": 2296406127,
      "size": 471381,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          194,
          66,
          195,
          67,
          2,
          223,
          154,
          210,
          158,
          89,
          44,
          213,
          1,
          192,
          18
        ]
      }
    },
    {
      "asset_id": "88cac46d-1a49-4856-b032-1aebd7c6b381/1467337896420000",
      "bundle_name": "pm0006",
      "version": "1467337896420000",
      "checksum": 1853949044,
      "size": 572885,
      "key": {
        "type": "Buffer",
        "data": [
          21,
          191,
          32,
          47,
          87,
          241,
          82,
          175,
          82,
          31,
          216,
          97,
          20,
          23,
          96,
          44
        ]
      }
    },
    {
      "asset_id": "8cc5523b-411e-46fd-a9e5-ff23a99a3ab8/1467338100922000",
      "bundle_name": "pm0083",
      "version": "1467338100922000",
      "checksum": 2480815007,
      "size": 522549,
      "key": {
        "type": "Buffer",
        "data": [
          248,
          58,
          232,
          225,
          55,
          200,
          87,
          92,
          199,
          89,
          178,
          250,
          214,
          127,
          110,
          131
        ]
      }
    },
    {
      "asset_id": "90f8eb5d-c398-4e9e-a53d-82c6367521db/1467338255908000",
      "bundle_name": "pm0143",
      "version": "1467338255908000",
      "checksum": 4281405046,
      "size": 374549,
      "key": {
        "type": "Buffer",
        "data": [
          130,
          86,
          102,
          67,
          128,
          43,
          69,
          203,
          207,
          49,
          25,
          123,
          103,
          7,
          198,
          100
        ]
      }
    },
    {
      "asset_id": "91bf0b0e-f0b9-44cf-bc2d-aae6521238aa/1467338017489000",
      "bundle_name": "pm0051",
      "version": "1467338017489000",
      "checksum": 2406519212,
      "size": 383461,
      "key": {
        "type": "Buffer",
        "data": [
          31,
          46,
          211,
          118,
          27,
          153,
          65,
          225,
          67,
          35,
          202,
          178,
          106,
          204,
          90,
          113
        ]
      }
    },
    {
      "asset_id": "9204b839-1500-4081-9636-92da623bc180/1467338036790000",
      "bundle_name": "pm0058",
      "version": "1467338036790000",
      "checksum": 1455762000,
      "size": 648405,
      "key": {
        "type": "Buffer",
        "data": [
          28,
          177,
          136,
          200,
          172,
          84,
          227,
          156,
          253,
          56,
          35,
          119,
          38,
          225,
          17,
          75
        ]
      }
    },
    {
      "asset_id": "95f269e8-dcbf-4b44-b119-3778a3ca01a8/1467338116951000",
      "bundle_name": "pm0089",
      "version": "1467338116951000",
      "checksum": 3522806455,
      "size": 982613,
      "key": {
        "type": "Buffer",
        "data": [
          176,
          7,
          97,
          62,
          121,
          201,
          197,
          227,
          17,
          246,
          229,
          15,
          99,
          133,
          216,
          61
        ]
      }
    },
    {
      "asset_id": "9649e04b-ccd8-4b1c-b066-cc75ed4c0976/1467338147687000",
      "bundle_name": "pm0101",
      "version": "1467338147687000",
      "checksum": 3190872357,
      "size": 169205,
      "key": {
        "type": "Buffer",
        "data": [
          8,
          135,
          172,
          251,
          101,
          127,
          207,
          148,
          42,
          144,
          247,
          199,
          14,
          89,
          24,
          123
        ]
      }
    },
    {
      "asset_id": "9782fac9-55ef-4e4d-be9a-81817056c1cb/1467337940860000",
      "bundle_name": "pm0023",
      "version": "1467337940860000",
      "checksum": 1298886450,
      "size": 297333,
      "key": {
        "type": "Buffer",
        "data": [
          9,
          249,
          146,
          21,
          105,
          66,
          65,
          179,
          50,
          121,
          92,
          231,
          127,
          116,
          85,
          100
        ]
      }
    },
    {
      "asset_id": "9798a501-8ad0-485f-8cd4-709551b3758d/1467337969283000",
      "bundle_name": "pm0034",
      "version": "1467337969283000",
      "checksum": 3066867897,
      "size": 446389,
      "key": {
        "type": "Buffer",
        "data": [
          253,
          126,
          178,
          182,
          234,
          116,
          107,
          91,
          87,
          87,
          129,
          236,
          205,
          15,
          151,
          62
        ]
      }
    },
    {
      "asset_id": "982db0ce-e85c-4991-a7ea-c6bfc431d6df/1467338232272000",
      "bundle_name": "pm0134",
      "version": "1467338232272000",
      "checksum": 2283576118,
      "size": 499925,
      "key": {
        "type": "Buffer",
        "data": [
          183,
          87,
          82,
          159,
          63,
          173,
          211,
          197,
          0,
          67,
          229,
          93,
          176,
          163,
          125,
          9
        ]
      }
    },
    {
      "asset_id": "9a7d43d7-f59e-4187-8fe5-d9b51512f73b/1467338149748000",
      "bundle_name": "pm0102",
      "version": "1467338149748000",
      "checksum": 1284870369,
      "size": 322629,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          158,
          103,
          167,
          247,
          86,
          248,
          3,
          121,
          56,
          106,
          170,
          176,
          73,
          145,
          99
        ]
      }
    },
    {
      "asset_id": "9f845f0c-f0b5-4c54-bc6a-de6b3724dac6/1467337978708000",
      "bundle_name": "pm0037",
      "version": "1467337978708000",
      "checksum": 3666665656,
      "size": 505445,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          30,
          208,
          74,
          147,
          185,
          91,
          99,
          38,
          150,
          149,
          152,
          91,
          156,
          178,
          215
        ]
      }
    },
    {
      "asset_id": "9ffa2321-4d32-49d3-925e-655eb95b1dab/1467338062038000",
      "bundle_name": "pm0068",
      "version": "1467338062038000",
      "checksum": 732215516,
      "size": 746341,
      "key": {
        "type": "Buffer",
        "data": [
          3,
          149,
          80,
          37,
          219,
          1,
          54,
          49,
          91,
          218,
          18,
          169,
          16,
          188,
          133,
          66
        ]
      }
    },
    {
      "asset_id": "a2199b3b-8e52-4cdb-b6a6-fb24cc682d03/1467338140520000",
      "bundle_name": "pm0098",
      "version": "1467338140520000",
      "checksum": 469557019,
      "size": 381685,
      "key": {
        "type": "Buffer",
        "data": [
          62,
          141,
          73,
          190,
          218,
          247,
          230,
          27,
          86,
          243,
          155,
          101,
          0,
          213,
          220,
          177
        ]
      }
    },
    {
      "asset_id": "a3ce2768-59fd-4bd4-8401-91fdae046c41/1467338014401000",
      "bundle_name": "pm0050",
      "version": "1467338014401000",
      "checksum": 910041377,
      "size": 176885,
      "key": {
        "type": "Buffer",
        "data": [
          154,
          86,
          228,
          117,
          237,
          2,
          103,
          6,
          65,
          133,
          230,
          229,
          1,
          140,
          63,
          178
        ]
      }
    },
    {
      "asset_id": "a3fafe10-33e1-43f1-8535-711d81918852/1467338108798000",
      "bundle_name": "pm0086",
      "version": "1467338108798000",
      "checksum": 2535874066,
      "size": 341781,
      "key": {
        "type": "Buffer",
        "data": [
          101,
          50,
          174,
          4,
          133,
          160,
          103,
          2,
          11,
          10,
          4,
          30,
          216,
          200,
          113,
          215
        ]
      }
    },
    {
      "asset_id": "a6d5d201-4e4c-4d71-9319-56f62e25882f/1467338054656000",
      "bundle_name": "pm0065",
      "version": "1467338054656000",
      "checksum": 1016610242,
      "size": 598069,
      "key": {
        "type": "Buffer",
        "data": [
          249,
          230,
          22,
          145,
          156,
          207,
          203,
          196,
          154,
          115,
          153,
          200,
          215,
          230,
          221,
          147
        ]
      }
    },
    {
      "asset_id": "a6eb9e98-0aa3-48bb-998a-6b329801b2ad/1467337911447000",
      "bundle_name": "pm0012",
      "version": "1467337911447000",
      "checksum": 1850275216,
      "size": 261829,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          182,
          35,
          57,
          62,
          52,
          177,
          184,
          67,
          207,
          148,
          88,
          76,
          241,
          224,
          241
        ]
      }
    },
    {
      "asset_id": "a7083104-fe2b-44c9-9155-4decaababcfc/1467338271291000",
      "bundle_name": "pm0149",
      "version": "1467338271291000",
      "checksum": 2540801543,
      "size": 444901,
      "key": {
        "type": "Buffer",
        "data": [
          194,
          109,
          85,
          232,
          72,
          55,
          53,
          185,
          99,
          189,
          62,
          67,
          199,
          121,
          102,
          128
        ]
      }
    },
    {
      "asset_id": "a915ef31-bbfb-4fc9-a035-fdc38bd58a24/1467337930032000",
      "bundle_name": "pm0019",
      "version": "1467337930032000",
      "checksum": 3904900246,
      "size": 512853,
      "key": {
        "type": "Buffer",
        "data": [
          48,
          145,
          72,
          208,
          150,
          47,
          16,
          163,
          237,
          101,
          54,
          107,
          74,
          226,
          219,
          243
        ]
      }
    },
    {
      "asset_id": "a9d06dc8-0750-4629-bc8f-9a11345b558f/1467337948760000",
      "bundle_name": "pm0026",
      "version": "1467337948760000",
      "checksum": 2332695828,
      "size": 579349,
      "key": {
        "type": "Buffer",
        "data": [
          159,
          94,
          13,
          63,
          106,
          217,
          235,
          188,
          127,
          254,
          67,
          20,
          155,
          198,
          135,
          209
        ]
      }
    },
    {
      "asset_id": "ae51a22a-731b-49d2-950e-449fa67f6927/1467338192115000",
      "bundle_name": "pm0119",
      "version": "1467338192115000",
      "checksum": 2587982253,
      "size": 348981,
      "key": {
        "type": "Buffer",
        "data": [
          28,
          136,
          247,
          51,
          227,
          239,
          243,
          74,
          144,
          142,
          204,
          5,
          150,
          2,
          240,
          21
        ]
      }
    },
    {
      "asset_id": "b1ff5ff8-1824-4d58-8cc7-29935f3bc4c6/1467337953914000",
      "bundle_name": "pm0028",
      "version": "1467337953914000",
      "checksum": 1031722435,
      "size": 494469,
      "key": {
        "type": "Buffer",
        "data": [
          79,
          53,
          199,
          146,
          43,
          138,
          254,
          37,
          31,
          58,
          20,
          79,
          147,
          15,
          85,
          149
        ]
      }
    },
    {
      "asset_id": "b446137a-d9b4-4d0b-b70f-f0b0b7e289e8/1467337901908000",
      "bundle_name": "pm0008",
      "version": "1467337901908000",
      "checksum": 2338263571,
      "size": 388821,
      "key": {
        "type": "Buffer",
        "data": [
          254,
          63,
          14,
          35,
          46,
          53,
          134,
          224,
          2,
          95,
          211,
          137,
          58,
          207,
          253,
          0
        ]
      }
    },
    {
      "asset_id": "b4fedf0e-bfd0-42c9-b264-6730b279bd1c/1467338111327000",
      "bundle_name": "pm0087",
      "version": "1467338111327000",
      "checksum": 199691426,
      "size": 306757,
      "key": {
        "type": "Buffer",
        "data": [
          228,
          82,
          116,
          43,
          216,
          201,
          84,
          81,
          28,
          161,
          159,
          47,
          183,
          40,
          69,
          198
        ]
      }
    },
    {
      "asset_id": "b621414f-3577-4b98-b082-67c308be6bef/1467338028928000",
      "bundle_name": "pm0055",
      "version": "1467338028928000",
      "checksum": 711230727,
      "size": 419365,
      "key": {
        "type": "Buffer",
        "data": [
          213,
          0,
          179,
          195,
          123,
          178,
          47,
          95,
          77,
          99,
          169,
          149,
          219,
          156,
          9,
          81
        ]
      }
    },
    {
      "asset_id": "b641049d-2f98-4b2d-9a6d-002d881c1baf/1467338049783000",
      "bundle_name": "pm0063",
      "version": "1467338049783000",
      "checksum": 993896222,
      "size": 351109,
      "key": {
        "type": "Buffer",
        "data": [
          231,
          34,
          33,
          33,
          66,
          211,
          200,
          48,
          128,
          35,
          79,
          33,
          226,
          246,
          5,
          170
        ]
      }
    },
    {
      "asset_id": "b8ee4922-043e-428f-badc-29086d57e469/1467338106393000",
      "bundle_name": "pm0085",
      "version": "1467338106393000",
      "checksum": 4073312204,
      "size": 640005,
      "key": {
        "type": "Buffer",
        "data": [
          193,
          6,
          165,
          4,
          115,
          241,
          99,
          250,
          79,
          133,
          89,
          196,
          84,
          249,
          48,
          16
        ]
      }
    },
    {
      "asset_id": "bd1d3e66-2bee-4d16-92c1-a8a4379b5450/1467338250695000",
      "bundle_name": "pm0141",
      "version": "1467338250695000",
      "checksum": 779316821,
      "size": 438645,
      "key": {
        "type": "Buffer",
        "data": [
          36,
          143,
          111,
          39,
          77,
          160,
          161,
          245,
          176,
          15,
          0,
          53,
          29,
          17,
          148,
          16
        ]
      }
    },
    {
      "asset_id": "be18774d-1d92-42eb-8115-fe9188b396be/1467338169880000",
      "bundle_name": "pm0110",
      "version": "1467338169880000",
      "checksum": 3792637673,
      "size": 489013,
      "key": {
        "type": "Buffer",
        "data": [
          245,
          159,
          55,
          29,
          70,
          44,
          143,
          93,
          104,
          181,
          6,
          77,
          161,
          229,
          143,
          8
        ]
      }
    },
    {
      "asset_id": "be947b4a-0ed8-46de-a204-b72527691591/1467338005667000",
      "bundle_name": "pm0047",
      "version": "1467338005667000",
      "checksum": 561670117,
      "size": 452853,
      "key": {
        "type": "Buffer",
        "data": [
          37,
          36,
          171,
          68,
          70,
          194,
          175,
          246,
          54,
          240,
          227,
          6,
          136,
          132,
          92,
          224
        ]
      }
    },
    {
      "asset_id": "c181116c-751a-486f-b0b4-b011a8185896/1467338155179000",
      "bundle_name": "pm0104",
      "version": "1467338155179000",
      "checksum": 2162023416,
      "size": 425333,
      "key": {
        "type": "Buffer",
        "data": [
          243,
          242,
          137,
          22,
          249,
          37,
          243,
          246,
          117,
          27,
          97,
          139,
          118,
          137,
          174,
          104
        ]
      }
    },
    {
      "asset_id": "c202565e-effb-41bd-8c5a-af3cd7c2eaf3/1467338276561000",
      "bundle_name": "pm0151",
      "version": "1467338276561000",
      "checksum": 1673533849,
      "size": 375925,
      "key": {
        "type": "Buffer",
        "data": [
          62,
          105,
          158,
          110,
          54,
          118,
          62,
          121,
          7,
          25,
          125,
          158,
          3,
          29,
          201,
          172
        ]
      }
    },
    {
      "asset_id": "c2fcd247-eb50-4aff-a1f6-986efc110547/1467338078050000",
      "bundle_name": "pm0074",
      "version": "1467338078050000",
      "checksum": 4036019335,
      "size": 339061,
      "key": {
        "type": "Buffer",
        "data": [
          33,
          224,
          185,
          144,
          37,
          31,
          209,
          212,
          179,
          185,
          198,
          56,
          69,
          75,
          114,
          93
        ]
      }
    },
    {
      "asset_id": "c3fa7137-ad8e-4bcf-afde-420236d60577/1467337914235000",
      "bundle_name": "pm0013",
      "version": "1467337914235000",
      "checksum": 3505463589,
      "size": 227525,
      "key": {
        "type": "Buffer",
        "data": [
          177,
          117,
          130,
          168,
          189,
          233,
          190,
          46,
          153,
          152,
          98,
          97,
          77,
          206,
          202,
          133
        ]
      }
    },
    {
      "asset_id": "c6348525-ea4e-4b89-a3ed-6a8c65dc74bf/1467338121786000",
      "bundle_name": "pm0091",
      "version": "1467338121786000",
      "checksum": 3790931487,
      "size": 257141,
      "key": {
        "type": "Buffer",
        "data": [
          0,
          20,
          224,
          52,
          13,
          215,
          28,
          59,
          55,
          65,
          72,
          52,
          248,
          106,
          64,
          203
        ]
      }
    },
    {
      "asset_id": "c8d5aa13-d467-4564-97d7-ea5d51b1f4bf/1467338184556000",
      "bundle_name": "pm0116",
      "version": "1467338184556000",
      "checksum": 2330836158,
      "size": 268613,
      "key": {
        "type": "Buffer",
        "data": [
          144,
          119,
          155,
          131,
          23,
          147,
          158,
          163,
          135,
          37,
          157,
          108,
          73,
          161,
          1,
          212
        ]
      }
    },
    {
      "asset_id": "c8e96216-f9cd-4982-94f9-c41f0e0494b2/1467338065163000",
      "bundle_name": "pm0069",
      "version": "1467338065163000",
      "checksum": 1482305660,
      "size": 522949,
      "key": {
        "type": "Buffer",
        "data": [
          237,
          45,
          134,
          60,
          127,
          65,
          232,
          43,
          180,
          76,
          197,
          193,
          100,
          235,
          23,
          251
        ]
      }
    },
    {
      "asset_id": "c918d441-8f37-4155-b824-0ed67f64cb5b/1467338237623000",
      "bundle_name": "pm0136",
      "version": "1467338237623000",
      "checksum": 1311375318,
      "size": 579397,
      "key": {
        "type": "Buffer",
        "data": [
          49,
          21,
          157,
          62,
          73,
          22,
          81,
          165,
          10,
          193,
          159,
          83,
          143,
          102,
          244,
          5
        ]
      }
    },
    {
      "asset_id": "ca81f72e-4db5-44c9-a293-087344b9ed2c/1467338226487000",
      "bundle_name": "pm0132",
      "version": "1467338226487000",
      "checksum": 3432597999,
      "size": 311317,
      "key": {
        "type": "Buffer",
        "data": [
          191,
          164,
          82,
          106,
          206,
          75,
          58,
          137,
          90,
          211,
          232,
          6,
          23,
          112,
          32,
          190
        ]
      }
    },
    {
      "asset_id": "cabf7f29-494e-4ef6-8f8f-0faa1b504316/1467338253248000",
      "bundle_name": "pm0142",
      "version": "1467338253248000",
      "checksum": 2359376288,
      "size": 548421,
      "key": {
        "type": "Buffer",
        "data": [
          83,
          74,
          253,
          226,
          242,
          85,
          67,
          5,
          214,
          196,
          167,
          75,
          243,
          2,
          64,
          182
        ]
      }
    },
    {
      "asset_id": "cc508127-5b49-4ca8-9cf7-8201ba4a0c40/1467337887933000",
      "bundle_name": "pm0003",
      "version": "1467337887933000",
      "checksum": 1178323715,
      "size": 470597,
      "key": {
        "type": "Buffer",
        "data": [
          255,
          160,
          32,
          30,
          144,
          228,
          103,
          202,
          241,
          186,
          123,
          81,
          221,
          90,
          215,
          239
        ]
      }
    },
    {
      "asset_id": "ce9f53bb-fb8d-4f6a-bd14-b45e6d8d29b6/1467337921866000",
      "bundle_name": "pm0016",
      "version": "1467337921866000",
      "checksum": 3886671188,
      "size": 462501,
      "key": {
        "type": "Buffer",
        "data": [
          253,
          204,
          112,
          10,
          180,
          199,
          39,
          108,
          140,
          251,
          165,
          69,
          70,
          61,
          59,
          215
        ]
      }
    },
    {
      "asset_id": "cec1b247-61a2-44ca-a4ca-8ff5563d6c80/1467338031373000",
      "bundle_name": "pm0056",
      "version": "1467338031373000",
      "checksum": 2642995446,
      "size": 450053,
      "key": {
        "type": "Buffer",
        "data": [
          230,
          106,
          68,
          185,
          34,
          176,
          20,
          79,
          83,
          218,
          166,
          101,
          253,
          54,
          62,
          237
        ]
      }
    },
    {
      "asset_id": "cf10bb9b-cde8-40b4-b48f-8cf7250ccb8f/1467338260989000",
      "bundle_name": "pm0145",
      "version": "1467338260989000",
      "checksum": 746525283,
      "size": 524981,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          117,
          11,
          80,
          0,
          153,
          30,
          71,
          77,
          129,
          118,
          168,
          57,
          119,
          6,
          126
        ]
      }
    },
    {
      "asset_id": "d31f77fd-da42-4b98-807d-578b3297a155/1467338132818000",
      "bundle_name": "pm0095",
      "version": "1467338132818000",
      "checksum": 3479299263,
      "size": 385061,
      "key": {
        "type": "Buffer",
        "data": [
          219,
          81,
          21,
          128,
          244,
          205,
          80,
          158,
          15,
          151,
          195,
          245,
          35,
          216,
          233,
          152
        ]
      }
    },
    {
      "asset_id": "d449b9b0-2f5b-4148-9de5-a7cc45483d39/1467338057204000",
      "bundle_name": "pm0066",
      "version": "1467338057204000",
      "checksum": 905613009,
      "size": 496773,
      "key": {
        "type": "Buffer",
        "data": [
          242,
          236,
          13,
          203,
          212,
          116,
          178,
          83,
          188,
          93,
          142,
          105,
          159,
          131,
          62,
          138
        ]
      }
    },
    {
      "asset_id": "d86c65f7-d521-4aa1-9324-d2690d8a61a0/1467337989725000",
      "bundle_name": "pm0041",
      "version": "1467337989725000",
      "checksum": 1904595890,
      "size": 250725,
      "key": {
        "type": "Buffer",
        "data": [
          202,
          5,
          83,
          30,
          200,
          0,
          221,
          52,
          152,
          8,
          230,
          223,
          255,
          94,
          74,
          29
        ]
      }
    },
    {
      "asset_id": "d9e0e2c6-eead-4037-b387-b004446ae72e/1467338218551000",
      "bundle_name": "pm0129",
      "version": "1467338218551000",
      "checksum": 980125566,
      "size": 288885,
      "key": {
        "type": "Buffer",
        "data": [
          209,
          4,
          61,
          11,
          199,
          46,
          227,
          61,
          143,
          149,
          46,
          162,
          117,
          132,
          159,
          76
        ]
      }
    },
    {
      "asset_id": "dcd89218-66fa-4ea3-a549-7d49df98b5d1/1467338199666000",
      "bundle_name": "pm0122",
      "version": "1467338199666000",
      "checksum": 2280286951,
      "size": 603957,
      "key": {
        "type": "Buffer",
        "data": [
          127,
          30,
          200,
          215,
          166,
          140,
          205,
          235,
          43,
          120,
          156,
          236,
          71,
          81,
          166,
          5
        ]
      }
    },
    {
      "asset_id": "df8ecae4-0e86-4a72-863c-7d77b6616082/1467337893350000",
      "bundle_name": "pm0005",
      "version": "1467337893350000",
      "checksum": 1457352906,
      "size": 533077,
      "key": {
        "type": "Buffer",
        "data": [
          81,
          35,
          11,
          241,
          155,
          168,
          33,
          69,
          22,
          245,
          124,
          21,
          186,
          231,
          15,
          28
        ]
      }
    },
    {
      "asset_id": "e43f5bcd-e16e-47aa-aca3-10f3d1933c6f/1467338042090000",
      "bundle_name": "pm0060",
      "version": "1467338042090000",
      "checksum": 383772761,
      "size": 265429,
      "key": {
        "type": "Buffer",
        "data": [
          42,
          55,
          18,
          65,
          254,
          79,
          107,
          24,
          30,
          15,
          71,
          13,
          212,
          58,
          134,
          232
        ]
      }
    },
    {
      "asset_id": "e5804dfa-9982-4930-8ef3-2a97d09531b3/1467338210041000",
      "bundle_name": "pm0126",
      "version": "1467338210041000",
      "checksum": 670604132,
      "size": 784165,
      "key": {
        "type": "Buffer",
        "data": [
          117,
          7,
          57,
          61,
          50,
          220,
          226,
          222,
          170,
          182,
          120,
          56,
          154,
          217,
          254,
          98
        ]
      }
    },
    {
      "asset_id": "e6e133f7-fd03-458b-90d7-f870346afd9d/1467338075280000",
      "bundle_name": "pm0073",
      "version": "1467338075280000",
      "checksum": 349393447,
      "size": 502805,
      "key": {
        "type": "Buffer",
        "data": [
          100,
          10,
          123,
          66,
          149,
          247,
          105,
          12,
          158,
          177,
          208,
          191,
          222,
          48,
          50,
          230
        ]
      }
    },
    {
      "asset_id": "eb7ef4bc-25b0-4421-a41e-782c3c22a931/1467338223728000",
      "bundle_name": "pm0131",
      "version": "1467338223728000",
      "checksum": 1211254127,
      "size": 479029,
      "key": {
        "type": "Buffer",
        "data": [
          191,
          130,
          115,
          147,
          22,
          24,
          66,
          155,
          111,
          239,
          61,
          187,
          230,
          183,
          157,
          21
        ]
      }
    },
    {
      "asset_id": "eba66e6c-ae77-4e10-8441-375219929090/1467338072670000",
      "bundle_name": "pm0072",
      "version": "1467338072670000",
      "checksum": 249041989,
      "size": 250837,
      "key": {
        "type": "Buffer",
        "data": [
          20,
          207,
          241,
          130,
          77,
          219,
          36,
          242,
          17,
          148,
          114,
          144,
          89,
          69,
          164,
          114
        ]
      }
    },
    {
      "asset_id": "ebbd93a9-ee72-4a43-bd45-a69d68e52082/1467338245369000",
      "bundle_name": "pm0139",
      "version": "1467338245369000",
      "checksum": 1978528497,
      "size": 467253,
      "key": {
        "type": "Buffer",
        "data": [
          126,
          118,
          147,
          173,
          232,
          218,
          26,
          39,
          175,
          9,
          176,
          39,
          146,
          24,
          96,
          74
        ]
      }
    },
    {
      "asset_id": "ecc76b6a-25de-4aa8-a5f0-2c1271986c9c/1467337938081000",
      "bundle_name": "pm0022",
      "version": "1467337938081000",
      "checksum": 3886647129,
      "size": 694853,
      "key": {
        "type": "Buffer",
        "data": [
          181,
          217,
          47,
          90,
          69,
          76,
          140,
          213,
          27,
          8,
          225,
          220,
          29,
          227,
          52,
          231
        ]
      }
    },
    {
      "asset_id": "ece95758-618b-40f4-92b8-97015de97e12/1467338083406000",
      "bundle_name": "pm0076",
      "version": "1467338083406000",
      "checksum": 1255437993,
      "size": 582533,
      "key": {
        "type": "Buffer",
        "data": [
          85,
          117,
          93,
          200,
          222,
          16,
          127,
          89,
          38,
          196,
          70,
          146,
          172,
          255,
          129,
          215
        ]
      }
    },
    {
      "asset_id": "ed66ce66-3013-4a4e-99ea-564351cdddd1/1467338023538000",
      "bundle_name": "pm0053",
      "version": "1467338023538000",
      "checksum": 2415520234,
      "size": 424917,
      "key": {
        "type": "Buffer",
        "data": [
          4,
          104,
          64,
          172,
          25,
          107,
          184,
          249,
          24,
          231,
          115,
          134,
          170,
          137,
          243,
          183
        ]
      }
    },
    {
      "asset_id": "ef4b7240-51a4-4e6a-aba2-c50b3db87e8a/1467338220999000",
      "bundle_name": "pm0130",
      "version": "1467338220999000",
      "checksum": 3564448918,
      "size": 474165,
      "key": {
        "type": "Buffer",
        "data": [
          131,
          175,
          91,
          68,
          203,
          167,
          124,
          245,
          42,
          14,
          106,
          33,
          254,
          105,
          138,
          113
        ]
      }
    },
    {
      "asset_id": "f03b2196-af8b-48cc-b908-33726f87c2cb/1467338196940000",
      "bundle_name": "pm0121",
      "version": "1467338196940000",
      "checksum": 1945191842,
      "size": 286293,
      "key": {
        "type": "Buffer",
        "data": [
          13,
          254,
          120,
          40,
          134,
          172,
          228,
          110,
          121,
          108,
          104,
          208,
          24,
          247,
          139,
          145
        ]
      }
    },
    {
      "asset_id": "f1e99bfb-f316-473d-a587-88fbeed3c61d/1467337924726000",
      "bundle_name": "pm0017",
      "version": "1467337924726000",
      "checksum": 927906204,
      "size": 472037,
      "key": {
        "type": "Buffer",
        "data": [
          205,
          34,
          163,
          53,
          191,
          73,
          239,
          94,
          202,
          167,
          146,
          71,
          63,
          195,
          181,
          110
        ]
      }
    },
    {
      "asset_id": "f2e3b179-4d37-493e-a5ee-2504d8cd4c7f/1467338059623000",
      "bundle_name": "pm0067",
      "version": "1467338059623000",
      "checksum": 409184053,
      "size": 523733,
      "key": {
        "type": "Buffer",
        "data": [
          140,
          24,
          216,
          85,
          71,
          188,
          44,
          2,
          113,
          175,
          169,
          55,
          54,
          190,
          1,
          153
        ]
      }
    },
    {
      "asset_id": "f3a3150a-9cf9-4adf-9b9c-1fc1dd88a31a/1467337890581000",
      "bundle_name": "pm0004",
      "version": "1467337890581000",
      "checksum": 2546864236,
      "size": 471957,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          167,
          21,
          226,
          87,
          223,
          146,
          28,
          253,
          218,
          94,
          180,
          203,
          90,
          39,
          98
        ]
      }
    },
    {
      "asset_id": "f65cd1c3-d38c-4eaf-a6d0-731c679a51c9/1467338103657000",
      "bundle_name": "pm0084",
      "version": "1467338103657000",
      "checksum": 3074575148,
      "size": 435141,
      "key": {
        "type": "Buffer",
        "data": [
          181,
          57,
          113,
          37,
          101,
          97,
          98,
          155,
          77,
          143,
          60,
          197,
          199,
          124,
          44,
          219
        ]
      }
    },
    {
      "asset_id": "f9196986-24e0-4ed6-9ab4-da74c18df074/1467337956406000",
      "bundle_name": "pm0029",
      "version": "1467337956406000",
      "checksum": 3735682586,
      "size": 376181,
      "key": {
        "type": "Buffer",
        "data": [
          244,
          13,
          158,
          218,
          18,
          204,
          157,
          240,
          81,
          88,
          83,
          187,
          70,
          230,
          207,
          246
        ]
      }
    },
    {
      "asset_id": "faab237d-cf8a-4c73-b5fe-4c04a7acb77e/1467338242729000",
      "bundle_name": "pm0138",
      "version": "1467338242729000",
      "checksum": 3838369959,
      "size": 370773,
      "key": {
        "type": "Buffer",
        "data": [
          126,
          223,
          157,
          178,
          73,
          42,
          106,
          164,
          81,
          249,
          116,
          5,
          44,
          145,
          78,
          60
        ]
      }
    },
    {
      "asset_id": "fc7d2574-7176-4c18-ba33-9090a0df84d0/1467338274036000",
      "bundle_name": "pm0150",
      "version": "1467338274036000",
      "checksum": 2612302599,
      "size": 474229,
      "key": {
        "type": "Buffer",
        "data": [
          243,
          39,
          44,
          91,
          44,
          242,
          216,
          6,
          206,
          111,
          239,
          242,
          86,
          174,
          60,
          200
        ]
      }
    }
  ],
    "timestamp_ms": "1467338276561000",
    "$unknownFields": []
}
5:33:55 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:55 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:33:55 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472257846656",
      "new_timestamp_ms": "1472257846656",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:33:55 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:33:55 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:57 PM [Request] LevelUpRewards {
  "level": 13,
    "$unknownFields": []
}
5:33:57 PM [Request] CheckChallenge {}
5:33:57 PM [Request] GetHatchedEggs {}
5:33:57 PM [Request] GetInventory {
  "last_timestamp_ms": "1472257846656",
    "$unknownFields": []
}
5:33:57 PM [Request] CheckAwardedBadges {}
5:33:57 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:57 PM [Request] GetIncensePokemon {
  "player_latitude": 37.76359939575195,
    "player_longitude": -122.40165710449219,
    "$unknownFields": []
}
5:33:57 PM [Response] LevelUpRewards {
  "result": "AWARDED_ALREADY",
    "items_awarded": [],
    "items_unlocked": [],
    "$unknownFields": []
}
5:33:57 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:57 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:33:57 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472257846656",
      "new_timestamp_ms": "1472258036760",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:33:57 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:33:57 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:57 PM [Response] GetIncensePokemon {
  "result": "INCENSE_ENCOUNTER_NOT_AVAILABLE",
    "$unknownFields": []
}
5:33:57 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263761708516638720",
    "9263761710664122368",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.76359939575195,
    "longitude": -122.40165710449219,
    "$unknownFields": []
}
5:33:57 PM [Request] CheckChallenge {}
5:33:57 PM [Request] GetHatchedEggs {}
5:33:57 PM [Request] GetInventory {
  "last_timestamp_ms": "1472257846656",
    "$unknownFields": []
}
5:33:57 PM [Request] CheckAwardedBadges {}
5:33:57 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:57 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 420.08929443359375,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 378.84918212890625,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 432.5594177246094,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 487.40496826171875,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 168.22796630859375,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 183.55384826660156,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472257969941",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "737",
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 450.2445068359375,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 321.06805419921875,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258036909",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 377.4869689941406,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113946814",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258041416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258021078",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "YELLOW",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "1902",
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "11044074643425148189"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 197.66571044921875,
          "encounter_id": "14965414971942974557",
          "fort_id": "f733930e1b424fa785a64cd96e6d2427.16",
          "fort_image_url": "http://lh4.ggpht.com/WwCzFCDzTLB73_YxA2vfRtwWqfIGJi-Vroo3qxwB5F_faQPD0pASG3Z1XY3YFxdCOTZ8oXQluEGW_ntwti4"
        },
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472257962014",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "5500",
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 450.5210266113281,
          "encounter_id": "4176183687967129517",
          "fort_id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "fort_image_url": "http://lh5.ggpht.com/q9lT1EcK_UjyvpYpXw5NstGWyhU6ZyqxOkX2-HlF0R-jukQK5kvmllTfHnHWpbgMlXT7vCsBjxeuaJySyKEd"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 368.7882385253906,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 245.9263153076172,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 245.9263153076172,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    },
    {
      "s2_cell_id": "9263761708516638720",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "0f3873e6e7574771b6222f01e9036d88.16",
          "last_modified_timestamp_ms": "1472035498214",
          "latitude": 37.763025,
          "longitude": -122.409094,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "796cd9803dfc43b99acd2bb26ca2b3e0.16",
          "last_modified_timestamp_ms": "1472153895184",
          "latitude": 37.761797,
          "longitude": -122.408524,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c1a7467df3674060a1ee242d1a788157.16",
          "last_modified_timestamp_ms": "1472204985702",
          "latitude": 37.763266,
          "longitude": -122.407918,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "dd858775791b412780feb18a9dd80e1a.16",
          "last_modified_timestamp_ms": "1472248000441",
          "latitude": 37.763327,
          "longitude": -122.407177,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761710664122368",
      "current_timestamp_ms": "1472258036909",
      "forts": [
        {
          "id": "195cecfd58c94443a73d5fb40b7e5282.16",
          "last_modified_timestamp_ms": "1472258019130",
          "latitude": 37.765084,
          "longitude": -122.40719,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "ARCANINE",
          "gym_points": "2000",
          "active_fort_modifier": []
        },
        {
          "id": "3895c687a1b64973b4ffc35df92e5919.16",
          "last_modified_timestamp_ms": "1472232708232",
          "latitude": 37.763958,
          "longitude": -122.408268,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "61de56ec25bd4b8b99b04a753c3df624.16",
          "last_modified_timestamp_ms": "1472249166801",
          "latitude": 37.763834,
          "longitude": -122.407587,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c423578305fa46a7989f9448777c5ed5.16",
          "last_modified_timestamp_ms": "1472249936822",
          "latitude": 37.765594,
          "longitude": -122.407383,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ca6faacc02c646cd9246e8d3e8d1ddef.16",
          "last_modified_timestamp_ms": "1472255044482",
          "latitude": 37.764768,
          "longitude": -122.409556,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76534667720108,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.764799576065634,
          "longitude": -122.40889762983666
        },
        {
          "latitude": 37.76535381541474,
          "longitude": -122.40951711577755
        },
        {
          "latitude": 37.76470370332518,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76491416907369,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.76532796129034,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76473804036968,
          "longitude": -122.40934012016702
        },
        {
          "latitude": 37.764561911368844,
          "longitude": -122.40942861800956
        },
        {
          "latitude": 37.76467650283257,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.764812504662785,
          "longitude": -122.40934012016702
        },
        {
          "latitude": 37.76462923910506,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76487404052659,
          "longitude": -122.40889762983666
        },
        {
          "latitude": 37.765517017157805,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76510456866283,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76549695344303,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.76476524052762,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.764901240368125,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.7652320884632,
          "longitude": -122.40942861800956
        },
        {
          "latitude": 37.76486690495189,
          "longitude": -122.40916312425841
        },
        {
          "latitude": 37.76455477480831,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76542114063665,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.76531947648099,
          "longitude": -122.40987110610446
        },
        {
          "latitude": 37.764955639861334,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76473224608435,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.764548982391126,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76483970483898,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.76503010430039,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.764690776139645,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.764534711120824,
          "longitude": -122.40951711577755
        },
        {
          "latitude": 37.765144697626326,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76547554192348,
          "longitude": -122.40960561347107
        },
        {
          "latitude": 37.76504303346731,
          "longitude": -122.40907462619234
        },
        {
          "latitude": 37.76492844014637,
          "longitude": -122.40872063318291
        },
        {
          "latitude": 37.76452891720579,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.765564280683655,
          "longitude": -122.40907462619234
        },
        {
          "latitude": 37.76517903294863,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76544834131171,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76482677588892,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.76513756131806,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.765021622045374,
          "longitude": -122.40987110610446
        },
        {
          "latitude": 37.76477816746867,
          "longitude": -122.40969411109003
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:33:57 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:57 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:33:57 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472257846656",
      "new_timestamp_ms": "1472258036760",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:33:57 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:33:57 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:58 PM [Request] GetAssetDigest {
  "platform": "ANDROID",
    "app_version": 3500,
    "$unknownFields": []
}
5:33:58 PM [Request] CheckChallenge {}
5:33:58 PM [Request] GetHatchedEggs {}
5:33:58 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258036760",
    "$unknownFields": []
}
5:33:58 PM [Request] CheckAwardedBadges {}
5:33:58 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:33:58 PM [Response] GetAssetDigest {
  "digest": [
    {
      "asset_id": "030a3476-668a-47fb-95ed-2bcfc5c15637/1467338129695000",
      "bundle_name": "pm0094",
      "version": "1467338129695000",
      "checksum": 1091692581,
      "size": 401141,
      "key": {
        "type": "Buffer",
        "data": [
          13,
          12,
          146,
          77,
          237,
          147,
          175,
          146,
          246,
          18,
          50,
          128,
          71,
          34,
          183,
          164
        ]
      }
    },
    {
      "asset_id": "0425019c-3e6a-4317-960d-2e7324b3e744/1467337885130000",
      "bundle_name": "pm0002",
      "version": "1467337885130000",
      "checksum": 1262180282,
      "size": 538117,
      "key": {
        "type": "Buffer",
        "data": [
          36,
          115,
          134,
          39,
          83,
          177,
          178,
          202,
          103,
          243,
          159,
          106,
          104,
          224,
          197,
          63
        ]
      }
    },
    {
      "asset_id": "075f80e6-760e-4553-96ef-6e117b933969/1467337919227000",
      "bundle_name": "pm0015",
      "version": "1467337919227000",
      "checksum": 2902084886,
      "size": 320309,
      "key": {
        "type": "Buffer",
        "data": [
          180,
          158,
          107,
          151,
          195,
          205,
          85,
          106,
          8,
          75,
          208,
          21,
          253,
          104,
          99,
          110
        ]
      }
    },
    {
      "asset_id": "0788eb46-368c-480c-bec2-f9709a25caf0/1467338000489000",
      "bundle_name": "pm0045",
      "version": "1467338000489000",
      "checksum": 3950266309,
      "size": 317685,
      "key": {
        "type": "Buffer",
        "data": [
          108,
          250,
          245,
          37,
          6,
          148,
          176,
          186,
          170,
          30,
          222,
          62,
          89,
          221,
          106,
          49
        ]
      }
    },
    {
      "asset_id": "09493d46-29b4-476d-8b4d-fdb152251ec6/1467338194462000",
      "bundle_name": "pm0120",
      "version": "1467338194462000",
      "checksum": 1682924312,
      "size": 241797,
      "key": {
        "type": "Buffer",
        "data": [
          111,
          93,
          162,
          240,
          215,
          161,
          34,
          241,
          140,
          107,
          226,
          148,
          132,
          33,
          56,
          163
        ]
      }
    },
    {
      "asset_id": "0bd50fd0-3d5f-4a1c-98af-88b6ec74a1bd/1467337882194000",
      "bundle_name": "pm0001",
      "version": "1467337882194000",
      "checksum": 3445822759,
      "size": 539253,
      "key": {
        "type": "Buffer",
        "data": [
          165,
          235,
          107,
          194,
          248,
          174,
          254,
          139,
          140,
          165,
          221,
          131,
          37,
          234,
          216,
          168
        ]
      }
    },
    {
      "asset_id": "0d68da6c-ab76-4c31-b3df-4068a8764a12/1467338113910000",
      "bundle_name": "pm0088",
      "version": "1467338113910000",
      "checksum": 1851466744,
      "size": 867109,
      "key": {
        "type": "Buffer",
        "data": [
          156,
          140,
          107,
          48,
          213,
          233,
          230,
          134,
          38,
          111,
          72,
          249,
          18,
          9,
          248,
          131
        ]
      }
    },
    {
      "asset_id": "0ddf030f-2060-4982-a31c-6b90bcc36918/1467337909222000",
      "bundle_name": "pm0011",
      "version": "1467337909222000",
      "checksum": 3452525069,
      "size": 187093,
      "key": {
        "type": "Buffer",
        "data": [
          150,
          71,
          111,
          32,
          225,
          49,
          71,
          63,
          37,
          243,
          157,
          45,
          96,
          107,
          114,
          219
        ]
      }
    },
    {
      "asset_id": "0fc10c28-3391-496b-bf21-4998855cc68d/1467338266042000",
      "bundle_name": "pm0147",
      "version": "1467338266042000",
      "checksum": 590985285,
      "size": 309877,
      "key": {
        "type": "Buffer",
        "data": [
          52,
          137,
          166,
          103,
          220,
          187,
          111,
          127,
          156,
          170,
          227,
          14,
          159,
          237,
          204,
          114
        ]
      }
    },
    {
      "asset_id": "10531b61-bb47-41d2-8a8e-1d1639112419/1467337976073000",
      "bundle_name": "pm0036",
      "version": "1467337976073000",
      "checksum": 1083344592,
      "size": 434533,
      "key": {
        "type": "Buffer",
        "data": [
          236,
          105,
          222,
          45,
          231,
          33,
          145,
          3,
          159,
          158,
          49,
          2,
          43,
          4,
          134,
          138
        ]
      }
    },
    {
      "asset_id": "10d55042-2573-4150-881d-24ce2104c821/1467338091293000",
      "bundle_name": "pm0079",
      "version": "1467338091293000",
      "checksum": 1886181521,
      "size": 374117,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          150,
          129,
          155,
          252,
          251,
          113,
          249,
          128,
          57,
          25,
          23,
          128,
          101,
          63,
          135
        ]
      }
    },
    {
      "asset_id": "113c720a-2bac-4417-b1cf-e095b7ded5f9/1467338069977000",
      "bundle_name": "pm0071",
      "version": "1467338069977000",
      "checksum": 2021977114,
      "size": 678213,
      "key": {
        "type": "Buffer",
        "data": [
          128,
          116,
          169,
          154,
          63,
          23,
          185,
          96,
          63,
          237,
          100,
          212,
          240,
          244,
          56,
          236
        ]
      }
    },
    {
      "asset_id": "13cfc96d-78a5-4c2e-b7da-bcb12b96aaf8/1467338174844000",
      "bundle_name": "pm0112",
      "version": "1467338174844000",
      "checksum": 363541638,
      "size": 452261,
      "key": {
        "type": "Buffer",
        "data": [
          93,
          225,
          155,
          13,
          173,
          121,
          33,
          135,
          22,
          75,
          138,
          199,
          235,
          25,
          205,
          180
        ]
      }
    },
    {
      "asset_id": "144e2ec2-4ce6-4c0c-8fca-fa7e2ae3322c/1467338268569000",
      "bundle_name": "pm0148",
      "version": "1467338268569000",
      "checksum": 3037878969,
      "size": 301029,
      "key": {
        "type": "Buffer",
        "data": [
          90,
          166,
          42,
          88,
          166,
          110,
          99,
          97,
          28,
          234,
          47,
          67,
          15,
          104,
          210,
          125
        ]
      }
    },
    {
      "asset_id": "1512005a-ca80-443d-b1e3-db95bb786718/1467337987049000",
      "bundle_name": "pm0040",
      "version": "1467337987049000",
      "checksum": 2688163078,
      "size": 374613,
      "key": {
        "type": "Buffer",
        "data": [
          22,
          183,
          106,
          200,
          139,
          248,
          3,
          247,
          63,
          189,
          44,
          233,
          23,
          235,
          143,
          167
        ]
      }
    },
    {
      "asset_id": "17e94739-b461-45b2-bba2-254e8b6ebe0e/1467337899180000",
      "bundle_name": "pm0007",
      "version": "1467337899180000",
      "checksum": 2891475622,
      "size": 431269,
      "key": {
        "type": "Buffer",
        "data": [
          249,
          44,
          222,
          192,
          244,
          136,
          166,
          96,
          93,
          207,
          253,
          238,
          234,
          182,
          197,
          89
        ]
      }
    },
    {
      "asset_id": "192d950c-765e-426c-8861-f60d0f7883f3/1467338008565000",
      "bundle_name": "pm0048",
      "version": "1467338008565000",
      "checksum": 3345575021,
      "size": 518213,
      "key": {
        "type": "Buffer",
        "data": [
          104,
          101,
          252,
          60,
          231,
          150,
          230,
          58,
          162,
          107,
          234,
          179,
          199,
          159,
          112,
          240
        ]
      }
    },
    {
      "asset_id": "1a8d8b21-83e5-47e9-8d80-9523f3ad202d/1467337964453000",
      "bundle_name": "pm0032",
      "version": "1467337964453000",
      "checksum": 630362926,
      "size": 405957,
      "key": {
        "type": "Buffer",
        "data": [
          109,
          229,
          241,
          174,
          74,
          51,
          165,
          182,
          254,
          141,
          76,
          81,
          26,
          33,
          154,
          29
        ]
      }
    },
    {
      "asset_id": "1cab52c2-fd34-42f5-81fb-160d559ec52c/1467338086041000",
      "bundle_name": "pm0077",
      "version": "1467338086041000",
      "checksum": 3581097280,
      "size": 696005,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          175,
          51,
          254,
          74,
          119,
          206,
          72,
          62,
          28,
          86,
          53,
          25,
          33,
          105,
          216
        ]
      }
    },
    {
      "asset_id": "1de61775-066c-467b-9d15-bba848613582/1467338189393000",
      "bundle_name": "pm0118",
      "version": "1467338189393000",
      "checksum": 1121624648,
      "size": 519717,
      "key": {
        "type": "Buffer",
        "data": [
          247,
          197,
          212,
          217,
          29,
          38,
          143,
          9,
          90,
          119,
          195,
          34,
          170,
          44,
          129,
          114
        ]
      }
    },
    {
      "asset_id": "1e15c63a-9a35-4089-b89e-ac43a7acd75f/1467337951277000",
      "bundle_name": "pm0027",
      "version": "1467337951277000",
      "checksum": 1335393334,
      "size": 425797,
      "key": {
        "type": "Buffer",
        "data": [
          93,
          62,
          94,
          154,
          224,
          236,
          35,
          227,
          199,
          62,
          207,
          127,
          135,
          232,
          91,
          233
        ]
      }
    },
    {
      "asset_id": "1e4961be-4396-42ee-b40d-1a2fb5ec5a80/1467337971773000",
      "bundle_name": "pm0035",
      "version": "1467337971773000",
      "checksum": 4191243538,
      "size": 362949,
      "key": {
        "type": "Buffer",
        "data": [
          135,
          87,
          115,
          122,
          83,
          40,
          253,
          231,
          22,
          191,
          44,
          108,
          202,
          32,
          209,
          117
        ]
      }
    },
    {
      "asset_id": "1e564e4d-a0ff-44fb-928a-23c0f1f5848a/1467337958911000",
      "bundle_name": "pm0030",
      "version": "1467337958911000",
      "checksum": 2285618556,
      "size": 337397,
      "key": {
        "type": "Buffer",
        "data": [
          55,
          71,
          166,
          53,
          19,
          187,
          103,
          103,
          23,
          141,
          101,
          21,
          60,
          56,
          134,
          134
        ]
      }
    },
    {
      "asset_id": "22104024-0f79-4adb-9b0e-c710e0a7301f/1467338229269000",
      "bundle_name": "pm0133",
      "version": "1467338229269000",
      "checksum": 2667934853,
      "size": 551221,
      "key": {
        "type": "Buffer",
        "data": [
          81,
          7,
          141,
          12,
          226,
          137,
          233,
          201,
          17,
          253,
          59,
          224,
          234,
          23,
          189,
          139
        ]
      }
    },
    {
      "asset_id": "253d320c-a865-4dac-b7fc-65b48f51104c/1467338202540000",
      "bundle_name": "pm0123",
      "version": "1467338202540000",
      "checksum": 3550620028,
      "size": 415301,
      "key": {
        "type": "Buffer",
        "data": [
          18,
          56,
          36,
          240,
          41,
          229,
          195,
          228,
          103,
          62,
          254,
          232,
          93,
          220,
          174,
          34
        ]
      }
    },
    {
      "asset_id": "2727cac4-4bfe-4021-b15f-01e4ac5b66a3/1467337916776000",
      "bundle_name": "pm0014",
      "version": "1467337916776000",
      "checksum": 1789690601,
      "size": 172309,
      "key": {
        "type": "Buffer",
        "data": [
          254,
          225,
          200,
          146,
          97,
          69,
          220,
          21,
          57,
          38,
          115,
          94,
          176,
          14,
          45,
          194
        ]
      }
    },
    {
      "asset_id": "2a17e985-e3be-4e32-bebd-3d9c21a080bc/1467338205053000",
      "bundle_name": "pm0124",
      "version": "1467338205053000",
      "checksum": 475671429,
      "size": 773397,
      "key": {
        "type": "Buffer",
        "data": [
          212,
          57,
          40,
          84,
          205,
          16,
          209,
          133,
          20,
          180,
          187,
          38,
          230,
          137,
          203,
          81
        ]
      }
    },
    {
      "asset_id": "2b57e336-fd00-4f4b-9ff8-fe0b39c1b2ad/1467338213134000",
      "bundle_name": "pm0127",
      "version": "1467338213134000",
      "checksum": 2991925804,
      "size": 468997,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          28,
          178,
          243,
          249,
          168,
          87,
          107,
          14,
          35,
          101,
          96,
          236,
          90,
          59,
          17
        ]
      }
    },
    {
      "asset_id": "2f001c1d-5f65-416a-a062-bbd53b5dcc36/1467338052077000",
      "bundle_name": "pm0064",
      "version": "1467338052077000",
      "checksum": 1381302082,
      "size": 461909,
      "key": {
        "type": "Buffer",
        "data": [
          252,
          114,
          227,
          173,
          143,
          119,
          214,
          151,
          122,
          86,
          234,
          233,
          108,
          60,
          124,
          249
        ]
      }
    },
    {
      "asset_id": "2fbef411-bc29-44c4-b988-fb2b37227082/1467338172347000",
      "bundle_name": "pm0111",
      "version": "1467338172347000",
      "checksum": 1601575968,
      "size": 481557,
      "key": {
        "type": "Buffer",
        "data": [
          132,
          16,
          220,
          249,
          122,
          54,
          203,
          195,
          82,
          101,
          230,
          53,
          5,
          102,
          68,
          129
        ]
      }
    },
    {
      "asset_id": "3106cff7-3cbb-488b-87de-851782cf7514/1467338096154000",
      "bundle_name": "pm0081",
      "version": "1467338096154000",
      "checksum": 74226018,
      "size": 216421,
      "key": {
        "type": "Buffer",
        "data": [
          182,
          96,
          198,
          213,
          214,
          254,
          11,
          92,
          40,
          0,
          153,
          84,
          193,
          178,
          8,
          166
        ]
      }
    },
    {
      "asset_id": "31e4001a-6636-4e37-8f4f-83ec44efabaf/1467337984615000",
      "bundle_name": "pm0039",
      "version": "1467337984615000",
      "checksum": 2862335009,
      "size": 466789,
      "key": {
        "type": "Buffer",
        "data": [
          247,
          6,
          143,
          69,
          5,
          26,
          251,
          114,
          132,
          239,
          124,
          125,
          2,
          38,
          248,
          251
        ]
      }
    },
    {
      "asset_id": "324622df-707d-4916-8498-427306552469/1467338098389000",
      "bundle_name": "pm0082",
      "version": "1467338098389000",
      "checksum": 3074157279,
      "size": 328885,
      "key": {
        "type": "Buffer",
        "data": [
          98,
          69,
          149,
          62,
          229,
          50,
          132,
          120,
          249,
          192,
          136,
          96,
          232,
          188,
          34,
          149
        ]
      }
    },
    {
      "asset_id": "373af218-ca36-4648-a72b-b0f7ae8bf2e9/1467338135579000",
      "bundle_name": "pm0096",
      "version": "1467338135579000",
      "checksum": 115675938,
      "size": 538661,
      "key": {
        "type": "Buffer",
        "data": [
          21,
          242,
          179,
          32,
          180,
          198,
          231,
          255,
          10,
          186,
          212,
          19,
          223,
          62,
          25,
          73
        ]
      }
    },
    {
      "asset_id": "3918f249-3ad9-4dee-a073-9d1ecada65d1/1467338240434000",
      "bundle_name": "pm0137",
      "version": "1467338240434000",
      "checksum": 1906115008,
      "size": 137909,
      "key": {
        "type": "Buffer",
        "data": [
          248,
          171,
          242,
          191,
          173,
          184,
          183,
          191,
          148,
          32,
          165,
          205,
          98,
          186,
          45,
          226
        ]
      }
    },
    {
      "asset_id": "3a5b0f0a-bfac-4009-a263-60f5cbd52a0f/1467337904532000",
      "bundle_name": "pm0009",
      "version": "1467337904532000",
      "checksum": 256607364,
      "size": 581717,
      "key": {
        "type": "Buffer",
        "data": [
          113,
          168,
          178,
          202,
          175,
          22,
          58,
          104,
          26,
          64,
          126,
          136,
          169,
          167,
          19,
          132
        ]
      }
    },
    {
      "asset_id": "3c50d5e8-a587-42a6-bb9b-37fba81cf199/1467338020497000",
      "bundle_name": "pm0052",
      "version": "1467338020497000",
      "checksum": 1233924138,
      "size": 523829,
      "key": {
        "type": "Buffer",
        "data": [
          37,
          57,
          223,
          236,
          180,
          27,
          17,
          181,
          48,
          136,
          33,
          224,
          126,
          11,
          113,
          37
        ]
      }
    },
    {
      "asset_id": "3c75b9ce-d9c0-4646-b175-fe25f1dc9d9d/1467338207442000",
      "bundle_name": "pm0125",
      "version": "1467338207442000",
      "checksum": 211798875,
      "size": 572037,
      "key": {
        "type": "Buffer",
        "data": [
          122,
          123,
          230,
          27,
          126,
          237,
          215,
          22,
          102,
          150,
          92,
          45,
          45,
          229,
          133,
          198
        ]
      }
    },
    {
      "asset_id": "3d1a2fbe-0223-488c-a0f0-aca878917bf4/1467337997895000",
      "bundle_name": "pm0044",
      "version": "1467337997895000",
      "checksum": 730430449,
      "size": 412613,
      "key": {
        "type": "Buffer",
        "data": [
          209,
          12,
          217,
          63,
          112,
          70,
          240,
          1,
          62,
          239,
          204,
          91,
          172,
          56,
          135,
          197
        ]
      }
    },
    {
      "asset_id": "3d3f7e51-d1a2-4697-9644-5c935e781b8f/1467338011578000",
      "bundle_name": "pm0049",
      "version": "1467338011578000",
      "checksum": 1305345479,
      "size": 302901,
      "key": {
        "type": "Buffer",
        "data": [
          177,
          221,
          207,
          237,
          28,
          114,
          145,
          238,
          166,
          41,
          95,
          248,
          70,
          5,
          63,
          18
        ]
      }
    },
    {
      "asset_id": "445b414e-c2ac-4e4f-b038-d4370e0f0197/1467337961777000",
      "bundle_name": "pm0031",
      "version": "1467337961777000",
      "checksum": 4283404323,
      "size": 370069,
      "key": {
        "type": "Buffer",
        "data": [
          140,
          24,
          43,
          113,
          189,
          152,
          166,
          187,
          130,
          147,
          151,
          203,
          251,
          129,
          105,
          84
        ]
      }
    },
    {
      "asset_id": "4d9a5912-a0f7-4bb2-8248-b0021e54d471/1467338165109000",
      "bundle_name": "pm0108",
      "version": "1467338165109000",
      "checksum": 1328162472,
      "size": 510453,
      "key": {
        "type": "Buffer",
        "data": [
          146,
          60,
          41,
          234,
          74,
          195,
          56,
          56,
          69,
          43,
          212,
          77,
          107,
          155,
          183,
          34
        ]
      }
    },
    {
      "asset_id": "4fbc5a41-fa6f-4b6a-aaa1-19028c3d80ff/1467338177160000",
      "bundle_name": "pm0113",
      "version": "1467338177160000",
      "checksum": 2240794369,
      "size": 361109,
      "key": {
        "type": "Buffer",
        "data": [
          53,
          174,
          144,
          185,
          77,
          101,
          91,
          69,
          163,
          226,
          139,
          74,
          241,
          133,
          10,
          156
        ]
      }
    },
    {
      "asset_id": "5052b740-eb53-4d43-b626-7a8446c209a4/1467338044503000",
      "bundle_name": "pm0061",
      "version": "1467338044503000",
      "checksum": 2130499044,
      "size": 338309,
      "key": {
        "type": "Buffer",
        "data": [
          38,
          159,
          43,
          225,
          94,
          92,
          132,
          2,
          136,
          135,
          3,
          194,
          120,
          140,
          182,
          188
        ]
      }
    },
    {
      "asset_id": "509a4b03-21bb-4648-8ec9-13acaa6acd2a/1467338248318000",
      "bundle_name": "pm0140",
      "version": "1467338248318000",
      "checksum": 3970891003,
      "size": 236869,
      "key": {
        "type": "Buffer",
        "data": [
          80,
          220,
          183,
          223,
          96,
          58,
          152,
          44,
          167,
          87,
          211,
          224,
          132,
          75,
          71,
          14
        ]
      }
    },
    {
      "asset_id": "5150fb96-23b5-4e13-b700-14d34a91c609/1467338002945000",
      "bundle_name": "pm0046",
      "version": "1467338002945000",
      "checksum": 902196895,
      "size": 377765,
      "key": {
        "type": "Buffer",
        "data": [
          215,
          249,
          156,
          119,
          79,
          228,
          1,
          194,
          153,
          143,
          173,
          254,
          212,
          234,
          253,
          175
        ]
      }
    },
    {
      "asset_id": "539ce0fa-01f9-4800-b3f5-52ea25038c6e/1467337943229000",
      "bundle_name": "pm0024",
      "version": "1467337943229000",
      "checksum": 3828810246,
      "size": 367957,
      "key": {
        "type": "Buffer",
        "data": [
          215,
          0,
          137,
          127,
          42,
          177,
          117,
          234,
          180,
          139,
          140,
          250,
          123,
          32,
          234,
          221
        ]
      }
    },
    {
      "asset_id": "53b9b877-3496-499f-9268-f493fe6fb423/1467338215957000",
      "bundle_name": "pm0128",
      "version": "1467338215957000",
      "checksum": 2194994395,
      "size": 547237,
      "key": {
        "type": "Buffer",
        "data": [
          237,
          32,
          118,
          36,
          139,
          48,
          110,
          5,
          178,
          209,
          81,
          216,
          40,
          52,
          189,
          231
        ]
      }
    },
    {
      "asset_id": "586bafd6-675a-4799-9ea3-529f205db205/1467338046999000",
      "bundle_name": "pm0062",
      "version": "1467338046999000",
      "checksum": 436642340,
      "size": 441125,
      "key": {
        "type": "Buffer",
        "data": [
          229,
          94,
          29,
          226,
          126,
          6,
          123,
          111,
          192,
          235,
          214,
          59,
          238,
          221,
          144,
          217
        ]
      }
    },
    {
      "asset_id": "5a1ad400-947b-468f-aff5-4ee74b488da1/1467338162694000",
      "bundle_name": "pm0107",
      "version": "1467338162694000",
      "checksum": 2858354579,
      "size": 381301,
      "key": {
        "type": "Buffer",
        "data": [
          87,
          195,
          9,
          176,
          191,
          125,
          185,
          197,
          82,
          194,
          233,
          105,
          212,
          109,
          148,
          78
        ]
      }
    },
    {
      "asset_id": "5be4c90f-8b4b-49ce-92a1-6e1ffd591fda/1467338152232000",
      "bundle_name": "pm0103",
      "version": "1467338152232000",
      "checksum": 1142938153,
      "size": 588149,
      "key": {
        "type": "Buffer",
        "data": [
          128,
          145,
          120,
          98,
          26,
          35,
          244,
          238,
          64,
          129,
          129,
          224,
          121,
          244,
          172,
          108
        ]
      }
    },
    {
      "asset_id": "5c0a5e50-9ea2-4a9a-b450-313faa60fc30/1467337906920000",
      "bundle_name": "pm0010",
      "version": "1467337906920000",
      "checksum": 4264333702,
      "size": 218277,
      "key": {
        "type": "Buffer",
        "data": [
          42,
          199,
          83,
          68,
          198,
          13,
          192,
          3,
          157,
          3,
          160,
          109,
          139,
          160,
          18,
          136
        ]
      }
    },
    {
      "asset_id": "5cbcb961-13dc-440c-a474-50212e6ff120/1467338119418000",
      "bundle_name": "pm0090",
      "version": "1467338119418000",
      "checksum": 260237632,
      "size": 236341,
      "key": {
        "type": "Buffer",
        "data": [
          166,
          250,
          80,
          11,
          159,
          13,
          86,
          76,
          248,
          156,
          238,
          173,
          11,
          68,
          84,
          204
        ]
      }
    },
    {
      "asset_id": "5f96120d-3c3d-49f0-9e37-a32ea310c90f/1467338179500000",
      "bundle_name": "pm0114",
      "version": "1467338179500000",
      "checksum": 3388493016,
      "size": 492309,
      "key": {
        "type": "Buffer",
        "data": [
          43,
          166,
          250,
          229,
          70,
          183,
          141,
          125,
          69,
          49,
          208,
          53,
          84,
          99,
          181,
          63
        ]
      }
    },
    {
      "asset_id": "60f5f204-b8ef-4ebe-9bdd-e22f5e201ac6/1467338080582000",
      "bundle_name": "pm0075",
      "version": "1467338080582000",
      "checksum": 163117988,
      "size": 477029,
      "key": {
        "type": "Buffer",
        "data": [
          73,
          95,
          176,
          11,
          86,
          64,
          34,
          93,
          96,
          252,
          205,
          151,
          176,
          208,
          125,
          179
        ]
      }
    },
    {
      "asset_id": "656e67b5-45c5-4a97-bf61-ccd460fd0711/1467338026213000",
      "bundle_name": "pm0054",
      "version": "1467338026213000",
      "checksum": 2938158766,
      "size": 343813,
      "key": {
        "type": "Buffer",
        "data": [
          118,
          41,
          113,
          237,
          236,
          5,
          173,
          181,
          164,
          0,
          212,
          20,
          15,
          207,
          222,
          121
        ]
      }
    },
    {
      "asset_id": "65c79d4f-ce78-492f-9f44-39a387e8e06d/1467337935414000",
      "bundle_name": "pm0021",
      "version": "1467337935414000",
      "checksum": 2412734403,
      "size": 477333,
      "key": {
        "type": "Buffer",
        "data": [
          192,
          234,
          23,
          252,
          219,
          114,
          96,
          102,
          206,
          154,
          160,
          33,
          199,
          121,
          159,
          105
        ]
      }
    },
    {
      "asset_id": "6650afba-2aa8-45b3-874c-e54983595633/1467338088555000",
      "bundle_name": "pm0078",
      "version": "1467338088555000",
      "checksum": 3498661415,
      "size": 973781,
      "key": {
        "type": "Buffer",
        "data": [
          203,
          188,
          250,
          140,
          54,
          65,
          27,
          32,
          135,
          59,
          80,
          109,
          68,
          75,
          133,
          22
        ]
      }
    },
    {
      "asset_id": "668a3f63-9fd5-41b4-9964-532f467ad1c4/1467338039593000",
      "bundle_name": "pm0059",
      "version": "1467338039593000",
      "checksum": 1067980017,
      "size": 685941,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          190,
          225,
          212,
          152,
          137,
          222,
          157,
          170,
          82,
          59,
          149,
          54,
          131,
          87,
          233
        ]
      }
    },
    {
      "asset_id": "67bd4c6f-dcff-4f03-b90b-4a3713284945/1467337932685000",
      "bundle_name": "pm0020",
      "version": "1467337932685000",
      "checksum": 4211794890,
      "size": 537749,
      "key": {
        "type": "Buffer",
        "data": [
          33,
          107,
          64,
          27,
          8,
          101,
          150,
          69,
          121,
          213,
          86,
          112,
          1,
          178,
          41,
          239
        ]
      }
    },
    {
      "asset_id": "68d7da67-b04a-43e8-82bf-6b5b414c5c15/1467338157779000",
      "bundle_name": "pm0105",
      "version": "1467338157779000",
      "checksum": 3595829723,
      "size": 384405,
      "key": {
        "type": "Buffer",
        "data": [
          50,
          150,
          116,
          69,
          192,
          17,
          236,
          54,
          47,
          131,
          0,
          168,
          51,
          250,
          242,
          38
        ]
      }
    },
    {
      "asset_id": "6a30858b-c6a8-4e4c-a353-4cfc8f4433d4/1467338167524000",
      "bundle_name": "pm0109",
      "version": "1467338167524000",
      "checksum": 3471746952,
      "size": 280085,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          159,
          145,
          52,
          150,
          79,
          138,
          188,
          0,
          167,
          89,
          14,
          147,
          227,
          174,
          216
        ]
      }
    },
    {
      "asset_id": "6a7f5aad-3513-4a84-b106-d1e739929e7c/1467338160277000",
      "bundle_name": "pm0106",
      "version": "1467338160277000",
      "checksum": 3063475515,
      "size": 494101,
      "key": {
        "type": "Buffer",
        "data": [
          90,
          42,
          248,
          89,
          246,
          101,
          138,
          138,
          230,
          36,
          6,
          96,
          43,
          26,
          7,
          227
        ]
      }
    },
    {
      "asset_id": "6d2993b7-7fb3-43b2-8a33-0605c11b0f22/1467338124329000",
      "bundle_name": "pm0092",
      "version": "1467338124329000",
      "checksum": 1499681981,
      "size": 221701,
      "key": {
        "type": "Buffer",
        "data": [
          220,
          132,
          218,
          9,
          239,
          125,
          252,
          98,
          10,
          184,
          200,
          47,
          23,
          208,
          28,
          166
        ]
      }
    },
    {
      "asset_id": "6e6b531b-e153-4f70-831a-afed68fdafdb/1467337992497000",
      "bundle_name": "pm0042",
      "version": "1467337992497000",
      "checksum": 2197171195,
      "size": 389589,
      "key": {
        "type": "Buffer",
        "data": [
          162,
          4,
          220,
          222,
          2,
          8,
          112,
          118,
          94,
          192,
          196,
          201,
          20,
          238,
          243,
          192
        ]
      }
    },
    {
      "asset_id": "6f941a3b-9802-4357-bc8e-b5e5dbec4c15/1467338258380000",
      "bundle_name": "pm0144",
      "version": "1467338258380000",
      "checksum": 3142672630,
      "size": 657237,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          182,
          115,
          189,
          46,
          57,
          250,
          132,
          203,
          122,
          15,
          65,
          53,
          199,
          8,
          108
        ]
      }
    },
    {
      "asset_id": "7085574b-c71c-41f4-a698-9099b00bb8e7/1467338263523000",
      "bundle_name": "pm0146",
      "version": "1467338263523000",
      "checksum": 1469916896,
      "size": 773781,
      "key": {
        "type": "Buffer",
        "data": [
          116,
          157,
          13,
          140,
          197,
          114,
          7,
          38,
          77,
          72,
          59,
          231,
          213,
          213,
          202,
          193
        ]
      }
    },
    {
      "asset_id": "71adbf99-2bd1-441f-91b4-ae9a1a8150d6/1467338145315000",
      "bundle_name": "pm0100",
      "version": "1467338145315000",
      "checksum": 1050692229,
      "size": 210725,
      "key": {
        "type": "Buffer",
        "data": [
          3,
          180,
          79,
          231,
          17,
          196,
          164,
          250,
          57,
          96,
          247,
          126,
          82,
          18,
          3,
          232
        ]
      }
    },
    {
      "asset_id": "75f18b3a-b8ce-43f4-a964-3d6f634a9ffb/1467338067552000",
      "bundle_name": "pm0070",
      "version": "1467338067552000",
      "checksum": 465239564,
      "size": 229285,
      "key": {
        "type": "Buffer",
        "data": [
          147,
          79,
          69,
          147,
          206,
          128,
          98,
          28,
          3,
          231,
          201,
          179,
          98,
          202,
          233,
          164
        ]
      }
    },
    {
      "asset_id": "761bb130-8d7e-49fa-b8f0-9350cfec3b75/1467337966785000",
      "bundle_name": "pm0033",
      "version": "1467337966785000",
      "checksum": 2273269788,
      "size": 356965,
      "key": {
        "type": "Buffer",
        "data": [
          145,
          243,
          207,
          196,
          147,
          179,
          66,
          117,
          18,
          84,
          123,
          198,
          39,
          237,
          66,
          246
        ]
      }
    },
    {
      "asset_id": "7b212dc7-0fe9-4ffd-b817-f84f8c736c1e/1467337995444000",
      "bundle_name": "pm0043",
      "version": "1467337995444000",
      "checksum": 811231416,
      "size": 460997,
      "key": {
        "type": "Buffer",
        "data": [
          214,
          204,
          127,
          110,
          45,
          247,
          154,
          222,
          78,
          170,
          62,
          235,
          219,
          185,
          48,
          215
        ]
      }
    },
    {
      "asset_id": "7e362dac-1743-49e9-a8e2-090b179d7554/1467338186871000",
      "bundle_name": "pm0117",
      "version": "1467338186871000",
      "checksum": 3633190742,
      "size": 292725,
      "key": {
        "type": "Buffer",
        "data": [
          73,
          176,
          160,
          73,
          195,
          121,
          226,
          152,
          140,
          19,
          199,
          145,
          178,
          147,
          112,
          196
        ]
      }
    },
    {
      "asset_id": "7e8de255-1002-4a48-9f5a-84f9fd5510f0/1467338126821000",
      "bundle_name": "pm0093",
      "version": "1467338126821000",
      "checksum": 714286475,
      "size": 298277,
      "key": {
        "type": "Buffer",
        "data": [
          104,
          96,
          247,
          194,
          113,
          44,
          41,
          216,
          66,
          30,
          174,
          114,
          130,
          157,
          35,
          196
        ]
      }
    },
    {
      "asset_id": "7fd908f9-dc2a-44a5-81fd-ebb5b8092b75/1467337927308000",
      "bundle_name": "pm0018",
      "version": "1467337927308000",
      "checksum": 3065838426,
      "size": 613173,
      "key": {
        "type": "Buffer",
        "data": [
          206,
          202,
          79,
          51,
          172,
          93,
          119,
          125,
          139,
          29,
          239,
          81,
          160,
          221,
          131,
          231
        ]
      }
    },
    {
      "asset_id": "82749335-10dc-4c1f-8fae-c49f4bfb852a/1467338142911000",
      "bundle_name": "pm0099",
      "version": "1467338142911000",
      "checksum": 3276185780,
      "size": 406133,
      "key": {
        "type": "Buffer",
        "data": [
          229,
          239,
          134,
          205,
          65,
          131,
          71,
          187,
          250,
          150,
          25,
          120,
          163,
          120,
          243,
          168
        ]
      }
    },
    {
      "asset_id": "83086d0b-cd24-4d3f-9bb3-f749c7e650db/1467337945855000",
      "bundle_name": "pm0025",
      "version": "1467337945855000",
      "checksum": 120139418,
      "size": 465717,
      "key": {
        "type": "Buffer",
        "data": [
          4,
          157,
          221,
          158,
          255,
          11,
          13,
          36,
          98,
          200,
          192,
          228,
          131,
          12,
          182,
          115
        ]
      }
    },
    {
      "asset_id": "849a5f10-3566-4614-984e-b80ed981cd8a/1467338234893000",
      "bundle_name": "pm0135",
      "version": "1467338234893000",
      "checksum": 2515864049,
      "size": 583493,
      "key": {
        "type": "Buffer",
        "data": [
          190,
          198,
          222,
          44,
          74,
          113,
          44,
          141,
          232,
          131,
          96,
          163,
          249,
          139,
          199,
          152
        ]
      }
    },
    {
      "asset_id": "867591c6-7692-42d4-a0a8-4222f23b7862/1467338093814000",
      "bundle_name": "pm0080",
      "version": "1467338093814000",
      "checksum": 1501075165,
      "size": 488149,
      "key": {
        "type": "Buffer",
        "data": [
          71,
          26,
          87,
          240,
          82,
          95,
          189,
          219,
          242,
          193,
          102,
          74,
          182,
          242,
          67,
          138
        ]
      }
    },
    {
      "asset_id": "8677857d-a049-4da0-930c-66368372b8a9/1467337981363000",
      "bundle_name": "pm0038",
      "version": "1467337981363000",
      "checksum": 2031469732,
      "size": 782421,
      "key": {
        "type": "Buffer",
        "data": [
          55,
          174,
          118,
          105,
          156,
          34,
          116,
          218,
          90,
          89,
          135,
          62,
          25,
          207,
          95,
          195
        ]
      }
    },
    {
      "asset_id": "86c68f51-75a7-460b-9874-b3b3b21305b0/1467338181900000",
      "bundle_name": "pm0115",
      "version": "1467338181900000",
      "checksum": 929500556,
      "size": 567957,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          228,
          95,
          118,
          135,
          25,
          200,
          159,
          144,
          69,
          47,
          126,
          93,
          59,
          52,
          118
        ]
      }
    },
    {
      "asset_id": "86f48900-288a-4ec4-be07-2f3594bd3e4b/1467338034062000",
      "bundle_name": "pm0057",
      "version": "1467338034062000",
      "checksum": 878165086,
      "size": 399509,
      "key": {
        "type": "Buffer",
        "data": [
          74,
          108,
          1,
          246,
          114,
          212,
          92,
          65,
          116,
          179,
          104,
          26,
          202,
          173,
          249,
          137
        ]
      }
    },
    {
      "asset_id": "872f637f-ff47-42de-a3c1-6d3b59f27462/1467338138100000",
      "bundle_name": "pm0097",
      "version": "1467338138100000",
      "checksum": 2296406127,
      "size": 471381,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          194,
          66,
          195,
          67,
          2,
          223,
          154,
          210,
          158,
          89,
          44,
          213,
          1,
          192,
          18
        ]
      }
    },
    {
      "asset_id": "88cac46d-1a49-4856-b032-1aebd7c6b381/1467337896420000",
      "bundle_name": "pm0006",
      "version": "1467337896420000",
      "checksum": 1853949044,
      "size": 572885,
      "key": {
        "type": "Buffer",
        "data": [
          21,
          191,
          32,
          47,
          87,
          241,
          82,
          175,
          82,
          31,
          216,
          97,
          20,
          23,
          96,
          44
        ]
      }
    },
    {
      "asset_id": "8cc5523b-411e-46fd-a9e5-ff23a99a3ab8/1467338100922000",
      "bundle_name": "pm0083",
      "version": "1467338100922000",
      "checksum": 2480815007,
      "size": 522549,
      "key": {
        "type": "Buffer",
        "data": [
          248,
          58,
          232,
          225,
          55,
          200,
          87,
          92,
          199,
          89,
          178,
          250,
          214,
          127,
          110,
          131
        ]
      }
    },
    {
      "asset_id": "90f8eb5d-c398-4e9e-a53d-82c6367521db/1467338255908000",
      "bundle_name": "pm0143",
      "version": "1467338255908000",
      "checksum": 4281405046,
      "size": 374549,
      "key": {
        "type": "Buffer",
        "data": [
          130,
          86,
          102,
          67,
          128,
          43,
          69,
          203,
          207,
          49,
          25,
          123,
          103,
          7,
          198,
          100
        ]
      }
    },
    {
      "asset_id": "91bf0b0e-f0b9-44cf-bc2d-aae6521238aa/1467338017489000",
      "bundle_name": "pm0051",
      "version": "1467338017489000",
      "checksum": 2406519212,
      "size": 383461,
      "key": {
        "type": "Buffer",
        "data": [
          31,
          46,
          211,
          118,
          27,
          153,
          65,
          225,
          67,
          35,
          202,
          178,
          106,
          204,
          90,
          113
        ]
      }
    },
    {
      "asset_id": "9204b839-1500-4081-9636-92da623bc180/1467338036790000",
      "bundle_name": "pm0058",
      "version": "1467338036790000",
      "checksum": 1455762000,
      "size": 648405,
      "key": {
        "type": "Buffer",
        "data": [
          28,
          177,
          136,
          200,
          172,
          84,
          227,
          156,
          253,
          56,
          35,
          119,
          38,
          225,
          17,
          75
        ]
      }
    },
    {
      "asset_id": "95f269e8-dcbf-4b44-b119-3778a3ca01a8/1467338116951000",
      "bundle_name": "pm0089",
      "version": "1467338116951000",
      "checksum": 3522806455,
      "size": 982613,
      "key": {
        "type": "Buffer",
        "data": [
          176,
          7,
          97,
          62,
          121,
          201,
          197,
          227,
          17,
          246,
          229,
          15,
          99,
          133,
          216,
          61
        ]
      }
    },
    {
      "asset_id": "9649e04b-ccd8-4b1c-b066-cc75ed4c0976/1467338147687000",
      "bundle_name": "pm0101",
      "version": "1467338147687000",
      "checksum": 3190872357,
      "size": 169205,
      "key": {
        "type": "Buffer",
        "data": [
          8,
          135,
          172,
          251,
          101,
          127,
          207,
          148,
          42,
          144,
          247,
          199,
          14,
          89,
          24,
          123
        ]
      }
    },
    {
      "asset_id": "9782fac9-55ef-4e4d-be9a-81817056c1cb/1467337940860000",
      "bundle_name": "pm0023",
      "version": "1467337940860000",
      "checksum": 1298886450,
      "size": 297333,
      "key": {
        "type": "Buffer",
        "data": [
          9,
          249,
          146,
          21,
          105,
          66,
          65,
          179,
          50,
          121,
          92,
          231,
          127,
          116,
          85,
          100
        ]
      }
    },
    {
      "asset_id": "9798a501-8ad0-485f-8cd4-709551b3758d/1467337969283000",
      "bundle_name": "pm0034",
      "version": "1467337969283000",
      "checksum": 3066867897,
      "size": 446389,
      "key": {
        "type": "Buffer",
        "data": [
          253,
          126,
          178,
          182,
          234,
          116,
          107,
          91,
          87,
          87,
          129,
          236,
          205,
          15,
          151,
          62
        ]
      }
    },
    {
      "asset_id": "982db0ce-e85c-4991-a7ea-c6bfc431d6df/1467338232272000",
      "bundle_name": "pm0134",
      "version": "1467338232272000",
      "checksum": 2283576118,
      "size": 499925,
      "key": {
        "type": "Buffer",
        "data": [
          183,
          87,
          82,
          159,
          63,
          173,
          211,
          197,
          0,
          67,
          229,
          93,
          176,
          163,
          125,
          9
        ]
      }
    },
    {
      "asset_id": "9a7d43d7-f59e-4187-8fe5-d9b51512f73b/1467338149748000",
      "bundle_name": "pm0102",
      "version": "1467338149748000",
      "checksum": 1284870369,
      "size": 322629,
      "key": {
        "type": "Buffer",
        "data": [
          63,
          158,
          103,
          167,
          247,
          86,
          248,
          3,
          121,
          56,
          106,
          170,
          176,
          73,
          145,
          99
        ]
      }
    },
    {
      "asset_id": "9f845f0c-f0b5-4c54-bc6a-de6b3724dac6/1467337978708000",
      "bundle_name": "pm0037",
      "version": "1467337978708000",
      "checksum": 3666665656,
      "size": 505445,
      "key": {
        "type": "Buffer",
        "data": [
          14,
          30,
          208,
          74,
          147,
          185,
          91,
          99,
          38,
          150,
          149,
          152,
          91,
          156,
          178,
          215
        ]
      }
    },
    {
      "asset_id": "9ffa2321-4d32-49d3-925e-655eb95b1dab/1467338062038000",
      "bundle_name": "pm0068",
      "version": "1467338062038000",
      "checksum": 732215516,
      "size": 746341,
      "key": {
        "type": "Buffer",
        "data": [
          3,
          149,
          80,
          37,
          219,
          1,
          54,
          49,
          91,
          218,
          18,
          169,
          16,
          188,
          133,
          66
        ]
      }
    },
    {
      "asset_id": "a2199b3b-8e52-4cdb-b6a6-fb24cc682d03/1467338140520000",
      "bundle_name": "pm0098",
      "version": "1467338140520000",
      "checksum": 469557019,
      "size": 381685,
      "key": {
        "type": "Buffer",
        "data": [
          62,
          141,
          73,
          190,
          218,
          247,
          230,
          27,
          86,
          243,
          155,
          101,
          0,
          213,
          220,
          177
        ]
      }
    },
    {
      "asset_id": "a3ce2768-59fd-4bd4-8401-91fdae046c41/1467338014401000",
      "bundle_name": "pm0050",
      "version": "1467338014401000",
      "checksum": 910041377,
      "size": 176885,
      "key": {
        "type": "Buffer",
        "data": [
          154,
          86,
          228,
          117,
          237,
          2,
          103,
          6,
          65,
          133,
          230,
          229,
          1,
          140,
          63,
          178
        ]
      }
    },
    {
      "asset_id": "a3fafe10-33e1-43f1-8535-711d81918852/1467338108798000",
      "bundle_name": "pm0086",
      "version": "1467338108798000",
      "checksum": 2535874066,
      "size": 341781,
      "key": {
        "type": "Buffer",
        "data": [
          101,
          50,
          174,
          4,
          133,
          160,
          103,
          2,
          11,
          10,
          4,
          30,
          216,
          200,
          113,
          215
        ]
      }
    },
    {
      "asset_id": "a6d5d201-4e4c-4d71-9319-56f62e25882f/1467338054656000",
      "bundle_name": "pm0065",
      "version": "1467338054656000",
      "checksum": 1016610242,
      "size": 598069,
      "key": {
        "type": "Buffer",
        "data": [
          249,
          230,
          22,
          145,
          156,
          207,
          203,
          196,
          154,
          115,
          153,
          200,
          215,
          230,
          221,
          147
        ]
      }
    },
    {
      "asset_id": "a6eb9e98-0aa3-48bb-998a-6b329801b2ad/1467337911447000",
      "bundle_name": "pm0012",
      "version": "1467337911447000",
      "checksum": 1850275216,
      "size": 261829,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          182,
          35,
          57,
          62,
          52,
          177,
          184,
          67,
          207,
          148,
          88,
          76,
          241,
          224,
          241
        ]
      }
    },
    {
      "asset_id": "a7083104-fe2b-44c9-9155-4decaababcfc/1467338271291000",
      "bundle_name": "pm0149",
      "version": "1467338271291000",
      "checksum": 2540801543,
      "size": 444901,
      "key": {
        "type": "Buffer",
        "data": [
          194,
          109,
          85,
          232,
          72,
          55,
          53,
          185,
          99,
          189,
          62,
          67,
          199,
          121,
          102,
          128
        ]
      }
    },
    {
      "asset_id": "a915ef31-bbfb-4fc9-a035-fdc38bd58a24/1467337930032000",
      "bundle_name": "pm0019",
      "version": "1467337930032000",
      "checksum": 3904900246,
      "size": 512853,
      "key": {
        "type": "Buffer",
        "data": [
          48,
          145,
          72,
          208,
          150,
          47,
          16,
          163,
          237,
          101,
          54,
          107,
          74,
          226,
          219,
          243
        ]
      }
    },
    {
      "asset_id": "a9d06dc8-0750-4629-bc8f-9a11345b558f/1467337948760000",
      "bundle_name": "pm0026",
      "version": "1467337948760000",
      "checksum": 2332695828,
      "size": 579349,
      "key": {
        "type": "Buffer",
        "data": [
          159,
          94,
          13,
          63,
          106,
          217,
          235,
          188,
          127,
          254,
          67,
          20,
          155,
          198,
          135,
          209
        ]
      }
    },
    {
      "asset_id": "ae51a22a-731b-49d2-950e-449fa67f6927/1467338192115000",
      "bundle_name": "pm0119",
      "version": "1467338192115000",
      "checksum": 2587982253,
      "size": 348981,
      "key": {
        "type": "Buffer",
        "data": [
          28,
          136,
          247,
          51,
          227,
          239,
          243,
          74,
          144,
          142,
          204,
          5,
          150,
          2,
          240,
          21
        ]
      }
    },
    {
      "asset_id": "b1ff5ff8-1824-4d58-8cc7-29935f3bc4c6/1467337953914000",
      "bundle_name": "pm0028",
      "version": "1467337953914000",
      "checksum": 1031722435,
      "size": 494469,
      "key": {
        "type": "Buffer",
        "data": [
          79,
          53,
          199,
          146,
          43,
          138,
          254,
          37,
          31,
          58,
          20,
          79,
          147,
          15,
          85,
          149
        ]
      }
    },
    {
      "asset_id": "b446137a-d9b4-4d0b-b70f-f0b0b7e289e8/1467337901908000",
      "bundle_name": "pm0008",
      "version": "1467337901908000",
      "checksum": 2338263571,
      "size": 388821,
      "key": {
        "type": "Buffer",
        "data": [
          254,
          63,
          14,
          35,
          46,
          53,
          134,
          224,
          2,
          95,
          211,
          137,
          58,
          207,
          253,
          0
        ]
      }
    },
    {
      "asset_id": "b4fedf0e-bfd0-42c9-b264-6730b279bd1c/1467338111327000",
      "bundle_name": "pm0087",
      "version": "1467338111327000",
      "checksum": 199691426,
      "size": 306757,
      "key": {
        "type": "Buffer",
        "data": [
          228,
          82,
          116,
          43,
          216,
          201,
          84,
          81,
          28,
          161,
          159,
          47,
          183,
          40,
          69,
          198
        ]
      }
    },
    {
      "asset_id": "b621414f-3577-4b98-b082-67c308be6bef/1467338028928000",
      "bundle_name": "pm0055",
      "version": "1467338028928000",
      "checksum": 711230727,
      "size": 419365,
      "key": {
        "type": "Buffer",
        "data": [
          213,
          0,
          179,
          195,
          123,
          178,
          47,
          95,
          77,
          99,
          169,
          149,
          219,
          156,
          9,
          81
        ]
      }
    },
    {
      "asset_id": "b641049d-2f98-4b2d-9a6d-002d881c1baf/1467338049783000",
      "bundle_name": "pm0063",
      "version": "1467338049783000",
      "checksum": 993896222,
      "size": 351109,
      "key": {
        "type": "Buffer",
        "data": [
          231,
          34,
          33,
          33,
          66,
          211,
          200,
          48,
          128,
          35,
          79,
          33,
          226,
          246,
          5,
          170
        ]
      }
    },
    {
      "asset_id": "b8ee4922-043e-428f-badc-29086d57e469/1467338106393000",
      "bundle_name": "pm0085",
      "version": "1467338106393000",
      "checksum": 4073312204,
      "size": 640005,
      "key": {
        "type": "Buffer",
        "data": [
          193,
          6,
          165,
          4,
          115,
          241,
          99,
          250,
          79,
          133,
          89,
          196,
          84,
          249,
          48,
          16
        ]
      }
    },
    {
      "asset_id": "bd1d3e66-2bee-4d16-92c1-a8a4379b5450/1467338250695000",
      "bundle_name": "pm0141",
      "version": "1467338250695000",
      "checksum": 779316821,
      "size": 438645,
      "key": {
        "type": "Buffer",
        "data": [
          36,
          143,
          111,
          39,
          77,
          160,
          161,
          245,
          176,
          15,
          0,
          53,
          29,
          17,
          148,
          16
        ]
      }
    },
    {
      "asset_id": "be18774d-1d92-42eb-8115-fe9188b396be/1467338169880000",
      "bundle_name": "pm0110",
      "version": "1467338169880000",
      "checksum": 3792637673,
      "size": 489013,
      "key": {
        "type": "Buffer",
        "data": [
          245,
          159,
          55,
          29,
          70,
          44,
          143,
          93,
          104,
          181,
          6,
          77,
          161,
          229,
          143,
          8
        ]
      }
    },
    {
      "asset_id": "be947b4a-0ed8-46de-a204-b72527691591/1467338005667000",
      "bundle_name": "pm0047",
      "version": "1467338005667000",
      "checksum": 561670117,
      "size": 452853,
      "key": {
        "type": "Buffer",
        "data": [
          37,
          36,
          171,
          68,
          70,
          194,
          175,
          246,
          54,
          240,
          227,
          6,
          136,
          132,
          92,
          224
        ]
      }
    },
    {
      "asset_id": "c181116c-751a-486f-b0b4-b011a8185896/1467338155179000",
      "bundle_name": "pm0104",
      "version": "1467338155179000",
      "checksum": 2162023416,
      "size": 425333,
      "key": {
        "type": "Buffer",
        "data": [
          243,
          242,
          137,
          22,
          249,
          37,
          243,
          246,
          117,
          27,
          97,
          139,
          118,
          137,
          174,
          104
        ]
      }
    },
    {
      "asset_id": "c202565e-effb-41bd-8c5a-af3cd7c2eaf3/1467338276561000",
      "bundle_name": "pm0151",
      "version": "1467338276561000",
      "checksum": 1673533849,
      "size": 375925,
      "key": {
        "type": "Buffer",
        "data": [
          62,
          105,
          158,
          110,
          54,
          118,
          62,
          121,
          7,
          25,
          125,
          158,
          3,
          29,
          201,
          172
        ]
      }
    },
    {
      "asset_id": "c2fcd247-eb50-4aff-a1f6-986efc110547/1467338078050000",
      "bundle_name": "pm0074",
      "version": "1467338078050000",
      "checksum": 4036019335,
      "size": 339061,
      "key": {
        "type": "Buffer",
        "data": [
          33,
          224,
          185,
          144,
          37,
          31,
          209,
          212,
          179,
          185,
          198,
          56,
          69,
          75,
          114,
          93
        ]
      }
    },
    {
      "asset_id": "c3fa7137-ad8e-4bcf-afde-420236d60577/1467337914235000",
      "bundle_name": "pm0013",
      "version": "1467337914235000",
      "checksum": 3505463589,
      "size": 227525,
      "key": {
        "type": "Buffer",
        "data": [
          177,
          117,
          130,
          168,
          189,
          233,
          190,
          46,
          153,
          152,
          98,
          97,
          77,
          206,
          202,
          133
        ]
      }
    },
    {
      "asset_id": "c6348525-ea4e-4b89-a3ed-6a8c65dc74bf/1467338121786000",
      "bundle_name": "pm0091",
      "version": "1467338121786000",
      "checksum": 3790931487,
      "size": 257141,
      "key": {
        "type": "Buffer",
        "data": [
          0,
          20,
          224,
          52,
          13,
          215,
          28,
          59,
          55,
          65,
          72,
          52,
          248,
          106,
          64,
          203
        ]
      }
    },
    {
      "asset_id": "c8d5aa13-d467-4564-97d7-ea5d51b1f4bf/1467338184556000",
      "bundle_name": "pm0116",
      "version": "1467338184556000",
      "checksum": 2330836158,
      "size": 268613,
      "key": {
        "type": "Buffer",
        "data": [
          144,
          119,
          155,
          131,
          23,
          147,
          158,
          163,
          135,
          37,
          157,
          108,
          73,
          161,
          1,
          212
        ]
      }
    },
    {
      "asset_id": "c8e96216-f9cd-4982-94f9-c41f0e0494b2/1467338065163000",
      "bundle_name": "pm0069",
      "version": "1467338065163000",
      "checksum": 1482305660,
      "size": 522949,
      "key": {
        "type": "Buffer",
        "data": [
          237,
          45,
          134,
          60,
          127,
          65,
          232,
          43,
          180,
          76,
          197,
          193,
          100,
          235,
          23,
          251
        ]
      }
    },
    {
      "asset_id": "c918d441-8f37-4155-b824-0ed67f64cb5b/1467338237623000",
      "bundle_name": "pm0136",
      "version": "1467338237623000",
      "checksum": 1311375318,
      "size": 579397,
      "key": {
        "type": "Buffer",
        "data": [
          49,
          21,
          157,
          62,
          73,
          22,
          81,
          165,
          10,
          193,
          159,
          83,
          143,
          102,
          244,
          5
        ]
      }
    },
    {
      "asset_id": "ca81f72e-4db5-44c9-a293-087344b9ed2c/1467338226487000",
      "bundle_name": "pm0132",
      "version": "1467338226487000",
      "checksum": 3432597999,
      "size": 311317,
      "key": {
        "type": "Buffer",
        "data": [
          191,
          164,
          82,
          106,
          206,
          75,
          58,
          137,
          90,
          211,
          232,
          6,
          23,
          112,
          32,
          190
        ]
      }
    },
    {
      "asset_id": "cabf7f29-494e-4ef6-8f8f-0faa1b504316/1467338253248000",
      "bundle_name": "pm0142",
      "version": "1467338253248000",
      "checksum": 2359376288,
      "size": 548421,
      "key": {
        "type": "Buffer",
        "data": [
          83,
          74,
          253,
          226,
          242,
          85,
          67,
          5,
          214,
          196,
          167,
          75,
          243,
          2,
          64,
          182
        ]
      }
    },
    {
      "asset_id": "cc508127-5b49-4ca8-9cf7-8201ba4a0c40/1467337887933000",
      "bundle_name": "pm0003",
      "version": "1467337887933000",
      "checksum": 1178323715,
      "size": 470597,
      "key": {
        "type": "Buffer",
        "data": [
          255,
          160,
          32,
          30,
          144,
          228,
          103,
          202,
          241,
          186,
          123,
          81,
          221,
          90,
          215,
          239
        ]
      }
    },
    {
      "asset_id": "ce9f53bb-fb8d-4f6a-bd14-b45e6d8d29b6/1467337921866000",
      "bundle_name": "pm0016",
      "version": "1467337921866000",
      "checksum": 3886671188,
      "size": 462501,
      "key": {
        "type": "Buffer",
        "data": [
          253,
          204,
          112,
          10,
          180,
          199,
          39,
          108,
          140,
          251,
          165,
          69,
          70,
          61,
          59,
          215
        ]
      }
    },
    {
      "asset_id": "cec1b247-61a2-44ca-a4ca-8ff5563d6c80/1467338031373000",
      "bundle_name": "pm0056",
      "version": "1467338031373000",
      "checksum": 2642995446,
      "size": 450053,
      "key": {
        "type": "Buffer",
        "data": [
          230,
          106,
          68,
          185,
          34,
          176,
          20,
          79,
          83,
          218,
          166,
          101,
          253,
          54,
          62,
          237
        ]
      }
    },
    {
      "asset_id": "cf10bb9b-cde8-40b4-b48f-8cf7250ccb8f/1467338260989000",
      "bundle_name": "pm0145",
      "version": "1467338260989000",
      "checksum": 746525283,
      "size": 524981,
      "key": {
        "type": "Buffer",
        "data": [
          17,
          117,
          11,
          80,
          0,
          153,
          30,
          71,
          77,
          129,
          118,
          168,
          57,
          119,
          6,
          126
        ]
      }
    },
    {
      "asset_id": "d31f77fd-da42-4b98-807d-578b3297a155/1467338132818000",
      "bundle_name": "pm0095",
      "version": "1467338132818000",
      "checksum": 3479299263,
      "size": 385061,
      "key": {
        "type": "Buffer",
        "data": [
          219,
          81,
          21,
          128,
          244,
          205,
          80,
          158,
          15,
          151,
          195,
          245,
          35,
          216,
          233,
          152
        ]
      }
    },
    {
      "asset_id": "d449b9b0-2f5b-4148-9de5-a7cc45483d39/1467338057204000",
      "bundle_name": "pm0066",
      "version": "1467338057204000",
      "checksum": 905613009,
      "size": 496773,
      "key": {
        "type": "Buffer",
        "data": [
          242,
          236,
          13,
          203,
          212,
          116,
          178,
          83,
          188,
          93,
          142,
          105,
          159,
          131,
          62,
          138
        ]
      }
    },
    {
      "asset_id": "d86c65f7-d521-4aa1-9324-d2690d8a61a0/1467337989725000",
      "bundle_name": "pm0041",
      "version": "1467337989725000",
      "checksum": 1904595890,
      "size": 250725,
      "key": {
        "type": "Buffer",
        "data": [
          202,
          5,
          83,
          30,
          200,
          0,
          221,
          52,
          152,
          8,
          230,
          223,
          255,
          94,
          74,
          29
        ]
      }
    },
    {
      "asset_id": "d9e0e2c6-eead-4037-b387-b004446ae72e/1467338218551000",
      "bundle_name": "pm0129",
      "version": "1467338218551000",
      "checksum": 980125566,
      "size": 288885,
      "key": {
        "type": "Buffer",
        "data": [
          209,
          4,
          61,
          11,
          199,
          46,
          227,
          61,
          143,
          149,
          46,
          162,
          117,
          132,
          159,
          76
        ]
      }
    },
    {
      "asset_id": "dcd89218-66fa-4ea3-a549-7d49df98b5d1/1467338199666000",
      "bundle_name": "pm0122",
      "version": "1467338199666000",
      "checksum": 2280286951,
      "size": 603957,
      "key": {
        "type": "Buffer",
        "data": [
          127,
          30,
          200,
          215,
          166,
          140,
          205,
          235,
          43,
          120,
          156,
          236,
          71,
          81,
          166,
          5
        ]
      }
    },
    {
      "asset_id": "df8ecae4-0e86-4a72-863c-7d77b6616082/1467337893350000",
      "bundle_name": "pm0005",
      "version": "1467337893350000",
      "checksum": 1457352906,
      "size": 533077,
      "key": {
        "type": "Buffer",
        "data": [
          81,
          35,
          11,
          241,
          155,
          168,
          33,
          69,
          22,
          245,
          124,
          21,
          186,
          231,
          15,
          28
        ]
      }
    },
    {
      "asset_id": "e43f5bcd-e16e-47aa-aca3-10f3d1933c6f/1467338042090000",
      "bundle_name": "pm0060",
      "version": "1467338042090000",
      "checksum": 383772761,
      "size": 265429,
      "key": {
        "type": "Buffer",
        "data": [
          42,
          55,
          18,
          65,
          254,
          79,
          107,
          24,
          30,
          15,
          71,
          13,
          212,
          58,
          134,
          232
        ]
      }
    },
    {
      "asset_id": "e5804dfa-9982-4930-8ef3-2a97d09531b3/1467338210041000",
      "bundle_name": "pm0126",
      "version": "1467338210041000",
      "checksum": 670604132,
      "size": 784165,
      "key": {
        "type": "Buffer",
        "data": [
          117,
          7,
          57,
          61,
          50,
          220,
          226,
          222,
          170,
          182,
          120,
          56,
          154,
          217,
          254,
          98
        ]
      }
    },
    {
      "asset_id": "e6e133f7-fd03-458b-90d7-f870346afd9d/1467338075280000",
      "bundle_name": "pm0073",
      "version": "1467338075280000",
      "checksum": 349393447,
      "size": 502805,
      "key": {
        "type": "Buffer",
        "data": [
          100,
          10,
          123,
          66,
          149,
          247,
          105,
          12,
          158,
          177,
          208,
          191,
          222,
          48,
          50,
          230
        ]
      }
    },
    {
      "asset_id": "eb7ef4bc-25b0-4421-a41e-782c3c22a931/1467338223728000",
      "bundle_name": "pm0131",
      "version": "1467338223728000",
      "checksum": 1211254127,
      "size": 479029,
      "key": {
        "type": "Buffer",
        "data": [
          191,
          130,
          115,
          147,
          22,
          24,
          66,
          155,
          111,
          239,
          61,
          187,
          230,
          183,
          157,
          21
        ]
      }
    },
    {
      "asset_id": "eba66e6c-ae77-4e10-8441-375219929090/1467338072670000",
      "bundle_name": "pm0072",
      "version": "1467338072670000",
      "checksum": 249041989,
      "size": 250837,
      "key": {
        "type": "Buffer",
        "data": [
          20,
          207,
          241,
          130,
          77,
          219,
          36,
          242,
          17,
          148,
          114,
          144,
          89,
          69,
          164,
          114
        ]
      }
    },
    {
      "asset_id": "ebbd93a9-ee72-4a43-bd45-a69d68e52082/1467338245369000",
      "bundle_name": "pm0139",
      "version": "1467338245369000",
      "checksum": 1978528497,
      "size": 467253,
      "key": {
        "type": "Buffer",
        "data": [
          126,
          118,
          147,
          173,
          232,
          218,
          26,
          39,
          175,
          9,
          176,
          39,
          146,
          24,
          96,
          74
        ]
      }
    },
    {
      "asset_id": "ecc76b6a-25de-4aa8-a5f0-2c1271986c9c/1467337938081000",
      "bundle_name": "pm0022",
      "version": "1467337938081000",
      "checksum": 3886647129,
      "size": 694853,
      "key": {
        "type": "Buffer",
        "data": [
          181,
          217,
          47,
          90,
          69,
          76,
          140,
          213,
          27,
          8,
          225,
          220,
          29,
          227,
          52,
          231
        ]
      }
    },
    {
      "asset_id": "ece95758-618b-40f4-92b8-97015de97e12/1467338083406000",
      "bundle_name": "pm0076",
      "version": "1467338083406000",
      "checksum": 1255437993,
      "size": 582533,
      "key": {
        "type": "Buffer",
        "data": [
          85,
          117,
          93,
          200,
          222,
          16,
          127,
          89,
          38,
          196,
          70,
          146,
          172,
          255,
          129,
          215
        ]
      }
    },
    {
      "asset_id": "ed66ce66-3013-4a4e-99ea-564351cdddd1/1467338023538000",
      "bundle_name": "pm0053",
      "version": "1467338023538000",
      "checksum": 2415520234,
      "size": 424917,
      "key": {
        "type": "Buffer",
        "data": [
          4,
          104,
          64,
          172,
          25,
          107,
          184,
          249,
          24,
          231,
          115,
          134,
          170,
          137,
          243,
          183
        ]
      }
    },
    {
      "asset_id": "ef4b7240-51a4-4e6a-aba2-c50b3db87e8a/1467338220999000",
      "bundle_name": "pm0130",
      "version": "1467338220999000",
      "checksum": 3564448918,
      "size": 474165,
      "key": {
        "type": "Buffer",
        "data": [
          131,
          175,
          91,
          68,
          203,
          167,
          124,
          245,
          42,
          14,
          106,
          33,
          254,
          105,
          138,
          113
        ]
      }
    },
    {
      "asset_id": "f03b2196-af8b-48cc-b908-33726f87c2cb/1467338196940000",
      "bundle_name": "pm0121",
      "version": "1467338196940000",
      "checksum": 1945191842,
      "size": 286293,
      "key": {
        "type": "Buffer",
        "data": [
          13,
          254,
          120,
          40,
          134,
          172,
          228,
          110,
          121,
          108,
          104,
          208,
          24,
          247,
          139,
          145
        ]
      }
    },
    {
      "asset_id": "f1e99bfb-f316-473d-a587-88fbeed3c61d/1467337924726000",
      "bundle_name": "pm0017",
      "version": "1467337924726000",
      "checksum": 927906204,
      "size": 472037,
      "key": {
        "type": "Buffer",
        "data": [
          205,
          34,
          163,
          53,
          191,
          73,
          239,
          94,
          202,
          167,
          146,
          71,
          63,
          195,
          181,
          110
        ]
      }
    },
    {
      "asset_id": "f2e3b179-4d37-493e-a5ee-2504d8cd4c7f/1467338059623000",
      "bundle_name": "pm0067",
      "version": "1467338059623000",
      "checksum": 409184053,
      "size": 523733,
      "key": {
        "type": "Buffer",
        "data": [
          140,
          24,
          216,
          85,
          71,
          188,
          44,
          2,
          113,
          175,
          169,
          55,
          54,
          190,
          1,
          153
        ]
      }
    },
    {
      "asset_id": "f3a3150a-9cf9-4adf-9b9c-1fc1dd88a31a/1467337890581000",
      "bundle_name": "pm0004",
      "version": "1467337890581000",
      "checksum": 2546864236,
      "size": 471957,
      "key": {
        "type": "Buffer",
        "data": [
          19,
          167,
          21,
          226,
          87,
          223,
          146,
          28,
          253,
          218,
          94,
          180,
          203,
          90,
          39,
          98
        ]
      }
    },
    {
      "asset_id": "f65cd1c3-d38c-4eaf-a6d0-731c679a51c9/1467338103657000",
      "bundle_name": "pm0084",
      "version": "1467338103657000",
      "checksum": 3074575148,
      "size": 435141,
      "key": {
        "type": "Buffer",
        "data": [
          181,
          57,
          113,
          37,
          101,
          97,
          98,
          155,
          77,
          143,
          60,
          197,
          199,
          124,
          44,
          219
        ]
      }
    },
    {
      "asset_id": "f9196986-24e0-4ed6-9ab4-da74c18df074/1467337956406000",
      "bundle_name": "pm0029",
      "version": "1467337956406000",
      "checksum": 3735682586,
      "size": 376181,
      "key": {
        "type": "Buffer",
        "data": [
          244,
          13,
          158,
          218,
          18,
          204,
          157,
          240,
          81,
          88,
          83,
          187,
          70,
          230,
          207,
          246
        ]
      }
    },
    {
      "asset_id": "faab237d-cf8a-4c73-b5fe-4c04a7acb77e/1467338242729000",
      "bundle_name": "pm0138",
      "version": "1467338242729000",
      "checksum": 3838369959,
      "size": 370773,
      "key": {
        "type": "Buffer",
        "data": [
          126,
          223,
          157,
          178,
          73,
          42,
          106,
          164,
          81,
          249,
          116,
          5,
          44,
          145,
          78,
          60
        ]
      }
    },
    {
      "asset_id": "fc7d2574-7176-4c18-ba33-9090a0df84d0/1467338274036000",
      "bundle_name": "pm0150",
      "version": "1467338274036000",
      "checksum": 2612302599,
      "size": 474229,
      "key": {
        "type": "Buffer",
        "data": [
          243,
          39,
          44,
          91,
          44,
          242,
          216,
          6,
          206,
          111,
          239,
          242,
          86,
          174,
          60,
          200
        ]
      }
    }
  ],
    "timestamp_ms": "1467338276561000",
    "$unknownFields": []
}
5:33:58 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:33:58 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:33:58 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258036760",
      "new_timestamp_ms": "1472258036760",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:33:58 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:33:58 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:20 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263761708516638720",
    "9263761710664122368",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.76361083984375,
    "longitude": -122.40145874023438,
    "$unknownFields": []
}
5:34:20 PM [Request] CheckChallenge {}
5:34:20 PM [Request] GetHatchedEggs {}
5:34:20 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258036760",
    "$unknownFields": []
}
5:34:20 PM [Request] CheckAwardedBadges {}
5:34:20 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:20 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 413.3336181640625,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 369.0052185058594,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 418.8120422363281,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 470.61004638671875,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 157.13204956054688,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 181.98519897460938,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258043217",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "737",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 433.61724853515625,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 305.9316711425781,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258059976",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 393.5369567871094,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258021078",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "YELLOW",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "1902",
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "11044074643425148189"
        },
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258048118",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "5000",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 450.07391357421875,
          "encounter_id": "4176183687967129517",
          "fort_id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "fort_image_url": "http://lh5.ggpht.com/q9lT1EcK_UjyvpYpXw5NstGWyhU6ZyqxOkX2-HlF0R-jukQK5kvmllTfHnHWpbgMlXT7vCsBjxeuaJySyKEd"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 379.65484619140625,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 247.4647216796875,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 247.4647216796875,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    },
    {
      "s2_cell_id": "9263761708516638720",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "0f3873e6e7574771b6222f01e9036d88.16",
          "last_modified_timestamp_ms": "1472035498214",
          "latitude": 37.763025,
          "longitude": -122.409094,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "796cd9803dfc43b99acd2bb26ca2b3e0.16",
          "last_modified_timestamp_ms": "1472153895184",
          "latitude": 37.761797,
          "longitude": -122.408524,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c1a7467df3674060a1ee242d1a788157.16",
          "last_modified_timestamp_ms": "1472204985702",
          "latitude": 37.763266,
          "longitude": -122.407918,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "dd858775791b412780feb18a9dd80e1a.16",
          "last_modified_timestamp_ms": "1472248000441",
          "latitude": 37.763327,
          "longitude": -122.407177,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761710664122368",
      "current_timestamp_ms": "1472258059976",
      "forts": [
        {
          "id": "195cecfd58c94443a73d5fb40b7e5282.16",
          "last_modified_timestamp_ms": "1472258044335",
          "latitude": 37.765084,
          "longitude": -122.40719,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "GYARADOS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "3895c687a1b64973b4ffc35df92e5919.16",
          "last_modified_timestamp_ms": "1472232708232",
          "latitude": 37.763958,
          "longitude": -122.408268,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "61de56ec25bd4b8b99b04a753c3df624.16",
          "last_modified_timestamp_ms": "1472249166801",
          "latitude": 37.763834,
          "longitude": -122.407587,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c423578305fa46a7989f9448777c5ed5.16",
          "last_modified_timestamp_ms": "1472249936822",
          "latitude": 37.765594,
          "longitude": -122.407383,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ca6faacc02c646cd9246e8d3e8d1ddef.16",
          "last_modified_timestamp_ms": "1472255044482",
          "latitude": 37.764768,
          "longitude": -122.409556,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76534667720108,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.764799576065634,
          "longitude": -122.40889762983666
        },
        {
          "latitude": 37.76535381541474,
          "longitude": -122.40951711577755
        },
        {
          "latitude": 37.76470370332518,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76491416907369,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.76532796129034,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76473804036968,
          "longitude": -122.40934012016702
        },
        {
          "latitude": 37.764561911368844,
          "longitude": -122.40942861800956
        },
        {
          "latitude": 37.76467650283257,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.764812504662785,
          "longitude": -122.40934012016702
        },
        {
          "latitude": 37.76462923910506,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76487404052659,
          "longitude": -122.40889762983666
        },
        {
          "latitude": 37.765517017157805,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76510456866283,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76549695344303,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.76476524052762,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.764901240368125,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.7652320884632,
          "longitude": -122.40942861800956
        },
        {
          "latitude": 37.76486690495189,
          "longitude": -122.40916312425841
        },
        {
          "latitude": 37.76455477480831,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76542114063665,
          "longitude": -122.40978260863453
        },
        {
          "latitude": 37.76531947648099,
          "longitude": -122.40987110610446
        },
        {
          "latitude": 37.764955639861334,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76473224608435,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.764548982391126,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76483970483898,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.76503010430039,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.764690776139645,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.764534711120824,
          "longitude": -122.40951711577755
        },
        {
          "latitude": 37.765144697626326,
          "longitude": -122.40898612805175
        },
        {
          "latitude": 37.76547554192348,
          "longitude": -122.40960561347107
        },
        {
          "latitude": 37.76504303346731,
          "longitude": -122.40907462619234
        },
        {
          "latitude": 37.76492844014637,
          "longitude": -122.40872063318291
        },
        {
          "latitude": 37.76452891720579,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.765564280683655,
          "longitude": -122.40907462619234
        },
        {
          "latitude": 37.76517903294863,
          "longitude": -122.40863213474428
        },
        {
          "latitude": 37.76544834131171,
          "longitude": -122.40969411109003
        },
        {
          "latitude": 37.76482677588892,
          "longitude": -122.40880913154705
        },
        {
          "latitude": 37.76513756131806,
          "longitude": -122.40925162224995
        },
        {
          "latitude": 37.765021622045374,
          "longitude": -122.40987110610446
        },
        {
          "latitude": 37.76477816746867,
          "longitude": -122.40969411109003
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:34:20 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:34:20 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:34:20 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258036760",
      "new_timestamp_ms": "1472258036760",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:34:20 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:34:20 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:30 PM [Request] GetMapObjects {
  "cell_id": [
    "9263763460863295488",
    "9263761691336769536",
    "9263761693484253184",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.763389587402344,
    "longitude": -122.40133666992188,
    "$unknownFields": []
}
5:34:30 PM [Request] CheckChallenge {}
5:34:30 PM [Request] GetHatchedEggs {}
5:34:30 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258036760",
    "$unknownFields": []
}
5:34:30 PM [Request] CheckAwardedBadges {}
5:34:30 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:31 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 433.9273986816406,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 385.8970642089844,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 428.4923400878906,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 469.92724609375,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 173.42282104492188,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 156.52626037597656,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258069466",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "737",
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 417.777587890625,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 285.8501281738281,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258070300",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 392.86871337890625,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 512.603759765625,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258021078",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "YELLOW",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "1902",
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258048118",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "5000",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258070300",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 475.4066467285156,
          "encounter_id": "4176183687967129517",
          "fort_id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "fort_image_url": "http://lh5.ggpht.com/q9lT1EcK_UjyvpYpXw5NstGWyhU6ZyqxOkX2-HlF0R-jukQK5kvmllTfHnHWpbgMlXT7vCsBjxeuaJySyKEd"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 404.9488220214844,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 273.7303161621094,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 273.7303161621094,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:34:31 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:34:31 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:34:31 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258036760",
      "new_timestamp_ms": "1472258036760",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:34:31 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:34:31 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:31 PM [Request] DiskEncounter {
  "encounter_id": "18446744072113947775",
    "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "player_latitude": 37.763389587402344,
    "player_longitude": -122.40133666992188,
    "$unknownFields": []
}
5:34:31 PM [Request] CheckChallenge {}
5:34:31 PM [Request] GetHatchedEggs {}
5:34:31 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258036760",
    "$unknownFields": []
}
5:34:31 PM [Request] CheckAwardedBadges {}
5:34:31 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:31 PM [Response] DiskEncounter {
  "result": "SUCCESS",
    "pokemon_data": {
    "pokemon_id": "PIDGEY",
      "cp": 168,
      "stamina": 36,
      "stamina_max": 36,
      "move_1": "QUICK_ATTACK_FAST",
      "move_2": "AERIAL_ACE",
      "height_m": 0.33803677558898926,
      "weight_kg": 2.163444995880127,
      "individual_attack": 3,
      "individual_defense": 6,
      "individual_stamina": 2,
      "cp_multiplier": 0.443107545375824
  },
  "capture_probability": {
    "pokeball_type": [
      "ITEM_POKE_BALL",
      "ITEM_GREAT_BALL",
      "ITEM_ULTRA_BALL"
    ],
      "capture_probability": {
      "0": 0.45135772228240967,
        "1": 0.5936185121536255,
        "2": 0.6989916563034058
    }
  },
  "$unknownFields": []
}
5:34:31 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:34:31 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:34:31 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258036760",
      "new_timestamp_ms": "1472258070618",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258070615",
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIDGEY",
            "times_encountered": 31,
            "times_captured": 30
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258070615",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.58540916442871,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 354,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:34:31 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:34:31 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:42 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263763460863295488",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.76317596435547,
    "longitude": -122.40121459960938,
    "$unknownFields": []
}
5:34:42 PM [Request] CheckChallenge {}
5:34:42 PM [Request] GetHatchedEggs {}
5:34:42 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258070618",
    "$unknownFields": []
}
5:34:42 PM [Request] CheckAwardedBadges {}
5:34:42 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:34:42 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 456.1478576660156,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 404.9075012207031,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 440.67852783203125,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 471.7566223144531,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 193.11483764648438,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 130.76158142089844,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258079270",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "737",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 403.6485290527344,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 267.311767578125,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258081572",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 393.1189880371094,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 500.5667419433594,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258076412",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "YELLOW",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "1902",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258048118",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "5000",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258081572",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 501.6697692871094,
          "encounter_id": "4176183687967129517",
          "fort_id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "fort_image_url": "http://lh5.ggpht.com/q9lT1EcK_UjyvpYpXw5NstGWyhU6ZyqxOkX2-HlF0R-jukQK5kvmllTfHnHWpbgMlXT7vCsBjxeuaJySyKEd"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 430.62554931640625,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 300.7648010253906,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 300.7648010253906,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:34:42 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:34:42 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:34:42 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258070618",
      "new_timestamp_ms": "1472258070618",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:34:42 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:34:42 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:35:12 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263763460863295488",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.76316833496094,
    "longitude": -122.40120697021484,
    "$unknownFields": []
}
5:35:12 PM [Request] CheckChallenge {}
5:35:12 PM [Request] GetHatchedEggs {}
5:35:12 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258070618",
    "$unknownFields": []
}
5:35:12 PM [Request] CheckAwardedBadges {}
5:35:12 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:35:13 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 633.9237060546875,
          "encounter_id": "8055329911839314845",
          "fort_id": "56ac2837beee4a3b9bbc60301356732e.16",
          "fort_image_url": "http://lh3.ggpht.com/JwmWR1K0bPg1Mb7fLoUPXLjJD47S_wi7RjWxO1Y2-Z13OKctrW-6xKEPIdCLo5bd1qTL4opQdsDtHSgkg2Y"
        }
      ]
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 455.02001953125,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 403.6044616699219,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "GASTLY",
          "distance_in_meters": 470.17718505859375,
          "encounter_id": "6404882486871515245",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        },
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 439.16461181640625,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 470.17718505859375,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 191.87095642089844,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 131.61512756347656,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258079270",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "737",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 402.43841552734375,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 266.3229675292969,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258112460",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 394.6629638671875,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 394.6629638671875,
          "encounter_id": "5561859504948100669",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 502.1060791015625,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258076412",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "YELLOW",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "1902",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 146.4079132080078,
          "encounter_id": "6514531007457744429",
          "fort_id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "fort_image_url": "http://lh3.ggpht.com/q78Jms-jmv3uVb2JkLpA9rB_V9fxzJb4LU7D5HCcB4KGSz4-PzoOufQSCyEvyx_xcto397uqyyO0LLyRFq8W"
        }
      ]
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258094905",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "4500",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258112460",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 353.2846984863281,
          "encounter_id": "1379392382886495245",
          "fort_id": "5146003df1504c95a7e7545882240821.16",
          "fort_image_url": "http://lh3.ggpht.com/TqVm1_BYYwQQ9IPgYelmr26R6Oc4esrdXkJaUhqGHEhoqcnLvkfRKJ94zYOAkXoV98ZkFQQljP7pKxHFc-EMnw"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 500.96392822265625,
          "encounter_id": "4176183687967129517",
          "fort_id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "fort_image_url": "http://lh5.ggpht.com/q9lT1EcK_UjyvpYpXw5NstGWyhU6ZyqxOkX2-HlF0R-jukQK5kvmllTfHnHWpbgMlXT7vCsBjxeuaJySyKEd"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 430.8699951171875,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 300.2510070800781,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 300.2510070800781,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:35:13 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:35:13 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:35:13 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258070618",
      "new_timestamp_ms": "1472258112409",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258112409",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 354,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:35:13 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:35:13 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:35:42 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263763460863295488",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.76317596435547,
    "longitude": -122.40122985839844,
    "$unknownFields": []
}
5:35:42 PM [Request] CheckChallenge {}
5:35:42 PM [Request] GetHatchedEggs {}
5:35:42 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258112409",
    "$unknownFields": []
}
5:35:42 PM [Request] CheckAwardedBadges {}
5:35:42 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:35:43 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 631.9263305664062,
          "encounter_id": "8055329911839314845",
          "fort_id": "56ac2837beee4a3b9bbc60301356732e.16",
          "fort_image_url": "http://lh3.ggpht.com/JwmWR1K0bPg1Mb7fLoUPXLjJD47S_wi7RjWxO1Y2-Z13OKctrW-6xKEPIdCLo5bd1qTL4opQdsDtHSgkg2Y"
        }
      ]
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 454.64910888671875,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 403.6103210449219,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "GASTLY",
          "distance_in_meters": 471.5855407714844,
          "encounter_id": "6404882486871515245",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 368.5050048828125,
          "encounter_id": "2878493815461178525",
          "fort_id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "fort_image_url": "http://lh5.ggpht.com/CRxvdHQ4JUNTF776WEWehTNz7ecbOolfyd5G84MM3Y45Cqi2DMK0wrlVuilZCzKXAmXWNaMdsmitX5lhxEfQ"
        },
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 439.82373046875,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 471.5855407714844,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 191.74359130859375,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 132.45945739746094,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258122945",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 404.5483093261719,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 268.5008239746094,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "MEOWTH",
          "distance_in_meters": 527.6082763671875,
          "encounter_id": "3265958414641194909",
          "fort_id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "fort_image_url": "http://lh5.ggpht.com/IgeY93KhVoodCVGFonnM7ubeCnvH78m5C7N6c8kAZUUf9aBbewuJVVr4lal-5eAUIaxFJOirzSGrwvmvXxTj"
        }
      ]
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258142513",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 393.0431213378906,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 393.0431213378906,
          "encounter_id": "5561859504948100669",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 501.331787109375,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258136980",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "2000",
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 145.35272216796875,
          "encounter_id": "6514531007457744429",
          "fort_id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "fort_image_url": "http://lh3.ggpht.com/q78Jms-jmv3uVb2JkLpA9rB_V9fxzJb4LU7D5HCcB4KGSz4-PzoOufQSCyEvyx_xcto397uqyyO0LLyRFq8W"
        }
      ]
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258094905",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "4500",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258142513",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 351.55126953125,
          "encounter_id": "1379392382886495245",
          "fort_id": "5146003df1504c95a7e7545882240821.16",
          "fort_image_url": "http://lh3.ggpht.com/TqVm1_BYYwQQ9IPgYelmr26R6Oc4esrdXkJaUhqGHEhoqcnLvkfRKJ94zYOAkXoV98ZkFQQljP7pKxHFc-EMnw"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 428.9073486328125,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 298.9607238769531,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 298.9607238769531,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:35:43 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:35:43 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:35:43 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258112409",
      "new_timestamp_ms": "1472258112409",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:35:43 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:35:43 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:13 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263763460863295488",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.7631721496582,
    "longitude": -122.40122985839844,
    "$unknownFields": []
}
5:36:13 PM [Request] CheckChallenge {}
5:36:13 PM [Request] GetHatchedEggs {}
5:36:13 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258112409",
    "$unknownFields": []
}
5:36:13 PM [Request] CheckAwardedBadges {}
5:36:13 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:13 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 632.234619140625,
          "encounter_id": "8055329911839314845",
          "fort_id": "56ac2837beee4a3b9bbc60301356732e.16",
          "fort_image_url": "http://lh3.ggpht.com/JwmWR1K0bPg1Mb7fLoUPXLjJD47S_wi7RjWxO1Y2-Z13OKctrW-6xKEPIdCLo5bd1qTL4opQdsDtHSgkg2Y"
        }
      ]
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 455.0617980957031,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 404.0000915527344,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "GASTLY",
          "distance_in_meters": 471.777099609375,
          "encounter_id": "6404882486871515245",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 368.7205810546875,
          "encounter_id": "2878493815461178525",
          "fort_id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "fort_image_url": "http://lh5.ggpht.com/CRxvdHQ4JUNTF776WEWehTNz7ecbOolfyd5G84MM3Y45Cqi2DMK0wrlVuilZCzKXAmXWNaMdsmitX5lhxEfQ"
        },
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 440.1457824707031,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 471.777099609375,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472257983120",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "LAPRAS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 192.14239501953125,
          "encounter_id": "1494114255417472125",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 132.03555297851562,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258162583",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "2000",
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 404.4886779785156,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 268.3611145019531,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "MEOWTH",
          "distance_in_meters": 527.3743286132812,
          "encounter_id": "3265958414641194909",
          "fort_id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "fort_image_url": "http://lh5.ggpht.com/IgeY93KhVoodCVGFonnM7ubeCnvH78m5C7N6c8kAZUUf9aBbewuJVVr4lal-5eAUIaxFJOirzSGrwvmvXxTj"
        }
      ]
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258172804",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 392.9031066894531,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 392.9031066894531,
          "encounter_id": "5561859504948100669",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 501.0245361328125,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258149906",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "GYARADOS",
          "gym_points": "4000",
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 145.08865356445312,
          "encounter_id": "6514531007457744429",
          "fort_id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "fort_image_url": "http://lh3.ggpht.com/q78Jms-jmv3uVb2JkLpA9rB_V9fxzJb4LU7D5HCcB4KGSz4-PzoOufQSCyEvyx_xcto397uqyyO0LLyRFq8W"
        }
      ]
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258165414",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "2000",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258172804",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 351.9198303222656,
          "encounter_id": "1379392382886495245",
          "fort_id": "5146003df1504c95a7e7545882240821.16",
          "fort_image_url": "http://lh3.ggpht.com/TqVm1_BYYwQQ9IPgYelmr26R6Oc4esrdXkJaUhqGHEhoqcnLvkfRKJ94zYOAkXoV98ZkFQQljP7pKxHFc-EMnw"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 429.2265930175781,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 361.1280517578125,
          "encounter_id": "16623167962884340461",
          "fort_id": "467d738043534a97937671ced3b1c40e.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-ww9CVbNeeP3W0V8YUoPteP4YZ2L-OlUd-2JKZKz_0Xpz31RK0KH0iLzdpb3CYIzPV0cW07mk5ywmYx2t3k"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 299.3734130859375,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 299.3734130859375,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:36:13 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:13 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:13 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258112409",
      "new_timestamp_ms": "1472258112409",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:36:13 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:13 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:27 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "$unknownFields": []
}
5:36:27 PM [Request] CheckChallenge {}
5:36:27 PM [Request] GetHatchedEggs {}
5:36:27 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258112409",
    "$unknownFields": []
}
5:36:27 PM [Request] CheckAwardedBadges {}
5:36:27 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:28 PM [Response] CatchPokemon {
  "status": "CATCH_MISSED",
    "$unknownFields": []
}
5:36:28 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:28 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:28 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258112409",
      "new_timestamp_ms": "1472258187268",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258187266",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 355,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258187266",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 175
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:28 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:28 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:30 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "$unknownFields": []
}
5:36:30 PM [Request] CheckChallenge {}
5:36:30 PM [Request] GetHatchedEggs {}
5:36:30 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258187268",
    "$unknownFields": []
}
5:36:30 PM [Request] CheckAwardedBadges {}
5:36:30 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:30 PM [Response] CatchPokemon {
  "status": "CATCH_MISSED",
    "$unknownFields": []
}
5:36:30 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:30 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:30 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258187268",
      "new_timestamp_ms": "1472258189546",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258189544",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 356,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258189544",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 174
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:30 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:30 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:33 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "$unknownFields": []
}
5:36:33 PM [Request] CheckChallenge {}
5:36:33 PM [Request] GetHatchedEggs {}
5:36:33 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258189546",
    "$unknownFields": []
}
5:36:33 PM [Request] CheckAwardedBadges {}
5:36:33 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:33 PM [Response] CatchPokemon {
  "status": "CATCH_MISSED",
    "$unknownFields": []
}
5:36:33 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:33 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:33 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258189546",
      "new_timestamp_ms": "1472258192821",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258192818",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 357,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258192818",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 173
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:33 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:33 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:35 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "$unknownFields": []
}
5:36:35 PM [Request] CheckChallenge {}
5:36:35 PM [Request] GetHatchedEggs {}
5:36:35 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258192821",
    "$unknownFields": []
}
5:36:35 PM [Request] CheckAwardedBadges {}
5:36:35 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:35 PM [Response] CatchPokemon {
  "status": "CATCH_MISSED",
    "$unknownFields": []
}
5:36:35 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:35 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:35 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258192821",
      "new_timestamp_ms": "1472258194868",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258194866",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 358,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258194866",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 172
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:35 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:35 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:42 PM [Request] GetMapObjects {
  "cell_id": [
    "9263761691336769536",
    "9263761693484253184",
    "9263763460863295488",
    "9263761712811606016",
    "9263761714959089664",
    "9263761717106573312",
    "9263761719254056960",
    "9263761721401540608",
    "9263761723549024256",
    "9263761725696507904",
    "9263761727843991552",
    "9263763465158262784",
    "9263763467305746432",
    "9263763469453230080",
    "9263763471600713728",
    "9263763473748197376",
    "9263763475895681024",
    "9263763478043164672",
    "9263763480190648320"
  ],
    "since_timestamp_ms": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ],
    "latitude": 37.763145446777344,
    "longitude": -122.4012222290039,
    "$unknownFields": []
}
5:36:42 PM [Request] CheckChallenge {}
5:36:42 PM [Request] GetHatchedEggs {}
5:36:42 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258194868",
    "$unknownFields": []
}
5:36:42 PM [Request] CheckAwardedBadges {}
5:36:42 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:43 PM [Response] GetMapObjects {
  "map_cells": [
    {
      "s2_cell_id": "9263761691336769536",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "015e7a647cf247d3b5147c2adc1f9aa6.11",
          "last_modified_timestamp_ms": "1472139144360",
          "latitude": 37.76758,
          "longitude": -122.403921,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "14f756465f194d56802f6aee9a7d691d.16",
          "last_modified_timestamp_ms": "1472245344044",
          "latitude": 37.768026,
          "longitude": -122.401807,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "1b39f0893fad4a3098ae489fedd64824.16",
          "last_modified_timestamp_ms": "1472250674893",
          "latitude": 37.768683,
          "longitude": -122.404124,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "681e36acb1e24fc8b2a798a84f865a71.16",
          "last_modified_timestamp_ms": "1472250680702",
          "latitude": 37.768251,
          "longitude": -122.403785,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a4a4b496bd764658a7b1a563848f69de.11",
          "last_modified_timestamp_ms": "1472255594668",
          "latitude": 37.769701,
          "longitude": -122.403804,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "bfaba2361b2045b09744700f7a57972b.16",
          "last_modified_timestamp_ms": "1472088904144",
          "latitude": 37.768266,
          "longitude": -122.402577,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fe6e9c05a24b48078039b99627347515.16",
          "last_modified_timestamp_ms": "1472173170436",
          "latitude": 37.768613,
          "longitude": -122.402227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761693484253184",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "0e6fa82b2554401686d94eaf68a47226.16",
          "last_modified_timestamp_ms": "1472169456524",
          "latitude": 37.767199,
          "longitude": -122.404482,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "15ed9fdb2f1e452db5d80298106205ae.16",
          "last_modified_timestamp_ms": "1472210914814",
          "latitude": 37.767246,
          "longitude": -122.406877,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "56ac2837beee4a3b9bbc60301356732e.16",
          "last_modified_timestamp_ms": "1472254737740",
          "latitude": 37.767311,
          "longitude": -122.406168,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "74ecf8dfcf1e41afa1aa1dbe20750e38.16",
          "last_modified_timestamp_ms": "1472232715127",
          "latitude": 37.768638,
          "longitude": -122.404585,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 634.8551025390625,
          "encounter_id": "8055329911839314845",
          "fort_id": "56ac2837beee4a3b9bbc60301356732e.16",
          "fort_image_url": "http://lh3.ggpht.com/JwmWR1K0bPg1Mb7fLoUPXLjJD47S_wi7RjWxO1Y2-Z13OKctrW-6xKEPIdCLo5bd1qTL4opQdsDtHSgkg2Y"
        }
      ]
    },
    {
      "s2_cell_id": "9263763478043164672",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "627671a7aed148f6b47961597a3edec4.12",
          "last_modified_timestamp_ms": "1472248791235",
          "latitude": 37.767159,
          "longitude": -122.400047,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ece065a8dd574a8bba88586f68951e2d.16",
          "last_modified_timestamp_ms": "1472195475995",
          "latitude": 37.766515,
          "longitude": -122.399422,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f24ec33582de477b9f0fd64bfb12e7c8.11",
          "last_modified_timestamp_ms": "1472157747369",
          "latitude": 37.766031,
          "longitude": -122.401069,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76658548162832,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76649804289353,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76647085021654,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.76654531795043,
          "longitude": -122.39933938413348
        },
        {
          "latitude": 37.767417585192774,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.766511014120674,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76661267461327,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.766538207087386,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76643654653638,
          "longitude": -122.39969340872479
        },
        {
          "latitude": 37.76651812519188,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76644365747623,
          "longitude": -122.399427890393
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 457.7996520996094,
          "encounter_id": "3196705402103297885",
          "fort_id": "627671a7aed148f6b47961597a3edec4.12",
          "fort_image_url": "http://lh5.ggpht.com/ST28kbrh1gH4UUfpgk-Ck42ykN0NNneNuKFlTUpbS_vOFbD-EHyOWi4HA8R8HLD3IuefhtIyChXUR3o_Ibs"
        },
        {
          "pokemon_id": "POLIWAG",
          "distance_in_meters": 406.468994140625,
          "encounter_id": "1463715440339076141",
          "fort_id": "ece065a8dd574a8bba88586f68951e2d.16",
          "fort_image_url": "http://lh3.ggpht.com/6nHgBKdaeMNn4zno5GTc-Le9jJpw3ybJSlYgJrSkn28bfBSvGOnHQt7FG2zFf9cMxmxX8w93WQdHrfPrXEJA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763480190648320",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "1b3bc65f464b49fe9e80cd59f8039f70.16",
          "last_modified_timestamp_ms": "1472255665791",
          "latitude": 37.768273,
          "longitude": -122.397532,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b2de4996a65e46539906769113cb433d.16",
          "last_modified_timestamp_ms": "1472253704155",
          "latitude": 37.76916,
          "longitude": -122.39579,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763473748197376",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "15ae4b521cd249c5af22d2a4783255da.16",
          "last_modified_timestamp_ms": "1472171635290",
          "latitude": 37.765743,
          "longitude": -122.396382,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "last_modified_timestamp_ms": "1472224851913",
          "latitude": 37.764861,
          "longitude": -122.397617,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "58f72ecf27e94c5db37dd0cc49225f32.16",
          "last_modified_timestamp_ms": "1472099218301",
          "latitude": 37.766522,
          "longitude": -122.397211,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "65bcbfd54e8e4cf796f00fe6996f22a9.16",
          "last_modified_timestamp_ms": "1472230239832",
          "latitude": 37.764759,
          "longitude": -122.396882,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "86d998bd8df648cfb934e4294e629b03.16",
          "last_modified_timestamp_ms": "1472222839983",
          "latitude": 37.766182,
          "longitude": -122.397973,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "be32d7832ae348ba9e2195b016d85f72.16",
          "last_modified_timestamp_ms": "1472222415083",
          "latitude": 37.765546,
          "longitude": -122.396717,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e84c06d0d0874964a7bef947789c3a19.16",
          "last_modified_timestamp_ms": "1472223447817",
          "latitude": 37.76497,
          "longitude": -122.398136,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "last_modified_timestamp_ms": "1472102160593",
          "latitude": 37.765092,
          "longitude": -122.39644,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "GASTLY",
          "distance_in_meters": 472.53045654296875,
          "encounter_id": "6404882486871515245",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 369.6654052734375,
          "encounter_id": "2878493815461178525",
          "fort_id": "2811d0366ce6497db7c8b221f1f068c2.16",
          "fort_image_url": "http://lh5.ggpht.com/CRxvdHQ4JUNTF776WEWehTNz7ecbOolfyd5G84MM3Y45Cqi2DMK0wrlVuilZCzKXAmXWNaMdsmitX5lhxEfQ"
        },
        {
          "pokemon_id": "VENONAT",
          "distance_in_meters": 441.9717712402344,
          "encounter_id": "11121333408668613837",
          "fort_id": "86d998bd8df648cfb934e4294e629b03.16",
          "fort_image_url": "http://lh4.ggpht.com/gD5LJ-O3zQ5_pKmBlevX4R5X02p2FkRoyXlXMbR9qKKOwHpVBO6dfsPCm4oN8BnXf5egfnSpDtHRMVkB2b4"
        },
        {
          "pokemon_id": "ZUBAT",
          "distance_in_meters": 472.53045654296875,
          "encounter_id": "11438825777021504045",
          "fort_id": "ebcb9ac0d8ed4916956a439b66046fce.16",
          "fort_image_url": "http://lh3.googleusercontent.com/_RV22cf7vytpNduMf__4MMI1Wqt9HDePG-UeV2nsTK_P4-OGyhzfjZAPm81Izw17WYSmAyHc60HN0k0ngwY"
        }
      ]
    },
    {
      "s2_cell_id": "9263763475895681024",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "2d58cd3712404f6ca3670e1965f5e553.16",
          "last_modified_timestamp_ms": "1472258177210",
          "latitude": 37.765621,
          "longitude": -122.399618,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "6000",
          "active_fort_modifier": []
        },
        {
          "id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "last_modified_timestamp_ms": "1472250932467",
          "latitude": 37.764799,
          "longitude": -122.400489,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c77df3fc1d1d44d598a3d876c081ea23.16",
          "last_modified_timestamp_ms": "1472230174066",
          "latitude": 37.763795,
          "longitude": -122.400018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c9449d43e9c945798d2374f9e4f9d7cb.16",
          "last_modified_timestamp_ms": "1472242302580",
          "latitude": 37.765072,
          "longitude": -122.399493,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.764580697633725,
          "longitude": -122.40040145433323
        },
        {
          "latitude": 37.76389749583726,
          "longitude": -122.39995892638643
        },
        {
          "latitude": 37.76381591784804,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76403932763037,
          "longitude": -122.40022444337791
        },
        {
          "latitude": 37.76484675409508,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76468235983019,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.764615000194404,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76425099387322,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76475096347232,
          "longitude": -122.39960490268865
        },
        {
          "latitude": 37.76487981774219,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.76473798602443,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.764838407786975,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.764894031836974,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76480534834033,
          "longitude": -122.399427890393
        },
        {
          "latitude": 37.763944773278055,
          "longitude": -122.40004743212471
        },
        {
          "latitude": 37.76481121488674,
          "longitude": -122.40013593778855
        },
        {
          "latitude": 37.76469781449947,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763788725058355,
          "longitude": -122.40031294889282
        },
        {
          "latitude": 37.76454887459729,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.764886925167524,
          "longitude": -122.3991623713911
        },
        {
          "latitude": 37.763958987659805,
          "longitude": -122.39951639657806
        },
        {
          "latitude": 37.76389038785212,
          "longitude": -122.40022444337791
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 194.7141876220703,
          "encounter_id": "5858831200885887149",
          "fort_id": "47bba4ea29c14f08a1a5ca74708d9ad4.16",
          "fort_image_url": "http://lh3.ggpht.com/QcRoPtI92iErAORD53lexUItwncxR5tz3ODcAwSZei32ji-EkN48ZhgUtiZiOJqZSaQNhnl0Nmcuv4el-GaA"
        }
      ]
    },
    {
      "s2_cell_id": "9263763469453230080",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "15b959e4e6614cb08c052041f903ec82.16",
          "last_modified_timestamp_ms": "1472256321572",
          "latitude": 37.761984,
          "longitude": -122.401221,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3e941cc6c633483290bcbc0776be3f30.16",
          "last_modified_timestamp_ms": "1472161853780",
          "latitude": 37.764013,
          "longitude": -122.398969,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "4e37da7be9a84dcf952250dcf023cf4f.16",
          "last_modified_timestamp_ms": "1472118517704",
          "latitude": 37.762285,
          "longitude": -122.399406,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "751377ff0ad64a059c0e2b2fafb29a10.16",
          "last_modified_timestamp_ms": "1472227876511",
          "latitude": 37.762616,
          "longitude": -122.401012,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b48b3fe7ad7d4e3abdc7079290890a26.16",
          "last_modified_timestamp_ms": "1472130550363",
          "latitude": 37.763407,
          "longitude": -122.401027,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76395311192287,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763905832865916,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76407486131106,
          "longitude": -122.39889685171904
        },
        {
          "latitude": 37.76387153662158,
          "longitude": -122.3990738649082
        },
        {
          "latitude": 37.76410205305133,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.76398030356335,
          "longitude": -122.3987198382321
        },
        {
          "latitude": 37.76404766950748,
          "longitude": -122.39898535835086
        },
        {
          "latitude": 37.763878641243686,
          "longitude": -122.3988083450128
        },
        {
          "latitude": 37.763891623282184,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76396609371687,
          "longitude": -122.39925087779952
        },
        {
          "latitude": 37.76412924472829,
          "longitude": -122.3987198382321
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "WEEDLE",
          "distance_in_meters": 129.06594848632812,
          "encounter_id": "15012058453947234909",
          "fort_id": "15b959e4e6614cb08c052041f903ec82.16",
          "fort_image_url": "http://lh4.ggpht.com/w7fVTnCHbX6NELH19YBWWozz5qXdiV2LPYgsKBFOkpmmTxHHnKqoQqTPZl0QLY11sCaXmeKIk6ycJYs-bvT7"
        }
      ]
    },
    {
      "s2_cell_id": "9263763471600713728",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "16571178a2d3472ea7b64db258ad2d40.12",
          "last_modified_timestamp_ms": "1472252483946",
          "latitude": 37.762662,
          "longitude": -122.396671,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "2383fe17f8c541ec8a1e2d4e0a0e43a7.16",
          "last_modified_timestamp_ms": "1472258162583",
          "latitude": 37.762722,
          "longitude": -122.396026,
          "enabled": true,
          "owned_by_team": "RED",
          "guard_pokemon_id": "DRAGONITE",
          "gym_points": "2000",
          "active_fort_modifier": []
        },
        {
          "id": "6735063ac2a74204aa4b9ebe8c94d6e9.16",
          "last_modified_timestamp_ms": "1472235745491",
          "latitude": 37.762368,
          "longitude": -122.397625,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "last_modified_timestamp_ms": "1472194662775",
          "latitude": 37.762378,
          "longitude": -122.398345,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 403.41925048828125,
          "encounter_id": "14493628893436960877",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "CATERPIE",
          "distance_in_meters": 403.41925048828125,
          "encounter_id": "11726696062554560685",
          "fort_id": "16571178a2d3472ea7b64db258ad2d40.12",
          "fort_image_url": "http://lh4.ggpht.com/_WfZyIXyni_WaOhFvfqtxz128cLYLQzoJ8o3Fsq-9WvKu8eFa_CUzhfk0MA_WLXAtL1Q-Ih_4c-0Z20kMf6G7g"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 266.764892578125,
          "encounter_id": "1783758602474457725",
          "fort_id": "a3f4beb4d24f4517bc01ea5a8411082a.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-a6YJGXR20QaBQ3slEOnAsl-FMsDIUVDAo3MFfhA9mAimgGOHwUNQdp0gmKWVzZBqpTfrpjCtxobQd1m9FSlfw"
        }
      ]
    },
    {
      "s2_cell_id": "9263763465158262784",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "b25b4fda27c04fe0ba8a74cef9287975.16",
          "last_modified_timestamp_ms": "1472158723119",
          "latitude": 37.761362,
          "longitude": -122.397157,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "last_modified_timestamp_ms": "1472205608169",
          "latitude": 37.760554,
          "longitude": -122.396223,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e35f46037ae24aaf8255c2691cce490d.12",
          "last_modified_timestamp_ms": "1472203741748",
          "latitude": 37.760072,
          "longitude": -122.397673,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "MEOWTH",
          "distance_in_meters": 525.1825561523438,
          "encounter_id": "3265958414641194909",
          "fort_id": "c6ba8c609f964708b4a15fa5b6bcd36f.16",
          "fort_image_url": "http://lh5.ggpht.com/IgeY93KhVoodCVGFonnM7ubeCnvH78m5C7N6c8kAZUUf9aBbewuJVVr4lal-5eAUIaxFJOirzSGrwvmvXxTj"
        }
      ]
    },
    {
      "s2_cell_id": "9263763467305746432",
      "current_timestamp_ms": "1472258202345",
      "forts": [],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263763460863295488",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "0bf03d0375e14913a6ef98e0bb0eabd0.16",
          "last_modified_timestamp_ms": "1472066214366",
          "latitude": 37.764541,
          "longitude": -122.394548,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "64a61ae644db424f95bd57bcb3b4e828.16",
          "last_modified_timestamp_ms": "1472194230267",
          "latitude": 37.765309,
          "longitude": -122.393847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "700faa8576d3483a95df59e4630fb784.16",
          "last_modified_timestamp_ms": "1472208798919",
          "latitude": 37.764054,
          "longitude": -122.394632,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ee1c3e7d3b624019b19c301389079f95.16",
          "last_modified_timestamp_ms": "1471960743706",
          "latitude": 37.764118,
          "longitude": -122.393897,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761725696507904",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "004e4f2142524ac4adbe06cb1e3cbba3.16",
          "last_modified_timestamp_ms": "1471743343905",
          "latitude": 37.75974,
          "longitude": -122.402927,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "08ca79ca840f4cca83accd5c921fe944.16",
          "last_modified_timestamp_ms": "1472091585300",
          "latitude": 37.759589,
          "longitude": -122.401958,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "122fc6c3ad2044e095ffaacc36c1f072.16",
          "last_modified_timestamp_ms": "1472245414550",
          "latitude": 37.758597,
          "longitude": -122.402119,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "259c752baebd4486939ddc63e12e14e6.16",
          "last_modified_timestamp_ms": "1472175195445",
          "latitude": 37.758102,
          "longitude": -122.403863,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "e8253b1700134691bc0444c47bba9e72.16",
          "last_modified_timestamp_ms": "1472223860890",
          "latitude": 37.759438,
          "longitude": -122.404194,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75852345114818,
          "longitude": -122.4041186155843
        },
        {
          "latitude": 37.758719676539236,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75931545973311,
          "longitude": -122.40420711782231
        },
        {
          "latitude": 37.75879414970664,
          "longitude": -122.40420711782231
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761727843991552",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "3f38941e62dc458fbb060979e49ddb5d.16",
          "last_modified_timestamp_ms": "1472177623064",
          "latitude": 37.759661,
          "longitude": -122.405135,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "901ed700184c4d1ba8952613e9964df2.16",
          "last_modified_timestamp_ms": "1472233252826",
          "latitude": 37.757941,
          "longitude": -122.406466,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.75945017909383,
          "longitude": -122.40473812968625
        },
        {
          "latitude": 37.75953761793382,
          "longitude": -122.40518063752447
        },
        {
          "latitude": 37.759410014959116,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75919956698588,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75878703843129,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75948448732381,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75932842977505,
          "longitude": -122.40464962789517
        },
        {
          "latitude": 37.75905062205599,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75881423328328,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75873976022903,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75912509455924,
          "longitude": -122.40482663140287
        },
        {
          "latitude": 37.75951042227488,
          "longitude": -122.40526913886863
        },
        {
          "latitude": 37.75932131627655,
          "longitude": -122.40491513304501
        },
        {
          "latitude": 37.759557698333424,
          "longitude": -122.40535764013829
        },
        {
          "latitude": 37.75944306512441,
          "longitude": -122.40500363461264
        },
        {
          "latitude": 37.7593355425178,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75903765198636,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.75945729230749,
          "longitude": -122.40447262408948
        },
        {
          "latitude": 37.75913220745545,
          "longitude": -122.40456112602956
        },
        {
          "latitude": 37.758888706260926,
          "longitude": -122.4043841220749
        },
        {
          "latitude": 37.7589159010679,
          "longitude": -122.40429561998586
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761721401540608",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "739278e9c267480bbffe3f44496956d7.16",
          "last_modified_timestamp_ms": "1472243579931",
          "latitude": 37.76134,
          "longitude": -122.406778,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d37172679cd84c7693c140410a037c3e.16",
          "last_modified_timestamp_ms": "1472172531007",
          "latitude": 37.759905,
          "longitude": -122.40516,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "db7d4561e12245a89f34e31bb783524b.16",
          "last_modified_timestamp_ms": "1472210525425",
          "latitude": 37.762006,
          "longitude": -122.405452,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [
        {
          "latitude": 37.76181189273035,
          "longitude": -122.40553464245417
        },
        {
          "latitude": 37.761913558473914,
          "longitude": -122.4054461413335
        }
      ],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "NIDORAN_FEMALE",
          "distance_in_meters": 392.56884765625,
          "encounter_id": "8145030953769039357",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "NIDORAN_MALE",
          "distance_in_meters": 392.56884765625,
          "encounter_id": "5561859504948100669",
          "fort_id": "db7d4561e12245a89f34e31bb783524b.16",
          "fort_image_url": "http://lh3.googleusercontent.com/hdvjxBVdPe2BZqDommuQywYR_KlUoKfhAD20EjZXqomLhs-SopTHX-fsekNMRZC7EtsMAM7YMLTTYCMNc5ls"
        },
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 499.3426208496094,
          "encounter_id": "620781997766203053",
          "fort_id": "d37172679cd84c7693c140410a037c3e.16",
          "fort_image_url": "http://lh3.ggpht.com/Y2-yvfwrKLMlkMig05y2JB1dyd9c7EvhoNefgN9s9m7vc2v6fqH9uB3NdcPf9eYPDf-YyMcLdc4W9QRThfwa"
        }
      ]
    },
    {
      "s2_cell_id": "9263761723549024256",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "0771a59b480d4e1592ee3bbdc22651a1.16",
          "last_modified_timestamp_ms": "1472257681457",
          "latitude": 37.76316,
          "longitude": -122.401561,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ],
          "lure_info": {
            "fort_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
            "encounter_id": "18446744072113947775",
            "active_pokemon_id": "PIDGEY",
            "lure_expires_timestamp_ms": "1472258221416"
          }
        },
        {
          "id": "4f7a4f0904cb4571a539531420c2b36c.16",
          "last_modified_timestamp_ms": "1472246804342",
          "latitude": 37.761006,
          "longitude": -122.40331,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "67de4ae6e3e14f259661b1cd1c150c9b.16",
          "last_modified_timestamp_ms": "1472222521277",
          "latitude": 37.761418,
          "longitude": -122.404097,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472257990127"
        },
        {
          "id": "e362e833a41149ee9418447a72dfe071.16",
          "last_modified_timestamp_ms": "1472258175961",
          "latitude": 37.762317,
          "longitude": -122.40284,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "GYARADOS",
          "gym_points": "4000",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "last_modified_timestamp_ms": "1472186676564",
          "latitude": 37.76236,
          "longitude": -122.402523,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 143.7937774658203,
          "encounter_id": "6514531007457744429",
          "fort_id": "fcd446d3c94c4f61994e5cb2a662e154.16",
          "fort_image_url": "http://lh3.ggpht.com/q78Jms-jmv3uVb2JkLpA9rB_V9fxzJb4LU7D5HCcB4KGSz4-PzoOufQSCyEvyx_xcto397uqyyO0LLyRFq8W"
        }
      ]
    },
    {
      "s2_cell_id": "9263761717106573312",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "3021d32bf96b4a469469e9000d0eb4f6.16",
          "last_modified_timestamp_ms": "1472251565465",
          "latitude": 37.764312,
          "longitude": -122.401633,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5d1498d505b84e7395fdeca4998b3f04.16",
          "last_modified_timestamp_ms": "1472257060061",
          "latitude": 37.765409,
          "longitude": -122.401994,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [
            "ITEM_TROY_DISK"
          ]
        },
        {
          "id": "f733930e1b424fa785a64cd96e6d2427.16",
          "last_modified_timestamp_ms": "1472205683602",
          "latitude": 37.765248,
          "longitude": -122.402502,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "CLEFAIRY",
          "encounter_id": "12907008395133697085"
        },
        {
          "pokemon_id": "ZUBAT",
          "encounter_id": "5320359264373609101"
        }
      ]
    },
    {
      "s2_cell_id": "9263761719254056960",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "29409f660e1a4185b73332d6a1294275.16",
          "last_modified_timestamp_ms": "1472165662712",
          "latitude": 37.761986,
          "longitude": -122.406173,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "cf82dc5e1c8e4f1883143f8504aa6c3f.16",
          "last_modified_timestamp_ms": "1472007950841",
          "latitude": 37.764513,
          "longitude": -122.405227,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "ede9da535d554c599edf8ea611c29ba1.16",
          "last_modified_timestamp_ms": "1472246343661",
          "latitude": 37.763319,
          "longitude": -122.404654,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": [],
          "cooldown_complete_timestamp_ms": "1472258096819"
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761712811606016",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "59b808012f8742f79eb1a66ecd415725.16",
          "last_modified_timestamp_ms": "1472169148019",
          "latitude": 37.764812,
          "longitude": -122.406557,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "9968fe1bf5674119ad696ce5531346e0.12",
          "last_modified_timestamp_ms": "1472113603404",
          "latitude": 37.766082,
          "longitude": -122.404443,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "d2f3bede00114425bd890bb515fd8762.16",
          "last_modified_timestamp_ms": "1472258200924",
          "latitude": 37.765745,
          "longitude": -122.406846,
          "enabled": true,
          "owned_by_team": "BLUE",
          "guard_pokemon_id": "VAPOREON",
          "gym_points": "1500",
          "is_in_battle": true,
          "active_fort_modifier": []
        },
        {
          "id": "f6566afa85e24dfa90654f6f10d29b8e.16",
          "last_modified_timestamp_ms": "1472110237537",
          "latitude": 37.764525,
          "longitude": -122.405847,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "fdf31cb321ab4af0b0f354ce559d3578.16",
          "last_modified_timestamp_ms": "1472240200666",
          "latitude": 37.766512,
          "longitude": -122.406512,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": []
    },
    {
      "s2_cell_id": "9263761714959089664",
      "current_timestamp_ms": "1472258202345",
      "forts": [
        {
          "id": "14b823d412124088802a85da0afc6e44.16",
          "last_modified_timestamp_ms": "1472233044262",
          "latitude": 37.765902,
          "longitude": -122.402396,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "last_modified_timestamp_ms": "1472256209183",
          "latitude": 37.765795,
          "longitude": -122.402008,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "467d738043534a97937671ced3b1c40e.16",
          "last_modified_timestamp_ms": "1472244926959",
          "latitude": 37.766225,
          "longitude": -122.402639,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "5146003df1504c95a7e7545882240821.16",
          "last_modified_timestamp_ms": "1472229257630",
          "latitude": 37.765926,
          "longitude": -122.403208,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "7f9571cdee164530b9c0e4e2cce54d95.16",
          "last_modified_timestamp_ms": "1472231339381",
          "latitude": 37.765015,
          "longitude": -122.403728,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "89bf31a106f54350821e422a33e18173.16",
          "last_modified_timestamp_ms": "1472181383296",
          "latitude": 37.766768,
          "longitude": -122.402672,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8c8a8fc6920643ee96c8bb72cc614681.16",
          "last_modified_timestamp_ms": "1472172607245",
          "latitude": 37.766254,
          "longitude": -122.401893,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "8d6158f1fda44c15a308f1ca0426dbbb.11",
          "last_modified_timestamp_ms": "1472130265189",
          "latitude": 37.766926,
          "longitude": -122.403613,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "b18467bb9b1a461891ced7a16a3cdb01.11",
          "last_modified_timestamp_ms": "1472224801211",
          "latitude": 37.766488,
          "longitude": -122.403809,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        },
        {
          "id": "f3f3ef0b92e64d018485554aa6aa5ac9.16",
          "last_modified_timestamp_ms": "1472178079906",
          "latitude": 37.767652,
          "longitude": -122.4018,
          "enabled": true,
          "type": "CHECKPOINT",
          "active_fort_modifier": []
        }
      ],
      "spawn_points": [],
      "deleted_objects": [],
      "fort_summaries": [],
      "decimated_spawn_points": [],
      "wild_pokemons": [],
      "catchable_pokemons": [],
      "nearby_pokemons": [
        {
          "pokemon_id": "PIDGEY",
          "distance_in_meters": 354.832275390625,
          "encounter_id": "1379392382886495245",
          "fort_id": "5146003df1504c95a7e7545882240821.16",
          "fort_image_url": "http://lh3.ggpht.com/TqVm1_BYYwQQ9IPgYelmr26R6Oc4esrdXkJaUhqGHEhoqcnLvkfRKJ94zYOAkXoV98ZkFQQljP7pKxHFc-EMnw"
        },
        {
          "pokemon_id": "MAGMAR",
          "distance_in_meters": 431.9052734375,
          "encounter_id": "4739592891879761757",
          "fort_id": "9968fe1bf5674119ad696ce5531346e0.12",
          "fort_image_url": "http://lh3.googleusercontent.com/IQtdfNb6pifXsrHVD4Ak7vnoT7SgBfePdIv400UWLtlNP-XEE-d0J2MKUfitEzuZEZ8IOnOzoC6h75QX8Bc"
        },
        {
          "pokemon_id": "SPEAROW",
          "distance_in_meters": 364.1455993652344,
          "encounter_id": "16623167962884340461",
          "fort_id": "467d738043534a97937671ced3b1c40e.16",
          "fort_image_url": "http://lh3.googleusercontent.com/-ww9CVbNeeP3W0V8YUoPteP4YZ2L-OlUd-2JKZKz_0Xpz31RK0KH0iLzdpb3CYIzPV0cW07mk5ywmYx2t3k"
        },
        {
          "pokemon_id": "TENTACOOL",
          "distance_in_meters": 302.4154357910156,
          "encounter_id": "14717847624874704173",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        },
        {
          "pokemon_id": "CLEFABLE",
          "distance_in_meters": 302.4154357910156,
          "encounter_id": "6307375320643386669",
          "fort_id": "3c6c9573eb384391a302b84ed1d6f2c6.16",
          "fort_image_url": "http://lh5.ggpht.com/bNRvc5vhmnz6z9LjZr7h1eBdlqEGW4EaWr4gUf8UJbdbT2cRAY5GGTH8mFPFEMTfEsnmWXNLIIkxoIvoUeOd5g"
        }
      ]
    }
  ],
    "status": "SUCCESS",
    "$unknownFields": []
}
5:36:43 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:43 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:43 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258194868",
      "new_timestamp_ms": "1472258194868",
      "inventory_items": []
  },
  "$unknownFields": []
}
5:36:43 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:43 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:44 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "$unknownFields": []
}
5:36:44 PM [Request] CheckChallenge {}
5:36:44 PM [Request] GetHatchedEggs {}
5:36:44 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258194868",
    "$unknownFields": []
}
5:36:44 PM [Request] CheckAwardedBadges {}
5:36:44 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:44 PM [Response] CatchPokemon {
  "status": "CATCH_MISSED",
    "$unknownFields": []
}
5:36:44 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:44 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:44 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258194868",
      "new_timestamp_ms": "1472258204010",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258204007",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78555",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 249,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 359,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 65,
              "2": 0,
              "3": 52,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258204007",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 171
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:44 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:44 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:46 PM [Request] CatchPokemon {
  "encounter_id": "18446744072113947775",
    "pokeball": "ITEM_POKE_BALL",
    "normalized_reticle_size": 1.16259765625,
    "spawn_point_id": "0771a59b480d4e1592ee3bbdc22651a1.16",
    "hit_pokemon": true,
    "normalized_hit_position": 1,
    "$unknownFields": []
}
5:36:46 PM [Request] CheckChallenge {}
5:36:46 PM [Request] GetHatchedEggs {}
5:36:46 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258204010",
    "$unknownFields": []
}
5:36:46 PM [Request] CheckAwardedBadges {}
5:36:46 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:46 PM [Response] CatchPokemon {
  "status": "CATCH_SUCCESS",
    "captured_pokemon_id": "5658919889032085835",
    "capture_award": {
    "activity_type": [
      "ACTIVITY_CATCH_POKEMON",
      "ACTIVITY_CATCH_NICE_THROW"
    ],
      "xp": {
      "0": 100,
        "1": 10
    },
    "candy": {
      "0": 3,
        "1": 0
    },
    "stardust": {
      "0": 100,
        "1": 0
    }
  },
  "$unknownFields": []
}
5:36:46 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:46 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:46 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258204010",
      "new_timestamp_ms": "1472258206076",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIDGEY",
            "times_encountered": 31,
            "times_captured": 31
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PIDGEY",
            "candy": 117
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78665",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 250,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 360,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 66,
              "2": 0,
              "3": 53,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206064",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 170
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5658919889032085835",
            "pokemon_id": "PIDGEY",
            "cp": 168,
            "stamina": 36,
            "stamina_max": 36,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.33803677558898926,
            "weight_kg": 2.163444995880127,
            "individual_attack": 3,
            "individual_defense": 6,
            "individual_stamina": 2,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9263762596501127168",
            "creation_time_ms": "1472258206052",
            "from_fort": 1
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:46 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:46 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:46 PM [Request] GetPlayer {
  "player_locale": {
    "country": "US",
      "language": "en"
  },
  "$unknownFields": []
}
5:36:46 PM [Request] CheckChallenge {}
5:36:46 PM [Request] GetHatchedEggs {}
5:36:46 PM [Request] GetInventory {
  "last_timestamp_ms": "1472258204010",
    "$unknownFields": []
}
5:36:46 PM [Request] CheckAwardedBadges {}
5:36:46 PM [Request] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
5:36:47 PM [Response] GetPlayer {
  "success": true,
    "player_data": {
    "creation_timestamp_ms": "1471916410996",
      "username": "VantaDark6",
      "tutorial_state": [
      "LEGAL_SCREEN",
      "AVATAR_SELECTION",
      "POKEMON_CAPTURE",
      "NAME_SELECTION",
      "FIRST_TIME_EXPERIENCE_COMPLETE"
    ],
      "avatar": {
      "hair": 3,
        "pants": 1,
        "eyes": 3,
        "backpack": 2
    },
    "max_pokemon_storage": 250,
      "max_item_storage": 350,
      "daily_bonus": {},
    "equipped_badge": {},
    "contact_settings": {},
    "currencies": [
      {
        "name": "POKECOIN"
      },
      {
        "name": "STARDUST",
        "amount": 32978
      }
    ],
      "remaining_codename_claims": 1,
      "buddy_pokemon": {}
  },
  "$unknownFields": []
}
5:36:47 PM [Response] CheckChallenge {
  "challenge_url": " ",
    "$unknownFields": []
}
5:36:47 PM [Response] GetHatchedEggs {
  "success": true,
    "pokemon_id": [],
    "experience_awarded": [],
    "candy_awarded": [],
    "stardust_awarded": [],
    "$unknownFields": []
}
5:36:47 PM [Response] GetInventory {
  "success": true,
    "inventory_delta": {
    "original_timestamp_ms": "1472258204010",
      "new_timestamp_ms": "1472258206076",
      "inventory_items": [
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "pokedex_entry": {
            "pokemon_id": "PIDGEY",
            "times_encountered": 31,
            "times_captured": 31
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "candy": {
            "family_id": "FAMILY_PIDGEY",
            "candy": 117
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "player_stats": {
            "level": 13,
            "experience": "78665",
            "prev_level_xp": "65000",
            "next_level_xp": "85000",
            "km_walked": 17.80478858947754,
            "pokemons_encountered": 256,
            "unique_pokedex_entries": 42,
            "pokemons_captured": 250,
            "poke_stop_visits": 273,
            "pokeballs_thrown": 360,
            "eggs_hatched": 10,
            "big_magikarp_caught": 3,
            "pokemon_caught_by_type": {
              "0": 0,
              "1": 66,
              "2": 0,
              "3": 53,
              "4": 83,
              "5": 2,
              "6": 0,
              "7": 33,
              "8": 1,
              "9": 1,
              "10": 1,
              "11": 107,
              "12": 13,
              "13": 2,
              "14": 1,
              "15": 0,
              "16": 5,
              "17": 0,
              "18": 8
            },
            "small_rattata_caught": 1
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206064",
        "inventory_item_data": {
          "item": {
            "item_id": "ITEM_POKE_BALL",
            "count": 170
          }
        }
      },
      {
        "modified_timestamp_ms": "1472258206074",
        "inventory_item_data": {
          "pokemon_data": {
            "id": "5658919889032085835",
            "pokemon_id": "PIDGEY",
            "cp": 168,
            "stamina": 36,
            "stamina_max": 36,
            "move_1": "QUICK_ATTACK_FAST",
            "move_2": "AERIAL_ACE",
            "height_m": 0.33803677558898926,
            "weight_kg": 2.163444995880127,
            "individual_attack": 3,
            "individual_defense": 6,
            "individual_stamina": 2,
            "cp_multiplier": 0.443107545375824,
            "pokeball": "ITEM_POKE_BALL",
            "captured_cell_id": "9263762596501127168",
            "creation_time_ms": "1472258206052",
            "from_fort": 1
          }
        }
      }
    ]
  },
  "$unknownFields": []
}
5:36:47 PM [Response] CheckAwardedBadges {
  "success": true,
    "awarded_badges": [],
    "awarded_badge_levels": [],
    "$unknownFields": []
}
5:36:47 PM [Response] DownloadSettings {
  "hash": "2788184af4004004d6ab0740f7632983332106f6",
    "$unknownFields": []
}
[+] Virtual endpoint listening on 8082
  [!] -> ENDPOINT USAGE: configure 'custom endpoint' in pokemon-go-xposed
  [+] Proxy listening on 8081
  [!] -> PROXY USAGE: install http://<host>:8082/ca.crt as a trusted certificate
