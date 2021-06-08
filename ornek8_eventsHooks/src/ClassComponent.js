import React, { Component } from "react";

//* ===================== CLASS KOMPONENTLER VE STATE'LER ========================
//* - Class komponentler JS-ES6 class yapisina dayanmaktadir.
//* - Fonksiyonel komponentlere gore daha fazla boilerplate kod icermektedir.
//* - Ama class komponentlere state olarak adlandirilan bir durum nesnesi
//*   atanabilmektedir.
//* - state, render olacak bir elamanın her render arasindaki degisikliklerini
//*   tutar.
//* - state'e constructor icerisinde this.state ile baslangic degeri atilir.
//* - constructor dısinda ise sadece setState() metodu ile degeri degistirilir.
//* ================================================================================

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // state'in adi sayac olsun ve baslangic degerine 0 atansin
    this.state = {
      sayac: Number(props.sayi),
    };
    // * arttir metodunun baglanmasi (binding)
    this.arttir = this.arttir.bind(this);
  }

  //! - Kendi yazdigimizi class metotlarinda this keyword gecerli olmaz.
  //* - Cunku bu metot react'ın kendi metotlari gibi componente otomatik olarak
  //*   bagli degildir. Bunun icin contstructor icerisinde baglanmasi (binding)
  //*   gerekir.

  arttir() {
    this.setState({
      sayac: this.state.sayac + 1,
    });
  }

  azalt = () => {
    this.setState({
      sayac: this.state.sayac - 1,
    });
  };

  render() {
    let { sayac } = this.state;
    return (
      <div>
        <h1>Sayac : {sayac}</h1>
        <button onClick={this.arttir}>Arttır</button>
        <button onClick={this.azalt}>Azalt</button>
      </div>
    );
  }
}

export default ClassComponent;
