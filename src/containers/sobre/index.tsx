import Titulo from '../../components/titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia tempora voluptatem dicta
      fugit obcaecati optio. Iste, quidem, soluta et, velit asperiores molestias minima nostrum
      dolore cum molestiae voluptatibus suscipit.
    </Paragrafo>

    <GithubSecao>
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=lumaximiano&show_icons=true&theme=dracula"
        alt="GitHub stats"
      />
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=lumaximiano&layout=compact&theme=dracula"
        alt="Top languages"
      />
    </GithubSecao>
  </section>
);

export default Sobre;
