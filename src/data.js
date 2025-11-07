/** @type {{control: string, conversion: string}[]} */
module.exports.controlVPB = [
    {control: '74', conversion: '00'},
    {control: '80', conversion: '80'},
    {control: '81', conversion: '81'},
    {control: '82', conversion: '82'},
    {control: '92', conversion: '85'},
    {control: '93', conversion: '86'}
];

/** @type {{letter: string, description: string, short: string, type: string, sortCode: string}[]} */
module.exports.types = [
    {letter: 'A', description: 'Naheffing loonheffing', type: 'Zakelijk', short: 'Nahef. LH', sortCode: '0'},
    {letter: 'B', description: 'Omzetbelasting', type: 'Zakelijk', short: 'Afdracht OB', sortCode: '1'},
    {letter: 'D', description: 'Dividendbelasting', type: 'Zakelijk', short: 'Div.Bel.', sortCode: '3'},
    {letter: 'F', description: 'Naheffingsaanslag OB', type: 'Zakelijk', short: 'Nahef. OB', sortCode: '5'},
    {letter: 'H', description: 'Inkomstenbelasting', type: 'Particulier', short: 'IB/PVV', sortCode: '70'},
    {letter: 'K', description: 'Vermogensrendementsheffing', type: 'Particulier', short: 'VRH', sortCode: 'NNB'},
    {letter: 'L', description: 'Loonheffing', type: 'Zakelijk', short: 'LH', sortCode: '6'},
    {letter: 'M', description: 'Motorrijtuigenbelasting', type: 'Particulier', short: 'MRB', sortCode: '78'},
    {letter: 'T1', description: 'Kinderopvangtoeslag', type: 'Particulier', short: 'KOT', sortCode: '23'},
    {letter: 'T2', description: 'Huurtoeslag', type: 'Particulier', short: 'HT', sortCode: '24'},
    {letter: 'T3', description: 'Zorgtoeslag', type: 'Particulier', short: 'ZT', sortCode: '25'},
    {letter: 'T4', description: 'Kindgebonden budget', type: 'Particulier', short: 'KGB', sortCode: '26'},
    {letter: 'V', description: 'Vennootschapsbelasting', type: 'Zakelijk', short: 'VPB', sortCode: ''},
    {letter: 'W', description: 'Zorgverzekeringswet', type: 'Particulier', short: 'ZVW', sortCode: '75'},
    {letter: 'Y', description: 'Motorrijtuigenbelasting naheffing', type: 'Particulier', short: 'Nahef. MRB', sortCode: 'NNB'},
    {letter: 'Z', description: 'Overige', type: 'Particulier', short: 'Overige', sortCode: 'NNB'}
];

/** @type {{status: string, description: string}[]} */
module.exports.status = [
    {status: '0', description: 'Afdracht'},
    {status: '1', description: '1e voorlopige aanslag'},
    {status: '2', description: '2e voorlopige aanslag'},
    {status: '3', description: '3e voorlopige aanslag'},
    {status: '4', description: '4e voorlopige aanslag'},
    {status: '5', description: '5e voorlopige aanslag'},
    {status: '6', description: 'Definitieve aanslag'},
    {status: '7', description: '1e navorderingsaanslag'},
    {status: '8', description: '2e navorderingsaanslag'},
    {status: '9', description: '3e navorderingsaanslag'},
];

/** @type {{period: string, description: string, short: string}[]} */
module.exports.period = [
    {period: '010', description: 'Januari', short: 'Jan'},
    {period: '020', description: 'Februari', short: 'Feb'},
    {period: '030', description: 'Maart', short: 'Mrt'},
    {period: '040', description: 'April', short: 'Apr'},
    {period: '050', description: 'Mei', short: 'Mei'},
    {period: '060', description: 'Juni', short: 'Jun'},
    {period: '070', description: 'Juli', short: 'Jul'},
    {period: '080', description: 'Augustus', short: 'Aug'},
    {period: '090', description: 'September', short: 'Sep'},
    {period: '100', description: 'Oktober', short: 'Okt'},
    {period: '110', description: 'November', short: 'Nov'},
    {period: '120', description: 'December', short: 'Dec'},
    {period: '210', description: '1e kwartaal', short: 'Q1'},
    {period: '240', description: '2e kwartaal', short: 'Q2'},
    {period: '270', description: '3e kwartaal', short: 'Q3'},
    {period: '300', description: '4e kwartaal', short: 'Q4'},
    {period: '310', description: '1e half jaar', short: 'H1'},
    {period: '320', description: '2e half jaar', short: 'H2'},
    {period: '400', description: 'Heel jaar', short: ''},
    {period: '710', description: 'Periode 1', short: 'Jan'},
    {period: '720', description: 'Periode 2', short: 'Feb'},
    {period: '730', description: 'Periode 3', short: 'Mrt'},
    {period: '740', description: 'Periode 4', short: 'Apr'},
    {period: '750', description: 'Periode 5', short: 'Mei'},
    {period: '760', description: 'Periode 6', short: 'Jun'},
    {period: '770', description: 'Periode 7', short: 'Jul'},
    {period: '780', description: 'Periode 8', short: 'Aug'},
    {period: '790', description: 'Periode 9', short: 'Sep'},
    {period: '800', description: 'Periode 10', short: 'Okt'},
    {period: '810', description: 'Periode 11', short: 'Nov'},
    {period: '820', description: 'Periode 12', short: 'Dec'},
    {period: '830', description: 'Periode 13', short: 'P13'},
    {period: '500', description: 'Suppletie', short: 'Suppletie'},
    {period: '501', description: 'Heel jaar', short: ''},
];