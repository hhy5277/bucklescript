// GENERATED CODE BY BUCKLESCRIPT VERSION 0.6.2 , PLEASE EDIT WITH CARE
'use strict';

var Pervasives  = require("../pervasives");
var Caml_format = require("../caml_format");
var Lexing      = require("../lexing");
var Block       = require("../block");
var Curry       = require("../curry");

var __ocaml_lex_tables = /* record */[
  /* lex_base */"\0\0\xf6\xff\xf7\xff\xf8\xff\xf9\xff\xfa\xff\xfb\xff\xfc\xff:\0\x85\0\xff\xff",
  /* lex_backtrk */"\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\x01\0\xff\xff",
  /* lex_default */"\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0",
  /* lex_trans */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\n\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\x02\0\x05\0\x07\0\0\0\x06\0\0\0\x04\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* lex_check */"\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
  /* lex_base_code */"",
  /* lex_backtrk_code */"",
  /* lex_default_code */"",
  /* lex_trans_code */"",
  /* lex_check_code */"",
  /* lex_code */""
];

function lexeme(lexbuf) {
  return __ocaml_lex_lexeme_rec(lexbuf, 0);
}

function __ocaml_lex_lexeme_rec(lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    if (__ocaml_lex_state$1 > 9 || __ocaml_lex_state$1 < 0) {
      Curry._1(lexbuf[/* refill_buff */0], lexbuf);
      ___ocaml_lex_state = __ocaml_lex_state$1;
      continue ;
      
    }
    else {
      switch (__ocaml_lex_state$1) {
        case 0 : 
            ___ocaml_lex_state = 0;
            continue ;
            case 1 : 
            return /* NUMERAL */Block.__(0, [Caml_format.caml_int_of_string(Lexing.lexeme(lexbuf))]);
        case 2 : 
            return /* IDENT */Block.__(1, [Lexing.lexeme(lexbuf)]);
        case 3 : 
            return /* PLUS */0;
        case 4 : 
            return /* MINUS */1;
        case 5 : 
            return /* TIMES */2;
        case 6 : 
            return /* DIVIDE */3;
        case 7 : 
            return /* LPAREN */5;
        case 8 : 
            return /* RPAREN */6;
        case 9 : 
            return /* EOF */7;
        
      }
    }
  };
}

function str(e) {
  switch (e.tag | 0) {
    case 0 : 
        return Pervasives.string_of_float(e[0]);
    case 1 : 
        return str(e[0]) + ("+" + str(e[1]));
    case 2 : 
        return str(e[0]) + ("-" + str(e[1]));
    case 3 : 
        return str(e[0]) + ("*" + str(e[1]));
    case 4 : 
        return str(e[0]) + ("/" + str(e[1]));
    case 5 : 
        return "-" + str(e[0]);
    case 6 : 
        return e[0];
    
  }
}

exports.__ocaml_lex_tables     = __ocaml_lex_tables;
exports.lexeme                 = lexeme;
exports.__ocaml_lex_lexeme_rec = __ocaml_lex_lexeme_rec;
exports.str                    = str;
/* No side effect */