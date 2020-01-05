const pokedex = new Map([
  ["フシギダネ", 1],
  ["フシギソウ", 2],
  ["フシギバナ", 3],
  ["ヒトカゲ", 4],
  ["リザード", 5],
  ["リザードン", 6],
  ["ゼニガメ", 7],
  ["カメール", 8],
  ["カメックス", 9],
  ["キャタピー", 10],
  ["トランセル", 11],
  ["バタフリー", 12],
  ["ビードル", 13],
  ["コクーン", 14],
  ["スピアー", 15],
  ["ポッポ", 16],
  ["ピジョン", 17],
  ["ピジョット", 18],
  ["コラッタ", 19],
  ["ラッタ", 20],
  ["オニスズメ", 21],
  ["オニドリル", 22],
  ["アーボ", 23],
  ["アーボック", 24],
  ["ピカチュウ", 25],
  ["ライチュウ", 26],
  ["サンド", 27],
  ["サンドパン", 28],
  ["ニドラン♀", 29],
  ["ニドランメス", 29],
  ["ニドリーナ", 30],
  ["ニドクイン", 31],
  ["ニドラン♂", 32],
  ["ニドランオス", 32],
  ["ニドリーノ", 33],
  ["ニドキング", 34],
  ["ピッピ", 35],
  ["ピクシー", 36],
  ["ロコン", 37],
  ["キュウコン", 38],
  ["プリン", 39],
  ["プクリン", 40],
  ["ズバット", 41],
  ["ゴルバット", 42],
  ["ナゾノクサ", 43],
  ["クサイハナ", 44],
  ["ラフレシア", 45],
  ["パラス", 46],
  ["パラセクト", 47],
  ["コンパン", 48],
  ["モルフォン", 49],
  ["ディグダ", 50],
  ["ダグトリオ", 51],
  ["ニャース", 52],
  ["ペルシアン", 53],
  ["コダック", 54],
  ["ゴルダック", 55],
  ["マンキー", 56],
  ["オコリザル", 57],
  ["ガーディ", 58],
  ["ウインディ", 59],
  ["ニョロモ", 60],
  ["ニョロゾ", 61],
  ["ニョロボン", 62],
  ["ケーシィ", 63],
  ["ユンゲラー", 64],
  ["フーディン", 65],
  ["ワンリキー", 66],
  ["ゴーリキー", 67],
  ["カイリキー", 68],
  ["マダツボミ", 69],
  ["ウツドン", 70],
  ["ウツボット", 71],
  ["メノクラゲ", 72],
  ["ドククラゲ", 73],
  ["イシツブテ", 74],
  ["ゴローン", 75],
  ["ゴローニャ", 76],
  ["ポニータ", 77],
  ["ギャロップ", 78],
  ["ヤドン", 79],
  ["ヤドラン", 80],
  ["コイル", 81],
  ["レアコイル", 82],
  ["カモネギ", 83],
  ["ドードー", 84],
  ["ドードリオ", 85],
  ["パウワウ", 86],
  ["ジュゴン", 87],
  ["ベトベター", 88],
  ["ベトベトン", 89],
  ["シェルダー", 90],
  ["パルシェン", 91],
  ["ゴース", 92],
  ["ゴースト", 93],
  ["ゲンガー", 94],
  ["イワーク", 95],
  ["スリープ", 96],
  ["スリーパー", 97],
  ["クラブ", 98],
  ["キングラー", 99],
  ["ビリリダマ", 100],
  ["マルマイン", 101],
  ["タマタマ", 102],
  ["ナッシー", 103],
  ["カラカラ", 104],
  ["ガラガラ", 105],
  ["サワムラー", 106],
  ["エビワラー", 107],
  ["ベロリンガ", 108],
  ["ドガース", 109],
  ["マタドガス", 110],
  ["サイホーン", 111],
  ["サイドン", 112],
  ["ラッキー", 113],
  ["モンジャラ", 114],
  ["ガルーラ", 115],
  ["タッツー", 116],
  ["シードラ", 117],
  ["トサキント", 118],
  ["アズマオウ", 119],
  ["ヒトデマン", 120],
  ["スターミー", 121],
  ["バリヤード", 122],
  ["ストライク", 123],
  ["ルージュラ", 124],
  ["エレブー", 125],
  ["ブーバー", 126],
  ["カイロス", 127],
  ["ケンタロス", 128],
  ["コイキング", 129],
  ["ギャラドス", 130],
  ["ラプラス", 131],
  ["メタモン", 132],
  ["イーブイ", 133],
  ["シャワーズ", 134],
  ["サンダース", 135],
  ["ブースター", 136],
  ["ポリゴン", 137],
  ["オムナイト", 138],
  ["オムスター", 139],
  ["カブト", 140],
  ["カブトプス", 141],
  ["プテラ", 142],
  ["カビゴン", 143],
  ["フリーザー", 144],
  ["サンダー", 145],
  ["ファイヤー", 146],
  ["ミニリュウ", 147],
  ["ハクリュー", 148],
  ["カイリュー", 149],
  ["ミュウツー", 150],
  ["ミュウ", 151],
  ["チコリータ", 152],
  ["ベイリーフ", 153],
  ["メガニウム", 154],
  ["ヒノアラシ", 155],
  ["マグマラシ", 156],
  ["バクフーン", 157],
  ["ワニノコ", 158],
  ["アリゲイツ", 159],
  ["オーダイル", 160],
  ["オタチ", 161],
  ["オオタチ", 162],
  ["ホーホー", 163],
  ["ヨルノズク", 164],
  ["レディバ", 165],
  ["レディアン", 166],
  ["イトマル", 167],
  ["アリアドス", 168],
  ["クロバット", 169],
  ["チョンチー", 170],
  ["ランターン", 171],
  ["ピチュー", 172],
  ["ピィ", 173],
  ["ププリン", 174],
  ["トゲピー", 175],
  ["トゲチック", 176],
  ["ネイティ", 177],
  ["ネイティオ", 178],
  ["メリープ", 179],
  ["モココ", 180],
  ["デンリュウ", 181],
  ["キレイハナ", 182],
  ["マリル", 183],
  ["マリルリ", 184],
  ["ウソッキー", 185],
  ["ニョロトノ", 186],
  ["ハネッコ", 187],
  ["ポポッコ", 188],
  ["ワタッコ", 189],
  ["エイパム", 190],
  ["ヒマナッツ", 191],
  ["キマワリ", 192],
  ["ヤンヤンマ", 193],
  ["ウパー", 194],
  ["ヌオー", 195],
  ["エーフィ", 196],
  ["ブラッキー", 197],
  ["ヤミカラス", 198],
  ["ヤドキング", 199],
  ["ムウマ", 200],
  ["アンノーン", 201],
  ["ソーナンス", 202],
  ["キリンリキ", 203],
  ["クヌギダマ", 204],
  ["フォレトス", 205],
  ["ノコッチ", 206],
  ["グライガー", 207],
  ["ハガネール", 208],
  ["ブルー", 209],
  ["グランブル", 210],
  ["ハリーセン", 211],
  ["ハッサム", 212],
  ["ツボツボ", 213],
  ["ヘラクロス", 214],
  ["ニューラ", 215],
  ["ヒメグマ", 216],
  ["リングマ", 217],
  ["マグマッグ", 218],
  ["マグカルゴ", 219],
  ["ウリムー", 220],
  ["イノムー", 221],
  ["サニーゴ", 222],
  ["テッポウオ", 223],
  ["オクタン", 224],
  ["デリバード", 225],
  ["マンタイン", 226],
  ["エアームド", 227],
  ["デルビル", 228],
  ["ヘルガー", 229],
  ["キングドラ", 230],
  ["ゴマゾウ", 231],
  ["ドンファン", 232],
  ["ポリゴン２", 233],
  ["ポリゴン2", 233],
  ["オドシシ", 234],
  ["ドーブル", 235],
  ["バルキー", 236],
  ["カポエラー", 237],
  ["ムチュール", 238],
  ["エレキッド", 239],
  ["ブビィ", 240],
  ["ミルタンク", 241],
  ["ハピナス", 242],
  ["ライコウ", 243],
  ["エンテイ", 244],
  ["スイクン", 245],
  ["ヨーギラス", 246],
  ["サナギラス", 247],
  ["バンギラス", 248],
  ["ルギア", 249],
  ["ホウオウ", 250],
  ["セレビィ", 251],
  ["キモリ", 252],
  ["ジュプトル", 253],
  ["ジュカイン", 254],
  ["アチャモ", 255],
  ["ワカシャモ", 256],
  ["バシャーモ", 257],
  ["ミズゴロウ", 258],
  ["ヌマクロー", 259],
  ["ラグラージ", 260],
  ["ポチエナ", 261],
  ["グラエナ", 262],
  ["ジグザグマ", 263],
  ["マッスグマ", 264],
  ["ケムッソ", 265],
  ["カラサリス", 266],
  ["アゲハント", 267],
  ["マユルド", 268],
  ["ドクケイル", 269],
  ["ハスボー", 270],
  ["ハスブレロ", 271],
  ["ルンパッパ", 272],
  ["タネボー", 273],
  ["コノハナ", 274],
  ["ダーテング", 275],
  ["スバメ", 276],
  ["オオスバメ", 277],
  ["キャモメ", 278],
  ["ペリッパー", 279],
  ["ラルトス", 280],
  ["キルリア", 281],
  ["サーナイト", 282],
  ["アメタマ", 283],
  ["アメモース", 284],
  ["キノココ", 285],
  ["キノガッサ", 286],
  ["ナマケロ", 287],
  ["ヤルキモノ", 288],
  ["ケッキング", 289],
  ["ツチニン", 290],
  ["テッカニン", 291],
  ["ヌケニン", 292],
  ["ゴニョニョ", 293],
  ["ドゴーム", 294],
  ["バクオング", 295],
  ["マクノシタ", 296],
  ["ハリテヤマ", 297],
  ["ルリリ", 298],
  ["ノズパス", 299],
  ["エネコ", 300],
  ["エネコロロ", 301],
  ["ヤミラミ", 302],
  ["クチート", 303],
  ["ココドラ", 304],
  ["コドラ", 305],
  ["ボスゴドラ", 306],
  ["アサナン", 307],
  ["チャーレム", 308],
  ["ラクライ", 309],
  ["ライボルト", 310],
  ["プラスル", 311],
  ["マイナン", 312],
  ["バルビート", 313],
  ["イルミーゼ", 314],
  ["ロゼリア", 315],
  ["ゴクリン", 316],
  ["マルノーム", 317],
  ["キバニア", 318],
  ["サメハダー", 319],
  ["ホエルコ", 320],
  ["ホエルオー", 321],
  ["ドンメル", 322],
  ["バクーダ", 323],
  ["コータス", 324],
  ["バネブー", 325],
  ["ブーピッグ", 326],
  ["パッチール", 327],
  ["ナックラー", 328],
  ["ビブラーバ", 329],
  ["フライゴン", 330],
  ["サボネア", 331],
  ["ノクタス", 332],
  ["チルット", 333],
  ["チルタリス", 334],
  ["ザングース", 335],
  ["ハブネーク", 336],
  ["ルナトーン", 337],
  ["ソルロック", 338],
  ["ドジョッチ", 339],
  ["ナマズン", 340],
  ["ヘイガニ", 341],
  ["シザリガー", 342],
  ["ヤジロン", 343],
  ["ネンドール", 344],
  ["リリーラ", 345],
  ["ユレイドル", 346],
  ["アノプス", 347],
  ["アーマルド", 348],
  ["ヒンバス", 349],
  ["ミロカロス", 350],
  ["ポワルン", 351],
  ["カクレオン", 352],
  ["カゲボウズ", 353],
  ["ジュペッタ", 354],
  ["ヨマワル", 355],
  ["サマヨール", 356],
  ["トロピウス", 357],
  ["チリーン", 358],
  ["アブソル", 359],
  ["ソーナノ", 360],
  ["ユキワラシ", 361],
  ["オニゴーリ", 362],
  ["タマザラシ", 363],
  ["トドグラー", 364],
  ["トドゼルガ", 365],
  ["パールル", 366],
  ["ハンテール", 367],
  ["サクラビス", 368],
  ["ジーランス", 369],
  ["ラブカス", 370],
  ["タツベイ", 371],
  ["コモルー", 372],
  ["ボーマンダ", 373],
  ["ダンバル", 374],
  ["メタング", 375],
  ["メタグロス", 376],
  ["レジロック", 377],
  ["レジアイス", 378],
  ["レジスチル", 379],
  ["ラティアス", 380],
  ["ラティオス", 381],
  ["カイオーガ", 382],
  ["グラードン", 383],
  ["レックウザ", 384],
  ["ジラーチ", 385],
  ["デオキシス", 386],
  ["ナエトル", 387],
  ["ハヤシガメ", 388],
  ["ドダイトス", 389],
  ["ヒコザル", 390],
  ["モウカザル", 391],
  ["ゴウカザル", 392],
  ["ポッチャマ", 393],
  ["ポッタイシ", 394],
  ["エンペルト", 395],
  ["ムックル", 396],
  ["ムクバード", 397],
  ["ムクホーク", 398],
  ["ビッパ", 399],
  ["ビーダル", 400],
  ["コロボーシ", 401],
  ["コロトック", 402],
  ["コリンク", 403],
  ["ルクシオ", 404],
  ["レントラー", 405],
  ["スボミー", 406],
  ["ロズレイド", 407],
  ["ズガイドス", 408],
  ["ラムパルド", 409],
  ["タテトプス", 410],
  ["トリデプス", 411],
  ["ミノムッチ", 412],
  ["ミノマダム", 413],
  ["ガーメイル", 414],
  ["ミツハニー", 415],
  ["ビークイン", 416],
  ["パチリス", 417],
  ["ブイゼル", 418],
  ["フローゼル", 419],
  ["チェリンボ", 420],
  ["チェリム", 421],
  ["カラナクシ", 422],
  ["トリトドン", 423],
  ["エテボース", 424],
  ["フワンテ", 425],
  ["フワライド", 426],
  ["ミミロル", 427],
  ["ミミロップ", 428],
  ["ムウマージ", 429],
  ["ドンカラス", 430],
  ["ニャルマー", 431],
  ["ブニャット", 432],
  ["リーシャン", 433],
  ["スカンプー", 434],
  ["スカタンク", 435],
  ["ドーミラー", 436],
  ["ドータクン", 437],
  ["ウソハチ", 438],
  ["マネネ", 439],
  ["ピンプク", 440],
  ["ペラップ", 441],
  ["ミカルゲ", 442],
  ["フカマル", 443],
  ["ガバイト", 444],
  ["ガブリアス", 445],
  ["ゴンベ", 446],
  ["リオル", 447],
  ["ルカリオ", 448],
  ["ヒポポタス", 449],
  ["カバルドン", 450],
  ["スコルピ", 451],
  ["ドラピオン", 452],
  ["グレッグル", 453],
  ["ドクロッグ", 454],
  ["マスキッパ", 455],
  ["ケイコウオ", 456],
  ["ネオラント", 457],
  ["タマンタ", 458],
  ["ユキカブリ", 459],
  ["ユキノオー", 460],
  ["マニューラ", 461],
  ["ジバコイル", 462],
  ["ベロベルト", 463],
  ["ドサイドン", 464],
  ["モジャンボ", 465],
  ["エレキブル", 466],
  ["ブーバーン", 467],
  ["トゲキッス", 468],
  ["メガヤンマ", 469],
  ["リーフィア", 470],
  ["グレイシア", 471],
  ["グライオン", 472],
  ["マンムー", 473],
  ["ポリゴンＺ", 474],
  ["ポリゴンz", 474],
  ["ポリゴンゼット", 474],
  ["エルレイド", 475],
  ["ダイノーズ", 476],
  ["ヨノワール", 477],
  ["ユキメノコ", 478],
  ["ロトム", 479],
  ["ユクシー", 480],
  ["エムリット", 481],
  ["アグノム", 482],
  ["ディアルガ", 483],
  ["パルキア", 484],
  ["ヒードラン", 485],
  ["レジギガス", 486],
  ["ギラティナ", 487],
  ["クレセリア", 488],
  ["フィオネ", 489],
  ["マナフィ", 490],
  ["ダークライ", 491],
  ["シェイミ", 492],
  ["アルセウス", 493],
  ["ビクティニ", 494],
  ["ツタージャ", 495],
  ["ジャノビー", 496],
  ["ジャローダ", 497],
  ["ポカブ", 498],
  ["チャオブー", 499],
  ["エンブオー", 500],
  ["ミジュマル", 501],
  ["フタチマル", 502],
  ["ダイケンキ", 503],
  ["ミネズミ", 504],
  ["ミルホッグ", 505],
  ["ヨーテリー", 506],
  ["ハーデリア", 507],
  ["ムーランド", 508],
  ["チョロネコ", 509],
  ["レパルダス", 510],
  ["ヤナップ", 511],
  ["ヤナッキー", 512],
  ["バオップ", 513],
  ["バオッキー", 514],
  ["ヒヤップ", 515],
  ["ヒヤッキー", 516],
  ["ムンナ", 517],
  ["ムシャーナ", 518],
  ["マメパト", 519],
  ["ハトーボー", 520],
  ["ケンホロウ", 521],
  ["シママ", 522],
  ["ゼブライカ", 523],
  ["ダンゴロ", 524],
  ["ガントル", 525],
  ["ギガイアス", 526],
  ["コロモリ", 527],
  ["ココロモリ", 528],
  ["モグリュー", 529],
  ["ドリュウズ", 530],
  ["タブンネ", 531],
  ["ドッコラー", 532],
  ["ドテッコツ", 533],
  ["ローブシン", 534],
  ["オタマロ", 535],
  ["ガマガル", 536],
  ["ガマゲロゲ", 537],
  ["ナゲキ", 538],
  ["ダゲキ", 539],
  ["クルミル", 540],
  ["クルマユ", 541],
  ["ハハコモリ", 542],
  ["フシデ", 543],
  ["ホイーガ", 544],
  ["ペンドラー", 545],
  ["モンメン", 546],
  ["エルフーン", 547],
  ["チュリネ", 548],
  ["ドレディア", 549],
  ["バスラオ", 550],
  ["メグロコ", 551],
  ["ワルビル", 552],
  ["ワルビアル", 553],
  ["ダルマッカ", 554],
  ["ヒヒダルマ", 555],
  ["マラカッチ", 556],
  ["イシズマイ", 557],
  ["イワパレス", 558],
  ["ズルッグ", 559],
  ["ズルズキン", 560],
  ["シンボラー", 561],
  ["デスマス", 562],
  ["デスカーン", 563],
  ["プロトーガ", 564],
  ["アバゴーラ", 565],
  ["アーケン", 566],
  ["アーケオス", 567],
  ["ヤブクロン", 568],
  ["ダストダス", 569],
  ["ゾロア", 570],
  ["ゾロアーク", 571],
  ["チラーミィ", 572],
  ["チラチーノ", 573],
  ["ゴチム", 574],
  ["ゴチミル", 575],
  ["ゴチルゼル", 576],
  ["ユニラン", 577],
  ["ダブラン", 578],
  ["ランクルス", 579],
  ["コアルヒー", 580],
  ["スワンナ", 581],
  ["バニプッチ", 582],
  ["バニリッチ", 583],
  ["バイバニラ", 584],
  ["シキジカ", 585],
  ["メブキジカ", 586],
  ["エモンガ", 587],
  ["カブルモ", 588],
  ["シュバルゴ", 589],
  ["タマゲタケ", 590],
  ["モロバレル", 591],
  ["プルリル", 592],
  ["ブルンゲル", 593],
  ["ママンボウ", 594],
  ["バチュル", 595],
  ["デンチュラ", 596],
  ["テッシード", 597],
  ["ナットレイ", 598],
  ["ギアル", 599],
  ["ギギアル", 600],
  ["ギギギアル", 601],
  ["シビシラス", 602],
  ["シビビール", 603],
  ["シビルドン", 604],
  ["リグレー", 605],
  ["オーベム", 606],
  ["ヒトモシ", 607],
  ["ランプラー", 608],
  ["シャンデラ", 609],
  ["キバゴ", 610],
  ["オノンド", 611],
  ["オノノクス", 612],
  ["クマシュン", 613],
  ["ツンベアー", 614],
  ["フリージオ", 615],
  ["チョボマキ", 616],
  ["アギルダー", 617],
  ["マッギョ", 618],
  ["コジョフー", 619],
  ["コジョンド", 620],
  ["クリムガン", 621],
  ["ゴビット", 622],
  ["ゴルーグ", 623],
  ["コマタナ", 624],
  ["キリキザン", 625],
  ["バッフロン", 626],
  ["ワシボン", 627],
  ["ウォーグル", 628],
  ["バルチャイ", 629],
  ["バルジーナ", 630],
  ["クイタラン", 631],
  ["アイアント", 632],
  ["モノズ", 633],
  ["ジヘッド", 634],
  ["サザンドラ", 635],
  ["メラルバ", 636],
  ["ウルガモス", 637],
  ["コバルオン", 638],
  ["テラキオン", 639],
  ["ビリジオン", 640],
  ["トルネロス", 641],
  ["ボルトロス", 642],
  ["レシラム", 643],
  ["ゼクロム", 644],
  ["ランドロス", 645],
  ["キュレム", 646],
  ["ケルディオ", 647],
  ["メロエッタ", 648],
  ["ゲノセクト", 649],
  ["ハリマロン", 650],
  ["ハリボーグ", 651],
  ["ブリガロン", 652],
  ["フォッコ", 653],
  ["テールナー", 654],
  ["マフォクシー", 655],
  ["ケロマツ", 656],
  ["ゲコガシラ", 657],
  ["ゲッコウガ", 658],
  ["ホルビー", 659],
  ["ホルード", 660],
  ["ヤヤコマ", 661],
  ["ヒノヤコマ", 662],
  ["ファイアロー", 663],
  ["コフキムシ", 664],
  ["コフーライ", 665],
  ["ビビヨン", 666],
  ["シシコ", 667],
  ["カエンジシ", 668],
  ["フラベベ", 669],
  ["フラエッテ", 670],
  ["フラージェス", 671],
  ["メェークル", 672],
  ["ゴーゴート", 673],
  ["ヤンチャム", 674],
  ["ゴロンダ", 675],
  ["トリミアン", 676],
  ["ニャスパー", 677],
  ["ニャオニクス", 678],
  ["ヒトツキ", 679],
  ["ニダンギル", 680],
  ["ギルガルド", 681],
  ["シュシュプ", 682],
  ["フレフワン", 683],
  ["ペロッパフ", 684],
  ["ペロリーム", 685],
  ["マーイーカ", 686],
  ["カラマネロ", 687],
  ["カメテテ", 688],
  ["ガメノデス", 689],
  ["クズモー", 690],
  ["ドラミドロ", 691],
  ["ウデッポウ", 692],
  ["ブロスター", 693],
  ["エリキテル", 694],
  ["エレザード", 695],
  ["チゴラス", 696],
  ["ガチゴラス", 697],
  ["アマルス", 698],
  ["アマルルガ", 699],
  ["ニンフィア", 700],
  ["ルチャブル", 701],
  ["デデンネ", 702],
  ["メレシー", 703],
  ["ヌメラ", 704],
  ["ヌメイル", 705],
  ["ヌメルゴン", 706],
  ["クレッフィ", 707],
  ["ボクレー", 708],
  ["オーロット", 709],
  ["バケッチャ", 710],
  ["パンプジン", 711],
  ["カチコール", 712],
  ["クレベース", 713],
  ["オンバット", 714],
  ["オンバーン", 715],
  ["ゼルネアス", 716],
  ["イベルタル", 717],
  ["ジガルデ", 718],
  ["ディアンシー", 719],
  ["フーパ", 720],
  ["ボルケニオン", 721],
  ["モクロー", 722],
  ["フクスロー", 723],
  ["ジュナイパー", 724],
  ["ニャビー", 725],
  ["ニャヒート", 726],
  ["ガオガエン", 727],
  ["アシマリ", 728],
  ["オシャマリ", 729],
  ["アシレーヌ", 730],
  ["ツツケラ", 731],
  ["ケララッパ", 732],
  ["ドデカバシ", 733],
  ["ヤングース", 734],
  ["デカグース", 735],
  ["アゴジムシ", 736],
  ["デンヂムシ", 737],
  ["クワガノン", 738],
  ["マケンカニ", 739],
  ["ケケンカニ", 740],
  ["オドリドリ", 741],
  ["アブリー", 742],
  ["アブリボン", 743],
  ["イワンコ", 744],
  ["ルガルガン", 745],
  ["ヨワシ", 746],
  ["ヒドイデ", 747],
  ["ドヒドイデ", 748],
  ["ドロバンコ", 749],
  ["バンバドロ", 750],
  ["シズクモ", 751],
  ["オニシズクモ", 752],
  ["カリキリ", 753],
  ["ラランテス", 754],
  ["ネマシュ", 755],
  ["マシェード", 756],
  ["ヤトウモリ", 757],
  ["エンニュート", 758],
  ["ヌイコグマ", 759],
  ["キテルグマ", 760],
  ["アマカジ", 761],
  ["アママイコ", 762],
  ["アマージョ", 763],
  ["キュワワー", 764],
  ["ヤレユータン", 765],
  ["ナゲツケサル", 766],
  ["コソクムシ", 767],
  ["グソクムシャ", 768],
  ["スナバァ", 769],
  ["シロデスナ", 770],
  ["ナマコブシ", 771],
  ["タイプ：ヌル", 772],
  ["タイプ:ヌル", 772],
  ["タイプヌル", 772],
  ["シルヴァディ", 773],
  ["メテノ", 774],
  ["ネッコアラ", 775],
  ["バクガメス", 776],
  ["トゲデマル", 777],
  ["ミミッキュ", 778],
  ["ハギギシリ", 779],
  ["ジジーロン", 780],
  ["ダダリン", 781],
  ["ジャラコ", 782],
  ["ジャランゴ", 783],
  ["ジャラランガ", 784],
  ["カプ・コケコ", 785],
  ["カプコケコ", 785],
  ["カプ・テテフ", 786],
  ["カプテテフ", 786],
  ["カプ・ブルル", 787],
  ["カプブルル", 787],
  ["カプ・レヒレ", 788],
  ["カプレヒレ", 788],
  ["コスモッグ", 789],
  ["コスモウム", 790],
  ["ソルガレオ", 791],
  ["ルナアーラ", 792],
  ["ウツロイド", 793],
  ["マッシブーン", 794],
  ["フェローチェ", 795],
  ["デンジュモク", 796],
  ["テッカグヤ", 797],
  ["カミツルギ", 798],
  ["アクジキング", 799],
  ["ネクロズマ", 800],
  ["マギアナ", 801],
  ["マーシャドー", 802],
  ["ベベノム", 803],
  ["アーゴヨン", 804],
  ["ツンデツンデ", 805],
  ["ズガドーン", 806],
  ["ゼラオラ", 807],
  ["メルタン", 808],
  ["メルメタル", 809],
  ["バチンキー", 811],
  ["ゴリランダー", 812],
  ["ヒバニー", 813],
  ["ラビフット", 814],
  ["エースバーン", 815],
  ["メッソン", 816],
  ["ジメレオン", 817],
  ["インテレオン", 818],
  ["ホシガリス", 819],
  ["ヨクバリス", 820],
  ["ココガラ", 821],
  ["アオガラス", 822],
  ["アーマーガア", 823],
  ["サッチムシ", 824],
  ["レドームシ", 825],
  ["イオルブ", 826],
  ["クスネ", 827],
  ["フォクスライ", 828],
  ["ヒメンカ", 829],
  ["ワタシラガ", 830],
  ["ウールー", 831],
  ["バイウールー", 832],
  ["カムカメ", 833],
  ["カジリガメ", 834],
  ["ワンパチ", 835],
  ["パルスワン", 836],
  ["タンドン", 837],
  ["トロッゴン", 838],
  ["セキタンザン", 839],
  ["カジッチュ", 840],
  ["アップリュー", 841],
  ["タルップル", 842],
  ["スナヘビ", 843],
  ["サダイジャ", 844],
  ["ウッウ", 845],
  ["サシカマス", 846],
  ["カマスジョー", 847],
  ["エレズン", 848],
  ["ストリンダー", 849],
  ["ヤクデ", 850],
  ["マルヤクデ", 851],
  ["タタッコ", 852],
  ["オトスパス", 853],
  ["ヤバチャ", 854],
  ["ポットデス", 855],
  ["ミブリム", 856],
  ["テブリム", 857],
  ["ブリムオン", 858],
  ["ベロバー", 859],
  ["ギモー", 860],
  ["オーロンゲ", 861],
  ["タチフサグマ", 862],
  ["ニャイキング", 863],
  ["サニゴーン", 864],
  ["ネギガナイト", 865],
  ["デスバーン", 866],
  ["バリコオル", 867],
  ["マホミル", 868],
  ["マホイップ", 869],
  ["タイレーツ", 870],
  ["バチンウニ", 871],
  ["ユキハミ", 872],
  ["モスノウ", 873],
  ["イシヘンジン", 874],
  ["コオリッポ", 875],
  ["イエッサン", 876],
  ["モルペコ", 877],
  ["ゾウドウ", 878],
  ["ダイオウドウ", 879],
  ["パッチラゴン", 880],
  ["パッチルドン", 881],
  ["ウオノラゴン", 882],
  ["ウオチルドン", 883],
  ["ジュラルドン", 884],
  ["ドラメシャ", 885],
  ["ドロンチ", 886],
  ["ドラパルト", 887],
  ["ザシアン", 888],
  ["ザマゼンタ", 889],
  ["ムゲンダイナ", 890]
]);

class PokeDomManager {
  constructor(pokedata) {
    this.view = document.createDocumentFragment();
    this.answerInput = document.getElementById("answer");
    this.mic = document.getElementById("mic");

    this.pokes = {};
    this.pokeMap = new Map();
    this.pokeMapKeys;
    this.answered = [];
    this.listener = {
      speech: e => this.speech(e),
      speechResult: e => this.speechResult(e)
    };

    pokedata.forEach(d => {
      d.keyword.forEach(k => this.pokeMap.set(k, `id${d.id}`));

      const poke = new Poke(d);
      this.pokes[`id${d.id}`] = poke;

      this.view.appendChild(poke.view);
    });
    this.pokeMapKeys = [...this.pokeMap.keys()];

    const p = document.createDocumentFragment();
    const progress = document.createElement("span");
    const slash = document.createTextNode("/");
    const total = document.createElement("span");
    progress.id = "progress";
    total.id = "total";
    progress.textContent = "0";
    total.textContent = pokes.length;
    p.appendChild(progress);
    p.appendChild(slash);
    p.appendChild(total);
    document.getElementById("p").textContent = "";
    document.getElementById("p").appendChild(p);

    document.getElementById("pokes").appendChild(this.view);

    const initAnswered = localStorage.getItem("answered");
    if (initAnswered) {
      JSON.parse(initAnswered).forEach(a => this.answer(a));
    }

    this.mic.addEventListener("click", this.listener.speech);
    this.answerInput.addEventListener("keydown", e => (e.key === "Enter" ? this.submit(this.answerInput.value) : false));
  }
  submit(word) {
    const key = this.pokeMap.get(word);
    if (key) this.answer(key);
  }
  answer(key) {
    if (key && !this.answered.includes(key)) {
      this.answerInput.value = "";
      this.answered.push(key);
      this.pokes[key].active();
      document.getElementById("progress").textContent = this.answered.length;

      localStorage.setItem("answered", JSON.stringify(this.answered));
    }
  }
  speech() {
    const speech = new webkitSpeechRecognition();
    speech.lang = "ja-JP";
    speech.interimResults = true;
    speech.continuous = true;

    speech.addEventListener("result", this.listener.speechResult);
    speech.addEventListener("error", e => console.log(e));
    speech.addEventListener("soundstart", e => console.log(e));

    speech.start();
  }
  speechResult(e) {
    const result = e.results[e.resultIndex];
    const alt = result[0];

    console.log("\n");
    console.log("RESULT:");
    console.log(e);
    console.log(alt.transcript);
    console.log(result.isFinal);

    if (result.isFinal) {
      this.pokeMapKeys.forEach(k => {
        if (alt.transcript.includes(k)) {
          this.submit(k);
        }
      });
      this.answerInput.classList.remove("speech");
    } else {
      this.answerInput.value = alt.transcript;
      this.answerInput.classList.add("speech");
    }
  }
}
class Poke {
  constructor(poke) {
    this.id = poke.id;
    this.name = poke.name;
    this.image = `/pokemon-ierukana/assets/images/pokemon/${poke.id}.png`;

    this.view = document.createElement("div");
    this.viewItem = {
      imagearea: document.createElement("div"),
      bone: document.createElement("div"),
      image: document.createElement("img"),
      primary: document.createElement("div"),
      no: document.createElement("p"),
      name: document.createElement("p")
    };

    this.view.classList.add("poke");
    this.viewItem.imagearea.classList.add("poke-imgarea");
    this.viewItem.bone.classList.add("poke-imgbone");
    this.viewItem.image.classList.add("poke-img");
    this.viewItem.primary.classList.add("poke-primary");
    this.viewItem.no.classList.add("poke-no");
    this.viewItem.name.classList.add("poke-name");

    this.viewItem.bone.textContent = "？";
    this.viewItem.no.textContent = `No: ${this.id}`;
    this.viewItem.name.textContent = "？？？？";

    this.viewItem.imagearea.appendChild(this.viewItem.bone);
    this.viewItem.primary.appendChild(this.viewItem.no);
    this.viewItem.primary.appendChild(this.viewItem.name);
    this.view.appendChild(this.viewItem.imagearea);
    this.view.appendChild(this.viewItem.primary);
  }
  active() {
    this.viewItem.image.src = this.image;
    this.viewItem.name.textContent = this.name;

    this.viewItem.imagearea.removeChild(this.viewItem.bone);
    this.viewItem.imagearea.appendChild(this.viewItem.image);

    this.view.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

const setting = () => {
  // setting
  localStorage.removeItem("answered");
};

const init = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js", { scope: "/pokemon-ierukana/" })
      .then(reg => console.log("ServiceWorker registration successful with scope: ", reg.scope))
      .catch(err => console.log("ServiceWorker registration failed: ", err));
  }

  new PokeDomManager(pokes);

  document.getElementById("setting").addEventListener("click", setting);
};

init();
