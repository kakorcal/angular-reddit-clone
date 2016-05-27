function seed(){
  return [
    {
      id: 1,
      title: 'Outside Aspen, CO',
      author: 'Ned',
      image: 'images/dog1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!',
      date: new Date(1),
      votes: 1,
      commentsOpen: false,
      comments: [
        {
          id: 1,
          author: 'author1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        }
      ]
    },
    {
      id: 2,
      title: 'Cliffs Of Mother',
      author: 'Cursel',
      image: 'images/dog2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!',
      date: new Date(),
      votes: 5,
      commentsOpen: false,
      comments: [
        {
          id: 1,
          author: 'author1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        },
        {
          id: 2,
          author: 'author2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        },
        {
          id: 3,
          author: 'author3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        }
      ]
    },
    {
      id: 3,
      title: 'Olympic National Park',
      author: 'Bear',
      image: 'images/dog3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid! Lorem ipsum dolor sit amet',
      date: new Date(),
      votes: 2,
      commentsOpen: false,
      comments: [
        {
          id: 1,
          author: 'author1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        },
        {
          id: 2,
          author: 'author2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        },
        {
          id: 3,
          author: 'author3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!'
        }
      ]
    },
    {
      id: 4,
      title: 'Hike Through Zion Narrow',
      author: 'Tyrion',
      image: 'images/dog4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit natus, delectus voluptatem beatae nostrum dolore numquam esse minus amet officiis quis cumque doloribus aut eum unde molestiae laborum vitae aliquid!',
      date: new Date(),
      votes: -2,
      commentsOpen: false,
      comments: []
    }
  ];
}