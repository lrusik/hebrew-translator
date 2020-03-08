import React, { Component } from 'react';
import "./css/Langmenu.css";

export class langmenu extends Component {
   closeMenu() {
      document.querySelector(".langmenu").style.display = "none";
   }

   searchLang() {
      const word = document.querySelector(".langmenu__bar").value.toLowerCase()
      let langs = document.querySelectorAll(".langmenu__item");
 
      for(let i = 0; i < langs.length; i++ ) {
         if(langs[i].innerText.toLowerCase().includes( word ) ){
            langs[i].style.display = "inline-block";
         }else {
            langs[i].style.display = "none";
         }
      }
   }

   render() {
      return (
         <div className="langmenu">
            <div className="langmenu__search">
               <div className="langmenu__btn">
                  <div onClick={this.closeMenu} className="close-btn">
                  </div>
               </div>
               <input type="text" placeholder="Search language" onChange={this.searchLang} className="langmenu__bar"/>
            </div>
            <div className="langmenu__content">
               <div className="langmenu__selector">
                  
                  <div onClick={this.props.selectLang} className="langmenu__item" code="detect">Detect language</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="af">Afrikaans</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sq">Albanian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="am">Amharic</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ar">Arabic</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="hy">Armenian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="az">Azerbaijani</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="eu">Basque</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="be">Belarusian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="bn">Bengali</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="bs">Bosnian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="bg">Bulgarian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ca">Catalan</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ceb">Cebuano</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="zh">Chinese (Simplified)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="zh-TW">Chinese (Traditional)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="co">Corsican</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="hr">Croatian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="cs">Czech</div>                          
               
                  <div onClick={this.props.selectLang} className="langmenu__item" code="da">Danish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="nl">Dutch</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="en">English</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="eo">Esperanto</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="et">Estonian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="fi">Finnish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="fr">French</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="fy">Frisian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="gl">Galician</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ka">Georgian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="de">German</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="el">Greek</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="gu">Gujarati</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ht">Haitian Creole</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ha">Hausa</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="haw">Hawaiian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="hi">Hindi</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="he">Hebrew</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="hmn">Hmong</div>     
               
                  <div onClick={this.props.selectLang} className="langmenu__item" code="hu">Hungarian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="is">Icelandic</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ig">Igbo</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="id">Indonesian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ga">Irish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="it">Italian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ja">Japanese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="jv">Javanese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="kn">Kannada</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="kk">Kazakh</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="km">Khmer</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ko">Korean</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ku">Kurdish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ky">Kyrgyz</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="lo">Lao</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="la">Latin</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="lv">Latvian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="lt">Lithuanian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="lb">Luxembourgish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mk">Macedonian</div> 
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mg">Malagasy</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ms">Malay</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ml">Malayalam</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mt">Maltese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mi">Maori</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mr">Marathi</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="mn">Mongolian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="my">Myanmar (Burmese)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ne">Nepali</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="no">Norwegian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ny">Nyanja (Chichewa)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ps">Pashto</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="fa">Persian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="pl">Polish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="pt">Portuguese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="pa">Punjabi</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ro">Romanian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ru">Russian</div>                           
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sm">Samoan</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="gd">Scots Gaelic</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sr">Serbian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="st">Sesotho</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sn">Shona</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sd">Sindhi</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="si">Sinhala (Sinhalese)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sk">Slovak</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sl">Slovenian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="so">Somali</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="es">Spanish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="su">Sundanese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sw">Swahili</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="sv">Swedish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="tl">Tagalog (Filipino)</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="tg">Tajik</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ta">Tamil</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="te">Telugu</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="th">Thai</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="tr">Turkish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="uk">Ukrainian</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="ur">Urdu</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="uz">Uzbek</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="vi">Vietnamese</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="cy">Welsh</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="xh">Xhosa</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="yi">Yiddish</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="yo">Yoruba</div>
                  <div onClick={this.props.selectLang} className="langmenu__item" code="zu">Zulu</div>    
               </div>
            </div>
         </div>
      )
   }
}


export default langmenu
