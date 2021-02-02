let JN_data = [
	[0, "ぜろ", "ゼロ", "零", "00-zero"],
	[1, "いち", "イチ", "一", "01-ichi"],
	[2, "に", "ニ", "二", "02-ni"],
	[3, "さん", "サン", "三", "03-san"],
	[4, "よん", "ヨン", "四", "04-yon"],
	[5, "ご", "ゴ", "五", "05-go"],
	[6, "ろく", "ロク", "六", "06-roku"],
	[7, "なな", "ナナ", "七", "07-nana"],
	[8, "はち", "ハチ", "八", "08-hachi"],
	[9, "きゅう", "キュウ", "九", "09-kyuu"],
	[10, "じゅう", "ジュウ", "十", "10-juu"],
	[11, "じゅういち", "ジュウイチ", "十一", "11-juuichi"],
	[12, "じゅうに", "ジュウニ", "十二", "12-juuni"],
	[13, "じゅうさん", "ジュウサン", "十三", "13-juusan"],
	[14, "じゅうよん", "ジュウヨン", "十四", "14-juuyon"],
	[15, "じゅうご", "ジュウゴ", "十五", "15-juugo"],
	[16, "じゅうろく", "ジュウロク", "十六", "16-juuroku"],
	[17, "じゅうなな", "ジュウナナ", "十七", "17-juunana"],
	[18, "じゅうはち", "ジュウハチ", "十八", "18-juuhachi"],
	[19, "じゅうきゅう", "ジュウキュウ", "十九", "19-juukyuu"],
	[20, "にじゅう", "ニジュウ", "二十", "20-nijuu"],
	[30, "さんじゅう", "サンジュウ", "三十", "30-sanjuu"],
	[40, "よんじゅう", "ヨンジュウ", "四十", "40-yonjuu"],
	[50, "ごじゅう", "ゴジュウ", "五十", "50-gojuu"],
	[60, "ろくじゅう", "ロクジュウ", "六十", "60-rokujuu"],
	[70, "ななじゅう", "ナナジュウ", "七十", "70-nanajuu"],
	[80, "はちじゅう", "ハチジュウ", "八十", "80-hachijuu"],
	[90, "きゅうじゅう", "キュウジュウ", "九十", "90-kyuujuu"],
	[100, "ひゃく", "ヒャク", "百", "100-hyaku"],
	[200, "にひゃく", "ニヒャク", "二百", "200-nihyaku"],
	[300, "さんびゃく", "サンビャク", "三百", "300-sanbyaku"],
	[400, "よんひゃく", "ヨンヒャク", "四百", "400-yonhyaku"],
	[500, "ごひゃく", "ゴヒャク", "五百", "500-gohyaku"],
	[600, "ろっぴゃく", "ロッピャク", "六百", "600-roppyaku"],
	[700, "ななひゃく", "ナナヒャク", "七百", "700-nanahyaku"],
	[800, "はっぴゃく", "ハッピャク", "八百", "800-happyaku"],
	[900, "きゅうひゃく", "キュウヒャク", "九百", "900-kyuuhyaku"],
	[1000, "いっせん", "イッセン", "一千", "1000-issen"],
	[1000, "せん", "セン", "千", "1000-sen"],
	[2000, "にせん", "ニセン", "二千", "2000-nisen"],
	[3000, "さんぜん", "サンゼン", "三千", "3000-sanzen"],
	[4000, "よんせん", "ヨンセン", "四千", "4000-yonsen"],
	[5000, "ごせん", "ゴセン", "五千", "5000-gosen"],
	[6000, "ろくせん", "ロクセン", "六千", "6000-rokusen"],
	[7000, "ななせん", "ナナセン", "七千", "7000-nanasen"],
	[8000, "はっせん", "ハッセン", "八千", "8000-hassen"],
	[9000, "きゅうせん", "キュウセン", "九千", "9000-kyuusen"],
	[10000, "まん", "マン", "万", "10000-man"],
	[10000, "いちまん", "イチマン", "一万", "10000-ichiman"],
	[20000, "にまん", "ニマン", "二万", "20000-niman"],
	[30000, "さんまん", "サンマン", "三万", "30000-sanman"],
	[40000, "よんまん", "ヨンマン", "四万", "40000-yonman"],
	[50000, "ごまん", "ゴマン", "五万", "50000-goman"],
	[60000, "ろくまん", "ロクマン", "六万", "60000-rokuman"],
	[70000, "ななまん", "ナナマン", "七万", "70000-nanaman"],
	[80000, "はちまん", "ハチマン", "八万", "80000-hachiman"],
	[90000, "きゅうまん", "キュウマン", "九万", "90000-kyuuman"],
	[100000000, "おく", "オク", "億", "100000000-oku"],
	[100000000, "いちおく", "イチオク", "一億", "100000000-ichioku"],
	[200000000, "におく", "ニオク", "二億", "200000000-nioku"],
	[300000000, "さんおく", "サンオク", "三億", "300000000-sanoku"],
	[400000000, "よんおく", "ヨンオク", "四億", "400000000-yonnoku"],
	[500000000, "ごおく", "ゴオク", "五億", "500000000-gooku"],
	[600000000, "ろくおく", "ロクオク", "六億", "600000000-rokuoku"],
	[700000000, "ななおく", "ナナオク", "七億", "700000000-nanaoku"],
	[800000000, "はちおく", "ハチオク", "八億", "800000000-hachioku"],
	[900000000, "きゅうおく", "キュウオク", "九億", "900000000-kyuuoku"],
	[1000000000000, "ちょう", "チョウ", "兆", "10_12-chou"],
	[1000000000000, "いっちょう", "イッチョウ", "一兆", "10_12_1-icchou"],
	[2000000000000, "にちょう", "ニチョウ", "二兆", "10_12_2-nichou"],
	[3000000000000, "さんちょう", "サンチョウ", "三兆", "10_12_3-sanchou"],
	[4000000000000, "よんちょう", "ヨンチョウ", "四兆", "10_12_4-yonchou"],
	[5000000000000, "ごちょう", "ゴチョウ", "五兆", "10_12_5-gochou"],
	[6000000000000, "ろくちょう", "ロクチョウ", "六兆", "10_12_6-rokuchou"],
	[7000000000000, "ななちょう", "ナナチョウ", "七兆", "10_12_7-nanachou"],
	[8000000000000, "はっちょう", "ハッチョウ", "八兆", "10_12_8-hacchou"],
	[9000000000000, "きゅうちょう", "キュウチョウ", "九兆", "10_12_9-kyuuchou"],
	[-1, "まいなす", "マイナス", "マイナス", "minus"]
];

function JN_load_string(id, offset=0) {
    for (let i = 0; i < JN_data.length; ++i) {
        if (JN_data[i][0] == id) {
            return JN_data[i + offset];
        }
    }
    return "";
}

function JN_get_number(ret, number, zero_is_omitted=false)
{
    const CHOU = 1000000000000;
    const OKU = 100000000;
    const MAN = 10000;
    const SEN = 1000;
    const HYAKU = 100;
    const JUU = 10;
    if (number > Number.MAX_SAFE_INTEGER) {
        throw "Too large";
    }
    if (number < 0) {
        ret.push(JN_load_string(-1));
        ret = JN_get_number(ret, -number, zero_is_omitted);
        return ret;
    }
    if (number == 0) {
        if (!zero_is_omitted)
            ret.push(JN_load_string(0));
        return ret;
    }
    if (number >= CHOU) {
        ret = JN_get_number(ret, Math.floor(number / CHOU), zero_is_omitted);
        ret.push(JN_load_string(CHOU));
        ret = JN_get_number(ret, number % CHOU, true);
        return ret;
    }
    if (number >= OKU) {
        ret = JN_get_number(ret, Math.floor(number / OKU), zero_is_omitted);
        ret.push(JN_load_string(OKU));
        ret = JN_get_number(ret, number % OKU, true);
        return ret;
    }
    if (number >= MAN) {
        ret = JN_get_number(ret, Math.floor(number / MAN), zero_is_omitted);
        ret.push(JN_load_string(MAN));
        ret = JN_get_number(ret, number % MAN, true);
        return ret;
    }
    if (number >= SEN) {
        ret.push(JN_load_string(SEN, 1 + Math.floor(number / SEN) - 1));
        ret = JN_get_number(ret, number % SEN, true);
        return ret;
    }
    if (number >= HYAKU) {
        ret.push(JN_load_string(100, Math.floor(number / HYAKU) - 1));
        ret = JN_get_number(ret, number % HYAKU, true);
        return ret;
    }
    if (number >= 20) {
        ret.push(JN_load_string(20, Math.floor(number / JUU) - 2));
        ret = JN_get_number(ret, number % JUU, true);
        return ret;
    }
    ret.push(JN_load_string(1, number - 1));
    return ret;
}
