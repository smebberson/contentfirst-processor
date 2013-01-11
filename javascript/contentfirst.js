(function() {
  var extend = function (destination, source) {
    if (!destination || !source) return destination;
    for (var key in source) {
      if (destination[key] !== source[key])
        destination[key] = source[key];
    }
    return destination;
  };
  
  var find = function (root, objectName) {
    var parts = objectName.split('.'),
        part;
    
    while (part = parts.shift()) {
      root = root[part];
      if (root === undefined)
        throw new Error('Cannot find object named ' + objectName);
    }
    return root;
  };
  
  var formatError = function (error) {
    var lines  = error.input.split(/\n/g),
        lineNo = 0,
        offset = 0;
    
    while (offset < error.offset + 1) {
      offset += lines[lineNo].length + 1;
      lineNo += 1;
    }
    var message = 'Line ' + lineNo + ': expected ' + error.expected + '\n',
        line    = lines[lineNo - 1];
    
    message += line + '\n';
    offset  -= line.length + 1;
    
    while (offset < error.offset) {
      message += ' ';
      offset  += 1;
    }
    return message + '^';
  };
  
  var Grammar = {
    __consume__document: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["document"] = this._nodeCache["document"] || {};
      var cached = this._nodeCache["document"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 0, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var index2 = this._offset;
        address1 = this.__consume__doctype();
        if (address1) {
        } else {
          this._offset = index2;
          address1 = this.__consume__text();
          if (address1) {
          } else {
            this._offset = index2;
            address1 = this.__consume__excludeTag();
            if (address1) {
            } else {
              this._offset = index2;
              address1 = this.__consume__includeTag();
              if (address1) {
              } else {
                this._offset = index2;
                address1 = this.__consume__genericTag();
                if (address1) {
                } else {
                  this._offset = index2;
                }
              }
            }
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address0 = new klass0(text0, this._offset, elements0);
        if (typeof type0 === "object") {
          extend(address0, type0);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["document"][index0] = address0;
    },
    __consume__excludeTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["excludeTag"] = this._nodeCache["excludeTag"] || {};
      var cached = this._nodeCache["excludeTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      address1 = this.__consume__excludeOpenTag();
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        labelled0.excludeOpenTag = address1;
        var address2 = null;
        var remaining0 = 0, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var index3 = this._offset;
          address3 = this.__consume__text();
          if (address3) {
          } else {
            this._offset = index3;
            address3 = this.__consume__genericTag();
            if (address3) {
            } else {
              this._offset = index3;
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address2 = new klass0(text1, this._offset, elements1);
          if (typeof type0 === "object") {
            extend(address2, type0);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address4 = null;
          address4 = this.__consume__excludeCloseTag();
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
            labelled0.excludeCloseTag = address4;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0, labelled0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["excludeTag"][index0] = address0;
    },
    __consume__excludeOpenTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["excludeOpenTag"] = this._nodeCache["excludeOpenTag"] || {};
      var cached = this._nodeCache["excludeOpenTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 3);
      } else {
        slice0 = null;
      }
      if (slice0 === "<ef") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("<ef", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 3;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"<ef\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume__cfAttributeList();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0.cfAttributeList = address2;
          var address3 = null;
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 === ">") {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1(">", this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\">\""};
            }
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass2 = this.constructor.SyntaxNode;
        var type2 = null;
        address0 = new klass2(text0, this._offset, elements0, labelled0);
        if (typeof type2 === "object") {
          extend(address0, type2);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["excludeOpenTag"][index0] = address0;
    },
    __consume__excludeCloseTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["excludeCloseTag"] = this._nodeCache["excludeCloseTag"] || {};
      var cached = this._nodeCache["excludeCloseTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 5);
      } else {
        slice0 = null;
      }
      if (slice0 === "</ef>") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address0 = new klass0("</ef>", this._offset, []);
        if (typeof type0 === "object") {
          extend(address0, type0);
        }
        this._offset += 5;
      } else {
        address0 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"</ef>\""};
        }
      }
      return this._nodeCache["excludeCloseTag"][index0] = address0;
    },
    __consume__includeTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["includeTag"] = this._nodeCache["includeTag"] || {};
      var cached = this._nodeCache["includeTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      address1 = this.__consume__includeOpenTag();
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        labelled0.includeOpenTag = address1;
        var address2 = null;
        var remaining0 = 0, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var index3 = this._offset;
          address3 = this.__consume__text();
          if (address3) {
          } else {
            this._offset = index3;
            address3 = this.__consume__genericTag();
            if (address3) {
            } else {
              this._offset = index3;
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address2 = new klass0(text1, this._offset, elements1);
          if (typeof type0 === "object") {
            extend(address2, type0);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address4 = null;
          address4 = this.__consume__includeCloseTag();
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
            labelled0.includeCloseTag = address4;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0, labelled0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["includeTag"][index0] = address0;
    },
    __consume__includeOpenTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["includeOpenTag"] = this._nodeCache["includeOpenTag"] || {};
      var cached = this._nodeCache["includeOpenTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 3);
      } else {
        slice0 = null;
      }
      if (slice0 === "<ii") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("<ii", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 3;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"<ii\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume__space();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0.space = address2;
          var address3 = null;
          var index2 = this._offset;
          address3 = this.__consume__platformAttribute();
          if (address3) {
          } else {
            this._offset = index2;
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1("", this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 0;
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            var address4 = null;
            address4 = this.__consume__space();
            if (address4) {
              elements0.push(address4);
              text0 += address4.textValue;
              labelled0.space = address4;
              var address5 = null;
              var index3 = this._offset;
              address5 = this.__consume__contextAttribute();
              if (address5) {
              } else {
                this._offset = index3;
                var klass2 = this.constructor.SyntaxNode;
                var type2 = null;
                address5 = new klass2("", this._offset, []);
                if (typeof type2 === "object") {
                  extend(address5, type2);
                }
                this._offset += 0;
              }
              if (address5) {
                elements0.push(address5);
                text0 += address5.textValue;
                var address6 = null;
                address6 = this.__consume__space();
                if (address6) {
                  elements0.push(address6);
                  text0 += address6.textValue;
                  labelled0.space = address6;
                  var address7 = null;
                  var slice2 = null;
                  if (this._input.length > this._offset) {
                    slice2 = this._input.substring(this._offset, this._offset + 1);
                  } else {
                    slice2 = null;
                  }
                  if (slice2 === ">") {
                    var klass3 = this.constructor.SyntaxNode;
                    var type3 = null;
                    address7 = new klass3(">", this._offset, []);
                    if (typeof type3 === "object") {
                      extend(address7, type3);
                    }
                    this._offset += 1;
                  } else {
                    address7 = null;
                    var slice3 = null;
                    if (this._input.length > this._offset) {
                      slice3 = this._input.substring(this._offset, this._offset + 1);
                    } else {
                      slice3 = null;
                    }
                    if (!this.error || this.error.offset <= this._offset) {
                      this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\">\""};
                    }
                  }
                  if (address7) {
                    elements0.push(address7);
                    text0 += address7.textValue;
                  } else {
                    elements0 = null;
                    this._offset = index1;
                  }
                } else {
                  elements0 = null;
                  this._offset = index1;
                }
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass4 = this.constructor.SyntaxNode;
        var type4 = null;
        address0 = new klass4(text0, this._offset, elements0, labelled0);
        if (typeof type4 === "object") {
          extend(address0, type4);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["includeOpenTag"][index0] = address0;
    },
    __consume__includeCloseTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["includeCloseTag"] = this._nodeCache["includeCloseTag"] || {};
      var cached = this._nodeCache["includeCloseTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 5);
      } else {
        slice0 = null;
      }
      if (slice0 === "</ii>") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address0 = new klass0("</ii>", this._offset, []);
        if (typeof type0 === "object") {
          extend(address0, type0);
        }
        this._offset += 5;
      } else {
        address0 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"</ii>\""};
        }
      }
      return this._nodeCache["includeCloseTag"][index0] = address0;
    },
    __consume__cfAttributeList: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["cfAttributeList"] = this._nodeCache["cfAttributeList"] || {};
      var cached = this._nodeCache["cfAttributeList"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      address1 = this.__consume__space();
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        labelled0.space = address1;
        var address2 = null;
        var index2 = this._offset;
        address2 = this.__consume__contextAttribute();
        if (address2) {
        } else {
          this._offset = index2;
          address2 = this.__consume__platformAttribute();
          if (address2) {
          } else {
            this._offset = index2;
          }
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address3 = null;
          var index3 = this._offset;
          address3 = this.__consume__cfAttributeList();
          if (address3) {
          } else {
            this._offset = index3;
            var klass0 = this.constructor.SyntaxNode;
            var type0 = null;
            address3 = new klass0("", this._offset, []);
            if (typeof type0 === "object") {
              extend(address3, type0);
            }
            this._offset += 0;
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0, labelled0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["cfAttributeList"][index0] = address0;
    },
    __consume__genericTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["genericTag"] = this._nodeCache["genericTag"] || {};
      var cached = this._nodeCache["genericTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      address1 = this.__consume__openTag();
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        labelled0.openTag = address1;
        var address2 = null;
        var remaining0 = 0, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var index3 = this._offset;
          address3 = this.__consume__text();
          if (address3) {
          } else {
            this._offset = index3;
            address3 = this.__consume__genericTag();
            if (address3) {
            } else {
              this._offset = index3;
              address3 = this.__consume__excludeTag();
              if (address3) {
              } else {
                this._offset = index3;
                address3 = this.__consume__includeTag();
                if (address3) {
                } else {
                  this._offset = index3;
                }
              }
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address2 = new klass0(text1, this._offset, elements1);
          if (typeof type0 === "object") {
            extend(address2, type0);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address4 = null;
          address4 = this.__consume__closeTag();
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
            labelled0.closeTag = address4;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0, labelled0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["genericTag"][index0] = address0;
    },
    __consume__openTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["openTag"] = this._nodeCache["openTag"] || {};
      var cached = this._nodeCache["openTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "<") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("<", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"<\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var index2 = this._offset;
        var index3 = this._offset;
        var slice2 = null;
        if (this._input.length > this._offset) {
          slice2 = this._input.substring(this._offset, this._offset + 2);
        } else {
          slice2 = null;
        }
        if (slice2 === "ef") {
          var klass1 = this.constructor.SyntaxNode;
          var type1 = null;
          address2 = new klass1("ef", this._offset, []);
          if (typeof type1 === "object") {
            extend(address2, type1);
          }
          this._offset += 2;
        } else {
          address2 = null;
          var slice3 = null;
          if (this._input.length > this._offset) {
            slice3 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice3 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"ef\""};
          }
        }
        if (address2) {
        } else {
          this._offset = index3;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 2);
          } else {
            slice4 = null;
          }
          if (slice4 === "ii") {
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address2 = new klass2("ii", this._offset, []);
            if (typeof type2 === "object") {
              extend(address2, type2);
            }
            this._offset += 2;
          } else {
            address2 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"ii\""};
            }
          }
          if (address2) {
          } else {
            this._offset = index3;
          }
        }
        this._offset = index2;
        if (!(address2)) {
          var klass3 = this.constructor.SyntaxNode;
          var type3 = null;
          address2 = new klass3("", this._offset, []);
          if (typeof type3 === "object") {
            extend(address2, type3);
          }
          this._offset += 0;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address3 = null;
          address3 = this.__consume__name();
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            labelled0.name = address3;
            var address4 = null;
            address4 = this.__consume__attributeList();
            if (address4) {
              elements0.push(address4);
              text0 += address4.textValue;
              labelled0.attributeList = address4;
              var address5 = null;
              var slice6 = null;
              if (this._input.length > this._offset) {
                slice6 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice6 = null;
              }
              if (slice6 === ">") {
                var klass4 = this.constructor.SyntaxNode;
                var type4 = null;
                address5 = new klass4(">", this._offset, []);
                if (typeof type4 === "object") {
                  extend(address5, type4);
                }
                this._offset += 1;
              } else {
                address5 = null;
                var slice7 = null;
                if (this._input.length > this._offset) {
                  slice7 = this._input.substring(this._offset, this._offset + 1);
                } else {
                  slice7 = null;
                }
                if (!this.error || this.error.offset <= this._offset) {
                  this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\">\""};
                }
              }
              if (address5) {
                elements0.push(address5);
                text0 += address5.textValue;
              } else {
                elements0 = null;
                this._offset = index1;
              }
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass5 = this.constructor.SyntaxNode;
        var type5 = null;
        address0 = new klass5(text0, this._offset, elements0, labelled0);
        if (typeof type5 === "object") {
          extend(address0, type5);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["openTag"][index0] = address0;
    },
    __consume__closeTag: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["closeTag"] = this._nodeCache["closeTag"] || {};
      var cached = this._nodeCache["closeTag"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 2);
      } else {
        slice0 = null;
      }
      if (slice0 === "</") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("</", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 2;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"</\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var index2 = this._offset;
        var index3 = this._offset;
        var slice2 = null;
        if (this._input.length > this._offset) {
          slice2 = this._input.substring(this._offset, this._offset + 2);
        } else {
          slice2 = null;
        }
        if (slice2 === "ef") {
          var klass1 = this.constructor.SyntaxNode;
          var type1 = null;
          address2 = new klass1("ef", this._offset, []);
          if (typeof type1 === "object") {
            extend(address2, type1);
          }
          this._offset += 2;
        } else {
          address2 = null;
          var slice3 = null;
          if (this._input.length > this._offset) {
            slice3 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice3 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"ef\""};
          }
        }
        if (address2) {
        } else {
          this._offset = index3;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 2);
          } else {
            slice4 = null;
          }
          if (slice4 === "ii") {
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address2 = new klass2("ii", this._offset, []);
            if (typeof type2 === "object") {
              extend(address2, type2);
            }
            this._offset += 2;
          } else {
            address2 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"ii\""};
            }
          }
          if (address2) {
          } else {
            this._offset = index3;
          }
        }
        this._offset = index2;
        if (!(address2)) {
          var klass3 = this.constructor.SyntaxNode;
          var type3 = null;
          address2 = new klass3("", this._offset, []);
          if (typeof type3 === "object") {
            extend(address2, type3);
          }
          this._offset += 0;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address3 = null;
          var remaining0 = 1, index4 = this._offset, elements1 = [], text1 = "", address4 = true;
          while (address4) {
            var slice6 = null;
            if (this._input.length > this._offset) {
              slice6 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice6 = null;
            }
            if (slice6 && /^[a-zA-Z0-9]/.test(slice6)) {
              var klass4 = this.constructor.SyntaxNode;
              var type4 = null;
              address4 = new klass4(slice6, this._offset, []);
              if (typeof type4 === "object") {
                extend(address4, type4);
              }
              this._offset += 1;
            } else {
              address4 = null;
              var slice7 = null;
              if (this._input.length > this._offset) {
                slice7 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice7 = null;
              }
              if (!this.error || this.error.offset <= this._offset) {
                this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[a-zA-Z0-9]"};
              }
            }
            if (address4) {
              elements1.push(address4);
              text1 += address4.textValue;
              remaining0 -= 1;
            }
          }
          if (remaining0 <= 0) {
            this._offset = index4;
            var klass5 = this.constructor.SyntaxNode;
            var type5 = null;
            address3 = new klass5(text1, this._offset, elements1);
            if (typeof type5 === "object") {
              extend(address3, type5);
            }
            this._offset += text1.length;
          } else {
            address3 = null;
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
            var address5 = null;
            var slice8 = null;
            if (this._input.length > this._offset) {
              slice8 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice8 = null;
            }
            if (slice8 === ">") {
              var klass6 = this.constructor.SyntaxNode;
              var type6 = null;
              address5 = new klass6(">", this._offset, []);
              if (typeof type6 === "object") {
                extend(address5, type6);
              }
              this._offset += 1;
            } else {
              address5 = null;
              var slice9 = null;
              if (this._input.length > this._offset) {
                slice9 = this._input.substring(this._offset, this._offset + 1);
              } else {
                slice9 = null;
              }
              if (!this.error || this.error.offset <= this._offset) {
                this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\">\""};
              }
            }
            if (address5) {
              elements0.push(address5);
              text0 += address5.textValue;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass7 = this.constructor.SyntaxNode;
        var type7 = null;
        address0 = new klass7(text0, this._offset, elements0, labelled0);
        if (typeof type7 === "object") {
          extend(address0, type7);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["closeTag"][index0] = address0;
    },
    __consume__contextAttribute: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["contextAttribute"] = this._nodeCache["contextAttribute"] || {};
      var cached = this._nodeCache["contextAttribute"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 9);
      } else {
        slice0 = null;
      }
      if (slice0 === "context=\"") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("context=\"", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 9;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"context=\\\"\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume__attributeContent();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0.attributeContent = address2;
          var address3 = null;
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 === "\"") {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1("\"", this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
            }
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass2 = this.constructor.SyntaxNode;
        var type2 = null;
        address0 = new klass2(text0, this._offset, elements0, labelled0);
        if (typeof type2 === "object") {
          extend(address0, type2);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["contextAttribute"][index0] = address0;
    },
    __consume__platformAttribute: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["platformAttribute"] = this._nodeCache["platformAttribute"] || {};
      var cached = this._nodeCache["platformAttribute"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 10);
      } else {
        slice0 = null;
      }
      if (slice0 === "platform=\"") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("platform=\"", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 10;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"platform=\\\"\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        address2 = this.__consume__attributeContent();
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          labelled0.attributeContent = address2;
          var address3 = null;
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 === "\"") {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1("\"", this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
            }
          }
          if (address3) {
            elements0.push(address3);
            text0 += address3.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass2 = this.constructor.SyntaxNode;
        var type2 = null;
        address0 = new klass2(text0, this._offset, elements0, labelled0);
        if (typeof type2 === "object") {
          extend(address0, type2);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["platformAttribute"][index0] = address0;
    },
    __consume__attributeContent: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["attributeContent"] = this._nodeCache["attributeContent"] || {};
      var cached = this._nodeCache["attributeContent"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 1, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[a-zA-Z,]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address1 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address1, type0);
          }
          this._offset += 1;
        } else {
          address1 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[a-zA-Z,]"};
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["attributeContent"][index0] = address0;
    },
    __consume__attributeList: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["attributeList"] = this._nodeCache["attributeList"] || {};
      var cached = this._nodeCache["attributeList"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 0, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        address1 = this.__consume__attribute();
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address0 = new klass0(text0, this._offset, elements0);
        if (typeof type0 === "object") {
          extend(address0, type0);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["attributeList"][index0] = address0;
    },
    __consume__attribute: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["attribute"] = this._nodeCache["attribute"] || {};
      var cached = this._nodeCache["attribute"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var remaining0 = 1, index2 = this._offset, elements1 = [], text1 = "", address2 = true;
      while (address2) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[\s]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address2 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address2, type0);
          }
          this._offset += 1;
        } else {
          address2 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[\\s]"};
          }
        }
        if (address2) {
          elements1.push(address2);
          text1 += address2.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index2;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address1 = new klass1(text1, this._offset, elements1);
        if (typeof type1 === "object") {
          extend(address1, type1);
        }
        this._offset += text1.length;
      } else {
        address1 = null;
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address3 = null;
        address3 = this.__consume__name();
        if (address3) {
          elements0.push(address3);
          text0 += address3.textValue;
          labelled0.name = address3;
          var address4 = null;
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 === "=") {
            var klass2 = this.constructor.SyntaxNode;
            var type2 = null;
            address4 = new klass2("=", this._offset, []);
            if (typeof type2 === "object") {
              extend(address4, type2);
            }
            this._offset += 1;
          } else {
            address4 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"=\""};
            }
          }
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
            var address5 = null;
            address5 = this.__consume__quotedValue();
            if (address5) {
              elements0.push(address5);
              text0 += address5.textValue;
              labelled0.quotedValue = address5;
            } else {
              elements0 = null;
              this._offset = index1;
            }
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass3 = this.constructor.SyntaxNode;
        var type3 = null;
        address0 = new klass3(text0, this._offset, elements0, labelled0);
        if (typeof type3 === "object") {
          extend(address0, type3);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["attribute"][index0] = address0;
    },
    __consume__name: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["name"] = this._nodeCache["name"] || {};
      var cached = this._nodeCache["name"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 1, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[A-Za-z0-9]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address1 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address1, type0);
          }
          this._offset += 1;
        } else {
          address1 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[A-Za-z0-9]"};
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["name"][index0] = address0;
    },
    __consume__quotedValue: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["quotedValue"] = this._nodeCache["quotedValue"] || {};
      var cached = this._nodeCache["quotedValue"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 1);
      } else {
        slice0 = null;
      }
      if (slice0 === "\"") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("\"", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 1;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var remaining0 = 0, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 && /^[^"]/.test(slice2)) {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1(slice2, this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[^\"]"};
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass2 = this.constructor.SyntaxNode;
          var type2 = null;
          address2 = new klass2(text1, this._offset, elements1);
          if (typeof type2 === "object") {
            extend(address2, type2);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address4 = null;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice4 = null;
          }
          if (slice4 === "\"") {
            var klass3 = this.constructor.SyntaxNode;
            var type3 = null;
            address4 = new klass3("\"", this._offset, []);
            if (typeof type3 === "object") {
              extend(address4, type3);
            }
            this._offset += 1;
          } else {
            address4 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"\\\"\""};
            }
          }
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass4 = this.constructor.SyntaxNode;
        var type4 = null;
        address0 = new klass4(text0, this._offset, elements0, labelled0);
        if (typeof type4 === "object") {
          extend(address0, type4);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["quotedValue"][index0] = address0;
    },
    __consume__space: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["space"] = this._nodeCache["space"] || {};
      var cached = this._nodeCache["space"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 0, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[ ]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address1 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address1, type0);
          }
          this._offset += 1;
        } else {
          address1 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[ ]"};
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["space"][index0] = address0;
    },
    __consume__text: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["text"] = this._nodeCache["text"] || {};
      var cached = this._nodeCache["text"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var remaining0 = 1, index1 = this._offset, elements0 = [], text0 = "", address1 = true;
      while (address1) {
        var slice0 = null;
        if (this._input.length > this._offset) {
          slice0 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice0 = null;
        }
        if (slice0 && /^[^<]/.test(slice0)) {
          var klass0 = this.constructor.SyntaxNode;
          var type0 = null;
          address1 = new klass0(slice0, this._offset, []);
          if (typeof type0 === "object") {
            extend(address1, type0);
          }
          this._offset += 1;
        } else {
          address1 = null;
          var slice1 = null;
          if (this._input.length > this._offset) {
            slice1 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice1 = null;
          }
          if (!this.error || this.error.offset <= this._offset) {
            this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[^<]"};
          }
        }
        if (address1) {
          elements0.push(address1);
          text0 += address1.textValue;
          remaining0 -= 1;
        }
      }
      if (remaining0 <= 0) {
        this._offset = index1;
        var klass1 = this.constructor.SyntaxNode;
        var type1 = null;
        address0 = new klass1(text0, this._offset, elements0);
        if (typeof type1 === "object") {
          extend(address0, type1);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["text"][index0] = address0;
    },
    __consume__doctype: function(input) {
      var address0 = null, index0 = this._offset;
      this._nodeCache["doctype"] = this._nodeCache["doctype"] || {};
      var cached = this._nodeCache["doctype"][index0];
      if (cached) {
        this._offset += cached.textValue.length;
        return cached;
      }
      var index1 = this._offset, elements0 = [], labelled0 = {}, text0 = "";
      var address1 = null;
      var slice0 = null;
      if (this._input.length > this._offset) {
        slice0 = this._input.substring(this._offset, this._offset + 10);
      } else {
        slice0 = null;
      }
      if (slice0 === "<!DOCTYPE ") {
        var klass0 = this.constructor.SyntaxNode;
        var type0 = null;
        address1 = new klass0("<!DOCTYPE ", this._offset, []);
        if (typeof type0 === "object") {
          extend(address1, type0);
        }
        this._offset += 10;
      } else {
        address1 = null;
        var slice1 = null;
        if (this._input.length > this._offset) {
          slice1 = this._input.substring(this._offset, this._offset + 1);
        } else {
          slice1 = null;
        }
        if (!this.error || this.error.offset <= this._offset) {
          this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\"<!DOCTYPE \""};
        }
      }
      if (address1) {
        elements0.push(address1);
        text0 += address1.textValue;
        var address2 = null;
        var remaining0 = 1, index2 = this._offset, elements1 = [], text1 = "", address3 = true;
        while (address3) {
          var slice2 = null;
          if (this._input.length > this._offset) {
            slice2 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice2 = null;
          }
          if (slice2 && /^[a-zA-Z0-9]/.test(slice2)) {
            var klass1 = this.constructor.SyntaxNode;
            var type1 = null;
            address3 = new klass1(slice2, this._offset, []);
            if (typeof type1 === "object") {
              extend(address3, type1);
            }
            this._offset += 1;
          } else {
            address3 = null;
            var slice3 = null;
            if (this._input.length > this._offset) {
              slice3 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice3 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "[a-zA-Z0-9]"};
            }
          }
          if (address3) {
            elements1.push(address3);
            text1 += address3.textValue;
            remaining0 -= 1;
          }
        }
        if (remaining0 <= 0) {
          this._offset = index2;
          var klass2 = this.constructor.SyntaxNode;
          var type2 = null;
          address2 = new klass2(text1, this._offset, elements1);
          if (typeof type2 === "object") {
            extend(address2, type2);
          }
          this._offset += text1.length;
        } else {
          address2 = null;
        }
        if (address2) {
          elements0.push(address2);
          text0 += address2.textValue;
          var address4 = null;
          var slice4 = null;
          if (this._input.length > this._offset) {
            slice4 = this._input.substring(this._offset, this._offset + 1);
          } else {
            slice4 = null;
          }
          if (slice4 === ">") {
            var klass3 = this.constructor.SyntaxNode;
            var type3 = null;
            address4 = new klass3(">", this._offset, []);
            if (typeof type3 === "object") {
              extend(address4, type3);
            }
            this._offset += 1;
          } else {
            address4 = null;
            var slice5 = null;
            if (this._input.length > this._offset) {
              slice5 = this._input.substring(this._offset, this._offset + 1);
            } else {
              slice5 = null;
            }
            if (!this.error || this.error.offset <= this._offset) {
              this.error = this.constructor.lastError = {input: this._input, offset: this._offset, expected: "\">\""};
            }
          }
          if (address4) {
            elements0.push(address4);
            text0 += address4.textValue;
          } else {
            elements0 = null;
            this._offset = index1;
          }
        } else {
          elements0 = null;
          this._offset = index1;
        }
      } else {
        elements0 = null;
        this._offset = index1;
      }
      if (elements0) {
        this._offset = index1;
        var klass4 = this.constructor.SyntaxNode;
        var type4 = null;
        address0 = new klass4(text0, this._offset, elements0, labelled0);
        if (typeof type4 === "object") {
          extend(address0, type4);
        }
        this._offset += text0.length;
      } else {
        address0 = null;
      }
      return this._nodeCache["doctype"][index0] = address0;
    }
  };
  
  var Parser = function(input) {
    this._input = input;
    this._offset = 0;
    this._nodeCache = {};
  };
  
  Parser.prototype.parse = function() {
    var result = this.__consume__document();
    if (result && this._offset === this._input.length) {
      return result;
    }
    if (!(this.error)) {
      this.error = {input: this._input, offset: this._offset, expected: "<EOF>"};
    }
    var message = formatError(this.error);
    var error = new Error(message);
    throw error;
  };
  
  Parser.parse = function(input) {
    var parser = new Parser(input);
    return parser.parse();
  };
  
  extend(Parser.prototype, Grammar);
  
  var SyntaxNode = function(textValue, offset, elements, properties) {
    this.textValue = textValue;
    this.offset    = offset;
    this.elements  = elements || [];
    if (!properties) return;
    for (var key in properties) this[key] = properties[key];
  };
  
  SyntaxNode.prototype.forEach = function(block, context) {
    for (var i = 0, n = this.elements.length; i < n; i++) {
      block.call(context, this.elements[i], i);
    }
  };
  
  Parser.SyntaxNode = SyntaxNode;
  
  if (typeof require === "function" && typeof exports === "object") {
    exports.Grammar = Grammar;
    exports.Parser  = Parser;
    exports.parse   = Parser.parse;
    
  } else {
    var namespace = this;
    ContentFirst = Grammar;
    ContentFirstParser = Parser;
    ContentFirstParser.formatError = formatError;
  }
})();

