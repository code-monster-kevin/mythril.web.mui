module.exports = (req, res) => {
  console.time('api:data:menuitems');
  let data = [];
  data.push([
    {
      id: '100001',
      name: 'Home Page',
      link: '/home',
      iconName: 'Home'
    },
    {
      id: '100002',
      name: 'Trending',
      link: '/trending',
      iconName: 'TrendingUp'
    },
    {
      id: '100003',
      name: 'Following',
      link: '/following',
      iconName: 'Subscriptions'
    }
  ]);
  res.end(JSON.stringify(data));
  console.timeEnd('api:data:menuitems');
};
