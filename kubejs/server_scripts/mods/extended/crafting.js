onEvent("recipes", (event) => {
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:tertium_gemstone_block"
        },
        "B": {
          "item": "extendedcrafting:luminessence"
        },
        "C": {
          "item": "extendedcrafting:advanced_catalyst"
        },
        "D": {
          "item": "extendedcrafting:advanced_component"
        },
        "E": {
          "item": "masterfulmachinery:mysticfactory3_controller"
        }
      },
      "result": {
        "item": "masterfulmachinery:mysticfactory4_controller"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:tertium_gemstone_block"
        },
        "B": {
          "item": "extendedcrafting:luminessence"
        },
        "C": {
          "item": "masterfulmachinery:mysticfactory3_mystical_item_port_items_input"
        }
      },
      "result": {
        "item": "masterfulmachinery:mysticfactory4_mystical_item_port_items_input"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:tertium_gemstone_block"
        },
        "B": {
          "item": "extendedcrafting:luminessence"
        },
        "C": {
          "item": "masterfulmachinery:mysticfactory3_mystical_item_port_items_output"
        }
      },
      "result": {
        "item": "masterfulmachinery:mysticfactory4_mystical_item_port_items_output"
      }
    }
  )

  event.custom(
    {
      "type": "extendedcrafting:shaped_ender_crafter",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:tertium_gemstone_block"
        },
        "B": {
          "item": "extendedcrafting:luminessence"
        },
        "C": {
          "item": "masterfulmachinery:mysticfactory3_mystical_energy_port_energy_input"
        }
      },
      "result": {
        "item": "masterfulmachinery:mysticfactory4_mystical_energy_port_energy_input"
      }
    }
  )
});
