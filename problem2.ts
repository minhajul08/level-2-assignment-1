
// Problem -2 

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return (items.filter(item => item.rating >= 4))
  }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 9.0 },
  ];
  
  //   console.log(filterByRating(books));
  //   console.log(filterByRating(books));