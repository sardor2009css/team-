import React from 'react'
 
const Blokpage = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#fff', color: '#111', maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
 
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '32px 0 8px', fontSize: 13, color: '#555', letterSpacing: 0.3 }}>
        <div>January 5, 2023</div>
        <div>Perfume Collections</div>
      </div>
 
      {/* Title */}
      <h1 style={{ textAlign: 'center', fontSize: 28, fontWeight: 700, lineHeight: 1.35, margin: '24px 0 28px' }}>
        The Art of Curating a Luxury Perfume Collection:<br />A Symphony of Scents and Stories
      </h1>
 
      {/* Hero Image */}
      <img
        src="data:image/jpeg;base64,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"
        alt="Luxury perfume bottles"
        style={{ width: '100%', borderRadius: 4, display: 'block', marginBottom: 28 }}
      />
 
      {/* Intro paragraph */}
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 20 }}>
        Welcome, fragrance aficionados, to an exquisite journey into the captivating world of luxury perfume collections. A symphony of scents awaits as we delve into the art of curating a fragrance collection that reflects your essence, evokes cherished memories, and embraces the finest olfactory masterpieces. Just as a maestro conducts an orchestra, we invite you to become the conductor of your very own perfume symphony.
      </p>
 
      {/* Section 1 */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '28px 0 10px' }}>The Perfume Collection: A Personal Overture</h2>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 20 }}>
        A perfume collection is more than an assortment of fragrances; it is a reflection of your personality, your life's chapters, and the emotions that define you. As you embark on this aromatic voyage, consider what scents resonate with your soul, whisking you away to cherished moments and uncharted dreams. Each fragrance in your collection will tell a unique story, narrated by the notes that gracefully dance upon your skin.
      </p>
 
      {/* Two-column section */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 28 }}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Perfume with citrus"
          style={{ width: 220, flexShrink: 0, borderRadius: 4 }}
        />
        <div>
          <h2 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 10px' }}>The Overture: Discovering Your Signature Scent</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 18 }}>
            The journey to curating a luxury perfume collection begins with finding your signature scent — the one that feels like an olfactory extension of your being. Take time to explore different fragrance families, from opulent florals to mysterious orientals, to discover the notes that harmonize perfectly with your skin chemistry. This will be the foundation upon which you build your enchanting symphony of scents.
          </p>
          <h2 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 10px' }}>Commemorating Milestones</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222' }}>
            Just as the notes of a melody create beautiful harmonies, certain fragrances can encapsulate significant moments in your life. Whether it's a celebration of love, a momentous achievement, or a cherished memory with a loved one, select perfumes that become olfactory milestones. With each spritz, you'll be transported back in time, reliving the emotions that weave your life's narrative.
          </p>
        </div>
      </div>
 
      {/* Section: Fragrance Palette */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>Exploring the Fragrance Palette</h2>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 20 }}>
        As you continue composing your collection, it's essential to explore a diverse fragrance palette. Include scents that embody contrasting moods and evoke emotions ranging from serenity to exuberance. From the freshness of citrusy top notes to the warm embrace of rich base notes, each perfume adds a unique hue to your olfactory canvas.
      </p>
 
      {/* Section: Niche Gems */}
      <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>Embracing Niche Gems</h2>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 28 }}>
        Just as a symphony benefits from unique instruments, your collection can be enriched by the discovery of niche perfumes and artisanal creations. Venture beyond the mainstream, and explore the creations of master perfumers who pour their heart and soul into crafting distinctive scents. These hidden gems add an air of exclusivity to your olfactory repertoire.
      </p>
 
      {/* Two-column: Art Form + Display */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 28 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>Perfume as an Art Form</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 20 }}>
            Perfume is not merely a product; it is an art form that captivates the senses and transcends time. Take a moment to appreciate the artistry behind each perfume, the skill of the perfumer in blending notes, and the emotions they convey through fragrance. Embrace the poetry in each bottle, and your collection will become an ode to the beauty of scent.
          </p>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>Displaying Your Symphony of Scents</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222' }}>
            The grand finale of your perfume symphony lies in the elegant presentation of your collection. A tastefully curated display showcases the artistry of perfume bottles, transforming your collection into an aesthetic marvel. Whether nestled on a vintage vanity or arranged in a custom-made perfume cabinet, your fragrant ensemble becomes an exquisite visual and olfactory experience.
          </p>
        </div>
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCTttz0fgYEy1v2-2ipB3jbtWLuoRnHvBUZG0FkHNQJhTjTR3l"
          alt="Colorful perfume bottles"
          style={{ width: 220, flexShrink: 0, borderRadius: 4 }}
        />
      </div>
 
      {/* Closing paragraph */}
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 12 }}>
        Dear perfume connoisseurs, may this guide inspire you to embark on a journey of curating a luxury perfume collection that harmonizes with your soul. As you add each new fragrance to your symphony, you'll find that your collection becomes more than an assemblage of scents — it becomes a masterpiece of memories, emotions, and the art of perfumery.
      </p>
 
      <p style={{ fontSize: 14, lineHeight: 1.75, color: '#222', marginBottom: 4 }}>Happy curating!</p>
      <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 32 }}>Kiara Smith</p>
 
      {/* Navigation + Share */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '16px 0', marginBottom: 0 }}>
        <span style={{ fontSize: 13, color: '#333', cursor: 'pointer' }}>← Previous Post</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: '#555', marginBottom: 8 }}>Share On</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            {/* Twitter */}
            <a href="#" style={{ width: 28, height: 28, borderRadius: '50%', background: '#1DA1F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2-4.5 4.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" style={{ width: 28, height: 28, borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" style={{ width: 28, height: 28, borderRadius: '50%', background: '#0077B5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <span style={{ fontSize: 13, color: '#333', cursor: 'pointer' }}>Next Post →</span>
      </div>
 
      {/* Footer */}
      <div style={{ background: '#1a1208', color: '#fff', margin: '0 -24px', padding: '40px 40px 32px' }}>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {/* Newsletter */}
          <div style={{ minWidth: 180, flex: '0 0 220px' }}>
            <div style={{ color: '#c8913a', fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Local Face</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Subscribe to Our Newsletter:</div>
            <div style={{ fontSize: 12, color: '#ccc', marginBottom: 12 }}>Receive Updates on New Arrivals and Special Promotions!</div>
            <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
              <input placeholder="Your email here" style={{ flex: 1, padding: '7px 10px', border: 'none', fontSize: 12, borderRadius: '2px 0 0 2px', outline: 'none' }} />
              <button style={{ background: '#c8913a', color: '#fff', border: 'none', padding: '7px 14px', fontSize: 12, cursor: 'pointer', borderRadius: '0 2px 2px 0' }}>Submit</button>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['#1DA1F2', '#1877F2', '#0077B5', '#E1306C'].map((color, i) => (
                <a key={i} href="#" style={{ width: 26, height: 26, borderRadius: '50%', background: color, display: 'inline-block' }} />
              ))}
            </div>
          </div>
 
          {/* Categories */}
          <div style={{ flex: 1, minWidth: 100 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Categories</div>
            {['Fashion', 'Jewelry', 'Sports', 'Electronics', 'Indoor'].map(c => (
              <div key={c} style={{ fontSize: 12, color: '#ccc', marginBottom: 6, cursor: 'pointer' }}>{c}</div>
            ))}
          </div>
 
          {/* Shopping */}
          <div style={{ flex: 1, minWidth: 100 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Shopping</div>
            {['Payments', 'Delivery options', 'Buyer protection'].map(c => (
              <div key={c} style={{ fontSize: 12, color: '#ccc', marginBottom: 6, cursor: 'pointer' }}>{c}</div>
            ))}
          </div>
 
          {/* Customer care */}
          <div style={{ flex: 1, minWidth: 120 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Customer care</div>
            {['Help center', 'Terms & Conditions', 'Privacy policy', 'Returns & refund', 'Survey & feedback'].map(c => (
              <div key={c} style={{ fontSize: 12, color: '#ccc', marginBottom: 6, cursor: 'pointer' }}>{c}</div>
            ))}
          </div>
 
          {/* Pages */}
          <div style={{ flex: 1, minWidth: 80 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Pages</div>
            {['About Us', 'Shop', 'Contact Us', 'Services', 'Blog'].map(c => (
              <div key={c} style={{ fontSize: 12, color: '#ccc', marginBottom: 6, cursor: 'pointer' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
 
    </div>
  )
}
 
export default Blokpage