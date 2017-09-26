'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zeit = exports.ZeitAlt = exports.Zec = exports.ZecAlt = exports.Ybc = exports.YbcAlt = exports.Xvg = exports.XvgAlt = exports.Xrp = exports.XrpAlt = exports.Xpm = exports.XpmAlt = exports.Xmr = exports.Xem = exports.XemAlt = exports.Xcp = exports.XcpAlt = exports.Xbs = exports.XbsAlt = exports.Xai = exports.XaiAlt = exports.Waves = exports.WavesAlt = exports.Vtc = exports.VtcAlt = exports.Vrc = exports.VrcAlt = exports.Vpn = exports.VpnAlt = exports.Vnl = exports.VnlAlt = exports.Vior = exports.ViorAlt = exports.Usdt = exports.UsdtAlt = exports.Unity = exports.UnityAlt = exports.Ubq = exports.UbqAlt = exports.Tx = exports.TxAlt = exports.Trig = undefined;
exports.TrigAlt = exports.Sys = exports.SysAlt = exports.Sync = exports.SyncAlt = exports.Swift = exports.SwiftAlt = exports.Strat = exports.StratAlt = exports.Str = exports.StrAlt = exports.Steem = exports.SteemAlt = exports.Start = exports.StartAlt = exports.Snrg = exports.SnrgAlt = exports.Sls = exports.SlsAlt = exports.Slg = exports.SlgAlt = exports.Sjcx = exports.SjcxAlt = exports.Sia = exports.SiaAlt = exports.Sdc = exports.SdcAlt = exports.Scot = exports.ScotAlt = exports.Sar = exports.SarAlt = exports.Rise = exports.RiseAlt = exports.Rep = exports.RepAlt = exports.Rdd = exports.RddAlt = exports.Rby = exports.RbyAlt = exports.Rbt = exports.RbtAlt = exports.Rbies = exports.RbiesAlt = exports.Qrk = exports.QrkAlt = exports.Ppc = exports.PpcAlt = exports.Pot = exports.PotAlt = exports.Pivx = exports.PivxAlt = exports.Pink = exports.PinkAlt = exports.Piggy = exports.PiggyAlt = exports.Opal = exports.OpalAlt = exports.Omni = exports.OmniAlt = exports.Ok = exports.OkAlt = exports.Nxt = exports.NxtAlt = exports.Nvc = exports.NvcAlt = exports.Note = exports.NoteAlt = exports.Nmc = exports.NmcAlt = exports.Nlg = exports.NlgAlt = exports.Neu = exports.NeuAlt = exports.Neos = exports.NeosAlt = exports.Nbt = exports.Mue = exports.MueAlt = exports.Mtr = exports.MtrAlt = exports.Msc = exports.MscAlt = exports.Mrc = exports.Mona = exports.MonaAlt = exports.Mint = exports.MintAlt = exports.Maid = exports.MaidAlt = exports.Ltc = exports.LtcAlt = exports.Lisk = exports.LiskAlt = exports.Ldoge = exports.LdogeAlt = exports.Lbc = exports.LbcAlt = exports.Kore = exports.KoreAlt = exports.Kobo = undefined;
exports.Kmd = exports.KmdAlt = exports.Jbs = exports.JbsAlt = exports.Ioc = exports.IocAlt = exports.Incnt = exports.IncntAlt = exports.Ifc = exports.IfcAlt = exports.Icn = exports.IcnAlt = exports.Heat = exports.HeatAlt = exports.Grs = exports.Grc = exports.GrcAlt = exports.Gnt = exports.GntAlt = exports.Gld = exports.GldAlt = exports.Gemz = exports.GemzAlt = exports.Gdc = exports.GdcAlt = exports.Game = exports.GameAlt = exports.Ftc = exports.FtcAlt = exports.Frk = exports.FrkAlt = exports.Flo = exports.FloAlt = exports.Fct = exports.FctAlt = exports.Fc2 = exports.Fc2Alt = exports.Eth = exports.EthAlt = exports.Etc = exports.EtcAlt = exports.Erc = exports.ErcAlt = exports.Emc = exports.EmcAlt = exports.Doge = exports.DogeAlt = exports.Dmd = exports.DmdAlt = exports.Dgx = exports.Dgd = exports.Dgb = exports.DgbAlt = exports.Dcr = exports.DcrAlt = exports.Dash = exports.DashAlt = exports.Dao = exports.DaoAlt = exports.Cloak = exports.CloakAlt = exports.Clam = exports.ClamAlt = exports.Bts = exports.BtsAlt = exports.Btcd = exports.BtcdAlt = exports.Btc = exports.BtcAlt = exports.Bta = exports.Bsd = exports.BsdAlt = exports.Brx = exports.BrxAlt = exports.Brk = exports.BrkAlt = exports.Bft = exports.BftAlt = exports.Bcn = exports.BcnAlt = exports.Bc = exports.BcAlt = exports.Bay = exports.BayAlt = exports.Banx = exports.BanxAlt = exports.Aur = exports.AurAlt = exports.Ardr = exports.ArdrAlt = exports.Arch = exports.ArchAlt = exports.Anc = exports.AncAlt = exports.Amp = exports.AmpAlt = exports.Aeon = exports.AeonAlt = exports.Adc = exports.AdcAlt = undefined;

var _ADCAlt = require('./icons/ADC-alt');

var _ADCAlt2 = _interopRequireDefault(_ADCAlt);

var _ADC = require('./icons/ADC');

var _ADC2 = _interopRequireDefault(_ADC);

var _AEONAlt = require('./icons/AEON-alt');

var _AEONAlt2 = _interopRequireDefault(_AEONAlt);

var _AEON = require('./icons/AEON');

var _AEON2 = _interopRequireDefault(_AEON);

var _AMPAlt = require('./icons/AMP-alt');

var _AMPAlt2 = _interopRequireDefault(_AMPAlt);

var _AMP = require('./icons/AMP');

var _AMP2 = _interopRequireDefault(_AMP);

var _ANCAlt = require('./icons/ANC-alt');

var _ANCAlt2 = _interopRequireDefault(_ANCAlt);

var _ANC = require('./icons/ANC');

var _ANC2 = _interopRequireDefault(_ANC);

var _ARCHAlt = require('./icons/ARCH-alt');

var _ARCHAlt2 = _interopRequireDefault(_ARCHAlt);

var _ARCH = require('./icons/ARCH');

var _ARCH2 = _interopRequireDefault(_ARCH);

var _ARDRAlt = require('./icons/ARDR-alt');

var _ARDRAlt2 = _interopRequireDefault(_ARDRAlt);

var _ARDR = require('./icons/ARDR');

var _ARDR2 = _interopRequireDefault(_ARDR);

var _AURAlt = require('./icons/AUR-alt');

var _AURAlt2 = _interopRequireDefault(_AURAlt);

var _AUR = require('./icons/AUR');

var _AUR2 = _interopRequireDefault(_AUR);

var _BANXAlt = require('./icons/BANX-alt');

var _BANXAlt2 = _interopRequireDefault(_BANXAlt);

var _BANX = require('./icons/BANX');

var _BANX2 = _interopRequireDefault(_BANX);

var _BAYAlt = require('./icons/BAY-alt');

var _BAYAlt2 = _interopRequireDefault(_BAYAlt);

var _BAY = require('./icons/BAY');

var _BAY2 = _interopRequireDefault(_BAY);

var _BCAlt = require('./icons/BC-alt');

var _BCAlt2 = _interopRequireDefault(_BCAlt);

var _BC = require('./icons/BC');

var _BC2 = _interopRequireDefault(_BC);

var _BCNAlt = require('./icons/BCN-alt');

var _BCNAlt2 = _interopRequireDefault(_BCNAlt);

var _BCN = require('./icons/BCN');

var _BCN2 = _interopRequireDefault(_BCN);

var _BFTAlt = require('./icons/BFT-alt');

var _BFTAlt2 = _interopRequireDefault(_BFTAlt);

var _BFT = require('./icons/BFT');

var _BFT2 = _interopRequireDefault(_BFT);

var _BRKAlt = require('./icons/BRK-alt');

var _BRKAlt2 = _interopRequireDefault(_BRKAlt);

var _BRK = require('./icons/BRK');

var _BRK2 = _interopRequireDefault(_BRK);

var _BRXAlt = require('./icons/BRX-alt');

var _BRXAlt2 = _interopRequireDefault(_BRXAlt);

var _BRX = require('./icons/BRX');

var _BRX2 = _interopRequireDefault(_BRX);

var _BSDAlt = require('./icons/BSD-alt');

var _BSDAlt2 = _interopRequireDefault(_BSDAlt);

var _BSD = require('./icons/BSD');

var _BSD2 = _interopRequireDefault(_BSD);

var _BTA = require('./icons/BTA');

var _BTA2 = _interopRequireDefault(_BTA);

var _BTCAlt = require('./icons/BTC-alt');

var _BTCAlt2 = _interopRequireDefault(_BTCAlt);

var _BTC = require('./icons/BTC');

var _BTC2 = _interopRequireDefault(_BTC);

var _BTCDAlt = require('./icons/BTCD-alt');

var _BTCDAlt2 = _interopRequireDefault(_BTCDAlt);

var _BTCD = require('./icons/BTCD');

var _BTCD2 = _interopRequireDefault(_BTCD);

var _BTSAlt = require('./icons/BTS-alt');

var _BTSAlt2 = _interopRequireDefault(_BTSAlt);

var _BTS = require('./icons/BTS');

var _BTS2 = _interopRequireDefault(_BTS);

var _CLAMAlt = require('./icons/CLAM-alt');

var _CLAMAlt2 = _interopRequireDefault(_CLAMAlt);

var _CLAM = require('./icons/CLAM');

var _CLAM2 = _interopRequireDefault(_CLAM);

var _CLOAKAlt = require('./icons/CLOAK-alt');

var _CLOAKAlt2 = _interopRequireDefault(_CLOAKAlt);

var _CLOAK = require('./icons/CLOAK');

var _CLOAK2 = _interopRequireDefault(_CLOAK);

var _DAOAlt = require('./icons/DAO-alt');

var _DAOAlt2 = _interopRequireDefault(_DAOAlt);

var _DAO = require('./icons/DAO');

var _DAO2 = _interopRequireDefault(_DAO);

var _DASHAlt = require('./icons/DASH-alt');

var _DASHAlt2 = _interopRequireDefault(_DASHAlt);

var _DASH = require('./icons/DASH');

var _DASH2 = _interopRequireDefault(_DASH);

var _DCRAlt = require('./icons/DCR-alt');

var _DCRAlt2 = _interopRequireDefault(_DCRAlt);

var _DCR = require('./icons/DCR');

var _DCR2 = _interopRequireDefault(_DCR);

var _DGBAlt = require('./icons/DGB-alt');

var _DGBAlt2 = _interopRequireDefault(_DGBAlt);

var _DGB = require('./icons/DGB');

var _DGB2 = _interopRequireDefault(_DGB);

var _DGD = require('./icons/DGD');

var _DGD2 = _interopRequireDefault(_DGD);

var _DGX = require('./icons/DGX');

var _DGX2 = _interopRequireDefault(_DGX);

var _DMDAlt = require('./icons/DMD-alt');

var _DMDAlt2 = _interopRequireDefault(_DMDAlt);

var _DMD = require('./icons/DMD');

var _DMD2 = _interopRequireDefault(_DMD);

var _DOGEAlt = require('./icons/DOGE-alt');

var _DOGEAlt2 = _interopRequireDefault(_DOGEAlt);

var _DOGE = require('./icons/DOGE');

var _DOGE2 = _interopRequireDefault(_DOGE);

var _EMCAlt = require('./icons/EMC-alt');

var _EMCAlt2 = _interopRequireDefault(_EMCAlt);

var _EMC = require('./icons/EMC');

var _EMC2 = _interopRequireDefault(_EMC);

var _ERCAlt = require('./icons/ERC-alt');

var _ERCAlt2 = _interopRequireDefault(_ERCAlt);

var _ERC = require('./icons/ERC');

var _ERC2 = _interopRequireDefault(_ERC);

var _ETCAlt = require('./icons/ETC-alt');

var _ETCAlt2 = _interopRequireDefault(_ETCAlt);

var _ETC = require('./icons/ETC');

var _ETC2 = _interopRequireDefault(_ETC);

var _ETHAlt = require('./icons/ETH-alt');

var _ETHAlt2 = _interopRequireDefault(_ETHAlt);

var _ETH = require('./icons/ETH');

var _ETH2 = _interopRequireDefault(_ETH);

var _FC2Alt = require('./icons/FC2-alt');

var _FC2Alt2 = _interopRequireDefault(_FC2Alt);

var _FC = require('./icons/FC2');

var _FC2 = _interopRequireDefault(_FC);

var _FCTAlt = require('./icons/FCT-alt');

var _FCTAlt2 = _interopRequireDefault(_FCTAlt);

var _FCT = require('./icons/FCT');

var _FCT2 = _interopRequireDefault(_FCT);

var _FLOAlt = require('./icons/FLO-alt');

var _FLOAlt2 = _interopRequireDefault(_FLOAlt);

var _FLO = require('./icons/FLO');

var _FLO2 = _interopRequireDefault(_FLO);

var _FRKAlt = require('./icons/FRK-alt');

var _FRKAlt2 = _interopRequireDefault(_FRKAlt);

var _FRK = require('./icons/FRK');

var _FRK2 = _interopRequireDefault(_FRK);

var _FTCAlt = require('./icons/FTC-alt');

var _FTCAlt2 = _interopRequireDefault(_FTCAlt);

var _FTC = require('./icons/FTC');

var _FTC2 = _interopRequireDefault(_FTC);

var _GAMEAlt = require('./icons/GAME-alt');

var _GAMEAlt2 = _interopRequireDefault(_GAMEAlt);

var _GAME = require('./icons/GAME');

var _GAME2 = _interopRequireDefault(_GAME);

var _GDCAlt = require('./icons/GDC-alt');

var _GDCAlt2 = _interopRequireDefault(_GDCAlt);

var _GDC = require('./icons/GDC');

var _GDC2 = _interopRequireDefault(_GDC);

var _GEMZAlt = require('./icons/GEMZ-alt');

var _GEMZAlt2 = _interopRequireDefault(_GEMZAlt);

var _GEMZ = require('./icons/GEMZ');

var _GEMZ2 = _interopRequireDefault(_GEMZ);

var _GLDAlt = require('./icons/GLD-alt');

var _GLDAlt2 = _interopRequireDefault(_GLDAlt);

var _GLD = require('./icons/GLD');

var _GLD2 = _interopRequireDefault(_GLD);

var _GNTAlt = require('./icons/GNT-alt');

var _GNTAlt2 = _interopRequireDefault(_GNTAlt);

var _GNT = require('./icons/GNT');

var _GNT2 = _interopRequireDefault(_GNT);

var _GRCAlt = require('./icons/GRC-alt');

var _GRCAlt2 = _interopRequireDefault(_GRCAlt);

var _GRC = require('./icons/GRC');

var _GRC2 = _interopRequireDefault(_GRC);

var _GRS = require('./icons/GRS');

var _GRS2 = _interopRequireDefault(_GRS);

var _HEATAlt = require('./icons/HEAT-alt');

var _HEATAlt2 = _interopRequireDefault(_HEATAlt);

var _HEAT = require('./icons/HEAT');

var _HEAT2 = _interopRequireDefault(_HEAT);

var _ICNAlt = require('./icons/ICN-alt');

var _ICNAlt2 = _interopRequireDefault(_ICNAlt);

var _ICN = require('./icons/ICN');

var _ICN2 = _interopRequireDefault(_ICN);

var _IFCAlt = require('./icons/IFC-alt');

var _IFCAlt2 = _interopRequireDefault(_IFCAlt);

var _IFC = require('./icons/IFC');

var _IFC2 = _interopRequireDefault(_IFC);

var _INCNTAlt = require('./icons/INCNT-alt');

var _INCNTAlt2 = _interopRequireDefault(_INCNTAlt);

var _INCNT = require('./icons/INCNT');

var _INCNT2 = _interopRequireDefault(_INCNT);

var _IOCAlt = require('./icons/IOC-alt');

var _IOCAlt2 = _interopRequireDefault(_IOCAlt);

var _IOC = require('./icons/IOC');

var _IOC2 = _interopRequireDefault(_IOC);

var _JBSAlt = require('./icons/JBS-alt');

var _JBSAlt2 = _interopRequireDefault(_JBSAlt);

var _JBS = require('./icons/JBS');

var _JBS2 = _interopRequireDefault(_JBS);

var _KMDAlt = require('./icons/KMD-alt');

var _KMDAlt2 = _interopRequireDefault(_KMDAlt);

var _KMD = require('./icons/KMD');

var _KMD2 = _interopRequireDefault(_KMD);

var _KOBO = require('./icons/KOBO');

var _KOBO2 = _interopRequireDefault(_KOBO);

var _KOREAlt = require('./icons/KORE-alt');

var _KOREAlt2 = _interopRequireDefault(_KOREAlt);

var _KORE = require('./icons/KORE');

var _KORE2 = _interopRequireDefault(_KORE);

var _LBCAlt = require('./icons/LBC-alt');

var _LBCAlt2 = _interopRequireDefault(_LBCAlt);

var _LBC = require('./icons/LBC');

var _LBC2 = _interopRequireDefault(_LBC);

var _LDOGEAlt = require('./icons/LDOGE-alt');

var _LDOGEAlt2 = _interopRequireDefault(_LDOGEAlt);

var _LDOGE = require('./icons/LDOGE');

var _LDOGE2 = _interopRequireDefault(_LDOGE);

var _LISKAlt = require('./icons/LISK-alt');

var _LISKAlt2 = _interopRequireDefault(_LISKAlt);

var _LISK = require('./icons/LISK');

var _LISK2 = _interopRequireDefault(_LISK);

var _LTCAlt = require('./icons/LTC-alt');

var _LTCAlt2 = _interopRequireDefault(_LTCAlt);

var _LTC = require('./icons/LTC');

var _LTC2 = _interopRequireDefault(_LTC);

var _MAIDAlt = require('./icons/MAID-alt');

var _MAIDAlt2 = _interopRequireDefault(_MAIDAlt);

var _MAID = require('./icons/MAID');

var _MAID2 = _interopRequireDefault(_MAID);

var _MINTAlt = require('./icons/MINT-alt');

var _MINTAlt2 = _interopRequireDefault(_MINTAlt);

var _MINT = require('./icons/MINT');

var _MINT2 = _interopRequireDefault(_MINT);

var _MONAAlt = require('./icons/MONA-alt');

var _MONAAlt2 = _interopRequireDefault(_MONAAlt);

var _MONA = require('./icons/MONA');

var _MONA2 = _interopRequireDefault(_MONA);

var _MRC = require('./icons/MRC');

var _MRC2 = _interopRequireDefault(_MRC);

var _MSCAlt = require('./icons/MSC-alt');

var _MSCAlt2 = _interopRequireDefault(_MSCAlt);

var _MSC = require('./icons/MSC');

var _MSC2 = _interopRequireDefault(_MSC);

var _MTRAlt = require('./icons/MTR-alt');

var _MTRAlt2 = _interopRequireDefault(_MTRAlt);

var _MTR = require('./icons/MTR');

var _MTR2 = _interopRequireDefault(_MTR);

var _MUEAlt = require('./icons/MUE-alt');

var _MUEAlt2 = _interopRequireDefault(_MUEAlt);

var _MUE = require('./icons/MUE');

var _MUE2 = _interopRequireDefault(_MUE);

var _NBT = require('./icons/NBT');

var _NBT2 = _interopRequireDefault(_NBT);

var _NEOSAlt = require('./icons/NEOS-alt');

var _NEOSAlt2 = _interopRequireDefault(_NEOSAlt);

var _NEOS = require('./icons/NEOS');

var _NEOS2 = _interopRequireDefault(_NEOS);

var _NEUAlt = require('./icons/NEU-alt');

var _NEUAlt2 = _interopRequireDefault(_NEUAlt);

var _NEU = require('./icons/NEU');

var _NEU2 = _interopRequireDefault(_NEU);

var _NLGAlt = require('./icons/NLG-alt');

var _NLGAlt2 = _interopRequireDefault(_NLGAlt);

var _NLG = require('./icons/NLG');

var _NLG2 = _interopRequireDefault(_NLG);

var _NMCAlt = require('./icons/NMC-alt');

var _NMCAlt2 = _interopRequireDefault(_NMCAlt);

var _NMC = require('./icons/NMC');

var _NMC2 = _interopRequireDefault(_NMC);

var _NOTEAlt = require('./icons/NOTE-alt');

var _NOTEAlt2 = _interopRequireDefault(_NOTEAlt);

var _NOTE = require('./icons/NOTE');

var _NOTE2 = _interopRequireDefault(_NOTE);

var _NVCAlt = require('./icons/NVC-alt');

var _NVCAlt2 = _interopRequireDefault(_NVCAlt);

var _NVC = require('./icons/NVC');

var _NVC2 = _interopRequireDefault(_NVC);

var _NXTAlt = require('./icons/NXT-alt');

var _NXTAlt2 = _interopRequireDefault(_NXTAlt);

var _NXT = require('./icons/NXT');

var _NXT2 = _interopRequireDefault(_NXT);

var _OKAlt = require('./icons/OK-alt');

var _OKAlt2 = _interopRequireDefault(_OKAlt);

var _OK = require('./icons/OK');

var _OK2 = _interopRequireDefault(_OK);

var _OMNIAlt = require('./icons/OMNI-alt');

var _OMNIAlt2 = _interopRequireDefault(_OMNIAlt);

var _OMNI = require('./icons/OMNI');

var _OMNI2 = _interopRequireDefault(_OMNI);

var _OPALAlt = require('./icons/OPAL-alt');

var _OPALAlt2 = _interopRequireDefault(_OPALAlt);

var _OPAL = require('./icons/OPAL');

var _OPAL2 = _interopRequireDefault(_OPAL);

var _PIGGYAlt = require('./icons/PIGGY-alt');

var _PIGGYAlt2 = _interopRequireDefault(_PIGGYAlt);

var _PIGGY = require('./icons/PIGGY');

var _PIGGY2 = _interopRequireDefault(_PIGGY);

var _PINKAlt = require('./icons/PINK-alt');

var _PINKAlt2 = _interopRequireDefault(_PINKAlt);

var _PINK = require('./icons/PINK');

var _PINK2 = _interopRequireDefault(_PINK);

var _PIVXAlt = require('./icons/PIVX-alt');

var _PIVXAlt2 = _interopRequireDefault(_PIVXAlt);

var _PIVX = require('./icons/PIVX');

var _PIVX2 = _interopRequireDefault(_PIVX);

var _POTAlt = require('./icons/POT-alt');

var _POTAlt2 = _interopRequireDefault(_POTAlt);

var _POT = require('./icons/POT');

var _POT2 = _interopRequireDefault(_POT);

var _PPCAlt = require('./icons/PPC-alt');

var _PPCAlt2 = _interopRequireDefault(_PPCAlt);

var _PPC = require('./icons/PPC');

var _PPC2 = _interopRequireDefault(_PPC);

var _QRKAlt = require('./icons/QRK-alt');

var _QRKAlt2 = _interopRequireDefault(_QRKAlt);

var _QRK = require('./icons/QRK');

var _QRK2 = _interopRequireDefault(_QRK);

var _RBIESAlt = require('./icons/RBIES-alt');

var _RBIESAlt2 = _interopRequireDefault(_RBIESAlt);

var _RBIES = require('./icons/RBIES');

var _RBIES2 = _interopRequireDefault(_RBIES);

var _RBTAlt = require('./icons/RBT-alt');

var _RBTAlt2 = _interopRequireDefault(_RBTAlt);

var _RBT = require('./icons/RBT');

var _RBT2 = _interopRequireDefault(_RBT);

var _RBYAlt = require('./icons/RBY-alt');

var _RBYAlt2 = _interopRequireDefault(_RBYAlt);

var _RBY = require('./icons/RBY');

var _RBY2 = _interopRequireDefault(_RBY);

var _RDDAlt = require('./icons/RDD-alt');

var _RDDAlt2 = _interopRequireDefault(_RDDAlt);

var _RDD = require('./icons/RDD');

var _RDD2 = _interopRequireDefault(_RDD);

var _REPAlt = require('./icons/REP-alt');

var _REPAlt2 = _interopRequireDefault(_REPAlt);

var _REP = require('./icons/REP');

var _REP2 = _interopRequireDefault(_REP);

var _RISEAlt = require('./icons/RISE-alt');

var _RISEAlt2 = _interopRequireDefault(_RISEAlt);

var _RISE = require('./icons/RISE');

var _RISE2 = _interopRequireDefault(_RISE);

var _SARAlt = require('./icons/SAR-alt');

var _SARAlt2 = _interopRequireDefault(_SARAlt);

var _SAR = require('./icons/SAR');

var _SAR2 = _interopRequireDefault(_SAR);

var _SCOTAlt = require('./icons/SCOT-alt');

var _SCOTAlt2 = _interopRequireDefault(_SCOTAlt);

var _SCOT = require('./icons/SCOT');

var _SCOT2 = _interopRequireDefault(_SCOT);

var _SDCAlt = require('./icons/SDC-alt');

var _SDCAlt2 = _interopRequireDefault(_SDCAlt);

var _SDC = require('./icons/SDC');

var _SDC2 = _interopRequireDefault(_SDC);

var _SIAAlt = require('./icons/SIA-alt');

var _SIAAlt2 = _interopRequireDefault(_SIAAlt);

var _SIA = require('./icons/SIA');

var _SIA2 = _interopRequireDefault(_SIA);

var _SJCXAlt = require('./icons/SJCX-alt');

var _SJCXAlt2 = _interopRequireDefault(_SJCXAlt);

var _SJCX = require('./icons/SJCX');

var _SJCX2 = _interopRequireDefault(_SJCX);

var _SLGAlt = require('./icons/SLG-alt');

var _SLGAlt2 = _interopRequireDefault(_SLGAlt);

var _SLG = require('./icons/SLG');

var _SLG2 = _interopRequireDefault(_SLG);

var _SLSAlt = require('./icons/SLS-alt');

var _SLSAlt2 = _interopRequireDefault(_SLSAlt);

var _SLS = require('./icons/SLS');

var _SLS2 = _interopRequireDefault(_SLS);

var _SNRGAlt = require('./icons/SNRG-alt');

var _SNRGAlt2 = _interopRequireDefault(_SNRGAlt);

var _SNRG = require('./icons/SNRG');

var _SNRG2 = _interopRequireDefault(_SNRG);

var _STARTAlt = require('./icons/START-alt');

var _STARTAlt2 = _interopRequireDefault(_STARTAlt);

var _START = require('./icons/START');

var _START2 = _interopRequireDefault(_START);

var _STEEMAlt = require('./icons/STEEM-alt');

var _STEEMAlt2 = _interopRequireDefault(_STEEMAlt);

var _STEEM = require('./icons/STEEM');

var _STEEM2 = _interopRequireDefault(_STEEM);

var _STRAlt = require('./icons/STR-alt');

var _STRAlt2 = _interopRequireDefault(_STRAlt);

var _STR = require('./icons/STR');

var _STR2 = _interopRequireDefault(_STR);

var _STRATAlt = require('./icons/STRAT-alt');

var _STRATAlt2 = _interopRequireDefault(_STRATAlt);

var _STRAT = require('./icons/STRAT');

var _STRAT2 = _interopRequireDefault(_STRAT);

var _SWIFTAlt = require('./icons/SWIFT-alt');

var _SWIFTAlt2 = _interopRequireDefault(_SWIFTAlt);

var _SWIFT = require('./icons/SWIFT');

var _SWIFT2 = _interopRequireDefault(_SWIFT);

var _SYNCAlt = require('./icons/SYNC-alt');

var _SYNCAlt2 = _interopRequireDefault(_SYNCAlt);

var _SYNC = require('./icons/SYNC');

var _SYNC2 = _interopRequireDefault(_SYNC);

var _SYSAlt = require('./icons/SYS-alt');

var _SYSAlt2 = _interopRequireDefault(_SYSAlt);

var _SYS = require('./icons/SYS');

var _SYS2 = _interopRequireDefault(_SYS);

var _TRIGAlt = require('./icons/TRIG-alt');

var _TRIGAlt2 = _interopRequireDefault(_TRIGAlt);

var _TRIG = require('./icons/TRIG');

var _TRIG2 = _interopRequireDefault(_TRIG);

var _TXAlt = require('./icons/TX-alt');

var _TXAlt2 = _interopRequireDefault(_TXAlt);

var _TX = require('./icons/TX');

var _TX2 = _interopRequireDefault(_TX);

var _UBQAlt = require('./icons/UBQ-alt');

var _UBQAlt2 = _interopRequireDefault(_UBQAlt);

var _UBQ = require('./icons/UBQ');

var _UBQ2 = _interopRequireDefault(_UBQ);

var _UNITYAlt = require('./icons/UNITY-alt');

var _UNITYAlt2 = _interopRequireDefault(_UNITYAlt);

var _UNITY = require('./icons/UNITY');

var _UNITY2 = _interopRequireDefault(_UNITY);

var _USDTAlt = require('./icons/USDT-alt');

var _USDTAlt2 = _interopRequireDefault(_USDTAlt);

var _USDT = require('./icons/USDT');

var _USDT2 = _interopRequireDefault(_USDT);

var _VIORAlt = require('./icons/VIOR-alt');

var _VIORAlt2 = _interopRequireDefault(_VIORAlt);

var _VIOR = require('./icons/VIOR');

var _VIOR2 = _interopRequireDefault(_VIOR);

var _VNLAlt = require('./icons/VNL-alt');

var _VNLAlt2 = _interopRequireDefault(_VNLAlt);

var _VNL = require('./icons/VNL');

var _VNL2 = _interopRequireDefault(_VNL);

var _VPNAlt = require('./icons/VPN-alt');

var _VPNAlt2 = _interopRequireDefault(_VPNAlt);

var _VPN = require('./icons/VPN');

var _VPN2 = _interopRequireDefault(_VPN);

var _VRCAlt = require('./icons/VRC-alt');

var _VRCAlt2 = _interopRequireDefault(_VRCAlt);

var _VRC = require('./icons/VRC');

var _VRC2 = _interopRequireDefault(_VRC);

var _VTCAlt = require('./icons/VTC-alt');

var _VTCAlt2 = _interopRequireDefault(_VTCAlt);

var _VTC = require('./icons/VTC');

var _VTC2 = _interopRequireDefault(_VTC);

var _WAVESAlt = require('./icons/WAVES-alt');

var _WAVESAlt2 = _interopRequireDefault(_WAVESAlt);

var _WAVES = require('./icons/WAVES');

var _WAVES2 = _interopRequireDefault(_WAVES);

var _XAIAlt = require('./icons/XAI-alt');

var _XAIAlt2 = _interopRequireDefault(_XAIAlt);

var _XAI = require('./icons/XAI');

var _XAI2 = _interopRequireDefault(_XAI);

var _XBSAlt = require('./icons/XBS-alt');

var _XBSAlt2 = _interopRequireDefault(_XBSAlt);

var _XBS = require('./icons/XBS');

var _XBS2 = _interopRequireDefault(_XBS);

var _XCPAlt = require('./icons/XCP-alt');

var _XCPAlt2 = _interopRequireDefault(_XCPAlt);

var _XCP = require('./icons/XCP');

var _XCP2 = _interopRequireDefault(_XCP);

var _XEMAlt = require('./icons/XEM-alt');

var _XEMAlt2 = _interopRequireDefault(_XEMAlt);

var _XEM = require('./icons/XEM');

var _XEM2 = _interopRequireDefault(_XEM);

var _XMR = require('./icons/XMR');

var _XMR2 = _interopRequireDefault(_XMR);

var _XPMAlt = require('./icons/XPM-alt');

var _XPMAlt2 = _interopRequireDefault(_XPMAlt);

var _XPM = require('./icons/XPM');

var _XPM2 = _interopRequireDefault(_XPM);

var _XRPAlt = require('./icons/XRP-alt');

var _XRPAlt2 = _interopRequireDefault(_XRPAlt);

var _XRP = require('./icons/XRP');

var _XRP2 = _interopRequireDefault(_XRP);

var _XVGAlt = require('./icons/XVG-alt');

var _XVGAlt2 = _interopRequireDefault(_XVGAlt);

var _XVG = require('./icons/XVG');

var _XVG2 = _interopRequireDefault(_XVG);

var _YBCAlt = require('./icons/YBC-alt');

var _YBCAlt2 = _interopRequireDefault(_YBCAlt);

var _YBC = require('./icons/YBC');

var _YBC2 = _interopRequireDefault(_YBC);

var _ZECAlt = require('./icons/ZEC-alt');

var _ZECAlt2 = _interopRequireDefault(_ZECAlt);

var _ZEC = require('./icons/ZEC');

var _ZEC2 = _interopRequireDefault(_ZEC);

var _ZEITAlt = require('./icons/ZEIT-alt');

var _ZEITAlt2 = _interopRequireDefault(_ZEITAlt);

var _ZEIT = require('./icons/ZEIT');

var _ZEIT2 = _interopRequireDefault(_ZEIT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdcAlt = _ADCAlt2.default;
exports.Adc = _ADC2.default;
exports.AeonAlt = _AEONAlt2.default;
exports.Aeon = _AEON2.default;
exports.AmpAlt = _AMPAlt2.default;
exports.Amp = _AMP2.default;
exports.AncAlt = _ANCAlt2.default;
exports.Anc = _ANC2.default;
exports.ArchAlt = _ARCHAlt2.default;
exports.Arch = _ARCH2.default;
exports.ArdrAlt = _ARDRAlt2.default;
exports.Ardr = _ARDR2.default;
exports.AurAlt = _AURAlt2.default;
exports.Aur = _AUR2.default;
exports.BanxAlt = _BANXAlt2.default;
exports.Banx = _BANX2.default;
exports.BayAlt = _BAYAlt2.default;
exports.Bay = _BAY2.default;
exports.BcAlt = _BCAlt2.default;
exports.Bc = _BC2.default;
exports.BcnAlt = _BCNAlt2.default;
exports.Bcn = _BCN2.default;
exports.BftAlt = _BFTAlt2.default;
exports.Bft = _BFT2.default;
exports.BrkAlt = _BRKAlt2.default;
exports.Brk = _BRK2.default;
exports.BrxAlt = _BRXAlt2.default;
exports.Brx = _BRX2.default;
exports.BsdAlt = _BSDAlt2.default;
exports.Bsd = _BSD2.default;
exports.Bta = _BTA2.default;
exports.BtcAlt = _BTCAlt2.default;
exports.Btc = _BTC2.default;
exports.BtcdAlt = _BTCDAlt2.default;
exports.Btcd = _BTCD2.default;
exports.BtsAlt = _BTSAlt2.default;
exports.Bts = _BTS2.default;
exports.ClamAlt = _CLAMAlt2.default;
exports.Clam = _CLAM2.default;
exports.CloakAlt = _CLOAKAlt2.default;
exports.Cloak = _CLOAK2.default;
exports.DaoAlt = _DAOAlt2.default;
exports.Dao = _DAO2.default;
exports.DashAlt = _DASHAlt2.default;
exports.Dash = _DASH2.default;
exports.DcrAlt = _DCRAlt2.default;
exports.Dcr = _DCR2.default;
exports.DgbAlt = _DGBAlt2.default;
exports.Dgb = _DGB2.default;
exports.Dgd = _DGD2.default;
exports.Dgx = _DGX2.default;
exports.DmdAlt = _DMDAlt2.default;
exports.Dmd = _DMD2.default;
exports.DogeAlt = _DOGEAlt2.default;
exports.Doge = _DOGE2.default;
exports.EmcAlt = _EMCAlt2.default;
exports.Emc = _EMC2.default;
exports.ErcAlt = _ERCAlt2.default;
exports.Erc = _ERC2.default;
exports.EtcAlt = _ETCAlt2.default;
exports.Etc = _ETC2.default;
exports.EthAlt = _ETHAlt2.default;
exports.Eth = _ETH2.default;
exports.Fc2Alt = _FC2Alt2.default;
exports.Fc2 = _FC2.default;
exports.FctAlt = _FCTAlt2.default;
exports.Fct = _FCT2.default;
exports.FloAlt = _FLOAlt2.default;
exports.Flo = _FLO2.default;
exports.FrkAlt = _FRKAlt2.default;
exports.Frk = _FRK2.default;
exports.FtcAlt = _FTCAlt2.default;
exports.Ftc = _FTC2.default;
exports.GameAlt = _GAMEAlt2.default;
exports.Game = _GAME2.default;
exports.GdcAlt = _GDCAlt2.default;
exports.Gdc = _GDC2.default;
exports.GemzAlt = _GEMZAlt2.default;
exports.Gemz = _GEMZ2.default;
exports.GldAlt = _GLDAlt2.default;
exports.Gld = _GLD2.default;
exports.GntAlt = _GNTAlt2.default;
exports.Gnt = _GNT2.default;
exports.GrcAlt = _GRCAlt2.default;
exports.Grc = _GRC2.default;
exports.Grs = _GRS2.default;
exports.HeatAlt = _HEATAlt2.default;
exports.Heat = _HEAT2.default;
exports.IcnAlt = _ICNAlt2.default;
exports.Icn = _ICN2.default;
exports.IfcAlt = _IFCAlt2.default;
exports.Ifc = _IFC2.default;
exports.IncntAlt = _INCNTAlt2.default;
exports.Incnt = _INCNT2.default;
exports.IocAlt = _IOCAlt2.default;
exports.Ioc = _IOC2.default;
exports.JbsAlt = _JBSAlt2.default;
exports.Jbs = _JBS2.default;
exports.KmdAlt = _KMDAlt2.default;
exports.Kmd = _KMD2.default;
exports.Kobo = _KOBO2.default;
exports.KoreAlt = _KOREAlt2.default;
exports.Kore = _KORE2.default;
exports.LbcAlt = _LBCAlt2.default;
exports.Lbc = _LBC2.default;
exports.LdogeAlt = _LDOGEAlt2.default;
exports.Ldoge = _LDOGE2.default;
exports.LiskAlt = _LISKAlt2.default;
exports.Lisk = _LISK2.default;
exports.LtcAlt = _LTCAlt2.default;
exports.Ltc = _LTC2.default;
exports.MaidAlt = _MAIDAlt2.default;
exports.Maid = _MAID2.default;
exports.MintAlt = _MINTAlt2.default;
exports.Mint = _MINT2.default;
exports.MonaAlt = _MONAAlt2.default;
exports.Mona = _MONA2.default;
exports.Mrc = _MRC2.default;
exports.MscAlt = _MSCAlt2.default;
exports.Msc = _MSC2.default;
exports.MtrAlt = _MTRAlt2.default;
exports.Mtr = _MTR2.default;
exports.MueAlt = _MUEAlt2.default;
exports.Mue = _MUE2.default;
exports.Nbt = _NBT2.default;
exports.NeosAlt = _NEOSAlt2.default;
exports.Neos = _NEOS2.default;
exports.NeuAlt = _NEUAlt2.default;
exports.Neu = _NEU2.default;
exports.NlgAlt = _NLGAlt2.default;
exports.Nlg = _NLG2.default;
exports.NmcAlt = _NMCAlt2.default;
exports.Nmc = _NMC2.default;
exports.NoteAlt = _NOTEAlt2.default;
exports.Note = _NOTE2.default;
exports.NvcAlt = _NVCAlt2.default;
exports.Nvc = _NVC2.default;
exports.NxtAlt = _NXTAlt2.default;
exports.Nxt = _NXT2.default;
exports.OkAlt = _OKAlt2.default;
exports.Ok = _OK2.default;
exports.OmniAlt = _OMNIAlt2.default;
exports.Omni = _OMNI2.default;
exports.OpalAlt = _OPALAlt2.default;
exports.Opal = _OPAL2.default;
exports.PiggyAlt = _PIGGYAlt2.default;
exports.Piggy = _PIGGY2.default;
exports.PinkAlt = _PINKAlt2.default;
exports.Pink = _PINK2.default;
exports.PivxAlt = _PIVXAlt2.default;
exports.Pivx = _PIVX2.default;
exports.PotAlt = _POTAlt2.default;
exports.Pot = _POT2.default;
exports.PpcAlt = _PPCAlt2.default;
exports.Ppc = _PPC2.default;
exports.QrkAlt = _QRKAlt2.default;
exports.Qrk = _QRK2.default;
exports.RbiesAlt = _RBIESAlt2.default;
exports.Rbies = _RBIES2.default;
exports.RbtAlt = _RBTAlt2.default;
exports.Rbt = _RBT2.default;
exports.RbyAlt = _RBYAlt2.default;
exports.Rby = _RBY2.default;
exports.RddAlt = _RDDAlt2.default;
exports.Rdd = _RDD2.default;
exports.RepAlt = _REPAlt2.default;
exports.Rep = _REP2.default;
exports.RiseAlt = _RISEAlt2.default;
exports.Rise = _RISE2.default;
exports.SarAlt = _SARAlt2.default;
exports.Sar = _SAR2.default;
exports.ScotAlt = _SCOTAlt2.default;
exports.Scot = _SCOT2.default;
exports.SdcAlt = _SDCAlt2.default;
exports.Sdc = _SDC2.default;
exports.SiaAlt = _SIAAlt2.default;
exports.Sia = _SIA2.default;
exports.SjcxAlt = _SJCXAlt2.default;
exports.Sjcx = _SJCX2.default;
exports.SlgAlt = _SLGAlt2.default;
exports.Slg = _SLG2.default;
exports.SlsAlt = _SLSAlt2.default;
exports.Sls = _SLS2.default;
exports.SnrgAlt = _SNRGAlt2.default;
exports.Snrg = _SNRG2.default;
exports.StartAlt = _STARTAlt2.default;
exports.Start = _START2.default;
exports.SteemAlt = _STEEMAlt2.default;
exports.Steem = _STEEM2.default;
exports.StrAlt = _STRAlt2.default;
exports.Str = _STR2.default;
exports.StratAlt = _STRATAlt2.default;
exports.Strat = _STRAT2.default;
exports.SwiftAlt = _SWIFTAlt2.default;
exports.Swift = _SWIFT2.default;
exports.SyncAlt = _SYNCAlt2.default;
exports.Sync = _SYNC2.default;
exports.SysAlt = _SYSAlt2.default;
exports.Sys = _SYS2.default;
exports.TrigAlt = _TRIGAlt2.default;
exports.Trig = _TRIG2.default;
exports.TxAlt = _TXAlt2.default;
exports.Tx = _TX2.default;
exports.UbqAlt = _UBQAlt2.default;
exports.Ubq = _UBQ2.default;
exports.UnityAlt = _UNITYAlt2.default;
exports.Unity = _UNITY2.default;
exports.UsdtAlt = _USDTAlt2.default;
exports.Usdt = _USDT2.default;
exports.ViorAlt = _VIORAlt2.default;
exports.Vior = _VIOR2.default;
exports.VnlAlt = _VNLAlt2.default;
exports.Vnl = _VNL2.default;
exports.VpnAlt = _VPNAlt2.default;
exports.Vpn = _VPN2.default;
exports.VrcAlt = _VRCAlt2.default;
exports.Vrc = _VRC2.default;
exports.VtcAlt = _VTCAlt2.default;
exports.Vtc = _VTC2.default;
exports.WavesAlt = _WAVESAlt2.default;
exports.Waves = _WAVES2.default;
exports.XaiAlt = _XAIAlt2.default;
exports.Xai = _XAI2.default;
exports.XbsAlt = _XBSAlt2.default;
exports.Xbs = _XBS2.default;
exports.XcpAlt = _XCPAlt2.default;
exports.Xcp = _XCP2.default;
exports.XemAlt = _XEMAlt2.default;
exports.Xem = _XEM2.default;
exports.Xmr = _XMR2.default;
exports.XpmAlt = _XPMAlt2.default;
exports.Xpm = _XPM2.default;
exports.XrpAlt = _XRPAlt2.default;
exports.Xrp = _XRP2.default;
exports.XvgAlt = _XVGAlt2.default;
exports.Xvg = _XVG2.default;
exports.YbcAlt = _YBCAlt2.default;
exports.Ybc = _YBC2.default;
exports.ZecAlt = _ZECAlt2.default;
exports.Zec = _ZEC2.default;
exports.ZeitAlt = _ZEITAlt2.default;
exports.Zeit = _ZEIT2.default;