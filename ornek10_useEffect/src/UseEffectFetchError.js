import React, { useState, useEffect } from "react";

function UseEffectFetchError() {
  const [users, setUsers] = useState([]);
  const [hata, setHata] = useState(false);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
        }
      })
      .then((data) => setUsers(data));
    // .catch((err) => console.log(err));
  }, []);

  if (!hata) {
    return (
      <div className="text-center p-2 mt-5">
        <h1 className="bg-warning">Github Kullanıcıları</h1>
        {users.map((kisi) => {
          const { id, login, avatar_url, html_url } = kisi;
          return (
            <div key={id} className="border p-3 m-3">
              <h2>{login}</h2>
              <img src={avatar_url} alt="" width="350px" />
              <p>{html_url}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1 className="bg-danger text-center mt-5">Veriler çekilemedi!</h1>;
  }
}

export default UseEffectFetchError;
