import { Box } from "../../utils/Box";
import { ContactItem } from "./ContactItem";
import { useSelector } from "react-redux";
export const Contacts = () => {
  const contactsList = useSelector((state) => state.contacts);
  const filterName = useSelector((state) => state.filter);

  const filterList = contactsList.filter((el) =>
    el.name.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <div>
      {contactsList.length === 0 ? (
        <Box
          p={4}
          width="250px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <b>{"Empty List".toUpperCase()}</b>
        </Box>
      ) : (
        <Box as="ul" width="250px">
          {filterList.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactItem>
          ))}
        </Box>
      )}
    </div>
  );
};
