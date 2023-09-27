import Section from "@/components/Section";
import { satoshiBold } from "@/components/utils/font";
import { Fragment } from "react";

const About = () => {
  return (
    <Section id={0}>
      <article>
        <Fragment>
          <h1 className={`${satoshiBold.className} text-3xl text-secondary`}>
            Monique McIntyre
          </h1>
          <p className="">Frontend Developer</p>
        </Fragment>
        <br></br>
        <Fragment>
          <p className={`opacity-50 text-sm`}>&#60;article&#62;</p>
          <p className="text-secondary pl-4">
            Ut integer phasellus in vel at in ultricies. <br></br> Non semper
            sed fermentum nunc tellus vitae porta ipsum fermentum. <br></br>{" "}
            <br></br>
            Convallis tellus aliquet morbi morbi leo quis tincidunt et commodo.
            Non consequat fusce sit molestie nec dis. At enim lacus scelerisque
            integer ac cursus consequat. Massa sed molestie dui varius suscipit
            in et neque. Viverra leo pharetra odio risus dictumst in. Leo
            gravida scelerisque enim varius sem.
          </p>
          <p className={`opacity-50 text-sm`}>&#60;&#47;article&#62;</p>
        </Fragment>
      </article>
    </Section>
  );
};

export default About;
