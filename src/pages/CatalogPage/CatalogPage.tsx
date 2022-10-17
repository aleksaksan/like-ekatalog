import React from 'react';
import { DropdownMenu, DropdownOption } from '../../components/DropdownMenu/DropdownMenu';
import './CatalogPage.scss';

const dropdownOptions: DropdownOption[] = [
  { id: 0, name: 'от дешёвых к дорогим'},
  { id: 1, name: 'от дорогих к дешёвым'},
]

export const CatalogPage = () => {
  return (
    <div>
      <hr/>
      <div className="m-width">
        <div className="page-title">
          <h1>Catalog</h1>
        </div>
        <DropdownMenu options={dropdownOptions} />
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum deserunt odio! Minus voluptatibus, eaque iste nobis numquam sit ipsa? Quaerat aperiam provident, nisi vero dicta fuga aliquam pariatur, ut hic impedit blanditiis iusto neque vitae nemo. Atque eveniet commodi qui dolore consequuntur sequi nobis reiciendis voluptas sint voluptatibus, similique quaerat ratione rem. Eum recusandae non quae, repellat velit eius sunt sint consequuntur vel quis blanditiis repudiandae maxime architecto error enim. Quisquam ratione, voluptatum harum magni ducimus fugit sit exercitationem dolorem dolores at qui cupiditate incidunt necessitatibus temporibus animi iure, doloribus quod deleniti similique assumenda numquam error sequi! Deleniti eveniet natus autem maxime, nostrum molestias consequuntur repellendus libero magnam nam saepe repudiandae in quisquam enim soluta rem dignissimos cupiditate molestiae labore. Ut vitae dolore natus praesentium sint quidem labore alias nostrum atque sunt eaque ad vero, cumque quasi aperiam, recusandae possimus corrupti ducimus hic aliquid id ab iure maxime. Assumenda non consequuntur accusamus qui nam delectus dicta iure, odio culpa, officia dignissimos sint magni libero, quaerat tempore illo cum corporis molestiae itaque facilis neque repellendus? Minima aliquam quod non, ex debitis unde assumenda aperiam dolorum officia autem quaerat ducimus provident obcaecati expedita soluta harum eius eaque commodi voluptates dolore. Rem, modi est. Dicta placeat eius, officia porro, eligendi id totam commodi, voluptates possimus repellendus fugiat adipisci recusandae! Architecto, dolore quasi adipisci sunt nam distinctio sapiente perspiciatis cumque quia commodi excepturi ea beatae natus fugiat ad minus consequatur aperiam omnis vero id expedita ipsum maxime magnam. Omnis, hic. Dignissimos inventore earum consectetur ab non unde! Doloribus soluta amet nam alias similique. Natus nam voluptatum asperiores veritatis voluptate quisquam quibusdam eos sit accusantium optio esse maxime quas eaque praesentium, vitae quo tenetur, enim unde. Error, consequatur. Assumenda vel harum nam a provident, placeat ipsa explicabo id architecto perspiciatis expedita rem in minima at esse voluptatum nostrum! Cupiditate eius, ducimus eaque labore itaque nesciunt suscipit beatae esse maiores quo non officiis! Tenetur, consectetur? Possimus odio at hic minus ratione voluptas dolores laboriosam totam laborum minima nemo tempore mollitia dolore commodi temporibus, inventore quisquam fuga odit aut molestiae tenetur blanditiis consequatur consectetur! Consectetur asperiores reprehenderit, consequuntur doloremque aliquid iusto aperiam nihil est cumque et enim dolore! Accusantium sapiente adipisci culpa porro laboriosam quod minima aperiam ipsum recusandae odit laudantium rem, sint molestias, perspiciatis tenetur dicta ad. Ex assumenda obcaecati deserunt fugit consequatur voluptatem a, iure itaque sunt eum ipsum animi odio nam earum eius delectus vel dolores asperiores possimus molestiae iste accusantium nostrum quis? Voluptates facere cum, autem deserunt vero nemo consequatur quia odit ea excepturi vitae, ratione hic, dolore minima? Animi cupiditate sit molestiae fugiat eum iure quam totam, corrupti cum maiores facilis earum possimus rerum dicta vel veritatis hic tempora? Tempore ipsum ut veritatis necessitatibus mollitia magni nobis. Numquam omnis, ab ipsa error cupiditate dicta nam dolores odit quibusdam recusandae molestiae, maiores adipisci officia rem nulla eum. Iste alias reiciendis ea rerum maiores dolores magnam excepturi possimus aliquid earum odit itaque ipsum, qui, facere nobis laudantium quas? Fugiat facere sunt non laboriosam.</div>
      </div>
    </div>
  )
}
