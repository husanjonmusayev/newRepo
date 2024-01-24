// ochiq apidan malumot olish uchun 

function shelowCopy(url) {
    // Fetch so'rovini url dan bajaramiz
    return fetch(url)
      .then(response => {
        // JSON formatdagi javobni o'qib olamiz
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // JSON ma'lumotlarini qaytarish
        return data;
      })
      .catch(error => {
        // Xatolikni consolega chiqaramiz va null qaytarish
        console.error('Error during fetch:', error.message);
        return null;
      });
  }
  