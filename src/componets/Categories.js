import './Categories.css';

function Categories() {
    return ( 
    <article className='categories-bar'>
       <span className='categorie'>All products</span>
       <span className='categorie'>Packaging</span>
       <span className='categorie'>Dinkware</span>
       <div className='categories-group'>
       <span className='categorie'>Apparel</span>
       <span className='categorie'>Notebooks</span>
       <span className='categorie'>Back packs</span>
       </div>
    </article>
     );
}
export default Categories;