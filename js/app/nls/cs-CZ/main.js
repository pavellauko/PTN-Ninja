define({
  app_title: "PTN Ninja",
  About_App: "O webu PTN Ninja",

  Animate_Board: "Animovat desku",
  Animate_UI: "Animovat UI",
  Annotations: "Anotace",
  Axis_Labels: "Popisky os",
  Board_3D: "3D deska",
  Board_Opacity: "Průhlednost desky",
  Board_Settings: "Nastavení desky",
  Board_Shadows: "Stíny na desce",
  Branch_Numbering: "Číslování větví",
  Cancel: "Zrušit",
  Clock: "Hodiny",
  Close: "Zavřít",
  Current_Move: "Aktuální tah",
  Date: "Datum",
  Delete: "Smazat",
  Dismiss: "Zamítnout",
  Edit_Mode: "Režim editace",
  Event: "Událost",
  First_Ply: "První vrstva",
  Flat_Counts: "Počet ploch",
  Highlight_Branches: "Zvýraznit větve",
  Highlight_Square: "Zvýraznit pole",
  Last_Ply: "Poslední vrstva",
  Load_Sample_Game: "Nahrát ukázkovou partii",
  New_Game: "Nová hra",
  Next_Move: "Další tah",
  Next_Ply: "Další vrstva",
  Off: "Vypnuto",
  OK: "OK",
  On: "Zapnuto",
  Open: "Otevřeno",
  Permalink: "Odkaz na tuto hru",
  PlayPause: "Hrát/Pauza",
  Play_Controls: "Ovládací prvky",
  Play_Mode: "Režim přehrávání",
  Play_Speed: "Rychlost přehrávání",
  Player1: "Hráč 1",
  Player1_name: "Bílý",
  Player2: "Hráč 2",
  Player2_name: "Černý",
  Points: "Body",
  Preferences: "Předvolby",
  Previous_Move: "Předchozí tahe",
  Previous_Ply: "Předchozí vrstva",
  Rating1: "Hodnocení1",
  Rating2: "Hodnocení2",
  Redo: "Opakovat",
  Result: "Výsledek",
  Revert_Game: "Obnovit hru",
  Road_Connections: "Road Connections",
  Round: "Kolo",
  Save: "Uložit",
  Share: "Sdílet",
  Show_FAB: "Ukázat Tlačítko režimu",
  Show_Hide_Errors: "Ukázat/Skrýt chyby",
  Show_Parse_Errors: "Ukázat Zpracování chyby",
  Site: "Strana",
  Size: "Velikost",
  TPS: "TPS",
  Tak: "Tak",
  Time: "Čas",
  Tinue: "Tinuë",
  Trim_to_current_ply: "Oříznout na aktuální vrstvu",
  Undo: "Krok zpět",
  Unplayed_Pieces: "Nezahrané figurky",
  n_characters: "<%=n%> znaků",

  result: {
    '1': "<%=player%> vyhrává",
    'F': "<%=player%> vyhrává na počet polí",
    'R': "<%=player%> vyhrává sestavením řady",
    'tie': "Je to remíza"
  },

  confirm: {
    Revert_Game: {
      title: "Obnovit hru",
      content: "Jste si jistý/jistá, že chcete hru obnovit do původního stavu?"
    }
  },

  help: {
    board_3d_experimental: "Režim 3D je experimentální a v některých prohlížečích nebo zařízeních nemusí fungovat dobře nebo vůbec. V Chromu funguje nejlépe."
  },

  error: {
    duplicate_linenum: "Zdvojené číslo tahu: \"<b><%=id%></b>\"",
    illegal_ply: "Nepovolená vrstva: \"<b><%=ply%></b>\"",
    invalid_linenum: "Neplatné číslo tahu: \"<b><%=id%></b>\"",
    invalid_movetext: "Neplatný popis tahu: \"<b><%=text%></b>\"",
    invalid_notation: "Neplatná notace",
    invalid_ply: "Neplatná vrstva: \"<b><%=ply%></b>\"",
    invalid_square: "Neplatné pole: \"<b><%=square%></b>\"",
    invalid_tag: "Neplatný štítek: \"<b><%=tag%></b>\"",
    invalid_tag_value: "Neplatný <%=tag%>: \"<b><%=value%></b>\"",
    invalid_TPS_dimensions: "Neplatné TPS rozměry",
    missing_tags: "Chybí požadovaný štítek/štítky <b><%=_.map(tags, _.upperFirst).join('</b>, <b>')%></b>",
    tps_missing_player: "Neplatné TPS: Chybí hráč",
    tps_missing_move: "Neplatné TPS: Chybí číslo tahu",
    unrecognized_tag: "Nerozpoznaný štítek: \"<b><%=tag%></b>\""
  }

});