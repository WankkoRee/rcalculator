// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002%\u019b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u00a5\n\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0005\b\u00ab\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b6\n\u000b\u0003",
    "\u000b\u0005\u000b\u00b9\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00be\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u00c3\n\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0005\u000e\u00cb\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00d6\n\u0011\u0003\u0011\u0005\u0011\u00d9\n\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00dd\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u00e7\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u00ec\n\u0014\u0005\u0014\u00ee\n\u0014\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00f2\n\u0015\u0003\u0015\u0005\u0015\u00f5\n\u0015\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00f9\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0006\u0018\u00fe\n\u0018\r\u0018\u000e\u0018\u00ff\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0104\n\u0019\u0003\u001a\u0006\u001a\u0107",
    "\n\u001a\r\u001a\u000e\u001a\u0108\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u010f\n\u001c\u0003\u001c\u0005\u001c\u0112",
    "\n\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0006\u001e\u0117\n\u001e",
    "\r\u001e\u000e\u001e\u0118\u0003\u001f\u0003\u001f\u0005\u001f\u011d",
    "\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0005!\u0125\n!\u0003",
    "!\u0005!\u0128\n!\u0003\"\u0003\"\u0003#\u0006#\u012d\n#\r#\u000e#\u012e",
    "\u0003$\u0003$\u0005$\u0133\n$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0005&\u013b\n&\u0003&\u0005&\u013e\n&\u0003\'\u0003\'\u0003(\u0006",
    "(\u0143\n(\r(\u000e(\u0144\u0003)\u0003)\u0005)\u0149\n)\u0003*\u0003",
    "*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u0003",
    "4\u00035\u00035\u00036\u00036\u00036\u00037\u00037\u00037\u00038\u0003",
    "8\u00038\u00039\u00039\u00039\u0003:\u0003:\u0003:\u0003;\u0003;\u0003",
    ";\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0003>\u0003>\u0003>\u0003",
    "?\u0003?\u0003?\u0003@\u0003@\u0003@\u0003@\u0003A\u0003A\u0003A\u0003",
    "A\u0003B\u0003B\u0007B\u018b\nB\fB\u000eB\u018e\u000bB\u0003C\u0006",
    "C\u0191\nC\rC\u000eC\u0192\u0003C\u0003C\u0003D\u0005D\u0198\nD\u0003",
    "D\u0003D\u0002\u0002E\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u0002\u0015\u0002\u0017\u0002\u0019",
    "\u0002\u001b\u0002\u001d\u0002\u001f\u0002!\u0002#\u0002%\u0002\'\u0002",
    ")\u0002+\u0002-\u0002/\u00021\u00023\u00025\u00027\u00029\u0002;\u0002",
    "=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002I\u0002K\u0002M\u0002O\u0002",
    "Q\u0002S\u000bU\fW\rY\u000e[\u000f]\u0010_\u0011a\u0012c\u0013e\u0014",
    "g\u0015i\u0016k\u0017m\u0018o\u0019q\u001as\u001bu\u001cw\u001dy\u001e",
    "{\u001f} \u007f!\u0081\"\u0083#\u0085$\u0087%\u0003\u0002\u0011\u0003",
    "\u00022;\u0004\u0002//11\u0004\u0002ZZzz\u0004\u0002GGgg\u0004\u0002",
    "--//\u0004\u0002RRrr\u0003\u00023;\u0005\u00022;CHch\u0004\u0002QQq",
    "q\u0003\u000229\u0004\u0002DDdd\u0003\u000223\u0005\u0002C\\aac|\u0006",
    "\u00022;C\\aac|\u0006\u0002\u000b\u000b\r\u000e\"\"\u00a2\u00a2\u0002",
    "\u019f\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002",
    "\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002",
    "[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003",
    "\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002",
    "\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002\u0002",
    "\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002",
    "\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002\u0002",
    "q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002\u0002u\u0003",
    "\u0002\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002y\u0003\u0002",
    "\u0002\u0002\u0002{\u0003\u0002\u0002\u0002\u0002}\u0003\u0002\u0002",
    "\u0002\u0002\u007f\u0003\u0002\u0002\u0002\u0002\u0081\u0003\u0002\u0002",
    "\u0002\u0002\u0083\u0003\u0002\u0002\u0002\u0002\u0085\u0003\u0002\u0002",
    "\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0003\u0089\u0003\u0002\u0002",
    "\u0002\u0005\u008b\u0003\u0002\u0002\u0002\u0007\u008d\u0003\u0002\u0002",
    "\u0002\t\u008f\u0003\u0002\u0002\u0002\u000b\u0091\u0003\u0002\u0002",
    "\u0002\r\u00a4\u0003\u0002\u0002\u0002\u000f\u00aa\u0003\u0002\u0002",
    "\u0002\u0011\u00ac\u0003\u0002\u0002\u0002\u0013\u00ae\u0003\u0002\u0002",
    "\u0002\u0015\u00c2\u0003\u0002\u0002\u0002\u0017\u00c4\u0003\u0002\u0002",
    "\u0002\u0019\u00c7\u0003\u0002\u0002\u0002\u001b\u00ca\u0003\u0002\u0002",
    "\u0002\u001d\u00ce\u0003\u0002\u0002\u0002\u001f\u00d0\u0003\u0002\u0002",
    "\u0002!\u00dc\u0003\u0002\u0002\u0002#\u00de\u0003\u0002\u0002\u0002",
    "%\u00e1\u0003\u0002\u0002\u0002\'\u00ed\u0003\u0002\u0002\u0002)\u00ef",
    "\u0003\u0002\u0002\u0002+\u00f8\u0003\u0002\u0002\u0002-\u00fa\u0003",
    "\u0002\u0002\u0002/\u00fd\u0003\u0002\u0002\u00021\u0103\u0003\u0002",
    "\u0002\u00023\u0106\u0003\u0002\u0002\u00025\u010a\u0003\u0002\u0002",
    "\u00027\u010c\u0003\u0002\u0002\u00029\u0113\u0003\u0002\u0002\u0002",
    ";\u0116\u0003\u0002\u0002\u0002=\u011c\u0003\u0002\u0002\u0002?\u011e",
    "\u0003\u0002\u0002\u0002A\u0122\u0003\u0002\u0002\u0002C\u0129\u0003",
    "\u0002\u0002\u0002E\u012c\u0003\u0002\u0002\u0002G\u0132\u0003\u0002",
    "\u0002\u0002I\u0134\u0003\u0002\u0002\u0002K\u0138\u0003\u0002\u0002",
    "\u0002M\u013f\u0003\u0002\u0002\u0002O\u0142\u0003\u0002\u0002\u0002",
    "Q\u0148\u0003\u0002\u0002\u0002S\u014a\u0003\u0002\u0002\u0002U\u014c",
    "\u0003\u0002\u0002\u0002W\u014e\u0003\u0002\u0002\u0002Y\u0150\u0003",
    "\u0002\u0002\u0002[\u0152\u0003\u0002\u0002\u0002]\u0154\u0003\u0002",
    "\u0002\u0002_\u0156\u0003\u0002\u0002\u0002a\u0158\u0003\u0002\u0002",
    "\u0002c\u015a\u0003\u0002\u0002\u0002e\u015c\u0003\u0002\u0002\u0002",
    "g\u015e\u0003\u0002\u0002\u0002i\u0160\u0003\u0002\u0002\u0002k\u0162",
    "\u0003\u0002\u0002\u0002m\u0165\u0003\u0002\u0002\u0002o\u0168\u0003",
    "\u0002\u0002\u0002q\u016b\u0003\u0002\u0002\u0002s\u016e\u0003\u0002",
    "\u0002\u0002u\u0171\u0003\u0002\u0002\u0002w\u0174\u0003\u0002\u0002",
    "\u0002y\u0177\u0003\u0002\u0002\u0002{\u017a\u0003\u0002\u0002\u0002",
    "}\u017d\u0003\u0002\u0002\u0002\u007f\u0180\u0003\u0002\u0002\u0002",
    "\u0081\u0184\u0003\u0002\u0002\u0002\u0083\u0188\u0003\u0002\u0002\u0002",
    "\u0085\u0190\u0003\u0002\u0002\u0002\u0087\u0197\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0007%\u0002\u0002\u008a\u0004\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0007{\u0002\u0002\u008c\u0006\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007o\u0002\u0002\u008e\b\u0003\u0002\u0002\u0002\u008f",
    "\u0090\u0007y\u0002\u0002\u0090\n\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0007f\u0002\u0002\u0092\f\u0003\u0002\u0002\u0002\u0093\u0094\u0007",
    "%\u0002\u0002\u0094\u0095\t\u0002\u0002\u0002\u0095\u0096\t\u0002\u0002",
    "\u0002\u0096\u0097\t\u0002\u0002\u0002\u0097\u0098\t\u0002\u0002\u0002",
    "\u0098\u0099\t\u0003\u0002\u0002\u0099\u009a\t\u0002\u0002\u0002\u009a",
    "\u009b\t\u0002\u0002\u0002\u009b\u009c\t\u0003\u0002\u0002\u009c\u009d",
    "\t\u0002\u0002\u0002\u009d\u009e\t\u0002\u0002\u0002\u009e\u00a5\u0007",
    "%\u0002\u0002\u009f\u00a0\u0007%\u0002\u0002\u00a0\u00a1\u0007p\u0002",
    "\u0002\u00a1\u00a2\u0007q\u0002\u0002\u00a2\u00a3\u0007y\u0002\u0002",
    "\u00a3\u00a5\u0007%\u0002\u0002\u00a4\u0093\u0003\u0002\u0002\u0002",
    "\u00a4\u009f\u0003\u0002\u0002\u0002\u00a5\u000e\u0003\u0002\u0002\u0002",
    "\u00a6\u00ab\u0005\'\u0014\u0002\u00a7\u00ab\u00055\u001b\u0002\u00a8",
    "\u00ab\u0005? \u0002\u00a9\u00ab\u0005I%\u0002\u00aa\u00a6\u0003\u0002",
    "\u0002\u0002\u00aa\u00a7\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002",
    "\u0002\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u0010\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0005\u0015\u000b\u0002\u00ad\u0012\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u00072\u0002\u0002\u00af\u00b0\t\u0004\u0002",
    "\u0002\u00b0\u00b1\u00057\u001c\u0002\u00b1\u0014\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0005)\u0015\u0002\u00b3\u00b5\u00070\u0002\u0002",
    "\u00b4\u00b6\u0005)\u0015\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002",
    "\u00b7\u00b9\u0005\u0017\f\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002",
    "\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00c3\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u00070\u0002\u0002\u00bb\u00bd\u0005)\u0015\u0002\u00bc",
    "\u00be\u0005\u0017\f\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd",
    "\u00be\u0003\u0002\u0002\u0002\u00be\u00c3\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\u0005)\u0015\u0002\u00c0\u00c1\u0005\u0017\f\u0002\u00c1\u00c3",
    "\u0003\u0002\u0002\u0002\u00c2\u00b2\u0003\u0002\u0002\u0002\u00c2\u00ba",
    "\u0003\u0002\u0002\u0002\u00c2\u00bf\u0003\u0002\u0002\u0002\u00c3\u0016",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\u0005\u0019\r\u0002\u00c5\u00c6",
    "\u0005\u001b\u000e\u0002\u00c6\u0018\u0003\u0002\u0002\u0002\u00c7\u00c8",
    "\t\u0005\u0002\u0002\u00c8\u001a\u0003\u0002\u0002\u0002\u00c9\u00cb",
    "\u0005\u001d\u000f\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0005)\u0015\u0002\u00cd\u001c\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\t\u0006\u0002\u0002\u00cf\u001e\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0005!\u0011\u0002\u00d1\u00d2\u0005#\u0012\u0002\u00d2 \u0003\u0002",
    "\u0002\u0002\u00d3\u00d5\u0005\u0013\n\u0002\u00d4\u00d6\u00070\u0002",
    "\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002",
    "\u0002\u00d6\u00dd\u0003\u0002\u0002\u0002\u00d7\u00d9\u0005\u0013\n",
    "\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u00070\u0002",
    "\u0002\u00db\u00dd\u00057\u001c\u0002\u00dc\u00d3\u0003\u0002\u0002",
    "\u0002\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dd\"\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0005%\u0013\u0002\u00df\u00e0\u0005\u001b\u000e",
    "\u0002\u00e0$\u0003\u0002\u0002\u0002\u00e1\u00e2\t\u0007\u0002\u0002",
    "\u00e2&\u0003\u0002\u0002\u0002\u00e3\u00ee\u00072\u0002\u0002\u00e4",
    "\u00eb\u0005-\u0017\u0002\u00e5\u00e7\u0005)\u0015\u0002\u00e6\u00e5",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00ec",
    "\u0003\u0002\u0002\u0002\u00e8\u00e9\u00053\u001a\u0002\u00e9\u00ea",
    "\u0005)\u0015\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e6",
    "\u0003\u0002\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002\u0002\u00ec\u00ee",
    "\u0003\u0002\u0002\u0002\u00ed\u00e3\u0003\u0002\u0002\u0002\u00ed\u00e4",
    "\u0003\u0002\u0002\u0002\u00ee(\u0003\u0002\u0002\u0002\u00ef\u00f4",
    "\u0005+\u0016\u0002\u00f0\u00f2\u0005/\u0018\u0002\u00f1\u00f0\u0003",
    "\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003",
    "\u0002\u0002\u0002\u00f3\u00f5\u0005+\u0016\u0002\u00f4\u00f1\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5*\u0003",
    "\u0002\u0002\u0002\u00f6\u00f9\u00072\u0002\u0002\u00f7\u00f9\u0005",
    "-\u0017\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f7\u0003",
    "\u0002\u0002\u0002\u00f9,\u0003\u0002\u0002\u0002\u00fa\u00fb\t\b\u0002",
    "\u0002\u00fb.\u0003\u0002\u0002\u0002\u00fc\u00fe\u00051\u0019\u0002",
    "\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002",
    "\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002",
    "\u01000\u0003\u0002\u0002\u0002\u0101\u0104\u0005+\u0016\u0002\u0102",
    "\u0104\u0007a\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103",
    "\u0102\u0003\u0002\u0002\u0002\u01042\u0003\u0002\u0002\u0002\u0105",
    "\u0107\u0007a\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0107",
    "\u0108\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0003\u0002\u0002\u0002\u01094\u0003\u0002\u0002\u0002\u010a",
    "\u010b\u0005\u0013\n\u0002\u010b6\u0003\u0002\u0002\u0002\u010c\u0111",
    "\u00059\u001d\u0002\u010d\u010f\u0005;\u001e\u0002\u010e\u010d\u0003",
    "\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0110\u0003",
    "\u0002\u0002\u0002\u0110\u0112\u00059\u001d\u0002\u0111\u010e\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u01128\u0003",
    "\u0002\u0002\u0002\u0113\u0114\t\t\u0002\u0002\u0114:\u0003\u0002\u0002",
    "\u0002\u0115\u0117\u0005=\u001f\u0002\u0116\u0115\u0003\u0002\u0002",
    "\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119<\u0003\u0002\u0002",
    "\u0002\u011a\u011d\u00059\u001d\u0002\u011b\u011d\u0007a\u0002\u0002",
    "\u011c\u011a\u0003\u0002\u0002\u0002\u011c\u011b\u0003\u0002\u0002\u0002",
    "\u011d>\u0003\u0002\u0002\u0002\u011e\u011f\u00072\u0002\u0002\u011f",
    "\u0120\t\n\u0002\u0002\u0120\u0121\u0005A!\u0002\u0121@\u0003\u0002",
    "\u0002\u0002\u0122\u0127\u0005C\"\u0002\u0123\u0125\u0005E#\u0002\u0124",
    "\u0123\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125",
    "\u0126\u0003\u0002\u0002\u0002\u0126\u0128\u0005C\"\u0002\u0127\u0124",
    "\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128B",
    "\u0003\u0002\u0002\u0002\u0129\u012a\t\u000b\u0002\u0002\u012aD\u0003",
    "\u0002\u0002\u0002\u012b\u012d\u0005G$\u0002\u012c\u012b\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002",
    "\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012fF\u0003\u0002",
    "\u0002\u0002\u0130\u0133\u0005C\"\u0002\u0131\u0133\u0007a\u0002\u0002",
    "\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0131\u0003\u0002\u0002\u0002",
    "\u0133H\u0003\u0002\u0002\u0002\u0134\u0135\u00072\u0002\u0002\u0135",
    "\u0136\t\f\u0002\u0002\u0136\u0137\u0005K&\u0002\u0137J\u0003\u0002",
    "\u0002\u0002\u0138\u013d\u0005M\'\u0002\u0139\u013b\u0005O(\u0002\u013a",
    "\u0139\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b",
    "\u013c\u0003\u0002\u0002\u0002\u013c\u013e\u0005M\'\u0002\u013d\u013a",
    "\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013eL",
    "\u0003\u0002\u0002\u0002\u013f\u0140\t\r\u0002\u0002\u0140N\u0003\u0002",
    "\u0002\u0002\u0141\u0143\u0005Q)\u0002\u0142\u0141\u0003\u0002\u0002",
    "\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145P\u0003\u0002\u0002",
    "\u0002\u0146\u0149\u0005M\'\u0002\u0147\u0149\u0007a\u0002\u0002\u0148",
    "\u0146\u0003\u0002\u0002\u0002\u0148\u0147\u0003\u0002\u0002\u0002\u0149",
    "R\u0003\u0002\u0002\u0002\u014a\u014b\u0007.\u0002\u0002\u014bT\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0007*\u0002\u0002\u014dV\u0003\u0002",
    "\u0002\u0002\u014e\u014f\u0007+\u0002\u0002\u014fX\u0003\u0002\u0002",
    "\u0002\u0150\u0151\u0007?\u0002\u0002\u0151Z\u0003\u0002\u0002\u0002",
    "\u0152\u0153\u0007-\u0002\u0002\u0153\\\u0003\u0002\u0002\u0002\u0154",
    "\u0155\u0007/\u0002\u0002\u0155^\u0003\u0002\u0002\u0002\u0156\u0157",
    "\u0007,\u0002\u0002\u0157`\u0003\u0002\u0002\u0002\u0158\u0159\u0007",
    "1\u0002\u0002\u0159b\u0003\u0002\u0002\u0002\u015a\u015b\u0007\'\u0002",
    "\u0002\u015bd\u0003\u0002\u0002\u0002\u015c\u015d\u0007(\u0002\u0002",
    "\u015df\u0003\u0002\u0002\u0002\u015e\u015f\u0007~\u0002\u0002\u015f",
    "h\u0003\u0002\u0002\u0002\u0160\u0161\u0007`\u0002\u0002\u0161j\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0007>\u0002\u0002\u0163\u0164\u0007",
    ">\u0002\u0002\u0164l\u0003\u0002\u0002\u0002\u0165\u0166\u0007@\u0002",
    "\u0002\u0166\u0167\u0007@\u0002\u0002\u0167n\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0007-\u0002\u0002\u0169\u016a\u0007?\u0002\u0002\u016a",
    "p\u0003\u0002\u0002\u0002\u016b\u016c\u0007/\u0002\u0002\u016c\u016d",
    "\u0007?\u0002\u0002\u016dr\u0003\u0002\u0002\u0002\u016e\u016f\u0007",
    ",\u0002\u0002\u016f\u0170\u0007?\u0002\u0002\u0170t\u0003\u0002\u0002",
    "\u0002\u0171\u0172\u00071\u0002\u0002\u0172\u0173\u0007?\u0002\u0002",
    "\u0173v\u0003\u0002\u0002\u0002\u0174\u0175\u0007\'\u0002\u0002\u0175",
    "\u0176\u0007?\u0002\u0002\u0176x\u0003\u0002\u0002\u0002\u0177\u0178",
    "\u0007(\u0002\u0002\u0178\u0179\u0007?\u0002\u0002\u0179z\u0003\u0002",
    "\u0002\u0002\u017a\u017b\u0007~\u0002\u0002\u017b\u017c\u0007?\u0002",
    "\u0002\u017c|\u0003\u0002\u0002\u0002\u017d\u017e\u0007`\u0002\u0002",
    "\u017e\u017f\u0007?\u0002\u0002\u017f~\u0003\u0002\u0002\u0002\u0180",
    "\u0181\u0007>\u0002\u0002\u0181\u0182\u0007>\u0002\u0002\u0182\u0183",
    "\u0007?\u0002\u0002\u0183\u0080\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0007@\u0002\u0002\u0185\u0186\u0007@\u0002\u0002\u0186\u0187\u0007",
    "?\u0002\u0002\u0187\u0082\u0003\u0002\u0002\u0002\u0188\u018c\t\u000e",
    "\u0002\u0002\u0189\u018b\t\u000f\u0002\u0002\u018a\u0189\u0003\u0002",
    "\u0002\u0002\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002",
    "\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u0084\u0003\u0002",
    "\u0002\u0002\u018e\u018c\u0003\u0002\u0002\u0002\u018f\u0191\t\u0010",
    "\u0002\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002",
    "\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0193\u0003\u0002",
    "\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0195\bC\u0002",
    "\u0002\u0195\u0086\u0003\u0002\u0002\u0002\u0196\u0198\u0007\u000f\u0002",
    "\u0002\u0197\u0196\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002",
    "\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019a\u0007\f\u0002",
    "\u0002\u019a\u0088\u0003\u0002\u0002\u0002%\u0002\u00a4\u00aa\u00b5",
    "\u00b8\u00bd\u00c2\u00ca\u00d5\u00d8\u00dc\u00e6\u00eb\u00ed\u00f1\u00f4",
    "\u00f8\u00ff\u0103\u0108\u010e\u0111\u0118\u011c\u0124\u0127\u012e\u0132",
    "\u013a\u013d\u0144\u0148\u018c\u0192\u0197\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function rcLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

rcLexer.prototype = Object.create(antlr4.Lexer.prototype);
rcLexer.prototype.constructor = rcLexer;

Object.defineProperty(rcLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

rcLexer.EOF = antlr4.Token.EOF;
rcLexer.T__0 = 1;
rcLexer.T__1 = 2;
rcLexer.T__2 = 3;
rcLexer.T__3 = 4;
rcLexer.T__4 = 5;
rcLexer.DateLiteral = 6;
rcLexer.IntegerLiteral = 7;
rcLexer.FloatingPointLiteral = 8;
rcLexer.Comma = 9;
rcLexer.LParen = 10;
rcLexer.RParen = 11;
rcLexer.Assign = 12;
rcLexer.Add = 13;
rcLexer.Sub = 14;
rcLexer.Mul = 15;
rcLexer.Div = 16;
rcLexer.Mod = 17;
rcLexer.BitAnd = 18;
rcLexer.BitOr = 19;
rcLexer.Caret = 20;
rcLexer.LShift = 21;
rcLexer.RShift = 22;
rcLexer.Add_Assign = 23;
rcLexer.Sub_Assign = 24;
rcLexer.Mul_Assign = 25;
rcLexer.Div_Assign = 26;
rcLexer.Mod_Assign = 27;
rcLexer.And_Assign = 28;
rcLexer.Or_Assign = 29;
rcLexer.XOr_Assign = 30;
rcLexer.LShift_Assign = 31;
rcLexer.RShift_Assign = 32;
rcLexer.Identifier = 33;
rcLexer.WhiteSpaces = 34;
rcLexer.LineBreak = 35;

rcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

rcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

rcLexer.prototype.literalNames = [ null, "'#'", "'y'", "'m'", "'w'", "'d'", 
                                   null, null, null, "','", "'('", "')'", 
                                   "'='", "'+'", "'-'", "'*'", "'/'", "'%'", 
                                   "'&'", "'|'", "'^'", "'<<'", "'>>'", 
                                   "'+='", "'-='", "'*='", "'/='", "'%='", 
                                   "'&='", "'|='", "'^='", "'<<='", "'>>='" ];

rcLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                    "DateLiteral", "IntegerLiteral", "FloatingPointLiteral", 
                                    "Comma", "LParen", "RParen", "Assign", 
                                    "Add", "Sub", "Mul", "Div", "Mod", "BitAnd", 
                                    "BitOr", "Caret", "LShift", "RShift", 
                                    "Add_Assign", "Sub_Assign", "Mul_Assign", 
                                    "Div_Assign", "Mod_Assign", "And_Assign", 
                                    "Or_Assign", "XOr_Assign", "LShift_Assign", 
                                    "RShift_Assign", "Identifier", "WhiteSpaces", 
                                    "LineBreak" ];

rcLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                "DateLiteral", "IntegerLiteral", "FloatingPointLiteral", 
                                "HexNumeral", "DecimalFloatingPointLiteral", 
                                "ExponentPart", "ExponentIndicator", "SignedInteger", 
                                "Sign", "HexadecimalFloatingPointLiteral", 
                                "HexSignificand", "BinaryExponent", "BinaryExponentIndicator", 
                                "DecimalIntegerLiteral", "Digits", "Digit", 
                                "NonZeroDigit", "DigitsAndUnderscores", 
                                "DigitOrUnderscore", "Underscores", "HexIntegerLiteral", 
                                "HexDigits", "HexDigit", "HexDigitsAndUnderscores", 
                                "HexDigitOrUnderscore", "OctalIntegerLiteral", 
                                "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
                                "OctalDigitOrUnderscore", "BinaryIntegerLiteral", 
                                "BinaryDigits", "BinaryDigit", "BinaryDigitsAndUnderscores", 
                                "BinaryDigitOrUnderscore", "Comma", "LParen", 
                                "RParen", "Assign", "Add", "Sub", "Mul", 
                                "Div", "Mod", "BitAnd", "BitOr", "Caret", 
                                "LShift", "RShift", "Add_Assign", "Sub_Assign", 
                                "Mul_Assign", "Div_Assign", "Mod_Assign", 
                                "And_Assign", "Or_Assign", "XOr_Assign", 
                                "LShift_Assign", "RShift_Assign", "Identifier", 
                                "WhiteSpaces", "LineBreak" ];

rcLexer.prototype.grammarFileName = "rc.g4";


exports.rcLexer = rcLexer;

