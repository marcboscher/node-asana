/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var Tags = require('../../lib/resources/tags');

describe('Tags', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var tags = new Tags(dispatcher);
      assert.equal(tags.dispatcher, dispatcher);
    });
  });

  describe('#create', function() {
    it('should handle the creation', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var data = {
        name: 'Test'
      };
      tags.create(data);
      assert(dispatcher.post.calledWithExactly('/tags', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/tags', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/tags', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tags.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/NaN/tags', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      tags.findAll();
      assert(dispatcher.get.calledWithExactly('/tags', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      tags.findAll(params);
      assert(dispatcher.get.calledWithExactly('/tags', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 1;
      tags.findById(id);
      assert(dispatcher.get.calledWithExactly('/tags/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tags.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tags/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tags.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tags/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tags.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/tags/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 1;
      tags.findByWorkspace(id);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/tags', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      tags.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/1/tags', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      tags.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/1/tags', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      tags.findByWorkspace(id, params);
      assert(dispatcher.get.calledWithExactly('/workspaces/NaN/tags', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tags/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tags/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var tags = new Tags(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      tags.update(id, data);
      assert(dispatcher.put.calledWithExactly('/tags/NaN', data));
    });
  });
});