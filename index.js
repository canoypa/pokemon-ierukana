class Main {
  pokedex = [
    { id: 1, name: "フシギダネ", keyword: ["フシギダネ"] },
    { id: 2, name: "フシギソウ", keyword: ["フシギソウ"] },
    { id: 3, name: "フシギバナ", keyword: ["フシギバナ"] },
    { id: 4, name: "ヒトカゲ", keyword: ["ヒトカゲ"] },
    { id: 5, name: "リザード", keyword: ["リザード"] },
    { id: 6, name: "リザードン", keyword: ["リザードン"] },
    { id: 7, name: "ゼニガメ", keyword: ["ゼニガメ"] },
    { id: 8, name: "カメール", keyword: ["カメール"] },
    { id: 9, name: "カメックス", keyword: ["カメックス"] },
    { id: 10, name: "キャタピー", keyword: ["キャタピー"] },
    { id: 11, name: "トランセル", keyword: ["トランセル"] },
    { id: 12, name: "バタフリー", keyword: ["バタフリー"] },
    { id: 13, name: "ビードル", keyword: ["ビードル"] },
    { id: 14, name: "コクーン", keyword: ["コクーン"] },
    { id: 15, name: "スピアー", keyword: ["スピアー"] },
    { id: 16, name: "ポッポ", keyword: ["ポッポ"] },
    { id: 17, name: "ピジョン", keyword: ["ピジョン"] },
    { id: 18, name: "ピジョット", keyword: ["ピジョット"] },
    { id: 19, name: "コラッタ", keyword: ["コラッタ"] },
    { id: 20, name: "ラッタ", keyword: ["ラッタ"] },
    { id: 21, name: "オニスズメ", keyword: ["オニスズメ"] },
    { id: 22, name: "オニドリル", keyword: ["オニドリル"] },
    { id: 23, name: "アーボ", keyword: ["アーボ"] },
    { id: 24, name: "アーボック", keyword: ["アーボック"] },
    { id: 25, name: "ピカチュウ", keyword: ["ピカチュウ"] },
    { id: 26, name: "ライチュウ", keyword: ["ライチュウ"] },
    { id: 27, name: "サンド", keyword: ["サンド"] },
    { id: 28, name: "サンドパン", keyword: ["サンドパン"] },
    { id: 29, name: "ニドラン♀", keyword: ["ニドラン♀", "ニドランメス"] },
    { id: 30, name: "ニドリーナ", keyword: ["ニドリーナ"] },
    { id: 31, name: "ニドクイン", keyword: ["ニドクイン"] },
    { id: 32, name: "ニドラン♂", keyword: ["ニドラン♂", "ニドランオス"] },
    { id: 33, name: "ニドリーノ", keyword: ["ニドリーノ"] },
    { id: 34, name: "ニドキング", keyword: ["ニドキング"] },
    { id: 35, name: "ピッピ", keyword: ["ピッピ"] },
    { id: 36, name: "ピクシー", keyword: ["ピクシー"] },
    { id: 37, name: "ロコン", keyword: ["ロコン"] },
    { id: 38, name: "キュウコン", keyword: ["キュウコン"] },
    { id: 39, name: "プリン", keyword: ["プリン"] },
    { id: 40, name: "プクリン", keyword: ["プクリン"] },
    { id: 41, name: "ズバット", keyword: ["ズバット"] },
    { id: 42, name: "ゴルバット", keyword: ["ゴルバット"] },
    { id: 43, name: "ナゾノクサ", keyword: ["ナゾノクサ"] },
    { id: 44, name: "クサイハナ", keyword: ["クサイハナ"] },
    { id: 45, name: "ラフレシア", keyword: ["ラフレシア"] },
    { id: 46, name: "パラス", keyword: ["パラス"] },
    { id: 47, name: "パラセクト", keyword: ["パラセクト"] },
    { id: 48, name: "コンパン", keyword: ["コンパン"] },
    { id: 49, name: "モルフォン", keyword: ["モルフォン"] },
    { id: 50, name: "ディグダ", keyword: ["ディグダ"] },
    { id: 51, name: "ダグトリオ", keyword: ["ダグトリオ"] },
    { id: 52, name: "ニャース", keyword: ["ニャース"] },
    { id: 53, name: "ペルシアン", keyword: ["ペルシアン"] },
    { id: 54, name: "コダック", keyword: ["コダック"] },
    { id: 55, name: "ゴルダック", keyword: ["ゴルダック"] },
    { id: 56, name: "マンキー", keyword: ["マンキー"] },
    { id: 57, name: "オコリザル", keyword: ["オコリザル"] },
    { id: 58, name: "ガーディ", keyword: ["ガーディ"] },
    { id: 59, name: "ウインディ", keyword: ["ウインディ"] },
    { id: 60, name: "ニョロモ", keyword: ["ニョロモ"] },
    { id: 61, name: "ニョロゾ", keyword: ["ニョロゾ"] },
    { id: 62, name: "ニョロボン", keyword: ["ニョロボン"] },
    { id: 63, name: "ケーシィ", keyword: ["ケーシィ"] },
    { id: 64, name: "ユンゲラー", keyword: ["ユンゲラー"] },
    { id: 65, name: "フーディン", keyword: ["フーディン"] },
    { id: 66, name: "ワンリキー", keyword: ["ワンリキー"] },
    { id: 67, name: "ゴーリキー", keyword: ["ゴーリキー"] },
    { id: 68, name: "カイリキー", keyword: ["カイリキー"] },
    { id: 69, name: "マダツボミ", keyword: ["マダツボミ"] },
    { id: 70, name: "ウツドン", keyword: ["ウツドン"] },
    { id: 71, name: "ウツボット", keyword: ["ウツボット"] },
    { id: 72, name: "メノクラゲ", keyword: ["メノクラゲ"] },
    { id: 73, name: "ドククラゲ", keyword: ["ドククラゲ"] },
    { id: 74, name: "イシツブテ", keyword: ["イシツブテ"] },
    { id: 75, name: "ゴローン", keyword: ["ゴローン"] },
    { id: 76, name: "ゴローニャ", keyword: ["ゴローニャ"] },
    { id: 77, name: "ポニータ", keyword: ["ポニータ"] },
    { id: 78, name: "ギャロップ", keyword: ["ギャロップ"] },
    { id: 79, name: "ヤドン", keyword: ["ヤドン"] },
    { id: 80, name: "ヤドラン", keyword: ["ヤドラン"] },
    { id: 81, name: "コイル", keyword: ["コイル"] },
    { id: 82, name: "レアコイル", keyword: ["レアコイル"] },
    { id: 83, name: "カモネギ", keyword: ["カモネギ"] },
    { id: 84, name: "ドードー", keyword: ["ドードー"] },
    { id: 85, name: "ドードリオ", keyword: ["ドードリオ"] },
    { id: 86, name: "パウワウ", keyword: ["パウワウ"] },
    { id: 87, name: "ジュゴン", keyword: ["ジュゴン"] },
    { id: 88, name: "ベトベター", keyword: ["ベトベター"] },
    { id: 89, name: "ベトベトン", keyword: ["ベトベトン"] },
    { id: 90, name: "シェルダー", keyword: ["シェルダー"] },
    { id: 91, name: "パルシェン", keyword: ["パルシェン"] },
    { id: 92, name: "ゴース", keyword: ["ゴース"] },
    { id: 93, name: "ゴースト", keyword: ["ゴースト"] },
    { id: 94, name: "ゲンガー", keyword: ["ゲンガー"] },
    { id: 95, name: "イワーク", keyword: ["イワーク"] },
    { id: 96, name: "スリープ", keyword: ["スリープ"] },
    { id: 97, name: "スリーパー", keyword: ["スリーパー"] },
    { id: 98, name: "クラブ", keyword: ["クラブ"] },
    { id: 99, name: "キングラー", keyword: ["キングラー"] },
    { id: 100, name: "ビリリダマ", keyword: ["ビリリダマ"] },
    { id: 101, name: "マルマイン", keyword: ["マルマイン"] },
    { id: 102, name: "タマタマ", keyword: ["タマタマ"] },
    { id: 103, name: "ナッシー", keyword: ["ナッシー"] },
    { id: 104, name: "カラカラ", keyword: ["カラカラ"] },
    { id: 105, name: "ガラガラ", keyword: ["ガラガラ"] },
    { id: 106, name: "サワムラー", keyword: ["サワムラー"] },
    { id: 107, name: "エビワラー", keyword: ["エビワラー"] },
    { id: 108, name: "ベロリンガ", keyword: ["ベロリンガ"] },
    { id: 109, name: "ドガース", keyword: ["ドガース"] },
    { id: 110, name: "マタドガス", keyword: ["マタドガス"] },
    { id: 111, name: "サイホーン", keyword: ["サイホーン"] },
    { id: 112, name: "サイドン", keyword: ["サイドン"] },
    { id: 113, name: "ラッキー", keyword: ["ラッキー"] },
    { id: 114, name: "モンジャラ", keyword: ["モンジャラ"] },
    { id: 115, name: "ガルーラ", keyword: ["ガルーラ"] },
    { id: 116, name: "タッツー", keyword: ["タッツー"] },
    { id: 117, name: "シードラ", keyword: ["シードラ"] },
    { id: 118, name: "トサキント", keyword: ["トサキント"] },
    { id: 119, name: "アズマオウ", keyword: ["アズマオウ"] },
    { id: 120, name: "ヒトデマン", keyword: ["ヒトデマン"] },
    { id: 121, name: "スターミー", keyword: ["スターミー"] },
    { id: 122, name: "バリヤード", keyword: ["バリヤード"] },
    { id: 123, name: "ストライク", keyword: ["ストライク"] },
    { id: 124, name: "ルージュラ", keyword: ["ルージュラ"] },
    { id: 125, name: "エレブー", keyword: ["エレブー"] },
    { id: 126, name: "ブーバー", keyword: ["ブーバー"] },
    { id: 127, name: "カイロス", keyword: ["カイロス"] },
    { id: 128, name: "ケンタロス", keyword: ["ケンタロス"] },
    { id: 129, name: "コイキング", keyword: ["コイキング"] },
    { id: 130, name: "ギャラドス", keyword: ["ギャラドス"] },
    { id: 131, name: "ラプラス", keyword: ["ラプラス"] },
    { id: 132, name: "メタモン", keyword: ["メタモン"] },
    { id: 133, name: "イーブイ", keyword: ["イーブイ"] },
    { id: 134, name: "シャワーズ", keyword: ["シャワーズ"] },
    { id: 135, name: "サンダース", keyword: ["サンダース"] },
    { id: 136, name: "ブースター", keyword: ["ブースター"] },
    { id: 137, name: "ポリゴン", keyword: ["ポリゴン"] },
    { id: 138, name: "オムナイト", keyword: ["オムナイト"] },
    { id: 139, name: "オムスター", keyword: ["オムスター"] },
    { id: 140, name: "カブト", keyword: ["カブト"] },
    { id: 141, name: "カブトプス", keyword: ["カブトプス"] },
    { id: 142, name: "プテラ", keyword: ["プテラ"] },
    { id: 143, name: "カビゴン", keyword: ["カビゴン"] },
    { id: 144, name: "フリーザー", keyword: ["フリーザー"] },
    { id: 145, name: "サンダー", keyword: ["サンダー"] },
    { id: 146, name: "ファイヤー", keyword: ["ファイヤー"] },
    { id: 147, name: "ミニリュウ", keyword: ["ミニリュウ"] },
    { id: 148, name: "ハクリュー", keyword: ["ハクリュー"] },
    { id: 149, name: "カイリュー", keyword: ["カイリュー"] },
    { id: 150, name: "ミュウツー", keyword: ["ミュウツー"] },
    { id: 151, name: "ミュウ", keyword: ["ミュウ"] },
    { id: 152, name: "チコリータ", keyword: ["チコリータ"] },
    { id: 153, name: "ベイリーフ", keyword: ["ベイリーフ"] },
    { id: 154, name: "メガニウム", keyword: ["メガニウム"] },
    { id: 155, name: "ヒノアラシ", keyword: ["ヒノアラシ"] },
    { id: 156, name: "マグマラシ", keyword: ["マグマラシ"] },
    { id: 157, name: "バクフーン", keyword: ["バクフーン"] },
    { id: 158, name: "ワニノコ", keyword: ["ワニノコ"] },
    { id: 159, name: "アリゲイツ", keyword: ["アリゲイツ"] },
    { id: 160, name: "オーダイル", keyword: ["オーダイル"] },
    { id: 161, name: "オタチ", keyword: ["オタチ"] },
    { id: 162, name: "オオタチ", keyword: ["オオタチ"] },
    { id: 163, name: "ホーホー", keyword: ["ホーホー"] },
    { id: 164, name: "ヨルノズク", keyword: ["ヨルノズク"] },
    { id: 165, name: "レディバ", keyword: ["レディバ"] },
    { id: 166, name: "レディアン", keyword: ["レディアン"] },
    { id: 167, name: "イトマル", keyword: ["イトマル"] },
    { id: 168, name: "アリアドス", keyword: ["アリアドス"] },
    { id: 169, name: "クロバット", keyword: ["クロバット"] },
    { id: 170, name: "チョンチー", keyword: ["チョンチー"] },
    { id: 171, name: "ランターン", keyword: ["ランターン"] },
    { id: 172, name: "ピチュー", keyword: ["ピチュー"] },
    { id: 173, name: "ピィ", keyword: ["ピィ"] },
    { id: 174, name: "ププリン", keyword: ["ププリン"] },
    { id: 175, name: "トゲピー", keyword: ["トゲピー"] },
    { id: 176, name: "トゲチック", keyword: ["トゲチック"] },
    { id: 177, name: "ネイティ", keyword: ["ネイティ"] },
    { id: 178, name: "ネイティオ", keyword: ["ネイティオ"] },
    { id: 179, name: "メリープ", keyword: ["メリープ"] },
    { id: 180, name: "モココ", keyword: ["モココ"] },
    { id: 181, name: "デンリュウ", keyword: ["デンリュウ"] },
    { id: 182, name: "キレイハナ", keyword: ["キレイハナ"] },
    { id: 183, name: "マリル", keyword: ["マリル"] },
    { id: 184, name: "マリルリ", keyword: ["マリルリ"] },
    { id: 185, name: "ウソッキー", keyword: ["ウソッキー"] },
    { id: 186, name: "ニョロトノ", keyword: ["ニョロトノ"] },
    { id: 187, name: "ハネッコ", keyword: ["ハネッコ"] },
    { id: 188, name: "ポポッコ", keyword: ["ポポッコ"] },
    { id: 189, name: "ワタッコ", keyword: ["ワタッコ"] },
    { id: 190, name: "エイパム", keyword: ["エイパム"] },
    { id: 191, name: "ヒマナッツ", keyword: ["ヒマナッツ"] },
    { id: 192, name: "キマワリ", keyword: ["キマワリ"] },
    { id: 193, name: "ヤンヤンマ", keyword: ["ヤンヤンマ"] },
    { id: 194, name: "ウパー", keyword: ["ウパー"] },
    { id: 195, name: "ヌオー", keyword: ["ヌオー"] },
    { id: 196, name: "エーフィ", keyword: ["エーフィ"] },
    { id: 197, name: "ブラッキー", keyword: ["ブラッキー"] },
    { id: 198, name: "ヤミカラス", keyword: ["ヤミカラス"] },
    { id: 199, name: "ヤドキング", keyword: ["ヤドキング"] },
    { id: 200, name: "ムウマ", keyword: ["ムウマ"] },
    { id: 201, name: "アンノーン", keyword: ["アンノーン"] },
    { id: 202, name: "ソーナンス", keyword: ["ソーナンス"] },
    { id: 203, name: "キリンリキ", keyword: ["キリンリキ"] },
    { id: 204, name: "クヌギダマ", keyword: ["クヌギダマ"] },
    { id: 205, name: "フォレトス", keyword: ["フォレトス"] },
    { id: 206, name: "ノコッチ", keyword: ["ノコッチ"] },
    { id: 207, name: "グライガー", keyword: ["グライガー"] },
    { id: 208, name: "ハガネール", keyword: ["ハガネール"] },
    { id: 209, name: "ブルー", keyword: ["ブルー"] },
    { id: 210, name: "グランブル", keyword: ["グランブル"] },
    { id: 211, name: "ハリーセン", keyword: ["ハリーセン"] },
    { id: 212, name: "ハッサム", keyword: ["ハッサム"] },
    { id: 213, name: "ツボツボ", keyword: ["ツボツボ"] },
    { id: 214, name: "ヘラクロス", keyword: ["ヘラクロス"] },
    { id: 215, name: "ニューラ", keyword: ["ニューラ"] },
    { id: 216, name: "ヒメグマ", keyword: ["ヒメグマ"] },
    { id: 217, name: "リングマ", keyword: ["リングマ"] },
    { id: 218, name: "マグマッグ", keyword: ["マグマッグ"] },
    { id: 219, name: "マグカルゴ", keyword: ["マグカルゴ"] },
    { id: 220, name: "ウリムー", keyword: ["ウリムー"] },
    { id: 221, name: "イノムー", keyword: ["イノムー"] },
    { id: 222, name: "サニーゴ", keyword: ["サニーゴ"] },
    { id: 223, name: "テッポウオ", keyword: ["テッポウオ"] },
    { id: 224, name: "オクタン", keyword: ["オクタン"] },
    { id: 225, name: "デリバード", keyword: ["デリバード"] },
    { id: 226, name: "マンタイン", keyword: ["マンタイン"] },
    { id: 227, name: "エアームド", keyword: ["エアームド"] },
    { id: 228, name: "デルビル", keyword: ["デルビル"] },
    { id: 229, name: "ヘルガー", keyword: ["ヘルガー"] },
    { id: 230, name: "キングドラ", keyword: ["キングドラ"] },
    { id: 231, name: "ゴマゾウ", keyword: ["ゴマゾウ"] },
    { id: 232, name: "ドンファン", keyword: ["ドンファン"] },
    { id: 233, name: "ポリゴン２", keyword: ["ポリゴン２", "ポリゴン2"] },
    { id: 234, name: "オドシシ", keyword: ["オドシシ"] },
    { id: 235, name: "ドーブル", keyword: ["ドーブル"] },
    { id: 236, name: "バルキー", keyword: ["バルキー"] },
    { id: 237, name: "カポエラー", keyword: ["カポエラー"] },
    { id: 238, name: "ムチュール", keyword: ["ムチュール"] },
    { id: 239, name: "エレキッド", keyword: ["エレキッド"] },
    { id: 240, name: "ブビィ", keyword: ["ブビィ"] },
    { id: 241, name: "ミルタンク", keyword: ["ミルタンク"] },
    { id: 242, name: "ハピナス", keyword: ["ハピナス"] },
    { id: 243, name: "ライコウ", keyword: ["ライコウ"] },
    { id: 244, name: "エンテイ", keyword: ["エンテイ"] },
    { id: 245, name: "スイクン", keyword: ["スイクン"] },
    { id: 246, name: "ヨーギラス", keyword: ["ヨーギラス"] },
    { id: 247, name: "サナギラス", keyword: ["サナギラス"] },
    { id: 248, name: "バンギラス", keyword: ["バンギラス"] },
    { id: 249, name: "ルギア", keyword: ["ルギア"] },
    { id: 250, name: "ホウオウ", keyword: ["ホウオウ"] },
    { id: 251, name: "セレビィ", keyword: ["セレビィ"] },
    { id: 252, name: "キモリ", keyword: ["キモリ"] },
    { id: 253, name: "ジュプトル", keyword: ["ジュプトル"] },
    { id: 254, name: "ジュカイン", keyword: ["ジュカイン"] },
    { id: 255, name: "アチャモ", keyword: ["アチャモ"] },
    { id: 256, name: "ワカシャモ", keyword: ["ワカシャモ"] },
    { id: 257, name: "バシャーモ", keyword: ["バシャーモ"] },
    { id: 258, name: "ミズゴロウ", keyword: ["ミズゴロウ"] },
    { id: 259, name: "ヌマクロー", keyword: ["ヌマクロー"] },
    { id: 260, name: "ラグラージ", keyword: ["ラグラージ"] },
    { id: 261, name: "ポチエナ", keyword: ["ポチエナ"] },
    { id: 262, name: "グラエナ", keyword: ["グラエナ"] },
    { id: 263, name: "ジグザグマ", keyword: ["ジグザグマ"] },
    { id: 264, name: "マッスグマ", keyword: ["マッスグマ"] },
    { id: 265, name: "ケムッソ", keyword: ["ケムッソ"] },
    { id: 266, name: "カラサリス", keyword: ["カラサリス"] },
    { id: 267, name: "アゲハント", keyword: ["アゲハント"] },
    { id: 268, name: "マユルド", keyword: ["マユルド"] },
    { id: 269, name: "ドクケイル", keyword: ["ドクケイル"] },
    { id: 270, name: "ハスボー", keyword: ["ハスボー"] },
    { id: 271, name: "ハスブレロ", keyword: ["ハスブレロ"] },
    { id: 272, name: "ルンパッパ", keyword: ["ルンパッパ"] },
    { id: 273, name: "タネボー", keyword: ["タネボー"] },
    { id: 274, name: "コノハナ", keyword: ["コノハナ"] },
    { id: 275, name: "ダーテング", keyword: ["ダーテング"] },
    { id: 276, name: "スバメ", keyword: ["スバメ"] },
    { id: 277, name: "オオスバメ", keyword: ["オオスバメ"] },
    { id: 278, name: "キャモメ", keyword: ["キャモメ"] },
    { id: 279, name: "ペリッパー", keyword: ["ペリッパー"] },
    { id: 280, name: "ラルトス", keyword: ["ラルトス"] },
    { id: 281, name: "キルリア", keyword: ["キルリア"] },
    { id: 282, name: "サーナイト", keyword: ["サーナイト"] },
    { id: 283, name: "アメタマ", keyword: ["アメタマ"] },
    { id: 284, name: "アメモース", keyword: ["アメモース"] },
    { id: 285, name: "キノココ", keyword: ["キノココ"] },
    { id: 286, name: "キノガッサ", keyword: ["キノガッサ"] },
    { id: 287, name: "ナマケロ", keyword: ["ナマケロ"] },
    { id: 288, name: "ヤルキモノ", keyword: ["ヤルキモノ"] },
    { id: 289, name: "ケッキング", keyword: ["ケッキング"] },
    { id: 290, name: "ツチニン", keyword: ["ツチニン"] },
    { id: 291, name: "テッカニン", keyword: ["テッカニン"] },
    { id: 292, name: "ヌケニン", keyword: ["ヌケニン"] },
    { id: 293, name: "ゴニョニョ", keyword: ["ゴニョニョ"] },
    { id: 294, name: "ドゴーム", keyword: ["ドゴーム"] },
    { id: 295, name: "バクオング", keyword: ["バクオング"] },
    { id: 296, name: "マクノシタ", keyword: ["マクノシタ"] },
    { id: 297, name: "ハリテヤマ", keyword: ["ハリテヤマ"] },
    { id: 298, name: "ルリリ", keyword: ["ルリリ"] },
    { id: 299, name: "ノズパス", keyword: ["ノズパス"] },
    { id: 300, name: "エネコ", keyword: ["エネコ"] },
    { id: 301, name: "エネコロロ", keyword: ["エネコロロ"] },
    { id: 302, name: "ヤミラミ", keyword: ["ヤミラミ"] },
    { id: 303, name: "クチート", keyword: ["クチート"] },
    { id: 304, name: "ココドラ", keyword: ["ココドラ"] },
    { id: 305, name: "コドラ", keyword: ["コドラ"] },
    { id: 306, name: "ボスゴドラ", keyword: ["ボスゴドラ"] },
    { id: 307, name: "アサナン", keyword: ["アサナン"] },
    { id: 308, name: "チャーレム", keyword: ["チャーレム"] },
    { id: 309, name: "ラクライ", keyword: ["ラクライ"] },
    { id: 310, name: "ライボルト", keyword: ["ライボルト"] },
    { id: 311, name: "プラスル", keyword: ["プラスル"] },
    { id: 312, name: "マイナン", keyword: ["マイナン"] },
    { id: 313, name: "バルビート", keyword: ["バルビート"] },
    { id: 314, name: "イルミーゼ", keyword: ["イルミーゼ"] },
    { id: 315, name: "ロゼリア", keyword: ["ロゼリア"] },
    { id: 316, name: "ゴクリン", keyword: ["ゴクリン"] },
    { id: 317, name: "マルノーム", keyword: ["マルノーム"] },
    { id: 318, name: "キバニア", keyword: ["キバニア"] },
    { id: 319, name: "サメハダー", keyword: ["サメハダー"] },
    { id: 320, name: "ホエルコ", keyword: ["ホエルコ"] },
    { id: 321, name: "ホエルオー", keyword: ["ホエルオー"] },
    { id: 322, name: "ドンメル", keyword: ["ドンメル"] },
    { id: 323, name: "バクーダ", keyword: ["バクーダ"] },
    { id: 324, name: "コータス", keyword: ["コータス"] },
    { id: 325, name: "バネブー", keyword: ["バネブー"] },
    { id: 326, name: "ブーピッグ", keyword: ["ブーピッグ"] },
    { id: 327, name: "パッチール", keyword: ["パッチール"] },
    { id: 328, name: "ナックラー", keyword: ["ナックラー"] },
    { id: 329, name: "ビブラーバ", keyword: ["ビブラーバ"] },
    { id: 330, name: "フライゴン", keyword: ["フライゴン"] },
    { id: 331, name: "サボネア", keyword: ["サボネア"] },
    { id: 332, name: "ノクタス", keyword: ["ノクタス"] },
    { id: 333, name: "チルット", keyword: ["チルット"] },
    { id: 334, name: "チルタリス", keyword: ["チルタリス"] },
    { id: 335, name: "ザングース", keyword: ["ザングース"] },
    { id: 336, name: "ハブネーク", keyword: ["ハブネーク"] },
    { id: 337, name: "ルナトーン", keyword: ["ルナトーン"] },
    { id: 338, name: "ソルロック", keyword: ["ソルロック"] },
    { id: 339, name: "ドジョッチ", keyword: ["ドジョッチ"] },
    { id: 340, name: "ナマズン", keyword: ["ナマズン"] },
    { id: 341, name: "ヘイガニ", keyword: ["ヘイガニ"] },
    { id: 342, name: "シザリガー", keyword: ["シザリガー"] },
    { id: 343, name: "ヤジロン", keyword: ["ヤジロン"] },
    { id: 344, name: "ネンドール", keyword: ["ネンドール"] },
    { id: 345, name: "リリーラ", keyword: ["リリーラ"] },
    { id: 346, name: "ユレイドル", keyword: ["ユレイドル"] },
    { id: 347, name: "アノプス", keyword: ["アノプス"] },
    { id: 348, name: "アーマルド", keyword: ["アーマルド"] },
    { id: 349, name: "ヒンバス", keyword: ["ヒンバス"] },
    { id: 350, name: "ミロカロス", keyword: ["ミロカロス"] },
    { id: 351, name: "ポワルン", keyword: ["ポワルン"] },
    { id: 352, name: "カクレオン", keyword: ["カクレオン"] },
    { id: 353, name: "カゲボウズ", keyword: ["カゲボウズ"] },
    { id: 354, name: "ジュペッタ", keyword: ["ジュペッタ"] },
    { id: 355, name: "ヨマワル", keyword: ["ヨマワル"] },
    { id: 356, name: "サマヨール", keyword: ["サマヨール"] },
    { id: 357, name: "トロピウス", keyword: ["トロピウス"] },
    { id: 358, name: "チリーン", keyword: ["チリーン"] },
    { id: 359, name: "アブソル", keyword: ["アブソル"] },
    { id: 360, name: "ソーナノ", keyword: ["ソーナノ"] },
    { id: 361, name: "ユキワラシ", keyword: ["ユキワラシ"] },
    { id: 362, name: "オニゴーリ", keyword: ["オニゴーリ"] },
    { id: 363, name: "タマザラシ", keyword: ["タマザラシ"] },
    { id: 364, name: "トドグラー", keyword: ["トドグラー"] },
    { id: 365, name: "トドゼルガ", keyword: ["トドゼルガ"] },
    { id: 366, name: "パールル", keyword: ["パールル"] },
    { id: 367, name: "ハンテール", keyword: ["ハンテール"] },
    { id: 368, name: "サクラビス", keyword: ["サクラビス"] },
    { id: 369, name: "ジーランス", keyword: ["ジーランス"] },
    { id: 370, name: "ラブカス", keyword: ["ラブカス"] },
    { id: 371, name: "タツベイ", keyword: ["タツベイ"] },
    { id: 372, name: "コモルー", keyword: ["コモルー"] },
    { id: 373, name: "ボーマンダ", keyword: ["ボーマンダ"] },
    { id: 374, name: "ダンバル", keyword: ["ダンバル"] },
    { id: 375, name: "メタング", keyword: ["メタング"] },
    { id: 376, name: "メタグロス", keyword: ["メタグロス"] },
    { id: 377, name: "レジロック", keyword: ["レジロック"] },
    { id: 378, name: "レジアイス", keyword: ["レジアイス"] },
    { id: 379, name: "レジスチル", keyword: ["レジスチル"] },
    { id: 380, name: "ラティアス", keyword: ["ラティアス"] },
    { id: 381, name: "ラティオス", keyword: ["ラティオス"] },
    { id: 382, name: "カイオーガ", keyword: ["カイオーガ"] },
    { id: 383, name: "グラードン", keyword: ["グラードン"] },
    { id: 384, name: "レックウザ", keyword: ["レックウザ"] },
    { id: 385, name: "ジラーチ", keyword: ["ジラーチ"] },
    { id: 386, name: "デオキシス", keyword: ["デオキシス"] },
    { id: 387, name: "ナエトル", keyword: ["ナエトル"] },
    { id: 388, name: "ハヤシガメ", keyword: ["ハヤシガメ"] },
    { id: 389, name: "ドダイトス", keyword: ["ドダイトス"] },
    { id: 390, name: "ヒコザル", keyword: ["ヒコザル"] },
    { id: 391, name: "モウカザル", keyword: ["モウカザル"] },
    { id: 392, name: "ゴウカザル", keyword: ["ゴウカザル"] },
    { id: 393, name: "ポッチャマ", keyword: ["ポッチャマ"] },
    { id: 394, name: "ポッタイシ", keyword: ["ポッタイシ"] },
    { id: 395, name: "エンペルト", keyword: ["エンペルト"] },
    { id: 396, name: "ムックル", keyword: ["ムックル"] },
    { id: 397, name: "ムクバード", keyword: ["ムクバード"] },
    { id: 398, name: "ムクホーク", keyword: ["ムクホーク"] },
    { id: 399, name: "ビッパ", keyword: ["ビッパ"] },
    { id: 400, name: "ビーダル", keyword: ["ビーダル"] },
    { id: 401, name: "コロボーシ", keyword: ["コロボーシ"] },
    { id: 402, name: "コロトック", keyword: ["コロトック"] },
    { id: 403, name: "コリンク", keyword: ["コリンク"] },
    { id: 404, name: "ルクシオ", keyword: ["ルクシオ"] },
    { id: 405, name: "レントラー", keyword: ["レントラー"] },
    { id: 406, name: "スボミー", keyword: ["スボミー"] },
    { id: 407, name: "ロズレイド", keyword: ["ロズレイド"] },
    { id: 408, name: "ズガイドス", keyword: ["ズガイドス"] },
    { id: 409, name: "ラムパルド", keyword: ["ラムパルド"] },
    { id: 410, name: "タテトプス", keyword: ["タテトプス"] },
    { id: 411, name: "トリデプス", keyword: ["トリデプス"] },
    { id: 412, name: "ミノムッチ", keyword: ["ミノムッチ"] },
    { id: 413, name: "ミノマダム", keyword: ["ミノマダム"] },
    { id: 414, name: "ガーメイル", keyword: ["ガーメイル"] },
    { id: 415, name: "ミツハニー", keyword: ["ミツハニー"] },
    { id: 416, name: "ビークイン", keyword: ["ビークイン"] },
    { id: 417, name: "パチリス", keyword: ["パチリス"] },
    { id: 418, name: "ブイゼル", keyword: ["ブイゼル"] },
    { id: 419, name: "フローゼル", keyword: ["フローゼル"] },
    { id: 420, name: "チェリンボ", keyword: ["チェリンボ"] },
    { id: 421, name: "チェリム", keyword: ["チェリム"] },
    { id: 422, name: "カラナクシ", keyword: ["カラナクシ"] },
    { id: 423, name: "トリトドン", keyword: ["トリトドン"] },
    { id: 424, name: "エテボース", keyword: ["エテボース"] },
    { id: 425, name: "フワンテ", keyword: ["フワンテ"] },
    { id: 426, name: "フワライド", keyword: ["フワライド"] },
    { id: 427, name: "ミミロル", keyword: ["ミミロル"] },
    { id: 428, name: "ミミロップ", keyword: ["ミミロップ"] },
    { id: 429, name: "ムウマージ", keyword: ["ムウマージ"] },
    { id: 430, name: "ドンカラス", keyword: ["ドンカラス"] },
    { id: 431, name: "ニャルマー", keyword: ["ニャルマー"] },
    { id: 432, name: "ブニャット", keyword: ["ブニャット"] },
    { id: 433, name: "リーシャン", keyword: ["リーシャン"] },
    { id: 434, name: "スカンプー", keyword: ["スカンプー"] },
    { id: 435, name: "スカタンク", keyword: ["スカタンク"] },
    { id: 436, name: "ドーミラー", keyword: ["ドーミラー"] },
    { id: 437, name: "ドータクン", keyword: ["ドータクン"] },
    { id: 438, name: "ウソハチ", keyword: ["ウソハチ"] },
    { id: 439, name: "マネネ", keyword: ["マネネ"] },
    { id: 440, name: "ピンプク", keyword: ["ピンプク"] },
    { id: 441, name: "ペラップ", keyword: ["ペラップ"] },
    { id: 442, name: "ミカルゲ", keyword: ["ミカルゲ"] },
    { id: 443, name: "フカマル", keyword: ["フカマル"] },
    { id: 444, name: "ガバイト", keyword: ["ガバイト"] },
    { id: 445, name: "ガブリアス", keyword: ["ガブリアス"] },
    { id: 446, name: "ゴンベ", keyword: ["ゴンベ"] },
    { id: 447, name: "リオル", keyword: ["リオル"] },
    { id: 448, name: "ルカリオ", keyword: ["ルカリオ"] },
    { id: 449, name: "ヒポポタス", keyword: ["ヒポポタス"] },
    { id: 450, name: "カバルドン", keyword: ["カバルドン"] },
    { id: 451, name: "スコルピ", keyword: ["スコルピ"] },
    { id: 452, name: "ドラピオン", keyword: ["ドラピオン"] },
    { id: 453, name: "グレッグル", keyword: ["グレッグル"] },
    { id: 454, name: "ドクロッグ", keyword: ["ドクロッグ"] },
    { id: 455, name: "マスキッパ", keyword: ["マスキッパ"] },
    { id: 456, name: "ケイコウオ", keyword: ["ケイコウオ"] },
    { id: 457, name: "ネオラント", keyword: ["ネオラント"] },
    { id: 458, name: "タマンタ", keyword: ["タマンタ"] },
    { id: 459, name: "ユキカブリ", keyword: ["ユキカブリ"] },
    { id: 460, name: "ユキノオー", keyword: ["ユキノオー"] },
    { id: 461, name: "マニューラ", keyword: ["マニューラ"] },
    { id: 462, name: "ジバコイル", keyword: ["ジバコイル"] },
    { id: 463, name: "ベロベルト", keyword: ["ベロベルト"] },
    { id: 464, name: "ドサイドン", keyword: ["ドサイドン"] },
    { id: 465, name: "モジャンボ", keyword: ["モジャンボ"] },
    { id: 466, name: "エレキブル", keyword: ["エレキブル"] },
    { id: 467, name: "ブーバーン", keyword: ["ブーバーン"] },
    { id: 468, name: "トゲキッス", keyword: ["トゲキッス"] },
    { id: 469, name: "メガヤンマ", keyword: ["メガヤンマ"] },
    { id: 470, name: "リーフィア", keyword: ["リーフィア"] },
    { id: 471, name: "グレイシア", keyword: ["グレイシア"] },
    { id: 472, name: "グライオン", keyword: ["グライオン"] },
    { id: 473, name: "マンムー", keyword: ["マンムー"] },
    { id: 474, name: "ポリゴンＺ", keyword: ["ポリゴンＺ", "ポリゴンz", "ポリゴンゼット"] },
    { id: 475, name: "エルレイド", keyword: ["エルレイド"] },
    { id: 476, name: "ダイノーズ", keyword: ["ダイノーズ"] },
    { id: 477, name: "ヨノワール", keyword: ["ヨノワール"] },
    { id: 478, name: "ユキメノコ", keyword: ["ユキメノコ"] },
    { id: 479, name: "ロトム", keyword: ["ロトム"] },
    { id: 480, name: "ユクシー", keyword: ["ユクシー"] },
    { id: 481, name: "エムリット", keyword: ["エムリット"] },
    { id: 482, name: "アグノム", keyword: ["アグノム"] },
    { id: 483, name: "ディアルガ", keyword: ["ディアルガ"] },
    { id: 484, name: "パルキア", keyword: ["パルキア"] },
    { id: 485, name: "ヒードラン", keyword: ["ヒードラン"] },
    { id: 486, name: "レジギガス", keyword: ["レジギガス"] },
    { id: 487, name: "ギラティナ", keyword: ["ギラティナ"] },
    { id: 488, name: "クレセリア", keyword: ["クレセリア"] },
    { id: 489, name: "フィオネ", keyword: ["フィオネ"] },
    { id: 490, name: "マナフィ", keyword: ["マナフィ"] },
    { id: 491, name: "ダークライ", keyword: ["ダークライ"] },
    { id: 492, name: "シェイミ", keyword: ["シェイミ"] },
    { id: 493, name: "アルセウス", keyword: ["アルセウス"] },
    { id: 494, name: "ビクティニ", keyword: ["ビクティニ"] },
    { id: 495, name: "ツタージャ", keyword: ["ツタージャ"] },
    { id: 496, name: "ジャノビー", keyword: ["ジャノビー"] },
    { id: 497, name: "ジャローダ", keyword: ["ジャローダ"] },
    { id: 498, name: "ポカブ", keyword: ["ポカブ"] },
    { id: 499, name: "チャオブー", keyword: ["チャオブー"] },
    { id: 500, name: "エンブオー", keyword: ["エンブオー"] },
    { id: 501, name: "ミジュマル", keyword: ["ミジュマル"] },
    { id: 502, name: "フタチマル", keyword: ["フタチマル"] },
    { id: 503, name: "ダイケンキ", keyword: ["ダイケンキ"] },
    { id: 504, name: "ミネズミ", keyword: ["ミネズミ"] },
    { id: 505, name: "ミルホッグ", keyword: ["ミルホッグ"] },
    { id: 506, name: "ヨーテリー", keyword: ["ヨーテリー"] },
    { id: 507, name: "ハーデリア", keyword: ["ハーデリア"] },
    { id: 508, name: "ムーランド", keyword: ["ムーランド"] },
    { id: 509, name: "チョロネコ", keyword: ["チョロネコ"] },
    { id: 510, name: "レパルダス", keyword: ["レパルダス"] },
    { id: 511, name: "ヤナップ", keyword: ["ヤナップ"] },
    { id: 512, name: "ヤナッキー", keyword: ["ヤナッキー"] },
    { id: 513, name: "バオップ", keyword: ["バオップ"] },
    { id: 514, name: "バオッキー", keyword: ["バオッキー"] },
    { id: 515, name: "ヒヤップ", keyword: ["ヒヤップ"] },
    { id: 516, name: "ヒヤッキー", keyword: ["ヒヤッキー"] },
    { id: 517, name: "ムンナ", keyword: ["ムンナ"] },
    { id: 518, name: "ムシャーナ", keyword: ["ムシャーナ"] },
    { id: 519, name: "マメパト", keyword: ["マメパト"] },
    { id: 520, name: "ハトーボー", keyword: ["ハトーボー"] },
    { id: 521, name: "ケンホロウ", keyword: ["ケンホロウ"] },
    { id: 522, name: "シママ", keyword: ["シママ"] },
    { id: 523, name: "ゼブライカ", keyword: ["ゼブライカ"] },
    { id: 524, name: "ダンゴロ", keyword: ["ダンゴロ"] },
    { id: 525, name: "ガントル", keyword: ["ガントル"] },
    { id: 526, name: "ギガイアス", keyword: ["ギガイアス"] },
    { id: 527, name: "コロモリ", keyword: ["コロモリ"] },
    { id: 528, name: "ココロモリ", keyword: ["ココロモリ"] },
    { id: 529, name: "モグリュー", keyword: ["モグリュー"] },
    { id: 530, name: "ドリュウズ", keyword: ["ドリュウズ"] },
    { id: 531, name: "タブンネ", keyword: ["タブンネ"] },
    { id: 532, name: "ドッコラー", keyword: ["ドッコラー"] },
    { id: 533, name: "ドテッコツ", keyword: ["ドテッコツ"] },
    { id: 534, name: "ローブシン", keyword: ["ローブシン"] },
    { id: 535, name: "オタマロ", keyword: ["オタマロ"] },
    { id: 536, name: "ガマガル", keyword: ["ガマガル"] },
    { id: 537, name: "ガマゲロゲ", keyword: ["ガマゲロゲ"] },
    { id: 538, name: "ナゲキ", keyword: ["ナゲキ"] },
    { id: 539, name: "ダゲキ", keyword: ["ダゲキ"] },
    { id: 540, name: "クルミル", keyword: ["クルミル"] },
    { id: 541, name: "クルマユ", keyword: ["クルマユ"] },
    { id: 542, name: "ハハコモリ", keyword: ["ハハコモリ"] },
    { id: 543, name: "フシデ", keyword: ["フシデ"] },
    { id: 544, name: "ホイーガ", keyword: ["ホイーガ"] },
    { id: 545, name: "ペンドラー", keyword: ["ペンドラー"] },
    { id: 546, name: "モンメン", keyword: ["モンメン"] },
    { id: 547, name: "エルフーン", keyword: ["エルフーン"] },
    { id: 548, name: "チュリネ", keyword: ["チュリネ"] },
    { id: 549, name: "ドレディア", keyword: ["ドレディア"] },
    { id: 550, name: "バスラオ", keyword: ["バスラオ"] },
    { id: 551, name: "メグロコ", keyword: ["メグロコ"] },
    { id: 552, name: "ワルビル", keyword: ["ワルビル"] },
    { id: 553, name: "ワルビアル", keyword: ["ワルビアル"] },
    { id: 554, name: "ダルマッカ", keyword: ["ダルマッカ"] },
    { id: 555, name: "ヒヒダルマ", keyword: ["ヒヒダルマ"] },
    { id: 556, name: "マラカッチ", keyword: ["マラカッチ"] },
    { id: 557, name: "イシズマイ", keyword: ["イシズマイ"] },
    { id: 558, name: "イワパレス", keyword: ["イワパレス"] },
    { id: 559, name: "ズルッグ", keyword: ["ズルッグ"] },
    { id: 560, name: "ズルズキン", keyword: ["ズルズキン"] },
    { id: 561, name: "シンボラー", keyword: ["シンボラー"] },
    { id: 562, name: "デスマス", keyword: ["デスマス"] },
    { id: 563, name: "デスカーン", keyword: ["デスカーン"] },
    { id: 564, name: "プロトーガ", keyword: ["プロトーガ"] },
    { id: 565, name: "アバゴーラ", keyword: ["アバゴーラ"] },
    { id: 566, name: "アーケン", keyword: ["アーケン"] },
    { id: 567, name: "アーケオス", keyword: ["アーケオス"] },
    { id: 568, name: "ヤブクロン", keyword: ["ヤブクロン"] },
    { id: 569, name: "ダストダス", keyword: ["ダストダス"] },
    { id: 570, name: "ゾロア", keyword: ["ゾロア"] },
    { id: 571, name: "ゾロアーク", keyword: ["ゾロアーク"] },
    { id: 572, name: "チラーミィ", keyword: ["チラーミィ"] },
    { id: 573, name: "チラチーノ", keyword: ["チラチーノ"] },
    { id: 574, name: "ゴチム", keyword: ["ゴチム"] },
    { id: 575, name: "ゴチミル", keyword: ["ゴチミル"] },
    { id: 576, name: "ゴチルゼル", keyword: ["ゴチルゼル"] },
    { id: 577, name: "ユニラン", keyword: ["ユニラン"] },
    { id: 578, name: "ダブラン", keyword: ["ダブラン"] },
    { id: 579, name: "ランクルス", keyword: ["ランクルス"] },
    { id: 580, name: "コアルヒー", keyword: ["コアルヒー"] },
    { id: 581, name: "スワンナ", keyword: ["スワンナ"] },
    { id: 582, name: "バニプッチ", keyword: ["バニプッチ"] },
    { id: 583, name: "バニリッチ", keyword: ["バニリッチ"] },
    { id: 584, name: "バイバニラ", keyword: ["バイバニラ"] },
    { id: 585, name: "シキジカ", keyword: ["シキジカ"] },
    { id: 586, name: "メブキジカ", keyword: ["メブキジカ"] },
    { id: 587, name: "エモンガ", keyword: ["エモンガ"] },
    { id: 588, name: "カブルモ", keyword: ["カブルモ"] },
    { id: 589, name: "シュバルゴ", keyword: ["シュバルゴ"] },
    { id: 590, name: "タマゲタケ", keyword: ["タマゲタケ"] },
    { id: 591, name: "モロバレル", keyword: ["モロバレル"] },
    { id: 592, name: "プルリル", keyword: ["プルリル"] },
    { id: 593, name: "ブルンゲル", keyword: ["ブルンゲル"] },
    { id: 594, name: "ママンボウ", keyword: ["ママンボウ"] },
    { id: 595, name: "バチュル", keyword: ["バチュル"] },
    { id: 596, name: "デンチュラ", keyword: ["デンチュラ"] },
    { id: 597, name: "テッシード", keyword: ["テッシード"] },
    { id: 598, name: "ナットレイ", keyword: ["ナットレイ"] },
    { id: 599, name: "ギアル", keyword: ["ギアル"] },
    { id: 600, name: "ギギアル", keyword: ["ギギアル"] },
    { id: 601, name: "ギギギアル", keyword: ["ギギギアル"] },
    { id: 602, name: "シビシラス", keyword: ["シビシラス"] },
    { id: 603, name: "シビビール", keyword: ["シビビール"] },
    { id: 604, name: "シビルドン", keyword: ["シビルドン"] },
    { id: 605, name: "リグレー", keyword: ["リグレー"] },
    { id: 606, name: "オーベム", keyword: ["オーベム"] },
    { id: 607, name: "ヒトモシ", keyword: ["ヒトモシ"] },
    { id: 608, name: "ランプラー", keyword: ["ランプラー"] },
    { id: 609, name: "シャンデラ", keyword: ["シャンデラ"] },
    { id: 610, name: "キバゴ", keyword: ["キバゴ"] },
    { id: 611, name: "オノンド", keyword: ["オノンド"] },
    { id: 612, name: "オノノクス", keyword: ["オノノクス"] },
    { id: 613, name: "クマシュン", keyword: ["クマシュン"] },
    { id: 614, name: "ツンベアー", keyword: ["ツンベアー"] },
    { id: 615, name: "フリージオ", keyword: ["フリージオ"] },
    { id: 616, name: "チョボマキ", keyword: ["チョボマキ"] },
    { id: 617, name: "アギルダー", keyword: ["アギルダー"] },
    { id: 618, name: "マッギョ", keyword: ["マッギョ"] },
    { id: 619, name: "コジョフー", keyword: ["コジョフー"] },
    { id: 620, name: "コジョンド", keyword: ["コジョンド"] },
    { id: 621, name: "クリムガン", keyword: ["クリムガン"] },
    { id: 622, name: "ゴビット", keyword: ["ゴビット"] },
    { id: 623, name: "ゴルーグ", keyword: ["ゴルーグ"] },
    { id: 624, name: "コマタナ", keyword: ["コマタナ"] },
    { id: 625, name: "キリキザン", keyword: ["キリキザン"] },
    { id: 626, name: "バッフロン", keyword: ["バッフロン"] },
    { id: 627, name: "ワシボン", keyword: ["ワシボン"] },
    { id: 628, name: "ウォーグル", keyword: ["ウォーグル"] },
    { id: 629, name: "バルチャイ", keyword: ["バルチャイ"] },
    { id: 630, name: "バルジーナ", keyword: ["バルジーナ"] },
    { id: 631, name: "クイタラン", keyword: ["クイタラン"] },
    { id: 632, name: "アイアント", keyword: ["アイアント"] },
    { id: 633, name: "モノズ", keyword: ["モノズ"] },
    { id: 634, name: "ジヘッド", keyword: ["ジヘッド"] },
    { id: 635, name: "サザンドラ", keyword: ["サザンドラ"] },
    { id: 636, name: "メラルバ", keyword: ["メラルバ"] },
    { id: 637, name: "ウルガモス", keyword: ["ウルガモス"] },
    { id: 638, name: "コバルオン", keyword: ["コバルオン"] },
    { id: 639, name: "テラキオン", keyword: ["テラキオン"] },
    { id: 640, name: "ビリジオン", keyword: ["ビリジオン"] },
    { id: 641, name: "トルネロス", keyword: ["トルネロス"] },
    { id: 642, name: "ボルトロス", keyword: ["ボルトロス"] },
    { id: 643, name: "レシラム", keyword: ["レシラム"] },
    { id: 644, name: "ゼクロム", keyword: ["ゼクロム"] },
    { id: 645, name: "ランドロス", keyword: ["ランドロス"] },
    { id: 646, name: "キュレム", keyword: ["キュレム"] },
    { id: 647, name: "ケルディオ", keyword: ["ケルディオ"] },
    { id: 648, name: "メロエッタ", keyword: ["メロエッタ"] },
    { id: 649, name: "ゲノセクト", keyword: ["ゲノセクト"] },
    { id: 650, name: "ハリマロン", keyword: ["ハリマロン"] },
    { id: 651, name: "ハリボーグ", keyword: ["ハリボーグ"] },
    { id: 652, name: "ブリガロン", keyword: ["ブリガロン"] },
    { id: 653, name: "フォッコ", keyword: ["フォッコ"] },
    { id: 654, name: "テールナー", keyword: ["テールナー"] },
    { id: 655, name: "マフォクシー", keyword: ["マフォクシー"] },
    { id: 656, name: "ケロマツ", keyword: ["ケロマツ"] },
    { id: 657, name: "ゲコガシラ", keyword: ["ゲコガシラ"] },
    { id: 658, name: "ゲッコウガ", keyword: ["ゲッコウガ"] },
    { id: 659, name: "ホルビー", keyword: ["ホルビー"] },
    { id: 660, name: "ホルード", keyword: ["ホルード"] },
    { id: 661, name: "ヤヤコマ", keyword: ["ヤヤコマ"] },
    { id: 662, name: "ヒノヤコマ", keyword: ["ヒノヤコマ"] },
    { id: 663, name: "ファイアロー", keyword: ["ファイアロー"] },
    { id: 664, name: "コフキムシ", keyword: ["コフキムシ"] },
    { id: 665, name: "コフーライ", keyword: ["コフーライ"] },
    { id: 666, name: "ビビヨン", keyword: ["ビビヨン"] },
    { id: 667, name: "シシコ", keyword: ["シシコ"] },
    { id: 668, name: "カエンジシ", keyword: ["カエンジシ"] },
    { id: 669, name: "フラベベ", keyword: ["フラベベ"] },
    { id: 670, name: "フラエッテ", keyword: ["フラエッテ"] },
    { id: 671, name: "フラージェス", keyword: ["フラージェス"] },
    { id: 672, name: "メェークル", keyword: ["メェークル"] },
    { id: 673, name: "ゴーゴート", keyword: ["ゴーゴート"] },
    { id: 674, name: "ヤンチャム", keyword: ["ヤンチャム"] },
    { id: 675, name: "ゴロンダ", keyword: ["ゴロンダ"] },
    { id: 676, name: "トリミアン", keyword: ["トリミアン"] },
    { id: 677, name: "ニャスパー", keyword: ["ニャスパー"] },
    { id: 678, name: "ニャオニクス", keyword: ["ニャオニクス"] },
    { id: 679, name: "ヒトツキ", keyword: ["ヒトツキ"] },
    { id: 680, name: "ニダンギル", keyword: ["ニダンギル"] },
    { id: 681, name: "ギルガルド", keyword: ["ギルガルド"] },
    { id: 682, name: "シュシュプ", keyword: ["シュシュプ"] },
    { id: 683, name: "フレフワン", keyword: ["フレフワン"] },
    { id: 684, name: "ペロッパフ", keyword: ["ペロッパフ"] },
    { id: 685, name: "ペロリーム", keyword: ["ペロリーム"] },
    { id: 686, name: "マーイーカ", keyword: ["マーイーカ"] },
    { id: 687, name: "カラマネロ", keyword: ["カラマネロ"] },
    { id: 688, name: "カメテテ", keyword: ["カメテテ"] },
    { id: 689, name: "ガメノデス", keyword: ["ガメノデス"] },
    { id: 690, name: "クズモー", keyword: ["クズモー"] },
    { id: 691, name: "ドラミドロ", keyword: ["ドラミドロ"] },
    { id: 692, name: "ウデッポウ", keyword: ["ウデッポウ"] },
    { id: 693, name: "ブロスター", keyword: ["ブロスター"] },
    { id: 694, name: "エリキテル", keyword: ["エリキテル"] },
    { id: 695, name: "エレザード", keyword: ["エレザード"] },
    { id: 696, name: "チゴラス", keyword: ["チゴラス"] },
    { id: 697, name: "ガチゴラス", keyword: ["ガチゴラス"] },
    { id: 698, name: "アマルス", keyword: ["アマルス"] },
    { id: 699, name: "アマルルガ", keyword: ["アマルルガ"] },
    { id: 700, name: "ニンフィア", keyword: ["ニンフィア"] },
    { id: 701, name: "ルチャブル", keyword: ["ルチャブル"] },
    { id: 702, name: "デデンネ", keyword: ["デデンネ"] },
    { id: 703, name: "メレシー", keyword: ["メレシー"] },
    { id: 704, name: "ヌメラ", keyword: ["ヌメラ"] },
    { id: 705, name: "ヌメイル", keyword: ["ヌメイル"] },
    { id: 706, name: "ヌメルゴン", keyword: ["ヌメルゴン"] },
    { id: 707, name: "クレッフィ", keyword: ["クレッフィ"] },
    { id: 708, name: "ボクレー", keyword: ["ボクレー"] },
    { id: 709, name: "オーロット", keyword: ["オーロット"] },
    { id: 710, name: "バケッチャ", keyword: ["バケッチャ"] },
    { id: 711, name: "パンプジン", keyword: ["パンプジン"] },
    { id: 712, name: "カチコール", keyword: ["カチコール"] },
    { id: 713, name: "クレベース", keyword: ["クレベース"] },
    { id: 714, name: "オンバット", keyword: ["オンバット"] },
    { id: 715, name: "オンバーン", keyword: ["オンバーン"] },
    { id: 716, name: "ゼルネアス", keyword: ["ゼルネアス"] },
    { id: 717, name: "イベルタル", keyword: ["イベルタル"] },
    { id: 718, name: "ジガルデ", keyword: ["ジガルデ"] },
    { id: 719, name: "ディアンシー", keyword: ["ディアンシー"] },
    { id: 720, name: "フーパ", keyword: ["フーパ"] },
    { id: 721, name: "ボルケニオン", keyword: ["ボルケニオン"] },
    { id: 722, name: "モクロー", keyword: ["モクロー"] },
    { id: 723, name: "フクスロー", keyword: ["フクスロー"] },
    { id: 724, name: "ジュナイパー", keyword: ["ジュナイパー"] },
    { id: 725, name: "ニャビー", keyword: ["ニャビー"] },
    { id: 726, name: "ニャヒート", keyword: ["ニャヒート"] },
    { id: 727, name: "ガオガエン", keyword: ["ガオガエン"] },
    { id: 728, name: "アシマリ", keyword: ["アシマリ"] },
    { id: 729, name: "オシャマリ", keyword: ["オシャマリ"] },
    { id: 730, name: "アシレーヌ", keyword: ["アシレーヌ"] },
    { id: 731, name: "ツツケラ", keyword: ["ツツケラ"] },
    { id: 732, name: "ケララッパ", keyword: ["ケララッパ"] },
    { id: 733, name: "ドデカバシ", keyword: ["ドデカバシ"] },
    { id: 734, name: "ヤングース", keyword: ["ヤングース"] },
    { id: 735, name: "デカグース", keyword: ["デカグース"] },
    { id: 736, name: "アゴジムシ", keyword: ["アゴジムシ"] },
    { id: 737, name: "デンヂムシ", keyword: ["デンヂムシ"] },
    { id: 738, name: "クワガノン", keyword: ["クワガノン"] },
    { id: 739, name: "マケンカニ", keyword: ["マケンカニ"] },
    { id: 740, name: "ケケンカニ", keyword: ["ケケンカニ"] },
    { id: 741, name: "オドリドリ", keyword: ["オドリドリ"] },
    { id: 742, name: "アブリー", keyword: ["アブリー"] },
    { id: 743, name: "アブリボン", keyword: ["アブリボン"] },
    { id: 744, name: "イワンコ", keyword: ["イワンコ"] },
    { id: 745, name: "ルガルガン", keyword: ["ルガルガン"] },
    { id: 746, name: "ヨワシ", keyword: ["ヨワシ"] },
    { id: 747, name: "ヒドイデ", keyword: ["ヒドイデ"] },
    { id: 748, name: "ドヒドイデ", keyword: ["ドヒドイデ"] },
    { id: 749, name: "ドロバンコ", keyword: ["ドロバンコ"] },
    { id: 750, name: "バンバドロ", keyword: ["バンバドロ"] },
    { id: 751, name: "シズクモ", keyword: ["シズクモ"] },
    { id: 752, name: "オニシズクモ", keyword: ["オニシズクモ"] },
    { id: 753, name: "カリキリ", keyword: ["カリキリ"] },
    { id: 754, name: "ラランテス", keyword: ["ラランテス"] },
    { id: 755, name: "ネマシュ", keyword: ["ネマシュ"] },
    { id: 756, name: "マシェード", keyword: ["マシェード"] },
    { id: 757, name: "ヤトウモリ", keyword: ["ヤトウモリ"] },
    { id: 758, name: "エンニュート", keyword: ["エンニュート"] },
    { id: 759, name: "ヌイコグマ", keyword: ["ヌイコグマ"] },
    { id: 760, name: "キテルグマ", keyword: ["キテルグマ"] },
    { id: 761, name: "アマカジ", keyword: ["アマカジ"] },
    { id: 762, name: "アママイコ", keyword: ["アママイコ"] },
    { id: 763, name: "アマージョ", keyword: ["アマージョ"] },
    { id: 764, name: "キュワワー", keyword: ["キュワワー"] },
    { id: 765, name: "ヤレユータン", keyword: ["ヤレユータン"] },
    { id: 766, name: "ナゲツケサル", keyword: ["ナゲツケサル"] },
    { id: 767, name: "コソクムシ", keyword: ["コソクムシ"] },
    { id: 768, name: "グソクムシャ", keyword: ["グソクムシャ"] },
    { id: 769, name: "スナバァ", keyword: ["スナバァ"] },
    { id: 770, name: "シロデスナ", keyword: ["シロデスナ"] },
    { id: 771, name: "ナマコブシ", keyword: ["ナマコブシ"] },
    {
      id: 772,
      name: "タイプ：ヌル",
      keyword: ["タイプ：ヌル", "タイプ:ヌル", "タイプヌル"]
    },
    { id: 773, name: "シルヴァディ", keyword: ["シルヴァディ"] },
    { id: 774, name: "メテノ", keyword: ["メテノ"] },
    { id: 775, name: "ネッコアラ", keyword: ["ネッコアラ"] },
    { id: 776, name: "バクガメス", keyword: ["バクガメス"] },
    { id: 777, name: "トゲデマル", keyword: ["トゲデマル"] },
    { id: 778, name: "ミミッキュ", keyword: ["ミミッキュ"] },
    { id: 779, name: "ハギギシリ", keyword: ["ハギギシリ"] },
    { id: 780, name: "ジジーロン", keyword: ["ジジーロン"] },
    { id: 781, name: "ダダリン", keyword: ["ダダリン"] },
    { id: 782, name: "ジャラコ", keyword: ["ジャラコ"] },
    { id: 783, name: "ジャランゴ", keyword: ["ジャランゴ"] },
    { id: 784, name: "ジャラランガ", keyword: ["ジャラランガ"] },
    { id: 785, name: "カプ・コケコ", keyword: ["カプ・コケコ", "カプコケコ"] },
    { id: 786, name: "カプ・テテフ", keyword: ["カプ・テテフ", "カプテテフ"] },
    { id: 787, name: "カプ・ブルル", keyword: ["カプ・ブルル", "カプブルル"] },
    { id: 788, name: "カプ・レヒレ", keyword: ["カプ・レヒレ", "カプレヒレ"] },
    { id: 789, name: "コスモッグ", keyword: ["コスモッグ"] },
    { id: 790, name: "コスモウム", keyword: ["コスモウム"] },
    { id: 791, name: "ソルガレオ", keyword: ["ソルガレオ"] },
    { id: 792, name: "ルナアーラ", keyword: ["ルナアーラ"] },
    { id: 793, name: "ウツロイド", keyword: ["ウツロイド"] },
    { id: 794, name: "マッシブーン", keyword: ["マッシブーン"] },
    { id: 795, name: "フェローチェ", keyword: ["フェローチェ"] },
    { id: 796, name: "デンジュモク", keyword: ["デンジュモク"] },
    { id: 797, name: "テッカグヤ", keyword: ["テッカグヤ"] },
    { id: 798, name: "カミツルギ", keyword: ["カミツルギ"] },
    { id: 799, name: "アクジキング", keyword: ["アクジキング"] },
    { id: 800, name: "ネクロズマ", keyword: ["ネクロズマ"] },
    { id: 801, name: "マギアナ", keyword: ["マギアナ"] },
    { id: 802, name: "マーシャドー", keyword: ["マーシャドー"] },
    { id: 803, name: "ベベノム", keyword: ["ベベノム"] },
    { id: 804, name: "アーゴヨン", keyword: ["アーゴヨン"] },
    { id: 805, name: "ツンデツンデ", keyword: ["ツンデツンデ"] },
    { id: 806, name: "ズガドーン", keyword: ["ズガドーン"] },
    { id: 807, name: "ゼラオラ", keyword: ["ゼラオラ"] },
    { id: 808, name: "メルタン", keyword: ["メルタン"] },
    { id: 809, name: "メルメタル", keyword: ["メルメタル"] },
    { id: 810, name: "サルノリ", keyword: ["サルノリ"] },
    { id: 811, name: "バチンキー", keyword: ["バチンキー"] },
    { id: 812, name: "ゴリランダー", keyword: ["ゴリランダー"] },
    { id: 813, name: "ヒバニー", keyword: ["ヒバニー"] },
    { id: 814, name: "ラビフット", keyword: ["ラビフット"] },
    { id: 815, name: "エースバーン", keyword: ["エースバーン"] },
    { id: 816, name: "メッソン", keyword: ["メッソン"] },
    { id: 817, name: "ジメレオン", keyword: ["ジメレオン"] },
    { id: 818, name: "インテレオン", keyword: ["インテレオン"] },
    { id: 819, name: "ホシガリス", keyword: ["ホシガリス"] },
    { id: 820, name: "ヨクバリス", keyword: ["ヨクバリス"] },
    { id: 821, name: "ココガラ", keyword: ["ココガラ"] },
    { id: 822, name: "アオガラス", keyword: ["アオガラス"] },
    { id: 823, name: "アーマーガア", keyword: ["アーマーガア"] },
    { id: 824, name: "サッチムシ", keyword: ["サッチムシ"] },
    { id: 825, name: "レドームシ", keyword: ["レドームシ"] },
    { id: 826, name: "イオルブ", keyword: ["イオルブ"] },
    { id: 827, name: "クスネ", keyword: ["クスネ"] },
    { id: 828, name: "フォクスライ", keyword: ["フォクスライ"] },
    { id: 829, name: "ヒメンカ", keyword: ["ヒメンカ"] },
    { id: 830, name: "ワタシラガ", keyword: ["ワタシラガ"] },
    { id: 831, name: "ウールー", keyword: ["ウールー"] },
    { id: 832, name: "バイウールー", keyword: ["バイウールー"] },
    { id: 833, name: "カムカメ", keyword: ["カムカメ"] },
    { id: 834, name: "カジリガメ", keyword: ["カジリガメ"] },
    { id: 835, name: "ワンパチ", keyword: ["ワンパチ"] },
    { id: 836, name: "パルスワン", keyword: ["パルスワン"] },
    { id: 837, name: "タンドン", keyword: ["タンドン"] },
    { id: 838, name: "トロッゴン", keyword: ["トロッゴン"] },
    { id: 839, name: "セキタンザン", keyword: ["セキタンザン"] },
    { id: 840, name: "カジッチュ", keyword: ["カジッチュ"] },
    { id: 841, name: "アップリュー", keyword: ["アップリュー"] },
    { id: 842, name: "タルップル", keyword: ["タルップル"] },
    { id: 843, name: "スナヘビ", keyword: ["スナヘビ"] },
    { id: 844, name: "サダイジャ", keyword: ["サダイジャ"] },
    { id: 845, name: "ウッウ", keyword: ["ウッウ"] },
    { id: 846, name: "サシカマス", keyword: ["サシカマス"] },
    { id: 847, name: "カマスジョー", keyword: ["カマスジョー"] },
    { id: 848, name: "エレズン", keyword: ["エレズン"] },
    { id: 849, name: "ストリンダー", keyword: ["ストリンダー"] },
    { id: 850, name: "ヤクデ", keyword: ["ヤクデ"] },
    { id: 851, name: "マルヤクデ", keyword: ["マルヤクデ"] },
    { id: 852, name: "タタッコ", keyword: ["タタッコ"] },
    { id: 853, name: "オトスパス", keyword: ["オトスパス"] },
    { id: 854, name: "ヤバチャ", keyword: ["ヤバチャ"] },
    { id: 855, name: "ポットデス", keyword: ["ポットデス"] },
    { id: 856, name: "ミブリム", keyword: ["ミブリム"] },
    { id: 857, name: "テブリム", keyword: ["テブリム"] },
    { id: 858, name: "ブリムオン", keyword: ["ブリムオン"] },
    { id: 859, name: "ベロバー", keyword: ["ベロバー"] },
    { id: 860, name: "ギモー", keyword: ["ギモー"] },
    { id: 861, name: "オーロンゲ", keyword: ["オーロンゲ"] },
    { id: 862, name: "タチフサグマ", keyword: ["タチフサグマ"] },
    { id: 863, name: "ニャイキング", keyword: ["ニャイキング"] },
    { id: 864, name: "サニゴーン", keyword: ["サニゴーン"] },
    { id: 865, name: "ネギガナイト", keyword: ["ネギガナイト"] },
    { id: 866, name: "デスバーン", keyword: ["デスバーン"] },
    { id: 867, name: "バリコオル", keyword: ["バリコオル"] },
    { id: 868, name: "マホミル", keyword: ["マホミル"] },
    { id: 869, name: "マホイップ", keyword: ["マホイップ"] },
    { id: 870, name: "タイレーツ", keyword: ["タイレーツ"] },
    { id: 871, name: "バチンウニ", keyword: ["バチンウニ"] },
    { id: 872, name: "ユキハミ", keyword: ["ユキハミ"] },
    { id: 873, name: "モスノウ", keyword: ["モスノウ"] },
    { id: 874, name: "イシヘンジン", keyword: ["イシヘンジン"] },
    { id: 875, name: "コオリッポ", keyword: ["コオリッポ"] },
    { id: 876, name: "イエッサン", keyword: ["イエッサン"] },
    { id: 877, name: "モルペコ", keyword: ["モルペコ"] },
    { id: 878, name: "ゾウドウ", keyword: ["ゾウドウ"] },
    { id: 879, name: "ダイオウドウ", keyword: ["ダイオウドウ"] },
    { id: 880, name: "パッチラゴン", keyword: ["パッチラゴン"] },
    { id: 881, name: "パッチルドン", keyword: ["パッチルドン"] },
    { id: 882, name: "ウオノラゴン", keyword: ["ウオノラゴン"] },
    { id: 883, name: "ウオチルドン", keyword: ["ウオチルドン"] },
    { id: 884, name: "ジュラルドン", keyword: ["ジュラルドン"] },
    { id: 885, name: "ドラメシャ", keyword: ["ドラメシャ"] },
    { id: 886, name: "ドロンチ", keyword: ["ドロンチ"] },
    { id: 887, name: "ドラパルト", keyword: ["ドラパルト"] },
    { id: 888, name: "ザシアン", keyword: ["ザシアン"] },
    { id: 889, name: "ザマゼンタ", keyword: ["ザマゼンタ"] },
    { id: 890, name: "ムゲンダイナ", keyword: ["ムゲンダイナ"] }
  ];
  nameToId = new Map();
  idToGetDom = new Map();

  answered = [];

  listener = {
    openSettings: () => this.openSettings(),
    answer: e => (e.key === "Enter" ? this.answer(document.getElementById("answer").value) : false),
    speech: e => this.speech(e),
    toggleDareda: () => this.toggleDareda(),
    clearAnswered: () => this.clearAnswered()
  };

  constructor() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js", { scope: "/pokemon-ierukana/" })
        .then(reg => console.log("ServiceWorker registration successful with scope: ", reg.scope))
        .catch(err => console.log("ServiceWorker registration failed: ", err));
    }

    const df = document.createDocumentFragment();
    this.pokedex.forEach(poke => {
      const pokeDom = new Poke(poke);

      df.appendChild(pokeDom);

      this.idToGetDom.set(poke.id, pokeDom);
      poke.keyword.forEach(key => this.nameToId.set(key, poke.id));
    });
    document.getElementById("poke-list").appendChild(df);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.showImage();
          observer.unobserve(entry.target);
        }
      });
    });
    this.idToGetDom.forEach(poke => observer.observe(poke));

    const initAnswered = localStorage.getItem("answered");
    if (initAnswered) {
      JSON.parse(initAnswered).forEach(a => {
        this.submit(a);
        this.answered.push(a);
      });
    }

    this.count();
    this.dareda();

    document.getElementById("setting").addEventListener("click", this.listener.openSettings);
    document.getElementById("answer").addEventListener("keydown", this.listener.answer);
    document.getElementById("mic").addEventListener("click", this.listener.speech);
  }

  openSettings() {
    if (!document.getElementById("config-container")) {
      const df = document.createElement("div");
      df.id = "config-container";
      df.innerHTML = `
      <div id="config-curtain"></div>
      <div id="config">
        <div><button id="dareda-mode">Dareda Mode</button></div>
        <div><button id="clear-answered">回答履歴を削除</button></div>
      </div>
      `;

      document.body.appendChild(df);
    }

    document.getElementById("dareda-mode").addEventListener("click", this.listener.toggleDareda);
    document.getElementById("clear-answered").addEventListener("click", this.listener.clearAnswered);

    document.getElementById("config-container").classList.add("active");

    const t = () => document.getElementById("config-container").classList.remove("active");
    document.getElementById("config-curtain").addEventListener("click", t);
  }

  toggleDareda() {
    const dareda = localStorage.getItem("dareda");

    if (!dareda) {
      localStorage.setItem("dareda", true);
    } else if (dareda === "true") {
      localStorage.setItem("dareda", false);
    } else {
      localStorage.setItem("dareda", true);
    }

    this.dareda();
  }

  dareda() {
    const dareda = localStorage.getItem("dareda");

    if (dareda === "true") {
      this.idToGetDom.forEach(poke => {
        poke.classList.add("dareda");
      });
    } else if (dareda === "false") {
      this.idToGetDom.forEach(poke => {
        poke.classList.remove("dareda");
      });
    }
  }

  clearAnswered() {
    localStorage.removeItem("answered");
  }

  showBanner(t = "Hello World!!", imgUrl = "./assets/images/pokemon/1.png") {
    const bannerArea = document.getElementById("banner-area");

    const banner = document.createElement("div");
    banner.classList.add("banner");
    const image = document.createElement("img");
    image.setAttribute("src", imgUrl);
    const text = document.createElement("div");
    text.textContent = t;

    banner.appendChild(image);
    banner.appendChild(text);

    bannerArea.appendChild(banner);

    banner.onanimationend = () => bannerArea.removeChild(banner);
  }

  count() {
    document.getElementById("progress").textContent = `${this.answered.length}/${this.pokedex.length}`;
  }

  answer(value) {
    const id = this.nameToId.get(value);
    if (id && !this.answered.includes(id)) {
      document.getElementById("answer").value = "";
      this.answered.push(id);
      localStorage.setItem("answered", JSON.stringify(this.answered));

      this.submit(id);

      const target = this.idToGetDom.get(id);
      document.getElementById("app").scrollTo({
        top: target.offsetTop - (window.innerHeight - target.offsetHeight) / 2,
        behavior: "smooth"
      });
      this.showBanner(value, `./assets/images/pokemon/${id}.png`);
      this.count();
    }
  }

  submit(id) {
    this.idToGetDom.get(id).active();
    // document.getElementById("progress").textContent = this.answered.length;
  }

  async speech() {
    const result = await this.listenSpeech();

    const nameList = [...this.nameToId.keys()];
    const firstMatchList = [];

    nameList.forEach(v => {
      if (result.includes(v)) firstMatchList.push(v);
    });

    firstMatchList.sort((a, b) => (a.length < b.length ? -1 : 1));

    const find = (m, t) => {
      const r = [];

      const p = m.pop();

      if (t.includes(p)) {
        t = t.replace(p, "");
        r.push(p);
      }

      if (m.length && t.length) {
        r.push(...find(m, t));
      }

      return r;
    };

    const answer = find(firstMatchList, result);
    if (answer.length) while (answer.length) this.answer(answer.pop());
  }

  listenSpeech() {
    return new Promise(resolve => {
      const df = document.createElement("div");
      df.innerHTML = `
        <div class="speech-container">
          <div class="speech-card">
            <div class="speech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            </div>
            <div class="speech-text">...</div>
          </div>
        </div>
      `;

      const speech = new webkitSpeechRecognition();
      speech.lang = "ja-JP";
      speech.interimResults = true;
      speech.continuous = true;

      speech.addEventListener("result", e => {
        const result = e.results[e.resultIndex];
        const alt = result[0];
        const text = alt.transcript;

        document.querySelector(".speech-text").textContent = text;

        console.log("\n");
        console.log("RESULT:");
        console.log(e);
        console.log(text);
        console.log(result.isFinal);

        if (result.isFinal) {
          speech.stop();
          document.body.removeChild(df);
          resolve(text);
        }
      });

      document.body.appendChild(df);

      speech.start();
    });
  }
}

class Poke extends HTMLElement {
  shadow;

  id;
  name;
  image;

  constructor(poke) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = Poke.template();

    this.id = poke.id;
    this.name = poke.name;
    this.image = `./assets/images/pokemon/${poke.id}.png`;

    this.shadow.querySelector(".no").textContent = `No: ${this.id}`;
    this.shadow.querySelector(".img").setAttribute("data-src", this.image);
    this.shadow.querySelector(".img").setAttribute("alt", "");
  }

  showImage() {
    const img = this.shadow.querySelector(".img");
    img.src = img.getAttribute("data-src");
    img.removeAttribute("data-src");
  }

  active() {
    this.shadow.querySelector(".name").textContent = this.name;
    this.classList.add("active");
  }

  static template() {
    return `
    <style>
    :host {
      display: flex;
      align-items: center;
      padding: 16px;
      user-select: none;
    }
    .imgarea {
      width: 64px;
      height: 64px;
      margin-right: 16px;
    }
    .imgbone {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #e0e0e0;
      font-size: 32px;
    }
    :host(.active) .imgbone,
    :host(.dareda) .imgbone {
      display: none;
    }
    .img {
      width: 100%;
      height: 100%;
    }
    :host(:not(.active):not(.dareda)) .img {
      display: none;
    }
    :host(.dareda:not(.active)) .img {
      filter: brightness(0);
    }
    .no,
    .name {
      margin: 4px 0;
    }
    .name {
      width: 6em;
      font-size: 24px;
    }
    </style>
    <div class="imgarea">
      <div class="imgbone">？</div>
      <img class="img">
    </div>
    <div class="primary">
      <p class="no">No: 0</p>
      <p class="name">？？？？</p>
    </div>`;
  }
}

customElements.define("poke-item", Poke);

new Main();
