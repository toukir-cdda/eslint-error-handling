"use client";
import FontSize from "@/components/FontSize";
import FontWeigth from "@/components/FontWeight";
import dynamic from "next/dynamic";
const HeadingTags = dynamic(() => import("../components/HeadingTags"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const DynamicHeader = dynamic(() => import("../components/DynamicHeader"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const DynamicHello = dynamic(
  () => import("../components/hello").then((res) => res.Hello),
  {
    ssr: false,
    loading: () => <p>Hello Loading...</p>,
  }
);

export default function Home() {
  const hellow = 0;

  const typographyComponentData = [
    {
      id: "1",
      tag: "div",
      componentType: "parent",
      styles: { backgroundColor: "lightgray" },
    },
    {
      id: "2",
      tag: "h1",
      componentType: "child",
      styles: { color: "blue" },
      parentId: "1",
      content: "hello h1",
    },
    {
      id: "3",
      tag: "h2",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h2",
    },
    {
      id: "4",
      tag: "h3",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h3",
    },
    {
      id: "5",
      tag: "h4",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h4",
    },
    {
      id: "6",
      tag: "h5",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h5",
    },
    {
      id: "7",
      tag: "h6",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h6",
    },
    {
      id: "8",
      tag: "div",
      componentType: "parent",
      styles: {
        backgroundColor: "gray",
        display: "flex",
      },
      // content: "hello div",
    },
    {
      id: "9",
      tag: "span",
      componentType: "child",
      styles: {},
      content: "child span",
      parentId: "8",
    },
    {
      id: "10",
      tag: "div",
      componentType: "parent",
      styles: {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      },
      // content: "child nested parent div",
    },
    {
      id: "11",
      tag: "span",
      componentType: "child",
      styles: { backgroundColor: "skyblue", width: "100%" },
      content: "child nested child span",
      parentId: "10",
    },
    {
      id: "12",
      tag: "span",
      componentType: "child",
      styles: { backgroundColor: "skyblue", width: "100%" },
      content: "child nested child span",
      parentId: "10",
    },
  ];

  const organizeComponents = (data) => {
    const organizedData = [];

    // Helper function to recursively find children for a given parentId
    const findChildren = (parentId) => {
      const children = [];
      for (const item of data) {
        if (item.parentId === parentId) {
          const childItem = { ...item, children: findChildren(item.id) };
          children.push(childItem);
        }
      }
      return children.length > 0 ? children : null;
    };

    for (const item of data) {
      if (!item.parentId) {
        const newItem = { ...item, children: findChildren(item.id) };
        organizedData.push(newItem);
      }
    }

    return organizedData;
  };

  // Modify the data
  const modifiedData = organizeComponents(typographyComponentData);

  // console.log(modifiedData);

  return (
    <>
      <TypographyComponent data={modifiedData} />
      <DynamicHeader />
      <DynamicHello />
      <HeadingTags />
      <FontSize />
      <FontWeigth />
    </>
  );
}

const TypographyComponent = ({ data }) => {
  const renderComponent = (component) => {
    const {
      id,
      tag: Tag,
      styles,
      componentType,
      content,
      children,
    } = component;
    // const Tag = tag;
    return (
      <div key={id}>
        {componentType === "parent" ? (
          <Tag style={styles}>
            {content && <Tag>{content}</Tag>}
            {children && children.map((child) => renderComponent(child))}
          </Tag>
        ) : (
          <Tag style={styles} onClick={() => console.log(component)}>
            {content}
          </Tag>
        )}
      </div>
    );
  };
  return <div>{data.map((component) => renderComponent(component))}</div>;
};
