import mockjs from 'mockjs';


const getProducts = function(req, res){
    const result = mockjs.mock({
      'list|40': [{ name: '@city', 'value|1-20': 2, 'type|0-2': 1 }],
      });
  
      setTimeout(() => {
        res.json(result);
      }, 1000);
  };

const addCart = function(req, res) {
    res.json({
      data: 'ok',
    });
  }

export default {
  getProducts,
  addCart,
}