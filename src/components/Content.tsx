"use client";

import { useSectionContext } from "@/context/context";
import { useEffect, useRef } from "react";

const Content = () => {
  const { isContentVisible, setIsContentVisible } = useSectionContext();
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            setIsContentVisible(true);
          } else {
            setIsContentVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, setIsContentVisible]);

  return (
    <div
      ref={ref}
      className={`${isContentVisible ? " overflow-y-scroll " : ""}`}
    >
      <p className="w-full bg-orange-400 h-[80vh]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
        necessitatibus modi! Sapiente amet quae quasi ea vel, nobis tempora enim
        commodi voluptatum? Quas in aut nobis, nam quam facilis! Odit
        voluptatibus minima doloribus, aspernatur animi non sint quisquam ut
        debitis! Excepturi aliquam cupiditate delectus sit aperiam ex quisquam
        earum necessitatibus tempore, eos modi est! Cum facilis sapiente dolore
        aspernatur consectetur tempore aliquam. Accusamus ut enim aliquam
        laudantium molestias recusandae libero iste atque, delectus maxime in
        consequatur commodi sequi repellendus ipsa numquam omnis? Omnis sapiente
        labore repellat laudantium beatae sed doloremque rerum blanditiis quas
        possimus alias earum, autem recusandae qui? Provident, corporis fugit
        laudantium dignissimos ipsa voluptatum, ipsum culpa facere asperiores
        porro ipsam deleniti repudiandae laboriosam pariatur illo quaerat
        repellat libero incidunt aliquam nulla iste labore vero perferendis.
        Repellat fugiat dolore nesciunt est itaque quasi unde dolorem rem
        aliquam error. Dolorem fugit corporis necessitatibus fuga cum quos,
        alias maiores ut harum facere perspiciatis sapiente porro minus rem?
        Ratione voluptatibus corporis ut, illum reprehenderit necessitatibus est
        rem quod minus nam quae autem debitis eius modi fuga, impedit nesciunt
        in rerum illo cupiditate quam optio. Omnis atque nisi porro repudiandae
        facere reiciendis fugiat alias? Ad libero autem impedit dolor labore
        quos aliquid error. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ab, necessitatibus modi! Sapiente amet quae quasi ea vel, nobis
        tempora enim commodi voluptatum? Quas in aut nobis, nam quam facilis!
        Odit voluptatibus minima doloribus, aspernatur animi non sint quisquam
        ut debitis! Excepturi aliquam cupiditate delectus sit aperiam ex
        quisquam earum necessitatibus tempore, eos modi est! Cum facilis
        sapiente dolore aspernatur consectetur tempore aliquam. Accusamus ut
        enim aliquam laudantium molestias recusandae libero iste atque, delectus
        maxime in consequatur commodi sequi repellendus ipsa numquam omnis?
        Omnis sapiente labore repellat laudantium beatae sed doloremque rerum
        blanditiis quas possimus alias earum, autem recusandae qui? Provident,
        corporis fugit laudantium dignissimos ipsa voluptatum, ipsum culpa
        facere asperiores porro ipsam deleniti repudiandae laboriosam pariatur
        illo quaerat repellat libero incidunt aliquam nulla iste labore vero
        perferendis. Repellat fugiat dolore nesciunt est itaque quasi unde
        dolorem rem aliquam error. Dolorem fugit corporis necessitatibus fuga
        cum quos, alias maiores ut harum facere perspiciatis sapiente porro
        minus rem? Ratione voluptatibus corporis ut, illum reprehenderit
        necessitatibus est rem quod minus nam quae autem debitis eius modi fuga,
        impedit nesciunt in rerum illo cupiditate quam optio. Omnis atque nisi
        porro repudiandae facere reiciendis fugiat alias? Ad libero autem
        impedit dolor labore quos aliquid error.
      </p>
    </div>
  );
};

export default Content;
