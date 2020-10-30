// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by rcParser.

function rcVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

rcVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
rcVisitor.prototype.constructor = rcVisitor;

// Visit a parse tree produced by rcParser#prog.
rcVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#statementList.
rcVisitor.prototype.visitStatementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#statement.
rcVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#value.
rcVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#expr.
rcVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#dateOp.
rcVisitor.prototype.visitDateOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#dateDiff.
rcVisitor.prototype.visitDateDiff = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#priorityDateDiff.
rcVisitor.prototype.visitPriorityDateDiff = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#funcInvo.
rcVisitor.prototype.visitFuncInvo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#priorityExpr.
rcVisitor.prototype.visitPriorityExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#assigExpr.
rcVisitor.prototype.visitAssigExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#args.
rcVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#varVal.
rcVisitor.prototype.visitVarVal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#negativeVal.
rcVisitor.prototype.visitNegativeVal = function(ctx) {
  return this.visitChildren(ctx);
};



exports.rcVisitor = rcVisitor;