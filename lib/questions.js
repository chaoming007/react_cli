module.exports=[
    {
      type: 'input',
      name: 'name',
      message: "你的项目名字",
      default: function() {
        return 'react';
      }
    },
    {
      type: 'input',
      name: 'description',
      message: "你的项目描述",
      default: function() {
        return '这是一个react项目';
      }
    },
    {
        type: 'input',
        name: 'versions',
        message: "你的项目版本",
        default: function() {
          return '1.0.0';
        }
    },
    {
        type: 'input',
        name: 'author',
        message: "项目作者",
        default: function() {
          return '匿名';
        }
      }
]