import { InputForm, SelectForm, Typography } from '@/components';
import { IconButton } from '@/components/UI/IconButton';
import TelAtentionIcon from '@/resources/icons/TelAtentionIcon';

const HelpFaq = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
        <div>
          <div className="font-bold mb-2">
            <Typography size="lg">
              Preguntas Frecuentes
              <br />
            </Typography>
          </div>
          <div>
            <Typography size="sm" colors="secondary-gray">
              Si tienes alguna duda puedes consultar seleccionando una pregunta
              a continuación:
            </Typography>
            <SelectForm
              name=""
              options={[]}
              placeholder="Selecciona una pregunta"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mb-6"></div>
      <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
        <div>
          <Typography size="xs">
            ¿Cómo aumento los límites de operación de mi cuenta?
          </Typography>
          <Typography colors="secondary-gray" className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            soluta facere amet tenetur dolores, nemo sint, ipsa est, iste quam
            expedita. Nemo ullam perspiciatis, pariatur tenetur qui obcaecati
            ducimus ipsam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Soluta sunt perspiciatis laborum ad distinctio quos
            praesentium consequatur cupiditate sit quis deserunt molestias, eius
            perferendis. Alias soluta mollitia temporibus similique ullam. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quae
            ab nemo similique ipsam iusto dolore illo quas, temporibus facilis
            eveniet minus nam corporis? Deserunt labore magnam doloremque
            incidunt facere?. <br /> elit. Soluta sunt perspiciatis laborum ad
            distinctio quos praesentium consequatur cupiditate sit quis deserunt
            molestias, eius perferendis. Alias soluta mollitia temporibus
            similique ullam. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Dignissimos quae ab nemo similique ipsam iusto dolore illo
            quas, temporibus facilis eveniet minus nam corporis? Deserunt labore
            magnam doloremque incidunt facere?. <br /> elit. Soluta sunt
            perspiciatis laborum Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas soluta facere amet tenetur dolores, nemo
            sint, ipsa est, iste quam expedita. Nemo ullam perspiciatis,
            perspiciatis laborum ad distinctio quos praesentium consequatur
            cupiditate sit quis deserunt molestias, eius perferendis. Alias
            soluta mollitia temporibus similique ullam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dignissimos quae ab nemo
            similique ipsam iusto dolore illo quas, temporibus facilis
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpFaq;
