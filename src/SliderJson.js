let reviwes = [
    {
      id:1,
      name : "nena merag",
      jop : "Back End",
      image : "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
      opnion : ` Lorem ipsum dolor sit amet consectetur adipisicing elit
      Quis cum molestiae ab nostrum Maxime nostrum provident doloribus 
      adipisci hic possimus iure explicabo maiores quos`
    },
    {
      id:2,
      name : "Mira Sevan",
      jop : "Front End",
    image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUPDxAPDw8PDw8PDw8PDw8PDw8QFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFSsdFR0rLS0tLi0rLSstLSstLS0rLSsrKystKystLS0tKy0tKystLS0rLTctKysrLS0rKys3N//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIGAwQFB//EAD8QAAICAQEFBQQGCQMFAQAAAAABAhEDBAUSITFRBkFhcZETIoGhBzJSscHRFEJDYoKSwuHwI1NyMzRjc/EW/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAcEQEBAQEAAwEBAAAAAAAAAAAAARECAyExQRL/2gAMAwEAAhEDEQA/AOVQ6HQUVCoKJUFARoKJUFAKgolQUBGhjodARoKJUD4cXwS4t9AMGq1MMUd/JKMI9ZPv6LqcTW9q8MUvZJ5ZN9HBJdeKK/2k2p+kZvcd4oe7j6PrP4/ckcuGNszrWLMu2E7/AOjCu9bzv1NvR9rYSdZccofvQe+l5rgyppKPiZ8TXT5DR6JpdVjyx3sc4zXVPk+jXczNRQdPKeOXtMTcZLvXJ+D6rwZcNi7TjqYX9XJGlOHR9V4MsqWN+h0Oh0VEaCiVBQCoKGOgI0FEqGBCh0SCgIDJABgoB0OgIjGFAIKJUFARodDodARoKJUFAKisds9qbkVp4P3pq8ld0O6Px+5eJZss1CLlLgopyfkuJ5drNQ82WWSXOcm/LovguHwJVjDCNm7DHSsjgxO6S4v/ACjrafY+SS8zFsjclrhT4sljfGv7Hc//ADuRdxzsuilCW61y8PmJ1KXmxk07aNvQ6n2Gojk5Jvdn3JwfB35c/gYMMKfyIaz+xUei0OjW2Xm9pgxz73CN+a4P5o26NsI0FEqHQEaCiVDoCNBRKgoCNBRPdCgIUBOgKNYKJBRBGhjodARodDoKAVDodDoCNBRKgoDk9qM25pMn7yUF/E6fys8+02O5Fy7d5awQj9rLb8op/miqaFcG/wDOhmtR1dnYLmuhdtnYFSKpshJvmuBeNl41Rzd11eONnHok+45W3+zqlDfjwlHl4+BZMKNnPi3oUzzlx62a8YzQ3X0atPzXE0M87ZYe1GkeLM+kna+5la1H1jr5uzXH1MuLr2Mzb2ncX+zm18HxO+VbsI7WVeMH8n+Ra6Nx50gJUFFREdDodARoKJ0FARoKJ0FAQoCdAUalDodBRAqCiVBQCCiVBQCoKJUFAIKJUFAVD6QMb3cUv1byRfm0mvuZX9GlXHlwvyL12p0ntdLNd8HGcfBp8fk2UvQYd6W6+HGmY6b59tzA8UnGMMWSE5XuyjKrpNvh8DvbG2jLDNQnNyi3STTUotdzMWl0MMaTatx4xdvg+qOZKW9qIpcvaL1bVs8rlj3ksela2OWOJTxuKbp+9yor+n285ZPZ5dZXFqseNV/M1x9C3arTe1wKH7i+4rWg7LL2qySduMdypRUouN7yUl38Un8Dx4s/Xt3L+OP2t0L3YzWX2sHJRi2lvLeT714pFK1GNydrnVvwrmelbe2I8OncE5SSakr4tcVVeBRoYd7USilalGbpc3a5L4s9uOnh5OfbvdhcNYJz+1kr4JL82WWjR2FovYYI43zVuXi27Z0KPeOelQUSoCoVBRJDAjQUSoaQEaCiQ6AhQE6EVGoAwIpDCh0Ah0MAEOh0FAIdDADHmxqUXF8pJp/EoWaHsc77r3Zeq4/Oz0Gio9qNJutTXK3F/G2vxM9fG+L7ZceRyhw6HP2JgebUxSX61+dM2NmZfc+B0ezehayvURlSxK6fJ2+Rz7muqTbHpMJ7kalw4JEsEeNmlCPtONy9+nJOTatcqT4L4HQit1JHg6Mc/tVBPTvq6j68DzzZmFZNW3FJRxQcG0uct5u/mXrtDmrHvS5K3Xglf5Fa7PabdxvI1UsspTfk3wPfwzfbl8/WenTodDHR1ORGh0OhgIKGOgFQ6HQ0gI0Oh0OgIgSoCo0QGBFIYwAAHQwECGOgEOhgAjkdqYr9Gk2r4wS8Ha4kto9otPge7ve0yL9njqTX/J8kVfa+2smqe7W5iTtQTtt9ZPv8jNrUjBhm93dXB+HU7uxccq96Uoyuu6jhabG1JNd3NF52BOE0t/drlTo5+rjr8V9uxsuWdUlNSj+/HeSXh3nZ3upixRxxVY16Dk6Vydd/kc/Ve9qq7S136XOWJJxjDJKDT51B038WbcIJJJckkkvIwazDHT5XmnWOOomlx4KLf1VLo3Xq6Nmjt8WXnY4PLv8ARDHQz1eRBQxgIYDAVDHQ0gFQ6GMIiA6Ao0KAYEAAwCgKGjS2xtKGlwvLPjXuwj3zm+UV/nJMDay5IwW9KUYpc3JqK9WcjP2q0cHXtd/xxwnNeqVFC2hrsupn7TNLef6seUYLpFdxrTXFL/4TVxeNZ23wRX+ljyZJd29WOPx5v5FW2r2j1Wp92U9zG/2eO4xfm+b+7wNBxIOBFxPZ9KaXc/dLLpdDxRWFEsex9sKlDJSkuCm+Cfn0ZjuX7G+LPldCGmrKo9UXTYWzFCPFLn3o4mytBLJmWR8kW3W6iGGFp93I5uq6eZjewpfVVJLoT3OpzNnbSjHG5S4N8W3wUY+LKZ2s7cuaeDSSpPhPNH7ov8TE4vVyNddTme0fpK25DLNaXE1KOOW9mkuTnyUPhbvxrocLY3ajLp1uTXtsS4JOVTgv3ZdPBnEhFyZN4jt5k5mRx9W9Xa9R2btLFqYKeKSfWL4Ti+jXcbh5BGUoSUoSlGS5Si3FryaLbsftolFQ1UZby4e1gk1JdZR7n5G9YsXIZh0mqx5o7+KcZx5XF3T6Po/Az0VBQDodAIaCh0AIYUMIQDoAOeAAADAAplE7e6vezwwr6uKG+/8AlP8Asl6l7PKtuZ/aavNPueWUV5R91fcSrGomLvIpjviRU2KgTJIKEiLVGVRfkJLiBt7P21qdOqw5pwj9nhKPpJNL4G3m7T6qf1pxf8COfBPvSryGku5L0RnJfxZbP09VtDNmVZMk5rnu3Uf5VwIY8Pexx+BltL+5fnxPv0VXL0RGV+QR9PimDV8yKxyZhauXkbrg4re7l3Gvghwcu98F42WJW9sbaWXTT38b5/Xg73Zro/z7j0nZevhqcSyQ4d0ovnCS5xZ53psVRqndcOF8Odnd7IZvZ6h4u7NBuv348U/TeLL7Sz0udDAZpghoBoAGAwEAwA5owAAABgB47mlxk+spP1Z7BkdRb6Rb9EeNN2r68SVqJLgiUTFlY8bIrPEyx6mBEkwNhvxJRvwNexqQxdbKsTl/cwe0fVhvsmGtiNdL+RkaXCq8fE045Giccr/yxhrailfC11RljjfnwNRZV3p+psrVp97JlXYw6xtJJ9/QzY8e6opro358zFKanNcOCfhTNjK7ku4DYx96+quVLi2jY2dm3NViknaWWKb7/e9136mtjjfCvjzI3WSLV8Jxa9UJ9L8eogDGj0eYGIYQDAYAADA5gAADGJDCtHbub2elzTXNYclebTS+88mlyPTO2mXd0OSv1njh6zjfys8xm+BmtRGXFkoECcArMiQok0ioQDABAAAA7IjQEkSQkiSCGjPpn7xhJ6d+95IlWN+EuD58K73zJab38+OPXLjVfxIhpXXE2tgY9/WYl/5N7+X3vwMz61fj0sAA9HmY0IAGMQwhgIYHLGIYDABhVa+kDJWkjH7eaC9FKX4I87kXv6RJ/wCnhj1nOXpGv6iiSM1qIIyQRii+JlgBniTIRJlQCGIAEMQCJIVEogSiiaQkSAjk4J+TFoZWm+vBeSMetlUa+00jJpnuqvAlWOjjlUWdbsdG9ZHh9XHkfyr8Tjyn7qXDrZYOwkb1M5dMLXxco/kSL0vIwA2wBiGADEMIYAMDlDIjCpAIYFH+kPJeXFH7OOcv5pJf0lQmWPtxk3tY19jFjj8eMv6kVzIZajD3mWzEuZNcWBs4yQo8gbKGMihhDABgIkgQUBOJIhAn4Li3y8wIbVwbkMM+/IssvClLdX3Mx4HdFg+kDSLD+i4l+z08ot9Xat+tsr+k5olWN78i1fR9H38z6Rxr1cvyKlvcS3fR6/ez+WL75iFXMYAaZAxDAYCGEMBAByxiGFMYkMDzLtjGtdkp8/Zyfg9yPD5HDySO92xnF63Ju8KWNT8Z7qt+lehwctmWmJPiZcS4mBPibOFAZyDY5Mx2UZYkiMCQQxoSJIARJoRJARib+x8PtNTih9rNjvyUk38kzRo6fZzMoavDKTpLIk2+7eTin6tAbn0n5L1eKPTBfrOX5Fd052PpBzKW0Gv9vFig/PjL+o42P0IrYjLiW36PZf6mVdYQfpJ/mVCMvCyx9hNRu6tw/wBzFOPxVS/BiFehgAGmTGKwAYyIwgGIYHKGRGFSQ0RRDU5444SyTdRhFyk+iSsDy3a+WU9TllNqUvbTTqqqL3V8kjn5l4fMzuVtvirblx4tW74sx5mq5mWmolxNrGa0OZsJgOchRIyZOAGWBMjEkVAiSIIyRACSECAY0MEA+0Or9vqnl5uWLDveEljipL1s1k+BHVQ95S68AiRWxij8X4nZ7KScdbipc3JcO5OMrZyMEe9vgWzsDpYPLkyu3PHGKhb5Ke9b+VfFiFXgYgNMmAgAYxAAwAAjloEABUjndpP+zz/+mf3CAUeY4x5fwADLTThzMyGAEDJAAAzRJMAKBE4gADYIACJjAArX1XJef5mKAABtYS4/R/8AXzf8Mf3yACQq6AAGmQMAABiACQAAR//Z",
      opnion : `Lorem ipsum  adipisicing elit
      Quis cum molestiae ab nostrum Maxime nostrum provident doloribus 
      adipisci hic possimus iure explicabo maiores quos`
    },
    {
      id:3,
      name : "Randy Browger",
      jop : "Tester",
      image : "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
      opnion : `molestiae ab nostrum Maxime nostrum provident doloribus 
      adipisci hic possimus iure explicabo maiores quos`
    },
    {
      id:4,
      name : "Elias Senetra",
      jop : "Softwear Enginer",
      image : "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.2093565432.1602720000",
      opnion : ` Lorem ipsum dolor sit amet consectetur adipisicing elit
      Quis cum molestiae ab nostrum s`
    },
    {
      id:5,
      name : "Jon Clup",
      jop : "UI/UX",
      image : "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fA%3D%3D&w=1000&q=80",
      opnion : ` Lorem ipsum dolor sit amet consectetur adipisicing elit
      Quis cum molestiae ab nostrovident doloribus 
      adipisci hic possimus iure explicabo maiores quos`
    }
  ]

  export default reviwes;