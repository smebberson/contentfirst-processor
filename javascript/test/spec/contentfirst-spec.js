describe('content first', function () {

	describe("parser", function() {

		var html;
		var parser = function () {
			return ContentFirstParser.parse(html);
		}
		var getEl = function (id) {
			return document.getElementById(id).innerHTML;
		}

		afterEach(function () {
			html = '';
		});

		describe("should be able to", function() {

			describe("parse HTML", function() {

				it("with a doctype", function() {

					html = document.getElementById('basic-one-line-with-doctype').innerHTML;
					expect(parser).not.toThrow();

				});

				it("in one line", function() {

					html = document.getElementById('basic-one-line-without-doctype').innerHTML;
					expect(parser).not.toThrow();

				});

				it("in multiple lines", function() {

					html = document.getElementById('basic-over-multiple-lines').innerHTML;
					expect(parser).not.toThrow();

				});

				describe("with an exclude tag", function() {

					it("with a platform attribute of mobile", function() {
					  
						html = getEl('basic-with-exclude-platform-mobile');
						expect(parser).not.toThrow();

					});

					it("with a context attribute of knownuser", function() {
					  
						html = getEl('basic-with-exclude-context-knownuser');
						expect(parser).not.toThrow();

					});

				});

				describe("with an include tag", function() {

					it("with a platform attribute of mobile", function() {
					  
						html = getEl('basic-with-include-platform-mobile');
						expect(parser).not.toThrow();

					});

					it("with a context attribute of knownuser", function() {
					  
						html = getEl('basic-with-include-context-knownuser');
						expect(parser).not.toThrow();

					});
				  
				});
			  
			});

			describe("parse text", function() {

				it("in one line", function() {
			
					html = getEl('basic-text-one-line');
					expect(parser).not.toThrow();

				});

				it("in multiple lines", function() {
			
					html = getEl('basic-text-multiple-lines');
					expect(parser).not.toThrow();

				});

				it("with an exclude tag (platform attribute, mobile)", function() {
			
					html = getEl('basic-text-exclude-platform-mobile');
					expect(parser).not.toThrow();

				});

			});

		});

		describe("should not be able to", function() {

			it("parse non-valid HTML", function() {

				html = '<html><head></head><html>';
				expect(parser).toThrow();

			});

		});

	});

	describe("processor", function() {
	  
	});

});