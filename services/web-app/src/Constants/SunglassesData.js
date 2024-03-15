const sunglassesImages = [
  {
    img: 'https://productimagesglassesdb.jeeliz.com/_custom_rayban_wayfarer_havane_vert.jpg',
    title: 'Ray-Ban Original Wayfarer Sunglasses',
    code: 'rayban_wayfarer_havane_vert',
    price: '12,164.00 VND',
  },
  {
    img: 'https://media.visio-net.com/oscommerce/images/viewerxxl/carrera-CARRERA114S-D6KP9-55_1/carrera-CARRERA114S-D6KP9-55_1_1.jpg',
    title: 'Carrera 114/S Blue Grey D6K P9',
    code: 'carrera_114S_blue_gray',
    price: '7,904.00 VND',
  },
  {
    img: 'https://cdn.eyerim.com/media/catalog/product/cache/shared/image/600x/9df78eab33525d08d6e5fb8d27136e95/s/o/soak-g005906-m042451-bi-1.jpg',
    title: 'Oakley Latch Havana Green 9265',
    code: 'latch_havana_green',
    price: '6,877.00 VND',
  },
  {
    img: 'data:image/jpeg;base64,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',
    title: 'Steampunk (Gold & Blue)',
    code: 'aliexpress_steampunk_gold_blue_mirror',
    price: '1,436.00 VND',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ8QEA4PEA8PEA4ODw8PDRANEA8PFREWFhURFRMYHSggGRomGxUVIjEiJikrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGi0mICYrLy8uLS0rLS8vLS8tLS0vLy0tLSstLS0rLy8tLS0tLS0tKy0tKy8tKy0tLS0tLS0tLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGBAj/xABEEAACAQICBgYFCQYFBQAAAAAAAQIDEQQhBQYSMUFRBxMiYXGBMlKRobEUI0JicoKSwdEXU6Ky0vAVFnPC4TNDVJOU/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAOhEAAgECAgUKBAQGAwAAAAAAAAECAxEhMQQSQVFxBRMiMmGBkaGx8BRSwdEVM5KiIzRystLhQlOC/9oADAMBAAIRAxEAPwCcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADR6d1lwuCXz1Tt5fNQ7dTPddfRXe7ESkoq7ZpSpTqy1Kabe5G8BFOkek+tJtYehCnHhKac524Pgl7Gc/X1z0jNtvFTV+EXGml+BIz5zdF+nqdPwkY/mVYLsTcn+xNeZOwIB/zNj/APzK/wD9FT+ozUtb9Iw3Yqq/tT2/5rkc5L5fNfcn4bR9lePfGf8AiyeAQ7hekbHQS2pUqn+pRtf8FjYUek+sl28JTl/pznBf7g68V1k13GkOTKlV2ozhN7lJX8JarJSBwejukWNZNrAYlqNtp0rVlC+7adlbcz2ftCwq9Kji4fapU/6yefp7xLkfTU7c279ln6M7AHIR6RMBxdZeNH9GV/aFo/8AeVf/AEzHP0vmXijP8M03/pn+lnXA5F9Imj/Xqvwov9S39omB4RxEvs0V+chz9P5l4olcl6a8qMv0v6nYA5Ja9U5ehg8dPvVGNv5jWaT6RpUGlLR1eDktqPXSdK8eaWzmiHpFNZsvDkfTZvVUMeMV6skAET1ulSu/Qw1FLv6yrbzTia7E9IOkKm6pGn9WFOn8ZJhV08k33fexWfJ0qWFWpCL3a134RUmTSCCJ63Y978VW8qrj8EWrWzHrdiq/nWk/iTzkvl819ynw+j7a6/TP/EnkEJYXX3SFN51tterUjCa9uzc6LRPSfd2xNBW4zo3jb7snZ+THO2zTXvsuFoWv+VUjJ7rtPuU1FvuuSWDW6J0xQxcNqhVjO3pR3Tj9qLzRsjRNNXRyThKEnGSaa2PMAAkqAAAC2Ukk28ks23kki4inpH0jieunQdSSpb4wi9mLg921bf4Mzq1FTjrM7eT9CemVlSUkuP0W33ievXTpCUG6GCknLOMq6zXeocvtezmRtOcpycqknOUm25Sbk7ve02eajNSlJpptOySztFHoRSnFu0p5+nAvptWEJS0eh1E7PfNrbLer5LLC+ZUuLUVRqecCpUIgkFWv73CwAPbozS1fCVetozcJZbVstterKO6a/veTBqjrLT0hR2laFaH/AFKd/wCOPOL927xhRHt0DpSeBxdOtG+ztfORX04P0o27170mZP8Ah9KOW1fX79h6dKp8bahVxn/wltvsjJ7U8k31XlhgT9sLkvcW9TH1I/hRxdTXWviZOOjcDOtbJ1aqtBPwTSXnJPuMnybT1TP5RhKH1NmMrfwS+Jbn0+qmyv4ZUj+bKEOyUsfBXa70dl1S5L2FyRxnUaepK/XYTEfU2VG/8MPiYlrvVw3Z0jgatGWajOmr05yS3Ladn4psnnorrXXFD8Mqy/JlGfZGV34Oz8EezXbW6OAh1dO0sTNJpPtKnF5Kclxd9yIgxtepiKkqlebnOTu1OW15N8V3bkZMfjJYrEVMRUd5znJrl325JKyXcjCykVr9OXct3+xpFT4a+j0XbZKSzk9qv8qeFl1rXd7q1qRRoqDU84tKWLigBbYpIusUsTYgy4HG1sPONSjOVOUd2xLZfgny7nkSxqbr3SxiVGu408R6MZX2YVnusvVn3ceHJRE0YJyUZrtJOeTV83l2XYxqJw6ce9bz1dCnDSZR0bSHg8Iy2xezjF7U8r3Vj6bBFvRjp3G167ozqurQp05Slt9qUbWUbSee/hmSkaUqiqR1kjn07QpaHWdGbTfZ2+jAANDjBFHSRga8KrrTcZwnKapvfZK7UHllkSucb0oxvo+L9WvG/g6c18bGNeOtBnp8j1nS0qNrY3Xk8t2JAMcPUpttRlG7bbSZ6aWPmvSSfxN1YpsLkizjjmcarxcUnD36+Z5aGKjLufJmdIu6iPqryVjG6coZrtR5cUSjGVr9HIyWK2LqbUldF2ySQYrCxm2BsCwMVilZdiT5La9hmUBXjaEu9NFXliXpuSnFxzurcb4eZMnR9K+isLklbrY5K26rNXOlOY6PnD/C6CjKLa6za2Wm4ydSUtl8nmdOTT6i4HRyh/N1f65f3MHH9J87aLkudWkve3+R2Bx3SfOH+GSUpxUnUpuEW1ebTzSXGybfkRWX8OXAvyZ/O0f64+pEdONlH7MQ0ZKavGL7ohxHA4ne+Ofv6mJoWMmwNgkgxWFjLslssldkkGNo89fFwh3vkv1MypuTu8o8Fz72X9TH1V7EQ77C0dW/SNRVxk5eitnwzftMMKE5TjNxk9h3u7/E36ilwKVN0vCRWx0KulbVjbHDjs7fM7fov0RiVV+VRlCOGbqQmm+3VWzkkrbk9nO63ErnOagUHT0VhYve4zl5OpJr3WOjI0eGrTR08saRKvplRu2DawWxNpX3vtAANjzQaPXLBqto7EwtmqfWK2+9NqeX4TeFs0mmnmnk1zIkrpo0o1XSqRqLNNPwPnVcAkbLWLRrwmNr0LZKcp078abzi+/Jrzua8pB3Vy2kU1TqyjHK+HB4x8rFLFQVRYwMc6bT2o7+K5/8mSnNNXLjDUWzK6471wbBJnKlIu6uXAAw103swW9u+Svlw95lbOj1Q1dq4mnWxHZUW3h4OV8lK0as0uag5Jd8u4yqt6uqs37f270elyXCPPqtU6kGm+N+ivHHgmd5qNo1YbB04pWc4xrVON5ySaV+5WXkdMebBU1GCsrKysuSWSR6TWMdVWOKvVlWqSqSzbuDkekPRqr4ObaW1RXWxk/opNbaXjFe1I648Gl8PGpSnGSupxlTl9mSs/iJx1otF9ErOhXhUTtZp/f7MgWinFyhJWlGTVuWdrF7Oi100DVw3UYh2kqsYwrShdx65JKUvvKO147RzxlSb1bPNe15G/KUI886sOrO7VuPSXdK/dbeUBUGpwFrMC7bv9Fe9l1eV+yt73vkXxikrIAoUsXWAILAotyjFK7lJRSW9tu1i6x0vR7ov5RpCE2vm8NatJ7ltr0Y/i+DKz6tt+HidWhpc8pPKPSfCONu92jxaJa0dheqoUaX7qlTp/hilf3HrALpWwOeUnJuTzYABJABRlrbAOL6SNAPEUI4mlG9bDp3S3zo72rcWs2vFkVQqRkk0959EqJGWumo8oSnicHHajK86uHis1J7501xX1eHDuzktV32e8TrjavBQb6SyvtXy32NPGL/APLfVOG2gm+RZGot17Pk96L9ssnc5ZRcW4tWazTzXEuSfP2ION9+fsKbZVSBBckVMcqqSu2ku83mreq2I0hJSs6OGT7dWacZTzzUEt/w8NxDlY2o0JVbtYJZt5Li9/Yrt7Dzav6GnpDEKnC6pq0qtS11GN7PP22XHyZM+C0fTo0YUYRtTppKK4u3Fvi3m2+8x6G0RRwdFUqMbRWbbzlKXrSfFmyEY2xefvAvXrRcVSpdRY45t7ZP6LYu27YAFzmBbKN1Z7mXAA1+lNGU8Th50JrszjZPe4y4TV+KeZCumNF1MFiJUKy3Z05W7M4cHH+8ndE9Gn1g0FRx1Hq6qzV3CcfThLufLmuJnOLvrRzOuhWjqOjV6rxvtjL5lv3NbV2pEJsobHT2r+J0fK1WLnRbSp1oJyi+Sb59z9+81kZprJ3QjK5lWoTpNa2TyaxT4P1Wa2pMx7NpN2uV2+4yXLZFjEptAtuUp7cpxp0oSqVZO0YQTk23uyRDaSuy0KcpyUYq7exGSMW5KMYuUpNRgkrtybskl4kz6n6DWBwkYOzrVH1laX1n9BPkll7XxNPqRqd8mtiMSlLEtdiOUo0Vw3/T7+Hw7giKbes+77m9Rxpw5qLu31mssMorelte12thFN1ABocwAABSRie0t0b+djMADzOtU/dN+EolPlE/3M/Jwf5nqAByGsGrGGxl5TwtWnVebq0VTjKT+tnn8e84fH9H2Lpt9RLrY8FUpShP3Ze8mcFObWzD34eR0LSp6qjO0kstZXtwfWS7FIgL/KOlr2+Qy8dqNvibXBagY6pbrJQorilCc5r2JomgEana/L6In4iKypx/c/WTXkcPoTUXCYdqc6dXE1FnetFbCfNQ/Vs7Gm7JJU2klZKySS5GcFoxUcjOrXqVba7yyWxcEsF3GPbl6j9qKpv1beaLwWMgUb7ioAMNSpJbqbl96K+LLY1p8aUl96L/ADPQADF1r9SXuLZV2v8AtzfkjOADX4mfWQlCeHlOElaUZRjKMlyae84zTOolGq3OhTrYebzsrVKd/Bu68213EhgrKKlmbUq9SldReDzTxT4xd0/AhbFah6Qi3sQVVcM7N/i2UeenqTpVu3yVR73VpW90rk4grqdr8vqjT4iG2lH9y8lJLyIlwPRxiHZ15ZcYUnFN/eby952ehNBLBr5nDRi7Z1J1FOq77+1+SsjpwSoJO/qUnpE5R1VZJ7Iq1+O197Z5acKnGy87meMXzLwXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z',
    title: 'Ray-Ban Aviator Doug N01',
    code: 'mykita_black',
    price: '36,399.00 VND',
  },
  {
    img: 'data:image/jpeg;base64,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',
    title: 'Polaroid 6016 Blue Grey',
    code: 'polaroid_6016_blue_grey',
    price: '2,545.00 VND',
  }                      
]

export default sunglassesImages;