import React, { useState } from "react";
import { menu } from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const MenuChildren = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentPath = usePathname();

  const handleOpen = (index: number) => {
    // Toggle the open state: open if currently closed, close if currently open
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {menu.map((item, index) => {
        const isOpen = openIndex === index;
        const icon = isOpen ? <IoChevronDownOutline /> : <IoChevronForward />;

        return (
          <section key={index}>
            {!item.children ? (
              <section>
                <Link
                  href={`${item.path}`}
                  className={`flex items-center gap-4 ${
                    currentPath === item.path
                      ? "bg-background rounded-3xl px-3 py-2 text-black"
                      : "text-background"
                  }`}
                >
                  <p className="text-xl">{item.icon}</p>
                  <p>{item.label}</p>
                </Link>
              </section>
            ) : (
              <section>
                <section
                  onClick={() => handleOpen(index)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <p>{item.icon}</p>
                    <p>{item.label}</p>
                  </div>
                  <div>
                    <p>{icon}</p>
                  </div>
                </section>
                {isOpen && (
                  <section className="py-4 pl-8 space-y-4">
                    {item.children.map((child, index) => (
                      <Link
                        key={index}
                        href={`${child.path}`}
                        className={`flex items-center gap-4 ${
                          currentPath === child.path
                            ? "bg-background rounded-3xl px-3 py-2 text-black"
                            : "text-background"
                        }`}
                      >
                        <p className="text-sm">{child.label}</p>
                      </Link>
                    ))}
                  </section>
                )}
              </section>
            )}
          </section>
        );
      })}
    </>
  );
};

export default MenuChildren;
