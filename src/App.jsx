import ProductCard from "./ProductCard";

function App() {
  const playProductDemoAudio = () => {
    window.speechSynthesis.cancel();

    const text = `Tech Store me aapka swagat hai. Hamare paas teen sabse behtareen products hain.

    Pehla product hai HP Laptop. Ye ek high-performance laptop hai. Ye gaming ke liye, video editing ke liye, aur content creation ke liye bahut hi shaktishali hai. Isme tez processor aur behtareen graphics hai, jo har kaam ko aasan bana deta hai.

    Dusra product hai Samsung Galaxy S21. Ye Samsung ka sabse latest smartphone hai. Isme 108 megapixel ka advanced camera hai, jo raat me bhi saaf photo leta hai. Iska display bahut smooth hai aur battery poore din chalti hai.

    Teesra product hai Sony WH-1000XM4. Ye duniya ka sabse behtareen noise-canceling headphone hai. Ye bahar ke shor ko poori tarah band kar deta hai. Isme 30 ghante ki battery aur zabardast bass wali awaz hai. Music sunne walon ke liye ye sabse best hai.

    Dhanyawad.`;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN'; // Ab Hindi me bolega
    speech.rate = 0.85;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <header>
        <h1>Tech Store</h1>
        <p>Best Products at Best Prices</p>
      </header>

      <section className="products">
        <ProductCard
          image="https://innovaretail.co.in/cdn/shop/files/D49D1PA-1_T1770184193.png?v=1775812971"
          name="HP Laptop"
          description="Ye ek bahut hi takatwar laptop hai jo khaas taur par gaming, video editing aur content banane ke liye banaya gaya hai. Isme Intel ka latest processor aur high graphics card laga hai, jisse bhaari games aur software bhi bina ruke chalte hain. Students aur professionals dono ke liye best hai."
        />
        <ProductCard
          image="https://gameloot.in/wp-content/uploads/sites/2/2025/10/Samsung-Galaxy-A35.jpg"
          name="Samsung Galaxy S21"
          description="Samsung Galaxy S21 ek premium 5G smartphone hai. Isme 108MP ka powerful camera hai jo 8K video record kar sakta hai. Iska AMOLED display 120Hz ka hai jo bahut smooth chalta hai. Isme 5000mAh ki badi battery hai jo ek baar charge karne par poora din aaram se chalti hai."
        />
        <ProductCard
          image="https://m.media-amazon.com/images/I/61RahTQtAqL.jpg"
          name="Sony WH-1000XM4"
          description="Sony WH-1000XM4 industry ka number one noise-canceling headphone hai. Ye aapke aas-paas ka saara shor, jaise traffic ya bheed ka shor, ko khatam kar deta hai. Isme 30 ghante tak chalne wali battery, touch control aur Alexa support hai. Iska sound itna clear hai ki aapko studio jaisa ehsaas hoga."
        />
      </section>

      <section className="media-section">
        <h2>Product Demo Audio - Hindi Me</h2>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button 
            onClick={playProductDemoAudio}
            style={{ padding: '12px 25px', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
          >
            🔊 Hindi Me Suno - Teeno Products
          </button>
          <button 
            onClick={stopAudio}
            style={{ padding: '12px 25px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
          >
            ⏹️ Band Karo
          </button>
        </div>

        <h2>Product Demo Video</h2>
        <div className="video-container">
          <div className="video-card">
            <h3>HP Laptop</h3>
            <iframe src="https://www.youtube.com/embed/1lmJZEFW-6U" title="HP Laptop" allowFullScreen></iframe>
          </div>
          <div className="video-card">
            <h3>Samsung Mobile</h3>
            <iframe src="https://www.youtube.com/embed/rgqMJYHwLAU" title="Samsung Mobile" allowFullScreen></iframe>
          </div>
          <div className="video-card">
            <h3>Sony Headphone</h3>
            <iframe src="https://www.youtube.com/embed/bInJjmH31Hk" title="Sony Headphone" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;