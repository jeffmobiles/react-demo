
const mockjs = require('mockjs');

module.exports = function(req, res){
    const result = mockjs.mock({
      'list|40': [
        { name: '@city', 'value|1-10': 3, 'type|0-2': 1 }
      ],
      });
  
      setTimeout(() => {
        res.json(result);
      }, 1000);
};
